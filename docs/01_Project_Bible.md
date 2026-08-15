# PrepPilot — Project Bible

**Version:** 0.3.0  
**Project Status:** Active Development  
**Latest Update:** 15 August 2026  
**Current Milestone:** Module 4 — Authentication & Authorization Completed  
**Next Milestone:** Module 5 — Frontend Development

---

# 1. Project Overview

PrepPilot is a full-stack AI-powered interview preparation platform designed to help students, graduates, and aspiring software engineers prepare for technical interviews in a structured, practical, and measurable way.

The platform is being developed as a long-term software engineering project rather than a temporary academic assignment.

PrepPilot is intended to demonstrate real-world engineering practices across:

- Frontend development
- Backend engineering
- REST API design
- Database design
- Authentication and authorization
- Application security
- AI integration
- Testing
- Deployment
- Documentation
- Git and GitHub workflows

The long-term product will provide users with a single platform for interview practice, resume-based preparation, performance tracking, feedback, and personalised improvement.

---

# 2. Product Vision

PrepPilot aims to provide one organised platform where users can prepare for software-engineering interviews, practise realistic interview scenarios, understand their performance, and continuously improve their weak areas.

The intended user journey is:

    Create Account
          ↓
    Verify Account
          ↓
    Build Profile
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

The product will gradually evolve from a secure full-stack foundation into an AI-assisted interview preparation platform.

---

# 3. Project Mission

> Build PrepPilot as a serious full-stack software product that demonstrates strong engineering fundamentals, secure architecture, maintainable code, professional documentation, and continuous technical improvement.

The project prioritises understanding and engineering quality over simply adding features.

---

# 4. Project Objectives

## Product Objectives

- Provide structured technical interview preparation.
- Support realistic mock-interview experiences.
- Allow users to manage resumes and preparation data.
- Record interview performance.
- Provide useful feedback and recommendations.
- Help users identify strengths and weaknesses.
- Track improvement over time.
- Create a complete interview-preparation workflow.

## Technical Objectives

- Build a modular React frontend.
- Build a structured Node.js and Express backend.
- Design and maintain a relational PostgreSQL database.
- Implement secure authentication and authorization.
- Build versioned REST APIs.
- Validate and safely process user input.
- Maintain persistent application data.
- Integrate AI-powered features.
- Deploy the application using production-oriented infrastructure.
- Follow maintainable software-engineering practices.

## Learning Objectives

- Understand full-stack application architecture.
- Develop practical backend engineering skills.
- Understand relational database design and SQL.
- Learn authentication and application security.
- Develop API design skills.
- Learn testing and debugging practices.
- Improve Git and documentation discipline.
- Gain experience with production-oriented development workflows.

---

# 5. Intended Users

PrepPilot is primarily intended for:

- Computer Science students
- Engineering students
- Fresh graduates
- Entry-level software developers
- Internship candidates
- Technical interview candidates
- Learners seeking structured interview practice
- Developers who want to track interview preparation progress

---

# 6. Core Product Capabilities

## User Management

PrepPilot provides the foundation for secure user accounts, including:

- User registration
- User login
- Secure password storage
- JWT-based authentication
- Protected resources
- Current-user identification
- Account verification
- Password recovery
- Authorization and resource ownership

## Resume Management

Planned resume capabilities include:

- Resume upload
- Resume storage
- Resume management
- Resume replacement
- Resume-based preparation
- Future AI-assisted resume analysis

## Interview Management

Planned interview capabilities include:

- Mock interview creation
- Technology/topic selection
- Question generation
- Interview sessions
- Interview completion
- Score recording
- Interview history
- Performance review

## Question and Answer Management

Planned capabilities include:

- Technical and behavioural questions
- Difficulty classification
- User answer submission
- Answer evaluation
- Scores
- Feedback
- Weak-area identification

## Technology Management

Planned capabilities include:

- Supported technology catalogue
- User technology preferences
- User-to-technology relationships
- Technology-based interview preparation

## Progress and Analytics

Planned capabilities include:

- Completed interview tracking
- Average scores
- Performance trends
- Strength identification
- Weakness identification
- Improvement tracking
- Personalised recommendations

