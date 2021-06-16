const { restoreDefaultPrompts } = require('inquirer');
const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_DATABASE
});
connection.connect(function(error)
{
    if (error)
    throw (error)
});
// console.log(result.parsed)
console.log('success');
module.exports = connection;