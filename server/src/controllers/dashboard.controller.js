const pool = require("../config/database");

function getUserId(req) {
  return req.user?.id || req.user?.userId || null;
}

function serializeSession(row) {
  const questionCount = Number(row.question_count || 0);
  const answeredCount = Number(row.answered_count || 0);

  return {
    id: row.id,
    title: row.title,
    status: row.status,
    score: row.score === null ? null : Number(row.score),
    createdAt: row.created_at,
    completedAt: row.completed_at,
    lastActivityAt: row.last_activity_at,
    questionCount,
    answeredCount,
    progressPercent: questionCount
      ? Math.round((answeredCount / questionCount) * 100)
      : 0,
    topic: row.topic_slug
      ? { slug: row.topic_slug, name: row.topic_name }
      : null,
  };
}

async function getDashboard(req, res) {
  const userId = getUserId(req);

  try {
    const [summaryResult, activeSessionResult, recentSessionsResult, recommendationsResult] =
      await Promise.all([
        pool.query(
          `
            SELECT
              COUNT(*) FILTER (WHERE status = 'completed') AS completed_sessions,
              COUNT(DISTINCT COALESCE(practice_topic_id, -id))
                FILTER (WHERE status = 'in_progress') AS active_sessions,
              COALESCE(
                ROUND(AVG(score) FILTER (WHERE status = 'completed')),
                0
              ) AS average_score
            FROM interviews
            WHERE user_id = $1;
          `,
          [userId]
        ),
        pool.query(
          `
            SELECT
              interview.id,
              interview.title,
              interview.status,
              interview.score,
              interview.created_at,
              interview.completed_at,
              topic.slug AS topic_slug,
              topic.name AS topic_name,
              COUNT(question.id) AS question_count,
              COUNT(answer.id) AS answered_count,
              COALESCE(MAX(answer.updated_at), interview.updated_at, interview.created_at)
                AS last_activity_at
            FROM interviews AS interview
            LEFT JOIN practice_topics AS topic
              ON topic.id = interview.practice_topic_id
            LEFT JOIN questions AS question
              ON question.interview_id = interview.id
            LEFT JOIN answers AS answer
              ON answer.question_id = question.id
            WHERE interview.user_id = $1
              AND interview.status = 'in_progress'
            GROUP BY interview.id, topic.slug, topic.name
            ORDER BY last_activity_at DESC, interview.id DESC
            LIMIT 1;
          `,
          [userId]
        ),
        pool.query(
          `
            SELECT
              interview.id,
              interview.title,
              interview.status,
              interview.score,
              interview.created_at,
              interview.completed_at,
              topic.slug AS topic_slug,
              topic.name AS topic_name,
              COUNT(question.id) AS question_count,
              COUNT(answer.id) AS answered_count,
              COALESCE(MAX(answer.updated_at), interview.updated_at, interview.created_at)
                AS last_activity_at
            FROM interviews AS interview
            LEFT JOIN practice_topics AS topic
              ON topic.id = interview.practice_topic_id
            LEFT JOIN questions AS question
              ON question.interview_id = interview.id
            LEFT JOIN answers AS answer
              ON answer.question_id = question.id
            WHERE interview.user_id = $1
            GROUP BY interview.id, topic.slug, topic.name
            ORDER BY last_activity_at DESC, interview.id DESC
            LIMIT 5;
          `,
          [userId]
        ),
        pool.query(
          `
            WITH question_counts AS (
              SELECT practice_topic_id, COUNT(*) AS question_count
              FROM question_bank
              WHERE is_published = TRUE
              GROUP BY practice_topic_id
            ),
            user_topic_performance AS (
              SELECT
                practice_topic_id,
                COUNT(*) FILTER (WHERE status = 'completed') AS completed_sessions,
                AVG(score) FILTER (WHERE status = 'completed') AS average_score
              FROM interviews
              WHERE user_id = $1
                AND practice_topic_id IS NOT NULL
              GROUP BY practice_topic_id
            )
            SELECT
              topic.slug,
              topic.name,
              topic.description,
              COALESCE(question_counts.question_count, 0) AS question_count,
              COALESCE(performance.completed_sessions, 0) AS completed_sessions,
              performance.average_score
            FROM practice_topics AS topic
            LEFT JOIN question_counts
              ON question_counts.practice_topic_id = topic.id
            LEFT JOIN user_topic_performance AS performance
              ON performance.practice_topic_id = topic.id
            WHERE COALESCE(question_counts.question_count, 0) > 0
            ORDER BY
              CASE WHEN COALESCE(performance.completed_sessions, 0) = 0 THEN 0 ELSE 1 END,
              performance.average_score ASC NULLS FIRST,
              topic.name ASC
            LIMIT 2;
          `,
          [userId]
        ),
      ]);

    const summary = summaryResult.rows[0];

    return res.status(200).json({
      success: true,
      data: {
        summary: {
          completedSessions: Number(summary.completed_sessions),
          activeSessions: Number(summary.active_sessions),
          averageScore: Number(summary.average_score),
        },
        continueSession: activeSessionResult.rows[0]
          ? serializeSession(activeSessionResult.rows[0])
          : null,
        recentSessions: recentSessionsResult.rows.map(serializeSession),
        recommendedTopics: recommendationsResult.rows.map((topic) => ({
          slug: topic.slug,
          name: topic.name,
          description: topic.description,
          questionCount: Number(topic.question_count),
          reason:
            Number(topic.completed_sessions) === 0
              ? "A fresh area to explore"
              : "A useful area to strengthen",
        })),
      },
    });
  } catch (error) {
    console.error("Get dashboard error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to load your dashboard right now",
    });
  }
}

module.exports = {
  getDashboard,
};