## AI Features

Future AI capabilities include:

- AI-generated interview questions
- AI-assisted answer evaluation
- AI-generated feedback
- Resume-based question generation
- Personalised recommendations
- Weak-area analysis
- Conversational mock-interview experiences

---

# 7. Technology Stack

## Frontend

- React
- JavaScript
- HTML
- CSS
- Tailwind CSS
- React Router
- Axios

## Backend

- Node.js
- Express.js
- REST APIs
- Express Router
- Middleware
- Controllers
- JSON request and response handling

## Database

- PostgreSQL
- SQL
- Relational database design
- PostgreSQL connection pooling

## Authentication and Security

- JSON Web Tokens
- bcrypt
- Password hashing
- Authentication middleware
- Authorization
- Resource ownership checks
- Environment variables
- Parameterized SQL queries
- Input validation

## Development Tools

- Visual Studio Code
- PowerShell
- Git
- GitHub
- npm
- PostgreSQL
- psql
- Postman
- Browser Developer Tools

## Planned Deployment

- Vercel
- Render
- Neon PostgreSQL
- Environment-based production configuration

---

# 8. System Architecture

## Current Backend Architecture

The backend currently follows a layered request flow:

    Client
      ↓
    Express Application
      ↓
    Routes
      ↓
    Authentication / Authorization Middleware
      ↓
    Controllers
      ↓
    PostgreSQL Connection Pool
      ↓
    PostgreSQL
      ↓
    JSON Response

Authentication and authorization are now part of the backend security boundary.

Protected resources require the request to pass through the appropriate authentication and authorization checks before reaching protected business operations.

## Long-Term Architecture

As PrepPilot grows, the architecture may evolve toward:

    React Frontend
          ↓
    Versioned REST API
          ↓
    Authentication
          ↓
    Authorization
          ↓
    Routes
          ↓
    Controllers
          ↓
    Services
          ↓
    Repositories / Data Access
          ↓
    PostgreSQL

AI services and analytics will integrate with the application where required.

Additional architectural layers will only be introduced when the application's complexity justifies them.

---

# 9. Current Project Structure

The project is organised into separate application, documentation, and configuration areas.

    PrepPilot/
    │
    ├── client/
    │
    ├── server/
    │   ├── src/
    │   │   ├── config/
    │   │   ├── controllers/
    │   │   ├── middleware/
    │   │   └── routes/
    │   │
    │   ├── .env
    │   ├── .env.example
    │   ├── index.js
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

The exact implementation structure may evolve as the application grows.

---

# 10. Engineering Principles

PrepPilot follows these engineering principles:

### Understand Before Implementing

Every major technology and architectural decision should be understood before being added to the project.

### Keep Responsibilities Clear

Files, modules, controllers, middleware, and services should have focused responsibilities.

### Prefer Simplicity

Architecture should solve real problems rather than introduce unnecessary complexity.

### Build Incrementally

Features should be developed in understandable stages rather than attempting the complete system at once.

### Validate External Input

User-controlled input must be validated before being trusted by application logic or database operations.

### Protect Sensitive Data

Passwords, secrets, tokens, database credentials, and unnecessary personal information must not be exposed.

### Test Important Behaviour

Important authentication, authorization, API, database, and business behaviours should be tested before being considered complete.

### Maintain Documentation

Documentation should evolve alongside the implementation.

### Use Meaningful Git History

Commits should describe meaningful engineering changes and preserve a useful project history.

### Refactor With Purpose

Refactoring should improve maintainability, correctness, security, or scalability rather than simply making the project appear more complex.

---

# 11. Security Principles

PrepPilot treats security as a fundamental part of the architecture.

The project follows these principles:

- Never store secrets directly in source code.
- Keep private configuration in environment variables.
- Never commit real `.env` files.
- Use `.env.example` for safe configuration documentation.
- Hash passwords before storage.
- Never return password hashes through public API responses.
- Authenticate protected requests.
- Authorize access to protected resources.
- Enforce resource ownership where applicable.
- Validate user-controlled input.
- Use parameterized database queries.
- Avoid unnecessary information disclosure.
- Return safe production error messages.
- Use token expiration where appropriate.
- Protect account recovery and verification flows.
- Test authentication and authorization failure scenarios.

