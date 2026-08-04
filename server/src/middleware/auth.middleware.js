// Authentication Middleware

// Protects private API endpoints by verifying JSON Web Tokens (JWT).

const jwt = require("jsonwebtoken");
const pool = require("../config/database");

async function authenticateUser(req, res, next) {
  // Read the Authorization header sent by the client.
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    });
  }

  // Expected format:
  // Authorization: Bearer <JWT_TOKEN>
  const parts = authorizationHeader.split(" ");

  if (
    parts.length !== 2 ||
    parts[0] !== "Bearer"
  ) {
    return res.status(401).json({
      success: false,
      message: "Invalid authentication token",
    });
  }

  const token = parts[1];

  let payload;

  try {
    // Verify the JWT signature and expiration.
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }

  // Retrieve the authenticated user from the database.
  const result = await pool.query(
    `
      SELECT
        id,
        name,
        email,
        is_verified,
        is_active,
        created_at,
        updated_at
      FROM users
      WHERE id = $1;
    `,
    [payload.sub]
  );

  // Reject requests if the user no longer exists.
  if (result.rows.length === 0) {
    return res.status(401).json({
      success: false,
      message: "Authentication required",
    });
  }

  const user = result.rows[0];

  // Prevent inactive accounts from accessing protected resources.
  if (!user.is_active) {
    return res.status(403).json({
      success: false,
      message: "Account is inactive",
    });
  }

  // Make the authenticated user available to the next middleware/controller.
  req.user = user;

  next();
}

module.exports = {
  authenticateUser,
};