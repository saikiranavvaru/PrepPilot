# Changelog

All notable changes to **PrepPilot** are documented in this file.

PrepPilot follows milestone-based versioning. Each major completed module represents a new project version.

---

## Versions

- [Version 0.2.0 — Database Foundation](#version-020--database-foundation)
- [Version 0.1.0 — Backend Foundation](#version-010--backend-foundation)
- [Version 0.0.1 — Project Foundation](#version-001--project-foundation)

---

# Version 0.2.0 — Database Foundation

**Release Date:** 19 July 2026

## Overview

This release establishes the complete database foundation for PrepPilot.

The project has evolved from an Express learning backend using temporary in-memory arrays into a PostgreSQL-backed REST API with persistent data storage.

The release includes relational database design, SQL fundamentals, constraints, relationships, normalization, database seeding, PostgreSQL integration, parameterized queries, pagination, health checks, input validation, environment-based configuration, and graceful shutdown.

---

## Added

### PostgreSQL Setup

* Installed and configured PostgreSQL.
* Configured the `psql` command-line client.
* Created the `preppilot` PostgreSQL database.
* Connected to the database using `psql`.
* Created and tested relational tables.
* Inserted realistic sample data.
* Verified stored records using SQL queries.

### Database Schema

Created the following core PrepPilot tables:

* `users`
* `technologies`
* `resumes`
* `interviews`
* `questions`
* `answers`
* `user_technologies`

### Database Relationships

Implemented:

* One-to-one relationship between `users` and `resumes`.
* One-to-many relationship between `users` and `interviews`.
* One-to-many relationship between `interviews` and `questions`.
* One-to-zero-or-one relationship between `questions` and `answers`.
* Many-to-many relationship between `users` and `technologies`.
* Junction table using `user_technologies`.

### Database Constraints

Implemented:

* `PRIMARY KEY`
* `FOREIGN KEY`
* `NOT NULL`
* `UNIQUE`
* `DEFAULT`
* `CHECK`
* Composite primary keys
* Referential integrity
* `ON DELETE CASCADE`

### Database Design

Completed:

* Entity identification.
* Attribute identification.
* Primary-key selection.
* Foreign-key design.
* Relationship modelling.
* Normalization.
* First Normal Form.
* Second Normal Form.
* Third Normal Form.
* Data-redundancy reduction.
* Data-integrity planning.
* Future schema-extension planning.

### SQL

Learned and implemented:

* `CREATE DATABASE`
* `CREATE TABLE`
* `INSERT`
* `SELECT`
* `UPDATE`
* `DELETE`
* `WHERE`
* `ORDER BY`
* `LIMIT`
* `OFFSET`
* `COUNT`
* `SUM`
* `AVG`
* `MIN`
* `MAX`
* `GROUP BY`
* `HAVING`
* `INNER JOIN`
* `LEFT JOIN`
* `RIGHT JOIN`
* `FULL JOIN`

### Database Seeding and Testing

* Added realistic sample users.
* Added technology records.
* Tested foreign-key constraints.
* Tested invalid relationship insertion.
* Tested referential integrity.
* Tested `ON DELETE CASCADE`.
* Verified relationship behaviour.
* Verified database records after deletion operations.

### Node.js and PostgreSQL Integration

* Installed the `pg` package.
* Installed and configured `dotenv`.
* Created a reusable PostgreSQL connection pool.
* Created `src/config/database.js`.
* Created `test-db.js`.
* Connected the Express backend to PostgreSQL.
* Added environment-based database configuration.
* Verified PostgreSQL before starting the HTTP server.
* Added unexpected PostgreSQL pool-error handling.

### Environment Configuration

* Created a private `server/.env` file.
* Created a safe `server/.env.example` file.
* Added database configuration variables.
* Verified that `.env` is ignored by Git.
* Protected database credentials and JWT secrets.
* Fixed PostgreSQL password parsing when the password contained `#`.

### System APIs

Added:

* `GET /`
* `GET /health`
* `GET /health/database`

These endpoints provide:

* API information.
* Application health.
* Node.js uptime.
* Server timestamp.
* PostgreSQL connectivity status.
* Database name and database time.

### User APIs

Added:

* `GET /api/v1/users`
* `GET /api/v1/users/:id`

Implemented:

* PostgreSQL-backed user retrieval.
* API versioning using `/api/v1`.
* User ID validation.
* Paginated user retrieval.
* Default pagination values.
* Maximum pagination limit.
* Total user counting.
* Total page calculation.
* Proper success and error responses.

### Pagination

Added pagination support using:

* `page`
* `limit`
* PostgreSQL `LIMIT`
* PostgreSQL `OFFSET`

Pagination formula:

    offset = (page - 1) × limit

Default values:

    page = 1
    limit = 20

Maximum limit:

    100

### Query Security

* Added parameterized PostgreSQL queries.
* Used `$1` and `$2` query placeholders.
* Separated SQL statements from user-supplied values.
* Reduced SQL injection risk.
* Removed direct input insertion from SQL queries.

### Input Validation

Added validation for:

* User IDs.
* Page numbers.
* Page limits.
* Zero values.
* Negative numbers.
* Decimal numbers.
* Invalid strings.
* Arrays.
* Objects.
* Unsafe integers.
* Excessively large pagination values.

### HTTP Responses

Implemented proper handling for:

* `200 OK`
* `400 Bad Request`
* `404 Not Found`
* `500 Internal Server Error`
* `503 Service Unavailable`

### Security Improvements

* Removed passwords from all user API responses.
* Removed email addresses from public user endpoints.
* Removed PostgreSQL usernames from public health responses.
* Removed unnecessary environment information from public responses.
* Disabled the Express `X-Powered-By` header.
* Added a JSON request-body size limit.
* Protected local secrets using `.gitignore`.

### Server Lifecycle

* Added PostgreSQL verification before server startup.
* Added graceful shutdown.
* Added `SIGINT` handling.
* Added `SIGTERM` handling.
* Added safe HTTP server closure.
* Added safe PostgreSQL pool closure.

### npm Scripts

Added:

* `npm start`
* `npm run dev`
* `npm run test:db`

### Backend Architecture

Created the following production-focused structure:

    server/
    ├── .env
    ├── .env.example
    ├── index.js
    ├── package.json
    ├── package-lock.json
    ├── test-db.js
    │
    └── src/
        ├── config/
        │   └── database.js
        │
        ├── controllers/
        │   ├── system.controller.js
        │   └── users.controller.js
        │
        └── routes/
            ├── system.routes.js
            └── users.routes.js

### Documentation

Updated:

* `README.md`
* `01_Project_Bible.md`
* `02_Progress_Tracker.md`
* `03_Developer_Journal.md`
* `04_Interview_Notes.md`
* `05_API_Documentation.md`
* `CHANGELOG.md`

---

## Changed

### Backend Data Storage

Changed from:

    Express
      ↓
    Temporary JavaScript Arrays
      ↓
    Data Lost After Restart

To:

    Express
      ↓
    Routes
      ↓
    Controllers
      ↓
    PostgreSQL Connection Pool
      ↓
    PostgreSQL Database
      ↓
    Persistent Data

### Backend Architecture

Changed the backend request flow from:

    Client
      ↓
    Route
      ↓
    Controller
      ↓
    Temporary Array
      ↓
    Response

To:

    Client
      ↓
    index.js
      ↓
    Route
      ↓
    Controller
      ↓
    database.js
      ↓
    PostgreSQL
      ↓
    JSON Response

### Route Naming

Renamed:

* `index.routes.js` → `system.routes.js`
* `index.controller.js` → `system.controller.js`

This change makes the file names match their real responsibilities.

### Application Entry Point

Simplified `index.js` so that it now focuses on:

* Loading environment variables.
* Creating the Express application.
* Configuring middleware.
* Mounting routes.
* Handling unknown routes.
* Verifying PostgreSQL.
* Starting the server.
* Performing graceful shutdown.

### API Structure

Changed user endpoints to use versioned URLs:

    /api/v1/users

### Public Responses

Changed API responses to expose only necessary information.

Removed:

* User passwords.
* Public user email addresses.
* PostgreSQL usernames.
* Unnecessary environment details.

---

## Removed

### Temporary Module 2 APIs

Removed the following learning-only endpoints:

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

These routes were created for learning Express and REST fundamentals and are no longer part of the current PrepPilot API.

### Temporary Data

Removed:

* Books in-memory array.
* Notes in-memory array.
* Temporary learning-only data storage.

### Old Backend Files

Removed:

* `http-server-demo.js`
* Old Notes route file.
* Old Notes controller file.
* Old generic Index route file.
* Old generic Index controller file.

### Premature Architecture Layers

Removed unused or unnecessary architecture layers that were not required at the current stage.

The current architecture intentionally remains:

    Route
      ↓
    Controller
      ↓
    Database

Service and Repository layers may be introduced later when business logic becomes more complex.

---

## Fixed

### PostgreSQL Authentication

Fixed a database authentication failure caused by the `#` symbol inside the PostgreSQL password.

Incorrect:

    DB_PASSWORD=example#password

Correct:

    DB_PASSWORD="example#password"

### npm Command Location

Fixed npm script failures caused by running commands outside the `server` directory.

Commands now run from:

    C:\Projects\preppilot\server

Or from the project root using:

    npm --prefix server run test:db

### HTTP Status Verification

Clarified that HTTP status codes are sent separately from JSON response bodies.

Status codes can be checked using:

* Postman.
* Browser Developer Tools.
* `curl`.
* PowerShell.

### User Controller Naming

Fixed old Notes-related function names that remained after converting the learning API into PostgreSQL-backed user endpoints.

---

## Learning Milestones Completed

* PostgreSQL installation and setup.
* psql usage.
* Relational database fundamentals.
* Tables, rows, and columns.
* PostgreSQL data types.
* Primary keys.
* Foreign keys.
* Constraints.
* Referential integrity.
* Database relationships.
* Junction tables.
* Normalization.
* Database seeding.
* Aggregate functions.
* Grouping and filtering.
* SQL joins.
* Database integration with Node.js.
* PostgreSQL connection pooling.
* Persistent storage.
* Environment-based configuration.
* Parameterized queries.
* SQL injection prevention.
* API versioning.
* Pagination.
* Input validation.
* Health-check APIs.
* Graceful shutdown.
* Backend refactoring.

---

## Current Project Status

### Backend

✅ Express backend operational

### Frontend

⏳ Not Started

### Database

✅ PostgreSQL database foundation completed

### Authentication

⏳ Not Started

### APIs

✅ System and PostgreSQL-backed user APIs implemented

### Security

🚧 Basic API and database security implemented  
⏳ Authentication and authorization pending

### Deployment

⏳ Not Started

---

## Module Status

| Module | Status |
|---|---|
| Module 1 — Project Foundation | ✅ Completed |
| Module 2 — Backend Foundation | ✅ Completed |
| Module 3 — Database Design | ✅ Completed |
| Module 4 — Authentication | ⏳ Not Started |
| Module 5 — Frontend Development | ⏳ Not Started |
| Module 6 — Core Features | ⏳ Not Started |
| Module 7 — Deployment | ⏳ Not Started |
| Module 8 — Professional Finish | ⏳ Not Started |

---

## Release Outcome

PrepPilot now has:

* A working Express backend.
* A relational PostgreSQL database.
* Persistent application data.
* A reusable PostgreSQL connection pool.
* Versioned REST APIs.
* System health checks.
* Database health checks.
* Paginated user retrieval.
* Input validation.
* Parameterized SQL queries.
* Safe public responses.
* Protected environment configuration.
* Graceful server shutdown.
* Professional backend documentation.

---

## Next Milestone

**Version 0.3.0 — Authentication and Authorization**

Planned Features:

* User registration.
* User login.
* bcrypt password hashing.
* JWT creation.
* JWT verification.
* Authentication middleware.
* Protected routes.
* Current-user profile.
* Authorization.
* Secure authentication responses.
* Duplicate-email handling.
* Authentication testing.

---

# Version 0.1.0 — Backend Foundation

**Release Date:** 10 July 2026

## Overview

This release established the backend foundation for PrepPilot.

The project gained a working Node.js and Express server, REST API fundamentals, routing, middleware, environment configuration, controller separation, Postman testing, and a mini backend project using temporary in-memory storage.

---

## Added

### Backend Setup

* Initialized the Node.js backend.
* Configured npm and package management.
* Created `package.json`.
* Installed Express.js.
* Created the Express application.
* Configured environment variables using `dotenv`.

### HTTP and REST APIs

* Created a pure Node.js HTTP server for learning.
* Learned the HTTP request and response lifecycle.
* Implemented GET requests.
* Implemented POST requests.
* Implemented PUT and PATCH concepts.
* Implemented DELETE requests.
* Created REST-style endpoints.
* Used JSON request and response bodies.
* Used standard HTTP status codes.

### Routing

* Created static routes.
* Created dynamic routes.
* Used route parameters.
* Used query parameters.
* Introduced Express Router.
* Created feature-based route files.

### Middleware

* Configured `express.json()`.
* Learned built-in middleware.
* Created custom middleware.
* Added request logging.
* Used route-specific middleware.
* Learned middleware execution order.

### Controllers

* Created controller files.
* Separated route definitions from request-handling logic.
* Learned the Route → Controller → Response flow.

### Mini Backend Project

* Created a Notes API.
* Implemented `GET /notes`.
* Implemented `GET /notes/:id`.
* Implemented `POST /notes`.
* Implemented `DELETE /notes/:id`.
* Used temporary in-memory data storage.
* Tested APIs using Postman.

### Tools

Configured and used:

* Node.js.
* npm.
* Express.js.
* dotenv.
* Postman.
* Visual Studio Code.
* Windows PowerShell.
* Git.
* GitHub.

### Documentation

Updated:

* `README.md`
* `02_Progress_Tracker.md`
* `03_Developer_Journal.md`
* `04_Interview_Notes.md`
* `05_API_Documentation.md`
* `CHANGELOG.md`

---

## Learning Milestones Completed

* Node.js fundamentals.
* npm.
* `package.json`.
* Express.js.
* HTTP server.
* Requests and responses.
* Routing.
* Route parameters.
* Query parameters.
* REST APIs.
* CRUD operations.
* Middleware.
* Environment variables.
* Express Router.
* Controllers.
* Feature-based architecture.
* Postman.
* API testing.
* Mini backend project.

---

## Current Project Status at Release

### Backend

✅ Backend Foundation Completed

### Frontend

⏳ Not Started

### Database

⏳ Not Started

### Authentication

⏳ Not Started

### APIs

✅ Basic learning APIs implemented

### Deployment

⏳ Not Started

---

## Module Status at Release

| Module | Status |
|---|---|
| Module 1 — Project Foundation | ✅ Completed |
| Module 2 — Backend Foundation | ✅ Completed |
| Module 3 — Database Design | ⏳ Not Started |
| Module 4 — Authentication | ⏳ Not Started |
| Module 5 — Frontend Development | ⏳ Not Started |
| Module 6 — Core Features | ⏳ Not Started |
| Module 7 — Deployment | ⏳ Not Started |
| Module 8 — Professional Finish | ⏳ Not Started |

---

## Release Outcome

PrepPilot gained:

* A working Express server.
* REST API fundamentals.
* Route and controller separation.
* Middleware understanding.
* Environment-variable support.
* Postman API testing.
* A mini Notes backend.
* A foundation for database integration.

---

## Next Milestone

**Version 0.2.0 — Database Foundation**

Planned Features:

* PostgreSQL.
* SQL.
* Database design.
* Table relationships.
* Primary keys.
* Foreign keys.
* Constraints.
* Normalization.
* Express and PostgreSQL integration.

---

# Version 0.0.1 — Project Foundation

**Release Date:** 04 July 2026

## Overview

This release marks the beginning of the PrepPilot project.

The project foundation was established through project planning, version control, documentation, development-environment setup, and the initial folder structure.

---

## Added

### Project Setup

* Created the PrepPilot project.
* Created the root project directory.
* Created `client`, `server`, and `docs` directories.
* Created the main `README.md`.
* Created `CHANGELOG.md`.
* Created `.gitignore`.
* Initialized the Git repository.
* Connected the project to GitHub.
* Created the first Git commit.

### Documentation

Created:

* `01_Project_Bible.md`
* `02_Progress_Tracker.md`
* `03_Developer_Journal.md`
* `04_Interview_Notes.md`
* `05_API_Documentation.md`

### Development Environment

Configured:

* Visual Studio Code.
* Windows PowerShell.
* Node.js.
* npm.
* Git.
* GitHub.
* PostgreSQL preparation tools.

### Git Workflow

Learned and used:

* Working directory.
* Staging area.
* Local repository.
* Remote repository.
* `git status`.
* `git add`.
* `git commit`.
* `git log`.
* Commit hashes.
* `HEAD`.
* Branches.
* Push workflow.

---

## Learning Milestones Completed

* Project planning.
* Technology-stack planning.
* Git fundamentals.
* Repository creation.
* Working directory.
* Staging area.
* Git status.
* Git add.
* Git commit.
* Git log.
* Commit hash.
* HEAD.
* README.
* CHANGELOG.
* Professional project structure.
* Documentation workflow.

---

## Current Project Status at Release

### Backend

⏳ Not Started

### Frontend

⏳ Not Started

### Database

⏳ Not Started

### Authentication

⏳ Not Started

### APIs

⏳ Not Started

### Deployment

⏳ Not Started

---

## Module Status at Release

| Module | Status |
|---|---|
| Module 1 — Project Foundation | ✅ Completed |
| Module 2 — Backend Foundation | ⏳ Not Started |
| Module 3 — Database Design | ⏳ Not Started |
| Module 4 — Authentication | ⏳ Not Started |
| Module 5 — Frontend Development | ⏳ Not Started |
| Module 6 — Core Features | ⏳ Not Started |
| Module 7 — Deployment | ⏳ Not Started |
| Module 8 — Professional Finish | ⏳ Not Started |

---

## Release Outcome

PrepPilot gained:

* A clear product vision.
* A planned technology stack.
* A professional project structure.
* Git and GitHub version control.
* Engineering documentation.
* A structured development roadmap.

---

## Next Milestone

**Version 0.1.0 — Backend Foundation**

Planned Features:

* Node.js fundamentals.
* npm.
* `package.json`.
* Express.js.
* HTTP server.
* Routing.
* REST APIs.
* Middleware.
* Environment variables.
* Professional backend architecture.

---

PrepPilot has now completed its database foundation and is ready to begin secure Authentication and Authorization development.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Changelog Updated ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━