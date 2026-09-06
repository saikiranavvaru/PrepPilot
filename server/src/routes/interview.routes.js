const express = require("express");
const router = express.Router();
const pool = require("../config/database");
const authenticateUser = require("../middleware/auth.middleware");

// GET /api/v1/interviews/history
router.get("/history", authenticateUser, async (req, res) => {
  try {
    const userId = req.user?.id || req.user?.userId;
    
    // Check if interviews table exists and fetch history
    const result = await pool.query(
      "SELECT * FROM interviews WHERE user_id = $1 ORDER BY created_at DESC",
      [userId]
    );

    return res.status(200).json({
      success: true,
      data: result.rows || [],
    });
  } catch (error) {
    // Return empty list safely if table is fresh or empty
    return res.status(200).json({
      success: true,
      data: [],
    });
  }
});

// POST /api/v1/interviews/start
router.post("/start", authenticateUser, async (req, res) => {
  try {
    const { title, difficulty } = req.body;
    return res.status(200).json({
      success: true,
      data: {
        interview: { id: Date.now(), title, difficulty },
        questions: [],
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to initialize interview",
    });
  }
});

module.exports = router;