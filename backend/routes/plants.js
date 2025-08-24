const express = require('express');
const Plant = require('../models/Plant');
const router = express.Router();

// Get all plants with search/filter
router.get('/', async (req, res) => {
  const { search, category } = req.query;
  let query = {};
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { categories: { $regex: search, $options: 'i' } }
    ];
  }
  if (category) {
    query.categories = { $regex: category, $options: 'i' };
  }
  try {
    const plants = await Plant.find(query);
    res.json(plants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new plant (admin)
router.post('/', async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    res.status(201).json(plant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a plant by ID (admin)
router.delete('/:id', async (req, res) => {
  try {
    const result = await Plant.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Plant not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;