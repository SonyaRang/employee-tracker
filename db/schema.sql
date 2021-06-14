DROP DATABASE IF EXISTS employee_data

CREATE DATABASE employee_data;
USE employee_data;

--Departments
CREATE TABLE departments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

--Roles
CREATE TABLE roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) 
    REFERENCES departments(id)
);

--Employees 
CREATE TABLE employees(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    role_id INT NOT NULL
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);