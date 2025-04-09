const db = require('../config/db');

exports.create = async (service) => {
  const [result] = await db.query(
      'INSERT INTO maintenance_services (maintenance_id, service_description, cost) VALUES (?, ?, ?) ',
      [service.maintenance_id, service.description, service.cost]
  );
  return result.insertId;
};

exports.getByMaintenance = async (maintenance_id) => {
  const [result] = await db.query('SELECT * FROM maintenance_services WHERE maintenance_id = ?', [maintenance_id]);
  return result;
};
