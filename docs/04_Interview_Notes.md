# PrepPilot — Interview Notes      

# Module 1 — Git Fundamentals      (Date:-04-07-2026)

## Questions

### 1. What is Git?

### 2. Why do software companies use Git?

### 3. What is a Git Repository?

### 4. What does git init do?

### 5. What does git status do?

### 6. What does git add do?

### 7. What does git commit do?

### 8. What is the Working Directory?

### 9. What is the Staging Area?

### 10. What is a Commit?

### 11. What is a Commit Hash?

### 12. What is HEAD?

### 13. Why doesn't Git track empty folders?

### 14. Difference between git add and git commit?

### 15. Explain the Git workflow.

---

## Git Workflow

Working Directory

↓

git add

↓

Staging Area

↓

git commit

↓

Repository

---

## Revision Status

Module 1:
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 1–3)       (Date:-06-07-2026)

## Questions

### 1. What is Node.js?

### 2. Is Node.js a programming language?

### 3. What is a JavaScript Runtime Environment?

### 4. What is the V8 JavaScript Engine?

### 5. Difference between Browser JavaScript and Node.js?

### 6. Why is Node.js popular for backend development?

### 7. What is npm?

### 8. What are npm packages?

### 9. What is a dependency?

### 10. What is a dependency tree?

### 11. Difference between local and global packages?

### 12. What is package.json?

### 13. Why is package.json called the heart of a Node.js project?

### 14. What information is stored inside package.json?

### 15. What is the purpose of the "main" field?

### 16. What are npm scripts?

### 17. What is CommonJS?

### 18. Difference between CommonJS and ES Modules?

### 19. Why can a project contain multiple package.json files?

### 20. Explain the backend initialization process of a Node.js project.

---

## Important Commands

### Node.js

```powershell
node -v
node
node -e "console.log('Hello')"
```

### npm

```powershell
npm -v
npm
npm config list
npm root -g
npm init
```

### Git

```powershell
git status
git add .
git commit -m "Initialize backend Node.js project"
git push
```

---

## Revision Status

Module 1:
✅ Completed

Revision:
⬜ Pending

---

Module 2 (Chapter 1–3):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 4)       (Date:-07-07-2026)

## Questions

### 1. What is Express.js?

### 2. Why do developers use Express instead of only Node.js?

### 3. What is a web framework?

### 4. What does express() return?

### 5. What is an Express application?

### 6. What is a route?

### 7. What is app.get()?

### 8. What is the purpose of req?

### 9. What is the purpose of res?

### 10. What does res.send() do?

### 11. What does app.listen() do?

### 12. What is a port?

### 13. What happens internally when a browser requests http://localhost:3000?

### 14. What is node_modules?

### 15. What is package-lock.json?

### 16. Why should package-lock.json be committed?

### 17. Why should node_modules never be committed?

### 18. What is a .gitignore file?

### 19. How does Git know which files to ignore?

### 20. Explain the HTTP Request–Response lifecycle.

---

## Important Code

```javascript
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🚀 Welcome to PrepPilot Backend");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
```

---

## Important Commands

### Install Express

```powershell
npm install express
```

### Start the Backend

```powershell
node index.js
```

### Git Commands

```powershell
git rm -r --cached server/node_modules

git ls-files server/node_modules

git check-ignore -v server/node_modules
```

---

## Key Revision Notes

* Node.js is the runtime.
* Express.js is the web framework.
* app.get() defines a route.
* req contains client information.
* res sends data back to the client.
* app.listen() starts the server.
* package.json describes the project.
* package-lock.json locks dependency versions.
* node_modules stores installed packages and should not be committed.
* .gitignore prevents unnecessary files from being tracked by Git.

---

Module 2 (Chapter 4):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 5)     (Date:-07-07-2026)

## Questions

### 1. What is an HTTP Server?

### 2. What is the difference between a Client and a Server?

### 3. What is localhost?

### 4. What is a Port?

### 5. What is a Socket? (High Level)

### 6. What is Node.js HTTP Module?

### 7. What does `http.createServer()` do?

### 8. What does `server.listen()` do?

### 9. What is the purpose of `req`?

### 10. What is the purpose of `res`?

### 11. What is the difference between `res.write()` and `res.end()`?

### 12. Can Node.js create an HTTP Server without Express?

### 13. Why do developers still use Express if Node.js already provides an HTTP module?

### 14. Does Express replace Node.js?

### 15. Explain the Browser → Server → Browser request lifecycle.

