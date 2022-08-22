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
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'EXIT']
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
                addADepartment();
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
            case 'EXIT':
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
        startApplication();
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
        startApplication();
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
        startApplication();
});
};

function addADepartment() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'department',
            message: 'please enter the name of the department you would like to add.'
        }
    ).then((data) => {
        let newDepartment = (data.department)
        const sql =`INSERT INTO department (department_name) VALUES ('${newDepartment}')`

        connection.query(sql, (err, data) => {
            if (err) return console.log(err);
            console.table("You have successfully added a new department!");
            startApplication();
        })
    });
}


function addARole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'please enter the name of the title you would like to add.'
        },
        {
            type: 'list',
            name: 'department',
            choices: ['Engineering', 'Finance', 'Marketing', 'Legal', 'Sales']
        },
        {
            type: 'number',
            name: 'salary',
            message: 'please enter the salery of the title you would like to add.'
        }
    ]).then((data) => {
        let newRole = (data.role)
        let newSalary = (data.salary)
        if(data.department === 'Engineering') {
            var newDepartment = 1;
        } else if(data.department === 'Finance'){
            var newDepartment = 2;
        } else if(data.department === 'Marketing'){
            var newDepartment = 3;
        } else if(data.department === 'Legal'){
            var newDepartment = 4;
        } else{
            var newDepartment = 5;
        }

        const sql =`INSERT INTO employee_role (title, department_id, salary) VALUES ('${newRole}', ${newDepartment}, ${newSalary})`

        connection.query(sql, (err, data) => {
            if (err) return console.log(err);
            console.table("You have successfully added a new role title!");
            startApplication();
        })
    });
};

function  addAnEmployee() {
    var role = [];
    inquirer.prompt([
        {
            type: 'input',
            name: 'first',
            message: 'please enter the first name of the employee would like to add.'
        },
        {
            type: 'input',
            name: 'last',
            message: 'please enter the last name of the employee you would like to add.'
        },
        {
            type: 'list',
            name: 'role',
            choices: `${role}`
        }
    ]).then((data) => {
        let firstName = (data.first)
        let lastName = (data.lastName)
        let role = (data.role)

        const sql =`INSERT INTO employee_info (first_name, last_name, role_id) VALUES ('${firstName}', ${lastName}, ${role})`

        connection.query(sql, (err, data) => {
            if (err) return console.log(err);
            console.table("You have successfully added a new employee!");
            startApplication();
        })
    });
}

//function  updateAnEmployeeRole() {

// };


startApplication();