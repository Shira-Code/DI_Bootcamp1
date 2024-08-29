// What we will learn:
// Working with the DOM
// Event Handlers
// Forms


// 🌟 Exercise 1 : Change the article
// Instructions
// // Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.
// Using DOM methods, remove the last paragraph in the <article> tag.
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// exercise1 html

// <!DOCTYPE html>
// <html lang="en"> 
   
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Chocolate Facts</title>
// </head>
// <body>
//     <article>
//         <h1>Some Facts</h1>
//         <h2>The Chocolate</h2>
//         <h3>History of the Chocolate</h3>
//         <p>Chocolate is made from tropical Theobroma cacao tree seeds. 
//         Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//         <p>After the European discovery of the Americas, chocolate became 
//         very popular in the wider world, and its demand exploded.</p>
//         <p>Chocolate has since become a popular food product that millions enjoy every day, 
//         thanks to its unique, rich, and sweet taste.</p> 
//         <p>But what effect does eating chocolate have on our health?</p>
//     </article>

//     <button id="bold-button">Make Paragraphs Bold</button>

//     <script src="w4d4XP.js"></script>
// </body>
// </html>
// exercise 1 js:

// const h1 = document.querySelector('h1');
// console.log(h1);

// const article = document.querySelector('article');
// const lastParagraph = article.lastElementChild;
// if (lastParagraph.tagName === 'P') {
//     article.removeChild(lastParagraph);
// }

// const h2 = document.querySelector('h2');
// h2.addEventListener('click', () => {
//     h2.style.backgroundColor = 'red';
// });

// const h3 = document.querySelector('h3');
// h3.addEventListener('click', () => {
//     h3.style.display = 'none';
// });

// const boldButton = document.getElementById('bold-button');
// boldButton.addEventListener('click', () => {
//     const paragraphs = document.querySelectorAll('article p');
//     paragraphs.forEach(paragraph => {
//         paragraph.style.fontWeight = 'bold';
//     });
// });


// h1.addEventListener('mouseover', () => {
//     const randomSize = Math.floor(Math.random() * 101);
//     h1.style.fontSize = `${randomSize}px`;
// });

// const secondParagraph = article.querySelectorAll('p')[1];
// secondParagraph.addEventListener('mouseover', () => {
//     secondParagraph.style.transition = 'opacity 1s ease';
//     secondParagraph.style.opacity = '0';
// });
// secondParagraph.addEventListener('mouseout', () => {
//     secondParagraph.style.opacity = '1';
// });


// 🌟 Exercise 2 : Work with forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.    
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

//exercise 2 html:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Form Exercise 2</title>
// </head>
// <body>
//     <form id="userForm">
//         <label for="fname">First name:</label><br>
//         <input type="text" id="fname" name="firstname"><br>
//         <label for="lname">Last name:</label><br>
//         <input type="text" id="lname" name="lastname"><br><br>
//         <input type="submit" value="Submit" id="submit">
//     </form> 
//     <ul class="usersAnswer"></ul>

//     <script src="w4d4XP.js"></script>
// </body>
// </html> 

// exercise 2 js:  

// const form = document.getElementById('userForm');
// console.log(form);

// const firstNameInput = document.getElementById('fname');
// const lastNameInput = document.getElementById('lname');
// console.log(firstNameInput, lastNameInput);

// const firstNameByName = document.querySelector('input[name="firstname"]');
// const lastNameByName = document.querySelector('input[name="lastname"]');
// console.log(firstNameByName, lastNameByName);

// form.addEventListener('submit', function(event) {
//     // Prevent the default form submission
//     event.preventDefault();

//     const firstNameValue = firstNameInput.value.trim();
//     const lastNameValue = lastNameInput.value.trim();

//     if (firstNameValue === "" || lastNameValue === "") {
//         alert("Please fill in both your first name and last name.");
//         return;
//     }
//     const ul = document.querySelector('.usersAnswer');
//     ul.innerHTML = ''; // Clear any previous list items

//     const firstNameLi = document.createElement('li');
//     firstNameLi.textContent = firstNameValue;

//     const lastNameLi = document.createElement('li');
//     lastNameLi.textContent = lastNameValue;

//     ul.appendChild(firstNameLi);
//     ul.appendChild(lastNameLi);
// });



// 🌟 Exercise 3 : Transform the sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>

// In the JS file:
// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// Exercise 3 html:

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Bold Items Interaction</title>
// </head>
// <body>
//     <p id="myParagraph">
//         <strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
//         <strong>end</strong> you <strong>will</strong> be great Developers!
//         <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons.
//     </p>

//      <script src="w4d4XP.js"></script> 
// </body>
// </html>

// Exercise 3 js:

// let allBoldItems;

// function getBoldItems() {
//     allBoldItems = document.querySelectorAll('#myParagraph strong');
// }

// function highlight() {
//     allBoldItems.forEach(item => {
//         item.style.color = 'blue';
//     });
// }

// function returnItemsToDefault() {
//     allBoldItems.forEach(item => {
//         item.style.color = 'black';
//     });
// }

// getBoldItems();

// const paragraph = document.getElementById('myParagraph');
// paragraph.addEventListener('mouseover', highlight);
// paragraph.addEventListener('mouseout', returnItemsToDefault);


// 🌟 Exercice 4 : Volume of a sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 

// Exercise 4 html and js inside html file:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top: 30px;
//             } 
//             label, input {
//                 display: block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form id="MyForm"> 
//             <label for="radius">Radius</label>
//             <input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label>
//             <input type="text" name="volume" id="volume" readonly> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form>

//         <script>
//             document.getElementById('MyForm').addEventListener('submit', function(e) {
//                 e.preventDefault();
//                 let radius = document.getElementById('radius').value;
//                 let volume = (4/3) * Math.PI * Math.pow(radius, 3);
//                 document.getElementById('volume').value = volume.toFixed(2);
//             });
//         </script>
//     </body> 
// </html>