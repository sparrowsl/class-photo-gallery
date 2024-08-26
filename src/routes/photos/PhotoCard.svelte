<script lang="ts">
	import type { Photo } from "$lib/types.ts";

	export let photo: Photo;
</script>

<figure class="shadow-lg min-h-52 bg-white rounded">
	<img
		src={`data:image/webp;base64,${photo.blob}` ||
			"https://placehold.co/250x200"}
		alt={photo.caption}
		class="w-full max-w-56 lg:max-w-64"
		loading="lazy"
	/>
	<figcaption class="p-3">
		<p class="text-sm text-gray-700">{photo.caption}</p>
		<div class="flex items-center justify-between text-sm">
			<p>{photo.university}</p>
			<p>{photo.classYear}</p>
		</div>
	</figcaption>
</figure>
