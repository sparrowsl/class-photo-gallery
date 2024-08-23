<script lang="ts">
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import type { User } from "$lib/types";

	$: user = $page.data.user as User;
</script>

<header class="sticky top-0 bg-white shadow py-3 z-30">
	<div class="navbar bg-base-100 container mx-auto">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">CPG</a>
		</div>
		{#if user}
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<h3 class="capitalize">Welcome back,</h3>
				</ul>
			</div>
		{/if}
		<div class="navbar-end gap-5">
			<a href="/photos">Photos</a>

			{#if user}
				<a href="/new-photo" class="btn btn-sm">Add Photo</a>

				<form method="post" class="btn btn-sm btn-error" use:enhance>
					<button type="submit" formaction="/?/logout">logout</button>
				</form>
			{:else}
				<a href="/login" class="btn btn-sm">Login</a>
				<a href="/signup" class="btn btn-sm">Signup</a>
			{/if}
		</div>
	</div>
</header>
