// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define your collection(s)
const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/works" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string(),
    summary: z.string(),
    url: z.string().optional(),
    pubDate: z.coerce.date(),
    releaseYM: z
      .object({
        year: z.number().int(),
        month: z.number().int().min(1).max(12),
      })
      .optional(),
    role: z.string().optional(),
    credit: z.string().optional(),
    viewBtn: z.boolean().optional(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { works };
