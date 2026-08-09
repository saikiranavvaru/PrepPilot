// Email Service

// Contains reusable functions for sending
// application emails.

const { transporter } = require("../utils/mail");

// ======================================================
// Send Verification Email

async function sendVerificationEmail(email, token) {
  const verificationUrl =
    `${process.env.APP_URL}/api/v1/auth/verify-email?token=${token}`;

  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your PrepPilot account",
    text: `Welcome to PrepPilot!

Please verify your email by visiting the link below.

${verificationUrl}

This verification link expires in 1 hour.

If you didn't create a PrepPilot account, you can safely ignore this email.`,
  });

  console.log("Verification email sent successfully!");
  console.log("Message ID:", info.messageId);

  return info;
}

// ======================================================
// Send Password Reset Email

async function sendPasswordResetEmail(email, token) {
  // Build the password reset URL using the secure token.
  const resetUrl =
    `${process.env.APP_URL}/api/v1/auth/reset-password?token=${token}`;

  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reset your PrepPilot password",
    text: `Hello,

We received a request to reset your PrepPilot password.

Please reset your password by visiting the link below:

${resetUrl}

This password reset link expires in 1 hour.

If you didn't request a password reset, you can safely ignore this email.`,
  });

  console.log("Password reset email sent successfully!");
  console.log("Message ID:", info.messageId);

  return info;
}

// ======================================================
// Exports

module.exports = {
  sendVerificationEmail,
  sendPasswordResetEmail,
};