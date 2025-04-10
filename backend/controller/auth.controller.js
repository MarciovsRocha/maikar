const bcrypt = require('bcryptjs');
const db = require('../config/db');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length) return res.status(400).json({ message: 'Usuário já cadastrado' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
    const user = { id: result.insertId, email };
    res.status(201).json({ token: generateToken(user) });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!rows.length) return res.status(400).json({ message: 'Usuário não encontrado' });

    const user = rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Senha incorreta' });

    return res.json({ token: generateToken(user) });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao fazer login' });
  }
};
