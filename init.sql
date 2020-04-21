CREATE DATABASE IF NOT EXISTS clueless;

USE clueless;

CREATE TABLE `player` (
	`player_id` INT NOT NULL AUTO_INCREMENT,
	`player_socket` TEXT(255) NOT NULL,
	`player_location` INT,
	`player_character` INT,
	PRIMARY KEY (`player_id`)
);

CREATE TABLE `weapon` (
	`weapon_id` INT NOT NULL AUTO_INCREMENT,
	`weapon_name` TEXT(255) NOT NULL,
	`weapon_location` INT,
	PRIMARY KEY (`weapon_id`)
);

CREATE TABLE `location` (
	`location_id` INT NOT NULL AUTO_INCREMENT,
	`location_name` TEXT(255) NOT NULL,
	`location_type` TEXT(255) NOT NULL,
	`secret_passage` INT,
	`hallway_room_1` INT,
	`hallway_room_2` INT,
	PRIMARY KEY (`location_id`)
);

CREATE TABLE `character` (
	`character_id` INT NOT NULL AUTO_INCREMENT,
	`character_name` TEXT(255) NOT NULL,
	PRIMARY KEY (`character_id`)
);

ALTER TABLE `player` ADD CONSTRAINT `player_fk0` FOREIGN KEY (`player_location`) REFERENCES `location`(`location_id`);

ALTER TABLE `player` ADD CONSTRAINT `player_fk1` FOREIGN KEY (`player_character`) REFERENCES `character`(`character_id`);

ALTER TABLE `weapon` ADD CONSTRAINT `weapon_fk0` FOREIGN KEY (`weapon_location`) REFERENCES `location`(`location_id`);

ALTER TABLE `location` ADD CONSTRAINT `location_fk1` FOREIGN KEY (`hallway_room_1`) REFERENCES `location`(`location_id`);

ALTER TABLE `location` ADD CONSTRAINT `location_fk2` FOREIGN KEY (`hallway_room_2`) REFERENCES `location`(`location_id`);

INSERT INTO `character` (character_name)
VALUES ('Miss Scarlet'),
 ('Col. Mustard'),
 ('Mrs. White'),
 ('Mr. Green'),
 ('Mrs. Peacock'),
 ('Prof. Plum');

INSERT INTO `weapon` (weapon_name)
VALUES ('CandleStick'),
 ('Revolver'),
 ('Knife'),
 ('Lead Pipe'),
 ('Rope'),
 ('Wrench');

INSERT INTO `location` (location_name, location_type, secret_passage, hallway_room_1, hallway_room_2)
VALUES
 ('Study','Room',1,null,null ),
 ('Hall','Room',0,null,null),
 ('Lounge','Room',1,null,null),
 ('Library','Room',0,null,null),
 ('Billiard','Room',0,null,null),
 ('Dining Room','Room',0,null,null),
 ('Conservatory','Room',1,null,null),
 ('Ballroom','Room',0,null,null),
 ('Kitchen','Room',1,null,null);

INSERT INTO `location` (location_name, location_type, secret_passage, hallway_room_1, hallway_room_2)
VALUES
 ('Hallway 1','Hallway',null,1,2),
 ('Hallway 2','Hallway',null,2,3),
 ('Hallway 3','Hallway',null,1,4),
 ('Hallway 4','Hallway',null,2,5),
 ('Hallway 5','Hallway',null,3,6),
 ('Hallway 6','Hallway',null,4,5),
 ('Hallway 7','Hallway',null,5,6),
 ('Hallway 8','Hallway',null,4,7),
 ('Hallway 9','Hallway',null,5,8),
 ('Hallway 10','Hallway',null,6,9),
 ('Hallway 11','Hallway',null,7,8),
 ('Hallway 12','Hallway',null,8,9);