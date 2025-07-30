// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

const config = {
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      css: {
        devSourcemap: true,
        transformer: "postcss"
      }
    }
  }
}
if (process.env.NODE_ENV === "DEVELOPMENT") {
  // @ts-ignore
  config["adapter"] = node({mode: 'standalone'});
}

// https://astro.build/config
// @ts-ignore
export default defineConfig(config);