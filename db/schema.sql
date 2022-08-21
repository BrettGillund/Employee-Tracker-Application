DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (

    id INT AUTO_INCREMENT PRIMARY KEY, 

    department_name VARCHAR(30) NOT NULL

);

CREATE TABLE employee_role (

    id INT AUTO_INCREMENT PRIMARY KEY, 
    
    title VARCHAR(30) NOT NULL,

    department_id INT NOT NULL,

    salary DECIMAL,

    FOREIGN KEY (department_id) REFERENCES department (id)

);

CREATE TABLE employee_info (

    id INT AUTO_INCREMENT PRIMARY KEY, 

    first_name VARCHAR(30) NOT NULL,

    last_name VARCHAR(30) NOT NULL,

    role_id INT NOT NULL,

    manager_id INT DEFAULT NULL,

    FOREIGN KEY (role_id) REFERENCES employee_role (id)

);
