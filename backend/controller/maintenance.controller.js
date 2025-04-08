const db = require('../config/db');

exports.getAll = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM maintenance WHERE car_id = ?', [req.query.car_id]);
  res.json(rows);
};

exports.create = async (req, res) => {
  const { car_id, date, next_date } = req.body;
  const [result] = await db.query('INSERT INTO maintenance (car_id, date, next_date) VALUES (?, ?, ?)', [car_id, date, next_date]);

  const maintenance_id = result.insertId;

  for (const part of req.body.parts) {
    await db.query('INSERT INTO parts (maintenance_id, name, brand, price) VALUES (?, ?, ?, ?)', [maintenance_id, part.name, part.brand, part.price]);
  }

  for (const service of req.body.services) {
    await db.query('INSERT INTO services (maintenance_id, name, price) VALUES (?, ?, ?)', [maintenance_id, service.name, service.price]);
  }

  res.status(201).json({ message: 'Manutenção registrada' });
};
