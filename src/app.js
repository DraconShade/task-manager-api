const express = require("express");
const app = express();

app.use(express.json());

const mainRouter = require("./routes/main.routes.js");
const healthRouter = require("./routes/health.routes.js");
const authRouter = require("./routes/auth.routes.js");

app.use(mainRouter);
app.use(healthRouter);
app.use("/api/auth", authRouter);

module.exports = app;