Security requirements will evolve as the application becomes more complex.

---

# 12. Documentation System

PrepPilot maintains separate documentation responsibilities to avoid unnecessary duplication.

## `README.md`

Public project introduction, setup instructions, technology overview, and repository usage information.

## `01_Project_Bible.md`

High-level product vision, architecture, engineering principles, project direction, and roadmap.

This document should answer:

> What is PrepPilot, how is it structured, and where is it going?

## `02_Progress_Tracker.md`

Tracks learning modules, implementation milestones, completed work, and project progress.

This document should answer:

> What has been completed?

## `03_Developer_Journal.md`

Records important implementation experiences, debugging, technical decisions, mistakes, discoveries, and lessons learned.

This document should answer:

> How was the project built and what was learned?

## `04_Interview_Notes.md`

Stores technical revision material and interview questions generated from the concepts learned during development.

## `05_API_Documentation.md`

Documents the externally usable API contract, including endpoints, authentication requirements, request formats, parameters, responses, and status codes.

This document should answer:

> How can a client interact with the API?

## `CHANGELOG.md`

Records meaningful project releases and notable additions, changes, fixes, security improvements, and breaking changes.

Documentation should remain focused on its own responsibility rather than repeating information from another document.

---

# 13. Project Roadmap

## Module 1 — Project Foundation

**Status:** Completed  
**Version:** Initial Foundation

Major outcomes:

- Project planning
- Technology selection
- Development environment setup
- Git and GitHub workflow
- Repository structure
- Initial documentation system
- Project foundation

---

## Module 2 — Backend Foundation

**Status:** Completed

Major outcomes:

- Node.js fundamentals
- npm and package management
- Express.js
- HTTP request/response lifecycle
- Routing
- Route parameters
- Query parameters
- Request bodies
- REST APIs
- HTTP methods
- HTTP status codes
- CRUD concepts
- Middleware
- Environment variables
- Express Router
- Controllers
- Backend project structure
- API testing
- Initial backend learning APIs

### Module Outcome

PrepPilot gained its first structured Express backend and a practical understanding of:

    Client
      ↓
    Route
      ↓
    Controller
      ↓
    Response

---

## Module 3 — Database Design and PostgreSQL

**Status:** Completed

Major outcomes:

- PostgreSQL
- SQL fundamentals
- Relational database concepts
- Tables and relationships
- Primary and foreign keys
- Constraints
- Referential integrity
- Normalization
- Database relationships
- PostgreSQL integration
- Connection pooling
- Parameterized queries
- Persistent application data
- API versioning
- Pagination
- Health checks
- Graceful shutdown
- Backend/database architecture

### Module Outcome

PrepPilot evolved from an in-memory learning backend into a PostgreSQL-backed application.

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
    PostgreSQL

---

## Module 4 — Authentication and Authorization

**Status:** Completed  
**Current Release:** `v0.3.0`

Module 4 established the security foundation of PrepPilot.

Major capabilities completed:

- User registration
- Input validation
- Email normalization
- Secure password hashing with bcrypt
- Duplicate-account protection
- User login
- Password verification
- JWT creation
- JWT verification
- Authentication middleware
- Protected routes
- Current-user identification
- Authorization checks
- Resource ownership checks
- Email verification
- Verification-token expiration
- Forgot-password flow
- Password-reset flow
- Reset-token expiration and invalidation
- Inactive-account protection
- Secure authentication error handling
- Authentication-focused testing
- Sensitive-data response review

### Module Outcome

PrepPilot evolved from a database-backed API into an authenticated application with a defined security boundary.

    Client
      ↓
    Versioned API
      ↓
    Authentication
      ↓
    Authorization
      ↓
    Protected Resources
      ↓
    PostgreSQL

---

## Module 5 — Frontend Development

**Status:** Next

Planned areas:

