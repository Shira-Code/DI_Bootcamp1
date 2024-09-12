// Exercises XP
// Last Updated: March 10th, 2024

// What you will learn:
// Working with Node.js modules
// Working with the fs module


// Documentation to help you :
// File System documentation  https://nodejs.org/docs/latest/api/fs.html
// lodash documentation  https://www.npmjs.com/package/lodash
// lodash documentation  https://lodash.com/
// chalk documentation  https://www.npmjs.com/package/chalk


// 🌟 Exercise 1: Multiple Exports and Import using CommonJS syntax
// Instructions
// Create a file named products.js.

// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.

// Export this array using the Common JS syntax.

// Create another file named shop.js.

// In shop.js, require the product objects from the products.js module.

// Create a function that takes a product name as a parameter and searches for the corresponding product object.

// Call this function with different product names and print the details of the products.

// Run shop.js and verify that the correct product details are displayed.


// products.js

const products = [
    { name: 'Laptop', price: 999.99, category: 'Electronics' },
    { name: 'Coffee Maker', price: 49.99, category: 'Appliances' },
    { name: 'Desk Chair', price: 89.99, category: 'Furniture' },
    { name: 'Bluetooth Speaker', price: 29.99, category: 'Electronics' },
    { name: 'Smartphone', price: 799.99, category: 'Electronics' }
  ];
  
  module.exports = products;
  
// shop.js

const products = require('./products.js');


function findProductByName(name) {
  const product = products.find(product => product.name === name);
  if (product) {
    return product;
  } else {
    return `Product with name "${name}" not found.`;
  }
}

console.log(findProductByName('Laptop')); 
console.log(findProductByName('Coffee Maker')); 
console.log(findProductByName('Smartphone')); 
console.log(findProductByName('Nonexistent Product')); 



// 🌟 Exercise 2: Advanced Module Usage using ES6 module syntax
// Instructions
// Create a file named data.js.

// Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

// Export the array using the ES6 module syntax.

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.

//package.json

{
    "name": "day4",
    "version": "1.0.0",
    "main": "app.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": ""
  }

// data.js
const persons = [
    { name: 'John', age: 25, location: 'New York' },
    { name: 'Sarah', age: 30, location: 'London' },
    { name: 'Mike', age: 35, location: 'Paris' },
    { name: 'Emma', age: 28, location: 'Berlin' }
  ];
  
  export default persons;

  // app.js
import persons from './data.js';

function calculateAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / personArray.length;
  console.log(`The average age is: ${averageAge.toFixed(2)}`);
}


calculateAverageAge(persons);



// 🌟 Exercise 3: File Management using CommonJS syntax
// Instructions
// Create a file named fileManager.js.

// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

// Create a file “Hello World.txt” containing the sentence “Hello World !! “

// Create a file “Bye World.txt” containing the sentence “Bye World !! “

// Create another file named app.js.

// In app.js, import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

// Run app.js and verify that the file reading and writing operations are successful.

// fileManager.js
const fs = require('fs');


function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`File content of ${filePath}: \n${data}`);
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
  }
}

function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully wrote to file: ${filePath}`);
  } catch (err) {
    console.error(`Error writing file: ${err}`);
  }
}

module.exports = { readFile, writeFile };

// app.js
const { readFile, writeFile } = require('./fileManager');

readFile('Hello World.txt');

writeFile('Bye World.txt', 'Writing to the file');

readFile('Bye World.txt');


// 🌟 Exercise 4: Todo List using ES6 module syntax
// Instructions
// Create a directory named todoApp.

// Inside the todoApp directory, create two files: todo.js and app.js.

// In todo.js, define an ES6 module that exports a TodoList class.

// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

// Export the TodoList class.

// In app.js, import the TodoList class from the todo.js module.

// Create an instance of the TodoList class.

// Add a few tasks, mark some as complete, and list all tasks.

// Run app.js and verify that the todo list operations are working correctly.

// todo.js

export class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
    }
  
    markComplete(taskName) {
      const task = this.tasks.find(t => t.task === taskName);
      if (task) {
        task.completed = true;
      }
    }
  
    listTasks() {
      return this.tasks.map(t => `${t.task} - ${t.completed ? 'Completed' : 'Pending'}`).join('\n');
    }
  }

  // app.js
import { TodoList } from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask('Learn Node.js');
myTodoList.addTask('Practice ES6 modules');
myTodoList.addTask('Build a Todo app');

myTodoList.markComplete('Learn Node.js');

console.log(myTodoList.listTasks());



// 🌟 Exercise 5: Creating and Using a Custom Module
// Instructions
// Create a directory named math-app.

// Inside the math-app directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the lodash package, a utility library, by running npm install lodash in the terminal.

// Create a file named math.js inside the math-app directory.

// In math.js, define a simple custom module that exports functions for addition and multiplication.

// Create a file named app.js in the same directory.

// In app.js, require the lodash package and the custom math module.

// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.

// Run app.js using Node.js and verify that the calculations are correct.

// npm init -y
// npm install lodash

// math.js
function add(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  module.exports = { add, multiply };

  // app.js
const { add, multiply } = require('./math');
const _ = require('lodash');

const sum = add(5, 10);
const product = multiply(4, 7);

const arraySum = _.sum([1, 2, 3, 4, 5]);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Array Sum (using lodash): ${arraySum}`);


// 🌟 Exercise 6: Simple NPM Package Usage
// Instructions
// Create a directory named npm-beginner.

// Inside the npm-beginner directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the chalk package, which provides easy coloring for terminal output, by running npm install chalk in the terminal.

// Create a file named app.js inside the npm-beginner directory.

// In app.js, require the chalk package and use it to color and style text in the terminal.

// Write a simple script that uses chalk to print a colorful message.

// Run app.js using Node.js and observe the colorful output in the terminal.

// npm init -y
// npm install chalk

// app.js
const chalk = require('chalk');

const message = chalk
  .bgBlue.white.bold(' Hello, Node.js World! ')
  .underline
  .italic;

console.log(message);

// cd npm-beginner
//node app.js


// 🌟 Exercise 7: Reading and Copying Files
// Instructions
// Create a directory named file-explorer.

// Inside the file-explorer directory, create a file named copy-file.js.

// In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

// Create another file named read-directory.js.

// In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

// Open a terminal in the file-explorer directory.

// Run node copy-file.js to copy the content from source.txt to destination.txt.

// Run node read-directory.js to list the files in the directory.

// copy-file.js
const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the source file:', err);
    return;
  }

  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error('Error writing to the destination file:', err);
      return;
    }

    console.log('File content copied successfully!');
  });
});

// read-directory.js
const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }

  console.log('Files in the directory:');
  files.forEach(file => {
    console.log(file);
  });
});

// node copy-file.js
// node read-directory.js
