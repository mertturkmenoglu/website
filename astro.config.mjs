import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import rehypeExternalLinks from "rehype-external-links";
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://mertturkmenoglu.com',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      [remarkToc, { heading: "contents"} ],
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypeExternalLinks, { content: { type: 'text', value: ' ↩' } }],
      [rehypeAutolinkHeadings, { behavior: 'append' }]
    ],
  },
  experimental: {
    viewTransitions: true,
  }
});
