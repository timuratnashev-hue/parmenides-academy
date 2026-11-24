import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://parmenides.academy',
  // /coevolution* — 301 на поддомен (см. public/_redirects), в sitemap не попадает (25.11.2026).
  integrations: [sitemap({ filter: (page) => !page.includes('/coevolution') })],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
});
