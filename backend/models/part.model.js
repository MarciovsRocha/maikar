const db = require('../config/db');

exports.create = async (part) => {
  const [result] = await db.query(
      'INSERT INTO maintenance_parts (maintenance_id, part_name, part_code, price, quantity) VALUES (?, ?, ?, ?, ?) ',
      [part.maintenance_id, part.name, part.code, part.price, part.quantity]
  );
  return result.insertId;
};

exports.getByMaintenance = async (maintenance_id) => {
  const [result] = await db.query('SELECT * FROM maintenance_parts WHERE maintenance_id = ?', [maintenance_id]);
  return result;
};
