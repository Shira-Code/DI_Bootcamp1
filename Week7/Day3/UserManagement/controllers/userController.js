const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

// POST /register
const registerUser = async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    
    // Check if username exists
    const existingUser = await userModel.findUserByUsername(username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    await userModel.createUser({ firstName, lastName, email, username, passwordHash });
    res.status(201).json({ message: 'Hello, Your account is now created!' });
};

// POST /login
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = await userModel.findUserByUsername(username);
    if (!user) {
        return res.status(400).json({ message: 'Username is not registered' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: `Hi ${user.first_name}, welcome back!` });
};

// GET /users
const getUsers = async (req, res) => {
    const users = await userModel.getAllUsers();
    res.json(users);
};

// GET /users/:id
const getUserById = async (req, res) => {
    const user = await userModel.findUserById(req.params.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
};

// PUT /users/:id
const updateUser = async (req, res) => {
    const { firstName, lastName, email } = req.body;
    await userModel.updateUser(req.params.id, { firstName, lastName, email });
    res.json({ message: 'User updated successfully' });
};

module.exports = { registerUser, loginUser, getUsers, getUserById, updateUser };
