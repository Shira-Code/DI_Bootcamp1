// Daily Challenge: Node.js App & NPM
// Last Updated: September 22nd, 2023

// What you will learn :
// Working with Node.js modules
// Node.js files manipulation
// Instructions
// Create a directory named daily-challenge.

// Task 1: Basic Module System

// Inside the daily-challenge directory, create a file named greeting.js.

// In greeting.js, define a function called greet that takes a name as a parameter and returns a personalized greeting message.

// Export the greet function using the Node.js module system.

// Create another file named app.js in the same directory.

// In app.js, require the greeting.js module and use the greet function to greet a user.

// Run app.js using Node.js and see the greeting message.

//package.json

{
    "name": "dailychallenge",
    "version": "1.0.0",
    "main": "app.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "dependencies": {
      "chalk": "^5.3.0"
    }
  }

  // app.js
import { greet } from './greeting.js';

const userName = 'Shira';
console.log(greet(userName));

// greeting.js
export function greet(name) {
    return `Hello, ${name}! Welcome to the Node.js world!`;
  }
  
  

// Task 2: Using an NPM Module

// Inside the daily-challenge directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the chalk package by running npm install chalk in the terminal.

// Create a file named colorful-message.js.

// In colorful-message.js, require the chalk package and use it to create and display a colorful message in the terminal.

// Create another file named app.js.

// In app.js, require the colorful-message.js module and call the function you’ve written to display the colorful message.

// Run app.js using Node.js and see the colorful message.

//package.json

{
    "name": "dailychallenge",
    "version": "1.0.0",
    "main": "app.js",
    "type": "module",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "chalk": "^5.3.0"
    },
    "description": ""
  }
  

// colorful-message.js
import chalk from 'chalk';

export function displayColorfulMessage() {
  console.log(chalk.green('This is a green message!'));
  console.log(chalk.blue('This is a blue message!'));
  console.log(chalk.red('This is a red message!'));
}

// app.js
import { displayColorfulMessage } from './colorful-message.js';

displayColorfulMessage();



// Task 3: Advanced File Operations

// Inside the daily-challenge directory, create a directory named files.

// Inside the files directory, create a file named file-data.txt and add some text content to it.

// Create a file named read-file.js.

// In read-file.js, require the fs module and read the content from the file-data.txt file. Display the content in the terminal.

// Create another file named app.js.

// In app.js, require the read-file.js module and call the function you’ve written to display the file’s content.

// Run app.js using Node.js and see the content of the file.

// app.js
import { readFileContent } from './read-file.js';

readFileContent();

//file-data.txt
This is the content of file-data.txt


// read-file.js
import fs from 'fs';

export function readFileContent() {
    const filePath = './file-data.txt';
    
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log('File Content:', content);
}



// 4.  Challenge Task: Integrating Everything

// Create a file named challenge.js.

// In challenge.js, require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.

// Use the greet function to greet the user, display the colorful message, and read and display the file’s content.

// Run challenge.js using Node.js and see the complete challenge in action.

// By completing this challenge, you’ll have a Node.js application that demonstrates module system usage, 
// integration of NPM modules, and file operations. It’s a comprehensive exercise that brings together concepts 
// from the previous exercises into a single daily challenge.  


