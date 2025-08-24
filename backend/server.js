const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const plantRoutes = require('./routes/plants');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/plants', plantRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, '0.0.0.0', () => console.log('Server running on port 5000')))
  .catch(err => console.log(err));