### 16. How are `req` and `res` objects created?

### 17. Why does every request receive a separate `req` and `res` object?

---

## Important Code

### Pure Node.js HTTP Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {

    res.write("Hello from Pure Node.js!");

    res.end();

});

server.listen(4000, () => {

    console.log("HTTP Server running on http://localhost:4000");

});
```

---

### Express Server

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send("🚀 Welcome to PrepPilot Backend");

});

app.listen(3000);
```

---

## Important Commands

### Run Express Server

```powershell
node index.js
```

### Run Pure Node.js Server

```powershell
node http-server-demo.js
```

---

## Key Revision Notes

* Node.js includes a built-in HTTP module.
* Express is built on top of Node's HTTP module.
* HTTP Server listens for incoming requests and sends responses.
* `req` represents the incoming HTTP request.
* `res` represents the outgoing HTTP response.
* `res.write()` writes response data.
* `res.end()` completes the response.
* Express simplifies the same process using `res.send()`.
* Every incoming request receives its own `req` and `res` objects.
* Browser → Node.js → Express → Route → Express → Node.js → Browser is the complete request lifecycle.

---

Module 2 (Chapter 5):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 6)      (Date:-07-07-2026)

## Questions

### 1. What is an HTTP Request?

### 2. What is an HTTP Response?

### 3. What are the four parts of an HTTP Request?

### 4. What are the three parts of an HTTP Response?

### 5. What is the purpose of an HTTP Method?

### 6. Explain GET, POST, PUT, PATCH, and DELETE.

### 7. What is CRUD?

### 8. What is JSON?

### 9. Why do APIs commonly use JSON?

### 10. What is the difference between `res.send()` and `res.json()`?

### 11. What does `res.status()` do?

### 12. What is method chaining in Express?

### 13. What are HTTP Headers?

### 14. What is a Request Body?

### 15. Explain HTTP Status Code families.

### 16. Difference between 200 and 201?

### 17. Difference between 400 and 404?

### 18. Difference between 401 and 403?

### 19. Difference between 404 and 500?

### 20. Explain the complete Browser → Server → Browser lifecycle.

---

## Important Code

### Plain Text Response

```javascript
app.get("/", (req, res) => {

    res.send("Hello Backend");

});
```

---

### HTML Response

```javascript
app.get("/", (req, res) => {

    res.send("<h1>Hello Backend</h1>");

});
```

---

### JSON Response

```javascript
app.get("/", (req, res) => {

    res.status(200).json({

        project: "PrepPilot",
        module: 2,
        chapter: 6

    });

});
```

---

## Important Revision Notes

* HTTP Request contains Method, URL, Headers, and optional Body.
* HTTP Response contains Status Code, Headers, and Body.
* GET reads data.
* POST creates data.
* PUT replaces data.
* PATCH partially updates data.
* DELETE removes data.
* CRUD maps directly to HTTP methods.
* APIs primarily communicate using JSON.
* `res.send()` can send multiple response types.
* `res.json()` always sends JSON.
* `res.status()` sets the HTTP status code.
* Every request follows the Browser → Node.js → Express → Route → Express → Node.js → Browser lifecycle.

---

Module 2 (Chapter 6):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 7)       (Date:-08-07-2026)

## Questions

### 1. What is Routing?

### 2. What is a Route?

### 3. What are the three parts of a Route?

### 4. How does Express match incoming requests?

### 5. Why does Route Order matter?

### 6. What happens if no matching route exists?

### 7. Why do professional applications use `/api` prefixes?

### 8. What are Route Parameters?

### 9. Why do we use `:` in Express routes?

### 10. Where are Route Parameters stored?

### 11. How do you access Route Parameters?

### 12. Can a route have multiple Route Parameters?

### 13. Difference between Route Parameters and Query Parameters?

### 14. What is Express Router?

### 15. Why shouldn't all routes remain inside `index.js`?

### 16. What are the advantages of feature-based routing?

### 17. What is `app.use()`?

### 18. Why is `app.use()` important?

### 19. What can `app.use()` register?

### 20. Explain the request flow involving `app.use()` and routing.

---

## Important Code

### Basic Route

```javascript
app.get("/profile", (req, res) => {

    res.send("User Profile");

});
```

---

### Route Parameter

```javascript
app.get("/students/:id", (req, res) => {

    res.send(`Student ID: ${req.params.id}`);

});
```

---

### Multiple Route Parameters

