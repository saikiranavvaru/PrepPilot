# 🚀 PrepPilot — Project Bible

**Version:** 0.2.0  
**Project Status:** Active Development  
**Latest Update:** 19 July 2026

---

# 📖 Project Overview

PrepPilot is a full-stack AI-powered interview preparation platform designed to help students, graduates, and aspiring software engineers prepare for technical interviews in a structured, practical, and measurable way.

The platform will allow users to:

- 🤖 Practise AI-assisted mock interviews.
- 📄 Upload and manage resumes.
- 📝 Answer technical and behavioural interview questions.
- 📊 Track interview performance and progress.
- 🎯 Receive personalised learning recommendations.
- 📈 Review scores, feedback, strengths, and improvement areas.
- 🧠 Build confidence through repeated interview practice.

PrepPilot is being developed as a long-term engineering project rather than a temporary academic assignment.

The project is intended to demonstrate real full-stack development, backend engineering, database design, authentication, REST API development, deployment, documentation, and professional Git workflows.

---

# 🎯 Product Vision

PrepPilot aims to provide one organised platform where users can prepare for software-engineering interviews, manage their learning progress, and receive useful feedback based on their performance.

The long-term user journey is:

    Create Account
          ↓
    Build User Profile
          ↓
    Upload Resume
          ↓
    Select Technologies
          ↓
    Start Mock Interview
          ↓
    Answer Questions
          ↓
    Receive Scores and Feedback
          ↓
    Track Progress
          ↓
    Improve Weak Areas

---

# 🏆 Project Mission

> Build PrepPilot as a real full-stack software product that demonstrates strong engineering fundamentals, secure architecture, clean code, professional documentation, and continuous technical improvement.

---

# 👨‍💻 Developer Information

- **Developer:** Sai Kiran Avvaru
- **Program:** B.Tech Computer Science Engineering
- **Institution:** SRM University AP × Kalvium
- **Specialisation:** AI and Full-Stack Development
- **Project Type:** Long-Term Full-Stack Engineering Project
- **Development Environment:** Windows 11, Visual Studio Code, PowerShell
- **Version Control:** Git and GitHub

---

# 🎯 Project Objectives

## Product Objectives

- Build a complete interview-preparation platform.
- Provide realistic mock-interview experiences.
- Store and analyse user interview performance.
- Support resume-based preparation.
- Generate meaningful feedback and recommendations.
- Help users identify strengths and weaknesses.
- Create a clear interview-preparation workflow.

## Technical Objectives

- Build a modular React frontend.
- Build a structured Node.js and Express backend.
- Design a relational PostgreSQL database.
- Implement secure authentication and authorization.
- Build versioned REST APIs.
- Use persistent data storage.
- Add input validation and error handling.
- Integrate AI-powered interview features.
- Deploy the frontend, backend, and database.
- Follow scalable software-development practices.

## Learning Objectives

- Understand how full-stack applications work from end to end.
- Learn backend architecture and REST API design.
- Learn relational database design and SQL.
- Learn authentication and application security.
- Learn production deployment.
- Improve debugging and problem-solving skills.
- Develop professional Git and documentation habits.
- Build confidence in real software-engineering workflows.

---

# 👥 Intended Users

PrepPilot is mainly designed for:

- Computer Science students.
- Engineering students.
- Fresh graduates.
- Entry-level software developers.
- Candidates preparing for internships.
- Candidates preparing for technical interviews.
- Learners who want structured interview practice.
- Developers who want to track interview performance.

---

# ✨ Core Product Features

## User Management

- User registration.
- User login.
- Secure password storage.
- JWT-based authentication.
- User profile management.
- Protected user routes.
- Account verification support.

## Resume Management

- Resume upload.
- Resume storage.
- Resume summary.
- Resume-based interview preparation.
- Resume update and replacement.
- Future AI-assisted resume analysis.

## Interview Management

- Create mock interview sessions.
- Select interview topics or technologies.
- Generate interview questions.
- Record interview completion.
- Store interview scores.
- Store interview history.
- Review previous interview attempts.

## Question and Answer Management

- Store interview questions.
- Assign difficulty levels.
- Save user answers.
- Store scores and feedback.
- Review answers after completion.
- Identify weak technical areas.

## Technology Management

- Store supported technologies.
- Associate users with technologies.
- Support many-to-many relationships.
- Personalise questions based on selected technologies.

## Progress and Analytics

- Track completed interviews.
- Track average scores.
- Track improvement over time.
- Display strengths and weaknesses.
- Generate personalised recommendations.
- Display interview history and performance trends.

## AI Features

- AI-generated interview questions.
- AI-assisted answer evaluation.
- AI-generated feedback.
- Resume-based question generation.
- Personalised recommendations.
- Weak-area identification.
- Future conversational mock-interview support.

