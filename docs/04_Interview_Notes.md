# PrepPilot — Interview Notes       (Date:-04-07-2026)

# Module 1 — Git Fundamentals

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