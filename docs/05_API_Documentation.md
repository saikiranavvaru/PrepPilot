# PrepPilot — API Documentation

**Created:** 04 July 2026  
**Last Updated:** 19 July 2026  
**Current API Version:** `v1`  
**Project Version:** `0.2.0`  
**Current Milestone:** Database Design and PostgreSQL Completed  
**API Status:** Active Development

---

# 1. API Overview

PrepPilot exposes a REST API built with Node.js, Express.js, and PostgreSQL.

The API currently provides:

* API information.
* Application health checks.
* PostgreSQL health checks.
* Paginated user retrieval.
* Individual user retrieval.
* Consistent JSON responses.
* Input validation.
* Parameterized PostgreSQL queries.
* Standard HTTP status codes.

The current implementation represents the database-backed foundation of PrepPilot.

Authentication, authorization, resume management, interviews, questions, answers, analytics, and AI-powered features will be added in future modules.

---

# 2. Base URL

## Local Development

    http://localhost:3000

## Versioned API Base Path

    http://localhost:3000/api/v1

System endpoints such as `/health` are not placed under `/api/v1` because they describe the application infrastructure rather than a business resource.

---

# 3. API Versioning

PrepPilot uses URL-based API versioning.

Current version:

    /api/v1

Example:

    GET /api/v1/users

Meaning:

* `api` identifies the application interface.
* `v1` identifies Version 1 of the API.
* `users` identifies the requested resource.

Future breaking changes may be introduced through a new version such as:

    /api/v2

---

# 4. Content Type

The API sends responses in JSON format.

For requests containing JSON data, clients should use:

    Content-Type: application/json

Current GET endpoints do not require a request body.

---

# 5. Authentication

Authentication is not implemented yet.

Current endpoints are available without a token for local development and database testing.

    Authentication Required: No

During Module 4, PrepPilot will add:

* User registration.
* User login.
* Password hashing.
* JWT creation.
* JWT verification.
* Authentication middleware.
* Protected routes.
* Authorization.

Future authenticated requests will use a header similar to:

    Authorization: Bearer <access_token>

The current user-list endpoints are temporary development endpoints and should not remain publicly accessible without authorization in production.

---

# 6. Standard Response Format

## Successful Response

Successful responses generally follow this structure:

    {
      "success": true,
      "data": {}
    }

Some endpoints may also include:

* `status`
* `message`
* `count`
* `pagination`

## Error Response

Error responses generally follow this structure:

    {
      "success": false,
      "message": "Description of the error"
    }

Health-check failures may also include:

    {
      "success": false,
      "status": "unhealthy",
      "message": "Description of the error"
    }

---

# 7. Implemented Endpoints

# System Endpoints

## 7.1 Get API Information

Returns basic public information about the PrepPilot API.

### Request

**Method:** `GET`  
**Endpoint:** `/`  
**Authentication Required:** No  
**Request Body:** None

### Example Request

    GET http://localhost:3000/

### Success Response

**Status:** `200 OK`

    {
      "success": true,
      "data": {
        "name": "PrepPilot API",
        "version": "0.2.0",
        "message": "Welcome to the PrepPilot API"
      }
    }

### Notes

* The application name is read from `APP_NAME`.
* The version is read from `package.json`.
* Private environment information is not returned.

---

## 7.2 Application Health Check

Checks whether the Node.js and Express application is running.

### Request

**Method:** `GET`  
**Endpoint:** `/health`  
**Authentication Required:** No  
**Request Body:** None

### Example Request

    GET http://localhost:3000/health

### Success Response

**Status:** `200 OK`

    {
      "success": true,
      "status": "healthy",
      "data": {
        "service": "PrepPilot API",
        "uptimeSeconds": 125,
        "timestamp": "2026-07-19T06:30:00.000Z"
      }
    }

### Response Fields

| Field | Type | Description |
|---|---|---|
| `success` | Boolean | Indicates whether the request succeeded |
| `status` | String | Current application health |
| `service` | String | Application name |
| `uptimeSeconds` | Number | Number of seconds the Node.js process has been running |
| `timestamp` | String | Current server time in ISO 8601 format |

### Notes

This endpoint only checks the Node.js and Express process.

It does not guarantee that PostgreSQL is available.

---

## 7.3 Database Health Check

Checks whether the PrepPilot backend can communicate with PostgreSQL.

### Request

**Method:** `GET`  
**Endpoint:** `/health/database`  
**Authentication Required:** No  
**Request Body:** None

### Example Request

    GET http://localhost:3000/health/database

### Success Response

**Status:** `200 OK`

    {
      "success": true,
      "status": "healthy",
      "message": "PostgreSQL connection is healthy",
      "data": {
        "databaseName": "preppilot",
        "databaseTime": "2026-07-19T06:30:00.000Z"
      }
    }

