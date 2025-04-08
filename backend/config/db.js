const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: '147.93.33.150', //process.env.DB_HOST,
    user: 'marcio', //process.env.DB_USER,
    password: 'senhaSegura123!', //process.env.DB_PASSWORD,
    database: 'maikar', //process.env.DB_NAME,
});

module.exports = db;