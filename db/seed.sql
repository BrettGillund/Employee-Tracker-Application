USE employee_db;

INSERT INTO department (department_name) VALUES
    ('Engineering'),
    ('Finance'),
    ('Marketing'),
    ('Legal'),
    ('Sales');

INSERT INTO employee_role (title, department_id, salary) VALUES
    ('Lead Engineer', 1, 150063),
    ('Apprentice Engineer', 1, 70721),
    ('Finance Manager', 2, 120543),
    ('Accountant', 2, 73560),
    ('Marketing Manager', 3, 75653),
    ('Market Research Specialist', 3, 40012),
    ('Contract Lawyer', 4, 122933),
    ('Legal Aid', 4, 55122),
    ('Account Manager', 5, 96985),
    ('Sales Support Rep', 5, 40480);

INSERT INTO employee_info (first_name, last_name, role_id) VALUES
    ('Brett', 'Gillund', 1),
    ('Jordyn', 'Marquardt', 3),
    ('Sophie', 'Gillund', 7),
    ('Nate', 'Kopetzki', 2),
    ('Peter', 'Koski', 2),
    ('Kelly', 'Grove', 4),
    ('Britt', 'Cavanor', 6),
    ('Aaron', 'Oppenheimer', 10),
    ('George', 'Sutton', 5),
    ('Mike', 'Hawk', 6),
    ('Kallie', 'Lavalle', 9),
    ('Tom', 'Ford', 8);