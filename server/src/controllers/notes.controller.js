let notes = [
    {
        id: 1,
        title: "Learn Express",
        description: "Understand routing and middleware"
    },
    {
        id: 2,
        title: "Learn REST",
        description: "Understand APIs and status codes"
    }
];

function getAllNotes(req, res) {

    res.status(200).json({
        success: true,
        data: notes
    });

}

function getNoteById(req, res) {

    const noteId = Number(req.params.id);

    const note = notes.find((n) => n.id === noteId);

    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Note not found"
        });
    }

    res.status(200).json({
        success: true,
        data: note
    });

}

function createNote(req, res) {

    const newNote = {
        id: notes.length + 1,
        title: req.body.title,
        description: req.body.description
    };

    notes.push(newNote);

    res.status(201).json({
        success: true,
        data: newNote
    });

}

function deleteNote(req, res) {

    const noteId = Number(req.params.id);

    const note = notes.find((n) => n.id === noteId);

    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Note not found"
        });
    }

    notes = notes.filter((n) => n.id !== noteId);

    res.status(200).json({
        success: true,
        message: "Note deleted successfully"
    });

}

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    deleteNote
};