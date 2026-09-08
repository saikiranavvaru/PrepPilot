require("dotenv").config();

const pool = require("../config/database");

async function migrateResumeMetadata() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    await client.query(`ALTER TABLE resumes ADD COLUMN IF NOT EXISTS file_name VARCHAR(255);`);
    await client.query(`ALTER TABLE resumes ADD COLUMN IF NOT EXISTS mime_type VARCHAR(100);`);
    await client.query(`ALTER TABLE resumes ADD COLUMN IF NOT EXISTS file_size INTEGER;`);
    await client.query("COMMIT");
    console.log("Resume metadata migration completed successfully.");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Resume metadata migration failed:", error.message);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

migrateResumeMetadata();
