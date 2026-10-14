const pool = require("../config/database");

const SESSION_QUESTION_LIMIT = 3;
const MINIMUM_ANSWER_LENGTH = 20;
const MAXIMUM_ANSWER_LENGTH = 10000;

function serializeTopic(row) {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    questionCount: Number(row.question_count || 0),
  };
}

function serializeQuestion(row) {
  return {
    id: row.id,
    interviewId: row.interview_id,
    position: Number(row.position),
    question: row.question_text,
    questionText: row.question_text,
    difficulty: row.difficulty,
  };
}

function serializeSessionQuestion(row) {
  return {
    ...serializeQuestion(row),
    answer: row.answer_text
      ? {
          text: row.answer_text,
          feedback: row.feedback,
          feedbackDetails: row.feedback_details || {},
          score: Number(row.score),
        }
      : null,
  };
}

function getUserId(req) {
  return req.user?.id || req.user?.userId || null;
}

function parsePositiveInteger(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : null;
}

function normalizeTopicSlug(value) {
  const slug = String(value || "").trim().toLowerCase();
  return /^[a-z0-9-]+$/.test(slug) ? slug : null;
}

function scoreAnswer(answerText, expectedConcepts = []) {
  const normalizedAnswer = answerText.toLowerCase();
  const words = answerText.trim().split(/\s+/).filter(Boolean);
  const concepts = Array.isArray(expectedConcepts) ? expectedConcepts : [];
  const matchedConcepts = concepts.filter((concept) =>
    normalizedAnswer.includes(String(concept).toLowerCase())
  );

  const conceptScore = concepts.length
    ? (matchedConcepts.length / concepts.length) * 60
    : 0;
  const depthScore = Math.min(words.length / 90, 1) * 30;
  const structureScore = /\b(because|for example|for instance|therefore|however)\b/i.test(
    answerText
  )
    ? 10
    : 0;
  const score = Math.max(
    0,
    Math.min(100, Math.round(conceptScore + depthScore + structureScore))
  );

  const feedbackDetails = {
    evaluationVersion: "keyword-rubric-v1",
    matchedConcepts,
    expectedConceptCount: concepts.length,
    wordCount: words.length,
    strengths:
      matchedConcepts.length > 0
        ? [`Covered: ${matchedConcepts.join(", ")}.`]
        : [],
    improvements: concepts
      .filter((concept) => !matchedConcepts.includes(concept))
      .slice(0, 3)
      .map((concept) => `Explain ${concept} more directly.`),
  };

  const feedback =
    matchedConcepts.length > 0
      ? `You covered ${matchedConcepts.length} of ${concepts.length} core concepts. Add a concrete example and address the remaining concepts to strengthen the answer.`
      : "Your response was saved. Explain the core technical concepts directly and add a concrete example to improve this answer.";

  return { score, feedback, feedbackDetails };
}

async function listInterviewTopics(_req, res) {
  try {
    const result = await pool.query(`
      SELECT
        topic.id,
        topic.slug,
        topic.name,
        topic.description,
        COUNT(question.id) FILTER (WHERE question.is_published = TRUE) AS question_count
      FROM practice_topics AS topic
      LEFT JOIN question_bank AS question
        ON question.practice_topic_id = topic.id
      GROUP BY topic.id, topic.slug, topic.name, topic.description
      ORDER BY topic.name ASC;
    `);

    return res.status(200).json({
      success: true,
      data: result.rows.map(serializeTopic),
    });
  } catch (error) {
    console.error("List interview topics error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to load practice topics",
    });
  }
}

async function getInterviewTopicBySlug(req, res) {
  const slug = normalizeTopicSlug(req.params.slug);

  if (!slug) {
    return res.status(400).json({
      success: false,
      message: "Invalid topic slug",
    });
  }

  try {
    const result = await pool.query(
      `
        SELECT
          topic.id,
          topic.slug,
          topic.name,
          topic.description,
          COUNT(question.id) FILTER (WHERE question.is_published = TRUE) AS question_count
        FROM practice_topics AS topic
        LEFT JOIN question_bank AS question
          ON question.practice_topic_id = topic.id
        WHERE topic.slug = $1
        GROUP BY topic.id, topic.slug, topic.name, topic.description;
      `,
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Practice topic not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: serializeTopic(result.rows[0]),
    });
  } catch (error) {
    console.error("Get interview topic error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to load practice topic",
    });
  }
}

