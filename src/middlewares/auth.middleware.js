const { verifyToken } = require("../services/token.service");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const [bearer, token] = authHeader.split(" "); // Assuming "Bearer <token>"

  if (bearer !== "Bearer") {
    return res.status(401).json({ message: "Invalid authorization format" });
  }

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const tokenData = verifyToken(token);

    req.user = tokenData;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
