const mongoose = require('mongoose');
const Plant = require('./models/Plant');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const plants = await Plant.find({ categories: { $regex: 'Home Decor', $options: 'i' } });
    console.log('Plants with category Home Decor:', plants);
    mongoose.disconnect();
  });
