<template>
	<header class="fixed top-0 w-full z-50 bg-zinc-900/80 backdrop-blur-sm">
		<nav class="container mx-auto px-4 py-4 flex justify-between items-center">
			<NuxtLink to="/" class="text-2xl text-white font-bold tracking-tighter">
				Andrew.Long</NuxtLink
			>
			<div class="flex gap-6">
				<!-- <NuxtLink
					v-for="item in navItems"
					:key="item.href"
					:to="item.href"
					class="hover:text-gray-300 text-white transition-colors"
				>
					{{ item.label }}
				</NuxtLink> -->
			</div>
		</nav>
	</header>
</template>

<script setup>
const navItems = [
	{ label: 'Work', href: '#work' },
	{ label: 'About', href: '#about' },
	{ label: 'Contact', href: '#contact' },
];
</script>
