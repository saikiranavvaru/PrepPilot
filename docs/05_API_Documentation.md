# PrepPilot — API Documentation

**API Version:** `v1`  
**Project Version:** `0.4.0`  
**API Status:** Active Development  
**Current Milestone:** Module 5 — Frontend Development Completed  
**Last Updated:** 31 August 2026

---

# 1. Overview

PrepPilot provides a versioned REST API built with **Node.js, Express.js, and PostgreSQL**.

The API currently provides:

- System and application health information.
- PostgreSQL health checks.
- PostgreSQL-backed user retrieval.
- User registration.
- User login.
- JWT-based authentication.
- Protected current-user access.
- Email verification.
- Password recovery.
- Password reset.
- Authentication and authorization middleware.
- Resource ownership checks.
- Input validation.
- Parameterized PostgreSQL queries.
- Consistent JSON responses.
- Security-focused error handling.
- Frontend integration through the authenticated React application.

The API remains under active development as PrepPilot moves toward core interview features, deployment, testing, and production hardening.

---

# 2. Base URL

## Local Development

```text
http://localhost:3000
Versioned API Base Path
http://localhost:3000/api/v1
System endpoints such as /health and /health/database remain outside /api/v1 because they describe application and infrastructure health rather than business resources.
3. API Versioning
PrepPilot uses URL-based API versioning.
Current version:
/api/v1
Example:
GET /api/v1/users
Versioning allows future breaking API changes to be introduced independently through a future version such as:
/api/v2
The current API contract is therefore identified as v1.
4. Content Type
JSON is used for API request and response bodies where applicable.
Clients sending JSON request bodies should use:
Content-Type: application/json
5. Authentication
PrepPilot uses JWT bearer authentication for protected endpoints.
Authenticated requests send the access token through:
Authorization: Bearer <access_token>
The authentication middleware:
1. Reads the Authorization header.
2. Extracts the Bearer token.
3. Verifies the JWT.
4. Reads the authenticated user's identifier from the token.
5. Retrieves the user from PostgreSQL.
6. Checks whether the account is active.
7. Stores the authenticated user in req.user.
Protected controllers can therefore use:
req.user.id
as the authenticated user's identity.
Client-provided user IDs must not be trusted as a replacement for the authenticated identity.
6. Standard Response Format
Successful Response
Successful endpoints generally return:
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
The exact fields depend on the endpoint.
Error Response
Errors generally follow:
{
  "success": false,
  "message": "Description of the error"
}
The HTTP status code is returned separately from the JSON response body.
7. HTTP Status Codes
Status	Meaning	PrepPilot Usage
200	OK	Successful retrieval or operation
201	Created	Successful resource creation
400	Bad Request	Invalid request data
401	Unauthorized	Missing, invalid, expired, or otherwise unusable authentication
403	Forbidden	Authenticated user is not permitted to access a resource
404	Not Found	Requested route or resource does not exist
409	Conflict	Duplicate or conflicting resource state
500	Internal Server Error	Unexpected server failure
503	Service Unavailable	Required infrastructure dependency unavailable


8. System Endpoints
8.1 Get API Information
Request
GET /
Authentication
Not required.
Purpose
Returns basic public information about the PrepPilot API.
8.2 Application Health Check
Request
GET /health
Authentication
Not required.
Purpose
Checks whether the Node.js and Express application is running.
Successful Response
{
  "success": true,
  "status": "healthy",
  "data": {
    "service": "PrepPilot API",
    "uptimeSeconds": 125,
    "timestamp": "2026-08-15T05:30:00.000Z"
  }
}
This endpoint confirms application availability but does not by itself guarantee PostgreSQL availability.
8.3 Database Health Check
Request
GET /health/database
Authentication
Not required.
Purpose
Checks whether the backend can communicate with PostgreSQL.
Successful Response
{
  "success": true,
  "status": "healthy",
  "message": "PostgreSQL connection is healthy",
  "data": {
    "databaseName": "preppilot",
    "databaseTime": "2026-08-15T05:30:00.000Z"
  }
}
Failure Response
503 Service Unavailable
{
  "success": false,
  "status": "unhealthy",
  "message": "PostgreSQL is currently unavailable"
}
9. User Endpoints
9.1 Get All Users
GET /api/v1/users
Authentication
Current endpoint availability depends on the current development authorization configuration.
Query Parameters
Parameter	Required	Default	Maximum
page	No	1	—
limit	No	20	100


Example
GET /api/v1/users?page=1&limit=20
Response
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Example User",
      "is_verified": true,
      "created_at": "2026-07-11T10:00:00.000Z",
      "updated_at": "2026-07-11T10:00:00.000Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "limit": 20,
    "totalUsers": 2,
    "totalPages": 1
  }
}
Sensitive fields such as password hashes are not returned.
9.2 Get User by ID
GET /api/v1/users/:id
Path Parameter
Parameter	Type	Required
id	Positive integer	Yes


Example
GET /api/v1/users/14
User Not Found
404 Not Found
{
  "success": false,
  "message": "User not found"
}
10. Authentication Endpoints
10.1 Register User
POST /api/v1/auth/register
Authentication
Not required.
Purpose
Creates a new PrepPilot user account.
Request Body
{
  "name": "Test User",
  "email": "testuser@preppilot.com",
  "password": "TestPass123"
}
Processing
The registration flow:
1. Validates the request.
2. Validates the email address.
3. Normalizes the email.
4. Validates the password.
5. Checks for an existing account.
6. Hashes the password using bcrypt.
7. Creates the PostgreSQL user.
8. Generates an email-verification token.
9. Stores the verification information.
10. Sends the verification email.
11. Returns safe user information.
Successful Response
201 Created
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": 14,
    "name": "Test User",
    "email": "testuser@preppilot.com",
    "is_verified": false,
    "created_at": "2026-08-15T05:24:47.623Z"
  }
}
Password hashes and verification tokens are not returned.
Duplicate Email
409 Conflict
{
  "success": false,
  "message": "An account with this email already exists"
}
Validation Examples
Weak passwords are rejected.
{
  "success": false,
  "message": "Password must contain at least 8 characters"
}
Invalid email addresses are rejected.
{
  "success": false,
  "message": "Please provide a valid email address"
}
10.2 Login User
POST /api/v1/auth/login
Authentication
Not required.
Request Body
{
  "email": "testuser@preppilot.com",
  "password": "TestPass123"
}
Processing
The login flow:
1. Validates the request.
2. Normalizes the email.
3. Finds the account in PostgreSQL.
4. Checks account status.
5. Compares the supplied password with the bcrypt hash.
6. Creates a signed JWT.
7. Returns the access token.
Successful Response
200 OK
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "<jwt-access-token>"
  }
}
Invalid Credentials
401 Unauthorized
{
  "success": false,
  "message": "Invalid email or password"
}
The response does not reveal whether the email or password was specifically incorrect.
10.3 Get Current Authenticated User
GET /api/v1/auth/me
Authentication
Required.
Request Header
Authorization: Bearer <access_token>
Purpose
Returns the currently authenticated user.
The endpoint identifies the user from the verified JWT rather than accepting a user ID from the client.
Successful Response
200 OK
{
  "success": true,
  "data": {
    "id": 14,
    "name": "Test User",
    "email": "testuser@preppilot.com",
    "is_verified": false,
    "is_active": true,
    "created_at": "2026-08-15T05:24:47.623Z",
    "updated_at": "2026-08-15T05:24:47.623Z"
  }
}
Missing Token
{
  "success": false,
  "message": "Authentication required"
}
Invalid or Expired Token
{
  "success": false,
  "message": "Invalid or expired token"
}
10.4 Email Verification
POST /api/v1/auth/verify-email
Authentication
Not required.
Purpose
Verifies ownership of the email address associated with a newly registered account.
Verification Flow
Registration
     ↓
Generate secure verification token
     ↓
Store token + expiration
     ↓
Send verification email
     ↓
User submits verification token
     ↓
Validate token
     ↓
Validate expiration
     ↓
Mark account as verified
     ↓
Remove verification token
Security
Verification tokens:
- Are generated securely.
- Have an expiration time.
- Are not returned in normal API responses.
- Are removed after successful verification.
- Cannot be reused after successful verification.
Invalid Token
{
  "success": false,
  "message": "Invalid verification token"
}
Expired tokens are rejected.
10.5 Forgot Password
POST /api/v1/auth/forgot-password
Authentication
Not required.
Request Body
{
  "email": "testuser@preppilot.com"
}
Purpose
Starts the password-recovery process.
Processing
The endpoint:
1. Validates the email.
2. Normalizes the email.
3. Checks for the account.
4. Generates a secure reset token when appropriate.
5. Stores the token and expiration.
6. Sends the password-reset email.
Response
200 OK
{
  "success": true,
  "message": "If an account with that email exists, a password reset link has been sent."
}
The response remains intentionally generic to reduce email-enumeration risk.
10.6 Reset Password
POST /api/v1/auth/reset-password
Authentication
Not required.
Request Body
{
  "token": "<password-reset-token>",
  "newPassword": "NewPass123"
}
Processing
The endpoint:
1. Validates the reset token.
2. Checks token expiration.
3. Identifies the account.
4. Validates the new password.
5. Hashes the new password using bcrypt.
6. Updates the password hash.
7. Invalidates the reset token.
Successful Response
200 OK
{
  "success": true,
  "message": "Password reset successful"
}
Invalid or Expired Token
{
  "success": false,
  "message": "Invalid or expired password reset token"
}
Reset tokens are designed to be single-use.
11. Authentication and Authorization Model
Authentication and authorization are separate responsibilities.
Authentication
Answers:
Who is the user?

PrepPilot determines this through the verified JWT and req.user.
Authorization
Answers:
Is this authenticated user allowed to access this resource?

For user-owned resources, the authenticated user ID is compared against the resource's user_id.
Conceptually:
JWT
 ↓
req.user.id
 ↓
Authenticated user
 ↓
Compare with resource.user_id
 ↓
Same user
   ↓
Allow

Different user
   ↓
Reject
This prevents one authenticated user from accessing another user's private resources.
12. Protected Route Behavior
A protected request follows:
Client
 ↓
Authorization Header
 ↓
JWT Authentication Middleware
 ↓
Verify JWT
 ↓
Find User
 ↓
Check is_active
 ↓
req.user
 ↓
Authorization / Ownership Check
 ↓
Controller
 ↓
PostgreSQL
 ↓
Response
The middleware rejects requests when:
- The Authorization header is missing.
- The token is malformed.
- The token is invalid.
- The token has expired.
- The authenticated user no longer exists.
- The account is inactive.
13. Frontend Integration
Module 5 connected the React frontend to the existing API.
The frontend communicates with the backend through the existing API utility and Axios-based request structure.
The authentication flow is:
React Login/Register Page
        ↓
API Utility / Axios
        ↓
POST /api/v1/auth/login
        ↓
Backend Authentication
        ↓
JWT Access Token
        ↓
Frontend Authentication State
        ↓
ProtectedRoute
        ↓
Authenticated Pages
The frontend also uses:
GET /api/v1/auth/me
to restore and verify the authenticated user's session state.
Protected frontend areas depend on the authenticated state maintained by the frontend authentication architecture.
The backend remains the final authority for authentication and authorization.
14. Validation
PrepPilot validates user-controlled input before processing it.
Examples include:
Email
- Must be present when required.
- Must use a valid email format.
- Is normalized before database operations.
Password
- Must satisfy the configured minimum length.
- Is checked before hashing.
- Is never returned in API responses.
User IDs
Must be positive integers where applicable.
Pagination
page must be a positive integer.
limit must be within the configured maximum.
15. Database Security
PrepPilot uses parameterized PostgreSQL queries.
Example:
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
  [userId]
);
User-controlled values are passed separately from the SQL statement.
This helps prevent SQL injection.
16. Sensitive Data Handling
PrepPilot follows these rules:
- Passwords are never returned.
- Password hashes are never returned.
- JWT secrets are never returned.
- Verification tokens are not returned through normal API responses.
- Password-reset tokens are not returned through normal API responses.
- Database credentials are not exposed.
- Environment secrets remain in .env.
- .env must not be committed to Git.
- .env.example contains placeholders rather than real secrets.
17. Email Service
PrepPilot uses Nodemailer for email delivery during development.
The email service supports authentication-related messages such as:
- Email verification.
- Password-reset instructions.
Development configuration uses environment variables such as:
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
APP_URL=http://localhost:3000
The normal Gmail account password should not be placed in the application configuration.
Gmail App Password authentication is used for the development SMTP setup.
18. Unknown Routes
Requests that do not match an implemented route return:
404 Not Found
Example:
GET /api/v1/unknown
Possible response:
{
  "success": false,
  "message": "Route not found: GET /api/v1/unknown"
}
19. API Testing
Authentication and protected API behavior were tested during Module 4.
Tested scenarios included:
Registration
- Successful registration.
- Duplicate email.
- Invalid email.
- Missing fields.
- Weak password.
- Oversized password.
Login
- Successful login.
- Incorrect credentials.
- Missing credentials.
- Invalid email.
JWT Authentication
- Missing token.
- Invalid token.
- Modified token.
- Expired token.
- Valid token.
- Authenticated user identification.
Account Security
- Inactive account protection.
- Password hash protection.
- Safe authentication error responses.
Email Verification
- Valid token.
- Invalid token.
- Missing token.
- Expired token.
- Successful verification.
- Token invalidation after verification.
Password Recovery
- Existing account.
- Non-existing account.
- Invalid reset token.
- Expired reset token.
- Valid reset token.
- Reused reset token.
- Successful password reset.
Module 5 additionally verified the frontend-to-backend integration flow, including authentication, protected navigation, session restoration, and browser refresh behavior.
20. Example Testing Commands
Register
Invoke-RestMethod `
  -Uri "http://localhost:3000/api/v1/auth/register" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"name":"Test User","email":"testuser@preppilot.com","password":"TestPass123"}'
