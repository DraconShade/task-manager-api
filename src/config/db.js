require("dotenv").config();

const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_APP_USER || "",
  password: process.env.DB_APP_PASSWORD || "",
  database: process.env.DB_NAME || "task_manager",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function connect() {
  try {
    const connection = await pool.getConnection();
    console.log("----- Connected to the database");
    connection.release();
  } catch (error) {
    console.error("----- Error connecting to the database:", error);
  }
}

module.exports = {
  connect,
  pool,
};
