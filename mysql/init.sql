DROP DATABASE IF EXISTS nodedb;
CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE TABLE IF NOT EXISTS people (id int NOT NULL auto_increment, name varchar(250), primary key(id));