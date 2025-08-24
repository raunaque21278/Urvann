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
  { name: "Boston Fern", price: 349, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "Pothos", price: 249, categories: ["Indoor", "Air Purifying"], available: true },
  { name: "ZZ Plant", price: 399, categories: ["Indoor", "Low Maintenance"], available: true }
];

const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...');
    
    const count = await Plant.countDocuments();
    console.log('Current plant count in database:', count);
    
    if (count === 0) {
      console.log('Database is empty, inserting plants...');
      const result = await Plant.insertMany(plants);
      console.log('Database seeded successfully with', result.length, 'plants');
      return result;
    } else {
      console.log('Database already has', count, 'plants, skipping seed');
      return await Plant.find();
    }
  } catch (error) {
    console.error('Error seeding database:', error);
    // If seeding fails, try to insert one by one
    try {
      console.log('Trying individual plant insertion...');
      for (const plant of plants) {
        await Plant.create(plant);
      }
      console.log('Individual insertion successful');
    } catch (individualError) {
      console.error('Individual insertion also failed:', individualError);
    }
  }
};

module.exports = seedDatabase;
