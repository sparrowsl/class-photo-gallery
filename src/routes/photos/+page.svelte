<script lang="ts">
	import PhotoCard from "./PhotoCard.svelte";
	import universities from "$lib/universities.json";
	import type { PageServerData } from "../$types";

	let university = "all";

	const filterUniPhotos = (value = "all") => {
		if (value === "all") {
			return universities;
		}

		return universities.filter((uni) => uni === value);
	};

	$: photos = filterUniPhotos(university);

	export let data: PageServerData;
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

		<h2>Total Images 10</h2>

		<a href="/photos/new" class="btn-accent btn">Share Photo</a>
	</div>

	<div class="flex flex-wrap gap-2 lg:gap-5 justify-start">
		{#each data.photos as photo (photo.id)}
			<PhotoCard {photo} />
		{/each}
	</div>
</section>
