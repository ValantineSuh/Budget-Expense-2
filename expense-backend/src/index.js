// Importing 'express' module and 'dotenv' module
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: 'custom.env' });

const port = process.env.PORT || 3000;

const app = express();

// Define a route handler for the root endpoint '/'
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

// Define a route handler for a new endpoint '/info'
app.get('/info', (req, res) => {
    res.send('This is the info endpoint');
});

// Start the Express server and listen on the defined port
app.listen(port, () => { 
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
