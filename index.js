// 1.) DONE - create an inquirer where a user can decided to pick from a series of options.

// 2.) view all departments. - presented with a table composed of department names and ids.

// 3.) view all roles -  preseneted with a table composed of job title role id, department that role is associated with, and salary.

// 4.) view all employees - preseneted with a table composed of employee data composed of employee id, firest name, last name, job title, departments, salaries, and managers that the employees report to.

// 5.) add a department - prompted to fill in an inquirer to add a department to the db.

// 6.) add a role - prompted to fill in an inquirer to add a tole to the db.

// 7.) add an employee - enter employee's first name, last name, role and manager. Then the employee is added to the db.

// 8.) update an employee role - select an employee from an inquirer list then update their role based on another list, and added to the new db.


const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});


function startApplication() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'start',
            message: 'Please select an option from the below list.',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }
    ).then((choice) => {
        switch(choice.start) {
            case 'view all departments':
                viewAllDepartments();
                break;
            case 'view all roles':
                viewAllRoles();
                break;
            case 'view all employees':
                viewAllEmployees();
                break;
            case 'add a department':
                viewAllDepartments();
                break;
            case 'add a role':
                addARole();
                break;
            case 'add an employee':
                addAnEmployee();
                break;
            case 'update an employee role':
                updateAnEmployeeRole();
                break;

        }

    }).catch(err => {console.log(err)});
}

function viewAllDepartments () {
    const sql = `
    SELECT
        JSON_ARRAYAGG(department.department_name) as DEPS
        FROM department
    `;
    connection.query(sql, (err, data) => {
        if (err) return console.log(err);
        console.table(data[0].DEPS);
        process.exit();
    })
}
function viewAllRoles() {
    const sql = `
        SELECT
            JSON_ARRAYAGG(employee_role.title) as DEPS
            FROM employee_role
    `;
    connection.query(sql, (err, data) => {
        if (err) return console.log(err);
        console.table(data[0].DEPS);
        process.exit();
    });
};

function viewAllEmployees() {
    const sql = `
        SELECT
            JSON_ARRAYAGG(JSON_OBJECT('First', employee_info.first_name, 'Last', employee_info.last_name)) as DEPS
            FROM employee_info
        `;
    connection.query(sql, (err, data) => {
        if (err) return console.log(err);
        console.table(data[0].DEPS);
        process.exit();
});
};

// viewAllDepartments() {

// };

// addARole() {

// };

// addAnEmployee() {

// };

// updateAnEmployeeRole() {

// };


startApplication();