```javascript
app.get("/users/:userId/posts/:postId", (req, res) => {

    res.send(req.params);

});
```

---

### Using app.use()

```javascript
app.use("/api/auth", authRoutes);
```

---

## Important Revision Notes

* A Route consists of an HTTP Method, a Path, and a Route Handler.
* Express matches requests using both the HTTP Method and the Route Path.
* Route order affects request matching because Express checks routes from top to bottom.
* Route Parameters create dynamic URLs.
* Route Parameters are stored inside `req.params`.
* Multiple Route Parameters can exist within the same route.
* Route Parameters identify resources, while Query Parameters provide additional options.
* Express Router allows routes to be separated into feature-based files.
* Professional applications organize routes by feature instead of keeping everything inside `index.js`.
* `app.use()` is used to register routers and middleware.
* Requests pass through `app.use()` before reaching matching route handlers.

---

Module 2 (Chapter 7):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 8)       (Date:-08-07-2026)

## Questions

### 1. What is an API?

### 2. What does REST stand for?

### 3. What is a Resource?

### 4. What is CRUD?

### 5. Why do we use nouns in REST URLs?

### 6. Difference between GET and POST?

### 7. Difference between PUT and POST?

### 8. Why is REST popular?

### 9. What are HTTP Status Codes?

### 10. Difference between 200 and 201?

### 11. Difference between 400 and 404?

### 12. Difference between 401 and 403?

### 13. Difference between 404 and 500?

### 14. Why are status codes important?

### 15. What is `req.body`?

### 16. Why is `req.body` undefined?

### 17. What does `express.json()` do?

### 18. Why do we use Postman?

### 19. Difference between `req.params` and `req.body`?

### 20. Why are browsers insufficient for testing APIs?

---

## Important Code

### Get All Books

```javascript
app.get("/books", (req, res) => {

    res.status(200).json({
        success: true,
        data: books
    });

});
```

---

### Get One Book

```javascript
app.get("/books/:id", (req, res) => {

    const bookId = Number(req.params.id);

    const book = books.find((b) => b.id === bookId);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    res.status(200).json({
        success: true,
        data: book
    });

});
```

---

### Create Book

```javascript
app.post("/books", (req, res) => {

    const newBook = req.body;

    res.status(201).json({
        success: true,
        data: newBook
    });

});
```

---

### JSON Middleware

```javascript
app.use(express.json());
```

---

## Important Revision Notes

* REST is a set of rules used to design APIs.
* Resources should be represented using nouns.
* CRUD operations map directly to HTTP methods.
* GET reads data.
* POST creates data.
* PUT updates data.
* DELETE removes data.
* Status codes communicate the result of a request.
* `req.body` contains data sent by the client.
* `express.json()` converts JSON into JavaScript objects and populates `req.body`.
* Browsers are limited for testing APIs because they mainly send GET requests.
* APIs should return structured JSON responses with appropriate status codes.

---

Module 2 (Chapter 8):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 9)       (Date:-08-07-2026)

## Questions

### 1. What is Middleware?

### 2. Why do we need Middleware?

### 3. What are the three middleware parameters?

### 4. What does `next()` do?

### 5. What happens if `next()` is not called?

### 6. Can middleware modify `req`?

### 7. Can middleware stop a request?

### 8. Does middleware order matter?

### 9. What is `express.json()`?

### 10. Difference between `app.use()` and `app.get()`?

### 11. Difference between Global and Route Middleware?

### 12. Why is Logging Middleware useful?

### 13. Why is Authentication Middleware useful?

### 14. Why is Middleware important in backend development?

### 15. What is a Request Pipeline?

---

## Important Code

### Global Middleware

```javascript
app.use((req, res, next) => {

    console.log("Middleware executed");

    next();

});
```

---

### Logging Middleware

```javascript
function logger(req, res, next) {

    console.log(`${req.method} ${req.url}`);

    next();

}

app.use(logger);
```

---

### Authentication Middleware

```javascript
function auth(req, res, next) {

    const isLoggedIn = true;

    if (!isLoggedIn) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    next();

}
```

---

### Route Middleware

```javascript
app.get("/profile", auth, (req, res) => {

    res.send("Profile");

});
```

---

### Modifying Request Object

```javascript
app.use((req, res, next) => {

    req.user = "SaiKiran";

    next();

});
```

---

## Important Revision Notes

