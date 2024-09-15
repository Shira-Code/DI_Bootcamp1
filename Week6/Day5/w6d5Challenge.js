// Daily Challenge: Emoji Guessing Game
// Last Updated: October 16th, 2023

// What you will learn:
// Use Express to build an API
// Use Node.js modules


// Instructions
// Create a fun emoji guessing game using an Express API.
// The game will present players with a random emoji and a set of options. Players 
// need to guess the correct name of the emoji from the given options.
// The game will keep track of the player’s score and provide feedback on their guesses.

// Requirements:

// Set up an Express server to handle the game.
// Create an array of emoji objects, each containing the emoji character and its corresponding name.
// Generate a random emoji from the array and select a few incorrect options as distractors.
// Using a form, present the player with the random emoji and multiple choice options (including the correct name).
// Allow the player to submit their guess. Get the data from the form and POST it, using the Fetch API.
// Check if the guess is correct and update the player’s score.
// Provide feedback to the player, indicating whether their guess was correct or not.
// Continue presenting new emojis and options for the player to guess.
// Keep track of the player’s total score.
// Implement a leaderboard to show the top scores.
// sample emojis

// const emojis = [
//     { emoji: '😀', name: 'Smile' },
//     { emoji: '🐶', name: 'Dog' },
//     { emoji: '🌮', name: 'Taco' },
//     // Add more emoji objects
// ];


// Advanced Features (Optional):

// Add a time limit for each guess.
// Implement user authentication to save and display personalized scores.
// Use emojis from a larger dataset or an external API.
// Implement difficulty levels that affect the number of options or time limit.
// Implement a “hint” feature that provides a clue about the emoji’s name.

//index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Emoji Guessing Game</title>
// </head>
// <body>
//   <h1>Emoji Guessing Game</h1>
//   <div id="emoji-container"></div>
//   <div id="options-container"></div>
//   <div id="feedback"></div>
//   <script src="script.js"></script>
// </body>
// </html>

// //app.js

// const express = require('express');
// const cors = require('cors'); 
// const app = express();
// const port = 3001; 

// app.use(cors()); 
// app.use(express.json());
// app.use(express.static('public')); 

// const emojis = [
//   { emoji: '😀', name: 'Smile' },
//   { emoji: '🐶', name: 'Dog' },
//   { emoji: '🌮', name: 'Taco' },
//  
// ];

// app.js

// const getRandomEmoji = () => {
//   const emoji = emojis[Math.floor(Math.random() * emojis.length)];
//   const options = [emoji.name];
//   while (options.length < 4) {
//     const distractor = emojis[Math.floor(Math.random() * emojis.length)].name;
//     if (!options.includes(distractor)) {
//       options.push(distractor);
//     }
//   }
//   return {
//     emoji: emoji.emoji,
//     options: options.sort(() => Math.random() - 0.5),
//     answer: emoji.name
//   };
// };

// let playerScore = 0;

// 
// app.get('/api/emoji', (req, res) => {
//   res.json(getRandomEmoji());
// });

// 
// app.post('/api/guess', (req, res) => {
//   const { guess, answer } = req.body;
//   if (guess === answer) {
//     playerScore++;
//     res.json({ correct: true, score: playerScore });
//   } else {
//     res.json({ correct: false, score: playerScore });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });

//script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const emojiContainer = document.getElementById('emoji-container');
//     const optionsContainer = document.getElementById('options-container');
//     const feedback = document.getElementById('feedback');
  
//     const fetchEmoji = async () => {
//       const response = await fetch('http://localhost:3001/api/emoji'); // Ensure this URL matches the server port
//       if (!response.ok) {
//         throw new Error('Failed to fetch emoji');
//       }
//       return response.json();
//     };
  
//     const displayEmoji = async () => {
//       try {
//         const data = await fetchEmoji();
//         emojiContainer.textContent = data.emoji;
//         optionsContainer.innerHTML = '';
//         data.options.forEach(option => {
//           const button = document.createElement('button');
//           button.textContent = option;
//           button.onclick = () => submitGuess(option, data.answer);
//           optionsContainer.appendChild(button);
//         });
//       } catch (error) {
//         feedback.textContent = `Error: ${error.message}`;
//       }
//     };
  
//     const submitGuess = async (guess, answer) => {
//       try {
//         const response = await fetch('http://localhost:3001/api/guess', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ guess, answer }),
//         });
//         if (!response.ok) {
//           throw new Error('Failed to submit guess');
//         }
//         const result = await response.json();
//         feedback.textContent = result.correct ? `Correct! Your score is ${result.score}` : `Wrong! Your score is ${result.score}`;
//         displayEmoji();
//       } catch (error) {
//         feedback.textContent = `Error: ${error.message}`;
//       }
//     };
  
//     displayEmoji();
//   });
  