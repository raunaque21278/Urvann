const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const plantRoutes = require('./routes/plants');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/plants', plantRoutes);

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

// Enhanced MongoDB connection with better error handling
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
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