// Email Service

// Contains reusable functions for sending
// application emails.

const { transporter } = require("../utils/mail");

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

module.exports = {
  sendVerificationEmail,
};