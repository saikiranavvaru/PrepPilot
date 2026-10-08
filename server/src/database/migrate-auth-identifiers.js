require("dotenv").config();

const pool = require("../config/database");

async function migrateAuthIdentifiers() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    await client.query("ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(20);");
    await client.query("ALTER TABLE users ALTER COLUMN email DROP NOT NULL;");
    await client.query(
      "CREATE UNIQUE INDEX IF NOT EXISTS users_phone_unique ON users(phone) WHERE phone IS NOT NULL;"
    );
    await client.query("COMMIT");
    console.log("Authentication identifier migration completed successfully.");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Authentication identifier migration failed:", error.message);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

migrateAuthIdentifiers();
