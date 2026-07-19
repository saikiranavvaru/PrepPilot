// ======================================================
// USERS ROUTES
// ======================================================
//
// Defines routes for reading PrepPilot user information.
//
// Mounted at:
// /api/v1/users
//
// These routes should be protected with authentication
// and authorization during Module 4.
//

const express = require("express");

const {
  getAllUsers,
  getUserById,
} = require("../controllers/users.controller");

const router = express.Router();

// ======================================================
// READ USERS
// ======================================================

// GET /api/v1/users?page=1&limit=20
router.get("/", getAllUsers);

// GET /api/v1/users/:id
router.get("/:id", getUserById);

module.exports = router;