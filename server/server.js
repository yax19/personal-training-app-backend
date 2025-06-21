const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Serve static frontend files (public folder)
app.use(express.static(path.join(__dirname, '../public')));

// // Routes
app.use('/api/auth', require('./routes/auth'));      
app.use('/api/workouts', require('./routes/workouts'));

// Start server
app.listen(PORT, () => {
  console.log(`Express app is ready`);
});