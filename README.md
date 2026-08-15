# 🚀 PrepPilot

PrepPilot is a full-stack AI-powered interview preparation platform designed to help students, graduates, and aspiring software engineers prepare for technical interviews through structured practice, performance tracking, and AI-assisted learning.

The project is being developed as a long-term, production-style software engineering project focused on learning and applying real-world full-stack development, backend engineering, database design, authentication, testing, deployment, and professional engineering workflows.

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
- Protected routes
- Current-user identification
- Email verification
- Password recovery
- Password reset
- Authentication and authorization checks
- Authentication test suite
- Security-focused API error handling
- Professional project documentation

### Planned

- 📄 Resume upload and management
- 📝 Resume analysis
- 🎯 Technical interview sessions
- ❓ Question management
- 🤖 AI-generated interview questions
- 💬 AI-assisted answer evaluation
- 📊 Progress tracking
- 📈 Interview analytics
- 💡 Personalised learning recommendations
- 🔍 Technology-based preparation
- 📱 Responsive frontend application
- ☁️ Production deployment

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

The current backend follows a focused layered request flow:

```text
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
```

As the application grows, additional service or repository layers may be introduced when they provide genuine architectural value.

---

# 📂 Project Structure

```text
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
```

> The exact internal structure may evolve as the application grows. The API documentation and source code remain the authoritative references for implemented endpoints and implementation details.

---

# 🌐 API

The backend exposes a versioned REST API.

**Base path:**

```text
/api/v1
```

### Current API Areas

| Area | Status |
|---|---|
| System & health endpoints | ✅ Implemented |
| User endpoints | ✅ Implemented |
| Authentication | ✅ Implemented |
| Authorization | ✅ Implemented |
| Resume APIs | ⏳ Planned |
| Interview APIs | ⏳ Planned |
| Question & Answer APIs | ⏳ Planned |
| Analytics APIs | ⏳ Planned |
| AI APIs | ⏳ Planned |

For complete endpoint definitions, request formats, response examples, validation rules, authentication requirements, and status codes, see:

`docs/05_API_Documentation.md`

---

# 🗄️ Database

PrepPilot uses PostgreSQL as its relational database.

The database foundation includes:

- Primary keys
- Foreign keys
- `NOT NULL` constraints
- `UNIQUE` constraints
- `CHECK` constraints
- `DEFAULT` values
- Referential integrity
- Cascading deletes where appropriate
- Normalized relational design
- Connection pooling
- Parameterized queries

The database is designed to support users, resumes, interviews, questions, answers, technologies, and future analytics functionality.

---

# 📈 Project Progress

| Module | Status |
|---|---|
| ✅ Module 1 — Project Foundation | Completed |
| ✅ Module 2 — Backend Foundation | Completed |
| ✅ Module 3 — Database Design & PostgreSQL | Completed |
| ✅ Module 4 — Authentication & Authorization | Completed |
| ⏳ Module 5 — Frontend Development | Planned |
| ⏳ Module 6 — Core Features | Planned |
| ⏳ Module 7 — Deployment | Planned |
| ⏳ Module 8 — Final Polish | Planned |

**Current Project Version:** `0.3.0`

**Overall Module Progress:** `4 / 8` modules completed — **50%**

> The percentage represents completed planned modules, not a measurement of total software functionality.

---

# 🗺️ Roadmap

### Module 5 — Frontend Development

- React application architecture
- Authentication state
- API integration
- Protected frontend routes
- Forms and validation
- Dashboard architecture
- Responsive UI
- Loading and error states

### Module 6 — Core PrepPilot Features

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

### Module 7 — Deployment

- Frontend deployment
- Backend deployment
- Production PostgreSQL
- Environment configuration
- CORS configuration
- Production health checks
- Domain configuration
- Deployment debugging

### Module 8 — Final Polish

- Automated testing
- Security review
- Performance optimisation
- Accessibility review
- Responsive-design review
- Bug fixing
- Code cleanup
- Documentation review
- Portfolio preparation
- Final release

---

# ⚙️ Engineering Principles

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
- Treat the project as a real software product.

---

# 📚 Documentation

Project documentation is maintained alongside the codebase.

| Document | Purpose |
|---|---|
| `README.md` | Project introduction, setup context, technology stack, and current status |
| `docs/01_Project_Bible.md` | Product vision, architecture, principles, roadmap, and project direction |
| `docs/02_Progress_Tracker.md` | Module and implementation progress |
| `docs/03_Developer_Journal.md` | Development history, debugging, lessons, and technical decisions |
| `docs/04_Interview_Notes.md` | Technical revision and interview preparation |
| `docs/05_API_Documentation.md` | API reference and endpoint documentation |
| `CHANGELOG.md` | Versioned record of significant project changes |

---

# 👨‍💻 Developer

**Sai Kiran Avvaru**

B.Tech Computer Science Engineering  
SRM University AP × Kalvium

PrepPilot is being developed as a long-term engineering project to strengthen full-stack development skills and demonstrate the ability to design, build, test, document, and eventually deploy a complete software product.

---

# 📄 License

This project is currently developed for educational and portfolio purposes.

---

## 🚀 Current Status

**Version:** `0.3.0`

**Status:** Active Development

**Completed:** Modules 1–4

**Current Focus:** Preparing for Module 5 — Frontend Development

PrepPilot has progressed from an Express learning server to a PostgreSQL-backed REST API with authentication, authorization, password recovery, email verification, protected resources, and a completed authentication test suite.

The next major phase is building the frontend experience on top of the established backend foundation.