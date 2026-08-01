// Database Connection Test

// Verifies that the application can connect to the PostgreSQL database.
// ======================================================

require("dotenv").config();

const pool = require("./src/config/database");

// Test the database connection.
async function testDatabaseConnection() {
  try {
    // Execute a simple query to verify the connection.
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

    // Exit with a failure status code.
    process.exitCode = 1;
  } finally {
    // Close the connection pool before exiting.
    await pool.end();
  }
}

// Run the connection test.
testDatabaseConnection();