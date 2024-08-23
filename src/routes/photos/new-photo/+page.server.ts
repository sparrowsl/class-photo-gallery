import db from "$lib/prisma.js";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		redirect(307, "/");
	}

	return { user: locals.user };
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = Object.fromEntries(await request.formData());

		try {
			await db.photos.create({
				data: {
					// link: String(form.link),
					// title: String(form.title),
					// summary: String(form.summary),
					// userId: locals.user.id,
				},
			});

			return { message: "photo uploaded successfully" };
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			console.log({ error });
			return fail(400, { message: error.message });
		}
	},
};
