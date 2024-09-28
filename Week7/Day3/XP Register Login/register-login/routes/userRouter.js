const express = require("express");
const userController = require("../controllers/userController.js");

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

app.post('/user/register', async (req, res) => {
    try {
      const { username, password, email, first_name, last_name } = req.body;
      // Your registration logic here
  
    } catch (error) {
      console.error("Database connection error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;
