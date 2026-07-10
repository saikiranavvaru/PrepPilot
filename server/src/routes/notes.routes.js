const express = require("express");

const router = express.Router();

const {
    getAllNotes,
    getNoteById,
    createNote,
    deleteNote
} = require("../controllers/notes.controller");

router.get("/", getAllNotes);

router.get("/:id", getNoteById);

router.post("/", createNote);

router.delete("/:id", deleteNote);

module.exports = router;