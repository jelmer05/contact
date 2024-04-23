// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	build: {
		transpile: ["vue-clerk", "@clerk/clerk-js"],
	},
	runtimeConfig: {
		public: {
			clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
		},
		clerkSecretKey: process.env.CLERK_SECRET_KEY,
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
