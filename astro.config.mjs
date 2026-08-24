import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://parmenides.academy',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
});
