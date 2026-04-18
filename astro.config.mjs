import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jblaha.art',
  trailingSlash: 'always',
  vite: {
    plugins: [yaml()],
    build: {
      chunkSizeWarningLimit: 1500
    }
  },
  integrations: [sitemap()]
});