### Error Response

**Status:** `503 Service Unavailable`

    {
      "success": false,
      "status": "unhealthy",
      "message": "PostgreSQL is currently unavailable"
    }

### Notes

* This endpoint performs a real PostgreSQL query.
* The PostgreSQL username and password are never returned.
* `503` indicates that Express is running but a required dependency is unavailable.

---

# User Endpoints

## 7.4 Get All Users

Returns users from PostgreSQL using pagination.

### Request

**Method:** `GET`  
**Endpoint:** `/api/v1/users`  
**Authentication Required:** No — temporary during development  
**Request Body:** None

### Query Parameters

| Parameter | Required | Default | Maximum | Description |
|---|---:|---:|---:|---|
| `page` | No | `1` | — | Positive integer representing the requested page |
| `limit` | No | `20` | `100` | Number of users returned per page |

### Example Requests

Default pagination:

    GET http://localhost:3000/api/v1/users

Custom pagination:

    GET http://localhost:3000/api/v1/users?page=1&limit=20

Second page:

    GET http://localhost:3000/api/v1/users?page=2&limit=10

### Success Response

**Status:** `200 OK`

    {
      "success": true,
      "count": 2,
      "data": [
        {
          "id": 1,
          "name": "Sai Kiran",
          "is_verified": false,
          "created_at": "2026-07-11T10:00:00.000Z",
          "updated_at": "2026-07-11T10:00:00.000Z"
        },
        {
          "id": 2,
          "name": "Ravi",
          "is_verified": false,
          "created_at": "2026-07-11T10:05:00.000Z",
          "updated_at": "2026-07-11T10:05:00.000Z"
        }
      ],
      "pagination": {
        "currentPage": 1,
        "limit": 20,
        "totalUsers": 2,
        "totalPages": 1
      }
    }

### Response Fields

| Field | Type | Description |
|---|---|---|
| `success` | Boolean | Indicates whether the request succeeded |
| `count` | Number | Number of users returned in the current response |
| `data` | Array | User records |
| `pagination.currentPage` | Number | Current page number |
| `pagination.limit` | Number | Maximum users per page |
| `pagination.totalUsers` | Number | Total users in PostgreSQL |
| `pagination.totalPages` | Number | Total number of pages |

### User Object

| Field | Type | Description |
|---|---|---|
| `id` | Number | Unique user identifier |
| `name` | String | User name |
| `is_verified` | Boolean | Account verification status |
| `created_at` | String | Record creation timestamp |
| `updated_at` | String | Record update timestamp |

### Invalid Page Response

**Status:** `400 Bad Request`

Request:

    GET /api/v1/users?page=abc

Response:

    {
      "success": false,
      "message": "Page must be a positive integer"
    }

### Invalid Limit Response

**Status:** `400 Bad Request`

Request:

    GET /api/v1/users?limit=500

Response:

    {
      "success": false,
      "message": "Limit must be an integer between 1 and 100"
    }

### Excessively Large Pagination Response

**Status:** `400 Bad Request`

    {
      "success": false,
      "message": "Pagination values are too large"
    }

### Server Error Response

**Status:** `500 Internal Server Error`

    {
      "success": false,
      "message": "Failed to fetch users"
    }

### Notes

* The query uses PostgreSQL `LIMIT` and `OFFSET`.
* The offset is calculated using:

      offset = (page - 1) × limit

* User emails and passwords are intentionally excluded.
* The SQL query uses parameterized values.
* The endpoint should be protected or restricted in Module 4.

---

## 7.5 Get User by ID

Returns one user from PostgreSQL using the ID provided in the URL.

### Request

**Method:** `GET`  
**Endpoint:** `/api/v1/users/:id`  
**Authentication Required:** No — temporary during development  
**Request Body:** None

### Path Parameters

| Parameter | Type | Required | Description |
|---|---|---:|---|
| `id` | Positive Integer | Yes | Unique user identifier |

### Example Request

    GET http://localhost:3000/api/v1/users/1

### Success Response

**Status:** `200 OK`

    {
      "success": true,
      "data": {
        "id": 1,
        "name": "Sai Kiran",
        "is_verified": false,
        "created_at": "2026-07-11T10:00:00.000Z",
        "updated_at": "2026-07-11T10:00:00.000Z"
      }
    }

### Invalid ID Response

**Status:** `400 Bad Request`

Request:

    GET /api/v1/users/abc

Response:

    {
      "success": false,
      "message": "User ID must be a positive integer"
    }

Other invalid examples:

    GET /api/v1/users/0
    GET /api/v1/users/-1
    GET /api/v1/users/1.5

### User Not Found Response

**Status:** `404 Not Found`

Request:

    GET /api/v1/users/999999

