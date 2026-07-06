# PrepPilot — Developer Journal       (Date:-04-07-2026)

## Day 1 — Project Foundation

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

## Day 2 — Backend Foundation (Chapter 1–3)

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

## Day 3 — Express.js Foundation (Chapter 4)       (Date:-07-07-2026) 

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

### Result

Module 2 — Chapter 4 completed successfully.

PrepPilot backend officially became a running web server capable of receiving HTTP requests and returning HTTP responses.

### Project Milestone

🚀 PrepPilot served its first HTTP response successfully.

This marks the beginning of the project's backend runtime. The application is now capable of accepting incoming HTTP requests and responding through Express.js.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Journal Entry Complete ✅
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━