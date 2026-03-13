require("dotenv").config();

const app = require("./app");
const { connect } = require("./config/db");

const port = process.env.API_PORT || 8081;

connect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
