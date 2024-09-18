require('dotenv').config(); // Load .env variables
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

const app = express();
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/api', userRoutes);

// Serve static files for frontend
app.use(express.static('public'));

// Use the port from .env, or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
