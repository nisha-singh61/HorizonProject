const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();

// --- ENTRY ROUTES ---

// Signup
router.post("/signup", Signup);

// Login
router.post("/login", Login);

// --- EXIT ROUTE ---

// Logout Route
router.post("/logout", (req, res) => {
  // To delete a cookie, we must provide the EXACT same settings (path, secure, sameSite)
  // but set the expiration to a past date.
  
  const cookieOptions = {
    path: "/",
    secure: true,      // Must match Login
    sameSite: "None",  // Must match Login
    expires: new Date(0), // Force delete
  };

  // Clear the secure token cookie
  res.cookie("token", "", {
    ...cookieOptions,
    httpOnly: true, // Secure token is hidden from JS
  });

  // Clear the client-readable marker cookie
  res.cookie("isLoggedIn", "", {
    ...cookieOptions,
    httpOnly: false, // This one was readable by JS
  });

  res.status(200).json({ 
    message: "Logged out successfully", 
    success: true 
  });
});

module.exports = router;