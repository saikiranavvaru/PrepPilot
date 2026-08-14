# Changelog

All notable changes to **PrepPilot** are documented in this file.

PrepPilot follows [Semantic Versioning](https://semver.org/) during development.

## [Unreleased]

Changes planned for the next release will be documented here.

---

## [0.3.0] — 2026-08-14
### Authentication & Authorization

Module 4 establishes the authentication and authorization foundation for PrepPilot.

### Added

- User registration API with input validation.
- Secure password hashing using bcrypt.
- User login API with JWT authentication.
- JWT authentication middleware.
- Protected current-user endpoint.
- Email verification flow.
- SMTP email delivery for verification emails.
- Forgot-password flow.
- Password-reset flow with secure reset tokens.
- Authorization checks for authenticated users.
- Resource ownership checks.
- Authentication and authorization test coverage.
- Final authentication interview-preparation notes.

### Security

- Passwords are stored as bcrypt hashes rather than plaintext.
- JWTs are verified before protected requests are processed.
- Authenticated user identity is attached to `req.user`.
- Inactive accounts are prevented from accessing protected resources.
- Resource access is checked against the authenticated user's identity.
- Password-reset and verification tokens are time-limited.
- Authentication APIs use appropriate HTTP error responses.
- Parameterized PostgreSQL queries continue to protect database operations from SQL injection.

### Changed

- PrepPilot now has a complete backend authentication and authorization foundation.
- Protected API access now requires authenticated user identity where applicable.

### Fixed

- Authentication and authorization edge cases identified during implementation testing.
- Invalid, expired, missing, and reused authentication tokens are handled appropriately.

### Verification

- Registration flow tested.
- Login and JWT flow tested.
- Protected routes tested.
- Email verification tested.
- Forgot-password flow tested.
- Password-reset flow tested.
- Authorization and ownership checks tested.
- Invalid and expired token scenarios tested.
- Security and error-handling review completed.

---

## [0.2.0] — 2026-07-19
### Database Foundation

Module 3 established PostgreSQL as the persistent data layer for PrepPilot.

### Added

- PostgreSQL database and local development configuration.
- Core relational database schema.
- Users, technologies, resumes, interviews, questions, answers, and user-technology relationships.
- Primary keys, foreign keys, unique constraints, `NOT NULL`, defaults, checks, and referential integrity.
- Database relationships and normalized schema design.
- PostgreSQL connection pooling through Node.js.
- Database health-check endpoint.
- PostgreSQL-backed user APIs.
- API versioning using `/api/v1`.
- Pagination for user retrieval.
- Input validation for API parameters.
- Parameterized PostgreSQL queries.
- Environment-based database configuration.
- Graceful server and database shutdown.

### Changed

- Replaced temporary in-memory application data with persistent PostgreSQL storage.
- Refactored the backend into route, controller, and database configuration responsibilities.
- Introduced PostgreSQL-backed API responses.

### Removed

- Learning-only in-memory Notes, Books, and similar temporary data endpoints.
- Obsolete generic route and controller files.

### Security

- Removed passwords and unnecessary sensitive information from public API responses.
- Added parameterized SQL queries.
- Protected database credentials through environment configuration.
- Added request-body size limits and basic API hardening.

### Fixed

- PostgreSQL connection and environment configuration issues.
- Database password parsing issues involving special characters.
- API validation and response-handling issues discovered during development.

---

## [0.1.0] — 2026-07-10
### Backend Foundation

Module 2 established the initial Node.js and Express backend for PrepPilot.

### Added

- Node.js backend project.
- Express.js server.
- npm package management.
- Environment-variable configuration using `dotenv`.
- REST API fundamentals.
- Express routing.
- Route parameters and query parameters.
- Middleware.
- Controller-based request handling.
- JSON request and response handling.
- Basic CRUD API operations.
- Notes API using temporary in-memory storage.
- Postman-based API testing.
- Git and GitHub backend workflow.

### Changed

- Separated routes from controller logic.
- Introduced feature-oriented backend organization.
- Added environment-based server configuration.

---

## [0.0.1] — 2026-07-04
### Project Foundation

Module 1 established the initial project structure and engineering workflow for PrepPilot.

### Added

- PrepPilot project structure.
- `client`, `server`, and `docs` directories.
- Project README.
- Project Bible.
- Progress Tracker.
- Developer Journal.
- Interview Notes.
- API Documentation.
- Changelog.
- Git repository.
- GitHub remote repository.
- `.gitignore`.
- Initial development workflow and documentation structure.

### Established

- PrepPilot project vision and scope.
- Planned technology stack.
- Module-based development roadmap.
- Git-based version control workflow.
- Documentation-first project workflow.

---

## Release History

| Version | Date | Milestone |
|---|---|---|
| `0.3.0` | 2026-08-14 | Authentication & Authorization |
| `0.2.0` | 2026-07-19 | Database Foundation |
| `0.1.0` | 2026-07-10 | Backend Foundation |
| `0.0.1` | 2026-07-04 | Project Foundation |

---

## Current Status

| Area | Status |
|---|---|
| Project Foundation | ✅ Completed |
| Backend Foundation | ✅ Completed |
| Database Foundation | ✅ Completed |
| Authentication & Authorization | ✅ Completed |
| Frontend Development | ⏳ Not Started |
| Core Features | ⏳ Not Started |
| Deployment | ⏳ Not Started |
| Professional Finish | ⏳ Not Started |