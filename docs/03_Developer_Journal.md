# PrepPilot — Developer Journal       (Date:-04-07-2026)

## Development Log — Project Foundation — (Module 2 Chapter 1)

### Goal

Start PrepPilot as a production-level software project.

---

### Completed

* Installed Node.js
* Verified npm installation
* Installed Git
* Initialized the Git repository
* Created the project folder
* Created the client folder
* Created the server folder
* Created README.md
* Learned the complete Git workflow
* Made the first Git commit

---

### Concepts Learned

* What Git is
* Repository
* Working Directory
* Staging Area
* Commit
* Commit Hash
* HEAD
* Git History

---

### Mistakes Made

* Created README.md as a folder instead of a file.
* Initialized Git in the wrong project folder.
* Learned how to identify and fix both issues.

---

### Key Lesson

Professional development is not just writing code.

Planning, version control, documentation, and understanding concepts are equally important.

---

### Result

Module 1 completed successfully.

PrepPilot officially entered Version 0.0.1.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-06-07-2026)

## Development Log — Backend Foundation — (Module 2 Chapter 1–3)

### Goal

Begin building the backend foundation of PrepPilot by understanding Node.js, npm, and initializing a professional Node.js project.

---

### Completed

* Learned Node.js fundamentals.
* Understood the V8 JavaScript Engine.
* Learned how JavaScript runs outside the browser.
* Explored Node REPL.
* Verified Node.js installation.
* Verified npm installation.
* Fixed Windows PowerShell Execution Policy issue.
* Learned the purpose of npm.
* Understood package management.
* Learned dependency management.
* Learned local and global packages.
* Initialized the backend project using npm.
* Created package.json inside the server directory.
* Configured project metadata.
* Changed project name to "preppilot-server".
* Learned CommonJS module system.
* Successfully committed and pushed backend initialization to GitHub.

---

### Concepts Learned

Node.js

* Runtime Environment
* V8 Engine
* Browser vs Server-side JavaScript

npm

* Package Registry
* Package Manager
* Packages
* Dependencies
* Dependency Tree

package.json

* Project Manifest
* Metadata
* npm Scripts
* Entry Point
* CommonJS
* Project Configuration

Git

* Staging newly created backend files
* Professional commit workflow
* Clean working tree verification

---

### Mistakes Made

* PowerShell blocked npm because of the default Execution Policy.
* Initially misunderstood the PowerShell confirmation prompt while changing the execution policy.
* Ran Git commands inside the server folder instead of the repository root.
* Learned why Git summarized the untracked directory as "./" and later as "server/".
* Learned about Windows CRLF and Unix LF line-ending warnings.

---

### Key Lessons

Node.js is not a programming language.

Node.js is a JavaScript Runtime Environment powered by the V8 Engine.

npm is much more than a package installer—it is both a package registry and a dependency management system.

package.json is the heart of every Node.js project and defines how the backend is configured.

A professional backend project starts with proper project initialization before writing application code.

---

### Result

Completed Module 2 Chapters 1–3 successfully.

Backend foundation established.

PrepPilot backend officially initialized and ready for Express.js development.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-07-07-2026)

## Development Log — Express.js Foundation — ( Module 2 Chapter 4)       

### Goal

Transform PrepPilot from a configured backend project into a running backend application by integrating Express.js and understanding the complete HTTP request-response lifecycle.

---

### Completed

* Installed Express.js.
* Learned why Express is built on top of Node.js.
* Installed the first production dependency.
* Explored node_modules and package-lock.json.
* Created the backend entry file (index.js).
* Built the first Express application.
* Created the first route using app.get().
* Started the backend server using app.listen().
* Successfully served the first HTTP response.
* Tested the backend in a web browser.
* Configured .gitignore.
* Removed node_modules from Git tracking.
* Learned professional dependency management practices.

---

### Concepts Learned

Express.js

* Web Framework
* Express Application
* Routing
* Request Object (req)
* Response Object (res)
* app.get()
* app.listen()

HTTP

* Client Request
* Server Response
* Request–Response Lifecycle
* HTTP Route
* Port

Git

* Why node_modules should never be committed.
* Purpose of package-lock.json.
* Creating and using .gitignore.
* Verifying tracked and ignored files using Git commands.

---

### Mistakes Made

* Accidentally committed the node_modules directory before creating a .gitignore file.
* Learned how to safely remove tracked files using:
  * git rm --cached
* Learned how to verify ignored files using:
  * git ls-files
  * git check-ignore
* Encountered a Windows Git cleanup warning while committing and learned how to verify repository integrity using git status and git log instead of assuming commit failure.

---

### Key Lessons

Express.js simplifies backend development by providing routing, middleware support, and request-response handling on top of Node.js.

package-lock.json should always be committed because it ensures every developer installs identical dependency versions.

node_modules should never be committed because it can always be regenerated using npm install.

Professional developers verify repository state before reacting to Git errors.

---

### Project Milestone

🚀 PrepPilot served its first HTTP response successfully.

This marks the beginning of the project's backend runtime. The application is now capable of accepting incoming HTTP requests and responding through Express.js.

---

### Result

Module 2 — Chapter 4 completed successfully.

PrepPilot backend officially became a running web server capable of receiving HTTP requests and returning HTTP responses.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-07-07-2026)

## Development Log — HTTP Server Fundamentals — (Module 2 Chapter 5)     

### Goal

Understand how backend servers actually work internally by learning Node.js HTTP Server fundamentals before relying on Express.js abstractions.

---

### Completed

* Learned the purpose of an HTTP Server.
* Understood Client–Server communication.
* Explored the complete Request–Response lifecycle.
* Learned how browsers communicate with backend servers.
* Understood the concept of Ports and localhost.
* Learned the role of TCP connections and sockets (high-level).
* Explored Node.js built-in HTTP module.
* Created a Pure Node.js HTTP Server.
* Successfully served responses without using Express.
* Compared Node.js HTTP Server with Express.js.
* Understood how Express internally uses Node's HTTP module.
* Learned the lifecycle of `req` and `res` objects from browser request to browser response.

---

### Concepts Learned

Backend Architecture

* HTTP Server
* Client
* Server
* Request
* Response
* Request–Response Lifecycle
* Port
* localhost
* Socket (High Level)

Node.js

* Built-in HTTP Module
* http.createServer()
* server.listen()
* res.write()
* res.end()

Express

* Express is built on top of Node.js HTTP module.
* Express simplifies routing and response handling.
* app.listen() internally creates and starts a Node.js HTTP Server.

---

### Mistakes Made

* Initially assumed Express itself was the HTTP Server.
* Learned that Express depends on Node's built-in HTTP module.
* Realized that `req` and `res` objects are created automatically for every incoming request rather than being created manually.

---

### Key Lessons

Every backend application begins with an HTTP Server.

Node.js provides the core HTTP functionality, while Express builds additional abstractions to simplify backend development.

Understanding the internal request flow makes debugging, API development, and framework usage significantly easier.

---

### Project Milestone

🚀 Built the first HTTP Server using Pure Node.js.

This milestone strengthened the understanding of backend internals by removing framework abstractions and exposing how HTTP communication works underneath Express.

---

### Result

Module 2 — Chapter 5 completed successfully.

PrepPilot now includes both an Express-based server and a Pure Node.js HTTP Server demonstration for long-term learning and interview preparation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-07-07-2026)

## Development Log — HTTP Requests & Responses — ( Module 2 Chapter 6) 

### Goal

Develop a complete understanding of how clients and servers communicate through HTTP by exploring request structures, response structures, methods, status codes, headers, and response types.

---

### Completed

* Learned the structure of HTTP Requests.
* Learned the structure of HTTP Responses.
* Explored HTTP Methods (GET, POST, PUT, PATCH, DELETE).
* Understood CRUD operations.
* Learned Request Body and JSON.
* Understood HTTP Headers.
* Explored HTTP Status Codes and their categories.
* Implemented Plain Text responses.
* Implemented HTML responses.
* Implemented JSON responses.
* Learned Express response methods.
* Understood Browser → Server → Browser communication.

---

### Concepts Learned

HTTP

* HTTP Request
* HTTP Response
* Request Lifecycle
* Response Lifecycle
* HTTP Methods
* CRUD
* Status Codes
* Headers
* Request Body
* JSON

Express

* res.send()
* res.json()
* res.status()
* Method Chaining

Backend

* Client–Server Communication
* Browser Request Processing
* API Communication Flow

---

### Mistakes Made

* Initially confused HTTP Method with Route.
* Assumed Node.js directly handled every request instead of understanding Express route matching.
* Improved understanding of how different response types affect browser behavior.

---

### Key Lessons

HTTP is the communication language between clients and servers.

Every backend API follows the same request-response lifecycle regardless of application size.

Choosing appropriate HTTP methods and status codes makes APIs predictable, maintainable, and aligned with industry standards.

---

### Project Milestone

🚀 Successfully understood and implemented different HTTP response types using Express.

Established the communication foundation required for all future PrepPilot APIs.

