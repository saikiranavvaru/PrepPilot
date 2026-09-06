// Database Configuration
// Creates a reusable PostgreSQL connection pool for the PrepPilot backend.
// ======================================================
const { Pool } = require("pg");

// Create the PostgreSQL connection pool.
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // Enable SSL for Neon Cloud Database in production
  ssl:
    process.env.NODE_ENV === "production" || process.env.DB_SSL === "true"
      ? { rejectUnauthorized: false }
      : false,
});

// Listen for unexpected errors from idle database connections.
pool.on("error", (error) => {
  console.error("  Unexpected PostgreSQL pool error:");
  console.error(error.message);
});

// Export the shared connection pool
module.exports = pool;