import "dotenv/config";

export const env = {
	PORT: Number(process.env.PORT) || 3333,
	DATABASE_URL: process.env.DATABASE_URL || "./data/bikcraft.db",
	BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET || "dev-secret-change-in-production",
	BETTER_AUTH_URL: process.env.BETTER_AUTH_URL || "http://localhost:3333",
	STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
	STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || "",
	FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
};
