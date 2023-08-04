import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import rehypeExternalLinks from "rehype-external-links";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mertturkmenoglu.com',
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypeExternalLinks],
  },
});