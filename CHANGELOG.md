# PrepPilot — Changelog

All notable changes to PrepPilot are documented in this file.

The project follows semantic versioning where practical:

- **MAJOR** — breaking changes
- **MINOR** — new functionality
- **PATCH** — fixes and improvements

---

# [0.4.0] — Module 5: Frontend Development & Integration

**Status:** Released  
**Date:** 31 August 2026

## Added

- Complete React frontend foundation for PrepPilot.
- React component-based frontend architecture.
- Reusable frontend components.
- React Router page architecture.
- Frontend form handling and validation.
- Tailwind CSS UI architecture.
- Responsive frontend layouts.
- Reusable page-level layout with `PageLayout.jsx`.
- Responsive navigation.
- Dashboard interface.
- Practice interface.
- Progress interface.
- Profile interface.
- Login and registration interfaces.
- Axios-based API communication.
- Frontend authentication state management.
- Protected frontend routes.
- JWT-based frontend session handling.
- Authentication-aware frontend behavior.
- Browser refresh session restoration.
- Frontend loading states.
- Frontend error handling.
- Form submission feedback.
- Authentication-related user feedback.
- Protected-route loading behavior.
- Empty and fallback UI states.
- Responsive dashboard statistics using reusable UI components.
- Reusable `Card.jsx` and `StatCard.jsx` components.
- Final frontend UX and interaction polish.

## Changed

- Connected the React frontend to the existing PrepPilot backend API.
- Connected frontend authentication flows with the backend authentication system.
- Improved responsive behavior across desktop, tablet, and phone screen sizes.
- Improved page spacing and content-width consistency.
- Improved flexbox and grid layouts.
- Improved long-text and email wrapping.
- Reduced unnecessary horizontal scrolling.
- Improved frontend navigation and protected-page behavior.
- Improved loading and error feedback across frontend interactions.
- Removed unnecessary development and debugging UI.
- Removed unnecessary development console output.
- Improved frontend component consistency and reusability.

## Authentication

- Integrated frontend authentication with the existing JWT-based backend.
- Added authenticated user state through `AuthContext.jsx`.
- Added protected frontend access through `ProtectedRoute.jsx`.
- Connected login and registration interfaces to the authentication API.
- Added session restoration after browser refresh.
- Maintained backend authentication and authorization boundaries.

## UX and Responsive Improvements

- Added consistent page-level layout architecture.
- Improved navigation behavior across screen sizes.
- Improved Dashboard responsive behavior.
- Improved Practice responsive behavior.
- Improved Progress responsive behavior.
- Improved Profile responsive behavior.
- Improved Login responsive behavior.
- Improved Register responsive behavior.
- Added appropriate loading feedback.
- Added appropriate error feedback.
- Prevented duplicate submissions during loading.
- Improved button and interaction feedback.
- Improved fallback and empty states.

## Verification

- Verified frontend navigation.
- Verified login flow.
- Verified registration flow.
- Verified authentication state.
- Verified session restoration after browser refresh.
- Verified protected-route behavior.
- Verified Practice topic selection.
- Verified Practice Session navigation.
- Verified Dashboard behavior.
- Verified Progress page behavior.
- Verified Profile page behavior.
- Verified responsive behavior on desktop.
- Verified responsive behavior on tablet.
- Verified responsive behavior on phone.
- Verified loading behavior.
- Verified error behavior.
- Verified frontend integration with the backend API.
- Completed frontend lint verification with **0 errors**.
- Completed the production frontend build successfully.
- Verified the complete frontend integration flow.

## Documentation

- Updated Project Bible for the completion of Module 5.
- Updated Progress Tracker with all completed Module 5 chapters.
- Updated Developer Journal with Module 5 implementation history.
- Updated Interview Notes with frontend and responsive UI concepts.
- Updated API Documentation to reflect the current project integration state.
- Updated CHANGELOG with the Module 5 release.
- Updated project version from `0.3.0` to `0.4.0`.

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

**Current Version:** `0.4.0`  
**Current Milestone:** Module 5 — Frontend Development Completed  
**Modules Completed:** 5  
**Project Status:** Active Development

**Latest Release:** `v0.4.0 — Complete Frontend Integration`

**Next Major Milestone:** Module 6 — Core PrepPilot Features