Login
$login = Invoke-RestMethod `
  -Uri "http://localhost:3000/api/v1/auth/login" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"email":"testuser@preppilot.com","password":"TestPass123"}'

$token = $login.data.token
Current User
Invoke-RestMethod `
  -Uri "http://localhost:3000/api/v1/auth/me" `
  -Method GET `
  -Headers @{ Authorization = "Bearer $token" }
Invalid Token
Invoke-RestMethod `
  -Uri "http://localhost:3000/api/v1/auth/me" `
  -Method GET `
  -Headers @{ Authorization = "Bearer invalid-token" }
21. Current API Surface
System
Method	Endpoint	Authentication
GET	/	No
GET	/health	No
GET	/health/database	No


Users
Method	Endpoint	Authentication
GET	/api/v1/users	Development configuration
GET	/api/v1/users/:id	Development configuration


Authentication
Method	Endpoint	Authentication
POST	/api/v1/auth/register	No
POST	/api/v1/auth/login	No
GET	/api/v1/auth/me	Yes
POST	/api/v1/auth/verify-email	No
POST	/api/v1/auth/forgot-password	No
POST	/api/v1/auth/reset-password	No


22. API Architecture
Current backend request flow:
Client
 ↓
Express Application
 ↓
Route
 ↓
Authentication Middleware
 ↓
Authorization / Ownership Checks
 ↓
Controller
 ↓
PostgreSQL Connection Pool
 ↓
PostgreSQL
 ↓
JSON Response
Not every endpoint requires every layer.
For example, a public health endpoint may follow:
Client
 ↓
Express
 ↓
Route
 ↓
Controller
 ↓
Response
The architecture remains intentionally simple and can evolve as the application becomes more complex.
23. Full Application Integration
With Module 5 completed, the current PrepPilot architecture is:
React Frontend
      ↓
React Router
      ↓
Authentication State
      ↓
Axios / API Utility
      ↓
Versioned REST API
      ↓
Express Routes
      ↓
Authentication Middleware
      ↓
Authorization / Ownership Checks
      ↓
Controllers
      ↓
PostgreSQL Connection Pool
      ↓
PostgreSQL
For authenticated requests:
User
 ↓
React Login
 ↓
POST /api/v1/auth/login
 ↓
JWT
 ↓
Frontend AuthContext
 ↓
ProtectedRoute
 ↓
Authenticated Page
 ↓
API Request
 ↓
JWT Authentication Middleware
 ↓
Controller
 ↓
PostgreSQL
 ↓
JSON Response
 ↓
React UI
This represents the current full-stack foundation established through Modules 1–5.
24. Production Considerations
The current API is still under development.
Before production deployment, the project should additionally address areas such as:
- HTTPS.
- Production email infrastructure.
- Rate limiting.
- Secure CORS configuration.
- Production logging and monitoring.
- Secret management.
- Refresh-token strategy if required.
- Automated integration testing.
- Production database configuration.
- API documentation generation where appropriate.
- Security and dependency audits.
- Production error handling and observability.
- Deployment-specific configuration.
These are future hardening considerations and are not represented as completed features in version 0.4.0.
25. API Status
Implemented
- API information endpoint.
- Application health endpoint.
- PostgreSQL health endpoint.
- PostgreSQL-backed user retrieval.
- Pagination.
- Input validation.
- Parameterized SQL queries.
- API versioning.
- User registration.
- bcrypt password hashing.
- User login.
- JWT creation.
- JWT verification.
- Authentication middleware.
- Protected current-user endpoint.
- Active-account checks.
- Email verification.
- Password recovery.
- Password reset.
- Authorization checks.
- Resource ownership logic.
- Authentication test coverage.
- Security-focused response handling.
- React frontend integration.
- Frontend authentication state.
- Protected frontend routes.
- Session restoration.
- Authenticated frontend navigation.
Future
- Resume APIs.
- Interview APIs.
- Question and answer APIs.
- Technology preference APIs.
- Analytics APIs.
- AI-powered APIs.
- Production deployment.
- Automated end-to-end testing.
- Production hardening.
26. Version Information
API Version: v1
Project Version: 0.4.0
Current Milestone: Module 5 — Frontend Development Completed
API Status: Active Development
PrepPilot has progressed from a basic Express backend and PostgreSQL foundation into a full-stack application foundation supporting persistent user data, secure authentication, authorization, email verification, password recovery, protected API access, React frontend integration, protected frontend routes, session restoration, and authenticated application navigation.
27. Release Information
Previous Release
Release v0.3.0 — Complete Authentication Foundation
Established the secure backend authentication and authorization foundation.
Current Release
Release v0.4.0 — Complete Frontend Integration
Completed Module 5 and connected the React frontend with the existing PrepPilot backend and authentication architecture.
Release v0.4.0 Highlights
- Completed all 12 chapters of Module 5.
- Established the React frontend architecture.
- Established reusable frontend components.
- Established responsive page layouts.
- Integrated Axios-based API communication.
- Integrated authentication state.
- Implemented protected frontend routes.
- Implemented login and registration frontend flows.
- Established dashboard and reusable UI.
- Improved loading and error handling.
- Completed final frontend UX polish.
- Verified frontend-backend integration.
- Verified authentication and session restoration.
- Completed frontend lint verification with 0 errors.
- Completed the production frontend build.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PREPPILOT v0.4.0
COMPLETE FRONTEND INTEGRATION
MODULE 5 COMPLETED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```