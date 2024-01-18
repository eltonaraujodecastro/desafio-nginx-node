CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE TABLE IF NOT EXISTS PEOPLE (id int NOT NULL auto_increment, nome varchar(250), primary key(id));