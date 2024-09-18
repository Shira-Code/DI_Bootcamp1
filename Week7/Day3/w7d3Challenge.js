// Daily Challenge : Task API #2
// Last Updated: March 7th, 2024
// Create a User Management API with Registration and Login using Express.js, Bcrypt, and JSON File Storage
// Instructions
// 1. Create 2 HTML files: one for the Login form and the other for the Register form (when the inputs are empty the submit button should be disabled).
// 2. Set up a new Express.js application.
// 3. Implement the following routes using express.Router:
// POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
// POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
// GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
// GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
// PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required).
// 4. Create a JSON file (e.g., users.json) to store user data. Initialize it with an empty array [].
// 5. Use bcrypt to hash user passwords before storing them in the JSON file and for verifying passwords during login.
// 6. Implement error handling for file read/write operations, route validation, and incorrect login credentials.
// 7. Test your API using tools like Postman or curl.
// EXAMPLES
// The Register form should have five inputs: Name, Last Name, Email, Username and Password. And it should register a user with a message as follows:
// register
// When the user registers, if the username or the password already exist, do not write to the file. Instead, send a message back as follows:
// The Login form should have two inputs: Username and Password. And it should display a login message as follows:
// When the user logs in and if they are not registered, send and error message as follows:

//DB.JS
// require('dotenv').config();

// const { Pool } = require('pg');

// // Use environment variables
// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: 5432,
// });

// module.exports = pool;

//USERCONTROLLER.JS
// const bcrypt = require('bcrypt');
// const userModel = require('../models/userModel');

// const registerUser = async (req, res) => {
//     const { firstName, lastName, email, username, password } = req.body;
    
//     const existingUser = await userModel.findUserByUsername(username);
//     if (existingUser) {
//         return res.status(400).json({ message: 'Username already exists' });
//     }

//     const passwordHash = await bcrypt.hash(password, 10);

//     await userModel.createUser({ firstName, lastName, email, username, passwordHash });
//     res.status(201).json({ message: 'Hello, Your account is now created!' });
// };

// const loginUser = async (req, res) => {
//     const { username, password } = req.body;

//     const user = await userModel.findUserByUsername(username);
//     if (!user) {
//         return res.status(400).json({ message: 'Username is not registered' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: `Hi ${user.first_name}, welcome back!` });
// };

// const getUsers = async (req, res) => {
//     const users = await userModel.getAllUsers();
//     res.json(users);
// };

// const getUserById = async (req, res) => {
//     const user = await userModel.findUserById(req.params.id);
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
// };

// const updateUser = async (req, res) => {
//     const { firstName, lastName, email } = req.body;
//     await userModel.updateUser(req.params.id, { firstName, lastName, email });
//     res.json({ message: 'User updated successfully' });
// };

// module.exports = { registerUser, loginUser, getUsers, getUserById, updateUser };

//USERMODEL.JS
// const pool = require('../config/db');

// const findUserByUsername = async (username) => {
//     const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
//     return result.rows[0];
// };

// const createUser = async (user) => {
//     const { firstName, lastName, email, username, passwordHash } = user;
//     await pool.query(
//         'INSERT INTO users (first_name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5)',
//         [firstName, lastName, email, username, passwordHash]
//     );
// };

// const getAllUsers = async () => {
//     const result = await pool.query('SELECT * FROM users');
//     return result.rows;
// };

// const findUserById = async (id) => {
//     const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
//     return result.rows[0];
// };

// const updateUser = async (id, user) => {
//     const { firstName, lastName, email } = user;
//     await pool.query(
//         'UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4',
//         [firstName, lastName, email, id]
//     );
// };

// module.exports = { findUserByUsername, createUser, getAllUsers, findUserById, updateUser };

//ROUTES.JS
// const express = require('express');
// const { registerUser, loginUser, getUsers, getUserById, updateUser } = require('../controllers/userController');

// const router = express.Router();

// router.post('/register', registerUser);

// router.post('/login', loginUser);

// router.get('/users', getUsers);

// router.get('/users/:id', getUserById);

// router.put('/users/:id', updateUser);

// module.exports = router;

//APP.JS
// require('dotenv').config();
// const express = require('express');
// const userRoutes = require('./routes/userRoutes');
// const loggerMiddleware = require('./middlewares/loggerMiddleware');

// const app = express();
// app.use(express.json());
// app.use(loggerMiddleware);

// app.use('/api', userRoutes);

// app.use(express.static('public'));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

//LOGIN.HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Login</title>
// </head>
// <body>
//     <h1>Login</h1>
//     <form id="loginForm">
//         <input type="text" id="username" placeholder="Username" required>
//         <input type="password" id="password" placeholder="Password" required>
//         <button type="submit" id="loginBtn">Login</button>
//     </form>

//     <script>
//         document.getElementById('loginForm').addEventListener('submit', async (e) => {
//             e.preventDefault();
//             const data = {
//                 username: document.getElementById('username').value,
//                 password: document.getElementById('password').value,
//             };
//             const response = await fetch('/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });
//             const result = await response.json();
//             alert(result.message);
//         });
//     </script>
// </body>
// </html>

//REGISTER.HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Register</title>
// </head>
// <body>
//     <h1>Register</h1>
//     <form id="registerForm" method="POST" action="/register">
//         <input type="text" id="firstName" placeholder="First Name" required>
//         <input type="text" id="lastName" placeholder="Last Name" required>
//         <input type="email" id="email" placeholder="Email" required>
//         <input type="text" id="username" placeholder="Username" required>
//         <input type="password" id="password" placeholder="Password" required>
//         <button type="submit" id="submitBtn">Register</button>
//     </form>

//     <script>
//         document.getElementById('registerForm').addEventListener('submit', async (e) => {
//             e.preventDefault();
//             const data = {
//                 firstName: document.getElementById('firstName').value,
//                 lastName: document.getElementById('lastName').value,
//                 email: document.getElementById('email').value,
//                 username: document.getElementById('username').value,
//                 password: document.getElementById('password').value,
//             };
//             const response = await fetch('/api/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });
//             const result = await response.json();
//             alert(result.message);
//         });
//     </script>
// </body>
// </html>




