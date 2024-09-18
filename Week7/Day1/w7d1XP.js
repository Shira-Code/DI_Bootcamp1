// Exercises XP
// Last Updated: September 22nd, 2023

// 🌟 Exercise 1: Creating a Simple Express.js Application with Routes
// Instructions
// Step 1: Setup

// Create a new directory for your project.
// Navigate to the project directory using your command line.
// Initialize a new Node.js project by running npm init -y.
// Step 2: Install Dependencies
// Install Express.js by running the following command:

// npm install express
// Step 3: Create Your Express Application
// Create a JavaScript file (e.g., app.js) to set up your Express application:

// Step 4: Create a Router Module
// Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., index.js) where you will define your routes using express.Router():

// Step 5: Mount the Router in Your Application
// In your app.js file, import the router module you created and mount it in your Express application:

// Step 6: Start Your Server
// Now, you can start your Express server by running:

// Step 7: Test Your Routes
// Open your web browser or use a tool like Postman to test the following routes:

// http://localhost:3000/ (Homepage)
// http://localhost:3000/about (About Us page)
// You should see the corresponding responses for each route.

// Congratulations! You’ve created a simple Express.js application with routes using express.Router.

ere's how to complete Exercise 1 using nodemon and Postman:

Step-by-Step Instructions:
Create a new directory for your project:

bash
Copy code
mkdir express-app
cd express-app
Initialize a new Node.js project:

bash
Copy code
npm init -y
Install Express.js:

bash
Copy code
npm install express
Install nodemon:

bash
Copy code
npm install --save-dev nodemon
Create your app.js to set up the Express application:

js
Copy code
const express = require('express');
const app = express();
const port = 3000;

// Import router module
const indexRouter = require('./routes/index');

// Use the router
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
Create the routes directory:

bash
Copy code
mkdir routes
Create the index.js file inside the routes directory:

js
Copy code
const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.send('Welcome to the Homepage!');
});

// About Us route
router.get('/about', (req, res) => {
  res.send('About Us Page');
});

module.exports = router;
Update package.json to use nodemon: In your package.json, modify the "scripts" section:

json
Copy code
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
Start the server using nodemon:

bash
Copy code
npm run dev
You should see:

arduino
Copy code
Server is running on http://localhost:3000
Test the routes with Postman:

GET http://localhost:3000/ should return "Welcome to the Homepage!"
GET http://localhost:3000/about should return "About Us Page"




// 🌟 Exercise 2: Simple to-do list exercise using Express.js and express.Router.
// Instructions
// In this exercise, you’ll create an API for managing a to-do list with basic CRUD operations (Create, Read, Update, Delete).

// Step 1: Setup

// Create a new directory for your project.
// Navigate to the project directory using your command line.
// Initialize a new Node.js project by running npm init -y.
// Step 2: Install Dependencies
// Install Express.js

// Step 3: Create Your Express Application
// Create a JavaScript file (e.g., app.js) to set up your Express application

// Step 4: Create a Router Module
// Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., todos.js) where you will define routes for managing the to-do list using express.Router():

// // Sample in-memory database for storing to-do items
// const todos = [];

// // Get all to-do items

// // Add a new to-do item

// // Update a to-do item by ID

// // Delete a to-do item by ID
// Step 5: Mount the Router in Your Application
// In your app.js file, import the router module you created and mount it in your Express application

// Step 6: Start Your Server
// Now, you can start your Express server by running:

// node app.js
// Step 7: Test Your API
// You can use tools like Postman or curl to test your API endpoints for managing to-do items:

// GET http://localhost:3000/todos (Get all to-do items)
// POST http://localhost:3000/todos (Create a new to-do item with a JSON request body)
// PUT http://localhost:3000/todos/:id (Update a to-do item by ID with a JSON request body)
// DELETE http://localhost:3000/todos/:id (Delete a to-do item by ID)
// This exercise demonstrates a simple to-do list API built using Express.js and express.Router.

Here's how to complete Exercise 2: Simple To-Do List API using nodemon and Postman.

Step-by-Step Instructions:
Step 1: Setup
Create a new directory for your project:

bash
Copy code
mkdir todo-app
cd todo-app
Initialize a new Node.js project:

bash
Copy code
npm init -y
Step 2: Install Dependencies
Install Express.js:

bash
Copy code
npm install express
Install nodemon (for development):

bash
Copy code
npm install --save-dev nodemon
Step 3: Create Your Express Application
Create app.js to set up your Express application:
js
Copy code
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import router module
const todoRouter = require('./routes/todos');

// Use the router for "/todos" endpoint
app.use('/todos', todoRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
Step 4: Create a Router Module
Create a routes directory:

bash
Copy code
mkdir routes
Create a todos.js file inside the routes directory:

js
Copy code
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
let todos = [];

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title: title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id == id);
  if (todo) {
    todo.title = title || todo.title;
    todo.completed = completed !== undefined ? completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id != id);
  res.status(204).end();
});

module.exports = router;
Step 5: Mount the Router in Your Application
In your app.js, you've already mounted the router module:
js
Copy code
app.use('/todos', todoRouter);
Step 6: Start Your Server with nodemon
Update package.json to use nodemon: In your package.json, modify the "scripts" section:

