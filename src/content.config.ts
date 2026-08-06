import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    subTitle: z.string(),
    visible: z.boolean().default(true),
    tags: z.array(z.string()),
    date: z.date(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    status: z.string()
  }),
});
 
const blogs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
    date: z.date(),
    state: z.string()
  }),
});

const workshops = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: "./src/content/workshops" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    visible: z.boolean().default(true),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    innerCover: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()),
    date: z.date(),
    state: z.string()
  }),
});

// Export all collections
export const collections = {projects, blogs, workshops};
