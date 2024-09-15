const express = require('express');
const cors = require('cors'); // Optional, for handling CORS
const app = express();
const port = 3005; // Change to the desired port

app.use(cors()); // Optional
app.use(express.json());
app.use(express.static('public')); // Serve static files (e.g., HTML, CSS, JS)

// Sample emoji data
const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  // Add more emoji objects
];

// Helper function to get a random emoji and options
const getRandomEmoji = () => {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const options = [emoji.name];
  while (options.length < 4) {
    const distractor = emojis[Math.floor(Math.random() * emojis.length)].name;
    if (!options.includes(distractor)) {
      options.push(distractor);
    }
  }
  return {
    emoji: emoji.emoji,
    options: options.sort(() => Math.random() - 0.5),
    answer: emoji.name
  };
};

let playerScore = 0;

// Endpoint to get a new emoji for guessing
app.get('/api/emoji', (req, res) => {
  res.json(getRandomEmoji());
});

// Endpoint to submit a guess
app.post('/api/guess', (req, res) => {
  const { guess, answer } = req.body;
  if (guess === answer) {
    playerScore++;
    res.json({ correct: true, score: playerScore });
  } else {
    res.json({ correct: false, score: playerScore });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
