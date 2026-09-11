import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import type { MDXComponents } from 'mdx/types';
import type { ComponentProps } from 'react';

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

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: DocImage,
    ...components,
  } as MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
