const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./db');
const connection = require('./db/connections');

const presentQuestions = () => {
  const capitalizeFirstLetter = phrase => phrase.charAt(0).toUpperCase() + phrase.slice(1);
  const idToPhrase = id => id.toLowerCase().split('_').join(' ');
  const buildChoicesFromIds = choiceIds => choiceIds.map(choiceId => ({
    name: capitalizeFirstLetter(idToPhrase(choiceId)),
    value: choiceId,
  }));
  const choiceIds = {
    VIEW_ALL_DEPARTMENTS: 'VIEW_ALL_DEPARTMENTS',
    VIEW_ALL_ROLES: 'VIEW_ALL_ROLES',
    VIEW_ALL_EMPLOYEES: 'VIEW_ALL_EMPLOYEES',
    ADD_A_DEPARTMENT: 'ADD_A_DEPARTMENT',
    ADD_A_ROLE: 'ADD_A_ROLE',
    ADD_AN_EMPLOYEE: 'ADD_AN_EMPLOYEE',
    UPDATE_AN_EMPLOYEE_ROLE: 'UPDATE_AN_EMPLOYEE_ROLE',
    EXIT: 'EXIT',
  };
  const buildInputsPrompt = inputIds => inputIds.map(inputId => ({
    type: 'input',
    name: inputId,
    message: `Enter ${idToPhrase(inputId)}:`,
  }));
  const promptName = 'WHAT_LIKE_DO';
  inquirer.prompt([
    {
      name: promptName,
      message: 'What would you like to do?',
      type: 'list',
      choices: buildChoicesFromIds([
        choiceIds.VIEW_ALL_DEPARTMENTS,
        choiceIds.VIEW_ALL_ROLES,
        choiceIds.VIEW_ALL_EMPLOYEES,
        choiceIds.ADD_A_DEPARTMENT,
        choiceIds.ADD_A_ROLE,
        choiceIds.ADD_AN_EMPLOYEE,
        choiceIds.UPDATE_AN_EMPLOYEE_ROLE,
        choiceIds.EXIT,
      ])
    }
  ])
  .then(res => {
    
    const answer = res[promptName];
    const queryRows = (query, cb) => connection.query(query, (err, rows, fields) => cb(rows));
    const presentRowsTableAndReset = rows => {
      console.table(rows);
      presentQuestions();
    };

    const addEntry = (table, fields) =>
      inquirer
      .prompt(buildInputsPrompt(fields))
      .then(res => {
        connection.query(
          `INSERT INTO ${table} (${fields.join(', ')}) VALUES (${fields.map(field => '?').join(', ')})`,
          fields.map(field => res[field]),
          (err, results) => {
            if (err) console.log('Unable to add entry');
            else console.log(`New entry added to ${table}`);
            presentQuestions();
          },
        );
      });

    switch (answer) {
      case choiceIds.VIEW_ALL_DEPARTMENTS:
        queryRows('SELECT * FROM `Departments`', presentRowsTableAndReset);
        break;

      case choiceIds.VIEW_ALL_ROLES:
        queryRows('SELECT * FROM `Roles`', presentRowsTableAndReset);
        break;

      case choiceIds.VIEW_ALL_EMPLOYEES:
        queryRows('SELECT * FROM `Employees`', presentRowsTableAndReset);
        break;

      case choiceIds.ADD_A_DEPARTMENT:
        addEntry('Departments', ['name']);  
        break;

      case choiceIds.ADD_A_ROLE:
        addEntry('Roles', ['title', 'salary', 'department_id']);
        break;

      case choiceIds.ADD_AN_EMPLOYEE:
        addEntry('Employees', ['first_name', 'last_name', 'role_id', 'manager_id']);
        break;

      case choiceIds.UPDATE_AN_EMPLOYEE_ROLE:
        connection.query(`Select * from Employees`, (err, rows, fields) => {
          inquirer.prompt([
            {
              name: 'EMPLOYEE_ID',
              message: 'Select an employee:',
              type: 'list',
              choices: rows.map(employeeRow => ({
                name: `${employeeRow.first_name} ${employeeRow.last_name}`,
                value: employeeRow.id
              }))
            }
          ])
          .then(res => {
            const employeeId = res.EMPLOYEE_ID;
            
            inquirer
            .prompt(buildInputsPrompt(['NEW_ROLE_ID']))
            .then(res => {
              connection.query(
                `UPDATE Employees SET role_id = ? WHERE id = ?`,
                [res['NEW_ROLE_ID'], employeeId],
                (err, results) => {
                  if (err) console.log('Unable to update entry');
                  else console.log(`Updated role for employee`);
                  presentQuestions();
                },
              );
            });
          });  
        });

        break;
  
      case choiceIds.EXIT:
        process.exit(0);
        break;
  
      default:
        console.log('Unknown request');
        break;
    }
  });
}

presentQuestions();