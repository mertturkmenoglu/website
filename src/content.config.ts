import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string(),
			image: z.optional(z.string()),
			imageAlt: z.optional(z.string()),
			publish: z.boolean(),
			date: z.coerce.date(),
		}),
});

export const collections = { blog };
