// ======================================================
// USERS CONTROLLER
// ======================================================
//
// Handles user-related HTTP requests.
//
// Current endpoints:
//
// GET /api/v1/users
// GET /api/v1/users/:id
//
// Authentication and authorization will be added in a
// future module.
//
// ======================================================


// ======================================================
// 1. IMPORT DATABASE CONNECTION
// ======================================================

const pool = require("../config/database");


// ======================================================
// 2. HELPER FUNCTION
// ======================================================
//
// Converts a value into a positive integer.
//
// Returns null when the value is invalid.
//

function parsePositiveInteger(value) {
  if (
    value === undefined ||
    value === null ||
    Array.isArray(value) ||
    typeof value === "object"
  ) {
    return null;
  }

  const parsedValue = Number(value);

  if (
    !Number.isSafeInteger(parsedValue) ||
    parsedValue <= 0
  ) {
    return null;
  }

  return parsedValue;
}


// ======================================================
// 3. GET ALL USERS
// ======================================================
//
// Endpoint:
//
// GET /api/v1/users
//
// Optional pagination:
//
// GET /api/v1/users?page=1&limit=20
//
// Defaults:
//
// page  = 1
// limit = 20
//
// Maximum limit:
//
// 100 users per request
//

async function getAllUsers(req, res) {
  try {
    const page =
      req.query.page === undefined
        ? 1
        : parsePositiveInteger(req.query.page);

    const limit =
      req.query.limit === undefined
        ? 20
        : parsePositiveInteger(req.query.limit);

    if (page === null) {
      return res.status(400).json({
        success: false,
        message: "Page must be a positive integer",
      });
    }

    if (limit === null || limit > 100) {
      return res.status(400).json({
        success: false,
        message: "Limit must be an integer between 1 and 100",
      });
    }

    const offset = (page - 1) * limit;

    // Reject pagination values that exceed JavaScript's
    // safe integer range.
    if (!Number.isSafeInteger(offset)) {
      return res.status(400).json({
        success: false,
        message: "Pagination values are too large",
      });
    }

    const usersQuery = `
      SELECT
        id,
        name,
        is_verified,
        created_at,
        updated_at
      FROM users
      ORDER BY id
      LIMIT $1
      OFFSET $2;
    `;

    const countQuery = `
      SELECT COUNT(*)::INTEGER AS total
      FROM users;
    `;

    // These queries do not depend on each other, so they
    // can run at the same time.
    const [usersResult, countResult] = await Promise.all([
      pool.query(usersQuery, [limit, offset]),
      pool.query(countQuery),
    ]);

    const totalUsers = countResult.rows[0].total;

    const totalPages =
      totalUsers === 0
        ? 0
        : Math.ceil(totalUsers / limit);

    return res.status(200).json({
      success: true,
      count: usersResult.rows.length,
      data: usersResult.rows,
      pagination: {
        currentPage: page,
        limit,
        totalUsers,
        totalPages,
      },
    });
  } catch (error) {
    console.error("Get all users error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
}


// ======================================================
// 4. GET USER BY ID
// ======================================================
//
// Endpoint:
//
// GET /api/v1/users/:id
//
// Example:
//
// GET /api/v1/users/1
//

async function getUserById(req, res) {
  try {
    const userId = parsePositiveInteger(req.params.id);

    if (userId === null) {
      return res.status(400).json({
        success: false,
        message: "User ID must be a positive integer",
      });
    }

    const result = await pool.query(
      `
        SELECT
          id,
          name,
          is_verified,
          created_at,
          updated_at
        FROM users
        WHERE id = $1;
      `,
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Get user by ID error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch user",
    });
  }
}


// ======================================================
// 5. EXPORT CONTROLLER FUNCTIONS
// ======================================================

module.exports = {
  getAllUsers,
  getUserById,
};