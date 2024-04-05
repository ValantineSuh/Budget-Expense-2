// Importing necessary modules
import express from 'express';

// Creating an instance of Express
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
