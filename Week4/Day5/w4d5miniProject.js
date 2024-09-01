// Mini Project - Coloring Game
// Last Updated: September 22nd, 2023

// What You Will Create:
// You can see the working project here
// https://devtlv.github.io/coloring_squares/

// Select a color
// Draw what you want

// What you will learn
// DOM Events
// DOM tree


// Project Brief
// Welcome to Coloring Squares.

// Your task is to build a coloring game similar to the working project above.

// You will need to use HTML, CSS and JS to accomplish this task.

// A few things to think about…
// HTML, CSS:

// How will you make the grid of colors?
// How will you make the grid of blank squares?
// Hint… GRID :P
// JS:

// How does a user choose a color?
// How does drawing work? How can you tell when the user is clicking and dragging?
// Hint, look at the JS events mousedown, mouseup, and mouseover.

//css below

// * {
//     box-sizing: border-box;
// }

// body {
//     margin: 0;
//     padding: 0;
// }

// #container {
//     height: 100vh;
//     display: grid;
//     grid-template-columns: 1fr 4fr;
//     background-color: darkgrey;
//     padding: 5px;
// }

// #sidebar {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     grid-template-rows: repeat(8, 1fr);
//     gap: .5rem;
//     padding-inline: .5rem;
// }

// #sidebar>* {
//     border: 1px solid black;
// }

// #sidebar .clear {
//     grid-column: 1 / -1;

// }

// #sidebar .clear button {
//     border-radius: .25rem;
//     height: 100%; 
//     width: 100%; 
//     cursor: pointer;
// } 

// .color {
//     background-color: white;
//     border: 1px solid black; 
//     cursor: pointer;
// }

// #main {
//     display: grid;
//     grid-template-columns: repeat(60, 1fr);
// }

// #main>* {
//     border: 1px solid lightgrey;
//     background-color: white;
// }



//html below

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Color</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div id="container">
//      <div id="sidebar">
//         <div class="clear"><button>Clear</button></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
//             <div class="color"></div>
            
   
//     </div>
//     <div id="main">
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>    
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//             <div></div>
//         </div>
        
//     <script src="index.js"></script>
// </body>
// </html>



//js below

// generateColors()
// let currentColor
// listenToMain()
// let isMousePressed = false
// const button = document.querySelector(".clear button")
// listenToClearButton()


// function listenToClearButton() {
//    button?.addEventListener("click", clearCanvas) 
// }

// function clearCanvas() {
//     currentColor = null
//     const squares = document.querySelectorAll("#main > div")
//     for (const square of squares) {
//         square.style.backgroundColor = "white"
//     }
//     button.style.backgroundColor = "white"
// }

// function listenToMain() {
//     const main = document.getElementById("main")
//     main.addEventListener("mousedown", handleClick)
//     main.addEventListener("mousemove", handleMove)
//     document.body.addEventListener("mouseup", handleMouseRelease)
// }

// function handleMouseRelease() {
//     isMousePressed = false
// }

// function handleClick() {
//     if (currentColor == null) return
//     isMousePressed = true
//     }

// function handleMove(e) {
//     if (!isMousePressed) return
//     const hoveredDiv = document.elementFromPoint(e.x, e.y)
//     hoveredDiv.style.backgroundColor = currentColor
// }

// function generateColors() {
//     const colorDivs = document.querySelectorAll(".color")
//     for (const colorDiv of colorDivs) {
//         const randomColor = generateRandomColor()
//         colorDiv.style.backgroundColor = randomColor
//         colorDiv.dataset.color = randomColor
//         colorDiv.addEventListener("click", setCurrentColor)
//     }
    
// }

// function generateRandomColor() {
//     const hex = Math.floor(Math.random() * 16777215).toString(16)
//     return '#' + hex 
// }

// function setCurrentColor(e) {
//     const chosenColor = e.target.dataset.color
//     currentColor = chosenColor
//     button.style.backgroundColor = chosenColor
// }