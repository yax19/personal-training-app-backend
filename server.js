const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// need more research on logger/morgam
const logger = require('morgan');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


app.use(express.json());
app.use(logger('dev'));

// Routes go here

app.use('/api/auth', require('./serve/routes/auth'));
app.use('/api/workouts', require('./serve/routes/workouts'));

// routes above are not working properly fix soon 

app.listen(3000, () => {
  console.log('The express app is ready!');
});
