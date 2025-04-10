const db = require('../config/db');

exports.create = async (maintenance) => {
  const [result] = await db.query(
      'INSERT INTO maintenance (car_id, date, next_revision, notes) VALUES (?, ?, ?, ?) ',
      [maintenance.car_id, maintenance.date, maintenance.next_revision, maintenance.notes]
  );
  return result.insertId;
};

exports.getByUserId = async (id) => {
  const [result] = await db.query(
      'SELECT * FROM maintenance WHERE car_id IN (SELECT id FROM cars WHERE user_id = ? )'
      , [id]
  );
  return result;
}

exports.getByCarId = async (id) => {
  const [result] = await db.query(
      'SELECT * FROM maintenance WHERE car_id = ?'
      , [id]
  );
  return result;
};

exports.getById = async (id) => {
  const [result] = await db.query(
      'SELECT * FROM maintenance WHERE id = ?'
      , [id]
  );
  return result[0];
};

exports.update = async (id, maintenance) => {
  const [result] = await db.query(
      'UPDATE maintenance SET date = ?, next_revision = ?, notes = ? where id = ?', 
      [maintenance.date, maintenance.next_revision, maintenance.notes, id]
  );
  return result;
};

exports.delete = async (id) => {
  const [result] = await db.query('delete from maintenance where id = ?', [id]);
  return result;
};