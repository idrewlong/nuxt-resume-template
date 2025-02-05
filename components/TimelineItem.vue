<template>
	<div
		class="relative pl-8 border-l border-zinc-700 transition-all hover:border-white"
	>
		<span class="text-sm text-zinc-500">{{ period }}</span>
		<h3 class="text-xl font-medium mt-1">{{ title }}</h3>
		<p class="text-zinc-400 mt-1">{{ company }}</p>
		<p class="text-zinc-400 mt-2">{{ description }}</p>
	</div>
</template>

<script setup>
defineProps({
	period: String,
	title: String,
	company: String,
	description: String,
});
</script>