* Middleware is a function that runs between the request and the response.
* Middleware receives three parameters: `req`, `res`, and `next`.
* `next()` tells Express to continue processing the request.
* Forgetting `next()` can cause requests to hang indefinitely.
* Middleware can modify the request object.
* Middleware can stop requests by sending a response.
* Middleware order matters because Express executes middleware from top to bottom.
* `app.use()` registers middleware globally.
* Route Middleware runs only for specific routes.
* `express.json()` is built-in middleware that parses incoming JSON requests.
* Professional applications use middleware for logging, authentication, validation, security, and error handling.

---

Module 2 (Chapter 9):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 10)       (Date:-08-07-2026)

## Questions

### 1. What are Environment Variables?

### 2. Why do we need Environment Variables?

### 3. What is `.env`?

### 4. What does `dotenv` do?

### 5. What is `process.env`?

### 6. Why should `.env` never be committed?

### 7. What is `NODE_ENV`?

### 8. Difference between hardcoded values and Environment Variables?

### 9. Why is configuration management important?

### 10. What kind of values belong inside `.env`?

### 11. What is the purpose of fallback values?

### 12. Why should secrets remain outside source code?

### 13. Why do production and development environments require different configurations?

### 14. What is secure secret management?

### 15. Why are Environment Variables important for deployment?

---

## Important Code

### Loading Environment Variables

```javascript
require("dotenv").config();
```

---

### Accessing Environment Variables

```javascript
console.log(process.env.APP_NAME);

console.log(process.env.NODE_ENV);
```

---

### Configuring the Application Port

```javascript
const PORT = process.env.PORT || 3000;
```

---

### Example `.env` File

```env
PORT=3000

APP_NAME=PrepPilot

JWT_SECRET=mySecretKey

NODE_ENV=development
```

---

### Ignoring Sensitive Files

```gitignore
server/node_modules/

server/.env
```

---

## Important Revision Notes

* Environment Variables store configuration values outside source code.
* `.env` files provide a convenient way to manage application configuration.
* `dotenv` loads `.env` variables into `process.env`.
* `process.env` contains all Environment Variables available to the Node.js application.
* Hardcoded secrets should never exist inside source code.
* `.env` files should never be committed to Git repositories.
* `NODE_ENV` helps applications behave differently in development and production environments.
* Fallback values improve application reliability.
* Configuration management is essential for deployment and production systems.

---

Module 2 (Chapter 10):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 11)       (Date:-09-07-2026)

## Questions

### 1. What is Separation of Concerns?

### 2. Why should large applications avoid putting everything inside `index.js`?

### 3. What is the purpose of the `src` folder?

### 4. What is the purpose of the `routes` folder?

### 5. What is the purpose of the `controllers` folder?

### 6. What is the difference between routes and controllers?

### 7. What is the purpose of the `middleware` folder?

### 8. What is the purpose of the `config` folder?

### 9. What is the purpose of the `services` folder?

### 10. What is the purpose of the `utils` folder?

### 11. What is the request flow in a professional Express application?

### 12. Why is backend folder structure important?

### 13. What are the advantages of a layered architecture?

### 14. Why is `app.use()` important for routing architecture?

### 15. Why should `index.js` remain lightweight?

---

## Important Code

### Importing Routes

```javascript
const indexRoutes = require("./src/routes/index.routes");
```

---

### Registering Routes

```javascript
app.use("/", indexRoutes);
```

---

### Creating a Router

```javascript
const express = require("express");

const router = express.Router();
```

---

### Route File

```javascript
router.get("/", getHome);

router.get("/health", getHealth);
```

---

### Controller File

```javascript
function getHome(req, res) {
    res.send("🏠 Welcome to PrepPilot Backend");
}

function getHealth(req, res) {
    res.json({
        status: "Server is running",
        uptime: "Healthy"
    });
}
```

---

## Important Revision Notes

* Large applications should avoid placing all logic inside one file.
* Separation of Concerns improves maintainability and scalability.
* Routes should map requests to controllers.
* Controllers should contain request-handling logic.
* `app.use()` connects route modules to the Express application.
* Professional applications organize code into dedicated folders.
* `index.js` should primarily handle application startup and configuration.
* A clean architecture makes debugging and team collaboration easier.

---

Module 2 (Chapter 11):
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 2 — Backend Foundation (Chapter 12)       (Date:-10-07-2026)

## Questions

### 1. What is CRUD?

### 2. Why do we separate routes and controllers?

### 3. Why do we use Express Router?

### 4. What is in-memory storage?

### 5. Why does data disappear after restarting the server?

### 6. Why do we need databases?

### 7. What is Postman?

