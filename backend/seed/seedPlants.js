const mongoose = require('mongoose');
const Plant = require('../models/Plant');
require('dotenv').config();

const plants = [
  { name: "Money Plant", price: 299, categories: ["Indoor", "Home Decor", "Air Purifying"], available: true },
  { name: "Snake Plant", price: 349, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Peace Lily", price: 399, categories: ["Indoor", "Flowering", "Air Purifying"], available: true },
  { name: "Areca Palm", price: 499, categories: ["Indoor", "Outdoor", "Air Purifying"], available: true },
  { name: "Aloe Vera", price: 199, categories: ["Succulent", "Medicinal", "Indoor"], available: true },
  { name: "Jade Plant", price: 249, categories: ["Succulent", "Indoor", "Home Decor"], available: true },
  { name: "Spider Plant", price: 299, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Rubber Plant", price: 399, categories: ["Indoor", "Home Decor"], available: true },
  { name: "Fiddle Leaf Fig", price: 599, categories: ["Indoor", "Home Decor"], available: true },
  { name: "Boston Fern", price: 349, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Pothos", price: 249, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "ZZ Plant", price: 399, categories: ["Indoor", "Low Maintenance"], available: true },
  { name: "Croton", price: 299, categories: ["Indoor", "Outdoor", "Colorful"], available: true },
  { name: "Lucky Bamboo", price: 199, categories: ["Indoor", "Home Decor"], available: true },
  { name: "Cactus", price: 149, categories: ["Succulent", "Outdoor"], available: true },
  { name: "Aglaonema", price: 349, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Dracaena", price: 299, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Philodendron", price: 349, categories: ["Indoor", "Home Decor"], available: true },
  { name: "Schefflera", price: 399, categories: ["Indoor", "Outdoor"], available: true },
  { name: "Bougainvillea", price: 299, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Hibiscus", price: 249, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Marigold", price: 99, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Tulsi", price: 149, categories: ["Medicinal", "Outdoor"], available: true },
  { name: "Roses", price: 199, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Chrysanthemum", price: 249, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Petunia", price: 199, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Lavender", price: 299, categories: ["Outdoor", "Fragrant"], available: true },
  { name: "Mint", price: 99, categories: ["Medicinal", "Outdoor"], available: true },
  { name: "Basil", price: 99, categories: ["Medicinal", "Outdoor"], available: true },
  { name: "Orchid", price: 499, categories: ["Indoor", "Flowering"], available: true },
  { name: "Geranium", price: 199, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Dahlia", price: 249, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Succulent Mix", price: 349, categories: ["Succulent", "Indoor"], available: true },
  { name: "Echeveria", price: 199, categories: ["Succulent", "Indoor"], available: true },
  { name: "Sedum", price: 149, categories: ["Succulent", "Outdoor"], available: true },
  { name: "Kalanchoe", price: 199, categories: ["Succulent", "Flowering"], available: true },
  { name: "Sansevieria", price: 299, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Calathea", price: 399, categories: ["Indoor", "Home Decor"], available: true },
  { name: "Syngonium", price: 249, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Coleus", price: 149, categories: ["Outdoor", "Colorful"], available: true },
  { name: "Ixora", price: 199, categories: ["Outdoor", "Flowering"], available: true },
  { name: "Jasmine", price: 249, categories: ["Outdoor", "Fragrant"], available: true },
  { name: "Gardenia", price: 299, categories: ["Outdoor", "Fragrant"], available: true },
  { name: "Mogra", price: 199, categories: ["Outdoor", "Fragrant"], available: true },
  { name: "Ficus", price: 399, categories: ["Indoor", "Home Decor"], available: true },
  { name: "Palm", price: 349, categories: ["Outdoor", "Home Decor"], available: true },
  { name: "Bamboo Palm", price: 299, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Poinsettia", price: 249, categories: ["Indoor", "Colorful"], available: true }
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Plant.deleteMany({});
    await Plant.insertMany(plants);
    console.log('Database seeded!');
    mongoose.disconnect();
  });