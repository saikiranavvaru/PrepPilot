const fs = require("fs");
const path = require("path");

const pool = require("../config/database");

const UPLOAD_DIRECTORY = path.resolve(__dirname, "../../uploads/resumes");

function serializeResume(resume) {
  if (!resume) return null;

  return {
    id: resume.id,
    fileName: resume.file_name || "Resume.pdf",
    mimeType: resume.mime_type || "application/pdf",
    fileSize: resume.file_size || null,
    summary: resume.summary || "",
    uploadedAt: resume.updated_at || resume.created_at,
  };
}

async function findCurrentResume(userId) {
  const result = await pool.query(
    `
      SELECT id, resume_url, file_name, mime_type, file_size, summary, created_at, updated_at
      FROM resumes
      WHERE user_id = $1
      ORDER BY updated_at DESC NULLS LAST, created_at DESC
      LIMIT 1;
    `,
    [userId]
  );

  return result.rows[0] || null;
}

async function deleteStoredFile(storageKey) {
  if (typeof storageKey !== "string") return;

  const fileName = path.basename(storageKey);
  if (fileName !== storageKey) return;

  const filePath = path.resolve(UPLOAD_DIRECTORY, fileName);
  if (!filePath.startsWith(`${UPLOAD_DIRECTORY}${path.sep}`)) return;

  try {
    await fs.promises.unlink(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.warn("Could not remove replaced resume file:", error.message);
    }
  }
}

async function getCurrentResume(req, res) {
  try {
    const resume = await findCurrentResume(req.user.id);

    return res.status(200).json({
      success: true,
      data: serializeResume(resume),
    });
  } catch (error) {
    console.error("Get resume error:", error);
    return res.status(500).json({ success: false, message: "Failed to load resume" });
  }
}

async function uploadCurrentResume(req, res) {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "Please choose a PDF resume" });
  }

  const filePath = req.file.path;

  try {
    const fileHandle = await fs.promises.open(filePath, "r");
    const header = Buffer.alloc(5);
    await fileHandle.read(header, 0, header.length, 0);
    await fileHandle.close();

    if (header.toString("utf8") !== "%PDF-") {
      await fs.promises.unlink(filePath);
      return res.status(400).json({
        success: false,
        message: "The selected file is not a valid PDF",
      });
    }

    const summary = typeof req.body.summary === "string" ? req.body.summary.trim().slice(0, 500) : "";
    const previousResume = await findCurrentResume(req.user.id);
    const storageKey = req.file.filename;

    let result;
    if (previousResume) {
      result = await pool.query(
        `
          UPDATE resumes
          SET resume_url = $1,
              file_name = $2,
              mime_type = $3,
              file_size = $4,
              summary = $5,
              updated_at = CURRENT_TIMESTAMP
          WHERE id = $6 AND user_id = $7
          RETURNING id, file_name, mime_type, file_size, summary, created_at, updated_at;
        `,
        [storageKey, req.file.originalname, req.file.mimetype, req.file.size, summary, previousResume.id, req.user.id]
      );
    } else {
      result = await pool.query(
        `
          INSERT INTO resumes (user_id, resume_url, file_name, mime_type, file_size, summary)
          VALUES ($1, $2, $3, $4, $5, $6)
          RETURNING id, file_name, mime_type, file_size, summary, created_at, updated_at;
        `,
        [req.user.id, storageKey, req.file.originalname, req.file.mimetype, req.file.size, summary]
      );
    }

    if (previousResume && previousResume.resume_url !== storageKey) {
      await deleteStoredFile(previousResume.resume_url);
    }

    return res.status(201).json({
      success: true,
      message: "Resume uploaded successfully",
      data: serializeResume(result.rows[0]),
    });
  } catch (error) {
    await deleteStoredFile(req.file.filename);
    console.error("Upload resume error:", error);
    return res.status(500).json({ success: false, message: "Failed to upload resume" });
  }
}

async function downloadCurrentResume(req, res) {
  try {
    const resume = await findCurrentResume(req.user.id);
    if (!resume) {
      return res.status(404).json({ success: false, message: "No resume has been uploaded" });
    }

    const fileName = path.basename(resume.resume_url);
    if (fileName !== resume.resume_url) {
      return res.status(404).json({ success: false, message: "Resume file is unavailable" });
    }

    const filePath = path.resolve(UPLOAD_DIRECTORY, fileName);
    if (!filePath.startsWith(`${UPLOAD_DIRECTORY}${path.sep}`)) {
      return res.status(404).json({ success: false, message: "Resume file is unavailable" });
    }

    await fs.promises.access(filePath, fs.constants.R_OK);
    return res.download(filePath, resume.file_name || "PrepPilot-resume.pdf");
  } catch (error) {
    if (error.code === "ENOENT") {
      return res.status(404).json({ success: false, message: "Resume file is unavailable" });
    }

    console.error("Download resume error:", error);
    return res.status(500).json({ success: false, message: "Failed to download resume" });
  }
}

module.exports = {
  getCurrentResume,
  uploadCurrentResume,
  downloadCurrentResume,
  UPLOAD_DIRECTORY,
};
