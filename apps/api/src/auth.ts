import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { env } from "./config/env.js";

const sqlite = new Database(env.DATABASE_URL);

export const auth = betterAuth({
	database: sqlite,
	secret: env.BETTER_AUTH_SECRET,
	baseURL: env.BETTER_AUTH_URL,
	emailAndPassword: {
		enabled: true,
	},
});
