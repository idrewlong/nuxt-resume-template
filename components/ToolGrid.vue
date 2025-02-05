<template>
	<div>
		<h2 class="text-3xl font-bold mb-12">Tools</h2>

		<!-- Main Stack -->
		<div class="mb-16">
			<h3 class="text-zinc-500 mb-8">Main Stack</h3>
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
				<div
					v-for="tool in mainTools"
					:key="tool.name"
					class="flex flex-col items-center"
				>
					<Icon :name="tool.icon" class="w-6 h-6 mb-2" size="32px" />
					<span class="text-sm">{{ tool.name }}</span>
				</div>
			</div>
		</div>

		<!-- Basic Knowledge -->
		<div>
			<h3 class="text-zinc-500 mb-8">Basic Knowledge</h3>
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
				<div
					v-for="tool in basicTools"
					:key="tool.name"
					class="flex flex-col items-center"
				>
					<Icon :name="tool.icon" class="w-6 h-6 mb-2" size="32px" />
					<span class="text-sm">{{ tool.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const mainTools = [
	{ name: 'Nuxt', icon: 'logos:nuxt-icon' },
	{ name: 'React', icon: 'logos:react' },
	{ name: 'Laravel', icon: 'logos:laravel' },
	{ name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
];

const basicTools = [
	{ name: 'TypeScript', icon: 'logos:typescript-icon' },
	{ name: 'JavaScript', icon: 'logos:javascript' },
	{ name: 'Go', icon: 'logos:go' },
	{ name: 'PHP', icon: 'logos:php' },
];
</script>
