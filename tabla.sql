CREATE DATABASE user_interface;

CREATE USER 'user_db_user'@'localhost' IDENTIFIED BY 'user_db_password';

GRANT SELECT,INSERT,UPDATE,DELETE ON user_interface.* TO 'user_db_user'@'localhost';

USE user_interface;


CREATE TABLE

CREATE TABLE `form` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(16) COLLATE utf8_hungarian_ci NOT NULL,
  `type` VARCHAR(32) COLLATE utf8_hungarian_ci NOT NULL,
  `distance` INT(8) UNSIGNED DEFAULT 0,
  `weight` INT(8) UNSIGNED DEFAULT 0,
  `height` INT(8) UNSIGNED DEFAULT 0,
  `color` VARCHAR(16) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `latitude` FLOAT DEFAULT 0,
  `longitude` FLOAT DEFAULT 0,
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci





