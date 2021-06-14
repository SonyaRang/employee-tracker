const inquirer = require('inquirer');
const db = require('../db');
const consoleTable = require('console.table');

//questions
function questions() {
    inquirer.prompt([
    {
        name: 'options',
        type: 'list',
        choices: [
        {
            name: 'View Departments',
            value:"VIEW_DEPARTMENTS"
        },
        {
            name: 'View all Roles',
            value: 'VIEW_ROLES'
        },
        {
            name: 'View Employees',
            value: 'VIEW_EMPLOYEES'
        },
        {
            name: 'Add Department',
            value: 'ADD_DEPARTMENT'
        },
        {
            name: 'Add Role',
            value: 'ADD_ROLE'
        },
        {
            name: 'Add Employee',
            value: 'ADD_EMPLOYEE'
        },
        {
            name: 'Update Employee Role',
            value: 'UPDATE_EMPLOYEE_Role'
        },
        {
            name: 'Exit',
            value: 'EXIT'
        }
        ]
    }
])
}

