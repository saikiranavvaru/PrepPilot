// ======================================================
// PREPPILOT API ENTRY POINT
// ======================================================
//
// Responsibilities:
//
// 1. Load environment variables
// 2. Create the Express application
// 3. Configure global middleware
// 4. Mount application routes
// 5. Handle unknown routes
// 6. Verify the PostgreSQL connection
// 7. Start and safely stop the server
//
// Feature-specific request logic belongs inside
// controllers, not inside this file.
//
// ======================================================


// ======================================================
// 1. LOAD ENVIRONMENT VARIABLES
// ======================================================
//
// Load variables from server/.env into process.env.
//
// This must run before importing database.js because
// database.js uses the PostgreSQL environment variables.
//

require("dotenv").config();


// ======================================================
// 2. IMPORT REQUIRED MODULES
// ======================================================

const express = require("express");

// Shared PostgreSQL connection pool.
const pool = require("./src/config/database");

// Application route files.
const systemRoutes = require("./src/routes/system.routes");
const usersRoutes = require("./src/routes/users.routes");


// ======================================================
// 3. CREATE EXPRESS APPLICATION
// ======================================================

const app = express();

// Use PORT from .env.
// Fall back to port 3000 when PORT is unavailable.
const PORT = Number(process.env.PORT) || 3000;


// ======================================================
// 4. APPLICATION SETTINGS
// ======================================================
//
// Express normally includes:
//
// X-Powered-By: Express
//
// Disabling it avoids unnecessarily exposing the
// backend technology used by the application.
//

app.disable("x-powered-by");


// ======================================================
// 5. GLOBAL MIDDLEWARE
// ======================================================
//
// Converts incoming JSON request bodies into JavaScript
// objects available through req.body.
//
// The size limit prevents unexpectedly large JSON
// request bodies.
//

app.use(
  express.json({
    limit: "100kb",
  })
);


// ======================================================
// 6. MOUNT APPLICATION ROUTES
// ======================================================
//
// System routes:
//
// GET /
// GET /health
// GET /health/database
//

app.use("/", systemRoutes);

//
// User routes:
//
// GET /api/v1/users
// GET /api/v1/users/:id
//

app.use("/api/v1/users", usersRoutes);


// ======================================================
// 7. HANDLE UNKNOWN ROUTES
// ======================================================
//
// This runs only when no route above matches the request.
//
// Example:
//
// GET /api/v1/unknown
//

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});


// ======================================================
// 8. START APPLICATION
// ======================================================

// Store the HTTP server instance so it can later be
// closed safely during application shutdown.
let server;

// Prevent the shutdown process from running more than once.
let isShuttingDown = false;

async function startServer() {
  try {
    // Verify PostgreSQL before accepting HTTP requests.
    //
    // SELECT 1 is a small query commonly used to check
    // whether the database connection is working.
    await pool.query("SELECT 1");

    console.log("🐘 PostgreSQL connected successfully");

    server = app.listen(PORT, () => {
      console.log(
        `🚀 PrepPilot API running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error("❌ PrepPilot could not connect to PostgreSQL");
    console.error("Reason:", error.message);

    // Stop the application because PrepPilot currently
    // depends on PostgreSQL to work correctly.
    process.exit(1);
  }
}


// ======================================================
// 9. GRACEFUL SHUTDOWN
// ======================================================
//
// Graceful shutdown allows the HTTP server and database
// pool to close properly instead of stopping suddenly.
//
// SIGINT:
// Usually triggered when Ctrl + C is pressed.
//
// SIGTERM:
// Usually sent by a hosting platform when stopping
// or restarting the application.
//

async function shutdown(signal) {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;

  console.log(
    `\n🛑 ${signal} received. Shutting down PrepPilot...`
  );

  try {
    // Stop accepting new HTTP requests.
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve();
        });
      });
    }

    // Close all PostgreSQL connections in the pool.
    await pool.end();

    console.log(
      "✅ HTTP server and PostgreSQL pool closed successfully"
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Error while shutting down PrepPilot");
    console.error("Reason:", error.message);

    process.exit(1);
  }
}


// ======================================================
// 10. LISTEN FOR SHUTDOWN SIGNALS
// ======================================================

process.on("SIGINT", () => {
  shutdown("SIGINT");
});

process.on("SIGTERM", () => {
  shutdown("SIGTERM");
});


// ======================================================
// 11. RUN THE APPLICATION
// ======================================================

startServer();