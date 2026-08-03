//User Routes

// Defines user-related API endpoints.

// Mounted in index.js: 
// app.use("/api/v1/users", userRoutes);

// Available endpoints:
// GET /api/v1/users
// GET /api/v1/users/:id

// Controller:
// src/controllers/users.controller.js
// ======================================================

const express = require("express");

const {
  getAllUsers,
  getUserById,
} = require("../controllers/users.controller");

const router = express.Router();

// ======================================================
// User Endpoints

// Get all users
router.get("/", getAllUsers);

// Get a user by ID
router.get("/:id", getUserById);

module.exports = router;