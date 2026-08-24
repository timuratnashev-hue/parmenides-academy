import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Статьи/материалы академии. Один markdown-файл = одна страница.
// Путь файла: src/content/articles/<lang>/<slug>.md  →  URL: /<slug> (ru), /en/<slug>, /fr/<slug>
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),          // 1–2 фразы, идут в <meta description> и в список материалов
    date: z.coerce.date(),
    lang: z.enum(['ru', 'en', 'fr']).default('ru'),
    section: z.enum(['exercises', 'translations', 'commentary', 'infographics', 'qa', 'notes']).default('notes'),
    draft: z.boolean().default(false), // true — страница не собирается
  }),
});

export const collections = { articles };
