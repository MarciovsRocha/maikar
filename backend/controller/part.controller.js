const Part = require('../models/part.model');
const Maintenance = require("../models/maintenance.model");
const {id} = require("../models/user.model");

exports.getByMaintenance = async (req, res) => {
  try{
    const id = req.params.maintenance_id;
    const maintenance = await Maintenance.getById(id);
  
    if (!maintenance){
      return res.status(404).json({message: 'Part not found'});
    }
  
    const my_maintenances = await Maintenance.getByUserId(req.user.id);
    if (!my_maintenances){
      return res.status(404).json({message: 'Part not found'});
    }
  
    let its_mine = false;
    my_maintenances.forEach(my_maintenance => {
      its_mine = its_mine || (my_maintenance.id == maintenance.id);
    });
  
    if (! its_mine){
      return res.status(404).json({message: 'Part not found'});
    }
  
    const parts = await Part.getByMaintenance(maintenance.id);
  
    return res.json(parts);
  
  } catch(err){
    return res.status(500).json({message: 'Error Fetching parts'});
  }
};

exports.update = async (req, res) => {
  try{
    const part_id = req.params.id;
    const part_data = req.body;
    
    // se não existe no banco de dados
    const part_to_update = await Part.getById(part_id);
    if (!part_to_update){
      return res.status(404).json({message: 'Part not found'});
    }
    
    // se não é uma peça das minhas manutenções
    const maintenance_from_part = await Maintenance.getById(part_to_update.maintenance_id);
    let MyMaintenances = await Maintenance.getByUserId(req.user.id);
    if (MyMaintenances.filter((maintenance) => {
      if (maintenance.id == maintenance_from_part.id) return maintenance;
    }).length <= 0) {
      return res.status(404).json({message: 'Maintenance not found'});
    }
    
    Part.update(part_id, part_data);
    return res.json({ message: 'Part updated successfully' });
  }catch(err){
    return res.status(500).json({message: 'Error Updating parts'});
  }
};

exports.create = async (req, res) => {
  try {
    const part_data = req.body;
    
    // se a manutenção não existe
    const maintenance_to_add_part = await Maintenance.getById(part_data.maintenance_id);
    if (!maintenance_to_add_part){
      return res.status(404).json({message: 'Maintenance not found'});
    }

    // se não é uma das minhas manutenções
    let MyMaintenances = await Maintenance.getByUserId(req.user.id);
    if (MyMaintenances.filter((maintenance) => {
      if (maintenance.id == maintenance_to_add_part.id) return maintenance;
    }).length <= 0) {
      return res.status(404).json({message: 'Maintenance not found'});
    }
    
    const part_id = await Part.create(part_data);
    return res.status(201).json({message: "Part created successfully", id: part_id});
  }catch(err){
    return res.status(500).json({message: 'Error Creating Part'});
  }
};

exports.deleteById = async (req, res) => {
  try{
    const part_id = req.params.id;

    // se não existe no banco de dados
    const part_to_delete = await Part.getById(part_id);
    if (!part_to_delete){
      return res.status(404).json({message: 'Part not found'});
    }

    // se não é uma peça das minhas manutenções
    const maintenance_from_part = await Maintenance.getById(part_to_delete.maintenance_id);
    let MyMaintenances = await Maintenance.getByUserId(req.user.id);
    if (MyMaintenances.filter((maintenance) => {
      if (maintenance.id == maintenance_from_part.id) return maintenance;
    }).length <= 0) {
      return res.status(404).json({message: 'Maintenance not found'});
    }

    await Part.deleteById(part_id);
    return res.json({ message: 'Part deleted successfully' });
  }catch(err){
    return res.status(500).json({message: 'Error Deleting parts'});
  }
};
