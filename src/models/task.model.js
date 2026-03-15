const { pool } = require("../config/db.js");

const createTask = async (task) => {
  const { title, description, status, user_id } = task;

  const [result] = await pool.query(
    "INSERT INTO tasks (title, description, status, user_id) VALUES (?, ?, ?, ?)",
    [
      title,
      description === undefined ? null : description,
      status || "pending",
      user_id,
    ],
  );

  return { id: result.insertId };
};

const getTasksByUserId = async (user_id) => {
  const [rows] = await pool.query(
    "SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC",
    [user_id],
  );

  return rows;
};

const getTaskByIdAndUserId = async (id, user_id) => {
  const [rows] = await pool.query(
    "SELECT * FROM tasks WHERE id = ? AND user_id = ?",
    [id, user_id],
  );

  return rows[0];
};

const updateTaskByIdAndUserId = async (id, user_id, task) => {
  const { title, description, status } = task;

  const [result] = await pool.query(
    "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ? AND user_id = ?",
    [
      title,
      description === undefined ? null : description,
      status,
      id,
      user_id,
    ],
  );

  return result.affectedRows;
};

const deleteTaskByIdAndUserId = async (id, user_id) => {
  const [result] = await pool.query(
    "DELETE FROM tasks WHERE id = ? AND user_id = ?",
    [id, user_id],
  );

  return result.affectedRows;
};

module.exports = {
  createTask,
  getTasksByUserId,
  getTaskByIdAndUserId,
  updateTaskByIdAndUserId,
  deleteTaskByIdAndUserId,
};
