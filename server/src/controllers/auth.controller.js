// Authentication Controller
// Handles authentication-related requests.
// ======================================================

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const pool = require("../config/database");

const {
  generateSecureToken,
} = require("../utils/token");

const {
  sendVerificationEmail,
  sendPasswordResetEmail,
} = require("../services/email.service");

const SALT_ROUNDS = 10;
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_BYTES = 72;

function normalizePhone(phone) {
  if (typeof phone !== "string") return "";

  const normalized = phone.trim().replace(/[\s()-]/g, "");
  return /^\+[1-9]\d{7,14}$/.test(normalized) ? normalized : "";
}

function validatePassword(password) {
  if (typeof password !== "string" || password.length < MIN_PASSWORD_LENGTH) {
    return "Password must contain at least 8 characters";
  }

  if (Buffer.byteLength(password, "utf8") > MAX_PASSWORD_BYTES) {
    return "Password is too long";
  }

  if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    return "Password must include uppercase, lowercase, and numeric characters";
  }

  return null;
}

function serializeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    is_verified: user.is_verified,
    is_active: user.is_active,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
}

// ======================================================
// Register User

async function registerUser(req, res) {
  try {
    const { name, email, phone, password } = req.body;

    if (typeof name !== "string" || typeof password !== "string") {
      return res.status(400).json({
        success: false,
        message: "Name and password are required",
      });
    }

    const normalizedName = name.trim();
    const normalizedEmail = typeof email === "string" && email.trim()
      ? validator.normalizeEmail(email.trim()) || ""
      : null;
    const normalizedPhone = typeof phone === "string" && phone.trim()
      ? normalizePhone(phone)
      : null;

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

    if (!normalizedEmail && !normalizedPhone) {
      return res.status(400).json({
        success: false,
        message: "Provide a valid email address or mobile number",
      });
    }

    if (normalizedEmail === "") {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    if (normalizedPhone === "") {
      return res.status(400).json({
        success: false,
        message: "Use a mobile number with its country code, for example +919876543210",
      });
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      return res.status(400).json({
        success: false,
        message: passwordError,
      });
    }

    const existingUser = await pool.query(
      `
        SELECT id
        FROM users
        WHERE ($1::TEXT IS NOT NULL AND email = $1)
           OR ($2::TEXT IS NOT NULL AND phone = $2);
      `,
      [normalizedEmail, normalizedPhone]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "An account with this email address or mobile number already exists",
      });
    }

    // Hash the password before saving it.
    const hashedPassword = await bcrypt.hash(
      password,
      SALT_ROUNDS
    );

    const verificationToken = normalizedEmail ? generateSecureToken() : null;
    const verificationTokenExpiresAt = normalizedEmail
      ? new Date(Date.now() + 60 * 60 * 1000)
      : null;

    // Insert the new user.
    const result = await pool.query(
      `
        INSERT INTO users (
          name,
          email,
          phone,
          password_hash,
          verification_token,
          verification_token_expires_at
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING
          id,
          name,
          email,
          phone,
          is_verified,
          is_active,
          created_at,
          updated_at;
      `,
      [
        normalizedName,
        normalizedEmail,
        normalizedPhone,
        hashedPassword,
        verificationToken,
        verificationTokenExpiresAt,
      ]
    );

    if (normalizedEmail) {
      try {
        await sendVerificationEmail(normalizedEmail, verificationToken);
      } catch (mailError) {
        console.warn("Verification email could not be sent:", mailError.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: serializeUser(result.rows[0]),
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        success: false,
        message: "An account with this email address or mobile number already exists",
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
    const { identifier, email, phone, password } = req.body;
    const rawIdentifier = typeof identifier === "string"
      ? identifier
      : typeof email === "string"
        ? email
        : phone;

    if (typeof rawIdentifier !== "string" || typeof password !== "string") {
      return res.status(400).json({
        success: false,
        message: "Email address or mobile number and password are required",
      });
    }

    const isEmailIdentifier = rawIdentifier.includes("@");
    const normalizedEmail = isEmailIdentifier
      ? validator.normalizeEmail(rawIdentifier.trim()) || ""
      : null;
    const normalizedPhone = isEmailIdentifier ? null : normalizePhone(rawIdentifier);

    if (!normalizedEmail && !normalizedPhone) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address or mobile number",
      });
    }

    if (password.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Email address or mobile number and password are required",
      });
    }

    const result = await pool.query(
      `
        SELECT
          id,
          name,
          email,
          phone,
          password_hash,
          is_verified,
          is_active,
          created_at,
          updated_at
        FROM users
        WHERE ($1::TEXT IS NOT NULL AND email = $1)
           OR ($2::TEXT IS NOT NULL AND phone = $2);
      `,
      [normalizedEmail, normalizedPhone]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        message: "This account is inactive",
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign(
      {
        sub: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "30d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: serializeUser(user),
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

// ======================================================
// Get Current User

function getCurrentUser(req, res) {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
}

// ======================================================
// Verify Email

async function verifyEmail(req, res) {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Verification token is required",
      });
    }

    const result = await pool.query(
      `
        SELECT
          id,
          verification_token,
          verification_token_expires_at,
          is_verified
        FROM users
        WHERE verification_token = $1;
      `,
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification token",
      });
    }

    const user = result.rows[0];

    if (
      user.verification_token_expires_at &&
      user.verification_token_expires_at < new Date()
    ) {
      return res.status(400).json({
        success: false,
        message: "Verification token has expired",
      });
    }

    await pool.query(
      `
        UPDATE users
        SET
          is_verified = TRUE,
          verification_token = NULL,
          verification_token_expires_at = NULL,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = $1;
      `,
      [user.id]
    );

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error("Verify email error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to verify email",
    });
  }
}

