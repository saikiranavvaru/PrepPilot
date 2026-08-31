# 🚀 PrepPilot

PrepPilot is a full-stack AI-powered interview preparation platform designed to help students, graduates, and aspiring software engineers prepare for technical interviews through structured practice, performance tracking, and AI-assisted learning.

The project is being developed as a long-term, production-oriented software engineering project focused on applying real-world full-stack development practices across frontend engineering, backend development, database design, authentication, testing, deployment, and professional engineering workflows.

---

## ✨ Features

### Implemented

- PostgreSQL-backed REST API
- Versioned API (`/api/v1`)
- User management endpoints
- Application health monitoring
- PostgreSQL health monitoring
- PostgreSQL connection pooling
- Input validation
- Pagination
- Parameterized SQL queries
- Environment-based configuration
- Graceful server shutdown
- User registration
- Secure password hashing with bcrypt
- User login
- JWT authentication
- Authentication middleware
- Protected backend routes
- Current-user identification
- Email verification
- Password recovery
- Password reset
- Authentication and authorization checks
- Resource ownership checks
- Authentication test suite
- Security-focused API error handling
- React frontend
- React Router page architecture
- Tailwind CSS UI architecture
- Axios API integration
- Authentication state management
- Protected frontend routes
- Login and registration frontend
- Dashboard interface
- Practice interface
- Progress interface
- Profile interface
- Reusable frontend components
- Reusable page-level layout
- Responsive frontend UI
- Loading states
- Error handling
- User interaction feedback
- Browser refresh session restoration
- Production frontend build verification
- Professional project documentation

### Planned

- 📄 Resume upload and management
- 📝 Resume analysis
- 🎯 Technical interview sessions
- ❓ Question management
- 🤖 AI-generated interview questions
- 💬 AI-assisted answer evaluation
- 📊 Advanced progress tracking
- 📈 Interview analytics
- 💡 Personalised learning recommendations
- 🔍 Technology-based preparation
- ☁️ Production deployment
- 🧪 Expanded automated integration testing
- ♿ Accessibility improvements
- ⚡ Performance optimisation

---

# 🛠️ Technology Stack

## Frontend

- React
- React Router
- Tailwind CSS
- Axios
- JavaScript
- HTML5
- CSS3

## Backend

- Node.js
- Express.js
- REST APIs
- Express Router
- Middleware
- CommonJS modules
- dotenv

## Database

- PostgreSQL
- SQL
- PostgreSQL connection pooling
- Neon PostgreSQL

## Authentication & Security

- JSON Web Tokens (JWT)
- bcrypt
- Password hashing
- Authentication middleware
- Authorization checks
- Resource ownership checks
- Parameterized SQL queries
- Environment variables
- Input validation

## Development Tools

- Visual Studio Code
- Windows PowerShell
- Git
- GitHub
- Postman
- npm
- PostgreSQL
- psql
- Browser Developer Tools

## Planned Deployment

- Vercel
- Render
- Neon PostgreSQL

---

# 🏗️ Architecture

PrepPilot currently consists of a React frontend communicating with a versioned Express REST API backed by PostgreSQL.

## Frontend Request Flow

