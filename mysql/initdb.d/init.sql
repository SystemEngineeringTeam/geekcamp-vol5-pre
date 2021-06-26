use todo;

CREATE TABLE `dates` (
	`id` SERIAL,
	`date` DATE NOT NULL,
	`deadline` DATE NOT NULL
);

CREATE TABLE `tasks` (
	`id` SERIAL PRIMARY KEY,
	`message` VARCHAR(255) NOT NULL COMMENT 'Task Content',
	`dateID` INT NOT NULL UNIQUE,
    FOREIGN KEY(id) REFERENCES dates(id)
);