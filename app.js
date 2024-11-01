// app.js
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Route definitions
app.use('/api/auth', authRoutes);
app.use('/api/devices', deviceRoutes);

// Error handling middleware (optional, customize as needed)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

module.exports = app;
