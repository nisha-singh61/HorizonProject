const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    // 1. Secure Token (HTTP-Only)
    res.cookie("token", token, {
      httpOnly: true, // CRITICAL SECURITY: Cannot be read by client JS
      path: "/",
      sameSite: "Lax",
      maxAge: 3600000,
    });

    // 2. Client-Readable Marker (For client-side existence check)
    res.cookie("isLoggedIn", "true", {
      httpOnly: false,
      path: "/",
      sameSite: "Lax",
      maxAge: 3600000,
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error(error);
  }
};

// LOGIN FUNCTION BELOW

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // validate fields
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    // find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }

    // compare passwords
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }

    // create token
    const token = createSecretToken(user._id);

    // 1. Secure Token (HTTP-Only)
    res.cookie("token", token, {
      httpOnly: true, // CRITICAL SECURITY
      path: "/",
      sameSite: "Lax",
      maxAge: 3600000,
    });

    // 2. Client-Readable Marker (For client-side existence check)
    res.cookie("isLoggedIn", "true", {
      httpOnly: false,
      path: "/",
      sameSite: "Lax",
      maxAge: 3600000,
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};