async function listInterviewHistory(req, res) {
  const userId = getUserId(req);

  try {
    const result = await pool.query(
      `
        SELECT
          interview.id,
          interview.title,
          interview.score,
          interview.status,
          interview.completed_at,
          interview.created_at,
          topic.slug AS topic_slug,
          topic.name AS topic_name,
          COUNT(question.id) AS question_count,
          COUNT(answer.id) AS answered_count
        FROM interviews AS interview
        LEFT JOIN practice_topics AS topic
          ON topic.id = interview.practice_topic_id
        LEFT JOIN questions AS question
          ON question.interview_id = interview.id
        LEFT JOIN answers AS answer
          ON answer.question_id = question.id
        WHERE interview.user_id = $1
        GROUP BY interview.id, topic.slug, topic.name
        ORDER BY interview.created_at DESC;
      `,
      [userId]
    );

    return res.status(200).json({
      success: true,
      data: result.rows.map((row) => ({
        id: row.id,
        title: row.title,
        score: row.score === null ? null : Number(row.score),
        status: row.status,
        completedAt: row.completed_at,
        createdAt: row.created_at,
        topic: row.topic_slug
          ? { slug: row.topic_slug, name: row.topic_name }
          : null,
        questionCount: Number(row.question_count),
        answeredCount: Number(row.answered_count),
      })),
    });
  } catch (error) {
    console.error("List interview history error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to load interview history",
    });
  }
}

async function startInterview(req, res) {
  const userId = getUserId(req);
  const topicSlug = normalizeTopicSlug(req.body.topicSlug);

  if (!topicSlug) {
    return res.status(400).json({
      success: false,
      message: "A valid topicSlug is required to start a practice session",
    });
  }

  const requestedTitle = String(req.body.title || "").trim();
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const topicResult = await client.query(
      `
        SELECT id, slug, name, description
        FROM practice_topics
        WHERE slug = $1;
      `,
      [topicSlug]
    );

    if (topicResult.rows.length === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({
        success: false,
        message: "Practice topic not found",
      });
    }

    const topic = topicResult.rows[0];
    // Serializes concurrent start requests for the same user/topic pair.
    // This prevents new duplicates without changing or deleting legacy sessions.
    await client.query("SELECT pg_advisory_xact_lock($1, $2);", [userId, topic.id]);

    const activeSessionResult = await client.query(
      `
        SELECT id, title, status, created_at
        FROM interviews
        WHERE user_id = $1
          AND practice_topic_id = $2
          AND status = 'in_progress'
        ORDER BY updated_at DESC, created_at DESC, id DESC
        LIMIT 1
        FOR UPDATE;
      `,
      [userId, topic.id]
    );

    let interview = activeSessionResult.rows[0] || null;
    const resumed = Boolean(interview);

    const questionBankResult = await client.query(
      `
        SELECT id, prompt, difficulty
        FROM question_bank
        WHERE practice_topic_id = $1
          AND is_published = TRUE
        ORDER BY id ASC
        LIMIT $2;
      `,
      [topic.id, SESSION_QUESTION_LIMIT]
    );

    if (questionBankResult.rows.length < SESSION_QUESTION_LIMIT) {
      await client.query("ROLLBACK");
      return res.status(409).json({
        success: false,
        message: "This topic does not have enough published questions yet",
      });
    }

    if (!interview) {
      const title = requestedTitle.slice(0, 160) || `${topic.name} Practice`;
      const interviewResult = await client.query(
        `
          INSERT INTO interviews (user_id, practice_topic_id, title, status)
          VALUES ($1, $2, $3, 'in_progress')
          RETURNING id, title, status, created_at;
        `,
        [userId, topic.id, title]
      );
      interview = interviewResult.rows[0];
    }

    const existingQuestionsResult = await client.query(
      `SELECT id FROM questions WHERE interview_id = $1 LIMIT 1;`,
      [interview.id]
    );

    if (existingQuestionsResult.rows.length === 0) {
      for (const [index, question] of questionBankResult.rows.entries()) {
        await client.query(
          `
            INSERT INTO questions (
              interview_id,
              question_bank_id,
              question_text,
              difficulty,
              position
            )
            VALUES ($1, $2, $3, $4, $5);
          `,
          [
            interview.id,
            question.id,
            question.prompt,
            question.difficulty,
            index + 1,
          ]
        );
      }
    }

    const sessionQuestionsResult = await client.query(
      `
        SELECT
          question.id,
          question.interview_id,
          question.question_text,
          question.difficulty,
          question.position,
          answer.answer_text,
          answer.feedback,
          answer.feedback_details,
          answer.score
        FROM questions AS question
        LEFT JOIN answers AS answer
          ON answer.question_id = question.id
        WHERE question.interview_id = $1
        ORDER BY question.position ASC, question.id ASC;
      `,
      [interview.id]
    );

    await client.query("COMMIT");

    return res.status(201).json({
      success: true,
      data: {
        interview: {
          id: interview.id,
          title: interview.title,
          status: interview.status,
          createdAt: interview.created_at,
          topic: {
            slug: topic.slug,
            name: topic.name,
          },
        },
        resumed,
        questions: sessionQuestionsResult.rows.map(serializeSessionQuestion),
      },
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Start interview error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to initialize interview session",
    });
  } finally {
    client.release();
  }
}

