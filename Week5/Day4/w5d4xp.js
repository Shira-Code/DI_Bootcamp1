// Exercises XP
// Last Updated: September 22nd, 2023

// What we will learn
// HTTP & Forms


// 🌟 Exercise 1 : HTML Form
// Instructions
// Hint : Read about sending form data using the HTTP protocol

// form

// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?  it appears in the URL 

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Form with GET Method</title>
// </head>
// <body>

//     <h3>Form with GET method</h3>
//     <form action="" method="GET">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name" required><br><br>

//         <label for="message">Message:</label>
//         <textarea id="message" name="message" required></textarea><br><br>

//         <input type="submit" value="Send">
//     </form>

// </body>
// </html>

// {

// 🌟 Exercise 2 : HTML Form #2
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab - 

// The submitted dat displays in the network tab, under the payload section in the after clicking on red failed request
// it failed w/405 The 405 Method Not Allowed error occurs because the browser is trying to send a POST request to the same HTML file, 
// but my local server or browser isn't configured to handle POST requests to static HTML files

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Form with POST Method</title>
// </head>
// <body>

//     <h3>Form with POST method</h3>
//     <form action="" method="POST">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name" required><br><br>

//         <label for="message">Message:</label>
//         <textarea id="message" name="message" required></textarea><br><br>

//         <input type="submit" value="Send">
//     </form>

// </body>
// </html>


// 🌟 Exercise 3 : JSON Mario
// Instructions
// Using this code:

// const marioGame = {
//   detail : "An amazing game!",
//   characters : {
//       mario : {
//         description:"Small and jumpy. Likes princesses.",
//         height: 10,
//         weight: 3,
//         speed: 12,
//       },
//       bowser : {
//         description: "Big and green, Hates princesses.",
//         height: 16,
//         weight: 6,
//         speed: 4,
//       },
//       princessPeach : {
//         description: "Beautiful princess.",
//         height: 12,
//         weight: 2,
//         speed: 2,
//       }
//   },
// }
// Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger. */}

// const marioGame = {
//   detail: "An amazing game!",
//   characters: {
//     mario: {
//       description: "Small and jumpy. Likes princesses.",
//       height: 10,
//       weight: 3,
//       speed: 12,
//     },
//     bowser: {
//       description: "Big and green, Hates princesses.",
//       height: 16,
//       weight: 6,
//       speed: 4,
//     },
//     princessPeach: {
//       description: "Beautiful princess.",
//       height: 12,
//       weight: 2,
//       speed: 2,
//     },
//   },
// };

// const newStringify = JSON.stringify(marioGame, null, 2);
// console.log(newStringify);
