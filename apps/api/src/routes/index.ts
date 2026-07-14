import type { FastifyInstance } from "fastify";
import { bikeRoutes } from "./bikes.js";
import { cartRoutes } from "./cart.js";
import { checkoutRoutes } from "./checkout.js";

export async function healthRoutes(app: FastifyInstance) {
	app.get("/health", async () => {
		return { status: "ok" };
	});
}

export async function registerRoutes(app: FastifyInstance) {
	await app.register(healthRoutes);
	await app.register(bikeRoutes, { prefix: "/api" });
	await app.register(cartRoutes, { prefix: "/api" });
	await app.register(checkoutRoutes, { prefix: "/api" });
}
