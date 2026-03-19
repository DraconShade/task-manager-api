const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const validate = require("../middlewares/validation.middleware");

const {
  createTaskValidation,
  updateTaskValidation,
  taskIdValidation,
} = require("../validations/task.validation");

router.use(authMiddleware);

router.post("/", createTaskValidation, validate, taskController.createTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskIdValidation, validate, taskController.getTaskById);
router.put(
  "/:id",
  taskIdValidation,
  updateTaskValidation,
  validate,
  taskController.updateTask,
);
router.delete("/:id", taskIdValidation, validate, taskController.deleteTask);

module.exports = router;
