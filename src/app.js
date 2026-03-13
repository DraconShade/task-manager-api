const express = require("express");
const app = express();

app.use(express.json());

const mainRouter = require("./routes/main.routes.js");
const healthRouter = require("./routes/health.routes.js");

app.use(mainRouter);
app.use(healthRouter);

module.exports = app;
