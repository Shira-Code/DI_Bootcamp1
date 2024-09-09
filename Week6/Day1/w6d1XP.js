// Exercises XP
// Last Updated: September 22nd, 2023

// What you will learn:
// Promises


// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.


// Test:

// //In the example, the promise should resolve

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// const compareToTen = (num) => {
//     return new Promise((resolve, reject) => {
//       if (num <= 10) {
//         resolve(`${num} is less than or equal to 10.`);
//       } else {
//         reject(`${num} is greater than 10.`);
//       }
//     });
//   };
  

  // compareToTen(15)
  //   .then(result => console.log(result))
  //   .catch(error => console.log(error)); 
  

  // compareToTen(8)
  //   .then(result => console.log(result))
  //   .catch(error => console.log(error)); 
  


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

// const morseJSON = `{
//   "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
//   "6": "-....", "7": "--...", "8": "---..", "9": "----.", "a": ".-", "b": "-...",
//   "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..",
//   "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.",
//   "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--",
//   "x": "-..-", "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..",
//   "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
// }`;

// const toJs = () => {
//   return new Promise((resolve, reject) => {
//     const morseJS = JSON.parse(morseJSON);
//     if (Object.keys(morseJS).length === 0) {
//       reject("Error: Morse object is empty");
//     } else {
//       resolve(morseJS);
//     }
//   });
// };

// const toMorse = (morseJS) => {
//   return new Promise((resolve, reject) => {
//     const input = prompt("Enter a word or sentence:").toLowerCase();
//     const translation = [];

//     for (let char of input) {
//       if (morseJS[char]) {
//         translation.push(morseJS[char]);
//       } else {
//         reject(`Error: Character "${char}" is not valid in Morse code.`);
//         return;
//       }
//     }

//     resolve(translation);
//   });
// };

// const joinWords = (morseTranslation) => {
//   const morseString = morseTranslation.join('\n');
//   document.body.innerHTML = `<pre>${morseString}</pre>`;
// };

// toJs()
//   .then(morseJS => toMorse(morseJS))
//   .then(morseTranslation => joinWords(morseTranslation))
//   .catch(error => console.log(error));

  
// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


// const resolveWithValue = Promise.resolve(3);

// resolveWithValue
//   .then(result => console.log(result)) 
//   .catch(error => console.log(error));


//   const rejectWithError = Promise.reject("Boo!");

// rejectWithError
//   .then(result => console.log(result))
//   .catch(error => console.log(error)); 