---

### Result

Module 2 — Chapter 6 completed successfully.

PrepPilot backend now has a strong conceptual foundation for building production-ready REST APIs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-08-07-2026)

## Development Log — Routing — (Module 2 Chapter 7)

### Goal

Learn how Express routes incoming HTTP requests to the correct handler functions and understand how professional backend applications organize routing for scalability and maintainability.

---

### Completed

* Learned the concept of Routing.
* Understood how Express matches incoming requests.
* Learned the three components of every route:
  * HTTP Method
  * Path
  * Route Handler
* Built multiple routes in the Express server.
* Tested different routes through the browser.
* Learned route matching behavior.
* Understood why route order is important.
* Learned API prefixes (`/api`).
* Implemented Route Parameters using `:id`.
* Accessed dynamic values using `req.params`.
* Learned multiple Route Parameters.
* Understood the difference between Route Parameters and Query Parameters.
* Learned the purpose of Express Router.
* Explored professional feature-based route organization.
* Learned the purpose of `app.use()`.
* Understood how `app.use()` is used for routers and middleware.

---

### Concepts Learned

Routing

* Route
* Route Matching
* Route Handler
* Route Order
* Static Routes
* Dynamic Routes
* Route Parameters
* Multiple Route Parameters
* API Prefixes

Express

* Express Router
* app.use()
* req.params

Backend Architecture

* Feature-Based Route Organization
* Scalable Backend Structure
* Request Forwarding
* Request Processing Pipeline

---

### Mistakes Made

* Initially assumed Express matched requests only by URL.
* Learned that Express matches requests using both the HTTP Method and the Route Path.
* Initially confused Route Parameters with Query Parameters.
* Improved understanding of how `app.use()` acts as a gateway before requests reach route handlers.

---

### Key Lessons

Routing is the backbone of every backend application.

Professional applications separate routes by feature instead of placing every endpoint inside a single file.

Understanding Route Parameters allows one route to serve unlimited dynamic resources without creating duplicate routes.

`app.use()` provides a flexible mechanism for forwarding requests, registering middleware, and organizing large Express applications.

---

### Project Milestone

🚀 Successfully transformed PrepPilot from a single-route backend into a multi-route backend.

Established the routing architecture that will support all future backend features including Authentication, Resume Management, AI Interviews, and Progress Tracking.

---

### Result

Module 2 — Chapter 7 completed successfully.

PrepPilot backend now follows the routing principles used in professional Express applications and is ready for REST API development.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-08-07-2026)

## Development Log — REST APIs — (Module 2 Chapter 8)

### Goal

Learn how professional backend applications design REST APIs and understand how HTTP methods, request bodies, and status codes work together to create production-level APIs.

---

### Completed

* Learned what an API is.
* Learned the concept of REST.
* Understood the idea of Resources.
* Learned CRUD operations.
* Mapped CRUD operations to HTTP methods.
* Learned REST API design principles.
* Learned why REST URLs use nouns instead of verbs.
* Studied common HTTP Status Codes.
* Built the first REST APIs using Express.
* Created APIs using `GET` requests.
* Created APIs using `POST` requests.
* Built a temporary in-memory Books API.
* Implemented APIs using `req.params`.
* Learned the purpose of `req.body`.
* Learned why `req.body` becomes `undefined`.
* Implemented `express.json()`.
* Understood how Express parses JSON requests.
* Learned why backend developers use Postman.
* Designed future REST APIs for PrepPilot.

---

### Concepts Learned

REST

* API
* REST
* Resources
* CRUD Operations
* RESTful URLs
* Resource Naming

HTTP

* GET
* POST
* PUT
* DELETE
* HTTP Status Codes

Express

* req.params
* req.body
* express.json()
* JSON Responses

Backend Architecture

* API Design
* Request Parsing
* Structured Responses
* Resource-Oriented Development

---

### Mistakes Made

* Initially assumed APIs are only used between frontend and backend applications.
* Initially thought URLs should contain action names like `/getUsers`.
* Initially assumed Express automatically understands JSON request bodies.
* Learned that `express.json()` middleware is required to populate `req.body`.

---

### Key Lessons

REST provides a standard way to design APIs that makes applications easier to understand and maintain.

Resources should be represented by nouns, while HTTP methods describe the action.

Proper status codes and structured JSON responses are critical for frontend and backend communication.

Understanding `req.body` and `express.json()` is essential for building APIs that accept data from clients.

---

### Project Milestone

🚀 Successfully built the first real REST APIs in PrepPilot.

Established the foundation for future features including Authentication APIs, Resume APIs, Interview APIs, and Progress APIs.

Successfully transformed the backend from simple routes into resource-based API endpoints.

---

### Result

Module 2 — Chapter 8 completed successfully.

PrepPilot backend now supports REST API principles and is prepared for Middleware and advanced backend architecture.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-08-07-2026)

## Development Log — Middleware — (Module 2 Chapter 9)

### Goal

Understand how Express processes requests using middleware and learn how professional applications use middleware for logging, authentication, request modification, and request control.

---

### Completed

* Learned what Middleware is.
* Understood why Middleware exists.
* Learned the Request Pipeline concept.
* Learned the three middleware parameters:
  * req
  * res
  * next
* Understood the purpose of `next()`.
* Built custom middleware functions.
* Implemented Global Middleware.
* Implemented Route-Specific Middleware.
* Built Logging Middleware.
* Built Authentication Middleware.
* Learned how middleware can modify requests.
* Learned how middleware can stop requests.
* Understood Middleware Order.
* Understood `express.json()` as middleware.
* Explored professional middleware architecture.

---

### Concepts Learned

Middleware

* Request Pipeline
* Global Middleware
* Route Middleware
* Custom Middleware
* Built-in Middleware
* Logging Middleware
* Authentication Middleware

Express

* req
* res
* next()
* app.use()
* express.json()

Backend Architecture

* Request Processing Pipeline
* Request Enrichment
* Request Interception
* Middleware Composition

---

### Mistakes Made

* Initially assumed middleware only executes before routes.
* Learned that middleware can also stop requests completely.
* Initially underestimated the importance of `next()`.
* Learned that forgetting `next()` causes requests to hang indefinitely.
* Initially thought middleware could only read requests.
* Learned that middleware can modify requests and pass additional data to routes.

---

### Key Lessons

Middleware is one of the most powerful features of Express.

Professional applications use middleware to separate cross-cutting concerns such as logging, authentication, validation, and security from business logic.

Understanding `next()` and middleware order is essential for debugging request flow in backend applications.

Middleware makes backend applications cleaner, more reusable, and easier to maintain.

---

### Project Milestone

🚀 Successfully implemented the middleware architecture used in professional Express applications.

Established the foundation required for future Authentication, Authorization, Logging, Request Validation, and Error Handling systems inside PrepPilot.

Successfully understood the complete request pipeline from incoming request to final response.

---

### Result

Module 2 — Chapter 9 completed successfully.

PrepPilot backend now supports middleware-based request processing and is prepared for production-level backend architecture.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-08-07-2026)

## Development Log — Environment Variables — (Module 2 Chapter 10)

### Goal

Learn how professional applications manage configuration and secrets using Environment Variables and understand why hardcoded configuration values are considered poor engineering practice.

---

### Completed

* Learned what Environment Variables are.
* Understood why applications need Environment Variables.
* Created a `.env` file.
* Installed the `dotenv` package.
* Configured `dotenv` inside the Express application.
* Loaded variables into `process.env`.
* Replaced hardcoded values with Environment Variables.
* Configured application settings using `process.env.PORT`.
* Configured custom variables such as `APP_NAME` and `NODE_ENV`.
* Learned how to provide fallback values using `||`.
* Understood configuration management practices.
* Configured `.gitignore` to protect sensitive information.
* Learned why `.env` files should never be committed.

---

### Concepts Learned

Environment Variables

* `.env`
* `process.env`
* `dotenv`
* Configuration Management
* Application Secrets
* Environment-Based Configuration
* Fallback Values

Backend Architecture

* Development Configuration
* Production Configuration
* Secure Secret Management
* Deployment Readiness

Node.js

* Process Object
* Environment Variables
* Runtime Configuration

---

### Mistakes Made

* Initially assumed configuration values should be written directly inside source code.
* Initially thought `.env` files should be committed to GitHub.
* Underestimated the importance of configuration management in production applications.
* Learned that secrets and API keys must always remain outside source code.

---

### Key Lessons

Environment Variables allow applications to run in multiple environments without changing source code.

Professional applications separate configuration and secrets from application logic.

The `.env` file and `dotenv` package provide a simple and secure way to manage application configuration.

Protecting secrets is a fundamental responsibility of backend developers.

---

### Project Milestone

🚀 Successfully implemented environment-based configuration for PrepPilot.

Established secure practices for managing application settings, API keys, and future database credentials.

Prepared the project for real-world deployment environments and production configuration management.

---

### Result

Module 2 — Chapter 10 completed successfully.

