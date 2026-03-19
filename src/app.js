const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const app = express();

app.use(express.json());

const mainRouter = require("./routes/main.routes.js");
const healthRouter = require("./routes/health.routes.js");
const authRouter = require("./routes/auth.routes.js");
const taskRouter = require("./routes/task.routes.js");

app.use(mainRouter);
app.use(healthRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tasks", taskRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
