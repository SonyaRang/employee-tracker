--Departments
INSERT INTO Departments (name)
VALUES ('CEO'), ('Sales'), ('Financing'), ('Marketing');

--Roles
INSERT INTO Roles (Title, Salary, Department_id)
VALUES 
    ('CEO', 120000.00, 01),
    ('Sales', 80000.00, 02),
    ('Financing', 90000.00, 03),
    ('Marketing', 100000, 04);

--Employees
INSERT INTO Employees (First_name, Last_name, Role_id, Manager_id)
VALUES 
    ('Sonya', 'Rangraj', 01, null),
    ('Harry', 'Potter', 02, 04),
    ('Drako', 'Malfoy', 03, 05),
    ('Herminoe', 'Granger', 04, 06);
