// Token Utilities

// Generates cryptographically secure random tokens
// for email verification, password reset, and future authentication flows.

const crypto = require("crypto");

function generateSecureToken() {
  return crypto.randomBytes(32).toString("hex");
}

module.exports = {
  generateSecureToken,
};