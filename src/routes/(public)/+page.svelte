<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class="container  mx-auto flex h-full max-w-md flex-col items-center justify-center gap-10">
	{#if $page.data?.session?.user}
		<div class="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img class="h-full max-h-16" src={$page.data.session?.user?.image || 'favicon.png'} />
			<div class="md:ml-7">
				<LightSwitch />
			</div>
			<button class="btn variant-ghost-surface h-full" on:click={() => signOut()}>Log out</button>
		</div>
	{:else}
		<div class="md:ml-7">
			<LightSwitch />
		</div>
		<button class="btn variant-ghost-surface" on:click={() => signIn()}>Login</button>
	{/if}
	<div
		class="logo-cloud grid-cols-1 gap-4 overflow-visible [&>.logo-item]:variant-ghost-primary lg:grid-cols-2 [&>.logo-item]:rounded [&>.logo-item]:px-4 [&>.logo-item]:transition-all"
	>
		<div class="logo-item">
			<span>
				{$page.data.session?.user?.name || 'Guest'}
			</span>
		</div>
		<div class="logo-item">
			<span>
				{$page.data.session?.user?.email || 'Guest@guest.com'}
			</span>
		</div>
	</div>
</div>
