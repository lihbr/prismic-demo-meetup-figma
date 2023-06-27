import { repositoryName } from "./slicemachine.config.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Prismic + Nuxt Minimal Starter",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "" },
				{ name: "format-detection", content: "telephone=no" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
	},

	css: ["@fontsource-variable/libre-franklin", "@fontsource/carter-one"],

	modules: ["@nuxtjs/prismic", "@nuxtjs/tailwindcss", "nuxt-icon"],

	tailwindcss: {
		cssPath: "~/assets/style.css",
	},

	prismic: {
		endpoint: repositoryName,
		preview: "/api/preview",
		clientConfig: {
			routes: [
				{
					type: "page",
					path: "/:uid",
				},
				{
					type: "page",
					uid: "home",
					path: "/",
				},
			],
		},
	},
});
