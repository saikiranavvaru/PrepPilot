// ======================================================
// AUTHENTICATION CONTROLLER
// ======================================================
//
// Handles authentication-related requests.
//
// Current responsibility:
//
// POST /api/v1/auth/register
//
// ======================================================

const bcrypt = require("bcrypt");
const validator = require("validator");

const pool = require("../config/database");

const SALT_ROUNDS = 10;
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_BYTES = 72;


// ======================================================
// REGISTER USER
// ======================================================

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    // Validate required fields and data types.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }

    const normalizedName = name.trim();

    const normalizedEmail =
      validator.normalizeEmail(email.trim()) || "";

    // Validate name.
    if (
      normalizedName.length < 2 ||
      normalizedName.length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 100 characters",
      });
    }

    // Validate email.
    if (!validator.isEmail(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Validate password length.
    if (password.length < MIN_PASSWORD_LENGTH) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least 8 characters",
      });
    }

    // bcrypt safely supports passwords up to 72 bytes.
    if (Buffer.byteLength(password, "utf8") > MAX_PASSWORD_BYTES) {
      return res.status(400).json({
        success: false,
        message: "Password is too long",
      });
    }

    // Require uppercase, lowercase, and number.
    if (
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Password must include uppercase, lowercase, and numeric characters",
      });
    }

    // Check whether the email is already registered.
    const existingUser = await pool.query(
      `
        SELECT id
        FROM users
        WHERE email = $1;
      `,
      [normalizedEmail]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    // Hash the password before saving it.
    const hashedPassword = await bcrypt.hash(
      password,
      SALT_ROUNDS
    );

    // Insert the new user using a parameterized query.
    const result = await pool.query(
  `
    INSERT INTO users (name, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING
      id,
      name,
      email,
      is_verified,
      created_at,
      updated_at;
  `,
  [
    normalizedName,
    normalizedEmail,
    hashedPassword,
  ]
);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result.rows[0],
    });
  } catch (error) {
    // PostgreSQL unique-constraint error.
    //
    // This also protects against two registration
    // requests using the same email at the same time.
    if (error.code === "23505") {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    console.error("Register user error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to register user",
    });
  }
}


module.exports = {
  registerUser,
};