Response:

    {
      "success": false,
      "message": "User not found"
    }

### Server Error Response

**Status:** `500 Internal Server Error`

    {
      "success": false,
      "message": "Failed to fetch user"
    }

### Notes

* The user ID is validated before querying PostgreSQL.
* The query uses a `$1` placeholder.
* Passwords and email addresses are not returned.
* This endpoint should be protected during the authentication module.

---

# 8. Unknown Route Handling

Requests that do not match an implemented endpoint return `404 Not Found`.

### Example Request

    GET http://localhost:3000/api/v1/unknown

### Error Response

**Status:** `404 Not Found`

    {
      "success": false,
      "message": "Route not found: GET /api/v1/unknown"
    }

The HTTP status code is sent separately from the JSON response body.

It can be inspected using:

* Browser Developer Tools.
* Postman.
* `curl`.
* PowerShell.

---

# 9. HTTP Status Codes

| Status Code | Name | Usage in PrepPilot |
|---:|---|---|
| `200` | OK | Successful GET request |
| `201` | Created | Reserved for successfully created resources |
| `400` | Bad Request | Invalid route parameter or query parameter |
| `401` | Unauthorized | Planned for missing or invalid authentication |
| `403` | Forbidden | Planned for insufficient authorization |
| `404` | Not Found | Unknown route or missing resource |
| `409` | Conflict | Planned for duplicate user email or conflicting data |
| `500` | Internal Server Error | Unexpected controller or database error |
| `503` | Service Unavailable | PostgreSQL or another required dependency is unavailable |

---

# 10. Validation Rules

## User ID

The user ID must be:

* Present in the route.
* A positive integer.
* Greater than zero.
* Within JavaScript's safe integer range.

Invalid values include:

* `abc`
* `0`
* `-1`
* `1.5`

## Page

The page value must be:

* A positive integer.
* Greater than zero.
* Within JavaScript's safe integer range.

Default:

    1

## Limit

The limit value must be:

* A positive integer.
* Between `1` and `100`.
* Within JavaScript's safe integer range.

Default:

    20

Maximum:

    100

---

# 11. Database Query Safety

PrepPilot uses parameterized PostgreSQL queries.

Example:

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

The SQL instruction and the user value are passed separately.

This reduces SQL injection risk.

PrepPilot does not directly insert route or query values into SQL strings.

---

# 12. Privacy and Security Rules

The current API follows these rules:

* Passwords are never selected or returned.
* User emails are not returned through public endpoints.
* PostgreSQL usernames are not returned.
* PostgreSQL passwords are never returned.
* Environment names are not exposed publicly.
* Secrets are stored in `.env`.
* `.env` is ignored by Git.
* `.env.example` contains only placeholders.
* SQL values are parameterized.
* The Express `X-Powered-By` header is disabled.
* JSON request bodies have a size limit.
* Authentication will be added before production release.

---

# 13. Current Request Flow

System request:

    Client
      ↓
    index.js
      ↓
    system.routes.js
      ↓
    system.controller.js
      ↓
    JSON Response

Database-backed user request:

    Client
      ↓
    index.js
      ↓
    users.routes.js
      ↓
    users.controller.js
      ↓
    database.js
      ↓
    PostgreSQL
      ↓
    JSON Response

---

# 14. Deprecated and Removed Development Endpoints

The following Module 2 learning endpoints are no longer part of the current PrepPilot API:

* `/login`
* `/register`
* `/profile`
* `/about`
* `/students/:id`
* `/courses/:courseId`
* `/books`
* `/books/:id`
* `/notes`
* `/notes/:id`

The associated temporary Books and Notes arrays were also removed.

These endpoints were useful for learning Express routing, CRUD operations, controllers, route parameters, request bodies, and status codes.

They were replaced with PostgreSQL-backed and PrepPilot-specific endpoints.

Authentication endpoints will be recreated properly during Module 4.

---

# 15. Planned Authentication APIs

## Register User

**Method:** `POST`  
**Planned Endpoint:** `/api/v1/auth/register`

Planned responsibilities:

* Validate registration data.
* Check whether the email already exists.
* Hash the password using bcrypt.
* Create a user in PostgreSQL.
* Return safe user information.
* Optionally create an authentication token.

## Login User

**Method:** `POST`  
**Planned Endpoint:** `/api/v1/auth/login`

Planned responsibilities:

* Validate email and password.
* Find the user in PostgreSQL.
* Compare the password with the stored hash.
* Create a JWT.
* Return an authenticated response.

## Get Current User

**Method:** `GET`  
**Planned Endpoint:** `/api/v1/users/me`

Planned responsibilities:

* Require a valid JWT.
* Read the authenticated user ID.
* Return the current user's safe profile data.

