// Поддомен coevolution.parmenides.academy — подкаст «Кто кого образует». Отдельный Pages-проект с корнем coevolution/.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coevolution.parmenides.academy',
  integrations: [sitemap()],
});
