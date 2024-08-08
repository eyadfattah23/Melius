-- Active: 1723121624686@@127.0.0.1@3306
CREATE DATABASE IF NOT EXISTS melius_dev_db;

CREATE USER IF NOT EXISTS 'melius_dev'@'localhost' IDENTIFIED BY 'Melius_dev_pwd123';

GRANT ALL PRIVILEGES ON `melius_dev_db`.* TO 'melius_dev'@'localhost';

GRANT SELECT ON `performance_schema`.* TO 'melius_dev'@'localhost';

FLUSH PRIVILEGES;
