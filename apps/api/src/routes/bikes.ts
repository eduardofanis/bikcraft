import type { FastifyInstance } from "fastify";
import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { bicycles } from "../db/schema.js";

export async function bikeRoutes(app: FastifyInstance) {
	app.get("/bikes", async () => {
		return db.select().from(bicycles).all();
	});

	app.get<{ Params: { slug: string } }>("/bikes/:slug", async (request, reply) => {
		const bike = db.select().from(bicycles).where(eq(bicycles.slug, request.params.slug)).get();

		if (!bike) {
			return reply.status(404).send({ error: "Bicycle not found" });
		}

		return bike;
	});
}
