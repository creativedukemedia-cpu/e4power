CREATE TABLE `contact_inquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(160) NOT NULL,
	`email` varchar(320) NOT NULL,
	`inquiryTopic` varchar(160) NOT NULL,
	`organizationType` varchar(160) NOT NULL,
	`message` text NOT NULL,
	`routingLane` varchar(160) NOT NULL,
	`routingReason` varchar(255) NOT NULL,
	`status` enum('new','reviewed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_inquiries_id` PRIMARY KEY(`id`)
);
