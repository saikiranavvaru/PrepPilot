const express = require("express");

const { authenticateUser } = require("../middleware/auth.middleware");
const {
  completeInterview,
  getInterviewSession,
  getInterviewTopicBySlug,
  listInterviewHistory,
  listInterviewTopics,
  startInterview,
  submitInterviewAnswer,
} = require("../controllers/interview.controller");

const router = express.Router();

// Practice catalog
router.get("/topics", authenticateUser, listInterviewTopics);
router.get("/topics/:slug", authenticateUser, getInterviewTopicBySlug);

// Interview sessions
router.get("/history", authenticateUser, listInterviewHistory);
router.post("/start", authenticateUser, startInterview);
router.get("/:id", authenticateUser, getInterviewSession);
router.post("/:id/answers", authenticateUser, submitInterviewAnswer);
router.post("/:id/complete", authenticateUser, completeInterview);

module.exports = router;
