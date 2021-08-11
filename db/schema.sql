--database
DROP DATABASE IF EXISTS employee_Data;
CREATE DATABASE employee_Data;
USE employee_D TAata;

--Departments
CREATE TABLE Departments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

--Roles
CREATE TABLE Roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES departments(id)
);

--Employees 
CREATE TABLE Employees(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT UNSIGNED,
    FOREIGN KEY (role_id) 
    REFERENCES roles(id)
);