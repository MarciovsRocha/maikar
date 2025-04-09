const db = require('../config/db');
const Maintenance = require('../models/maintenance.model');
const Car = require("../models/car.model");
const Part = require("../models/part.model");
const Service = require("../models/service.model");

exports.getAll = async (req, res) => {
  try{
    let maintenances = await Maintenance.getByUserId(req.user.id);
    return res.json(maintenances);
  } catch(err){
    return res.status(500).json({message: 'Error Fetching maintenances'});
  }
};

exports.getById = async (req, res) => {
  try{
    const id = req.params.id;
    const maintenance = await Maintenance.getById(id);
    const car = await Car.findById(maintenance.car_id);
    if ((!maintenance) || (car.user_id != req.user.id)){
      return res.status(404).json({message: 'Maintenance not found'});
    }
    return res.json(maintenance);
  } catch(err){
    return res.status(500).json({message: 'Error Fetching maintenances'});
  }
};

exports.create = async (req, res) => {
  try {
    const maintenance_prop = {
      car_id: req.body.car_id,
      date: req.body.date,
      next_revision: req.body.next_revision,
      notes: req.body.notes,
    };

    const MyCars = await Car.findByUser(req.user.id);
    if (MyCars.filter((car) => {
      if (car.id == maintenance_prop.car_id) return car
    }).length <= 0) {
      return res.status(404).json({message: 'Car not found'});
    }

    const maintenance_id = await Maintenance.create(maintenance_prop);


    return res.status(201).json({message: 'Manutenção registrada', id: maintenance_id});
  }catch(err){
    return res.status(500).json({message: 'Error creating maintenance'});
  }
};

/*
exports.update = async (req, res) => {

};

exports.delete = async (req, res) => {
  let maintenance_id = req.body.maintenance_id;
};
*/
