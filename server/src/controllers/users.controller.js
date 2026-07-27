// User Controller

// Handles user-related requests.
// ======================================================

const pool = require("../config/database");

// Validate positive integer values.
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

// Get all users with optional pagination.
async function getAllUsers(req, res) {
  try {
    // Read pagination values from the query string.
    const page =
      req.query.page === undefined
        ? 1
        : parsePositiveInteger(req.query.page);

    const limit =
      req.query.limit === undefined
        ? 20
        : parsePositiveInteger(req.query.limit);

    // Validate the page number.
    if (page === null) {
      return res.status(400).json({
        success: false,
        message: "Page must be a positive integer",
      });
    }

    // Validate the page size.
    if (limit === null || limit > 100) {
      return res.status(400).json({
        success: false,
        message: "Limit must be an integer between 1 and 100",
      });
    }

    // Calculate the starting position for pagination.
    const offset = (page - 1) * limit;

    // Prevent extremely large pagination values.
    if (!Number.isSafeInteger(offset)) {
      return res.status(400).json({
        success: false,
        message: "Pagination values are too large",
      });
    }

    // Query users for the current page.
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

    // Query the total number of users.
    const countQuery = `
      SELECT COUNT(*)::INTEGER AS total
      FROM users;
    `;

    // Run both queries in parallel for better performance.
    const [usersResult, countResult] = await Promise.all([
      pool.query(usersQuery, [limit, offset]),
      pool.query(countQuery),
    ]);

    const totalUsers = countResult.rows[0].total;

    // Calculate pagination details.
    const totalPages =
      totalUsers === 0
        ? 0
        : Math.ceil(totalUsers / limit);

    // Return the paginated response.
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

// Get a user by ID.
async function getUserById(req, res) {
  try {
    // Validate the user ID.
    const userId = parsePositiveInteger(req.params.id);

    if (userId === null) {
      return res.status(400).json({
        success: false,
        message: "User ID must be a positive integer",
      });
    }

    // Find the user in the database.
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

    // Return 404 if the user doesn't exist.
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Return the requested user.
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

module.exports = {
  getAllUsers,
  getUserById,
};