json
Copy code
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
Start the server using nodemon:

bash
Copy code
npm run dev
You should see:

arduino
Copy code
Server is running on http://localhost:3000
Step 7: Test Your API Using Postman
Now, you can use Postman to test your API endpoints.

GET all to-do items: GET http://localhost:3000/todos

Should return an empty array initially [].
Add a new to-do item: POST http://localhost:3000/todos

Send a JSON body:
json
Copy code
{
  "title": "Buy groceries"
}
This should return the new to-do item:
json
Copy code
{
  "id": 1,
  "title": "Buy groceries",
  "completed": false
}
Update a to-do item: PUT http://localhost:3000/todos/1

Send a JSON body:
json
Copy code
{
  "title": "Buy vegetables",
  "completed": true
}
Should return the updated to-do item:
json
Copy code
{
  "id": 1,
  "title": "Buy vegetables",
  "completed": true
}
Delete a to-do item: DELETE http://localhost:3000/todos/1

Should return a 204 No Content response.
Conclusion
You've successfully created a simple to-do list API with basic CRUD operations using Express.js and express.Router.
 You can now test it with Postman using the routes defined above.



// 🌟 Exercise 3: Basic API for managing a list of books using Express.js and express.Router.
// Instructions
// In this exercise, you’ll implement CRUD operations (Create, Read, Update, Delete) for books.

// Step 1: Setup

// Create a new directory for your project.
// Navigate to the project directory using your command line.
// Initialize a new Node.js project by running npm init -y.
// Step 2: Install Dependencies
// Install Express.js

// Step 3: Create Your Express Application
// Create a JavaScript file (e.g., app.js) to set up your Express application

// // app.js
// Step 4: Create a Router Module
// Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., books.js) where you will define routes for managing books using express.Router():

// // routes/books.js

// // Sample in-memory database for storing books
// const books = [];

// // Get all books

// // Add a new book

// // Update a book by ID

// // Delete a book by ID
// Step 5: Mount the Router in Your Application
// In your app.js file, import the router module you created and mount it in your Express application

// // app.js
// Step 6: Start Your Server
// Now, you can start your Express server by running:

// node app.js
// Step 7: Test Your API
// You can use tools like Postman or curl to test your API endpoints for managing books:

// GET http://localhost:3000/books (Get all books)
// POST http://localhost:3000/books (Create a new book with a JSON request body)
// PUT http://localhost:3000/books/:id (Update a book by ID with a JSON request body)
// DELETE http://localhost:3000/books/:id (Delete a book by ID)
// This exercise demonstrates a simple book management API built using Express.js and express.Router.


Here’s how to complete Exercise 3: Basic API for Managing a List of Books using nodemon and Postman for testing.

Step-by-Step Instructions:
Step 1: Setup
Create a new directory for your project:

bash
Copy code
mkdir book-api
cd book-api
Initialize a new Node.js project:

bash
Copy code
npm init -y
Step 2: Install Dependencies
Install Express.js:

bash
Copy code
npm install express
Install nodemon (for development):

bash
Copy code
npm install --save-dev nodemon
Step 3: Create Your Express Application
Create app.js to set up your Express application:
js
Copy code
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the books router
const booksRouter = require('./routes/books');

// Use the router for "/books" endpoint
app.use('/books', booksRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
Step 4: Create a Router Module
Create a routes directory:

bash
Copy code
mkdir routes
Create a books.js file inside the routes directory:

js
Copy code
const express = require('express');
const router = express.Router();

// In-memory database for storing books
let books = [];

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find(b => b.id == id);

  if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  books = books.filter(b => b.id != id);
  res.status(204).end();
});

module.exports = router;
Step 5: Mount the Router in Your Application
In your app.js file, you have already mounted the router module using the following code:
js
Copy code
app.use('/books', booksRouter);
Step 6: Start Your Server with nodemon
Update package.json to use nodemon: In your package.json, modify the "scripts" section to include:

json
Copy code
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
Start the server using nodemon:

bash
Copy code
npm run dev
You should see:

arduino
Copy code
Server is running on http://localhost:3000
Step 7: Test Your API Using Postman
Now, you can use Postman to test your API endpoints.

GET all books: GET http://localhost:3000/books

Should return an empty array initially [].
Add a new book: POST http://localhost:3000/books

Send a JSON body:
json
Copy code
{
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger"
}
This should return the new book:
json
Copy code
{
  "id": 1,
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger"
}
Update a book by ID: PUT http://localhost:3000/books/1

Send a JSON body:
json
Copy code
{
  "title": "1984",
  "author": "George Orwell"
}
Should return the updated book:
json
Copy code
{
  "id": 1,
  "title": "1984",
  "author": "George Orwell"
}
Delete a book by ID: DELETE http://localhost:3000/books/1

Should return a 204 No Content response.
Conclusion
You’ve successfully created a simple API for managing a list of books using Express.js and express.Router.
 You can now manage books by performing CRUD operations and testing
 your API with Postman.