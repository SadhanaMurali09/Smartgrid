CREATE DATABASE IF NOT EXISTS senson_grid;
USE senson_grid;

CREATE TABLE IF NOT EXISTS client_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contact_number VARCHAR(50) NOT NULL,
    service_category ENUM('Software', 'IoT', 'Designing') NOT NULL,
    project_type VARCHAR(255) NOT NULL,
    project_title VARCHAR(255) NOT NULL,
    project_description TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS previous_projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category ENUM('Software', 'IoT', 'Designing') NOT NULL,
    description TEXT NOT NULL,
    technologies JSON NOT NULL,
    image_url VARCHAR(500) DEFAULT NULL,
    live_url VARCHAR(500) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
