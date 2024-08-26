// Daily challenge: Stars
// Last Updated: September 22nd, 2023

// What You will learn :
// For loops and nested for loops


// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


//  One Loop:

// let pattern = '';
// const rows = 6;

// for (let i = 1; i <= rows; i++) {
//   pattern += '* '; 
//   console.log(pattern.trim()); 
// }


// Nested loops:

// const totalRows = 6;

// for (let i = 1; i <= totalRows; i++) {
//   let rowPattern = '';
  
//   for (let j = 1; j <= i; j++) {
//     rowPattern += '* '; //will append *s
//   }
  
//   console.log(rowPattern.trim()); 

// trim rids of trailing character


