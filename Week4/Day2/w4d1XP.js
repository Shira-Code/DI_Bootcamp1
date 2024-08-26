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
const people = ["Greg", "Mary", "Devon", "James"];

// shift removes the first element of the array
people.shift(); // ["Mary", "Devon", "James"]

// Replace "James" with "Jason".
people[people.indexOf("James")] = "Jason"; // ["Mary", "Devon", "Jason"]

// Add your name to the end of the people array.
people.push("YourName"); // ["Mary", "Devon", "Jason", "YourName"]

// Console log Mary’s index.
console.log(people.indexOf("Mary")); // 0

// Make a copy of the people array that does not include "Mary" or "YourName".
const copy = people.slice(1, -1); // ["Devon", "Jason"]

// Find the index of "Foo". It will return -1 because "Foo" is not in the array.
console.log(people.indexOf("Foo")); // -1

// Create a variable called last that stores the last element of the array.
const last = people[people.length - 1]; // "YourName"

// Removing "Greg": The shift() method removes the first element of the array.
// Replacing "James": The indexOf() method finds the index of "James," which is then used to replace it with "Jason."
// Adding your name: The push() method adds a new element to the end of the array.
// Finding Mary’s index: The indexOf() method returns the index of "Mary."
// Copying the array: The slice() method creates a new array that excludes the first and last elements.
// Index of "Foo": Since "Foo" is not present in the array, indexOf() returns -1.
// Finding the last element: The last element is accessed by using the array’s length property minus one (people.length - 1).

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.


// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
// const people = ["Mary", "Devon", "Jason", "YourName"];

// // 1. Loop to iterate through the people array and console.log each person.
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// // 2. Loop to iterate through the people array and exit after console.logging "Devon".
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Devon") {
//     break; // Exit the loop when "Devon" is found.
//   }
// }
// Explanation:
// Looping through the array: The first for loop iterates through each element in the people array and logs it to the console.
// Exiting the loop after logging "Devon": The second for loop also iterates through the array, but the break statement is used to exit the loop once "Devon" is logged.



// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let number;

do {
  // Prompt the user for a number
  number = prompt("Please enter a number greater than or equal to 10:");

  // Convert the input to a number
  number = Number(number);

  // Check the type of the input
  console.log(typeof number); // Should log 'number' if the conversion is successful

} while (number < 10);

console.log("You entered a number greater than or equal to 10!");
Explanation:
do...while loop: This loop executes the block of code once before checking the condition. It then continues as long as the condition is true.
prompt() function: This function is used to get input from the user. The input is always a string, so it's converted to a number using Number().
typeof operator: Used to verify the data type of the input after conversion.

// 🌟 Exercise 4 : Building Management
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


// Review about objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    }
};

// Console.log the number of floors in the building.
console.log(building.numberOfFloors); // 4

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor); // 3
console.log(building.numberOfAptByFloor.thirdFloor); // 9

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]); // "Dan"
console.log(building.numberOfRoomsAndRent.dan[0]); // 4

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, then increase Dan’s rent to 1200.
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan[1]); // 1200 if the condition was met

Explanation:
Number of floors: Accessed via building.numberOfFloors.
Apartments on floors 1 and 3: Accessed via building.numberOfAptByFloor.firstFloor and building.numberOfAptByFloor.thirdFloor.
Second tenant's name and number of rooms: Accessed via building.nameOfTenants[1] and building.numberOfRoomsAndRent.dan[0].
Rent comparison: The sum of Sarah's and David's rents is compared with Dan's rent. If the condition is met, Dan's rent is updated to 1200.

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
// Create an object called family with a few key-value pairs.
const family = {
    father: "John",
    mother: "Jane",
    son: "Jake",
    daughter: "Emily"
  };
  
  // Using a for-in loop, console.log the keys of the object.
  for (let key in family) {
    console.log(key); // Logs "father", "mother", "son", "daughter"
  }
  
  // Using a for-in loop, console.log the values of the object.
  for (let key in family) {
    console.log(family[key]); // Logs "John", "Jane", "Jake", "Emily"
  }
  

// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'reindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };
  
  // Using a for loop, console.log "my name is Rudolf the reindeer".
  let sentence = "";
  
  for (let key in details) {
    sentence += `${key} ${details[key]} `;
  }
  
  console.log(sentence.trim()); // Logs "my name is Rudolf the reindeer"
  

// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Sort the names alphabetically and create the secret society name.
const secretSocietyName = names
  .map(name => name[0]) // Get the first letter of each name
  .sort()               // Sort the letters alphabetically
  .join("");            // Join them to form the secret society name

console.log(secretSocietyName); // Logs "ABJKPS"


Family Object:
for-in loops are used to iterate over the keys and values of the family object.
Rudolf Sentence:
The for-in loop concatenates both keys and values of the details object to form the sentence.
Secret Society:
The map() method extracts the first letter of each name, sort() arranges them alphabetically, and join() combines them into a single string.