const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

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

module.exports = {
  registerUser,
};
