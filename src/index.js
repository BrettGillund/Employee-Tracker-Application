const inquirer = require('inquirer');

function createManager() {
    inquirer.prompt(
        {
            type:  'list',
            name: 'start',
            message: 'Please select an option from the below list.',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
        }
    ).then((choice) => {
        switch(choice.start) {
            case 'view all departments':
                function()
                break;
            case 'view all roles':
                function()
                break;
            case 'view all employees':
                function()
                break;
            case 'add a department':
                function()
                break;
            case 'add a role':
                function()
                break;
            case 'add an employee':
                function()
                break;
            case 'update an employee role':
                function()
                break;

        }

    }).catch(err => {console.log(err)});
}