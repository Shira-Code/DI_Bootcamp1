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

/// math.js

// Function to multiply two numbers
export function multi(a, b) {
    return a * b;
}

// Function to divide two numbers
export function divide(a, b) {
    return a / b;
}

// Function to add two numbers
export function plus(a, b) {
    return a + b;
}

// Function to subtract two numbers
export function minus(a, b) {
    return a - b;
}

// Export all the functions using module.exports
// module.exports = {
//     multi,
//     divide,
//     plus,
//     minus
// };