---

# 🛠️ Technology Stack

## Frontend

- React
- Tailwind CSS
- React Router
- Axios
- JavaScript
- HTML
- CSS

## Backend

- Node.js
- Express.js
- REST APIs
- Express Router
- Middleware
- CommonJS modules
- JSON request and response handling

## Database

- PostgreSQL
- SQL
- Relational Database Design
- PostgreSQL connection pooling
- Neon PostgreSQL for production hosting

## Authentication and Security

- JSON Web Tokens
- bcrypt
- Password hashing
- Protected routes
- Authorization
- Environment variables
- Parameterized SQL queries

## Tools and Development Environment

- Visual Studio Code
- Windows PowerShell
- Git
- GitHub
- Postman
- npm
- PostgreSQL
- psql
- Browser Developer Tools

## Deployment

- Vercel for frontend deployment
- Render for backend deployment
- Neon for PostgreSQL hosting
- Environment-based configuration
- Production health checks

---

# 🏗️ Current System Architecture

The current backend follows a clear request flow:

    Client
      ↓
    Express Application
      ↓
    Route File
      ↓
    Controller
      ↓
    PostgreSQL Connection Pool
      ↓
    PostgreSQL Database
      ↓
    JSON Response

The future complete architecture will be:

    React Frontend
          ↓
    Versioned REST API
          ↓
    Authentication and Authorization
          ↓
    Routes
          ↓
    Controllers
          ↓
    Business Logic
          ↓
    PostgreSQL Database
          ↓
    AI Services and Analytics

---

# 📂 Current Project Structure

    PrepPilot/
    │
    ├── client/
    │
    ├── server/
    │   ├── src/
    │   │   ├── config/
    │   │   │   └── database.js
    │   │   │
    │   │   ├── controllers/
    │   │   │   ├── system.controller.js
    │   │   │   └── users.controller.js
    │   │   │
    │   │   └── routes/
    │   │       ├── system.routes.js
    │   │       └── users.routes.js
    │   │
    │   ├── .env
    │   ├── .env.example
    │   ├── index.js
    │   ├── test-db.js
    │   ├── package.json
    │   └── package-lock.json
    │
    ├── docs/
    │   ├── 01_Project_Bible.md
    │   ├── 02_Progress_Tracker.md
    │   ├── 03_Developer_Journal.md
    │   ├── 04_Interview_Notes.md
    │   └── 05_API_Documentation.md
    │
    ├── README.md
    ├── CHANGELOG.md
    └── .gitignore

---

# ⚙️ Current Backend Responsibilities

## `index.js`

The backend entry point is responsible for:

- Loading environment variables.
- Creating the Express application.
- Configuring global middleware.
- Mounting route files.
- Handling unknown routes.
- Verifying PostgreSQL connectivity.
- Starting the server.
- Closing the HTTP server and PostgreSQL pool safely.

## `system.routes.js`

Defines system-level endpoints:

- `GET /`
- `GET /health`
- `GET /health/database`

## `system.controller.js`

Handles:

- API information.
- Application health.
- Database health.

## `users.routes.js`

Defines user-related endpoints:

- `GET /api/v1/users`
- `GET /api/v1/users/:id`

## `users.controller.js`

Handles:

- Reading user data from PostgreSQL.
- Pagination.
- User ID validation.
- Parameterized queries.
- HTTP responses and errors.

## `database.js`

Creates and exports one reusable PostgreSQL connection pool.

## `test-db.js`

Tests the PostgreSQL connection without starting the Express server.

## `.env`

Stores real private configuration values.

## `.env.example`

Documents required environment variables using safe placeholders.

---

# 🌐 Current API Endpoints

## System Endpoints

- `GET /`
  - Returns basic PrepPilot API information.

- `GET /health`
  - Confirms that Node.js and Express are running.

- `GET /health/database`
  - Confirms that PostgreSQL is reachable.

## User Endpoints

- `GET /api/v1/users`
  - Returns paginated user records.

- `GET /api/v1/users/:id`
  - Returns one user by ID.

## Pagination Example

    GET /api/v1/users?page=1&limit=20

---

# 🗄️ Current Database Design

PrepPilot currently uses the following main PostgreSQL tables:

- `users`
- `technologies`
- `resumes`
- `interviews`
- `questions`
- `answers`
- `user_technologies`

## Main Relationships

    users 1 ─── 1 resumes

    users 1 ─── N interviews

    interviews 1 ─── N questions

    questions 1 ─── 0..1 answers

    users M ─── N technologies
              through
         user_technologies

## Database Integrity

The database schema uses:

- Primary keys.
- Foreign keys.
- `NOT NULL`.
- `UNIQUE`.
- `DEFAULT`.
- `CHECK`.
- Composite primary keys.
- Referential integrity.
- `ON DELETE CASCADE`.

