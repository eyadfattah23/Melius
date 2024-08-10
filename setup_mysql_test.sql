-- Active: 1723121624686@@127.0.0.1@3306
CREATE DATABASE IF NOT EXISTS melius_test_db;

CREATE USER IF NOT EXISTS 'melius_test'@'localhost' IDENTIFIED BY 'Melius_test_pwd123';

GRANT ALL PRIVILEGES ON `melius_test_db`.* TO 'melius_test'@'localhost';

GRANT SELECT ON `performance_schema`.* TO 'melius_test'@'localhost';

FLUSH PRIVILEGES;
