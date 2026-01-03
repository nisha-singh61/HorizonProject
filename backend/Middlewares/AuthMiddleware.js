const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  // 1. Get the token from cookies
  const token = req.cookies.token;

  // 2. If no token, return unauthorized
  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "No token provided" });
  }

  try {
    // 3. Verify the JWT
    const data = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Find the user in the database
    const user = await User.findById(data.id);

    if (!user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    // 5. Attach user object to the request for use in next routes
    req.user = user;
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    return res
      .status(401)
      .json({ status: false, message: "Invalid or expired token" });
  }
};
