const taskService = require("../services/task.service");

const createTask = async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body, req.user.id);

    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getUserTasks(req.user.id);

    res.status(200).json({
      message: "Tasks retrieved successfully",
      tasks,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getUserTaskById(
      Number(req.params.id),
      req.user.id,
    );

    res.status(200).json({
      message: "Task retrieved successfully",
      task,
    });
  } catch (error) {
    const statusCode = error.message === "Task not found" ? 404 : 400;

    res.status(statusCode).json({
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(
      Number(req.params.id),
      req.body,
      req.user.id,
    );

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    const statusCode = error.message === "Task not found" ? 404 : 400;

    res.status(statusCode).json({
      error: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await taskService.deleteTask(
      Number(req.params.id),
      req.user.id,
    );

    res.status(200).json(result);
  } catch (error) {
    const statusCode = error.message === "Task not found" ? 404 : 400;

    res.status(statusCode).json({
      error: error.message,
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
