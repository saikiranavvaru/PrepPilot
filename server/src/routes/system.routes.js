// ======================================================
// SYSTEM ROUTES
// ======================================================
//
// This file defines system-level routes for PrepPilot.
//
// Mounted in index.js at:
//
// app.use("/", systemRoutes);
//
// Final endpoints:
//
// GET /
// GET /health
// GET /health/database
//
// The actual request-handling logic is kept inside:
//
// src/controllers/system.controller.js
//
// ======================================================


// ======================================================
// 1. IMPORT REQUIRED MODULES
// ======================================================

const express = require("express");


// ======================================================
// 2. IMPORT CONTROLLER FUNCTIONS
// ======================================================

const {
  getApiInformation,
  getApplicationHealth,
  getDatabaseHealth,
} = require("../controllers/system.controller");


// ======================================================
// 3. CREATE EXPRESS ROUTER
// ======================================================

const router = express.Router();


// ======================================================
// 4. API INFORMATION ROUTE
// ======================================================

// Returns basic information about the PrepPilot API.
//
// Endpoint:
// GET /
router.get("/", getApiInformation);


// ======================================================
// 5. APPLICATION HEALTH ROUTE
// ======================================================

// Checks whether the Express application is running.
//
// Endpoint:
// GET /health
router.get("/health", getApplicationHealth);


// ======================================================
// 6. DATABASE HEALTH ROUTE
// ======================================================

// Checks whether PrepPilot can communicate with PostgreSQL.
//
// Endpoint:
// GET /health/database
router.get("/health/database", getDatabaseHealth);


// ======================================================
// 7. EXPORT ROUTER
// ======================================================

module.exports = router;