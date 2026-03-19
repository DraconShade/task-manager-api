const authService = require("../services/auth.service");

const registerUser = async (req, res) => {
  try {
    const newUser = await authService.registerUser(req.body);

    return sendSuccess(
      res,
      "User registered successfully",
      { user: newUser },
      201,
    );
  } catch (error) {
    return sendError(res, "User registration failed", 400);
  }
};

const loginUser = async (req, res) => {
  try {
    const { token, user } = await authService.loginUser(req.body);

    return sendSuccess(res, "Login successful", { token, user }, 200);
  } catch (error) {
    return sendError(res, "Invalid email or password", 400);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
