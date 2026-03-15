const taskModel = require("../models/task.model.js");

const allowedStatuses = ["pending", "in_progress", "done"];

const createTask = async (taskData, userId) => {
  const { title, description, status } = taskData;

  if (!title || title.trim() === "") {
    throw new Error("Title is required");
  }

  if (status && !allowedStatuses.includes(status)) {
    throw new Error("Invalid status value");
  }

  const newTask = await taskModel.createTask({
    title: title.trim(),
    description,
    status,
    user_id: userId,
  });

  const task = await taskModel.getTaskByIdAndUserId(newTask.id, userId);

  return task;
};

const getUserTasks = async (userId) => {
  const tasks = await taskModel.getTasksByUserId(userId);
  return tasks;
};

const getUserTaskById = async (taskId, userId) => {
  const task = await taskModel.getTaskByIdAndUserId(taskId, userId);

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

const updateTask = async (taskId, taskData, userId) => {
  const existingTask = await taskModel.getTaskByIdAndUserId(taskId, userId);

  if (!existingTask) {
    throw new Error("Task not found");
  }

  const updatedTitle =
    taskData.title !== undefined ? taskData.title.trim() : existingTask.title;

  const updatedDescription =
    taskData.description !== undefined
      ? taskData.description
      : existingTask.description;

  const updatedStatus =
    taskData.status !== undefined ? taskData.status : existingTask.status;

  if (!updatedTitle || updatedTitle === "") {
    throw new Error("Title is required");
  }

  if (!allowedStatuses.includes(updatedStatus)) {
    throw new Error("Invalid status value");
  }

  await taskModel.updateTaskByIdAndUserId(taskId, userId, {
    title: updatedTitle,
    description: updatedDescription,
    status: updatedStatus,
  });

  const updatedTask = await taskModel.getTaskByIdAndUserId(taskId, userId);

  return updatedTask;
};

const deleteTask = async (taskId, userId) => {
  const task = await taskModel.getTaskByIdAndUserId(taskId, userId);

  if (!task) {
    throw new Error("Task not found");
  }

  await taskModel.deleteTaskByIdAndUserId(taskId, userId);

  return { message: "Task deleted successfully" };
};

module.exports = {
  createTask,
  getUserTasks,
  getUserTaskById,
  updateTask,
  deleteTask,
};
