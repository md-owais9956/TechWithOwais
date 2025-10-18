// import { defineCollection, z } from 'astro:content';
// import { glob } from 'astro/loaders';

// const blog = defineCollection({
// 	// Load Markdown and MDX files in the `src/content/blog/` directory.
// 	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
// 	// Type-check frontmatter using a schema
// 	schema: ({ image }) =>
// 		z.object({
// 			title: z.string(),
// 			description: z.string(),
// 			// Transform string to Date object
// 			pubDate: z.coerce.date(),
// 			updatedDate: z.coerce.date().optional(),
// 			heroImage: image().optional(),
// 		}),
// });

// export const collections = { blog };



// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 1. Define the blog collection
const blogCollection = defineCollection({
  type: 'content', // Use 'content' for .md/.mdx files
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(), // Use the image() helper
    }),
});

// 2. --- THIS IS THE MISSING PIECE ---
// Define your new techLessons collection
const techLessonsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(), // Use the image() helper

      // Fields for your tech lessons page
      category: z.string(), // e.g., 'webdev', 'DSA'
      level: z.string().optional(), // e.g., 'Beginner'
    }),
});

// 3. --- THIS IS THE FIX ---
// You MUST export BOTH collections here.
export const collections = {
  'blog': blogCollection,
  'techLessons': techLessonsCollection, // <-- This finally adds your collection
};