// Database Configuration

// Creates a reusable PostgreSQL connection pool for the PrepPilot backend.
// ======================================================

const { Pool } = require("pg");

// Create the PostgreSQL connection pool.
// Database credentials are loaded from environment variables.
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Listen for unexpected errors from idle database connections.
pool.on("error", (error) => {
  console.error("❌ Unexpected PostgreSQL pool error:");
  console.error(error.message);
});

// Export the shared connection pool so it can be reused across the entire application.
module.exports = pool;