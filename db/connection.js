const mysql12 = requier('mysql12');
const connection = mysql12.createConnection({
    host: 'localhost',
    user: 'root', // process.enc.DB_USER,
    password: 'Mimi1994$$', //process.env.DB_PW,
    database: 'employee_tracker', // process.env.DB_NAME
});

connection.connect( err => {
    if (err) throw err;
});

module.exports = connection;