- React fundamentals
- Component architecture
- Props and state
- React Router
- Forms
- API integration
- Axios
- Authentication state
- Protected frontend routes
- Tailwind CSS
- Responsive interfaces
- Loading states
- Error states
- Dashboard architecture

---

## Module 6 — Core PrepPilot Features

**Status:** Planned

Planned capabilities:

- Resume management
- Technology selection
- Interview creation
- Question generation
- Answer submission
- Interview scoring
- Feedback storage
- Interview history
- Progress tracking
- Analytics
- Recommendations
- AI integration

---

## Module 7 — Deployment

**Status:** Planned

Planned areas:

- Frontend deployment
- Backend deployment
- PostgreSQL hosting
- Production environment configuration
- CORS configuration
- Build configuration
- Production debugging
- Health checks
- Domain configuration
- Monitoring

---

## Module 8 — Final Polish

**Status:** Planned

Planned areas:

- Automated testing
- Manual testing
- Bug fixing
- Security review
- Performance optimisation
- Accessibility
- Responsive-design review
- Documentation review
- Code cleanup
- Git history review
- Portfolio preparation
- Resume integration
- Final production release

---

# 14. Current Project Status

**Project Version:** `0.3.0`

**Current Milestone:** Module 4 — Authentication & Authorization Completed

**Next Milestone:** Module 5 — Frontend Development

Current module state:

    Module 1 — Project Foundation
    ✅ Completed

    Module 2 — Backend Foundation
    ✅ Completed

    Module 3 — Database Design & PostgreSQL
    ✅ Completed

    Module 4 — Authentication & Authorization
    ✅ Completed

    Module 5 — Frontend Development
    ⏳ Next

    Module 6 — Core PrepPilot Features
    ⏳ Planned

    Module 7 — Deployment
    ⏳ Planned

    Module 8 — Final Polish
    ⏳ Planned

---

# 15. Current System Maturity

PrepPilot has progressed through three major architectural stages.

## Stage 1 — Backend Foundation

    Express
      ↓
    Routes
      ↓
    Controllers
      ↓
    Temporary Data

## Stage 2 — Persistent Backend

    Express
      ↓
    Routes
      ↓
    Controllers
      ↓
    PostgreSQL Pool
      ↓
    Persistent Database

## Stage 3 — Secure Backend

    Express
      ↓
    Versioned REST API
      ↓
    Authentication
      ↓
    Authorization
      ↓
    Controllers
      ↓
    PostgreSQL
      ↓
    Persistent User Data

The next major transition will connect this backend foundation to the React frontend.

---

# 16. Long-Term Architecture Philosophy

PrepPilot should grow according to actual application complexity.

The current architecture is intentionally simple.

Current direction:

    Route
      ↓
    Middleware
      ↓
    Controller
      ↓
    Database

As the application grows, some features may evolve toward:

    Route
      ↓
    Middleware
      ↓
    Controller
      ↓
    Service
      ↓
    Repository
      ↓
    Database

Additional abstractions should only be introduced when they provide a genuine engineering benefit.

The goal is not to maximise the number of folders, layers, or technologies.

The goal is to build software that is:

- Understandable
- Secure
- Maintainable
- Testable
- Scalable
- Reliable
- Appropriate for the project's current complexity

---

# 17. End Goal

By the completion of the project, PrepPilot should demonstrate practical experience with:

- Full-stack application development
- React frontend engineering
- Node.js backend development
- Express.js REST APIs
- PostgreSQL database design
- Authentication and authorization
- Application security
- Automated and manual testing
- AI-service integration
- Deployment
- Environment configuration
- Git and GitHub workflows
- Professional technical documentation
- Maintainable software architecture
- Production-oriented engineering practices

---

# 18. Project Mission Statement

> PrepPilot is being built not merely as a course project, but as a serious full-stack portfolio application that demonstrates disciplined learning, secure development, practical software engineering, and the ability to evolve a product from a basic foundation into a complete production-oriented system.

---

**Current Version:** `0.3.0`  
**Current Milestone:** ✅ Module 4 — Authentication & Authorization  
**Next Milestone:** 🔐 Module 5 — Frontend Development  
**Project Status:** Active Development 🚀