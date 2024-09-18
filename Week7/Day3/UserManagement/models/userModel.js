const pool = require('../config/db');

// Function to find a user by username
const findUserByUsername = async (username) => {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
};

// Function to create a new user
const createUser = async (user) => {
    const { firstName, lastName, email, username, passwordHash } = user;
    await pool.query(
        'INSERT INTO users (first_name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5)',
        [firstName, lastName, email, username, passwordHash]
    );
};

// Function to retrieve all users
const getAllUsers = async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
};

// Function to find a user by ID
const findUserById = async (id) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
};

// Function to update user details
const updateUser = async (id, user) => {
    const { firstName, lastName, email } = user;
    await pool.query(
        'UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4',
        [firstName, lastName, email, id]
    );
};

module.exports = { findUserByUsername, createUser, getAllUsers, findUserById, updateUser };
