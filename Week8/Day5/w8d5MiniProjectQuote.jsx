// Mini-Project: Random Quote Generator
// Last Updated: March 7th, 2024


// What you will learn:
// React
// React state
// React Component
// Event Handler


// What you will create
// Build a Random Quote Generator with React


// image



// Instructions
// You can check out the demo here https://di-random-quotes.surge.sh/

// Download this file https://github.com/devtlv/RandomQuotesProject-JSBOOTCAMP-Week8Day5
// containing a list of quotes and authors. You can also clone the repo.  This is a sample of the file
// QuotesDatabase.js  

// const quotes=[
// 	{
// 	"quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
// 	"author": "Thomas Edison"
// 	}, {
// 	"quote": "You can observe a lot just by watching.",
// 	"author": "Yogi Berra"
// 	}, {
// 	"quote": "A house divided against itself cannot stand.",
// 	"author": "Abraham Lincoln"
// 	}, 
// ]
// export default quotes

// You will display in a box :
// a random quote as a header,
// below the author of the quote,
// and a button that when clicked on, calls a function that:
// generates a new quote from the array of objects and replaces the current one. Make sure to not display the same quote twice.
// changes randomly the color of the background, the color of the header quote and the color of the button.
// Good luck!

//app.jsx
// import React from "react";
// import RandomQuote from "./RandomQuote"; // Import the RandomQuote component
// //import "./App.css"; // Import your CSS file

// const App = () => {
//   return (
//     <div className="App">
      
//       <RandomQuote />
//     </div>
//   );
// };

// export default App;

//app.css
// .App {
//   font-family: Arial, sans-serif;
//   text-align: center;
//   margin-top: 50px;
// }

// button {
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 10px 20px;
//   font-size: 16px;
//   cursor: pointer;
// }

// button:hover {
//   background-color: #45a049;
// }

//main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

//RandomQuote.jsx

// import React, { useState } from "react";
// import quotes from "./QuotesDatabase"; // Import the quotes from QuotesDatabase.js

// const RandomQuote = () => {
//   // Function to generate a random color, avoiding white
//   const getRandomColor = () => {
//     let randomColor;
//     do {
//       randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//       // Ensure that the color is 7 characters long and not white
//     } while (randomColor === "#ffffff" || randomColor.length !== 7);
//     return randomColor;
//   };

//   // Set initial quote and background color to avoid white
//   const [quote, setQuote] = useState(quotes[0]);
//   const [bgColor, setBgColor] = useState(getRandomColor());

//   const getRandomQuote = () => {
//     let randomIndex = Math.floor(Math.random() * quotes.length);
//     let newQuote = quotes[randomIndex];

//     // Ensure the new quote is different from the current quote
//     while (newQuote.quote === quote.quote) {
//       randomIndex = Math.floor(Math.random() * quotes.length);
//       newQuote = quotes[randomIndex];
//     }

//     setQuote(newQuote);

//     // Set a new random background color, ensuring it's not white
//     setBgColor(getRandomColor());
//   };

//   return (
//     <>
//       <style>
//         {`
//           html, body {
//             margin: 0;
//             padding: 0;
//             height: 100%;
//             overflow: hidden; /* Prevent scrolling */
//           }
//           #root {
//             height: 100%;
//           }
//         `}
//       </style>

//       <div
//         style={{
//           backgroundColor: bgColor,
//           minHeight: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "20px",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "white",
//             padding: "20px",
//             borderRadius: "10px",
//             maxWidth: "500px",
//             margin: "0 auto",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <h1>{quote.quote}</h1>
//           <h4 style={{ textAlign: "right" }}>- {quote.author}</h4>
//           <div style={{ display: "flex", justifyContent: "flex-end" }}>
//             <button
//               onClick={getRandomQuote}
//               style={{
//                 backgroundColor: bgColor, // Set button color to the same as the background
//                 padding: "10px",
//                 border: "none",
//                 borderRadius: "5px",
//                 color: "white", // White text for contrast
//                 cursor: "pointer",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
//               }}
//             >
//               Get New Quote
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RandomQuote;

//index.html
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Vite + React</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html>



