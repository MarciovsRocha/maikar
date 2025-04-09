const db = require('../config/db');
const Maintenance = require('../models/maintenance.model');
const Car = require("../models/car.model");
const Part = require("../models/part.model");
const Service = require("../models/service.model");

exports.getAll = async (req, res) => {
  try{
    let maintenances = await Maintenance.getByUserId(req.user.id);
    res.json(maintenances);
  } catch(err){
    res.status(500).json({message: 'Error Fetching maintenances'});
  }
};

exports.getById = async (req, res) => {
  try{
    const id = req.params.id;
    const maintenance = await Maintenance.findById(id);
    const car = await Car.findById(maintenance.car_id);
    if ((!maintenance) || (car.user_id != req.user.id)){
      res.status(404).json({message: 'Maintenance not found'});
    } 
    res.json(maintenance);
  } catch(err){
    res.status(500).json({message: 'Error Fetching maintenances'});
  }
};

exports.create = async (req, res) => {
  
  const maintenance_prop = {
    card_id: req.body.car_id,
    date: req.body.date,
    next_revision: req.body.next_revision,
    notes: req.body.notes,
  };
  
  const maintenance_id = Maintenance.create(maintenance_prop)

  for (const part of req.body.parts) {
    await Part.create({...part,  maintenance_id: maintenance_id});
  }

  for (const service of req.body.services) {
    await db.query('INSERT INTO services (maintenance_id, name, price) VALUES (?, ?, ?)', [maintenance_id, service.name, service.price]);
  }

  res.status(201).json({ message: 'Manutenção registrada' });
};

/*
exports.update = async (req, res) => {
  
};

exports.delete = async (req, res) => {
  let maintenance_id = req.body.maintenance_id; 
};
*/
