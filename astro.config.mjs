// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercelServerless from '@astrojs/vercel/serverless';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// https://astro.build/config
// @ts-ignore
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: process.env.NODE_ENV === "DEVELOPMENT" ? node({ mode: 'standalone' }) : vercelServerless({}),
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