PrepPilot backend now supports professional configuration management practices and is prepared for production-level application architecture.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-09-07-2026)

## Development Log — Professional Backend Folder Structure — (Module 2 Chapter 11)

### Goal

Learn how professional backend applications organize their code using folders and understand how to separate responsibilities between routes, controllers, middleware, services, and configuration files.

---

### Completed

* Learned why keeping everything inside `index.js` is not scalable.
* Understood the principle of Separation of Concerns.
* Created a professional `src` directory.
* Created:
  * `routes`
  * `controllers`
  * `middleware`
  * `config`
  * `services`
  * `utils`
* Implemented the first route file using Express Router.
* Implemented the first controller file.
* Moved Home and Health APIs into dedicated route and controller files.
* Connected routes to the application using `app.use()`.
* Learned professional request flow.
* Understood how large applications are organized.

---

### Concepts Learned

Backend Architecture

* Separation of Concerns
* Layered Architecture
* Request Flow
* Scalable Folder Structure
* Feature Organization

Express

* Express Router
* Route Files
* Controller Files
* `module.exports`
* `require()`
* `app.use()`

Folders

* `src/routes`
* `src/controllers`
* `src/middleware`
* `src/config`
* `src/services`
* `src/utils`

---

### Mistakes Made

* Initially assumed all backend code should remain inside `index.js`.
* Underestimated the importance of organizing code for long-term scalability.
* Learned that controllers should handle logic while routes should only map endpoints.

---

### Key Lessons

Professional applications separate responsibilities into dedicated folders.

A clean folder structure improves readability, debugging, collaboration, and long-term maintainability.

Controllers and routes should have clearly defined responsibilities.

The application's entry point should remain lightweight and primarily focus on application startup and configuration.

---

### Project Milestone

🚀 Successfully transformed PrepPilot from a single-file backend into a professionally organized backend architecture.

Established the folder structure that will support Authentication, Database Integration, Resume Management, AI Interviews, and all future platform features.

---

### Result

Module 2 — Chapter 11 completed successfully.

PrepPilot backend now follows the architectural principles used in professional Express applications and is ready for building larger backend features.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (Date:-10-07-2026)

## Development Log — Mini Backend Project — (Module 2 Chapter 12)

### Goal

Build a small production-style backend application by combining Routing, Controllers, Middleware, Environment Variables, and Professional Folder Structure into a single working project.

---

### Completed

* Created Notes API.
* Created `notes.routes.js`.
* Created `notes.controller.js`.
* Implemented GET `/notes`.
* Implemented GET `/notes/:id`.
* Implemented POST `/notes`.
* Implemented DELETE `/notes/:id`.
* Implemented JSON responses.
* Implemented proper HTTP status codes.
* Tested APIs using Postman.
* Understood request flow through Routes and Controllers.
* Built the first mini backend project using professional architecture.

---

### Concepts Learned

Backend Architecture

* Feature-Based Architecture
* Separation of Concerns
* Route Files
* Controller Files
* Request Flow

REST APIs

* GET
* POST
* DELETE
* CRUD Operations
* HTTP Status Codes

Express

* Express Router
* req.params
* req.body
* res.status()
* res.json()

Tools

* Postman
* JSON Request Body
* API Testing

---

### Mistakes Made

* Initially did not know how to use Postman.
* Accidentally entered the HTTP method inside the URL field in Postman.
* Learned the difference between selecting a method and writing the URL.
* Improved understanding of request flow and API testing.

---

### Key Lessons

Building a small project helps connect individual concepts into a complete system.

Routes should only define endpoints, while controllers should contain request-handling logic.

Professional backend applications are built using small, organized modules instead of one large file.

Postman is an essential tool for backend development and API testing.

---

### Project Milestone

🚀 Successfully completed Module 2 — Backend Foundation.

Established the complete backend foundation that will support Authentication, Database Integration, Resume Management, AI Features, and all future PrepPilot modules.

---

### Result

Module 2 — Chapter 12 completed successfully.

🎉 Module 2 — Backend Foundation completed successfully.

PrepPilot now has a solid backend architecture and is ready to transition into database-driven development.

---

### Overall Project Progress

```text
Project Started:                04 July 2026
Current Milestone:              Backend Foundation Completed
Latest Update:                  10 July 2026

Module 1 — Project Foundation      ✅ Completed
Module 2 — Backend Foundation      ✅ Completed
Module 3 — Database Design         ⏳ Not Started
Module 4 — Authentication          ⏳ Not Started
Module 5 — Frontend Development    ⏳ Not Started
Module 6 — Core Features           ⏳ Not Started
Module 7 — Deployment              ⏳ Not Started
Module 8 — Final Polish            ⏳ Not Started
```

```text
PrepPilot Overall Progress:
≈ 30% Complete 🚀
```

---

### Next Milestone

🗄️ Module 3 — Database Design & SQL

Transition from temporary in-memory data to persistent database-driven applications.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

# PrepPilot — Developer Journal       (Date:-10-07-2026)

## Development Log — Why Databases Exist — (Module 3 Chapter 1)

### Goal

Understand why real applications cannot rely on JavaScript arrays for data storage and build the foundation for integrating PostgreSQL into PrepPilot.

---

### Completed

* Learned the limitations of in-memory storage.
* Understood why data disappears after a server restart.
* Learned the concept of persistence.
* Understood why real applications require permanent data storage.
* Learned why JSON files are not suitable for production systems.
* Introduced the concepts of Database and Database Management System (DBMS).
* Learned the role of PostgreSQL in backend applications.
* Understood how databases handle large datasets and multiple users.
* Connected REST API operations with database operations.
* Understood how Express and PostgreSQL will communicate.
* Prepared the backend for transitioning from arrays to database-driven storage.

---

### Concepts Learned

#### Database Fundamentals

* In-Memory Storage
* Persistence
* Database
* Database Management System (DBMS)
* Relational Database
* PostgreSQL
* Data Integrity
* Data Consistency
* Scalability

#### Backend Architecture

* Express Application Layer
* Database Layer
* Request → Controller → Database → Response Flow
* SQL as the language for database communication

#### REST and Databases

* POST → INSERT
* GET → SELECT
* PATCH/PUT → UPDATE
* DELETE → DELETE

---

### Key Lessons

JavaScript arrays are useful for learning API development but are unsuitable for production applications because data is lost whenever the server restarts.

A database provides permanent, organized, and scalable storage that supports relationships, validation, security, and concurrent users.

PrepPilot's future features such as user accounts, interview history, analytics, and progress tracking depend entirely on persistent database storage.

---

### Project Milestone

Successfully established the database foundation for PrepPilot.

Established the conceptual understanding required for PostgreSQL, SQL, and relational database design.

Successfully connected the existing Express backend architecture with the future database layer.

---

### Result

Module 3 — Chapter 1 completed successfully.

PrepPilot has officially entered the Database Design phase and is now prepared to move from temporary in-memory storage to production-level persistent data storage using PostgreSQL.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Database Fundamentals — (Module 3 Chapter 2) — (10/07/2026)

### Goal

Understand how real applications think about and organize data before designing databases and writing SQL.

---

### Completed

* Learned that every software application is fundamentally driven by data.
* Understood Structured Data and Unstructured Data.
* Learned why files are usually stored outside the database and only metadata is stored in tables.
* Understood the hierarchy of Database → Schema → Table → Row → Column.
* Learned the purpose of schemas in PostgreSQL.
* Understood the difference between an Application Server and a Database Server.
* Learned the difference between Local Databases and Cloud Databases.
* Understood how data travels through React, Express, and PostgreSQL.
* Learned how backend engineers model information before creating tables.
* Introduced the concepts of Entities, Attributes, Records, and Relationships.
* Connected PrepPilot's future features with its future database design.

---

### Concepts Learned

#### Database Fundamentals

* Structured Data
* Unstructured Data
* Database Hierarchy
* Database Schema
* Entity
* Attribute
* Record
* Relationship

#### Backend Architecture

* Application Server
* Database Server
* Local Database
* Cloud Database
* Data Flow Architecture

#### Database Design Thinking

* Information Modeling
* Entity Identification
* Relationship Identification
* Data Organization

---

### Key Lessons

Database design begins with understanding the information that an application needs to store rather than immediately creating tables.

Professional backend developers think in terms of entities, relationships, and data requirements before writing SQL.

PrepPilot's future features can now be mapped into database entities and relationships.

---

### Project Milestone

Successfully established the conceptual foundation for database modeling and relational design.

Successfully prepared PrepPilot for relational database design and PostgreSQL implementation.

---

### Result

Module 3 — Chapter 2 completed successfully.

PrepPilot now has a strong conceptual understanding of how production applications organize and model data before implementation.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Relational Databases & PostgreSQL — (Module 3 Chapter 3) — (11/07/2026)

### Goal

Understand why relational databases exist, how data relationships are modeled, and why PostgreSQL is an ideal database for PrepPilot.

---

### Completed

