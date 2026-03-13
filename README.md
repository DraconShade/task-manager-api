# Task Manager API

REST API for task management built with **Node.js, Express, MySQL (MariaDB) and Docker**.
This project is part of a backend portfolio demonstrating clean architecture, containerized development environments, and authentication flows.

---

# Tech Stack

* **Node.js**
* **Express**
* **MySQL / MariaDB**
* **Docker & Docker Compose**
* **bcryptjs** for password hashing
* **dotenv** for environment variables
* **nodemon** for development

---

# Project Architecture

The project follows a layered architecture separating responsibilities:

```
routes → controllers → services → models → database
```

This keeps the code modular, testable and scalable.

```
src
│
├── config
│   └── db.js
│
├── controllers
│   └── auth.controller.js
│
├── models
│   └── user.model.js
│
├── routes
│   ├── auth.routes.js
│   ├── health.routes.js
│   └── main.routes.js
│
├── services
│   └── auth.service.js
│
├── app.js
└── server.js
```

---

# Features Implemented

### Health Check Endpoint

Verifies that the API and database are running.

```
GET /health
```

Example response:

```json
{
  "status": "OK",
  "api": "running",
  "database": "connected"
}
```

---

### User Registration

Registers a new user with hashed password.

```
POST /api/auth/register
```

Request body:

```json
{
  "name": "Daivid",
  "email": "daivid@email.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "Daivid",
    "email": "daivid@email.com"
  }
}
```

Passwords are stored securely using **bcrypt hashing**.

---

# Database

The database is initialized automatically using an SQL script.

```
sql/init.sql
```

Tables created:

* users

Fields:

```
id
name
email
password
created_at
updated_at
```

Email is unique to prevent duplicate accounts.

---

# Docker Setup

The project includes a containerized development environment using Docker Compose.

Services included:

* **MariaDB** (database)
* **phpMyAdmin** (database UI)
* **Node.js environment**

The database schema is initialized automatically via:

```
/docker-entrypoint-initdb.d/init.sql
```

---

# Environment Variables

Create a `.env` file using `.env.example`.

Example:

```
PROJECT_NAME=task-manager-api

DB_HOST=localhost
DB_PORT=3306
DB_NAME=task_manager

DB_ROOT_PASSWORD=rootpassword

DB_APP_USER=app_user
DB_APP_PASSWORD=app_password

PMA_PORT=8080
API_PORT=8081
```

---

# Running the Project

### 1. Start Docker services

```
docker compose up -d
```

### 2. Start the Node server

```
npm install
npm run dev
```

Server will run on:

```
http://localhost:8081
```

---

# Database UI

phpMyAdmin is available at:

```
http://localhost:8080
```

Login using:

```
user: root
password: rootpassword
```

---

# Development Workflow

This project follows **Conventional Commits** for commit messages.

Examples:

```
feat: add user registration service
fix: resolve database connection issue
refactor: separate controller and service logic
```

---

# Current Status

Completed:

* Docker development environment
* MariaDB integration
* Health check endpoint
* Layered backend architecture
* User registration flow
* Password hashing with bcrypt

Upcoming features:

* Login endpoint
* JWT authentication
* Protected routes
* Task CRUD
* Validation middleware
* Error handling middleware

---

# Author

Daivid Quintero (DraconShade)
Software Engineer

---