### 8. Why do backend developers use Postman?

### 9. What is `req.body`?

### 10. What is `req.params`?

### 11. Why do APIs return status codes?

### 12. Difference between `200`, `201`, and `404`?

### 13. Explain the request flow of the Notes API.

### 14. Why is professional folder structure important?

### 15. What are the benefits of feature-based architecture?

---

## Important Code

### Registering Routes

```javascript
app.use("/notes", notesRoutes);
```

---

### GET All Notes

```javascript
router.get("/", getAllNotes);
```

---

### GET Note By ID

```javascript
router.get("/:id", getNoteById);
```

---

### Create Note

```javascript
router.post("/", createNote);
```

---

### Delete Note

```javascript
router.delete("/:id", deleteNote);
```

---

## Important Revision Notes

* CRUD stands for Create, Read, Update, Delete.
* Postman is used to test APIs without a frontend.
* `req.body` stores incoming JSON data.
* `req.params` stores route parameters.
* Routes define endpoints.
* Controllers contain request-handling logic.
* In-memory data disappears after restarting the server.
* Databases provide permanent storage.
* Feature-based architecture improves scalability and maintainability.

---

Module 2 (Chapter 12):
✅ Completed

🎉 Module 2 — Backend Foundation:
✅ Completed

Revision:
⬜ Pending

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

# Module 3 — Database Design & SQL (Chapter 1)       (Date:-10-07-2026)

## Questions

### 1. Why are JavaScript arrays unsuitable for production data storage?

### 2. What is in-memory storage?

### 3. What happens to in-memory data when the server restarts?

### 4. What is persistence?

### 5. Why do real applications need databases?

### 6. Why isn't storing data in JSON files enough for production systems?

### 7. What is a database?

### 8. What is a Database Management System (DBMS)?

### 9. What is the difference between a Database and a DBMS?

### 10. What is PostgreSQL?

### 11. What problems do databases solve?

### 12. Why are databases better at handling large amounts of data?

### 13. Why do databases matter when multiple users access an application simultaneously?

### 14. What is data integrity?

### 15. What is data consistency?

### 16. What is scalability?

### 17. How will Express communicate with PostgreSQL?

### 18. What is SQL?

### 19. How are REST APIs connected to SQL operations?

### 20. Why does PrepPilot need a database?

---

## Important Concepts

```text
In-Memory Storage
Persistence
Database
Database Management System (DBMS)
PostgreSQL
Data Integrity
Data Consistency
Scalability
Express ↔ PostgreSQL Communication
SQL
```

---

## REST → SQL Mapping

```text
POST   → INSERT
GET    → SELECT
PATCH  → UPDATE
DELETE → DELETE
```

---

## Revision Notes

```text
Array = Temporary storage in RAM

Persistence = Data survives server restarts

Database = Organized, permanent data storage

DBMS = Software that manages databases

PostgreSQL = Relational Database Management System

Express = Handles HTTP requests and responses

PostgreSQL = Stores and manages application data

SQL = Language used to communicate with relational databases
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 2)       (Date:-10-07-2026)

## Questions

### 1. Why is every software application fundamentally data-driven?

### 2. What is Structured Data?

### 3. What is Unstructured Data?

### 4. Why are files usually stored outside the database?

### 5. What is the hierarchy of data storage inside a database?

### 6. What is a schema?

### 7. What is the difference between an Application Server and a Database Server?

### 8. What is the difference between a Local Database and a Cloud Database?

### 9. What is an Entity?

### 10. What is an Attribute?

### 11. What is a Record?

### 12. What is a Relationship?

### 13. How do backend engineers think before creating tables?

### 14. How does data flow from React to PostgreSQL?

### 15. Why is database design important?

---

## Database
```text
→ Schema
→ Table
→ Row
→ Column
```

---

## Important Concepts

```text
Structured Data
Unstructured Data
Database Hierarchy
Database Schema
Entity
Attribute
Record
Relationship
Application Server
Database Server
Local Database
Cloud Database
```

---

## Revision Notes

```text
Everything in software becomes data.

Structured Data = Fixed format data.

Unstructured Data = Images, PDFs, Videos.

Database → Schema → Table → Row → Column

Application Server = Business logic.

Database Server = Data storage.

Entity = Thing we store.

Attribute = Information about an entity.

Relationship = Connection between entities.
Database design starts with data and relationships.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 3)       (Date:-11-07-2026)

## Questions

### 1. Why is PostgreSQL called a Relational Database?

