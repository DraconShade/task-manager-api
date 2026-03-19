const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Root endpoint
 *     tags: [System]
 *     responses:
 *       200:
 *         description: API is running
 *         content:
 *           application/json:
 *             example:
 *               message: Task Manager API is running
 */
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Task Manager API is running",
  });
});

module.exports = router;
