import { JWT_SECRET_KEY } from "$env/static/private";
import type { User } from "$lib/types";
import type { Handle } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

export const handle: Handle = async ({ event, resolve }) => {
	const cookie = event.cookies.get("user");

	if (!cookie) {
		return await resolve(event);
	}

	try {
		// unsign the JWT cookie payload to user object
		const payload = jwt.verify(cookie, JWT_SECRET_KEY) as User;

		event.locals.user = payload;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (_e: any) {
		console.log("could not parse JWT payload");
		console.log(_e.message);
	}

	return await resolve(event);
};
