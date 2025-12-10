const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();

// Signup
router.post("/signup", Signup);

// Login
router.post("/login", Login);

// LOGOUT Route
router.post("/logout", (req, res) => {
// Clear the secure token cookie
res.cookie("token", "", {
httpOnly: true,
maxAge: 0,
path: "/",
sameSite: "Lax",
});

//Clear the client-readable marker cookie
res.cookie("isLoggedIn", "", {
httpOnly: false,
maxAge: 0,
path: "/",
sameSite: "Lax",
});

res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;