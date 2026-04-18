import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "*.yml", base: "./src/data/projects" }),
});

export const collections = { projects };