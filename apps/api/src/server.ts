import cors from "@fastify/cors";
import Fastify from "fastify";
import { auth } from "./auth.js";
import { env } from "./config/env.js";
import { registerRoutes } from "./routes/index.js";

const server = Fastify({ logger: true });

await server.register(cors, { origin: env.FRONTEND_URL, credentials: true });

server.route({
	method: ["GET", "POST"],
	url: "/api/auth/*",
	async handler(request, reply) {
		const url = new URL(request.url, `http://${request.headers.host}`);
		const headers = new Headers();

		for (const [key, value] of Object.entries(request.headers)) {
			if (value) {
				headers.set(key, Array.isArray(value) ? value.join(", ") : value);
			}
		}

		const req = new Request(url.toString(), {
			method: request.method,
			headers,
			body: request.body ? JSON.stringify(request.body) : undefined,
		});

		const response = await auth.handler(req);

		reply.status(response.status);
		response.headers.forEach((value, key) => reply.header(key, value));
		return reply.send(response.body ? await response.text() : null);
	},
});

await registerRoutes(server);

const start = async () => {
	try {
		await server.listen({ port: env.PORT, host: "0.0.0.0" });
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};

start();
