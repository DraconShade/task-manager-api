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

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskInput'
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task created successfully
 *               data:
 *                 task:
 *                   id: 1
 *       400:
 *         description: Validation error or invalid request
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - $ref: '#/components/schemas/ValidationError'
 *                 - $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.post("/", createTaskValidation, validate, taskController.createTask);

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get all tasks for the authenticated user
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Tasks retrieved successfully
 *               data:
 *                 tasks:
 *                   - id: 1
 *                     user_id: 1
 *                     title: Finish Swagger documentation
 *                     description: Add documentation to all endpoints
 *                     status: pending
 *                     created_at: 2026-03-22T10:00:00.000Z
 *                     updated_at: 2026-03-22T10:00:00.000Z
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/", taskController.getTasks);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Task retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task retrieved successfully
 *               data:
 *                 task:
 *                   id: 1
 *                   user_id: 1
 *                   title: Finish Swagger documentation
 *                   description: Add documentation to all endpoints
 *                   status: pending
 *                   created_at: 2026-03-22T10:00:00.000Z
 *                   updated_at: 2026-03-22T10:00:00.000Z
 *       400:
 *         description: Invalid task ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/:id", taskIdValidation, validate, taskController.getTaskById);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Update a task by ID
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskUpdateInput'
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task updated successfully
 *               data:
 *                 task:
 *                   id: 1
 *                   user_id: 1
 *                   title: Update Swagger documentation
 *                   description: Refine examples and responses
 *                   status: completed
 *                   created_at: 2026-03-22T10:00:00.000Z
 *                   updated_at: 2026-03-22T11:00:00.000Z
 *       400:
 *         description: Validation error or invalid task ID
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                 - $ref: '#/components/schemas/ValidationError'
 *                 - $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.put(
  "/:id",
  taskIdValidation,
  updateTaskValidation,
  validate,
  taskController.updateTask,
);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Task ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Task deleted successfully
 *               data:
 *                 deleted: true
 *       400:
 *         description: Invalid task ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidationError'
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Task not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.delete("/:id", taskIdValidation, validate, taskController.deleteTask);

module.exports = router;