* Learned why PostgreSQL is called a Relational Database.
* Understood that relationships are the core idea behind relational databases.
* Learned how relationships connect data in real-world applications.
* Understood how relational databases reduce duplication and improve consistency.
* Learned why PostgreSQL uses tables to organize data.
* Introduced One-to-One relationships.
* Introduced One-to-Many relationships.
* Introduced Many-to-Many relationships.
* Compared Relational Databases with Non-Relational Databases.
* Learned why PostgreSQL is a better fit for PrepPilot.
* Introduced the concepts of Relation, Tuple, and Attribute.
* Connected PrepPilot's future entities through relationships.

---

### Concepts Learned

#### Relational Databases

* Relationships
* Relational Database
* Relation
* Tuple
* Attribute
* Data Consistency
* Data Integrity

#### Database Relationships

* One-to-One
* One-to-Many
* Many-to-Many

#### Database Design Thinking

* Relationship Modeling
* Data Connectivity
* Entity Relationships
* Information Organization

---

### Key Lessons

The real strength of a relational database is not tables but the relationships between data.

Professional applications are built around connected information, and relational databases make these connections reliable and efficient.

PrepPilot's users, interviews, questions, answers, and progress records naturally fit into a relational database model.

---

### Project Milestone

Successfully established the conceptual foundation for relational database design.

Successfully modeled PrepPilot's future features using database relationships.

Successfully prepared the project for actual table design and PostgreSQL implementation.

---

### Result

Module 3 — Chapter 3 completed successfully.

PrepPilot now has a strong understanding of relational thinking and is prepared to begin designing real database tables and relationships.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Tables, Rows, Columns & Data Types — (Module 3 Chapter 4) — (11/07/2026)

### Goal

Learn how PostgreSQL stores different kinds of information and how to choose appropriate data types when designing production databases.

---

### Completed

* Learned the purpose of database data types.
* Explored common PostgreSQL data types.
* Understood when to use VARCHAR and TEXT.
* Understood INTEGER, BOOLEAN, TIMESTAMP, and UUID.
* Learned why choosing incorrect data types creates future problems.
* Designed the first PrepPilot tables with suitable data types.
* Began thinking about database design from a query and data perspective.

---

### Concepts Learned

#### PostgreSQL Data Types

* VARCHAR
* TEXT
* INTEGER
* BOOLEAN
* TIMESTAMP
* UUID

#### Database Design

* Data Integrity
* Storage Efficiency
* Query Requirements
* Table Design

---

### Key Lessons

Database design is not only about creating tables but also about selecting the correct type of data for every piece of information.

Choosing the right data type improves data integrity, performance, and future maintainability.

---

### Project Milestone

Successfully designed the first production-style database tables for PrepPilot.

Established the foundation required for constraints, relationships, and database implementation.

---

### Result

Module 3 — Chapter 4 completed successfully.

PrepPilot now has its first realistic database table designs and is prepared for database constraints and relationships.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Keys & Constraints — (Module 3 Chapter 5) — (11/07/2026)

### Goal

Learn how relational databases enforce rules and protect themselves from invalid or inconsistent data.

---

### Completed

* Learned the purpose of database constraints.
* Understood Primary Keys and record identification.
* Understood Foreign Keys and relationship validation.
* Learned UNIQUE constraints and duplicate prevention.
* Understood NOT NULL constraints.
* Learned CHECK constraints for data validation.
* Understood DEFAULT values and automatic initialization.
* Designed production-style rules for PrepPilot tables.

---

### Concepts Learned

#### Database Keys

* Primary Key (PK)
* Foreign Key (FK)

#### Database Constraints

* UNIQUE
* NOT NULL
* CHECK
* DEFAULT

#### Database Design

* Data Integrity
* Validation Rules
* Relationship Integrity

---

### Key Lessons

A database should not blindly trust applications. It should protect its own data through constraints and validation rules.

Well-designed constraints make applications more reliable and prevent inconsistent data from entering the system.

---

### Project Milestone

Successfully established the integrity rules for PrepPilot's database.

Prepared the project for implementing real relationships between tables.

---

### Result

Module 3 — Chapter 5 completed successfully.

PrepPilot's database now has the foundation required for safe, reliable, and production-level data storage.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Database Relationships (Deep Dive) — (Module 3 Chapter 6) — (12/07/2026)

### Goal

Understand how relational databases connect information and design the relationships required for PrepPilot's database.

---

### Completed

* Learned the importance of database relationships.
* Understood One-to-One relationships.
* Understood One-to-Many relationships.
* Understood Many-to-Many relationships.
* Learned where Foreign Keys should be placed.
* Introduced Junction Tables.
* Learned how to identify relationship types.
* Designed the major relationships required by PrepPilot.

---

### Concepts Learned

#### Database Relationships

* One-to-One (1:1)
* One-to-Many (1:N)
* Many-to-Many (M:N)
* Junction Table
* Foreign Key Placement

#### Database Design

* Relationship Modeling
* Data Connectivity
* Entity Relationships

---

### Key Lessons

Most real-world applications are collections of related tables rather than isolated tables.

Good database design depends on correctly identifying relationships and modeling them properly.

---

### Project Milestone

Successfully established the relationship model for PrepPilot's database.

Prepared the project for SQL queries and real database implementation.

---

### Result

Module 3 — Chapter 6 completed successfully.

PrepPilot now has a complete conceptual database structure and is ready to start interacting with PostgreSQL using SQL.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Introduction to SQL — (Module 3 Chapter 7) — (12/07/2026)

### Goal

Understand what SQL is, why it exists, and how backend applications use SQL to communicate with relational databases.

---

### Completed

* Learned the purpose of SQL.
* Understood SQL as the language of relational databases.
* Connected SQL with REST API operations.
* Understood how Express communicates with PostgreSQL.
* Learned the major categories of SQL commands.
* Introduced DDL, DML, DQL, DCL, and TCL.
* Prepared the backend for writing real database queries.

---

### Concepts Learned

#### SQL Fundamentals

* SQL
* Declarative Language
* Database Queries
* Database Communication

#### SQL Categories

* DDL
* DML
* DQL
* DCL
* TCL

---

### Key Lessons

SQL allows applications to communicate with databases using a standard and powerful language.

Backend APIs eventually translate into SQL operations that create, read, update, and delete data.

---

### Project Milestone

Successfully established the SQL foundation required for PostgreSQL integration.

Prepared PrepPilot for implementing database-driven APIs.

---

### Result

Module 3 — Chapter 7 completed successfully.

PrepPilot is now ready to begin executing real SQL queries and performing database CRUD operations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — CRUD Operations with SQL — (Module 3 Chapter 8) — (13/07/2026)

### Goal

Learn how applications create, read, update, and delete data using SQL queries and understand how these operations power backend APIs.

---

### Completed

* Learned the concept of CRUD operations.
* Understood SELECT queries for reading data.
* Understood INSERT queries for creating data.
* Understood UPDATE queries for modifying data.
* Understood DELETE queries for removing data.
* Connected CRUD operations with REST API endpoints.
* Understood how backend applications communicate with PostgreSQL using SQL queries.
* Learned important safety practices for UPDATE and DELETE queries.
* Connected the existing Notes API with future database implementation.

---

### Concepts Learned

#### SQL CRUD

* SELECT
* INSERT
* UPDATE
* DELETE

#### Backend Architecture

* REST → SQL Mapping
* Request → SQL → Database → Response Flow

---

### Key Lessons

Almost every backend feature eventually becomes a CRUD operation.

REST APIs and SQL queries naturally map to each other, making backend development more structured and predictable.

---

### Project Milestone

Successfully established the SQL foundation required for building database-driven APIs.

Prepared PrepPilot for implementing real PostgreSQL queries.

---

### Result

Module 3 — Chapter 8 completed successfully.

PrepPilot is now ready to begin writing more advanced SQL queries and interacting with real database data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Filtering & Sorting Data — (Module 3 Chapter 9) — (13/07/2026)

### Goal

Learn how to filter, sort, search, and paginate database records using SQL and understand how these queries power real application features.

---

### Completed

* Learned the WHERE clause for filtering data.
* Understood comparison operators.
* Learned ORDER BY for sorting query results.
* Understood ASC and DESC ordering.
* Learned LIMIT for restricting result size.
* Understood OFFSET and pagination.
* Learned pattern matching using LIKE.
* Understood SQL wildcards.
* Learned IN for multiple-value filtering.
* Understood BETWEEN for range queries.
* Combined multiple SQL clauses to solve business problems.
* Connected SQL queries with real PrepPilot features.

---

### Concepts Learned

#### SQL Filtering

* WHERE
* LIKE
* IN
* BETWEEN

#### SQL Sorting & Pagination

* ORDER BY
* ASC
* DESC
* LIMIT
* OFFSET

#### Backend Features

* Search
* Pagination
* Analytics Queries

---

### Key Lessons

Real applications rarely need entire tables. Most features require filtering, sorting, and pagination.

SQL becomes significantly more powerful when multiple clauses are combined to answer business questions.

---

### Project Milestone

Successfully established the foundation for search, analytics, and dashboard queries in PrepPilot.

