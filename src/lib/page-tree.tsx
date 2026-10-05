import Link from 'next/link';
import type { Node, Root } from 'fumadocs-core/page-tree';
import type { LoaderPlugin } from 'fumadocs-core/source';
import { isPersona, personas, type Persona } from './persona';

/**
 * Sidebar separators that link somewhere.
 *
 * Fumadocs separators are plain text. In a meta.json, `---[Label](/url)---` parses
 * as a separator with icon `Label` and name `(/url)`; this turns such a separator
 * into a link to `/url` labelled `Label`, so a section heading can open its
 * overview page (e.g. `---[Apps](/docs/guides/apps)---`).
 */
const LINK_NAME = /^\((\/[^)]*)\)$/;

function linkNode(node: Node): Node {
  if (node.type === 'separator') {
    const match = typeof node.name === 'string' ? LINK_NAME.exec(node.name) : null;
    if (match && typeof node.icon === 'string') {
      return {
        ...node,
        icon: undefined,
        name: (
          <Link href={match[1]} className="hover:text-fd-foreground">
            {node.icon}
          </Link>
        ),
      };
    }
    return node;
  }
  if (node.type === 'folder') {
    return {
      ...node,
      index: node.index,
      children: node.children.map(linkNode),
    };
  }
  return node;
}

export function withLinkedSeparators(tree: Root): Root {
  return { ...tree, children: tree.children.map(linkNode) };
}

/** A page tree node that knows who it is for. No `personas` means everyone. */
export type Tagged<T> = T & { personas?: Persona[] };

// The union of who the nodes are for, or nothing as soon as one is for everyone.
function union(nodes: Tagged<Node>[]): Persona[] | undefined {
  const all = new Set<Persona>();
  for (const node of nodes) {
    if (node.type === 'separator') continue;
    if (!node.personas) return undefined;
    for (const persona of node.personas) all.add(persona);
  }
  return all.size > 0 && all.size < personas.length ? [...all] : undefined;
}

// The sidebar is filtered in CSS (see global.css), which finds a row by the
// `data-personas` of the label inside it.
function tag<T extends Node>(node: T, tags: Persona[] | undefined): T {
  if (!tags) return node;
  (node as Tagged<T>).personas = tags;
  node.name = (
    <span key="label" data-personas={tags.join(' ')}>
      {node.name}
    </span>
  );
  return node;
}

// A heading is for whoever the entries below it, up to the next heading, are for.
function tagSeparators(children: Node[]) {
  children.forEach((node, index) => {
    if (node.type !== 'separator') return;
    const end = children.findIndex((next, i) => i > index && next.type === 'separator');
    tag(node, union(children.slice(index + 1, end === -1 ? undefined : end)));
  });
}

/**
 * Copies the `personas` frontmatter onto the page tree: pages carry their own,
 * folders and headings what their entries add up to.
 */
export function personaPlugin(): LoaderPlugin {
  return {
    name: 'arkitekt:personas',
    transformPageTree: {
      file(node, filePath) {
        if (!filePath) return node;
        const file = this.storage.read(filePath);
        if (file?.format !== 'page') return node;
        const tags = (file.data as { personas?: unknown[] }).personas?.filter(isPersona);
        return tag(node, tags && tags.length > 0 ? tags : undefined);
      },
      folder(node) {
        tagSeparators(node.children);
        return tag(node, union(node.index ? [node.index, ...node.children] : node.children));
      },
      root(node) {
        tagSeparators(node.children);
        return node;
      },
    },
  };
}
