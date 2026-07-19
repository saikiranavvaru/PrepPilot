// ======================================================
// DATABASE CONFIGURATION
// ======================================================
//
// This file creates one reusable PostgreSQL connection
// pool for the entire PrepPilot backend.
//
// Other files can import this pool and execute queries
// without creating a new database connection each time.
//
// ======================================================


// ======================================================
// 1. IMPORT REQUIRED MODULE
// ======================================================

const { Pool } = require("pg");


// ======================================================
// 2. CREATE POSTGRESQL CONNECTION POOL
// ======================================================
//
// The connection values are loaded from the .env file.
//
// Environment variables are loaded before this file is
// imported inside index.js and test-db.js.
//

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});


// ======================================================
// 3. HANDLE UNEXPECTED POOL ERRORS
// ======================================================
//
// This event runs when an idle PostgreSQL connection
// inside the pool experiences an unexpected error.
//

pool.on("error", (error) => {
  console.error("❌ Unexpected PostgreSQL pool error:");
  console.error(error.message);
});


// ======================================================
// 4. EXPORT CONNECTION POOL
// ======================================================
//
// The same pool can now be imported inside controllers,
// system health checks and other backend files.
//

module.exports = pool;