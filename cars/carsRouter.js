const express = require('express');
const carsDb = require('../data/db-config');
const { validateCar } = require('../middleware');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cars = await carsDb.select('*').from('cars');
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({
      error: 'cars information could not be retrieved',
      message: err.message,
    });
  }
});

router.post('/', validateCar, async (req, res) => {
  try {
    const cars = await carsDb.insert(req.cars).into('cars');
    res.status(201).json(cars); // returns id
  } catch (err) {
    res.status(500).json({
      error: 'cars information could not be stored',
      message: err.message,
    });
  }
});

module.exports = router;