```text
React Application
       ↓
React Router
       ↓
Authentication State
       ↓
Protected Route
       ↓
Axios API Request
       ↓
Backend REST API
Backend Request Flow
Client
   ↓
Express Application
   ↓
Route
   ↓
Authentication / Authorization Middleware
   ↓
Controller
   ↓
PostgreSQL Connection Pool
   ↓
PostgreSQL Database
   ↓
JSON Response
The current architecture intentionally remains focused and understandable.
As application complexity increases, additional service or repository layers may be introduced when they provide genuine architectural value.
📂 Project Structure
PrepPilot/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   │
│   ├── package.json
│   └── package-lock.json
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   │
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── routes/
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
The exact internal structure may evolve as the application grows. The API documentation and source code remain the authoritative references for implemented endpoints and implementation details.

🌐 API
The backend exposes a versioned REST API.
Base path:
/api/v1
Current API Areas
Area	Status
System & health endpoints	✅ Implemented
User endpoints	✅ Implemented
Authentication	✅ Implemented
Authorization	✅ Implemented
Resume APIs	⏳ Planned
Interview APIs	⏳ Planned
Question & Answer APIs	⏳ Planned
Analytics APIs	⏳ Planned
AI APIs	⏳ Planned


For complete endpoint definitions, request formats, response examples, validation rules, authentication requirements, and status codes, see:
docs/05_API_Documentation.md
🗄️ Database
PrepPilot uses PostgreSQL as its relational database.
The database foundation includes:
- Primary keys
- Foreign keys
- NOT NULL constraints
- UNIQUE constraints
- CHECK constraints
- DEFAULT values
- Referential integrity
- Cascading deletes where appropriate
- Normalized relational design
- Connection pooling
- Parameterized queries
The database is designed to support users, resumes, interviews, questions, answers, technologies, and future analytics functionality.
🔐 Authentication
PrepPilot uses JWT-based authentication across the backend and frontend.
The current authentication flow is:
Register
   ↓
Login
   ↓
JWT Access Token
   ↓
Frontend Authentication State
   ↓
Protected Routes
   ↓
Authenticated API Requests
   ↓
Backend Authentication
   ↓
Authorized Resource Access
The frontend maintains authentication state through the existing authentication architecture and restores the authenticated session after browser refresh when the stored session remains valid.
Backend authorization remains responsible for determining whether an authenticated user can access a protected resource.
📱 Frontend
Module 5 established the main PrepPilot frontend foundation.
The frontend currently includes:
- React application architecture
- Reusable components
- React Router navigation
- Login and registration pages
- Authentication state
- Protected routes
- Dashboard
- Practice
- Progress
- Profile
- Responsive layouts
- Shared page layout
- Loading states
- Error handling
- Interaction feedback
- API communication through Axios
The frontend is designed to communicate with the existing versioned backend rather than duplicating backend security responsibilities.
📈 Project Progress
Module	Status
✅ Module 1 — Project Foundation	Completed
✅ Module 2 — Backend Foundation	Completed
✅ Module 3 — Database Design & PostgreSQL	Completed
✅ Module 4 — Authentication & Authorization	Completed
✅ Module 5 — Frontend Development	Completed
⏳ Module 6 — Core PrepPilot Features	Planned
⏳ Module 7 — Deployment	Planned
⏳ Module 8 — Final Polish	Planned


Current Project Version: 0.4.0
Overall Module Progress: 5 / 8 modules completed — 62.5%
The percentage represents completed planned modules, not a measurement of total software functionality.

🗺️ Roadmap
Module 6 — Core PrepPilot Features
- Resume management
- Technology selection
- Interview sessions
- Question management
- Answer submission
- Interview scoring
- Feedback storage
- Progress tracking
- Analytics
- AI integration
Module 7 — Deployment
- Frontend deployment
- Backend deployment
- Production PostgreSQL
- Environment configuration
- CORS configuration
- Production health checks
- Domain configuration
- Deployment debugging
- Production monitoring
Module 8 — Final Polish
- Automated testing
- Security review
- Performance optimisation
- Accessibility review
- Responsive-design review
- Bug fixing
- Code cleanup
- Documentation review
- Portfolio preparation
- Final production release
⚙️ Engineering Principles
PrepPilot is developed according to the following principles:
- Build incrementally.
- Understand concepts before implementing them.
- Keep architecture simple and maintainable.
- Separate responsibilities clearly.
- Validate user input.
- Protect sensitive information.
- Use parameterized database queries.
- Follow REST API conventions.
- Test important behaviour.
- Maintain meaningful Git history.
- Document significant technical decisions.
- Avoid unnecessary architectural complexity.
- Refactor when genuine complexity requires it.
- Keep frontend and backend responsibilities clearly separated.
- Treat the project as a real software product.
🧪 Verification & Quality
Completed development work is verified through a combination of:
- Manual frontend testing
- API testing
- Authentication testing
- Protected-route testing
- Responsive UI testing
- Browser refresh testing
- Navigation testing
- Loading and error-state testing
- Frontend lint verification
- Production frontend build verification
The Module 5 frontend completion included verification across desktop, tablet, and phone screen sizes as well as the complete frontend integration flow.
📚 Documentation
Project documentation is maintained alongside the codebase.
Document	Purpose
README.md	Project introduction, setup context, technology stack, and current status
docs/01_Project_Bible.md	Product vision, architecture, principles, roadmap, and project direction
docs/02_Progress_Tracker.md	Module and implementation progress
docs/03_Developer_Journal.md	Development history, debugging, lessons, and technical decisions
docs/04_Interview_Notes.md	Technical revision and interview preparation
docs/05_API_Documentation.md	API reference and endpoint documentation
CHANGELOG.md	Versioned record of significant project changes


👨‍💻 Developer
Sai Kiran Avvaru
B.Tech Computer Science Engineering
SRM University AP × Kalvium
PrepPilot is being developed as a long-term engineering project to strengthen full-stack development skills and demonstrate the ability to design, build, test, document, and eventually deploy a complete software product.
📄 License
This project is currently developed for educational and portfolio purposes.
🚀 Current Status
Version: 0.4.0
Latest Release: v0.4.0 — Complete Frontend Integration
Status: Active Development
Completed: Modules 1–5
Current Focus: Preparing for Module 6 — Core PrepPilot Features
PrepPilot has progressed from an Express learning server into a PostgreSQL-backed full-stack application with REST APIs, authentication, authorization, email verification, password recovery, protected backend resources, a React frontend, frontend authentication state, protected frontend routes, responsive UI, API integration, and final frontend UX polish.
The next major phase is implementing the core PrepPilot product features on top of the established full-stack foundation.
```