# PrepPilot — Changelog

All notable changes to PrepPilot are documented in this file.

The project follows semantic versioning where practical:

- **MAJOR** — breaking changes
- **MINOR** — new functionality
- **PATCH** — fixes and improvements

---

# [0.3.0] — Module 4: Authentication & Authorization

**Status:** Released  
**Date:** 15 August 2026

## Added

- User registration API.
- User login API with JWT authentication.
- Password hashing with bcrypt.
- JWT authentication middleware.
- Protected authentication routes.
- Current authenticated-user endpoint.
- Authorization and resource-ownership checks.
- Email verification flow.
- Verification-token expiration handling.
- Forgot-password flow.
- Password-reset flow.
- Password-reset token expiration and invalidation.
- Inactive-account protection.
- Authentication input validation.
- Secure authentication error handling.
- Nodemailer/Gmail email service for verification and password-reset emails.
- Comprehensive authentication test coverage.

## Security

- Password hashes are never returned through API responses.
- JWTs are validated before protected resources are accessed.
- Invalid, modified, and expired tokens are rejected.
- Verification and password-reset tokens are validated and expire.
- Password-reset tokens are invalidated after successful use.
- Resource ownership is checked before accessing user-owned resources.
- Authentication failures return safe error messages.

## Verification

- Registration and login flows tested successfully.
- Protected routes tested with missing, invalid, modified, and expired JWTs.
- Email verification tested with valid, invalid, missing, and expired tokens.
- Password recovery tested with valid, invalid, expired, and reused reset tokens.
- Inactive-account protection tested.
- Authentication validation and error-handling scenarios tested.
- Sensitive user information reviewed to ensure it is not exposed.

## Documentation

- Updated Project Bible for the Module 4 milestone.
- Updated API Documentation with implemented authentication and authorization endpoints.
- Updated Progress Tracker with completed Module 4 work.
- Updated Developer Journal with Module 4 implementation and testing history.
- Updated Interview Notes with authentication and authorization concepts.

---

# [0.2.0] — Module 3: Database Foundation

**Status:** Released

## Added

- PostgreSQL database integration.
- Relational database schema for PrepPilot.
- Users, resumes, interviews, questions, answers, technologies, and user-technology relationships.
- Primary and foreign keys.
- Database constraints and referential integrity.
- Normalized relational design.
- PostgreSQL connection pooling.
- Parameterized SQL queries.
- Database-backed user APIs.
- API versioning with `/api/v1`.
- Pagination and input validation.
- Application and database health-check endpoints.
- Graceful database/server shutdown.

## Changed

- Replaced temporary in-memory data with persistent PostgreSQL storage.
- Removed temporary Books and Notes learning endpoints.
- Reorganised backend routes and controllers around PrepPilot resources.

---

# [0.1.0] — Module 2: Backend Foundation

**Status:** Released

## Added

- Node.js backend foundation.
- Express.js application.
- REST API fundamentals.
- Routing and route parameters.
- Query parameters and request bodies.
- HTTP methods and status codes.
- Middleware.
- Express Router.
- Controller-based structure.
- Temporary CRUD APIs.
- Environment-variable configuration.
- Postman API testing.

---

# [0.0.1] — Module 1: Project Foundation

**Status:** Released

## Added

- PrepPilot project initialization.
- Git and GitHub repository.
- Initial project structure.
- README documentation.
- Project Bible.
- Progress Tracker.
- Developer Journal.
- Interview Notes.
- API Documentation.
- CHANGELOG.
- Initial development workflow and documentation system.

---

# Current Status

**Current Version:** `0.3.0`  
**Current Milestone:** Module 4 — Authentication & Authorization  
**Modules Completed:** 4  
**Project Status:** Active Development 🚀

**Next Major Milestone:** Module 5 — Frontend Development