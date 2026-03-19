const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");
const registerValidation = require("../validations/register.validation");
const loginValidation = require("../validations/login.validation");
const validate = require("../middlewares/validation.middleware");

router.post(
  "/register",
  registerValidation,
  validate,
  authController.registerUser,
);

router.post("/login", loginValidation, validate, authController.loginUser);

module.exports = router;