### 2. What is a relationship?

### 3. Why are relationships important?

### 4. What are the types of relationships?

### 5. What is One-to-One?

### 6. What is One-to-Many?

### 7. What is Many-to-Many?

### 8. Why is PostgreSQL suitable for PrepPilot?

### 9. What is the difference between PostgreSQL and MongoDB?

### 10. What is a Relation?

### 11. What is a Tuple?

### 12. What is an Attribute?

---

## Relationship Types

```text
One-to-One
One-to-Many
Many-to-Many
```

---

## Important Concepts

```text
Relational Database
Relationship
Relation
Tuple
Attribute
Data Consistency
Data Integrity
```

---

## Revision Notes

```text
Relational Database = Database built around relationships.

Relationship = Connection between data.

Relation = Table.
Tuple = Row.
Attribute = Column.

1:1 = One record ↔ One record.
1:N = One record ↔ Many records.
M:N = Many records ↔ Many records.

PostgreSQL = Best for highly related data.
PrepPilot naturally fits a relational model.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 4)       (Date:-11-07-2026)

## Questions

### 1. What is a data type?

### 2. Why are data types important?

### 3. What is VARCHAR?

### 4. What is the difference between VARCHAR and TEXT?

### 5. What is INTEGER?

### 6. Why shouldn't phone numbers use INTEGER?

### 7. What is BOOLEAN?

### 8. What is TIMESTAMP?

### 9. What is UUID?

### 10. Why do modern applications use UUID?

### 11. How do data types affect database design?

### 12. Which data types would you choose for a Users table?

---

## Important Concepts

```text
VARCHAR
TEXT
INTEGER
BOOLEAN
TIMESTAMP
UUID
Data Integrity
Storage Efficiency
```

---

## Revision Notes

```text
VARCHAR = Limited text.

TEXT = Large text.

INTEGER = Whole numbers.

BOOLEAN = TRUE or FALSE.

TIMESTAMP = Date and time.

UUID = Unique identifier.

Correct data types improve integrity and performance.

Database design = Information + Appropriate data type.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 5)       (Date:-11-07-2026)

## Questions

### 1. What is a constraint?

### 2. What is a Primary Key?

### 3. What are the rules of a Primary Key?

### 4. What is a Foreign Key?

### 5. Why are Foreign Keys important?

### 6. What is UNIQUE?

### 7. What is NOT NULL?

### 8. What is CHECK?

### 9. What is DEFAULT?

### 10. Why are constraints important?

### 11. Why do databases enforce rules?

### 12. What constraints would you use for a Users table?

---

## Important Concepts

```text
Primary Key (PK)
Foreign Key (FK)
UNIQUE
NOT NULL
CHECK
DEFAULT
Data Integrity
Relationship Integrity
```

---

## Revision Notes

```text
Primary Key = Unique identity of a row.

Foreign Key = Validates relationships.

UNIQUE = No duplicate values.

NOT NULL = Value is required.

CHECK = Restricts allowed values.

DEFAULT = Automatic value assignment.

Constraints protect data integrity and consistency.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 6)       (Date:-12-07-2026)

## Questions

### 1. What is a relationship?

### 2. Why are relationships important?

### 3. What is One-to-One?

### 4. What is One-to-Many?

### 5. What is Many-to-Many?

### 6. What is a junction table?

### 7. Where does the Foreign Key go in a One-to-Many relationship?

### 8. How do you identify relationship types?

### 9. Why are junction tables necessary?

### 10. Design relationships for PrepPilot.

---

## Relationship Types

```text
One-to-One
One-to-Many
Many-to-Many
```

---

## Important Concepts

```text
Relationship
Foreign Key
Junction Table
One-to-One
One-to-Many
Many-to-Many
Relationship Modeling
```

---

## Revision Notes

```text
1:1 = One record ↔ One record.

1:N = One record ↔ Many records.

M:N = Many records ↔ Many records.

Foreign Key lives on the many side.

Junction Table solves Many-to-Many relationships.

Relationships reduce duplication and improve consistency.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 7)       (Date:-12-07-2026)

## Questions

### 1. What is SQL?

### 2. What does SQL stand for?

### 3. Why do databases need SQL?

### 4. Why is SQL called a declarative language?

### 5. What is DDL?

### 6. What is DML?

### 7. What is DQL?

### 8. What is DCL?

### 9. What is TCL?

### 10. How do REST APIs map to SQL operations?

### 11. How does Express communicate with PostgreSQL?

