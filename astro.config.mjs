// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
// @ts-ignore
export default defineConfig({
  integrations: [react()],
  adapter: process.env.NODE_ENV === "DEVELOPMENT" ? node({mode: 'standalone'}) : vercel(),
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