## Logout User

Logout behaviour will depend on the final token strategy.

Possible approaches include:

* Client-side token removal.
* Refresh-token invalidation.
* Server-side token revocation.

---

# 16. Planned Resume APIs

* `POST /api/v1/resumes`
* `GET /api/v1/resumes/me`
* `PUT /api/v1/resumes/me`
* `DELETE /api/v1/resumes/me`

Planned responsibilities:

* Upload or save resume information.
* Retrieve the current user's resume.
* Update resume details.
* Delete or replace a resume.
* Support future AI resume analysis.

---

# 17. Planned Interview APIs

* `POST /api/v1/interviews`
* `GET /api/v1/interviews`
* `GET /api/v1/interviews/:id`
* `PATCH /api/v1/interviews/:id/complete`

Planned responsibilities:

* Create an interview session.
* Retrieve interview history.
* Retrieve one interview.
* Record completion and score.

---

# 18. Planned Question and Answer APIs

## Questions

* `GET /api/v1/interviews/:interviewId/questions`
* `POST /api/v1/interviews/:interviewId/questions`

## Answers

* `POST /api/v1/questions/:questionId/answer`
* `GET /api/v1/questions/:questionId/answer`

Planned responsibilities:

* Store interview questions.
* Return questions for an interview.
* Submit user answers.
* Store AI feedback and scores.

---

# 19. Planned Technology APIs

* `GET /api/v1/technologies`
* `GET /api/v1/users/me/technologies`
* `POST /api/v1/users/me/technologies`
* `DELETE /api/v1/users/me/technologies/:technologyId`

Planned responsibilities:

* Return supported technologies.
* Return the authenticated user's selected technologies.
* Add technology preferences.
* Remove technology preferences.

---

# 20. Planned Analytics APIs

* `GET /api/v1/analytics/overview`
* `GET /api/v1/analytics/progress`
* `GET /api/v1/analytics/strengths`
* `GET /api/v1/analytics/weaknesses`

Planned responsibilities:

* Return completed interview counts.
* Return average scores.
* Track improvement over time.
* Identify strengths.
* Identify weak areas.
* Support personalised recommendations.

---

# 21. API Development Timeline

| Date | Milestone |
|---|---|
| 04 July 2026 | API documentation created |
| 10 July 2026 | Module 2 Express learning APIs completed |
| 19 July 2026 | PostgreSQL integration completed |
| 19 July 2026 | Temporary Books and Notes APIs removed |
| 19 July 2026 | System and user routes reorganised |
| 19 July 2026 | `/api/v1` versioning introduced |
| 19 July 2026 | Pagination and validation implemented |
| 19 July 2026 | Health-check endpoints implemented |
| 19 July 2026 | Security-focused response cleanup completed |

---

# 22. Current API Status

## Implemented

* ✅ API information endpoint.
* ✅ Application health endpoint.
* ✅ PostgreSQL health endpoint.
* ✅ Paginated user-list endpoint.
* ✅ User-by-ID endpoint.
* ✅ Input validation.
* ✅ Parameterized queries.
* ✅ Unknown-route handling.
* ✅ HTTP status-code handling.
* ✅ Environment-based database configuration.
* ✅ PostgreSQL connection pooling.

## Pending

* ⏳ User registration.
* ⏳ User login.
* ⏳ Password hashing.
* ⏳ JWT authentication.
* ⏳ Protected routes.
* ⏳ Authorization.
* ⏳ Current-user profile.
* ⏳ Resume APIs.
* ⏳ Interview APIs.
* ⏳ Question and answer APIs.
* ⏳ Analytics APIs.
* ⏳ AI integration.
* ⏳ Automated API tests.
* ⏳ Production deployment.

---

# 23. API Testing Commands

Run the PostgreSQL connection test:

    npm run test:db

Start the API:

    npm start

Test the root endpoint:

    curl.exe -i http://localhost:3000/

Test application health:

    curl.exe -i http://localhost:3000/health

Test database health:

    curl.exe -i http://localhost:3000/health/database

Test all users:

    curl.exe -i "http://localhost:3000/api/v1/users?page=1&limit=20"

Test one user:

    curl.exe -i http://localhost:3000/api/v1/users/1

Test an invalid user ID:

    curl.exe -i http://localhost:3000/api/v1/users/abc

Test an unknown route:

    curl.exe -i http://localhost:3000/api/v1/unknown

---

# 24. Version Information

**Documentation Created:** 04 July 2026  
**Last Updated:** 19 July 2026  
**Current API Version:** `v1`  
**Current Project Version:** `0.2.0`  
**Current Milestone:** Module 3 — Database Design and PostgreSQL Completed  
**Next Milestone:** Module 4 — Authentication and Authorization

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

API Documentation Updated ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━