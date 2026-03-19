const { checkSchema, param } = require("express-validator");

const allowedStatus = ["pending", "in_progress", "completed"];

const createTaskValidation = checkSchema({
  title: {
    trim: true,
    notEmpty: {
      errorMessage: "Title is required",
    },
    isString: {
      errorMessage: "Title must be a string",
    },
  },
  description: {
    optional: true,
    isString: {
      errorMessage: "Description must be a string",
    },
    trim: true,
  },
  status: {
    optional: true,
    isIn: {
      options: [allowedStatus],
      errorMessage: "Invalid status value",
    },
  },
});

const updateTaskValidation = checkSchema({
  title: {
    optional: true,
    trim: true,
    notEmpty: {
      errorMessage: "Title cannot be empty",
    },
    isString: {
      errorMessage: "Title must be a string",
    },
  },
  description: {
    optional: true,
    isString: {
      errorMessage: "Description must be a string",
    },
    trim: true,
  },
  status: {
    optional: true,
    isIn: {
      options: [allowedStatus],
      errorMessage: "Invalid status value",
    },
  },
});

const taskIdValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("Task id must be a positive integer"),
];

module.exports = {
  createTaskValidation,
  updateTaskValidation,
  taskIdValidation,
};
