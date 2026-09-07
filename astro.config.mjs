// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chan-portfolio.web.app',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