Prepared the project for aggregation and reporting features.

---

### Result

Module 3 — Chapter 9 completed successfully.

PrepPilot can now conceptually support search, rankings, pagination, and analytical queries using SQL.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Aggregation & Grouping — (Module 3 Chapter 10) — (14/07/2026)

### Goal

Learn how to summarize, group, and analyze data using SQL aggregate functions and build the foundation for analytics features.

---

### Completed

* Learned aggregate functions in SQL.
* Understood COUNT, SUM, AVG, MIN, and MAX.
* Learned how aggregation produces summary values.
* Understood GROUP BY and data grouping.
* Learned how HAVING filters grouped data.
* Understood the difference between WHERE and HAVING.
* Built analytical queries for real business scenarios.
* Connected aggregation concepts with future PrepPilot dashboards and analytics.

---

### Concepts Learned

#### Aggregate Functions

* COUNT
* SUM
* AVG
* MIN
* MAX

#### Grouping & Filtering

* GROUP BY
* HAVING
* Analytical Queries

#### Backend Features

* Dashboards
* Reports
* Statistics
* Leaderboards

---

### Key Lessons

Aggregation transforms raw data into meaningful information and insights.

GROUP BY and aggregate functions are essential for building reports, dashboards, and analytics systems.

---

### Project Milestone

Successfully established the analytical query foundation for PrepPilot.

Prepared the project for multi-table queries and advanced reporting features.

---

### Result

Module 3 — Chapter 10 completed successfully.

PrepPilot is now capable of conceptually supporting dashboards, statistics, reports, and analytical features using SQL.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — SQL Joins — (Module 3 Chapter 11) — (14/07/2026)

### Goal

Learn how relational databases combine data from multiple tables and understand how joins power real-world application features.

---

### Completed

* Learned the purpose of SQL joins.
* Understood INNER JOIN and matching rows.
* Understood LEFT JOIN and missing relationships.
* Learned RIGHT JOIN and FULL JOIN.
* Understood why joins produce NULL values.
* Learned how Foreign Keys enable joins.
* Built queries across multiple related tables.
* Introduced multi-table joins.
* Connected joins with future PrepPilot features and analytics.

---

### Concepts Learned

#### SQL Joins

* INNER JOIN
* LEFT JOIN
* RIGHT JOIN
* FULL JOIN
* Multi-Table Joins

#### Relational Querying

* Foreign Keys
* NULL Handling
* Related Data Retrieval

---

### Key Lessons

The real power of relational databases comes from the ability to connect and query related data across multiple tables.

Most advanced backend features such as dashboards, analytics, reports, and history pages rely heavily on SQL joins.

---

### Project Milestone

Successfully established the foundation for relational querying and multi-table data retrieval.

Prepared PrepPilot for advanced analytics and production-level database features.

---

### Result

Module 3 — Chapter 11 completed successfully.

PrepPilot can now conceptually retrieve and combine information across multiple related tables using SQL joins.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Database Normalization — (Module 3 Chapter 12) — (15/07/2026)

### Goal

Learn how professional databases eliminate redundancy, avoid anomalies, and organize information into clean and maintainable structures.

---

### Completed

* Learned the purpose of normalization.
* Understood data redundancy and its problems.
* Learned Insert, Update, and Delete anomalies.
* Understood First Normal Form (1NF).
* Understood Second Normal Form (2NF).
* Understood Third Normal Form (3NF).
* Learned partial dependency and transitive dependency.
* Introduced denormalization and its use cases.
* Evaluated PrepPilot's database design using normalization principles.

---

### Concepts Learned

#### Database Design

* Data Redundancy
* Data Anomalies
* Normalization
* Denormalization

#### Normal Forms

* First Normal Form (1NF)
* Second Normal Form (2NF)
* Third Normal Form (3NF)

#### Dependencies

* Partial Dependency
* Transitive Dependency

---

### Key Lessons

Good database design focuses on reducing duplication and keeping data consistent.

Normalization helps create scalable and maintainable databases by separating information into related tables.

---

### Project Milestone

Successfully established the database design principles required for production-level systems.

Validated that PrepPilot's relational structure follows normalization concepts and is prepared for implementation.

---

### Result

Module 3 — Chapter 12 completed successfully.

PrepPilot now has a clean and scalable database design foundation and is ready to begin working with a real PostgreSQL database.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — PostgreSQL Installation & Local Setup — (Module 3 Chapter 13) — (15/07/2026)

### Goal

Install PostgreSQL, connect to a real database, and perform the first database operations for PrepPilot.

---

### Completed

* Installed PostgreSQL and psql.
* Verified PostgreSQL installation.
* Connected to PostgreSQL using the `postgres` user.
* Ran the first SQL queries.
* Created the `preppilot` database.
* Connected to the `preppilot` database.
* Created the first table (`users`).
* Inserted the first row into the database.
* Queried data using `SELECT`.

---

### Concepts Learned

#### PostgreSQL

* PostgreSQL Server
* psql
* Local Database Environment
* Database Connection

#### SQL Commands

* CREATE DATABASE
* CREATE TABLE
* INSERT
* SELECT

#### psql Commands

* `\l`
* `\c`
* `\dt`
* `\d`
* `\q`

---

### Key Lessons

A database server and a database client are different components that work together.

Local database environments allow developers to safely build and test applications before deployment.

The ability to create databases, tables, and manipulate data marks the transition from database theory to practical database development.

---

### Project Milestone

Successfully brought PostgreSQL into the PrepPilot project.

Successfully completed the first end-to-end database workflow using a real relational database.

---

### Result

Module 3 — Chapter 13 completed successfully.

PrepPilot now has a fully configured local PostgreSQL environment and is ready to build its production database schema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — PostgreSQL Data Types & Table Creation — (Module 3 Chapter 14) — (16/07/2026)

### Goal

Learn how PostgreSQL stores different kinds of data and begin designing production-level tables for PrepPilot.

---

### Completed

* Learned the importance of database data types.
* Understood INTEGER and SERIAL.
* Understood VARCHAR and TEXT.
* Learned BOOLEAN, DATE, and TIMESTAMP.
* Introduced DECIMAL, UUID, and JSONB.
* Learned how to choose the appropriate data type for a column.
* Created realistic production-style tables.
* Introduced automatic timestamps using DEFAULT CURRENT_TIMESTAMP.
* Connected data type decisions with future PrepPilot features.

---

### Concepts Learned

#### PostgreSQL Data Types

* INTEGER
* SERIAL
* VARCHAR
* TEXT
* BOOLEAN
* DATE
* TIMESTAMP / TIMESTAMPTZ
* DECIMAL
* UUID
* JSONB

#### Database Design

* Data Validation
* Data Consistency
* Default Values
* Production Table Design

---

### Key Lessons

Choosing the correct data type is essential for performance, storage efficiency, and data integrity.

Production databases rely heavily on proper data type selection to build scalable and maintainable systems.

TIMESTAMPTZ is generally preferred for application events because it handles time zones correctly.

---

### Project Milestone

Successfully established the foundation for building PrepPilot's production database schema.

Successfully moved from simple tables to designing realistic application tables.

---

### Result

Module 3 — Chapter 14 completed successfully.

PrepPilot can now create production-level database tables using appropriate PostgreSQL data types and is ready to implement constraints and relationships.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Constraints & Data Integrity — (Module 3 Chapter 15) — (16/07/2026)

### Goal

Learn how PostgreSQL protects data using constraints and understand how production databases maintain data integrity.

---

### Completed

* Learned the purpose of database constraints.
* Understood the concept of data integrity.
* Learned PRIMARY KEY and row uniqueness.
* Understood NOT NULL and mandatory data.
* Learned UNIQUE and duplicate prevention.
* Understood DEFAULT values.
* Learned CHECK constraints for custom validation.
* Understood FOREIGN KEY relationships.
* Built production-style table definitions using multiple constraints.
* Connected constraints with future PrepPilot requirements.

---

### Concepts Learned

#### Database Constraints

* PRIMARY KEY
* NOT NULL
* UNIQUE
* DEFAULT
* CHECK
* FOREIGN KEY

#### Database Design

* Data Integrity
* Validation Rules
* Relational Integrity
* Production Schema Design

---

### Key Lessons

Constraints are the first line of defense against invalid and inconsistent data.

Production databases rely heavily on constraints to enforce business rules and maintain reliable relationships between tables.

---

### Project Milestone

Successfully established the data integrity foundation required for PrepPilot's production database.

Prepared the project for designing complete relational schemas and implementing real-world database relationships.

---

### Result

Module 3 — Chapter 15 completed successfully.

PrepPilot can now design safe, validated, and production-ready database tables using PostgreSQL constraints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Designing the Real PrepPilot Database Schema — (Module 3 Chapter 16) — (17/07/2026)

### Goal

Design the complete production database schema for PrepPilot by identifying entities, relationships, and constraints required for the application.

---

### Completed

