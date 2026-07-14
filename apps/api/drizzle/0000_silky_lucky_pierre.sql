CREATE TABLE `bicycles` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`price` real NOT NULL,
	`description` text NOT NULL,
	`image` text NOT NULL,
	`features` text DEFAULT '[]',
	`created_at` text,
	`updated_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `bicycles_slug_unique` ON `bicycles` (`slug`);--> statement-breakpoint
CREATE TABLE `cart_items` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`bicycle_id` text NOT NULL,
	`quantity` integer DEFAULT 1 NOT NULL,
	`created_at` text,
	FOREIGN KEY (`bicycle_id`) REFERENCES `bicycles`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `order_items` (
	`id` text PRIMARY KEY NOT NULL,
	`order_id` text NOT NULL,
	`bicycle_id` text NOT NULL,
	`quantity` integer DEFAULT 1 NOT NULL,
	`price` real NOT NULL,
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`bicycle_id`) REFERENCES `bicycles`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`total` real NOT NULL,
	`stripe_payment_intent_id` text,
	`created_at` text,
	`updated_at` text
);
