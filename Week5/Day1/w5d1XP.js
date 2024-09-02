// Exercises XP
// Last Updated: September 22nd, 2023

// What you will learn:
// JS scope
// Ternary operator
// Template Strings
// Advanced functions
// Arrow functions


🌟 Exercise 1 : Scope
Instructions
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
//alert will display :inside the funcOne function 3
// because a is initially set to 5, and  5 > 1, a is reassigned to 3 within the if block.

funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? 
//TypeError will be displayed because trying to reassign a to 3, and const variables cannot be reassigned after their initial declaration


//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()  
// alert will display :inside the funcThree function 0 because funcTwo hasn't been called yet and a remains 0
funcTwo()
//will set a to 5
funcThree()
//  he alert will display:  inside the funcThree function  because funcTwo was called, and a was updated to 5.


// #2.2 What will happen if the variable is declared 
// with const instead of let ?  funcTwo will caus TypeError because it attempts to reassign a const variable. 
// the first funcThree() would alert "0", but calling funcTwo() would produce an error and prevent the second funcThree() from running


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()  // will assign the str hello to the global a property on the window object
funcFive()  // will alert: inside the funcFive function hello bc a was set to "hello" globally by funcFour()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()  //// with const instead of let ? alert will display :inside the funcSix function test bc the a inside funcSix is a new variable scoped to that function, shadowing the outer a with the val 1

// #4.2 What will happen if the variable is declared 
//result will be  same as long as there is no reassignment bc const allows variable shadowing.  alert will still display "inside the funcSix function test
//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// first alert will display "in the if block 5" bc a is set to 5 within the if block, second alert will display "outside of the if block 2" because the a inside the if block is block-scoped and doesn't affect the outer a

// #5.2 What will happen if the variable is declared 
// with const instead of let ? 
//will be the same as long as there is no reassignment within the block,
// first alert will display "in the if block 5",  second will display "outside of the if block 2"
// if reassignment were attempted within the blocks, an error would occur



// 🌟 Exercise 2 : Ternary operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


// const winBattle = () => true;
// const experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);


// 🌟 Exercise 3 : Is it a string ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:
// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0]));


// const isString = value => typeof value === 'string';
// console.log(isString('hello')); // true
// console.log(isString([1, 2, 4, 0])); // false



// 🌟 Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// const sum = (a, b) => a + b;
// console.log(sum(5, 3)); 


// 🌟 Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.


// function kgToGrams(weightInKg) {
//     return weightInKg * 1000;
// }

// console.log(kgToGrams(5));

// const convertKgToGrams = function(weightInKg) {
//     return weightInKg * 1000;
// };

// console.log(convertKgToGrams(3));

// const kgToGramsArrow = weightInKg => weightInKg * 1000;
// console.log(kgToGramsArrow(7)); 

// 🌟 Exercise 6 : Fortune teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

//html

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Future Prediction</title>
// </head>
// <body>
//     <div id="prediction"></div>

//     <script src="script.js"></script>
// </body>
// </html>

// //js

// (function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
//     const prediction = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    
//     const predictionDiv = document.getElementById('prediction');
//     predictionDiv.textContent = prediction;
// })(12, 'Hava', 'Tel Aviv', 'Professional Surfer');



// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Welcome John</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <nav id="navbar">
//         <!-- Other navbar items -->
//     </nav>

//     <script src="script.js"></script>
// </body>
// </html>


//css

{/* #navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #333;
    color: white;
}

#user-info {
    display: flex;
    align-items: center;
    gap: 10px;
}

#user-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
} */}


// //js    
{/* 
(function(userName) {
const navbar = document.getElementById('navbar');

const userDiv = document.createElement('div');
userDiv.id = 'user-info';

const profilePic = document.createElement('img');
profilePic.src = 'https://www.whitehouse.gov/wp-content/uploads/2021/04/V20210305LJ-0043-cropped.jpg?resize=1536,1152'; 
profilePic.alt = 'Profile Picture';

const userNameSpan = document.createElement('span');
userNameSpan.textContent = `Welcome, ${userName}`;

userDiv.appendChild(profilePic);
userDiv.appendChild(userNameSpan);

navbar.appendChild(userDiv);
})('Kamala'); */}



// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// function makeJuice(size) {
//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//         const sentence = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
//         document.body.innerHTML += `<p>${sentence}</p>`;
//     }

//     addIngredients("apple", "banana", "orange");
// }

// makeJuice("large");

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

// function makeJuice(size) {
//     let ingredients = [];

//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//         ingredients.push(ingredient1, ingredient2, ingredient3);
//     }

//     function displayJuice() {
//         const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
//         document.body.innerHTML += `<p>${sentence}</p>`;
//     }

//     // Adding ingredients in two steps
//     addIngredients("apple", "banana", "orange");
//     addIngredients("kiwi", "mango", "pineapple");

//     // Display the final juice
//     displayJuice();
// }

// // Invoke the function
// makeJuice("large");
