// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://mertturkmenoglu.com",
	integrations: [mdx(), sitemap()],

	fonts: [
		{
			provider: fontProviders.google(),
			name: "IBM Plex Sans",
			cssVariable: "--font-ibm-plex-sans",
			fallbacks: ["sans-serif"],
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