// ======================================================
// Forgot Password

async function forgotPassword(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const normalizedEmail = validator.normalizeEmail(email);

    if (!normalizedEmail || !validator.isEmail(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const result = await pool.query(
      `
        SELECT id, name, email, is_active
        FROM users
        WHERE email = $1;
      `,
      [normalizedEmail]
    );

    if (result.rows.length === 0) {
      return res.status(200).json({
        success: true,
        message:
          "If an account with that email exists, a password reset link has been sent.",
      });
    }

    const user = result.rows[0];

    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        message: "Account is inactive",
      });
    }

    const resetPasswordToken = generateSecureToken();
    const resetPasswordTokenExpiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await pool.query(
      `
        UPDATE users
        SET
          reset_password_token = $1,
          reset_password_token_expires_at = $2,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = $3;
      `,
      [
        resetPasswordToken,
        resetPasswordTokenExpiresAt,
        user.id,
      ]
    );

    try {
      await sendPasswordResetEmail(user.email, resetPasswordToken);
    } catch (mailError) {
      console.warn("Password reset email dispatch skipped:", mailError.message);
    }

    return res.status(200).json({
      success: true,
      message:
        "If an account with that email exists, a password reset link has been sent.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to process forgot password request",
    });
  }
}

// ======================================================
// Reset Password

async function resetPassword(req, res) {
  try {
    const { token, newPassword } = req.body;

    if (
      typeof token !== "string" ||
      typeof newPassword !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Reset token and new password are required",
      });
    }

    if (token.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Reset token is required",
      });
    }

    if (newPassword.length < MIN_PASSWORD_LENGTH) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least 8 characters",
      });
    }

    if (Buffer.byteLength(newPassword, "utf8") > MAX_PASSWORD_BYTES) {
      return res.status(400).json({
        success: false,
        message: "Password is too long",
      });
    }

    if (
      !/[a-z]/.test(newPassword) ||
      !/[A-Z]/.test(newPassword) ||
      !/[0-9]/.test(newPassword)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Password must include uppercase, lowercase, and numeric characters",
      });
    }

    const result = await pool.query(
      `
        SELECT
          id,
          password_hash,
          reset_password_token_expires_at,
          is_active
        FROM users
        WHERE reset_password_token = $1;
      `,
      [token.trim()]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired password reset token",
      });
    }

    const user = result.rows[0];

    if (!user.is_active) {
      return res.status(403).json({
        success: false,
        message: "Account is inactive",
      });
    }

    if (
      !user.reset_password_token_expires_at ||
      user.reset_password_token_expires_at < new Date()
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired password reset token",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

    await pool.query(
      `
        UPDATE users
        SET
          password_hash = $1,
          reset_password_token = NULL,
          reset_password_token_expires_at = NULL,
          updated_at = CURRENT_TIMESTAMP
        WHERE id = $2;
      `,
      [hashedPassword, user.id]
    );

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Reset password error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to reset password",
    });
  }
}

// ======================================================
// Exports

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
};