* Identified the major features of PrepPilot.
* Identified all required database entities.
* Designed the `users` table.
* Designed the `resumes` table.
* Designed the `interviews` table.
* Designed the `questions` table.
* Designed the `answers` table.
* Designed the `technologies` table.
* Designed the `user_technologies` junction table.
* Identified relationships between all entities.
* Applied normalization and constraint principles.
* Designed a scalable and extensible production database.

---

### Concepts Learned

#### Database Design

* Entity Identification
* Relationship Identification
* Schema Design
* Database Modeling
* Production Database Architecture

#### Relationships

* One-to-One
* One-to-Many
* Many-to-Many
* Junction Tables

---

### Key Lessons

A good database design begins by understanding the application's features and data requirements.

Production databases are built by identifying entities, relationships, and constraints before writing SQL.

A well-designed schema makes future features easier to implement and maintain.

---

### Project Milestone

Successfully completed the production database design for PrepPilot.

Established the complete relational model that will power future backend and AI features.

---

### Result

Module 3 — Chapter 16 completed successfully.

PrepPilot now has a complete production-ready database blueprint and is prepared for real database implementation inside PostgreSQL.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Creating Real PrepPilot Tables — (Module 3 Chapter 17) — (17/07/2026)

### Goal

Transform the designed PrepPilot database schema into real PostgreSQL tables and establish the project's production database foundation.

---

### Completed

* Connected to the `preppilot` database.
* Verified existing tables using `\dt`.
* Created the production `users` table.
* Created the `resumes` table.
* Created the `interviews` table.
* Created the `questions` table.
* Created the `answers` table.
* Created the `technologies` table.
* Created the `user_technologies` junction table.
* Applied appropriate data types and constraints.
* Verified table structures using `\d`.
* Successfully implemented the first complete version of the PrepPilot database.

---

### Production Tables Created

#### users

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

#### resumes

