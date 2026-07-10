# PrepPilot — API Documentation

**Created:** 04 July 2026  
**Last Updated:** 10 July 2026  
**Current Version:** 0.1.0 — Backend Foundation Completed

---

## API Development Timeline

| Date | Milestone |
|------|------------|
| 04 July 2026 | API documentation created. No APIs implemented yet. |
| 10 July 2026 | Basic backend APIs implemented during Module 2. |

---

## Current Status

Basic backend APIs have been implemented as part of **Module 2 — Backend Foundation**.

Current APIs include:

* Home APIs
* Health APIs
* Authentication Placeholder APIs
* Dynamic Route APIs
* Notes Mini Backend Project APIs

Database integration and production APIs will be implemented in future modules.

---

## API Documentation Standard

Every API created during this project includes:

* Endpoint
* HTTP Method
* Purpose
* Authentication Required
* Request Parameters
* Request Body
* Success Response
* Error Response
* HTTP Status Codes
* Example Request
* Example Response
* Notes

---

# Implemented APIs

# Home API

## Get Home Page

**Endpoint**

```text
/
```

**HTTP Method**

```text
GET
```

**Purpose**

Returns the home message of the PrepPilot backend.

**Authentication Required**

```text
No
```

### Success Response

```text
🏠 Welcome to PrepPilot Backend
```

---

# Health API

## Health Check

**Endpoint**

```text
/health
```

**HTTP Method**

```text
GET
```

**Purpose**

Checks whether the backend server is running.

**Authentication Required**

```text
No
```

### Success Response

```json
{
  "status": "Server is running",
  "uptime": "Healthy"
}
```

---

# Authentication APIs

## Login API

**Endpoint**

```text
/login
```

**HTTP Method**

```text
POST
```

**Purpose**

Placeholder endpoint for future user login functionality.

**Authentication Required**

```text
No
```

### Success Response

```text
🔐 Login API
```

---

## Register API

**Endpoint**

```text
/register
```

**HTTP Method**

```text
POST
```

**Purpose**

Placeholder endpoint for future user registration functionality.

**Authentication Required**

```text
No
```

### Success Response

```text
📝 Register API
```

---

# User APIs

## Profile API

**Endpoint**

```text
/profile
```

**HTTP Method**

```text
GET
```

**Purpose**

Returns the user profile information.

**Authentication Required**

```text
No
```

### Success Response

```text
👤 User Profile
```

---

## About API

**Endpoint**

```text
/about
```

**HTTP Method**

```text
GET
```

**Purpose**

Returns information about PrepPilot.

**Authentication Required**

```text
No
```

### Success Response

```text
📘 PrepPilot is an AI Interview Preparation Platform.
```

---

# Dynamic Route APIs

## Student API

**Endpoint**

```text
/students/:id
```

**HTTP Method**

```text
GET
```

**Purpose**

Returns a student ID using route parameters.

**Authentication Required**

```text
No
```

### Example Request

```text
/students/101
```

### Success Response

```text
Student ID: 101
```

---

## Course API

**Endpoint**

```text
/courses/:courseId
```

**HTTP Method**

```text
GET
```

**Purpose**

Returns a course ID using route parameters.

**Authentication Required**

```text
No
```

### Example Request

```text
/courses/react101
```

### Success Response

```text
Course ID: react101
```

---

# Notes API

## Get All Notes

**Endpoint**

```text
/notes
```

**HTTP Method**

```text
GET
```

**Purpose**

Returns all notes.

**Authentication Required**

```text
No
```

### Success Response

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Learn Express",
      "description": "Understand routing and middleware"
    }
  ]
}
```

---

## Get Note By ID

**Endpoint**

```text
/notes/:id
```

**HTTP Method**

```text
GET
```

**Purpose**

Returns a single note.

**Authentication Required**

```text
No
```

### Example Request

```text
/notes/1
```

### Success Response

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express",
    "description": "Understand routing and middleware"
  }
}
```

### Error Response

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

## Create Note

**Endpoint**

```text
/notes
```

**HTTP Method**

```text
POST
```

**Purpose**

Creates a new note.

**Authentication Required**

```text
No
```

### Request Body

```json
{
  "title": "Learn PostgreSQL",
  "description": "Start database module"
}
```

### Success Response

```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "Learn PostgreSQL",
    "description": "Start database module"
  }
}
```

---

## Delete Note

**Endpoint**

```text
/notes/:id
```

**HTTP Method**

```text
DELETE
```

**Purpose**

Deletes a note.

**Authentication Required**

```text
No
```

### Example Request

```text
/notes/1
```

### Success Response

```json
{
  "success": true,
  "message": "Note deleted successfully"
}
```

### Error Response

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

# HTTP Status Codes Used

| Status Code | Meaning |
|-------------|----------|
| 200 | OK |
| 201 | Created |
| 404 | Not Found |

---

# Planned APIs

## Authentication

* POST /register
* POST /login
* POST /logout

## User

* GET /profile
* PUT /profile

## Resume

* POST /resume/upload
* GET /resume

## Interview

* GET /questions
* POST /submit

## Dashboard

* GET /dashboard
* GET /progress

---

## Current API Status

✅ Basic APIs Implemented

✅ Notes Mini Backend Project Implemented

🚧 Database Integration Pending

🚧 Authentication System Pending

🚧 Production APIs Pending

---

## Version Information

**Created:** 04 July 2026

**Last Updated:** 10 July 2026

**Current Version:** 0.1.0 — Backend Foundation Completed