// ======================================================
// PREPPILOT API ENTRY POINT
// ======================================================

require("dotenv").config();

// ======================================================
// IMPORT REQUIRED MODULES
// ======================================================

const express = require("express");
const cors = require("cors");

// Shared PostgreSQL connection pool.
const pool = require("./src/config/database");

// Initialize mail service.
require("./src/utils/mail");

// Application route files.
const systemRoutes = require("./src/routes/system.routes");
const usersRoutes = require("./src/routes/users.routes");
const authRoutes = require("./src/routes/auth.routes");
const interviewRoutes = require("./src/routes/interview.routes");
const resumeRoutes = require("./src/routes/resume.routes");

// ======================================================
// CREATE EXPRESS APPLICATION & CORS CONFIG
// ======================================================

const app = express();

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Use PORT from .env.
const PORT = Number(process.env.PORT) || 10000;

app.disable("x-powered-by");

// ======================================================
// GLOBAL MIDDLEWARE
// ======================================================

app.use(
  express.json({
    limit: "100kb",
  })
);

// ======================================================
// MOUNT APPLICATION ROUTES
// ======================================================

app.use("/", systemRoutes);
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/interviews", interviewRoutes);
app.use("/api/v1/resumes", resumeRoutes);

// ======================================================
// HANDLE UNKNOWN ROUTES
// ======================================================

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// ======================================================
// START APPLICATION
// ======================================================

let server;
let isShuttingDown = false;

async function startServer() {
  try {
    await pool.query("SELECT 1");
    console.log("🐘 PostgreSQL connected successfully");

    server = app.listen(PORT, () => {
      console.log(`🚀 PrepPilot API running at port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ PrepPilot could not connect to PostgreSQL");
    console.error("Reason:", error.message);
    process.exit(1);
  }
}

// ======================================================
// GRACEFUL SHUTDOWN
// ======================================================

async function shutdown(signal) {
  if (isShuttingDown) return;
  isShuttingDown = true;

  console.log(`\n🛑 ${signal} received. Shutting down PrepPilot...`);

  try {
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) return reject(error);
          resolve();
        });
      });
    }

    await pool.end();
    console.log("✅ HTTP server and PostgreSQL pool closed successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error while shutting down PrepPilot");
    console.error("Reason:", error.message);
    process.exit(1);
  }
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

startServer();
