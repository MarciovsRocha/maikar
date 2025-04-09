const db = require('../config/db');

exports.create = async (car) => {
  const [result] = await db.query(
      'INSERT INTO cars (user_id, brand, model, year, km_current) VALUES (?, ?, ?, ?, ?)',
      [car.user_id, car.brand, car.model, car.year, car.km]
  );
  return result.insertId;
};

exports.findByUser = async (userId) => {
  const [rows] = await db.query('SELECT * FROM cars WHERE user_id = ?', [userId]);
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query('SELECT * FROM cars WHERE id = ?', [id]);
  return rows[0];
};

exports.update = async (id, car) => {
  const [result] = await db.query(
      'UPDATE cars SET brand = ?, model = ?, year = ?, km_current = ? WHERE id = ?',
      [car.brand, car.model, car.year, car.km, id]
  );
  return result;
};

exports.delete = async (id) => {
  const [result] = await db.query('DELETE FROM cars WHERE id = ?', [id]);
  return result;
};

exports.findByUser = async (userId) => {
  const [rows] = await db.query('SELECT * FROM cars WHERE user_id = ?', [userId]);
  return rows;
};
