const taskService = require("../services/task.service");
const { sendSuccess, sendError } = require("../utils/response");

const createTask = async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body, req.user.id);

    return sendSuccess(
      res,
      "Task created successfully",
      { task: newTask },
      201,
    );
  } catch (error) {
    return sendError(res, error.message, 400);
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getUserTasks(req.user.id);

    return sendSuccess(res, "Tasks retrieved successfully", { tasks });
  } catch (error) {
    return sendError(res, error.message, 400);
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getUserTaskById(
      Number(req.params.id),
      req.user.id,
    );

    return sendSuccess(res, "Task retrieved successfully", { task });
  } catch (error) {
    const statusCode = error.message === "Task not found" ? 404 : 400;

    return sendError(res, error.message, statusCode);
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(
      Number(req.params.id),
      req.body,
      req.user.id,
    );

    return sendSuccess(res, "Task updated successfully", { task: updatedTask });
  } catch (error) {
    const statusCode = error.message === "Task not found" ? 404 : 400;

    return sendError(res, error.message, statusCode);
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await taskService.deleteTask(
      Number(req.params.id),
      req.user.id,
    );

    return sendSuccess(res, "Task deleted successfully", result);
  } catch (error) {
    const statusCode = error.message === "Task not found" ? 404 : 400;

    return sendError(res, error.message, statusCode);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