async function getInterviewSession(req, res) {
  const userId = getUserId(req);
  const interviewId = parsePositiveInteger(req.params.id);

  if (!interviewId) {
    return res.status(400).json({ success: false, message: "Invalid interview ID" });
  }

  try {
    const interviewResult = await pool.query(
      `
        SELECT
          interview.id, interview.title, interview.status, interview.score,
          interview.created_at, interview.completed_at,
          topic.slug AS topic_slug, topic.name AS topic_name
        FROM interviews AS interview
        LEFT JOIN practice_topics AS topic ON topic.id = interview.practice_topic_id
        WHERE interview.id = $1 AND interview.user_id = $2;
      `,
      [interviewId, userId]
    );

    if (interviewResult.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Interview session not found" });
    }

    const questionsResult = await pool.query(
      `
        SELECT
          question.id, question.interview_id, question.question_text,
          question.difficulty, question.position,
          answer.answer_text, answer.feedback, answer.feedback_details, answer.score
        FROM questions AS question
        LEFT JOIN answers AS answer ON answer.question_id = question.id
        WHERE question.interview_id = $1
        ORDER BY question.position ASC, question.id ASC;
      `,
      [interviewId]
    );

    const interview = interviewResult.rows[0];
    return res.status(200).json({
      success: true,
      data: {
        interview: {
          id: interview.id,
          title: interview.title,
          status: interview.status,
          score: interview.score === null ? null : Number(interview.score),
          createdAt: interview.created_at,
          completedAt: interview.completed_at,
          topic: interview.topic_slug
            ? { slug: interview.topic_slug, name: interview.topic_name }
            : null,
        },
        questions: questionsResult.rows.map(serializeSessionQuestion),
      },
    });
  } catch (error) {
    console.error("Get interview session error:", error);
    return res.status(500).json({ success: false, message: "Failed to load interview session" });
  }
}

