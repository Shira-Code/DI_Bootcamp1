// Create a Trivia Quiz Game with Express.js and express.Router
// Instructions
// 1. Set up a new Express.js application.
// 2. Create a trivia quiz model with a set of hard-coded questions and answers.
// 3. Implement the following routes using express.Router:

// GET /quiz: Start the quiz and display the first question.
// POST /quiz: Submit an answer to the current question and move to the next question.
// GET /quiz/score: Display the user’s final score at the end of the quiz.
// 4. Keep track of the user’s score as they progress through the quiz.
// 5. Provide appropriate feedback on correct and incorrect answers.
// 6. Implement simple game logic such as displaying the next question after answering one.

// Sample trivia quiz questions and answers (hard-coded for simplicity)

// const triviaQuestions = [
//   {
//     question: "What is the capital of France?",
//     answer: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answer: "Mars",
//   },
//   {
//     question: "What is the largest mammal in the world?",
//     answer: "Blue whale",
//   },
// ];


To create the Trivia Quiz Game using Express.js and express.Router, along with nodemon for auto-reload,
 here’s how you can set it up step by step:

Initialize the project: Open your terminal and create a new directory for the project. 
Navigate into it and initialize a new Node.js project:

bash
Copy code
mkdir trivia-quiz-game
cd trivia-quiz-game
npm init -y
Install the necessary dependencies: Install Express and nodemon:

bash
Copy code
npm install express
npm install --save-dev nodemon
Set up the package.json script to use nodemon: In the package.json, modify the scripts section to use nodemon
 for running the app:

json
Copy code
"scripts": {
  "start": "nodemon app.js"
}
Create the Express app and routes:

Create an app.js file, and inside, define the routes using express.Router:

js
Copy code
const express = require('express');
const app = express();
const port = 3000;

// Set up middleware to handle JSON requests
app.use(express.json());

// Create the trivia questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

let currentQuestionIndex = 0;
let playerScore = 0;

// Set up Router
const quizRouter = express.Router();

// GET /quiz - Display the first question
quizRouter.get('/', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
  } else {
    res.redirect('/quiz/score');
  }
});

// POST /quiz - Submit answer and move to the next question
quizRouter.post('/', (req, res) => {
  const { answer } = req.body;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (answer === correctAnswer) {
    playerScore++;
    res.json({ correct: true, message: 'Correct answer!' });
  } else {
    res.json({ correct: false, message: `Wrong! The correct answer was ${correctAnswer}.` });
  }

  currentQuestionIndex++;

  // If there are more questions, redirect to the next one
  if (currentQuestionIndex < triviaQuestions.length) {
    res.redirect('/quiz');
  } else {
    res.redirect('/quiz/score');
  }
});

// GET /quiz/score - Display the final score
quizRouter.get('/score', (req, res) => {
  res.json({ message: `Quiz over! Your final score is ${playerScore}/${triviaQuestions.length}` });
  // Reset for next quiz attempt
  currentQuestionIndex = 0;
  playerScore = 0;
});

// Use the quizRouter for /quiz routes
app.use('/quiz', quizRouter);

// Start the server
app.listen(port, () => {
  console.log(`Trivia Quiz Game running at http://localhost:${port}`);
});
Run the application: Start the application using nodemon:

bash
Copy code
npm start
Test the application: Open Postman or your browser and make the following requests:

GET http://localhost:3000/quiz – This will display the first trivia question.
POST http://localhost:3000/quiz with a JSON body containing the player's answer:
json
Copy code
{ "answer": "Paris" }
GET http://localhost:3000/quiz/score – This will display the final score after all questions are answered.
This will get your Trivia Quiz Game up and running with Express.js and express.Router.



To create the Trivia Quiz Game using Express.js and express.Router, along with nodemon for auto-reload, 
here’s how you can set it up step by step:

Initialize the project: Open your terminal and create a new directory for the project. Navigate into it 
and initialize a new Node.js project:

bash
Copy code
mkdir trivia-quiz-game
cd trivia-quiz-game
npm init -y
Install the necessary dependencies: Install Express and nodemon:

bash
Copy code
npm install express
npm install --save-dev nodemon
Set up the package.json script to use nodemon: In the package.json, modify the scripts section to use nodemon
 for running the app:

json
Copy code
"scripts": {
  "start": "nodemon app.js"
}
Create the Express app and routes:

Create an app.js file, and inside, define the routes using express.Router:

js
Copy code
const express = require('express');
const app = express();
const port = 3000;

// Set up middleware to handle JSON requests
app.use(express.json());

// Create the trivia questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" }
];

let currentQuestionIndex = 0;
let playerScore = 0;

// Set up Router
const quizRouter = express.Router();

// GET /quiz - Display the first question
quizRouter.get('/', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
  } else {
    res.redirect('/quiz/score');
  }
});

// POST /quiz - Submit answer and move to the next question
quizRouter.post('/', (req, res) => {
  const { answer } = req.body;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (answer === correctAnswer) {
    playerScore++;
    res.json({ correct: true, message: 'Correct answer!' });
  } else {
    res.json({ correct: false, message: `Wrong! The correct answer was ${correctAnswer}.` });
  }

  currentQuestionIndex++;

  // If there are more questions, redirect to the next one
  if (currentQuestionIndex < triviaQuestions.length) {
    res.redirect('/quiz');
  } else {
    res.redirect('/quiz/score');
  }
});

// GET /quiz/score - Display the final score
quizRouter.get('/score', (req, res) => {
  res.json({ message: `Quiz over! Your final score is ${playerScore}/${triviaQuestions.length}` });
  // Reset for next quiz attempt
  currentQuestionIndex = 0;
  playerScore = 0;
});

// Use the quizRouter for /quiz routes
app.use('/quiz', quizRouter);

// Start the server
app.listen(port, () => {
  console.log(`Trivia Quiz Game running at http://localhost:${port}`);
});
Run the application: Start the application using nodemon:

bash
Copy code
npm start
Test the application: Open Postman or your browser and make the following requests:

GET http://localhost:3000/quiz – This will display the first trivia question.
POST http://localhost:3000/quiz with a JSON body containing the player's answer:
json
Copy code
{ "answer": "Paris" }
GET http://localhost:3000/quiz/score – This will display the final score after all questions are answered.
This will get your Trivia Quiz Game up and running with Express.js and express.Router.