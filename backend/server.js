const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
require('dotenv').config();

const plantRoutes = require('./routes/plants');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration for API deployment
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

app.use(express.json());

// API routes
app.use('/api/plants', plantRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Urvann Plant API is running!', 
    version: '1.0.0',
    endpoints: {
      plants: '/api/plants'
    }
  });
});

// API documentation endpoint
app.get('/api', (req, res) => {
  res.json({
    message: 'Urvann Plant API',
    endpoints: {
      'GET /api/plants': 'Get all plants with optional search and category filters',
      'POST /api/plants': 'Add a new plant (admin)',
      'DELETE /api/plants/:id': 'Delete a plant (admin)'
    }
  });
});

// Enhanced MongoDB connection with better error handling
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('Error: MONGO_URI environment variable is required');
  console.error('Please set MONGO_URI in your environment variables');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
    console.log('MONGO_URI configured properly');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    console.error('Please check your MONGO_URI environment variable');
    process.exit(1);
  });