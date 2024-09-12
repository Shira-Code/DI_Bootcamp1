// JavaScript Instructor
// 10:33 AM
// /**
//  * Create a new Folder - math
//  * Create a file math.js
//  * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
//  * return the a * b, a / b, a + b, a -b
//  * Test these functions
//  * create a module from math.js
//  * use this functions in app.js
//  */

// app.js
// app.js
// const {multi, divide, plus, minus} = require('./math.js');
//const math = require('./math.js');  // Adjust the path if math.js is in a folder called 'math'//
import {multi, divide, plus, minus} from './math.js';
//  const math = require('./math.js'); 
try {
    multi(10, 5);
} catch (error) {
    console.log('Error: ' + error.message);
}

const a = 10;
const b = 5;

try {
    multi(10, 5);
} catch (error) {
    console.log('Error: ' + error.message);
}


console.log(`Multiplication: ${multi(a, b)}`);  // Calls multi function
console.log(`Division: ${divide(a, b)}`);       // Calls divide function
console.log(`Addition: ${plus(a, b)}`);         // Calls plus function
console.log(`Subtraction: ${minus(a, b)}`);     // Calls minus function
