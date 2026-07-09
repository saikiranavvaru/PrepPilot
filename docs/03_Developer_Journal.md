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