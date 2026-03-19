![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MariaDB](https://img.shields.io/badge/MariaDB-Database-blue)
![Docker](https://img.shields.io/badge/Docker-Container-blue)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)
![License](https://img.shields.io/badge/License-MIT-green)

# Task Manager API

API REST para la gestión de tareas desarrollada con **Node.js**, **Express** y **MariaDB**.

Este proyecto forma parte de mi portafolio como desarrollador backend y demuestra la implementación de autenticación con JWT y un CRUD completo de tareas.

---

# Tecnologías utilizadas

- Node.js
- Express
- MariaDB
- Docker
- JWT (Json Web Token)
- bcrypt
- dotenv

---

# Características

- Registro de usuarios
- Login con autenticación JWT
- Middleware para proteger rutas
- CRUD completo de tareas
- Arquitectura por capas
- Base de datos relacional

---

# Estructura del proyecto
src/
├── config
├── controllers
├── middlewares
├── models
├── routes
├── services
├── app.js
└── server.js

Cada capa tiene una responsabilidad específica:

- **routes** → define los endpoints
- **controllers** → maneja las peticiones HTTP
- **services** → contiene la lógica de negocio
- **models** → acceso a la base de datos

---

# Autenticación

El sistema utiliza **JWT (Json Web Token)** para proteger las rutas de la API.

Flujo básico:

1. El usuario se registra
2. El usuario inicia sesión
3. El servidor genera un token JWT
4. El cliente envía el token en cada petición protegida

# Autor

Daivid Quintero  
Ingeniero Informático

GitHub  
https://github.com/DraconShade

Web  
https://daividquintero.kesug.com
