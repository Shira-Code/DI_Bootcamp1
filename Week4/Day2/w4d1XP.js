// What we will learn:
// Variables
// Conditionals
// Loops
// Objects


// 🌟 Exercise 1 : List of people
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// Write code that gives the index of “Foo”. Why does it return -1 ?
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);

// //remove “Greg” 
// people.shift(); // ["Mary", "Devon", "James"]
// console.log(people);

// //replace “James” to “Jason”
// people[people.indexOf("James")] = "Jason"; // ["Mary", "Devon", "Jason"]
// console.log(people);

// // Add your name to the end of the people array.
// people.push("Shira"); // ["Mary", "Devon", "Jason", "Shira"]
// console.log(people);

// // Console log Mary’s index.
// console.log(people.indexOf("Mary")); // 0

// // Write code to make a copy of the people array using the slice method
// // Make a copy of the people array that does not include "Mary" or "YourName".
//  const copy = people.slice(1, -1); // ["Devon", "Jason"]
//  console.log(copy);
//  console.log(people);

// // // Find the index of "Foo". It will return -1 because "Foo" is not in the array.
// console.log(people.indexOf("Foo")); // -1

// // // Create a variable called last that stores the last element of the array.
// const last = people[people.length - 1]; // "Shira"
// console.log(last);


// // Part II - Loops
// // Using a loop, iterate through the people array and console.log each person.
// // Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// // Hint: take a look at the break statement in the lesson.



// // 1. Loop to iterate through the people array and console.log each person.
// console.log("list before first for loop:  " + people);
// for (let i = 0; i < people.length; i++) {
//   console.log("first for loop:  " + people[i]);
// }

// // 2. Loop to iterate through the people array and exit after console.logging "Devon".
// for (let i = 0; i < people.length; i++) {
//   console.log("second for loop exit when devon found :  " + people[i]);
//   if (people[i] === "Devon") {
//     break; // Exit  loop when devon is found.
//   }
// }


// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// let colors = ["blue", "red", "yellow", "green", "orange"];
// const suffixes = ["st", "nd", "rd", "th", "th"]; // Suffixes for the #s

// for (let i = 0; i < colors.length; i++) {
//   const suffix = suffixes[i] || "th"; // change suffix or default is "th"
//   console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
// }

// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
//for web console
// function promptForNumber() {
//   let number;
//   while (true) { 
//     let input = prompt("Please enter a number greater than or equal to 10:");
//     number = Number(input);
//     console.log(`Type of the input: ${typeof number}`); 
//     if (!isNaN(number) && number >= 10) {
//       break; 
//     } else {
//       alert("The number is smaller than 10 or not a valid number. Please try again.");
//     }
//   }
//   alert("You entered a number greater than or equal to 10!");
// }
// //**for terminal with node
// promptForNumber();
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// let number;
// function promptForNumber() {
//   rl.question("Please enter a number greater than or equal to 10: ", (input) => {
//     number = Number(input); 
//     console.log(`Type of the input: ${typeof number}`); 
//     if (isNaN(number)) {
//       console.log("That's not a valid number. Please try again.");
//       promptForNumber(); 
//     } else if (number < 10) {
//       console.log("The number is smaller than 10. Please try again.");
//       promptForNumber(); 
//     } else {
//       console.log("You entered a number greater than or equal to 10!");
//       rl.close(); 
//     }
//   });
// }
// promptForNumber();



// // 🌟 Exercise 4 : Building Management
// Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// // Review about objects
// // Copy and paste the above object to your Javascript file.
// // Console.log the number of floors in the building.
// // Console.log how many apartments are on the floors 1 and 3.
// // Console.log the name of the second tenant and the number of rooms he has in his apartment.
// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// 
// const building = {
//   numberOfFloors: 4,
//   numberOfAptByFloor: {
//       firstFloor: 3,
//       secondFloor: 4,
//       thirdFloor: 9,
//       fourthFloor: 2,
//   },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//   numberOfRoomsAndRent:  {
//       sarah: [3, 990],
//       dan:  [4, 1000],
//       david: [1, 500],
//   },
// };

// console.log(`Number of floors in the building: ${building.numberOfFloors}`);
// const apartmentsFirstFloor = building.numberOfAptByFloor.firstFloor;
// const apartmentsThirdFloor = building.numberOfAptByFloor.thirdFloor;
// console.log(`Apartments on the first floor: ${apartmentsFirstFloor}`);
// console.log(`Apartments on the third floor: ${apartmentsThirdFloor}`);
// const secondTenant = building.nameOfTenants[1];
// const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
// console.log(`The second tenant is ${secondTenant} and has ${secondTenantRooms} rooms.`);
// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];
// if ((sarahRent + davidRent) > danRent) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
//   console.log("Dan's rent has been increased to 1200.");
// } else {
//   console.log("Dan's rent remains the same.");
// }
// console.log(`Dan's updated rent: ${building.numberOfRoomsAndRent.dan[1]}`);


// // 🌟 Exercise 5 : Family
// // Instructions
// // Create an object called family with a few key value pairs.
// // Using a for in loop, console.log the keys of the object.
// // Using a for in loop, console.log the values of the object.

// const family = {
//   father: "John",
//   mother: "Jane",
//   sibling: "Jack",
//   pet: "Buddy"
// };
// console.log("Keys in the family object:");
// for (let key in family) {
//   console.log(key);
// }
// console.log("Values in the family object:");
// for (let key in family) {
//   console.log(family[key]);
// }
// // Exercise 6 : Rudolf
// // Instructions
// // const details = {
// //   my: 'name',
// //   is: 'Rudolf',
// //   the: 'reindeer'
// // }
// // Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   };

//   let sentence = "";
  
//   for (let key in details) {
//     sentence += `${key} ${details[key]} `;
//   }
//   console.log(sentence.trim()); 
  

// // Exercise 7 : Secret Group
// // Instructions
// // const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// // A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// // Hint: a string is an array of letters
// // Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const firstLetters = names.map(name => name[0]);
const sortedLetters = firstLetters.sort();
const societyName = sortedLetters.join('');
console.log("secret code is :" + societyName);
