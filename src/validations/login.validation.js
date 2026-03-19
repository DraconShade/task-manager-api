const { checkSchema } = require("express-validator");

const loginValidation = checkSchema({
  email: {
    notEmpty: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Invalid email format",
    },
  },
  password: {
    notEmpty: {
      errorMessage: "Password is required",
    },
    isLength: {
      options: { min: 6 },
      errorMessage: "Password must be at least 6 characters long",
    },
  },
});

module.exports = loginValidation;
