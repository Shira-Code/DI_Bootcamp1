const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello From Express" });
});

// POST request to /api/world route
app.post('/api/world', (req, res) => {
  const { data } = req.body;
  console.log("Received POST data:", data);
  res.send({ message: `I received your POST request. This is what you sent me: ${data}` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
