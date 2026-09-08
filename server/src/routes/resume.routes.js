const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const express = require("express");
const multer = require("multer");

const { authenticateUser } = require("../middleware/auth.middleware");
const {
  downloadCurrentResume,
  getCurrentResume,
  uploadCurrentResume,
  UPLOAD_DIRECTORY,
} = require("../controllers/resume.controller");

fs.mkdirSync(UPLOAD_DIRECTORY, { recursive: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, callback) => callback(null, UPLOAD_DIRECTORY),
    filename: (_req, file, callback) => {
      const extension = path.extname(file.originalname).toLowerCase();
      callback(null, `${crypto.randomUUID()}${extension === ".pdf" ? ".pdf" : ""}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024, files: 1 },
  fileFilter: (_req, file, callback) => {
    if (file.mimetype !== "application/pdf") {
      return callback(new multer.MulterError("LIMIT_UNEXPECTED_FILE", "resume"));
    }
    return callback(null, true);
  },
});

const router = express.Router();

router.use(authenticateUser);

router.get("/me", getCurrentResume);
router.get("/me/download", downloadCurrentResume);
router.post("/me", (req, res, next) => {
  upload.single("resume")(req, res, (error) => {
    if (error) return next(error);
    return uploadCurrentResume(req, res);
  });
});

router.use((error, _req, res, _next) => {
  if (error instanceof multer.MulterError) {
    const message = error.code === "LIMIT_FILE_SIZE"
      ? "Resume must be 5 MB or smaller"
      : "Please upload one PDF resume";
    return res.status(400).json({ success: false, message });
  }

  console.error("Resume route error:", error);
  return res.status(500).json({ success: false, message: "Failed to process resume upload" });
});

module.exports = router;
