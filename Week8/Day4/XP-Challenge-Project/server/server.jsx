const express = require('express');
const cors = require('cors'); // Allow cross-origin requests

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello From Express' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.use(express.json()); // Middleware to parse JSON body

app.post('/api/world', (req, res) => {
    console.log('Received POST request:', req.body);
    res.send({
        message: `I received your POST request. This is what you sent me: ${req.body.input}`,
    });
});
