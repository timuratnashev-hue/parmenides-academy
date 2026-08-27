import type { APIRoute } from 'astro';
import { sections, chapters } from '../../data/parmenidesText';

export function getStaticPaths() {
  return chapters.map((c) => ({ params: { slug: c.slug }, props: { c } }));
}

export const GET: APIRoute = ({ props }) => {
  const c: any = (props as any).c;
  const head = [
    `Платон. Парменид, ${c.first}–${c.last} — ${c.title}`,
    `Источник: https://parmenides.academy/parmenid/${c.slug}`,
    `Греческий: J. Burnet, Platonis Opera II, Oxford 1901 (Perseus, CC BY-SA 3.0).`,
    `Русский: пер. В. Н. Карпова, СПб. 1879 — общественное достояние.`,
    '',
  ].join('\n');
  const body = c.sections
    .map((k: string) => `[${k}]\n${sections[k].r}\n\n[${k} grc]\n${sections[k].g}\n`)
    .join('\n');
  return new Response(head + body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
