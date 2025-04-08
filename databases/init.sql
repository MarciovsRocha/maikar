/*
Creating database
*/

create database maikar;

use maikar;

/*
Creating database structure
*/

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    model VARCHAR(100),
    km_current INT,
    year int,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE maintenance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    car_id INT,
    date DATE,
    next_revision DATE,
    notes TEXT,
    FOREIGN KEY (car_id) REFERENCES cars(id)
);

CREATE TABLE maintenance_parts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    maintenance_id INT,
    part_name VARCHAR(100),
    part_code VARCHAR(50),
    price DECIMAL(10,2),
    quantity INT DEFAULT 1,
    FOREIGN KEY (maintenance_id) REFERENCES maintenance(id)
);

CREATE TABLE maintenance_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    maintenance_id INT,
    service_description TEXT,
    cost DECIMAL(10,2),
    FOREIGN KEY (maintenance_id) REFERENCES maintenance(id)
);

/*
    Data mocking
*/
INSERT INTO users (id, name, email, password) VALUES
(1, 'Vinicius Silva', 'vinicius@example.com', 'hashedpass1'),
(2, 'Carla Mendes', 'carla@example.com', 'hashedpass2'),
(3, 'Lucas Oliveira', 'lucas@example.com', 'hashedpass3'),
(4, 'Fernanda Costa', 'fernanda@example.com', 'hashedpass4'),
(5, 'Bruno Souza', 'bruno@example.com', 'hashedpass5');

INSERT INTO cars (id, user_id, model, year, km_current) VALUES
(1, 1, 'Toyota Corolla', 2018, 78200),
(2, 2, 'Honda Fit', 2020, 45230),
(3, 3, 'Volkswagen Golf', 2017, 90500),
(4, 4, 'Chevrolet Onix', 2022, 15300),
(5, 5, 'Ford Ka', 2015, 120500);

INSERT INTO maintenance (id, car_id, date, next_revision, notes) VALUES
(1, 1, '2024-12-15', '2025-06-15', 'Troca de óleo e alinhamento'),
(2, 2, '2025-03-10', '2025-09-10', 'Revisão geral dos 45k km'),
(3, 3, '2025-01-20', '2025-07-20', 'Troca do kit de embreagem'),
(4, 4, '2025-02-05', '2025-08-05', 'Troca de óleo e filtro de ar'),
(5, 5, '2024-11-30', '2025-05-30', 'Revisão completa');

INSERT INTO maintenance_parts (maintenance_id, part_name, part_code, price, quantity) VALUES
(1, 'Óleo 5W30', 'OL5030', 120.00, 1),
(1, 'Filtro de óleo', 'FILT001', 35.00, 1),
(2, 'Filtro de ar', 'FILT002', 45.00, 1),
(2, 'Pastilha de freio traseira', 'PAST002', 95.00, 1),
(3, 'Kit de embreagem completo', 'KITEMB01', 850.00, 1),
(4, 'Filtro de ar esportivo', 'FILTESP', 60.00, 1),
(4, 'Óleo sintético 10W40', 'OL1040', 135.00, 1),
(5, 'Correia dentada', 'COR001', 210.00, 1),
(5, 'Velas de ignição', 'VEL001', 80.00, 4);

INSERT INTO maintenance_services (maintenance_id, service_description, cost) VALUES
(1, 'Troca de óleo e filtro', 70.00),
(1, 'Alinhamento', 60.00),
(2, 'Revisão geral', 150.00),
(2, 'Troca das pastilhas', 80.00),
(3, 'Troca do kit de embreagem', 300.00),
(4, 'Troca do óleo', 60.00),
(4, 'Instalação filtro esportivo', 45.00),
(5, 'Revisão completa + correia', 250.00),
(5, 'Troca das velas de ignição', 40.00);
