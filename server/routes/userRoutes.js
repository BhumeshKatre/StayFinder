const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/google-login", async (req, res) => {
  try {
    const { name, email, photoURL, uid } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user
      user = new User({
        name,
        email,
        photoURL,
        uid,
        createdAt: new Date(),
      });
      await user.save();
    }

    // res.redirect("http://localhost:5173/");
    res.status(200).json({
      message: "User logged in successfully",
    })

  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
