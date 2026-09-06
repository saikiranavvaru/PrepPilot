const express = require("express");
const router = express.Router();
const pool = require("../config/database");
const { authenticateUser } = require("../middleware/auth.middleware");

// Seed question pool for new interview sessions
const SEED_QUESTIONS = [
  {
    text: "Can you explain the difference between synchronous and asynchronous programming in JavaScript?",
    difficulty: "Medium",
  },
  {
    text: "What are React hooks, and what problems do they solve compared to class components?",
    difficulty: "Medium",
  },
  {
    text: "How does indexing improve PostgreSQL query performance, and what are its trade-offs?",
    difficulty: "Hard",
  },
];

// ======================================================
// GET /api/v1/interviews/history
// Returns all interview sessions for the logged-in user
// ======================================================
router.get("/history", authenticateUser, async (req, res) => {
  try {
    const userId = req.user?.id || req.user?.userId;

    const result = await pool.query(
      `
        SELECT 
          id,
          title,
          score,
          completed_at,
          created_at
        FROM interviews 
        WHERE user_id = $1 
        ORDER BY created_at DESC;
      `,
      [userId]
    );

    return res.status(200).json({
      success: true,
      data: result.rows || [],
    });
  } catch (error) {
    console.error("Fetch interview history error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch interview history",
    });
  }
});

// ======================================================
// POST /api/v1/interviews/start
// Creates an interview record and populates associated questions
// ======================================================
router.post("/start", authenticateUser, async (req, res) => {
  const client = await pool.connect();

  try {
    const userId = req.user?.id || req.user?.userId;
    const { title, difficulty } = req.body;

    await client.query("BEGIN");

    // 1. Insert new interview session
    const interviewResult = await client.query(
      `
        INSERT INTO interviews (user_id, title)
        VALUES ($1, $2)
        RETURNING id, user_id, title, score, created_at;
      `,
      [userId, title || "Technical Practice Interview"]
    );

    const interview = interviewResult.rows[0];

    // 2. Insert questions linked to this interview session
    const questions = [];
    for (const q of SEED_QUESTIONS) {
      const questionResult = await client.query(
        `
          INSERT INTO questions (interview_id, question_text, difficulty)
          VALUES ($1, $2, $3)
          RETURNING id, interview_id, question_text AS question, difficulty;
        `,
        [interview.id, q.text, difficulty || q.difficulty]
      );
      questions.push(questionResult.rows[0]);
    }

    await client.query("COMMIT");

    return res.status(201).json({
      success: true,
      data: {
        interview: {
          id: interview.id,
          title: interview.title,
          difficulty: difficulty || "Medium",
          status: "in_progress",
        },
        questions,
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
});

// ======================================================
// POST /api/v1/interviews/:id/answers
// Saves user response, generated score, and feedback into answers table
// ======================================================
router.post("/:id/answers", authenticateUser, async (req, res) => {
  try {
    const { id: interviewId } = req.params;

    // Accept both camelCase and snake_case payload naming
    const questionId =
      req.body.questionId || req.body.question_id || req.body.id;
    const answerText =
      req.body.answer || req.body.answer_text || req.body.userAnswer || req.body.text;

    if (!questionId || !answerText) {
      return res.status(400).json({
        success: false,
        message: "Question ID and answer content are required",
      });
    }

    // Baseline heuristic/mock score and evaluation (ready for AI evaluation)
    const score = 85.0;
    const feedback = "Clear and structured explanation covering core principles.";

    // Upsert into answers table (handles UNIQUE constraint on question_id)
    const result = await pool.query(
      `
        INSERT INTO answers (question_id, answer_text, feedback, score)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (question_id) 
        DO UPDATE SET
          answer_text = EXCLUDED.answer_text,
          feedback = EXCLUDED.feedback,
          score = EXCLUDED.score,
          created_at = CURRENT_TIMESTAMP
        RETURNING id, question_id, answer_text, feedback, score, created_at;
      `,
      [questionId, answerText, feedback, score]
    );

    return res.status(200).json({
      success: true,
      message: "Answer submitted successfully",
      data: {
        interviewId,
        questionId,
        score: parseFloat(result.rows[0].score),
        feedback: result.rows[0].feedback,
      },
    });
  } catch (error) {
    console.error("Submit answer error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to save submitted answer",
    });
  }
});

// ======================================================
// POST /api/v1/interviews/:id/complete
// Computes session final score and marks the interview completed
// ======================================================
router.post("/:id/complete", authenticateUser, async (req, res) => {
  try {
    const { id: interviewId } = req.params;
    const { score } = req.body;

    // If score not supplied in payload, calculate average from answers table
    let finalScore = score;
    if (finalScore === undefined || finalScore === null) {
      const avgResult = await pool.query(
        `
          SELECT COALESCE(AVG(a.score), 80) AS avg_score
          FROM answers a
          JOIN questions q ON q.id = a.question_id
          WHERE q.interview_id = $1;
        `,
        [interviewId]
      );
      finalScore = parseFloat(avgResult.rows[0]?.avg_score || 80);
    }

    const result = await pool.query(
      `
        UPDATE interviews
        SET 
          score = $1,
          completed_at = CURRENT_TIMESTAMP
        WHERE id = $2
        RETURNING id, user_id, title, score, completed_at, created_at;
      `,
      [finalScore, interviewId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Interview session not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Interview session completed successfully",
      data: {
        interview: result.rows[0],
        status: "completed",
        feedback: "Session completed. Solid responses across tested domains.",
      },
    });
  } catch (error) {
    console.error("Complete interview error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to complete interview session",
    });
  }
});

module.exports = router;