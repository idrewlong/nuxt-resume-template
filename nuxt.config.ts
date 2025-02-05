import tailwindcss from '@tailwindcss/vite';
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()],
	},
	image: {
		format: ['webp'],
		domains: [''],
	},
	modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
});