---

# 🔒 Security Principles

PrepPilot follows these security rules:

- Never store secrets directly in source code.
- Keep real secrets inside `.env`.
- Never commit `.env` to GitHub.
- Use `.env.example` for safe placeholders.
- Never return passwords through APIs.
- Avoid exposing unnecessary personal information.
- Use parameterized SQL queries.
- Hash passwords before storing them.
- Protect private routes with authentication.
- Use authorization for role-based access.
- Hide unnecessary server implementation details.
- Validate all user-supplied input.
- Return safe error messages in production.

---

# ⚙️ Engineering Principles

- Understand every concept before adding it.
- Keep each file focused on one responsibility.
- Prefer simple architecture over unnecessary complexity.
- Add new layers only when they are genuinely needed.
- Use meaningful names for files, functions, and routes.
- Write readable and maintainable code.
- Use parameterized queries for database operations.
- Protect sensitive configuration.
- Build features incrementally.
- Test every important endpoint.
- Use meaningful Git commits.
- Keep project documentation updated.
- Refactor when the project grows, not only to look advanced.
- Follow professional coding and folder-structure practices.
- Treat PrepPilot as a real software product.

---

# 📚 Documentation System

PrepPilot maintains the following documentation:

## `README.md`

Provides a public overview of the project, setup instructions, technology stack, and current status.

## `01_Project_Bible.md`

Defines the product vision, architecture, objectives, roadmap, and engineering principles.

## `02_Progress_Tracker.md`

Tracks completed chapters, milestones, module progress, and overall completion.

## `03_Developer_Journal.md`

Records implementation work, mistakes, debugging, lessons, and technical decisions.

## `04_Interview_Notes.md`

Stores revision questions, important concepts, and technical interview preparation notes.

## `05_API_Documentation.md`

Documents endpoints, methods, parameters, status codes, request bodies, and responses.

## `CHANGELOG.md`

Records important additions, changes, fixes, and releases.

Documentation must evolve together with the codebase.

---

# 🗺️ Project Roadmap

# ✅ Module 1 — Project Foundation

**Status:** Completed  
**Completion Date:** 04 July 2026

## Topics Completed

- Project planning.
- Technology-stack selection.
- Git installation.
- Node.js installation.
- Git repository initialization.
- GitHub repository creation.
- Project folder structure.
- README creation.
- CHANGELOG creation.
- Documentation setup.
- Git workflow.
- Staging and commits.
- Remote repository connection.
- First project release foundation.

---

# ✅ Module 2 — Backend Foundation

**Status:** Completed  
**Completion Date:** 10 July 2026

## Topics Completed

- Node.js fundamentals.
- npm and `package.json`.
- Express.js.
- Pure Node.js HTTP server.
- Request and response lifecycle.
- Routing.
- Route parameters.
- Query parameters.
- Request bodies.
- REST APIs.
- HTTP methods.
- HTTP status codes.
- CRUD operations.
- Middleware.
- Environment variables.
- Express Router.
- Controllers.
- Feature-based structure.
- Postman.
- Mini backend project.
- Temporary Books and Notes APIs.

## Module Outcome

PrepPilot gained a working Express backend and a clear understanding of:

    Client
      ↓
    Route
      ↓
    Controller
      ↓
    Response

---

# ✅ Module 3 — Database Design and PostgreSQL

**Status:** Technical Work Completed  
**Completion Date:** 19 July 2026

## Topics Completed

- Why databases exist.
- PostgreSQL installation.
- psql setup.
- SQL fundamentals.
- Tables, rows, and columns.
- Data types.
- Primary keys.
- Foreign keys.
- Constraints.
- Referential integrity.
- One-to-one relationships.
- One-to-many relationships.
- Many-to-many relationships.
- Junction tables.
- Normalization.
- 1NF, 2NF, and 3NF.
- Aggregate functions.
- `GROUP BY`.
- `HAVING`.
- Joins.
- Database seeding.
- Testing foreign keys.
- Testing `ON DELETE CASCADE`.
- Connecting Node.js to PostgreSQL.
- Installing `pg`.
- PostgreSQL connection pooling.
- Environment-based database configuration.
- Parameterized queries.
- Persistent user data.
- API versioning.
- Pagination.
- Health-check endpoints.
- Graceful shutdown.
- Backend cleanup and refactoring.

## Module Outcome

PrepPilot evolved from an in-memory learning server into a PostgreSQL-backed API.

Current flow:

    Client
      ↓
    Express
      ↓
    Routes
      ↓
    Controllers
      ↓
    PostgreSQL Pool
      ↓
    PostgreSQL Database
      ↓
    JSON Response

---

# 🚧 Module 4 — Authentication and Authorization

**Status:** Not Started

## Planned Topics

