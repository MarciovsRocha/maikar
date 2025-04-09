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
