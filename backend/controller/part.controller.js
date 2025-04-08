const db = require('../config/db');

exports.getByMaintenance = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM parts WHERE maintenance_id = ?', [req.params.maintenance_id]);
  res.json(rows);
};
