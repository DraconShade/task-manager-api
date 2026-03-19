# 🧠 Task Manager API

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?logo=express&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-Database-003545?logo=mariadb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?logo=jsonwebtokens&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-API--Docs-85EA2D?logo=swagger&logoColor=black)
![Validation](https://img.shields.io/badge/Validation-express--validator-yellow)
![REST API](https://img.shields.io/badge/API-REST-02569B)
![Architecture](https://img.shields.io/badge/Architecture-Layered-6f42c1)
![License](https://img.shields.io/badge/License-MIT-green)

API REST para la gestión de tareas con autenticación de usuarios. Desarrollada con Node.js, Express, MySQL, JWT y Docker, siguiendo una arquitectura modular y escalable.

---

## 🚀 Características

- 🔐 Autenticación con JWT (Registro / Login)
- 📋 CRUD completo de tareas
- 👤 Aislamiento de tareas por usuario
- 🧱 Arquitectura modular (routes → controllers → services → models)
- 🐳 Entorno contenerizado con Docker
- ✅ Validación de peticiones con express-validator
- 📚 Documentación interactiva con Swagger (OpenAPI)

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- Docker
- JWT (jsonwebtoken)
- bcrypt
- express-validator
- Swagger (OpenAPI)

---

## 🏗️ Estructura del proyecto

```

src/
│
├── config/         # Configuración de base de datos
├── controllers/    # Controladores (manejo de requests)
├── middlewares/    # Middlewares (auth, validaciones)
├── models/         # Acceso a datos (queries)
├── routes/         # Rutas de la API
├── services/       # Lógica de negocio
├── validations/    # Validaciones de entrada
├── utils/          # Helpers (respuestas, etc.)
└── docs/           # Configuración de Swagger

```

---

## ⚙️ Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/DraconShade/task-manager-api.git
cd task-manager-api

npm install

PORT=8081
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=task_manager
JWT_SECRET=tu_clave_secreta

docker compose up --build / docker compose up -d

docker-compose up --build

http://localhost:8081/api-docs

```

# Autor

Daivid Quintero (DraconShade)  
Ingeniero Informático

Web  
https://daividquintero.kesug.com

Linkedin
https://www.linkedin.com/in/draconshade/

GitHub  
https://github.com/DraconShade

