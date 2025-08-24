const Plant = require('../models/Plant');

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
  { name: "Boston Fern", price: 349, categories: ["Indoor", "Air Purifying"], available: true }
];

const seedDatabase = async () => {
  try {
    const count = await Plant.countDocuments();
    if (count === 0) {
      await Plant.insertMany(plants);
      console.log('Database seeded with', plants.length, 'plants');
    } else {
      console.log('Database already has', count, 'plants');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDatabase;
