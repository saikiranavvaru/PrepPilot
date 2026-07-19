// ======================================================
// DATABASE CONNECTION TEST
// ======================================================
//
// This file tests whether Node.js can successfully
// connect to the PrepPilot PostgreSQL database.
//
// Run this file using:
//
// node test-db.js
//
// This is a standalone testing file. It does not start
// the Express server.
//
// ======================================================


// ======================================================
// 1. LOAD ENVIRONMENT VARIABLES
// ======================================================
//
// Load variables from .env into process.env.
//
// This must happen before importing database.js because
// database.js uses the database environment variables.
//

require("dotenv").config();


// ======================================================
// 2. IMPORT DATABASE CONNECTION POOL
// ======================================================

const pool = require("./src/config/database");


// ======================================================
// 3. TEST DATABASE CONNECTION
// ======================================================

async function testDatabaseConnection() {
  try {
    // Execute a simple PostgreSQL query.
    //
    // current_database() returns the connected database.
    // current_user returns the PostgreSQL user.
    // NOW() returns the current PostgreSQL date and time.

    const result = await pool.query(`
      SELECT
        current_database() AS database_name,
        current_user AS database_user,
        NOW() AS database_time;
    `);

    const connectionDetails = result.rows[0];

    console.log("✅ PostgreSQL connected successfully!");
    console.log("Database:", connectionDetails.database_name);
    console.log("Database user:", connectionDetails.database_user);
    console.log("PostgreSQL time:", connectionDetails.database_time);
  } catch (error) {
    console.error("❌ PostgreSQL connection failed!");
    console.error("Reason:", error.message);

    // Marks the command as failed while still allowing
    // the finally block to close the connection pool.
    process.exitCode = 1;
  } finally {
    // This file only performs one connection test.
    //
    // Closing the pool allows the Node.js process to end
    // cleanly after the test is complete.
    await pool.end();
  }
}


// ======================================================
// 4. RUN DATABASE TEST
// ======================================================

testDatabaseConnection();