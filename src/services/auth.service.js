const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (userData) => {
  let { name, email, password } = userData;

  if (!name || !email || !password) {
    throw new Error("Name, email and password are required");
  }

  name = name.trim();
  email = email.trim().toLowerCase();

  const existingUser = await userModel.findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await userModel.createUser({
    name,
    email,
    password: hashedPassword,
  });

  return newUser;
};

const loginUser = async (userData) => {
  let { email, password } = userData;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  email = email.trim().toLowerCase();

  const user = await userModel.findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { id: user.id, user: user.name, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "15m",
    },
  );

  return { token, user };
};

module.exports = {
  registerUser,
  loginUser,
};
