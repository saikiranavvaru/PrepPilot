// Token Utilities

// Generates secure random tokens used for
// email verification and future password reset flows.

const crypto = require("crypto");

function generateVerificationToken() {
  return crypto.randomBytes(32).toString("hex");
}

module.exports = {
  generateVerificationToken,
};