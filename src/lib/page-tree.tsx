import Link from 'next/link';
import type { Node, Root } from 'fumadocs-core/page-tree';

/**
 * Sidebar separators that link somewhere.
 *
 * Fumadocs separators are plain text. In a meta.json, `---[Label](/url)---` parses
 * as a separator with icon `Label` and name `(/url)`; this turns such a separator
 * into a link to `/url` labelled `Label`, so a section heading can open its
 * overview page (e.g. `---[Apps](/docs/apps)---`).
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
