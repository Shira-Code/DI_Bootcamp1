const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

//register route = register a new user

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

router.get("/all", userController.getAllUsers);

module.exports = router;