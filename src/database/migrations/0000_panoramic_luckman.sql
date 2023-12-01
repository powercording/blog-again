CREATE TABLE `BlogUser` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(64) NOT NULL,
	`email` varchar(64) NOT NULL,
	`password` varchar(256) NOT NULL,
	`avatar` varchar(191),
	CONSTRAINT `BlogUser_id` PRIMARY KEY(`id`),
	CONSTRAINT `BlogUser_email_unique` UNIQUE(`email`)
);
