// Authentication Controller

// Handles authentication-related requests.
// ======================================================

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const pool = require("../config/database");

const SALT_ROUNDS = 10;
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_BYTES = 72;

// ======================================================
// Register User

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

// ======================================================
// Login User

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Validate required fields and data types.
    if (
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail =
      validator.normalizeEmail(email.trim()) || "";

    // Validate email.
    if (!validator.isEmail(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Prevent empty passwords.
    if (password.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find the user by normalized email.
    const result = await pool.query(
      `
        SELECT
          id,
          name,
          email,
          password_hash,
          is_verified,
          is_active,
          created_at,
          updated_at
        FROM users
        WHERE email = $1;
      `,
      [normalizedEmail]
    );

    const user = result.rows[0];

    // Use a generic response to avoid revealing
    // whether an email address is registered.
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Compare the submitted password with the bcrypt hash.
    const passwordMatches = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Prevent disabled accounts from logging in.
    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        message: "This account is inactive",
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }

    // Generate a signed access token.
    const token = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1h",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          is_verified: user.is_verified,
          is_active: user.is_active,
          created_at: user.created_at,
          updated_at: user.updated_at,
        },
      },
    });
  } catch (error) {
    console.error("Login user error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to log in",
    });
  }
}

module.exports = {
  registerUser,
  loginUser,
};