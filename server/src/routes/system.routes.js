// System Routes

// Defines system-level API endpoints.

// Mounted in index.js:
// app.use("/", systemRoutes);

// Available endpoints:
// GET /
// GET /health
// GET /health/database

// Controller:
// src/controllers/system.controller.js
// ======================================================

const express = require("express");

const {
  getApiInformation,
  getApplicationHealth,
  getDatabaseHealth,
} = require("../controllers/system.controller");

const router = express.Router();

// ======================================================
// System Endpoints

// API information
router.get("/", getApiInformation);

// Application health check
router.get("/health", getApplicationHealth);

// PostgreSQL connectivity check
router.get("/health/database", getDatabaseHealth);

module.exports = router;