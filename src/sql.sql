CREATE TABLE orders (
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
address VARCHAR(255) NOT NULL,
recipient VARCHAR(255) NOT NULL,
comment VARCHAR(255) NOT NULL,
price INT NOT NULL
);
INSERT INTO orders (id, name, address, recipient, comment, price) VALUES (123, 'Одяг','вул. Бальзака Оноре, 4А', 'Куриленко Сергій', 'Коментар', 400);