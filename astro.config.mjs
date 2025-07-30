// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
console.log(`Don't forget to use node adapter in the localhost only, using NODE_ENV`);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: node({mode: 'standalone'}),
  vite: {
    plugins: [tailwindcss()],
    build: {
      css: {
        devSourcemap: true,
        transformer: "postcss"
      }
    }
  }
});