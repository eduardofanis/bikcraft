import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const bicycles = sqliteTable("bicycles", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	slug: text("slug").notNull().unique(),
	price: real("price").notNull(),
	description: text("description").notNull(),
	image: text("image").notNull(),
	features: text("features", { mode: "json" }).$type<string[]>().default([]),
	createdAt: text("created_at").$defaultFn(() => new Date().toISOString()),
	updatedAt: text("updated_at").$defaultFn(() => new Date().toISOString()),
});

export const cartItems = sqliteTable("cart_items", {
	id: text("id").primaryKey(),
	userId: text("user_id").notNull(),
	bicycleId: text("bicycle_id")
		.notNull()
		.references(() => bicycles.id),
	quantity: integer("quantity").notNull().default(1),
	createdAt: text("created_at").$defaultFn(() => new Date().toISOString()),
});

export const orders = sqliteTable("orders", {
	id: text("id").primaryKey(),
	userId: text("user_id").notNull(),
	status: text("status").notNull().default("pending"),
	total: real("total").notNull(),
	stripePaymentIntentId: text("stripe_payment_intent_id"),
	createdAt: text("created_at").$defaultFn(() => new Date().toISOString()),
	updatedAt: text("updated_at").$defaultFn(() => new Date().toISOString()),
});

export const orderItems = sqliteTable("order_items", {
	id: text("id").primaryKey(),
	orderId: text("order_id")
		.notNull()
		.references(() => orders.id),
	bicycleId: text("bicycle_id")
		.notNull()
		.references(() => bicycles.id),
	quantity: integer("quantity").notNull().default(1),
	price: real("price").notNull(),
});
