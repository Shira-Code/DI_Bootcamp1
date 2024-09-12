// Import the necessary modules
import { greet } from './greeting.js';
import { displayColorfulMessage } from './colorful-message.js';
import { readFileContent } from './files/read-file.js';

// Greet the user
console.log(greet('John Doe'));

// Display a colorful message
displayColorfulMessage();

// Read and display the content of the file
readFileContent();
