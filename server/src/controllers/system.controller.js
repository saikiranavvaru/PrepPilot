// System Controller

// Handles system-related requests such as API information and health monitoring.
// ======================================================

const pool = require("../config/database");
const { version } = require("../../package.json");

// Return basic information about the API.
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

// Return the current application health.
function getApplicationHealth(req, res) {
  return res.status(200).json({
    success: true,
    status: "healthy",
    data: {
      service: process.env.APP_NAME || "PrepPilot API",

      // Number of seconds the application has been running.
      uptimeSeconds: Math.floor(process.uptime()),

      // Current server time.
      timestamp: new Date().toISOString(),
    },
  });
}

// Check whether PostgreSQL is available.
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

    // Return 503 when the database is unavailable.
    return res.status(503).json({
      success: false,
      status: "unhealthy",
      message: "PostgreSQL is currently unavailable",
    });
  }
}

module.exports = {
  getApiInformation,
  getApplicationHealth,
  getDatabaseHealth,
};