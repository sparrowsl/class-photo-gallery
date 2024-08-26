<script lang="ts">
	import PhotoCard from "./PhotoCard.svelte";
	import universities from "$lib/universities.json";
	import type { PageServerData } from "../$types";

	export let data: PageServerData;

	let university = "all";

	const filterUniPhotos = (value = "all") => {
		if (value === "all") {
			return data.photos;
		}

		console.log({ value });

		return data.photos?.filter((photo) => photo.university === value);
	};

	$: photos = filterUniPhotos(university);
</script>

<section class="min-h-[80vh] py-5">
	<div class="flex items-center justify-between mb-10">
		<select
			name="university"
			class="select select-bordered"
			on:change={(e) => (university = e.target?.value)}
		>
			<option value="all">All</option>
			{#each universities as university (university)}
				<option value={university}>{university}</option>
			{/each}
		</select>

		<h2>Total Images {photos.length || 0}</h2>

		<a href="/photos/new" class="btn-accent btn">Share Photo</a>
	</div>

	<div class="flex flex-wrap gap-2 lg:gap-5 justify-start">
		{#each photos as photo (photo.id)}
			<PhotoCard {photo} />
		{:else}
			<p class="text-gray-600 italic">
				No photos uploaded for {university}!
			</p>
		{/each}
	</div>
</section>
