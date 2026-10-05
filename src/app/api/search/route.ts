import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { personas } from '@/lib/persona';

export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
  // The search can be narrowed to a persona. A filter keeps a page only if it
  // carries the tag, so a page for everyone carries all of them.
  buildIndex: (page) => ({
    id: page.url,
    url: page.url,
    title: page.data.title,
    description: page.data.description,
    structuredData: page.data.structuredData,
    tag: page.data.personas.length > 0 ? page.data.personas : [...personas],
  }),
});
