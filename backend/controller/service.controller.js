const Service = require('../models/service.model');
const Maintenance = require('../models/maintenance.model');

exports.getByMaintenance = async (req, res) => {
  try{
    const id = req.params.maintenance_id;
    const maintenance = await Maintenance.getById(id);
    
    if (!maintenance){
      return res.status(404).json({message: 'Service not found'});
    }
    
    const my_maintenances = await Maintenance.getByUserId(req.user.id);
    if (!my_maintenances){
      return res.status(404).json({message: 'Service not found'});
    }
    
    let its_mine = false;
    my_maintenances.forEach(my_maintenance => {
      its_mine = its_mine || (my_maintenance.id == maintenance.id);
    });
    
    if (! its_mine){
      return res.status(404).json({message: 'Service not found'});
    }
    
    const services = await Service.getByMaintenance(maintenance.id);

    return res.json(services);
    
  } catch(err){
    return res.status(500).json({message: 'Error Fetching services'});
  }
};

exports.update = async (req, res) => {
  try{
    const service_id = req.params.id;
    const service_data = req.body;

    // se não existe no banco de dados
    const service_to_update = await Service.getById(service_id);
    if (!service_to_update){
      return res.status(404).json({message: 'Service not found'});
    }

    // se não é uma peça das minhas manutenções
    const maintenance_from_service = await Maintenance.getById(service_to_update.maintenance_id);
    let MyMaintenances = await Maintenance.getByUserId(req.user.id);
    if (MyMaintenances.filter((maintenance) => {
      if (maintenance.id == maintenance_from_service.id) return maintenance;
    }).length <= 0) {
      return res.status(404).json({message: 'Maintenance not found'});
    }

    await Service.update(service_id, service_data);
    return res.json({ message: 'Service updated successfully' });
  }catch(err){
    return res.status(500).json({message: 'Error Updating service'});
  }
};

exports.create = async (req, res) => {
  try {
    const service_data = req.body;

    // se a manutenção não existe
    const maintenance_to_add_service = await Maintenance.getById(service_data.maintenance_id);
    if (!maintenance_to_add_service){
      return res.status(404).json({message: 'Maintenance not found'});
    }

    // se não é uma das minhas manutenções
    let MyMaintenances = await Maintenance.getByUserId(req.user.id);
    if (MyMaintenances.filter((maintenance) => {
      if (maintenance.id == maintenance_to_add_service.id) return maintenance;
    }).length <= 0) {
      return res.status(404).json({message: 'Maintenance not found'});
    }

    const service_id = await Service.create(service_data);
    return res.status(201).json({message: "Service created successfully", id: service_id});
  }catch(err){
    return res.status(500).json({message: 'Error Creating Part'});
  }
};

exports.deleteById = async (req, res) => {
  try{
    const service_id = req.params.id;

    // se não existe no banco de dados
    const service_to_delete = await Service.getById(service_id);
    if (!service_to_delete){
      return res.status(404).json({message: 'Service not found'});
    }

    // se não é uma peça das minhas manutenções
    const maintenance_from_service = await Maintenance.getById(service_to_delete.maintenance_id);
    let MyMaintenances = await Maintenance.getByUserId(req.user.id);
    if (MyMaintenances.filter((maintenance) => {
      if (maintenance.id == maintenance_from_service.id) return maintenance;
    }).length <= 0) {
      return res.status(404).json({message: 'Maintenance not found'});
    }

    await Service.deleteById(service_id);
    return res.json({ message: 'Service deleted successfully' });
  }catch(err){
    return res.status(500).json({message: 'Error Deleting parts'});
  }
};