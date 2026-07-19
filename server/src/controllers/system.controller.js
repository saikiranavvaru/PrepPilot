// ======================================================
// SYSTEM CONTROLLER
// ======================================================
//
// Handles system-level endpoints for PrepPilot.
//
// Current endpoints:
//
// GET /
// GET /health
// GET /health/database
//
// Responsibilities:
//
// 1. Return basic API information
// 2. Report whether the Express application is running
// 3. Check whether PostgreSQL is available
//
// ======================================================


// ======================================================
// 1. IMPORT REQUIRED MODULES
// ======================================================

// Import the shared PostgreSQL connection pool.
const pool = require("../config/database");

// Read the application version from package.json.
const { version } = require("../../package.json");


// ======================================================
// 2. GET API INFORMATION
// ======================================================
//
// Endpoint:
//
// GET /
//
// Purpose:
//
// Returns basic public information about the PrepPilot API.
//

function getApiInformation(req, res) {
  return res.status(200).json({
    success: true,
    data: {
      name: process.env.APP_NAME || "PrepPilot API",
      version,
      message: "Welcome to the PrepPilot API",
    },
  });
}


// ======================================================
// 3. GET APPLICATION HEALTH
// ======================================================
//
// Endpoint:
//
// GET /health
//
// Purpose:
//
// Confirms that the Node.js and Express application
// is running successfully.
//

function getApplicationHealth(req, res) {
  return res.status(200).json({
    success: true,
    status: "healthy",
    data: {
      service: process.env.APP_NAME || "PrepPilot API",

      // Number of seconds the Node.js process has
      // been running.
      uptimeSeconds: Math.floor(process.uptime()),

      // Current server timestamp.
      timestamp: new Date().toISOString(),
    },
  });
}


// ======================================================
// 4. GET DATABASE HEALTH
// ======================================================
//
// Endpoint:
//
// GET /health/database
//
// Purpose:
//
// Checks whether PrepPilot can communicate with
// PostgreSQL.
//

async function getDatabaseHealth(req, res) {
  try {
    const result = await pool.query(`
      SELECT
        NOW() AS database_time,
        current_database() AS database_name;
    `);

    return res.status(200).json({
      success: true,
      status: "healthy",
      message: "PostgreSQL connection is healthy",
      data: {
        databaseName: result.rows[0].database_name,
        databaseTime: result.rows[0].database_time,
      },
    });
  } catch (error) {
    console.error("Database health-check error:", error);

    // HTTP 503 means the Express server is running,
    // but an important dependency is unavailable.
    return res.status(503).json({
      success: false,
      status: "unhealthy",
      message: "PostgreSQL is currently unavailable",
    });
  }
}


// ======================================================
// 5. EXPORT CONTROLLER FUNCTIONS
// ======================================================

module.exports = {
  getApiInformation,
  getApplicationHealth,
  getDatabaseHealth,
};