# 🚀 PrepPilot

PrepPilot is a full-stack AI-powered interview preparation platform built to help students, graduates, and aspiring software engineers prepare for technical interviews through structured practice, performance tracking, and AI-assisted learning.

The project is being developed as a long-term production-style software engineering project to learn modern full-stack development, backend engineering, database design, authentication, deployment, and professional development workflows.

---

# ✨ Features

## Current Features

- PostgreSQL-backed REST API
- Versioned API (`/api/v1`)
- User management endpoints
- Application health monitoring
- Database health monitoring
- PostgreSQL connection pooling
- Input validation
- Pagination
- Parameterized SQL queries
- Environment-based configuration
- Graceful server shutdown
- Professional project documentation

## Planned Features

- 🤖 AI-powered mock interviews
- 📄 Resume upload and management
- 📝 Resume analysis
- 👤 User authentication and authorization
- 🎯 Technical interview practice
- 📊 Progress tracking dashboard
- 📈 Interview analytics
- 💡 AI-generated feedback
- 📚 Personalized learning recommendations
- 🔍 Technology-based interview preparation
- 📱 Responsive user interface
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
- CommonJS Modules
- dotenv

## Database

- PostgreSQL
- SQL
- PostgreSQL Connection Pool
- Neon PostgreSQL

## Authentication

- JSON Web Tokens (JWT)
- bcrypt
- Protected Routes
- Authorization Middleware

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

## Deployment

- Vercel
- Render
- Neon PostgreSQL

---

# 🏗️ Current Architecture

The current backend follows a clean layered architecture:

```text
Client
   ↓
Express Application
   ↓
Route
   ↓
Controller
   ↓
PostgreSQL Connection Pool
   ↓
PostgreSQL Database
   ↓
JSON Response
```

---

# 📂 Current Project Structure

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
```

---

# 🌐 Current API Endpoints

## System

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/health` | Application health check |
| GET | `/health/database` | PostgreSQL health check |

## Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/users` | Get paginated users |
| GET | `/api/v1/users/:id` | Get a single user |

---

# 🗄️ Database

PrepPilot currently uses PostgreSQL with the following relational tables:

- users
- technologies
- resumes
- interviews
- questions
- answers
- user_technologies

The schema includes:

- Primary Keys
- Foreign Keys
- CHECK Constraints
- UNIQUE Constraints
- NOT NULL Constraints
- DEFAULT Values
- Referential Integrity
- ON DELETE CASCADE
- Normalized Database Design

---

# 📈 Project Progress

| Module | Status |
|---------|--------|
| ✅ Module 1 — Project Foundation | Completed |
| ✅ Module 2 — Backend Foundation | Completed |
| ✅ Module 3 — Database Design & PostgreSQL | Completed |
| ⏳ Module 4 — Authentication & Authorization | In Progress |
| ⏳ Module 5 — Frontend Development | Planned |
| ⏳ Module 6 — Core Features | Planned |
| ⏳ Module 7 — Deployment | Planned |
| ⏳ Module 8 — Final Polish | Planned |

**Overall Technical Progress:** **37.5% Complete**

---

# 🎯 Roadmap

Upcoming development includes:

- User Registration
- User Login
- Password Hashing
- JWT Authentication
- Protected Routes
- Resume Management
- Interview Sessions
- Question Management
- Answer Evaluation
- Progress Dashboard
- AI Integration
- Analytics
- Frontend Development
- Production Deployment

---

# ⚙️ Engineering Principles

PrepPilot follows these principles throughout development:

- Build incrementally.
- Keep the architecture simple and maintainable.
- Understand every concept before implementing it.
- Follow REST API standards.
- Use secure coding practices.
- Write reusable and modular code.
- Document every major milestone.
- Maintain clean Git history.
- Prefer readability over unnecessary complexity.
- Treat the project like a real production application.

---

# 📚 Documentation

The project documentation is maintained alongside the codebase.

- 📖 Project Bible
- 📈 Progress Tracker
- 👨‍💻 Developer Journal
- 📝 Interview Notes
- 🌐 API Documentation
- 📋 CHANGELOG

---

# 👨‍💻 Developer

**Sai Kiran Avvaru**

**B.Tech Computer Science Engineering**  
**SRM University AP × Kalvium**

PrepPilot is being built as a long-term engineering project to strengthen full-stack development skills, understand production software architecture, and create a portfolio-quality application that reflects professional software engineering practices.

---

# 📄 License

This project is currently developed for learning, portfolio development, and educational purposes.

---

⭐ If you found this project interesting, feel free to explore the repository and follow its development journey.