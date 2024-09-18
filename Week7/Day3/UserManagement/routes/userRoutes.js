const express = require('express');
const { registerUser, loginUser, getUsers, getUserById, updateUser } = require('../controllers/userController');

const router = express.Router();

// // Register route
// router.post('/register', registerUser);

router.post('/register', (req, res) => {
    // Your registration logic here
});

// Login route
router.post('/login', loginUser);

// Get all users
router.get('/users', getUsers);

// Get user by ID
router.get('/users/:id', getUserById);

// Update user by ID
router.put('/users/:id', updateUser);

module.exports = router;
