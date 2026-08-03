// AUTHENTICATION ROUTES

// Defines authentication-related API endpoints.

// Mounted in index.js:
// app.use("/api/v1/auth", authRoutes);

// Available endpoint:
// POST /api/v1/auth/register

// Controller:
// src/controllers/auth.controller.js
// ======================================================

const express = require("express");

const {
  registerUser,
  loginUser,
} = require("../controllers/auth.controller");

const router = express.Router();

// ======================================================
// Authentication Endpoints

// Register a new PrepPilot user.
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;