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

exports.getById = async (part_id) => {
  const [result] = await db.query('SELECT * FROM maintenance_services WHERE id = ?', [part_id]);
  return result[0];
};

exports.update = async (id, service) => {
  const [result] = await db.query(
      'UPDATE maintenance_services SET service_description = ?, cost = ? where id = ?',
      [service.description, service.cost, id]
  );
  return result;
};

exports.deleteById = async (id) => {
  const [result] = await db.query('DELETE FROM maintenance_services WHERE id = ?', id);
  return result;
};
