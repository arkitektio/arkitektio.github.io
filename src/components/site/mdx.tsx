import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';
import type { Persona } from '@/lib/persona';
import { PersonaCard } from './persona';

/**
 * Markdown images (`![alt](/docs/...)`) are bundled by fumadocs-mdx's
 * remark-image: the file is imported statically, so the rendered <img> carries
 * its real width/height (no layout shift) and lazy-loads. On top of that they
 * open in a lightbox on click, since most docs figures are dense diagrams.
 * Write images as markdown, not raw <img>, so they go through this path.
 */
function DocImage(props: ComponentProps<'img'>) {
  return <ImageZoom {...(props as ComponentProps<typeof ImageZoom>)} className="w-full rounded-lg" />;
}

/**
 * A part of a page written for one persona. global.css hides it while another
 * persona is picked, unless a link points into it.
 */
function PersonaSection({ persona, ...props }: ComponentProps<'section'> & { persona: Persona }) {
  return <section {...props} data-for-persona={persona} />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: DocImage,
    PersonaCard,
    PersonaSection,
    ...components,
  } as MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
