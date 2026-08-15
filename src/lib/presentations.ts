/* The catalogue behind the Presentations tab. Each deck lives in its own route
   under `src/app/(home)/presentations/<slug>` and renders a client component
   from `src/components/presentations/decks`; this file is just the metadata the
   index page and the deck headers read. */

export type Presentation = {
  slug: string;
  title: string;
  /** One line for the card and the page subtitle. */
  description: string;
  /** Which part of Arkitekt the deck is about. */
  topic: string;
  tags: string[];
  slides: number;
  /** Rough talk length, in minutes. */
  minutes: number;
  /** The docs page the deck is drawn from, if there is one. */
  docsHref?: string;
};

export const presentations: Presentation[] = [
  {
    slug: 'mikro-coordinate-system',
    title: 'The Mikro coordinate system',
    description:
      'How long is this AIS? Answering one pointed question means crossing an image, a mask and a table — this is the model that makes that a query instead of a convention.',
    topic: 'Mikro',
    tags: ['Coordinates', 'Metadata', 'Microscopy'],
    slides: 25,
    minutes: 15,
    docsHref: '/docs/design/services/mikro/coordinate-systems',
  },
];

export function getPresentation(slug: string): Presentation | undefined {
  return presentations.find((presentation) => presentation.slug === slug);
}