async function submitInterviewAnswer(req, res) {
  const userId = getUserId(req);
  const interviewId = parsePositiveInteger(req.params.id);
  const questionId = parsePositiveInteger(req.body.questionId);
  const answerText = String(req.body.answerText || "").trim();

  if (!interviewId || !questionId) {
    return res.status(400).json({
      success: false,
      message: "A valid interview ID and questionId are required",
    });
  }

  if (answerText.length < MINIMUM_ANSWER_LENGTH) {
    return res.status(400).json({
      success: false,
      message: `Please provide an answer of at least ${MINIMUM_ANSWER_LENGTH} characters`,
    });
  }

  if (answerText.length > MAXIMUM_ANSWER_LENGTH) {
    return res.status(400).json({
      success: false,
      message: `Answers cannot exceed ${MAXIMUM_ANSWER_LENGTH} characters`,
    });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const questionResult = await client.query(
      `
        SELECT interview.status, question.id, bank.expected_concepts
        FROM interviews AS interview
        JOIN questions AS question ON question.interview_id = interview.id
        LEFT JOIN question_bank AS bank ON bank.id = question.question_bank_id
        WHERE interview.id = $1
          AND interview.user_id = $2
          AND question.id = $3
        FOR UPDATE OF interview, question;
      `,
      [interviewId, userId, questionId]
    );

    if (questionResult.rows.length === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({
        success: false,
        message: "Question not found in this interview session",
      });
    }

    if (questionResult.rows[0].status !== "in_progress") {
      await client.query("ROLLBACK");
      return res.status(409).json({
        success: false,
        message: "This interview session is no longer accepting answers",
      });
    }

    const evaluation = scoreAnswer(answerText, questionResult.rows[0].expected_concepts);
    const result = await client.query(
      `
        INSERT INTO answers (
          question_id, answer_text, feedback, feedback_details, score
        )
        VALUES ($1, $2, $3, $4::jsonb, $5)
        ON CONFLICT (question_id)
        DO UPDATE SET
          answer_text = EXCLUDED.answer_text,
          feedback = EXCLUDED.feedback,
          feedback_details = EXCLUDED.feedback_details,
          score = EXCLUDED.score,
          updated_at = CURRENT_TIMESTAMP
        RETURNING id, question_id, feedback, feedback_details, score, created_at, updated_at;
      `,
      [
        questionId,
        answerText,
        evaluation.feedback,
        JSON.stringify(evaluation.feedbackDetails),
        evaluation.score,
      ]
    );

    await client.query(
      `
        UPDATE interviews
        SET updated_at = CURRENT_TIMESTAMP
        WHERE id = $1 AND user_id = $2;
      `,
      [interviewId, userId]
    );

    await client.query("COMMIT");

    const answer = result.rows[0];
    return res.status(200).json({
      success: true,
      message: "Answer submitted successfully",
      data: {
        interviewId,
        questionId: answer.question_id,
        score: Number(answer.score),
        feedback: answer.feedback,
        feedbackDetails: answer.feedback_details,
        updatedAt: answer.updated_at,
      },
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Submit interview answer error:", error);
    return res.status(500).json({ success: false, message: "Unable to save the answer" });
  } finally {
    client.release();
  }
}

async function completeInterview(req, res) {
  const userId = getUserId(req);
  const interviewId = parsePositiveInteger(req.params.id);

  if (!interviewId) {
    return res.status(400).json({ success: false, message: "Invalid interview ID" });
  }

  try {
    const sessionResult = await pool.query(
      `SELECT id, status FROM interviews WHERE id = $1 AND user_id = $2;`,
      [interviewId, userId]
    );

    if (sessionResult.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Interview session not found" });
    }

    if (sessionResult.rows[0].status === "completed") {
      return res.status(409).json({
        success: false,
        message: "This interview session has already been completed",
      });
    }

    const scoreResult = await pool.query(
      `
        SELECT
          COUNT(question.id) AS question_count,
          COUNT(answer.id) AS answered_count,
          AVG(answer.score) AS average_score
        FROM questions AS question
        LEFT JOIN answers AS answer ON answer.question_id = question.id
        WHERE question.interview_id = $1;
      `,
      [interviewId]
    );

    const scoreSummary = scoreResult.rows[0];
    const questionCount = Number(scoreSummary.question_count);
    const answeredCount = Number(scoreSummary.answered_count);

    if (questionCount === 0 || answeredCount === 0) {
      return res.status(409).json({
        success: false,
        message: "Submit at least one answer before completing this session",
      });
    }

    const finalScore = Math.round(Number(scoreSummary.average_score));
    const result = await pool.query(
      `
        UPDATE interviews
        SET score = $1, status = 'completed', completed_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $2 AND user_id = $3
        RETURNING id, title, score, status, completed_at, created_at;
      `,
      [finalScore, interviewId, userId]
    );

    const interview = result.rows[0];
    return res.status(200).json({
      success: true,
      message: "Interview session completed successfully",
      data: {
        interview: {
          id: interview.id,
          title: interview.title,
          score: Number(interview.score),
          status: interview.status,
          completedAt: interview.completed_at,
          createdAt: interview.created_at,
        },
        questionCount,
        answeredCount,
      },
    });
  } catch (error) {
    console.error("Complete interview error:", error);
    return res.status(500).json({ success: false, message: "Unable to complete the interview session" });
  }
}

module.exports = {
  listInterviewTopics,
  getInterviewTopicBySlug,
  listInterviewHistory,
  startInterview,
  getInterviewSession,
  submitInterviewAnswer,
  completeInterview,
};