---

## SQL Categories

```text
DDL
DML
DQL
DCL
TCL
```

---

## Revision Notes

```text
SQL = Structured Query Language.

SQL = Language used to communicate with relational databases.

DQL = SELECT.

DML = INSERT, UPDATE, DELETE.

DDL = CREATE, ALTER, DROP.

DCL = GRANT, REVOKE.

TCL = COMMIT, ROLLBACK.

REST APIs eventually become SQL operations.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 8)       (Date:-13-07-2026)

## Questions

### 1. What is CRUD?

### 2. What is SELECT?

### 3. What is INSERT?

### 4. What is UPDATE?

### 5. What is DELETE?

### 6. Why should UPDATE usually have a WHERE clause?

### 7. Why should DELETE usually have a WHERE clause?

### 8. How do REST APIs map to SQL?

### 9. How will the Notes API change when moving to PostgreSQL?

### 10. Why are SQL CRUD operations important?

---

## CRUD Mapping

```text
Create → INSERT
Read   → SELECT
Update → UPDATE
Delete → DELETE
```

---

## Revision Notes

```text
SELECT = Read data.

INSERT = Create data.

UPDATE = Modify data.

DELETE = Remove data.

REST APIs naturally map to SQL CRUD operations.

UPDATE and DELETE usually require WHERE clauses.

Most backend applications are built around CRUD operations.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 9)       (Date:-13-07-2026)

## Questions

### 1. What is WHERE?

### 2. What is ORDER BY?

### 3. Difference between ASC and DESC?

### 4. What is LIMIT?

### 5. What is OFFSET?

### 6. How does pagination work?

### 7. What is LIKE?

### 8. What are SQL wildcards?

### 9. What is IN?

### 10. What is BETWEEN?

### 11. How would you implement search in SQL?

### 12. How would you implement pagination?

---

## Important Concepts

```text
WHERE
ORDER BY
ASC
DESC
LIMIT
OFFSET
LIKE
IN
BETWEEN
Pagination
```

---

## Revision Notes

```text
WHERE = Filters rows.

ORDER BY = Sorts rows.

ASC = Ascending order.

DESC = Descending order.

LIMIT = Restricts number of rows.

OFFSET = Skips rows for pagination.

LIKE = Pattern matching.

IN = Matches multiple values.

BETWEEN = Filters a range of values.

Pagination = LIMIT + OFFSET.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 10)       (Date:-14-07-2026)

## Questions

### 1. What is an aggregate function?

### 2. What does COUNT do?

### 3. What does SUM do?

### 4. What does AVG do?

### 5. What does MIN do?

### 6. What does MAX do?

### 7. What is GROUP BY?

### 8. Why do we use GROUP BY?

### 9. What is HAVING?

### 10. Difference between WHERE and HAVING?

### 11. How would you build analytics for PrepPilot?

---

## Important Concepts

```text
COUNT
SUM
AVG
MIN
MAX
GROUP BY
HAVING
Aggregation
Analytics
```

---

## Revision Notes

```text
COUNT = Counts rows.

SUM = Adds values.

AVG = Calculates average.

MIN = Smallest value.

MAX = Largest value.

GROUP BY = Groups rows.

HAVING = Filters groups.

WHERE = Filters rows.

Aggregation = Converts data into insights.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 11)       (Date:-14-07-2026)

## Questions

### 1. What is a JOIN?

### 2. Why do we need JOINs?

### 3. What is INNER JOIN?

### 4. What is LEFT JOIN?

### 5. What is RIGHT JOIN?

### 6. What is FULL JOIN?

### 7. What is the difference between INNER JOIN and LEFT JOIN?

### 8. Why do joins produce NULL values?

### 9. How would you show users who have never taken an interview?

### 10. How would you fetch a user's interviews and questions?

---

## Important Concepts

```text
JOIN
INNER JOIN
LEFT JOIN
RIGHT JOIN
FULL JOIN
Foreign Key
NULL
Multi-Table Query
```

---

## Revision Notes

