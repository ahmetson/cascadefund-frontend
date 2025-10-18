import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": ["@storybook/addon-mcp"],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [
            require('@tailwindcss/postcss'),
            require('autoprefixer'),
          ],
        },
      },
      plugins: [tsconfigPaths()],
    });
  }
};
export default config;