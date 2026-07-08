const express = require("express");

const app = express();

app.use(express.json());

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
    res.send("📘 PrepPilot is an AI Interview Preparation Platform.");
});

// Student Route
app.get("/students/:id", (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

// Course Route
app.get("/courses/:courseId", (req, res) => {
    res.send(`Course ID: ${req.params.courseId}`);
});

// Temporary in-memory data for learning REST APIs
const books = [
    {
        id: 1,
        title: "Clean Code"
    },
    {
        id: 2,
        title: "Atomic Habits"
    },
    {
        id: 3,
        title: "The Pragmatic Programmer"
    }
];

app.get("/books", (req, res) => {

    res.status(200).json({
        success: true,
        data: books
    });

});

app.get("/books/:id", (req, res) => {

    const bookId = Number(req.params.id);

    const book = books.find((b) => b.id === bookId);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    res.status(200).json({
        success: true,
        data: book
    });

});

app.post("/books", (req, res) => {

    const newBook = req.body;

    res.status(201).json({
        success: true,
        data: newBook
    });

});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});