// // src/content/config.ts
// import { defineCollection, z } from 'astro:content';

// const blogCollection = defineCollection({
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     // Transform string to Date object
//     pubDate: z.coerce.date(),
//     heroImage: z.string().optional(),
//   }),
// });

// export const collections = { 'blog': blogCollection };

// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Define the blog collection
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

// 2. Define the techLessons collection
const techLessonsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      category: z.string(),
      level: z.string().optional(),
    }),
});

// 3. Export BOTH collections
export const collections = {
  'blog': blogCollection,
  'techLessons': techLessonsCollection,
};