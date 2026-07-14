import { eq, inArray } from "drizzle-orm";
import type { FastifyInstance } from "fastify";
import { fromNodeHeaders } from "better-auth/node";
import { randomUUID } from "node:crypto";
import Stripe from "stripe";
import { auth } from "../auth.js";
import { env } from "../config/env.js";
import { db } from "../db/index.js";
import { bicycles, cartItems, orderItems, orders } from "../db/schema.js";

const stripe = env.STRIPE_SECRET_KEY ? new Stripe(env.STRIPE_SECRET_KEY) : null;

export async function checkoutRoutes(app: FastifyInstance) {
	app.addHook("onRequest", async (request, reply) => {
		const session = await auth.api.getSession({
			headers: fromNodeHeaders(request.headers),
		});

		if (!session) {
			return reply.status(401).send({ error: "Unauthorized" });
		}

		(request as any).userId = session.user.id;
	});

	app.post("/checkout", async (request, reply) => {
		const userId = (request as any).userId;

		const items = db.select().from(cartItems).where(eq(cartItems.userId, userId)).all();

		if (items.length === 0) {
			return reply.status(400).send({ error: "Cart is empty" });
		}

		const bikeIds = items.map((i) => i.bicycleId);
		const bikes = db.select().from(bicycles).where(inArray(bicycles.id, bikeIds)).all();

		const bikeMap = new Map(bikes.map((b) => [b.id, b]));
		const total = items.reduce((sum, item) => {
			const bike = bikeMap.get(item.bicycleId);
			return sum + (bike?.price ?? 0) * item.quantity;
		}, 0);

		const orderId = randomUUID();
		let paymentIntentId: string | null = null;

		if (stripe) {
			const paymentIntent = await stripe.paymentIntents.create({
				amount: Math.round(total * 100),
				currency: "brl",
				metadata: { userId },
			});
			paymentIntentId = paymentIntent.id;
		}

		db.insert(orders)
			.values({
				id: orderId,
				userId,
				total,
				stripePaymentIntentId: paymentIntentId,
			})
			.run();

		for (const item of items) {
			const bike = bikeMap.get(item.bicycleId);
			if (bike) {
				db.insert(orderItems)
					.values({
						id: randomUUID(),
						orderId,
						bicycleId: item.bicycleId,
						quantity: item.quantity,
						price: bike.price,
					})
					.run();
			}
		}

		db.delete(cartItems).where(eq(cartItems.userId, userId)).run();

		return { orderId, clientSecret: paymentIntentId ? undefined : null };
	});

	app.post("/webhook/stripe", async (request, reply) => {
		if (!stripe) {
			return reply.status(501).send({ error: "Stripe not configured" });
		}

		const sig = request.headers["stripe-signature"] as string;

		let event: Stripe.Event;
		try {
			event = stripe.webhooks.constructEvent(
				JSON.stringify(request.body),
				sig,
				env.STRIPE_WEBHOOK_SECRET,
			);
		} catch {
			return reply.status(400).send({ error: "Invalid signature" });
		}

		if (event.type === "payment_intent.succeeded") {
			const paymentIntent = event.data.object as Stripe.PaymentIntent;
			db.update(orders)
				.set({ status: "paid" })
				.where(eq(orders.stripePaymentIntentId, paymentIntent.id))
				.run();
		}

		return reply.status(200).send({ received: true });
	});
}
