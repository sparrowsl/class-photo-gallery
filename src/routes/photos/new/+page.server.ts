import type { Photo } from "$lib/types";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import * as v from "valibot";

const photoSchema = v.object({
	caption: v.pipe(v.string(), v.minLength(2, "caption is too short")),
	blob: v.pipe(
		v.file("please select an image"),
		v.mimeType(["image/*"]),
		v.minSize(1, "file is too small"),
	),
	university: v.string(),
	classYear: v.date(),
	// userId: v.string(),
});

export const load: PageServerLoad = async ({ locals }) => {
	// if (!locals.user) {
	// 	redirect(307, "/photos");
	// }
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(
			await request.formData(),
		) as unknown as Photo;

		console.log(form);
	},
};
