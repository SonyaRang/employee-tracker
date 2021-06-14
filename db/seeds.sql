-- dont need to add the ID as the system will auto increment
INSERT INTO Departments (name)
VALUES ('CEO'), ('Sales'), ('Financing'), ('Marketing');

INSERT INTO Roles (title, salary, department_id)
VALUES 
    ('CEO', 120000.00, 01),
    ('Sales', 80000.00, 02),
    ('Financing', 90000.00, 03),
    ('Marketing', 100000, 04);

INSERT INTO Employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('Sonya', 'Rangraj', 01, null),
    ('Harry', 'Potter', 02, 04),
    ('Drako', 'Malfoy', 03, 05),
    ('Herminoe', 'Granger', 04, 06);