```sql
CREATE TABLE resumes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    resume_url TEXT NOT NULL,
    summary TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

#### interviews

```sql
CREATE TABLE interviews (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title VARCHAR(200) NOT NULL,
    score DECIMAL(5,2)
        CHECK (score >= 0 AND score <= 100),
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

#### questions

```sql
CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    interview_id INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    difficulty VARCHAR(20),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

#### answers

```sql
CREATE TABLE answers (
    id SERIAL PRIMARY KEY,
    question_id INTEGER NOT NULL,
    answer_text TEXT,
    feedback TEXT,
    score DECIMAL(5,2)
        CHECK (score >= 0 AND score <= 100),
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

#### technologies

```sql
CREATE TABLE technologies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);
```

#### user_technologies

```sql
CREATE TABLE user_technologies (
    user_id INTEGER NOT NULL,
    technology_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, technology_id)
);
```

---

### Concepts Learned

#### PostgreSQL

* CREATE TABLE
* Production Table Design
* Schema Implementation
* Composite Primary Key
* Table Verification
* Database Inspection Commands

#### Database Design

* Translating ER diagrams into SQL tables.
* Choosing appropriate data types.
* Applying constraints during table creation.
* Creating scalable production schemas.

---

### Useful PostgreSQL Commands

```sql
\c preppilot
\dt
\d users
\d resumes
\d interviews
\d questions
\d answers
\d technologies
\d user_technologies
SELECT current_database();
```

---

### Key Lessons

A database design only becomes useful after it is implemented in a real database.

Creating tables in a proper order makes relationships and future modifications easier.

Production applications rely on well-designed schemas before writing backend code.

Verifying table structures after creation is an important professional practice.

---

### Project Milestone

🚀 Successfully implemented the first complete production database for PrepPilot.

🚀 Established all seven core tables required for Authentication, Resumes, Interviews, Questions, Answers, Technologies, and Learning Progress.

🚀 Completed the database structure that will support future backend and AI features.

---

### Result

Module 3 — Chapter 17 completed successfully.

PrepPilot now has a fully implemented PostgreSQL schema consisting of seven production tables and is ready for relational implementation using Foreign Keys and sample data insertion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Relationships & Foreign Keys in PostgreSQL — (Module 3 Chapter 18) — (17/07/2026)

### Goal

Implement relationships between PrepPilot tables and enforce data integrity using Foreign Keys.

---

### Completed

* Implemented Foreign Keys.
* Implemented Referential Integrity.
* Connected all production tables.
* Added `ON DELETE CASCADE`.
* Verified relationships using `\d`.
* Completed the relational structure of PrepPilot's database.

---

### Final Production Tables

#### users

```text
id
name
email
password
is_verified
created_at
updated_at
```

#### resumes

```text
id
user_id
resume_url
summary
created_at
updated_at
```

#### interviews

```text
id
user_id
title
score
completed_at
created_at
```

#### questions

```text
id
interview_id
question_text
difficulty
created_at
```

#### answers

```text
id
question_id
answer_text
feedback
score
created_at
```

#### technologies

```text
id
name
description
```

#### user_technologies

```text
user_id
technology_id
```

---

### Final Database Relationships

```text
users
│
├── resumes
│      (1 → 1)
│
├── interviews
│      (1 → N)
│          │
│          └── questions
│                 (1 → N)
│                     │
│                     └── answers
│                           (1 → 1)
│
└── user_technologies
          (N ↔ N)
               │
               └── technologies
```

---

### Foreign Keys Implemented

```text
resumes.user_id
→ users.id

interviews.user_id
→ users.id

questions.interview_id
→ interviews.id

answers.question_id
→ questions.id

user_technologies.user_id
→ users.id

user_technologies.technology_id
→ technologies.id
```

All relationships use:

```text
ON DELETE CASCADE
```

---

### Concepts Learned

#### Database Relationships

* Foreign Key
* Referential Integrity
* Cascading Deletes
* Relationship Ownership
* Relational Database Design

#### PostgreSQL

* REFERENCES
* ON DELETE CASCADE
* ALTER TABLE
* Constraint Verification

---

### Key Lessons

A relational database becomes powerful when tables are connected through relationships.

Foreign Keys protect the database from invalid and orphaned data.

Referential Integrity is one of the most important features of relational databases.

---

### Project Milestone

🚀 Successfully transformed PrepPilot into a fully relational database.

🚀 Completed the implementation of all table relationships and data integrity rules.

🚀 Database is now ready for real data insertion and backend integration.

---

### Result

Module 3 — Chapter 18 completed successfully.

PrepPilot now has a complete production-level relational database with properly implemented Foreign Keys and cascading relationships.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Seeding & Testing Database Data — (Module 3 Chapter 19) — (18/07/2026)

### Goal

Populate the PrepPilot database with realistic sample data and verify that relationships, constraints, and cascading behaviors work correctly.

---

### Completed

* Inserted sample users.
* Inserted technologies.
* Created sample resumes.
* Created sample interviews.
* Created sample questions.
* Created sample answers.
* Populated the `user_technologies` junction table.
* Executed queries to verify data.
* Tested Foreign Key constraints.
* Tested `ON DELETE CASCADE`.
* Verified that the database behaves like a production relational system.

---

### Sample Data Inserted

#### Users

```text
Sai Kiran
Ravi
Priya
```

#### Technologies

```text
Java
React
Node.js
PostgreSQL
```

#### Interviews

```text
React Mock Interview
Node.js Interview
Java Interview
```

#### Questions

```text
What is React?
What is useEffect?
Explain Node.js Event Loop.
```

---

### Concepts Learned

#### Database Testing

* Database Seeding
* Constraint Testing
* Relationship Testing
* Cascade Testing
* Data Verification

#### PostgreSQL

* INSERT
* SELECT
* DELETE
* Foreign Key Validation
* Cascading Delete

---

### Key Lessons

An empty database cannot be properly tested.

Seeding realistic data helps verify relationships and business rules before connecting the backend.

Testing constraints early prevents future bugs and data integrity problems.

---

### Project Milestone

🚀 Successfully populated the first version of PrepPilot's database.

🚀 Verified that relationships, constraints, and cascading deletes work correctly.

🚀 Established a fully tested relational database ready for backend integration.

---

### Result

Module 3 — Chapter 19 completed successfully.

PrepPilot now contains realistic sample data and a fully tested relational database ready to be connected with Express and Node.js.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# PrepPilot — Developer Journal       (19-07-2026)

## Development Log — Connecting Node.js and PostgreSQL — (Module 3 Chapter 20)  

### Goal

Connect the PrepPilot Express backend to PostgreSQL and replace temporary in-memory learning data with real persistent database data.

Clean and reorganize the backend so that every file has one clear responsibility and the project is prepared for future Authentication, Resume Management, Interview Management, Analytics, and AI-powered features.

---

### Completed

* Installed and configured the `pg` package.
* Installed and configured the `dotenv` package.
* Created `src/config/database.js`.
* Created one reusable PostgreSQL connection pool.
* Configured PostgreSQL connection values using environment variables.
* Created a private `.env` file.
* Created a safe `.env.example` file.
* Updated `.gitignore`.
* Protected:
  * `server/.env`
  * `server/node_modules/`
  * `client/node_modules/`
  * log files
  * build files
  * editor files
  * operating-system files
* Created `test-db.js`.
* Tested PostgreSQL independently from Express.
* Executed `SELECT NOW();`.
* Executed `SELECT current_database(), current_user, NOW();`.
* Verified:
  * database name
  * database user
  * PostgreSQL time
  * successful database connection
* Connected Node.js to the `preppilot` PostgreSQL database.
* Replaced temporary Books and Notes arrays with persistent PostgreSQL data.
* Removed `http-server-demo.js`.
* Removed the old Notes route and controller files.
* Removed the old generic Index route and controller files.
* Renamed:
  * `index.routes.js` → `system.routes.js`
  * `index.controller.js` → `system.controller.js`
* Created:
  * `src/routes/system.routes.js`
  * `src/routes/users.routes.js`
  * `src/controllers/system.controller.js`
  * `src/controllers/users.controller.js`
  * `src/config/database.js`
  * `test-db.js`
  * `.env.example`
* Cleaned and simplified `index.js`.
* Removed feature-specific route logic from `index.js`.
* Removed PostgreSQL query logic from `index.js`.
* Kept only application-level responsibilities inside `index.js`.
* Configured:
  * environment-variable loading
  * Express application creation
  * JSON middleware
  * route mounting
  * unknown-route handling
  * PostgreSQL verification
  * server startup
  * graceful shutdown
* Created system endpoints:
  * `GET /`
  * `GET /health`
  * `GET /health/database`
* Created PostgreSQL-backed user endpoints:
  * `GET /api/v1/users`
  * `GET /api/v1/users/:id`
* Added API versioning using `/api/v1`.
* Added pagination using:
  * `page`
  * `limit`
  * `LIMIT`
  * `OFFSET`
* Added default pagination values:
  * `page = 1`
  * `limit = 20`
* Added a maximum limit of 100 users per request.
* Added pagination offset calculation.
* Added total-user counting.
* Added total-page calculation.
* Added input validation.
* Validated:
  * user IDs
  * page values
  * limit values
  * large pagination values
  * zero
  * negative values
  * decimal values
  * arrays
  * objects
  * invalid strings
* Used parameterized PostgreSQL queries.
* Used:
  * `WHERE id = $1`
  * `LIMIT $1`
  * `OFFSET $2`
* Protected SQL queries from unsafe direct input insertion.
* Returned correct HTTP status codes:
  * `200 OK`
  * `400 Bad Request`
  * `404 Not Found`
  * `500 Internal Server Error`
  * `503 Service Unavailable`
* Removed passwords from all user responses.
* Removed email addresses from public user responses.
* Removed the PostgreSQL username from the database-health response.
* Removed unnecessary environment information from the public root response.
* Disabled the Express `X-Powered-By` header.
* Added a JSON request-body size limit.
* Added unknown-route handling.
* Verified PostgreSQL before starting the server.
* Added graceful shutdown.
* Handled:
  * `SIGINT`
  * `SIGTERM`
* Closed the HTTP server safely.
* Closed the PostgreSQL connection pool safely.
* Updated `package.json`.
* Added npm scripts:
  * `"start": "node index.js"`
  * `"dev": "node index.js"`
  * `"test:db": "node test-db.js"`
* Tested:
  * `npm run test:db`
  * `npm start`
  * `npm run dev`
* Tested all major API endpoints.
* Tested valid user IDs.
* Tested invalid user IDs.
* Tested missing users.
* Tested pagination.
* Tested invalid pagination.
* Tested unknown routes.
* Verified the HTTP `404` status code using browser developer tools.
* Tested graceful shutdown using `Ctrl + C`.

---

### Concepts Learned

#### Node.js and PostgreSQL Integration

* `pg` Package
* PostgreSQL Connection Pool
* Persistent Storage
* Database Configuration
* Environment Variables
* Database Connection Testing
* PostgreSQL Query Execution

#### Backend Architecture

* Separation of Concerns
* Feature-Based Structure
* Entry Point
* Route Files
* Controller Files
* Database Configuration File
* Request Flow
* Health Checks
* Graceful Shutdown

#### PostgreSQL Queries

* `SELECT`
* `COUNT(*)`
* `WHERE`
* `LIMIT`
* `OFFSET`
* Parameterized Queries
* Query Placeholders
* Safe Query Values

#### REST API Design

* API Versioning
* Resource-Based URLs
* Query Parameters
* Route Parameters
* Pagination
* Input Validation
* JSON Responses
* HTTP Status Codes

#### Security and Configuration

* `.env`
* `.env.example`
* `.gitignore`
* Secret Protection
* Password Protection
* Safe Public Responses
* SQL Injection Prevention
* Disabling `X-Powered-By`

#### Server Lifecycle

* Server Startup
* PostgreSQL Verification
* `SIGINT`
* `SIGTERM`
* Graceful Shutdown
* Closing the HTTP Server
* Closing the PostgreSQL Pool

---

### PostgreSQL Connection Pool

A PostgreSQL connection pool manages reusable database connections.

Instead of creating a new PostgreSQL connection for every incoming request, the backend uses an available connection from the pool.

After the query finishes, the connection becomes available for another request.

This improves:

* performance
* reliability
* scalability
* resource management

The reusable pool is created inside `src/config/database.js`.

Other files import the same pool instead of creating separate database connections.

---

### Environment Variables

Environment variables store configuration values outside the source code.

Examples:

* `PORT`
* `APP_NAME`
* `NODE_ENV`
* `JWT_SECRET`
* `DB_HOST`
* `DB_PORT`
* `DB_NAME`
* `DB_USER`
* `DB_PASSWORD`

The real values are stored inside `server/.env`.

Safe placeholder values are stored inside `server/.env.example`.

The `.env` file must never be committed to GitHub because it contains private values.

---

### Persistent Storage

Temporary JavaScript arrays exist only while the Node.js process is running.

When the server restarts, the array is created again and the previous data disappears.

PostgreSQL stores information permanently.

The data remains available after:

* restarting Node.js
* stopping the Express server
* restarting the computer
* opening the application later

This makes PostgreSQL suitable for real PrepPilot features such as:

* user accounts
* resumes
* interviews
* questions
* answers
* scores
* analytics
* progress tracking

---

### Parameterized Queries

A parameterized query separates SQL instructions from user-supplied values.

Example:

    const result = await pool.query(
      `
        SELECT
          id,
          name
        FROM users
        WHERE id = $1;
      `,
      [userId]
    );

`$1` is a placeholder.

The real value is supplied separately inside the values array.

This reduces SQL injection risk and makes database queries safer.

---

### API Versioning

PrepPilot now uses:

    /api/v1/users

Meaning:

    api   → Application Programming Interface
    v1    → Version 1
    users → User resource

API versioning allows future versions to be introduced without immediately breaking older clients.

For example:

    /api/v1/users
    /api/v2/users

---

### Health Checks

Application health endpoint:

    GET /health

This confirms that Node.js and Express are running.

Database health endpoint:

    GET /health/database

This confirms that the backend can communicate with PostgreSQL.

A server can be running while its database is unavailable, so both checks are useful.

---

### Pagination

Pagination divides a large collection of database records into smaller pages.

Example:

    GET /api/v1/users?page=2&limit=20

This means:

    Page number: 2
    Maximum records: 20
    Rows skipped: 20

Formula:

    offset = (page - 1) × limit

Pagination prevents the server from returning thousands of records in one response.

---

### Mistakes Made

* Initially used Books and Notes arrays for backend data.
* Learned that in-memory data disappears after restarting the server.
* Initially kept many routes and API operations inside `index.js`.
* Learned that `index.js` should configure and start the application instead of containing feature-specific logic.
* Initially renamed the Notes route file but kept Notes controller function names.
* Corrected all names to match the Users feature.
* Initially considered using a Service layer and separate custom error middleware before learning those concepts fully.
* Realized that this was unnecessary overengineering for the current stage.
* Removed those additional layers and kept the simpler architecture:

    Route  
      ↓  
    Controller  
      ↓  
    Database

* Initially kept the database-health route inside `index.js`.
* Moved it into:
  * `system.routes.js`
  * `system.controller.js`
* Initially exposed email addresses in public user endpoints.
* Removed email from public user responses.
* Initially exposed the PostgreSQL username in the database-health response.
* Removed it from the public response.
* Initially exposed the application environment in the root response.
* Removed it because it was unnecessary publicly.
* The PostgreSQL password contained the `#` symbol.
* Initially wrote:

    DB_PASSWORD=SaiKiran@77#

* The password was interpreted incorrectly because `#` can begin a comment.
* Corrected it using quotes:

    DB_PASSWORD="SaiKiran@77#"

* Initially ran `npm run test:db` from `C:\Projects\preppilot`.
* npm could not find `package.json`.
* Learned to run npm commands from `C:\Projects\preppilot\server`.
* Also learned that the same command can be run from the project root using:

    npm --prefix server run test:db

* Initially expected the browser to display the HTTP status code inside the JSON response.
* Learned that HTTP status codes are sent separately from the response body.
* Learned to inspect status codes using:
  * the browser Network tab
  * `curl`
  * PowerShell

---

### Key Lessons

Temporary arrays are useful for learning API development but are unsuitable for permanent application data.

Real backend applications need persistent database storage.

Routes should define endpoint paths and connect them to controller functions.

Controllers should handle request validation, database operations, and HTTP responses.

`index.js` should configure and start the application.

Database configuration should be centralized inside one reusable file.

Private configuration values should never be written directly inside source code.

`.env` contains real private values.

`.env.example` contains safe placeholders.

`.gitignore` protects `.env` from being committed.

Parameterized SQL queries are safer than directly inserting values into SQL strings.

Passwords must never be returned by APIs.

Public APIs should expose only the information required by the client.

API versioning creates a cleaner long-term structure.

Health endpoints help developers, hosting platforms, and monitoring systems.

Pagination improves performance and prevents excessively large responses.

Graceful shutdown closes active resources safely.

Professional architecture does not mean adding every possible folder.

The best architecture is the simplest structure that is:

* clear
* maintainable
* understandable
* suitable for the current stage
* prepared to grow

---

### Project Transformation

Before Module 3:

    Client
      ↓
    Express
      ↓
    Temporary Books or Notes Array
      ↓
    JSON Response

After Module 3:

    Client
      ↓
    index.js
      ↓
    Route File
      ↓
    Controller
      ↓
    database.js
      ↓
    PostgreSQL
      ↓
    Persistent Data
      ↓
    JSON Response

---

### Final Current Backend Structure

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

---

### Current API Endpoints

#### System Endpoints

* `GET /`
* `GET /health`
* `GET /health/database`

#### User Endpoints

* `GET /api/v1/users`
* `GET /api/v1/users/:id`

#### Pagination Example

    GET /api/v1/users?page=1&limit=20

---

### Successful Tests

* Database connection test completed.
* Express server startup completed.
* API information endpoint tested.
* Application health endpoint tested.
* Database health endpoint tested.
* All-users endpoint tested.
* Single-user endpoint tested.
* Pagination tested.
* Invalid user ID tested.
* Missing user tested.
* Invalid page tested.
* Invalid limit tested.
* Unknown route tested.
* HTTP `404` status verified.
* Graceful shutdown tested.

---

### Project Milestone

🐘 Successfully connected the PrepPilot backend to PostgreSQL.

🚀 Successfully transformed PrepPilot from an in-memory Express learning server into a persistent PostgreSQL-backed API.

🎉 Successfully completed Module 3 — Database Design & PostgreSQL technical implementation.

Established the permanent database foundation that will support Authentication, Resume Management, Interview Sessions, Questions, Answers, Analytics, Progress Tracking, and future AI-powered features.

---

### Result

Module 3 — Chapter 20 completed successfully.

🎉 Module 3 — Database Design & PostgreSQL technical implementation completed successfully.

PrepPilot now has:

* Professional Express architecture
* PostgreSQL connection
* Persistent data storage
* Reusable connection pool
* Database-backed API endpoints
* Parameterized queries
* Pagination
* Input validation
* API versioning
* Health-check endpoints
* Protected environment variables
* Graceful shutdown

PrepPilot is now ready to transition into secure user Authentication and Authorization.

---

### Overall Project Progress

    Project Started:                   04 July 2026
    Current Milestone:                 Database Foundation Completed
    Latest Update:                     19 July 2026

    Module 1 — Project Foundation      ✅ Completed
    Module 2 — Backend Foundation      ✅ Completed
    Module 3 — Database Design         ✅ Technical Work Completed
    Module 4 — Authentication          ⏳ Not Started
    Module 5 — Frontend Development    ⏳ Not Started
    Module 6 — Core Features           ⏳ Not Started
    Module 7 — Deployment              ⏳ Not Started
    Module 8 — Final Polish            ⏳ Not Started

    PrepPilot Overall Technical Progress:

    3 completed modules ÷ 8 total modules × 100

    = 37.5%

    ≈ 37.5% Complete 🚀

---

### Next Milestone

🔐 Module 4 — Authentication & Authorization

Planned Topics:

* bcrypt password hashing
* User registration
* User login
* JWT creation
* JWT verification
* Authentication middleware
* Protected routes
* Current-user profile
* Authorization
* Secure authentication error responses

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

# PrepPilot — Developer Journal       (20-07-2026)

## Development Log — Authentication Fundamentals — (Module 4 Chapter 1)

### Goal

Understand the complete authentication system and establish the security foundation required to implement user registration, login, and protected routes in PrepPilot.

---

### Completed

* Learned the difference between Authentication and Authorization.
* Understood the complete Registration and Login workflows.
* Learned secure password storage using Hashing, Salt and bcrypt.
* Understood Sessions, Token-based Authentication and JWT.
* Learned the structure of a JSON Web Token (Header, Payload and Signature).
* Understood how Authentication Middleware protects secured routes.
* Learned the difference between Public Routes and Protected Routes.
* Understood ownership-based access control and common authentication security practices.
* Planned how authentication will integrate with PrepPilot's existing Express and PostgreSQL architecture.

---

### Concepts Learned

#### Authentication

* Authentication
* Authorization
* Registration
* Login
* Password Hashing
* Salt
* bcrypt

#### JWT Authentication

* Sessions
* Tokens
* JSON Web Token (JWT)
* Header
* Payload
* Signature
* Token Expiration

#### Security Concepts

* Authentication Middleware
* Public Routes
* Protected Routes
* Authorization Header
* Ownership Checks
* Secure Authentication Practices

---

### Key Lessons

Authentication verifies a user's identity, while Authorization determines what the authenticated user is allowed to access.

Passwords should never be stored in plain text and must always be protected using secure hashing algorithms such as bcrypt.

JWT provides a secure way to identify authenticated users across multiple requests, while Middleware centralizes authentication logic for protected APIs.

---

### Project Milestone

Successfully established the authentication foundation for PrepPilot.

Prepared the backend architecture for implementing secure Registration, Login, JWT Authentication and Protected Routes.

---

### Result

Module 4 — Chapter 1 completed successfully.

PrepPilot has officially entered the Authentication phase and is now ready to design the authentication-ready database schema before implementing secure user authentication.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Authentication Database Schema — (Module 4 Chapter 2) — (21-07-2026)

### Goal

Design a secure and scalable database schema to support user authentication in PrepPilot.

---

### Completed

* Designed the authentication-ready `users` table.
* Added authentication-related columns.
* Planned secure password storage using `password_hash`.
* Prepared the database for Registration and Login.
* Connected the authentication schema with future project modules.

---

### Concepts Learned

#### Database Design

* Authentication Schema
* User Table
* Primary Key
* Unique Email
* Password Hash
* Account Status
* Timestamps

#### Security

* Password Hashing
* Email Normalization
* JWT Storage
* Authentication Best Practices

---

### Key Lessons

A well-designed database schema is the foundation of secure authentication. Proper user data design makes future features such as JWT authentication, authorization and user ownership much easier to implement.

---

### Project Milestone

Successfully designed the authentication database structure for PrepPilot.

Prepared the backend for implementing Registration and Login APIs.

---

### Result

Module 4 — Chapter 2 completed successfully.

PrepPilot now has a production-ready authentication database schema.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Development Log — Installing & Configuring Authentication Packages — (Module 4 Chapter 3) — (22/07/2026)

### Goal

Prepare PrepPilot's backend for secure authentication by installing and configuring the essential packages required for password hashing, JWT authentication, environment variable management, and input validation.

---

### Completed

* Learned why Express alone is not enough for authentication.
* Installed `bcrypt` for secure password hashing.
* Installed `jsonwebtoken` for JWT-based authentication.
* Installed `dotenv` for environment variable management.
* Installed `validator` for user input validation.
* Configured the project dependencies using npm.
* Created the `.env` file for storing sensitive configuration values.
* Protected environment variables by adding `.env` to `.gitignore`.
* Understood how each package fits into PrepPilot's authentication architecture.

---

### Concepts Learned

#### Authentication Packages

* bcrypt
* jsonwebtoken (JWT)
* dotenv
* validator

#### Backend Configuration

* npm Dependencies
* package.json
* .env File
* .gitignore

#### Authentication Architecture

* Password Hashing
* Token-Based Authentication
* Environment Variables
* Input Validation

---

### Key Lessons

Authentication is built using specialized libraries, with each package handling a single responsibility. This keeps the backend secure, modular, and easy to maintain.

Sensitive information such as JWT secrets should always be stored in environment variables and never hardcoded inside the application's source code.

---

### Project Milestone

Successfully prepared PrepPilot's backend environment for implementing authentication.

Established the required packages and configuration needed to build secure Registration and Login APIs.

---

### Result

Module 4 — Chapter 3 completed successfully.

PrepPilot's backend is now fully prepared to begin implementing secure user authentication using industry-standard tools and best practices.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Journal Entry Complete ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━