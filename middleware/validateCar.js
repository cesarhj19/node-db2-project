function validateCar(req, res, next) {
  const cars = req.body;
  if (typeof cars.VIN === 'undefined' || typeof cars.make === 'undefined' || typeof cars.model === 'undefined' || typeof cars.mileage === 'undefined') {
    res.status(400).json({ message: 'missing required fields: VIN, make, model, mileage' });
  } else {
    req.cars = { ...req.cars, ...cars };
    next();
  }
}

module.exports = validateCar;
