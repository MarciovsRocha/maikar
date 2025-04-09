const Car = require('../models/car.model');

// Create a new car
exports.createCar = async (req, res) => {
  try {
    let carData = req.body;
    carData = {...carData, user_id: req.user.id};
    const carId = await Car.create(carData);
    res.status(201).json({ message: 'Car created successfully', id: carId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating car' });
  }
};

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.findByUser(req.user.id);
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cars' });
  }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);
    if ((!car) || (req.user.id != car.user_id) ) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching car' });
  }
};

// Update a car
exports.updateCar = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const car = await Car.findById(id);
    if ((!car) || (car.user_id != req.user.id)){
      return res.status(404).json({ message: 'Car not found' });
    }
    await Car.update(id, updatedData);
    res.json({ message: 'Car updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating car' });
  }
};

// Delete a car
exports.deleteCar = async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id);
    if ((!car) || (car.user_id != req.user.id)){
      return res.status(404).json({ message: 'Car not found' });
    }
    await Car.delete(id);
    res.json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting car' });
  }
};

exports.getCarsByTokenUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const cars = await Car.findByUser(userId);
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar carros do usuário' });
  }
};
