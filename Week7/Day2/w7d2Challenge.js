// Daily Challenge : Registration & Login
// Last Updated: September 22nd, 2023

// What you will learn:
// Use Express to build an API
// Use Knex to query data from a database


// Instructions : Create a User Management API with Registration and Login using Express.js, Bcrypt, and Database
// Requirements:

// Set up a new Express.js application.


// Implement the following routes using express.Router:

// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the the database
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from the database
// GET /users/:id: Retrieve a specific user by ID from the database
// PUT /users/:id: Update a user’s information by ID in the database

// Create users table to store user data.


// Define a two data tables users and hashpwd to store user details:

// users table with properties like id, email, username, first_name, last_name.
// hashpwd table with properties like id, username, password.

// Use transaction to add a user


// Create this directory structure:

// server
//     |_ config
//     |_ controllers
//     |_ models
//     |_ routes


// Use bcrypt to hash user passwords before storing them in the table and for verifying passwords during login.


// Test your API using tools like Postman or curl.

Here’s a detailed breakdown to build a User Management API with registration and login functionality using Express.js, Knex, Bcrypt, and PostgreSQL:

Requirements:
Project Setup:

Create a directory user-management-api and initialize the project:
bash
Copy code
mkdir user-management-api
cd user-management-api
npm init -y
Install the necessary dependencies:
bash
Copy code
npm install express knex pg bcrypt
Create Database:

Set up your PostgreSQL database and create the following tables:
users table:
sql
Copy code
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100)
);
hashpwd table:
sql
Copy code
CREATE TABLE hashpwd (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) REFERENCES users(username) ON DELETE CASCADE,
  password VARCHAR(255) NOT NULL
);
Directory Structure:

arduino
Copy code
server
|_ config
|_ controllers
|_ models
|_ routes
Knex Configuration:

Inside config/knex.js, configure Knex to connect to your PostgreSQL database:
javascript
Copy code
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'your_db_user',
    password: 'your_db_password',
    database: 'your_db_name'
  }
});

module.exports = knex;
Controllers:

In controllers/userController.js, implement the controller logic for handling user registration, login, and CRUD operations:
javascript
Copy code
const bcrypt = require('bcrypt');
const knex = require('../config/knex');

// Register a new user
const registerUser = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Use transaction to ensure atomicity
    await knex.transaction(async trx => {
      const user = await trx('users').insert({
        email, username, first_name, last_name
      }).returning('*');
      
      await trx('hashpwd').insert({
        username: user[0].username,
        password: hashedPassword
      });
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed', details: error });
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await knex('hashpwd').where({ username }).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', details: error });
  }
};

// Retrieve all users
const getAllUsers = async (req, res) => {
  try {
    const users = await knex('users').select('*');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users', details: error });
  }
};

// Retrieve a specific user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await knex('users').where({ id }).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user', details: error });
  }
};

// Update user information by ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, first_name, last_name } = req.body;

  try {
    await knex('users').where({ id }).update({ email, first_name, last_name });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user', details: error });
  }
};

module.exports = { registerUser, loginUser, getAllUsers, getUserById, updateUser };
Routes:

In routes/userRoutes.js, define routes for registration, login, and CRUD:
javascript
Copy code
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);

module.exports = router;
Express App Setup:

In server.js, set up the Express app to use these routes:
javascript
Copy code
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
Testing the API:

Start your server by running:
bash
Copy code
node server.js
Use Postman to test the following routes:
POST /api/register - Register a user (send JSON: { "email": "email", "username": "username", "password": "password" }).
POST /api/login - Log in a user (send JSON: { "username": "username", "password": "password" }).
GET /api/users - Get all users.
GET /api/users/:id - Get a specific user by ID.
PUT /api/users/:id - Update a user's information.
This will give you a functional User Management API with registration, login, and user data retrieval using Express.js, Knex, Bcrypt, and PostgreSQL!