- bcrypt password hashing.
- User registration.
- User login.
- JSON Web Tokens.
- Token creation.
- Token verification.
- Authentication middleware.
- Protected routes.
- Authorization.
- Current-user profile.
- Secure error handling.
- Account security.

## Planned Endpoints

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/users/me`

---

# 🚧 Module 5 — Frontend Development

**Status:** Not Started

## Planned Topics

- React fundamentals.
- Component architecture.
- Props.
- State management.
- React Router.
- Forms.
- API integration.
- Axios.
- Authentication state.
- Protected frontend routes.
- Tailwind CSS.
- Responsive design.
- Loading states.
- Error states.
- Dashboard architecture.

---

# 🚧 Module 6 — Core PrepPilot Features

**Status:** Not Started

## Planned Features

- Resume upload and management.
- Technology selection.
- Interview creation.
- Question generation.
- Answer submission.
- Interview scoring.
- Feedback storage.
- Interview history.
- Progress tracking.
- Analytics dashboard.
- Recommendations.
- AI integration.

---

# 🚧 Module 7 — Deployment

**Status:** Not Started

## Planned Topics

- Frontend deployment.
- Backend deployment.
- PostgreSQL hosting.
- Environment-variable configuration.
- Production database connection.
- CORS configuration.
- Build configuration.
- Deployment debugging.
- Health checks.
- Domain configuration.
- Production monitoring.

---

# 🚧 Module 8 — Final Polish

**Status:** Not Started

## Planned Topics

- Automated testing.
- Manual testing.
- Bug fixing.
- Error handling.
- Security review.
- Performance optimisation.
- Accessibility.
- Responsive-design review.
- Documentation review.
- Code cleanup.
- Git history review.
- Portfolio presentation.
- Resume integration.
- Final release.

---

# 📈 Current Project Status

    Project Started:                   04 July 2026
    Latest Update:                     19 July 2026
    Current Milestone:                 Database Foundation Completed

    Module 1 — Project Foundation      ✅ Completed
    Module 2 — Backend Foundation      ✅ Completed
    Module 3 — Database Design         ✅ Technical Work Completed
    Module 4 — Authentication          ⏳ Not Started
    Module 5 — Frontend Development    ⏳ Not Started
    Module 6 — Core Features           ⏳ Not Started
    Module 7 — Deployment              ⏳ Not Started
    Module 8 — Final Polish            ⏳ Not Started

---

# 📊 Overall Progress

    Completed Modules: 3
    Total Planned Modules: 8

    3 ÷ 8 × 100 = 37.5%

    PrepPilot Technical Progress:
    Approximately 37.5% Complete 🚀

---

# 🔄 Major Project Evolution

## Module 2 State

    Express Server
          ↓
    Temporary Books and Notes Arrays
          ↓
    Data Lost After Restart

## Module 3 State

    Express Server
          ↓
    Routes
          ↓
    Controllers
          ↓
    PostgreSQL Connection Pool
          ↓
    Persistent PostgreSQL Data

This transition represents one of the most important architectural milestones in PrepPilot.

---

# 🎯 End Goal

By the completion of PrepPilot, the project should demonstrate:

- Full-stack application development.
- React frontend development.
- Backend engineering.
- REST API design.
- PostgreSQL database design.
- Authentication and authorization.
- Security fundamentals.
- AI-service integration.
- Testing and debugging.
- Deployment and environment configuration.
- Git and GitHub workflows.
- Professional technical documentation.
- Clean and maintainable software architecture.
- Production-style engineering practices.

---

# 🧱 Long-Term Architecture Philosophy

The project should grow gradually.

Current structure:

    Route
      ↓
    Controller
      ↓
    Database

Possible future structure when complexity increases:

    Route
      ↓
    Controller
      ↓
    Service
      ↓
    Repository
      ↓
    Database

Additional layers should only be introduced when the application genuinely needs them.

The goal is not to create the maximum number of folders.

The goal is to create code that is:

- understandable
- secure
- maintainable
- testable
- scalable
- appropriate for the project’s current size

---

# 🏁 Current Milestone

**Completed:** Module 3 — Database Design and PostgreSQL  
**Next:** Module 4 — Authentication and Authorization

PrepPilot now has a stable backend and database foundation that can support secure user accounts, resumes, interviews, questions, answers, analytics, and AI-powered features.

---

# 🏆 Final Mission Statement

> PrepPilot is being built not only to complete a course, but to become a serious full-stack portfolio project that demonstrates real engineering knowledge, disciplined learning, secure development, and the ability to build a complete software product from foundation to deployment.

---

**Current Milestone:** ✅ Database Foundation Completed  
**Next Milestone:** 🔐 Authentication and Authorization  
**Current Technical Progress:** Approximately 37.5% Complete  
**Status:** Building a full-stack AI Interview Preparation Platform 🚀