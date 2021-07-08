DROP TABLE IF EXISTS shop;

CREATE TABLE shop(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    role varchar(255)
);