const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
    host: 'local host',
    user: 'root', //process.env.DB_USER,
    password: 'Mimi1994$$', //process.env.DB_PW,
    database: 'employee_data', //process.env.DB_NAME
});

connection.connect(err => {
    if (err) throw err;
});

module.exports = connection;
