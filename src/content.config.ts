import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// const projects = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),

//     type: z.enum([
//       "project",
//       "product"
//     ]),

//     status: z.enum([
//       "completed",
//       "in-progress"
//     ]),

//     date: z.string(),

//     coverImage: z.string().optional(),

//     tags: z.array(z.string()),

//     links: z.object({
//       github: z.string().optional(),
//       demo: z.string().optional(),
//     }).optional(),

//     featured: z.boolean().default(false)
//   })
// });

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.string(),
    date: z.string(),

    images: z.array(z.string()).optional(),

    tags: z.array(z.string()),

    links: z.object({
      github: z.string().optional(),
      demo: z.string().optional(),
    }).optional(),

    swatch: z.string().optional(),
    code: z.string().optional(),
  }),
});

export const collections = {
  projects
};