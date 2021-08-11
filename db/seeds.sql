--Departments
INSERT INTO Departments (name)
VALUES ('CEO'), ('Sales'), ('Financing'), ('Marketing');

--Roles
INSERT INTO Roles (title, salary, department_id)
VALUES 
    ('CEO', 130000.00, 01),
    ('Sales', 70000.00, 02),
    ('Financing', 90000.00, 03),
    ('Marketing', 100000, 04);

--Employees
INSERT INTO Employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Sonya', 'Rangraj', 01, null),
    ('Harry', 'Potter', 02, 04),
    ('Drako', 'Malfoy', 03, 05),
    ('Herminoe', 'Granger', 04, 06);
