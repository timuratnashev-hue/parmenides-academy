export type Lang = 'ru' | 'en' | 'fr';

export const TELEGRAM = 'https://t.me/timuratnashev';

export const ui: Record<Lang, Record<string, string>> = {
  ru: {
    site: 'Parmenides Academy',
    tagline: 'Платон, «Парменид» — полигон западной мысли',
    nav_home: 'Курс',
    nav_map: 'Карта филиаций',
    nav_polygons: 'Полигоны вне Запада',
    nav_exercises: 'Упражнения',
    nav_materials: 'Материалы',
    nav_portfolio: 'Портфолио',
    cta: 'Написать Тимуру',
    cta_sub: 'Приглашение на семинар · отвечаю на все письма',
    open_access: 'Все материалы академии открыты для чтения, цитирования и распространения — со ссылкой на источник.',
    copyright: 'Тимур Атнашев · Parmenides Academy',
    footer: 'Камерный семинар медленного чтения по диалогу Платона «Парменид»',
    footer_series: 'Интеллектуальный гимнастический зал',
  },
  en: {
    site: 'Parmenides Academy',
    tagline: "Plato's Parmenides — the proving ground of Western thought",
    nav_home: 'Course',
    nav_map: 'Filiation map',
    nav_polygons: 'Non-Western polygons',
    nav_exercises: 'Exercises',
    nav_materials: 'Materials',
    nav_portfolio: 'Portfolio',
    cta: 'Write to Timur',
    cta_sub: 'An invitation to the seminar · every message gets a reply',
    open_access: 'All materials of the Academy are open to read, quote and share — with attribution.',
    copyright: 'Timur Atnashev · Parmenides Academy',
    footer: 'A dialectical seminar among friends on Plato’s Parmenides',
    footer_series: 'Intellectual gymnasium',
  },
  fr: {
    site: 'Parmenides Academy',
    tagline: 'Le Parménide de Platon — terrain d’essai de la pensée occidentale',
    nav_home: 'Cours',
    nav_map: 'Carte des filiations',
    nav_polygons: 'Polygones hors Occident',
    nav_exercises: 'Exercices',
    nav_materials: 'Matériaux',
    nav_portfolio: 'Portfolio',
    cta: 'Écrire à Timur',
    cta_sub: 'Invitation au séminaire · je réponds à tous les messages',
    open_access: 'Tous les matériaux de l’Académie sont libres à lire, citer et partager — avec mention de la source.',
    copyright: 'Timur Atnashev · Parmenides Academy',
    footer: 'Séminaire dialectique entre amis sur le Parménide de Platon',
    footer_series: 'Gymnase intellectuel',
  },
};

export function prefix(lang: Lang) {
  return lang === 'ru' ? '' : `/${lang}`;
}
