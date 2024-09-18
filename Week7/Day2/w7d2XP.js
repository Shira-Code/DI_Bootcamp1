// Exercises XP
// Last Updated: September 22nd, 2023

// What you will learn:
// Use Express to build an API
// Use Knex to query data from a database


// 🌟 Exercise 1 : Building a RESTful API with database connection
// Instructions
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.


// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.


// Install the express package by running npm install express in the terminal.


// Create a file named server.js.


// In server.js, require the express package and set up an Express app.


// Create a posts table in postgres database, with the properties like id, title, and content.


// Implement the following routes using Express:

// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.


// Create this directory structure:

// server
//     |_ config
//     |_ controllers
//     |_ models
//     |_ routes


// Implement error handling for invalid routes and server errors.


// Start the Express app and listen on a specified port (e.g., 3000).



// 🌟 Exercise 2 : Building a Basic CRUD API with database connection
// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

// Create a new directory named book-api.


// Inside the book-api directory, initialize a new Node.js project and install the express package.


// Create a new file named app.js in the book-api directory.


// In app.js, import the express module and create an instance of an Express app.


// Define a basic data books table with properties like id, title, author, and publishedYear.


// Create this directory structure:

// server
//     |_ config
//     |_ controllers
//     |_ models
//     |_ routes


// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.


// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.


// Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.


// Implement the “Create” route at POST /api/books.

For the exercises, here's a quick overview to get started with building RESTful APIs using Express.js and Knex:

🌟 Exercise 1: Building a RESTful API with a Database Connection
Directory Setup:

Create a directory blog-api and run npm init to set up the project.
Install necessary packages:
bash
Copy code
npm install express knex pg
Database:

Set up a PostgreSQL database and create a posts table with id, title, and content columns.
Directory Structure:

Create the following directory structure:
arduino
Copy code
server
  |_ config
  |_ controllers
  |_ models
  |_ routes
Basic Express Setup:

In server.js, initialize an Express app:
javascript
Copy code
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
Knex Setup:

In config/knex.js, set up Knex to connect to the database:
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
Controllers & Routes:

Create controllers/postController.js to handle the CRUD logic and routes/postRoutes.js to define routes like:
javascript
Copy code
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
Error Handling:

Implement middleware for handling errors and invalid routes.
🌟 Exercise 2: Building a Basic CRUD API with a Database Connection
Directory Setup:

Create the directory book-api and initialize the project with:
bash
Copy code
npm init
npm install express knex pg
Database:

Set up a PostgreSQL table books with columns id, title, author, and publishedYear.
Directory Structure:

Same as the previous exercise.
Routes and Controller Logic:

In routes/bookRoutes.js, define CRUD routes for books.
javascript
Copy code
router.get('/api/books', bookController.getAllBooks);
router.get('/api/books/:bookId', bookController.getBookById);
router.post('/api/books', bookController.createBook);
router.put('/api/books/:bookId', bookController.updateBook);
router.delete('/api/books/:bookId', bookController.deleteBook);
Run and Test:

Start the server on port 5000 and test the API using Postman or curl.
This setup will get you through both exercises.