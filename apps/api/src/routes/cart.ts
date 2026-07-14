import { and, eq } from "drizzle-orm";
import type { FastifyInstance } from "fastify";
import { fromNodeHeaders } from "better-auth/node";
import { randomUUID } from "node:crypto";
import { auth } from "../auth.js";
import { db } from "../db/index.js";
import { bicycles, cartItems } from "../db/schema.js";

export async function cartRoutes(app: FastifyInstance) {
	app.addHook("onRequest", async (request, reply) => {
		const session = await auth.api.getSession({
			headers: fromNodeHeaders(request.headers),
		});

		if (!session) {
			return reply.status(401).send({ error: "Unauthorized" });
		}

		(request as any).userId = session.user.id;
	});

	app.get("/cart", async (request) => {
		const userId = (request as any).userId;
		return db.select().from(cartItems).where(eq(cartItems.userId, userId)).all();
	});

	app.post<{ Body: { bicycleId: string; quantity?: number } }>("/cart", async (request, reply) => {
		const userId = (request as any).userId;
		const { bicycleId, quantity = 1 } = request.body;

		const bike = db.select().from(bicycles).where(eq(bicycles.id, bicycleId)).get();
		if (!bike) {
			return reply.status(404).send({ error: "Bicycle not found" });
		}

		const existing = db
			.select()
			.from(cartItems)
			.where(and(eq(cartItems.userId, userId), eq(cartItems.bicycleId, bicycleId)))
			.get();

		if (existing) {
			db.update(cartItems)
				.set({ quantity: existing.quantity + quantity })
				.where(eq(cartItems.id, existing.id))
				.run();
			return { success: true };
		}

		db.insert(cartItems)
			.values({ id: randomUUID(), userId, bicycleId, quantity })
			.run();

		return { success: true };
	});

	app.delete<{ Params: { id: string } }>("/cart/:id", async (request, reply) => {
		const userId = (request as any).userId;
		const item = db
			.select()
			.from(cartItems)
			.where(and(eq(cartItems.id, request.params.id), eq(cartItems.userId, userId)))
			.get();

		if (!item) {
			return reply.status(404).send({ error: "Cart item not found" });
		}

		db.delete(cartItems).where(eq(cartItems.id, request.params.id)).run();
		return { success: true };
	});
}
