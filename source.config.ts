import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

// Prefix absolute asset paths in RAW HTML written inside MDX (e.g.
// <img src="/docs/x.png">, <video><source src="/x.webm">) with the deploy
// base path. Markdown ![](...) images are bundled by fumadocs and skipped here
// (their src is no longer a literal string). Next.js does not prefix raw HTML,
// so we rewrite the HAST at build time. No-op when PAGES_BASE_PATH is unset.
function rehypeBasePath() {
  const basePath = process.env.PAGES_BASE_PATH || '';
  const attrs: Record<string, string[]> = {
    img: ['src'],
    source: ['src'],
    video: ['src', 'poster'],
    audio: ['src'],
    a: ['href'],
  };
  const prefix = (val: unknown): unknown => {
    if (
      typeof val !== 'string' ||
      !val.startsWith('/') ||
      val.startsWith('//') ||
      val.startsWith(`${basePath}/`)
    ) {
      return val;
    }
    return `${basePath}${val}`;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const walk = (node: any) => {
    if (!node || typeof node !== 'object') return;
    // Plain hast elements: <tag>, properties is a string-keyed map.
    if (node.type === 'element' && node.properties) {
      const keys = attrs[node.tagName];
      if (keys) {
        for (const k of keys) {
          if (node.properties[k]) node.properties[k] = prefix(node.properties[k]);
        }
      }
    }
    // Raw HTML in MDX is parsed as JSX -> mdxJsxFlowElement/mdxJsxTextElement,
    // with `name` + an `attributes` array of { name, value } (string values only).
    if (
      (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
      Array.isArray(node.attributes)
    ) {
      const keys = attrs[node.name];
      if (keys) {
        for (const attr of node.attributes) {
          if (attr?.type === 'mdxJsxAttribute' && keys.includes(attr.name)) {
            attr.value = prefix(attr.value);
          }
        }
      }
    }
    if (Array.isArray(node.children)) node.children.forEach(walk);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    if (basePath) walk(tree);
    return tree;
  };
}

// You can customize Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // Docusaurus `:::` admonitions were converted to <Callout> at migration
    // time (see scripts/convert-admonitions.mjs).
    rehypePlugins: (plugins) => [...plugins, rehypeBasePath],
  },
});