```text
JOIN = Combines data from multiple tables.

INNER JOIN = Matching rows only.

LEFT JOIN = All left rows + matching right rows.

RIGHT JOIN = All right rows + matching left rows.

FULL JOIN = All rows from both tables.

NULL = No matching record exists.

Foreign Keys make joins possible.

Most advanced queries use joins.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Module 3 — Database Design & SQL (Chapter 12)       (Date:-15-07-2026)

## Questions

### 1. What is normalization?

### 2. Why do we normalize databases?

### 3. What is data redundancy?

### 4. What are data anomalies?

### 5. What is an Insert Anomaly?

### 6. What is an Update Anomaly?

### 7. What is a Delete Anomaly?

### 8. What is First Normal Form (1NF)?

### 9. What is Second Normal Form (2NF)?

### 10. What is Third Normal Form (3NF)?

### 11. What is partial dependency?

### 12. What is transitive dependency?

### 13. What is denormalization?

### 14. Why do companies sometimes denormalize?

### 15. Is PrepPilot's database normalized?

---

## Important Concepts

```text
Normalization
Denormalization
Data Redundancy
Data Anomalies
1NF
2NF
3NF
Partial Dependency
Transitive Dependency
```

---

## Revision Notes

```text
Normalization = Reducing duplication and improving consistency.

Data Redundancy = Repeated information.

Data Anomalies = Insert, Update, Delete problems.

1NF = Atomic values only.

2NF = No partial dependency.

3NF = No transitive dependency.

Denormalization = Intentional duplication for performance.

Most production databases aim for 3NF.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 13)       (Date:-15-07-2026)

## Questions

### 1. What is PostgreSQL?

### 2. What is psql?

### 3. What is the difference between PostgreSQL Server and psql?

### 4. Why do we develop databases locally?

### 5. What does `psql -U postgres` do?

### 6. How do you create a database?

### 7. How do you connect to a database?

### 8. How do you list databases?

### 9. How do you list tables?

### 10. How do you exit psql?

### 11. What is the default PostgreSQL port?

---

## Important Concepts

```text
PostgreSQL
psql
Database Server
Database Client
Local Database
Database Connection
CREATE DATABASE
CREATE TABLE
INSERT
SELECT
```

---

## Revision Notes

```text
PostgreSQL = Relational Database Management System.

psql = Command-line client for PostgreSQL.

Default Port = 5432.

\l = List databases.

\c = Connect database.

\dt = List tables.

\d = Describe table.

\q = Exit psql.

Development usually starts with a local database.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 14)       (Date:-16-07-2026)

## Questions

### 1. What is a data type?

### 2. Why are data types important?

### 3. What is INTEGER?

### 4. What is SERIAL?

### 5. Difference between VARCHAR and TEXT?

### 6. What is BOOLEAN?

### 7. What is DATE?

### 8. Difference between TIMESTAMP and TIMESTAMPTZ?

### 9. What is DECIMAL?

### 10. What is UUID?

### 11. What is JSONB?

### 12. How would you design the users table for PrepPilot?

---

## Important Concepts

```text
INTEGER
SERIAL
VARCHAR
TEXT
BOOLEAN
DATE
TIMESTAMPTZ
DECIMAL
UUID
JSONB
DEFAULT CURRENT_TIMESTAMP
```

---

## Revision Notes

```text
INTEGER = Whole numbers.

SERIAL = Auto-incrementing numbers.

VARCHAR = Short text.

TEXT = Long text.

BOOLEAN = TRUE or FALSE.

DATE = Stores only dates.

TIMESTAMPTZ = Date and time with timezone.

DECIMAL = Numbers with decimal places.

UUID = Globally unique identifier.

JSONB = Stores JSON data efficiently.

Choose data types based on the kind of data being stored.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Module 3 — Database Design & SQL (Chapter 15)       (Date:-16-07-2026)

## Questions

### 1. What is a constraint?

### 2. Why are constraints important?

### 3. What is data integrity?

### 4. What is PRIMARY KEY?

### 5. What is NOT NULL?

### 6. What is UNIQUE?

### 7. What is DEFAULT?

### 8. What is CHECK?

### 9. What is FOREIGN KEY?

### 10. Why are foreign keys important?

### 11. How do constraints improve database reliability?

### 12. How would you design the users table for PrepPilot?

---

## Important Concepts

```text
PRIMARY KEY
NOT NULL
UNIQUE
DEFAULT
CHECK
FOREIGN KEY
Data Integrity
Relational Integrity
Validation Rules
```

---

## Revision Notes

```text
PRIMARY KEY = Unique identifier.

NOT NULL = Value is required.

UNIQUE = No duplicate values.

DEFAULT = Automatic value.

CHECK = Custom validation rule.

FOREIGN KEY = Creates relationships between tables.

Data Integrity = Data stays correct and consistent.

Constraints protect databases from invalid data.
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Continue Updating After Every Lesson ✅

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━