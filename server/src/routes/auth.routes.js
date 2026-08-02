// ======================================================
// AUTHENTICATION ROUTES
// ======================================================
//
// Mounted in index.js:
//
// app.use("/api/v1/auth", authRoutes);
//
// Current endpoint:
//
// POST /api/v1/auth/register
//
// ======================================================

const express = require("express");

const {
  registerUser,
} = require("../controllers/auth.controller");

const router = express.Router();


// Register a new PrepPilot user.
router.post("/register", registerUser);


module.exports = router;