const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const router = require('./routes/tasks'); // Importing the router module

app.use(express.json()); // Middleware to parse JSON
app.use('/tasks', router); // Mounting the router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//path.resolve demonstrated in class today if path problem
/**
 *  server
 *    |_ config - connection to databases
 *    |_ models - queries to database/files
 *    |_ controllers - function implements code - request, response
 *    |_ routes - route for api
 *    |_ middlewares - function - req, res - auth, log
 */
