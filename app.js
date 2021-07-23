// Imports
const express = require('express');
const morgan = require('morgan');
const hamburgersRoute = require('./src/resources/hamburgers/routes');

// Creating server
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/hamburgers', hamburgersRoute);

// Listen to server
app.listen(4000, () => {
  console.log('I am running');
});
