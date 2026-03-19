const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager API",
      version: "1.0.0",
      description:
        "REST API for user authentication and task management using JWT, Express, MySQL and Docker.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],
    tags: [
      {
        name: "System",
        description: "System endpoints",
      },
      {
        name: "Auth",
        description: "Authentication endpoints",
      },
      {
        name: "Tasks",
        description: "Task management endpoints",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Paste your JWT token here",
        },
      },
      schemas: {
        RegisterInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: {
              type: "string",
              example: "Daivid Quintero",
            },
            email: {
              type: "string",
              format: "email",
              example: "daivid@example.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
          },
        },
        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              format: "email",
              example: "daivid@example.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
          },
        },
        TaskInput: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              example: "Finish Swagger documentation",
            },
            description: {
              type: "string",
              example: "Add documentation to all endpoints",
            },
            status: {
              type: "string",
              enum: ["pending", "in_progress", "completed"],
              example: "pending",
            },
          },
        },
        TaskUpdateInput: {
          type: "object",
          properties: {
            title: {
              type: "string",
              example: "Update Swagger documentation",
            },
            description: {
              type: "string",
              example: "Refine examples and responses",
            },
            status: {
              type: "string",
              enum: ["pending", "in_progress", "completed"],
              example: "completed",
            },
          },
        },
        User: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
              example: "Daivid Quintero",
            },
            email: {
              type: "string",
              format: "email",
              example: "daivid@example.com",
            },
          },
        },
        Task: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            user_id: {
              type: "integer",
              example: 1,
            },
            title: {
              type: "string",
              example: "Finish Swagger documentation",
            },
            description: {
              type: "string",
              nullable: true,
              example: "Add documentation to all endpoints",
            },
            status: {
              type: "string",
              enum: ["pending", "in_progress", "completed"],
              example: "pending",
            },
            created_at: {
              type: "string",
              format: "date-time",
              example: "2026-03-22T10:00:00.000Z",
            },
            updated_at: {
              type: "string",
              format: "date-time",
              example: "2026-03-22T10:00:00.000Z",
            },
          },
        },
        SuccessResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Operation successful",
            },
            data: {
              type: "object",
            },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Task not found",
            },
          },
        },
        ValidationError: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Validation error",
            },
            errors: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  type: {
                    type: "string",
                    example: "field",
                  },
                  value: {
                    type: "string",
                    example: "",
                  },
                  msg: {
                    type: "string",
                    example: "Email is required",
                  },
                  path: {
                    type: "string",
                    example: "email",
                  },
                  location: {
                    type: "string",
                    example: "body",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
