// Поддомен coevolution.parmenides.academy — подкаст «Кто кого образует». Отдельный Pages-проект с корнем coevolution/.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coevolution.parmenides.academy',
  // /gipotezy — только по прямой ссылке (25.11.2026), в sitemap не попадает.
  integrations: [sitemap({ filter: (page) => !page.includes('/gipotezy') })],
});
