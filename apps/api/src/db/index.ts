import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import path from "node:path";
import { env } from "../config/env.js";
import * as schema from "./schema.js";

const dbPath = path.resolve(env.DATABASE_URL);
const dir = path.dirname(dbPath);

const sqlite = new Database(dbPath);
sqlite.pragma("journal_mode = WAL");
sqlite.pragma("foreign_keys = ON");

export const db = drizzle(sqlite, { schema });

export function runMigrations() {
	migrate(db, { migrationsFolder: path.resolve("drizzle") });
}
