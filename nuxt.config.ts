// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png",
				},
				{ rel: "manifest", href: "/site.webmanifest" },
			],
		},
	},
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
