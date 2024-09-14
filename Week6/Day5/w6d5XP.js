// Exercises XP
// Last Updated: September 22nd, 2023

// What you will learn:
// Use Express to build an API
// Use Node,js modules


// 🌟 Exercise 1: Building a RESTful API
// Instructions
// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

// Create a directory named blog-api.

// Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the express package by running npm install express in the terminal.

// Create a file named server.js.

// In server.js, require the express package and set up an Express app.

// Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

// Implement the following routes using Express:
// GET /posts: Return a list of all blog posts.
// GET /posts/:id: Return a specific blog post based on its id.
// POST /posts: Create a new blog post.
// PUT /posts/:id: Update an existing blog post.
// DELETE /posts/:id: Delete a blog post.

// Implement error handling for invalid routes and server errors.

// Start the Express app and listen on a specified port (e.g., 3000).

//ran postman to perform verify the methods are working and retrieving and modifying and deleting data
//cmd  node server.js and  
//nodeman to monitor "nodemon server.js"
//server.js

const express = require('express');

const app = express();


app.use(express.json());


let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the second post.' }
];

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1, 
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(200).json({ message: 'Post deleted' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// 🌟 Exercise 2: Building a Basic CRUD API with Express.js
// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. 
//Your task is to create routes to manage a collection of books.
// Create a new directory named book-api.
// Inside the book-api directory, initialize a new Node.js project and install the express package.
// Create a new file named app.js in the book-api directory.
// In app.js, import the express module and create an instance of an Express app.
// Define a basic data array containing a few book objects. Each book object should have properties like id, 
//title, author, and publishedYear.
// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
// // Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL 
// and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book 
// details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.
// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. 
// Inside the route handler, create a new book object with an incremented ID and the data from the request body. 
// Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

//npm init -y
//npm install express
//npm install nodemon --save-dev
//npx nodemon app.js
//postman to test methods


// Method: GET URL: http://localhost:5000/api/books    URL: http://localhost:5000/api/books/1
// Method: POST  URL: http://localhost:5000/api/books enter json into body postman & verify post update
//app.js


const express = require('express');

const app = express();

app.use(express.json());

let books = [
  { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 }
];

app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1, 
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook); 
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// 🌟 Exercise 3: Building a Basic CRUD API with Express and Axios using a Data Module
// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js and 
// Axios to retrieve data from the JSONPlaceholder API and respond with that data in your own API. Y
// ou’ll also create a separate module to handle data retrieval using Axios.
// Part 1: Setting Up the Express Server
// Create a new directory named crud-api.
// Inside the crud-api directory, initialize a new Node.js project and install the express and axios packages.
// Create a new file named app.js in the crud-api directory.
// In app.js, import the express module and create an instance of an Express app.
// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
// Part 2: Creating a Data Module for Axios
// Inside the crud-api directory, create a new directory named data.
// Inside the data directory, create a new file named dataService.js.
// In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to 
// the JSONPlaceholder API to fetch data for all posts.
// Export the fetchPosts function.
// Part 3: Using the Data Module in the Express App
// Inside app.js, import the dataService module you created.
// Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve 
// data from the JSONPlaceholder API.
// Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts
// Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.

//npm init -y
//npm install express axios
//npm install --save-dev nodemon
//npx nodemon app.js



//app.js

const express = require('express');

const app = express();

const { fetchPosts } = require('./data/dataService');

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.status(200).json(posts);
    console.log('Data has been successfully retrieved and sent as a response.');
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving data' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//dataService.js

const axios = require('axios');

const fetchPosts = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from JSONPlaceholder');
  }
};

module.exports = { fetchPosts };