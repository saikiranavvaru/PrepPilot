const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("🏠 Welcome to PrepPilot Backend");
});

// Health Check Route
app.get("/health", (req, res) => {
    res.json({
        status: "Server is running",
        uptime: "Healthy"
    });
});

// Login Route
app.post("/login", (req, res) => {
    res.send("🔐 Login API");
});

// Register Route
app.post("/register", (req, res) => {
    res.send("📝 Register API");
});

// Profile Route
app.get("/profile", (req, res) => {
    res.send("👤 User Profile");
});

// About Route
app.get("/about", (req, res) => {
    res.send("📘 PrepPilot is an AI Interview Preparation Platform.")
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

app.get("/students/:id", (req, res) => {

    res.send(`Student ID: ${req.params.id}`);

});

app.get("/courses/:courseId", (req, res) => {
    res.send(`Course ID: ${req.params.courseId}`);
});