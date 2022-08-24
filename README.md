## Employee Tracker Application

# Video Walkthrough of Application



# About

This is an Employee Tracker application where users can connect to a database through node.js, and can view/ update and add information to that database.

# Starting the Application

To start the application, a user will first need to to source the schema file by opening their mysql program by running the command mysql -u root -p in the terminal. Next the will need to enter their respective password which will run the program. Next we will need to source our schema file, and enter our seed data into our database. To do this, we will need to run the source ./db/schema.sql; command. Next to seed the database, we will need to run the source ./db/seed.sql; command which will seed our database. 



# Functionality:

Now we are ready to run the application. To start the Employee Tracker Appliaiton, a user will need to open their terminal and run node index.js. As the applicaiton opens the user will be propted by a number of options. 

First the will be able to view all of the current departments that were pre-seeded within the database. 

If we want to add a department to the list, a user will need to select the add a department selection, and fill the following prompts. A user can confirm they have created a new department by selecting view all departments from the main menu.

Next, the will be able to view all of the roles of current employees by selectiong view all roles.

If a user would like to add a role, they will need to select the add a role selection, and follow the proceeding prompts. They will receive a confirmation when the role has been created, and can confirm this by selecting the view all roles selection.

We can also view all current employees by selecting view all employees.

If we wish to add another employee we will need to need to select the add an employee selection, and fill in the prompts that follow. Additionally, the user will receieve a confirmation that the employee has been created, and can confirm this by selecting the view all employees selection.

Finally, if a user would like to close the applciaiton all they need to do is select Exit from the main menu.

# Technologies

- Mysql
- JavaScript as a programming language.
- Node.js