import Link from 'next/link';
import type { Node, Root } from 'fumadocs-core/page-tree';
import type { LoaderPlugin } from 'fumadocs-core/source';
import { GUIDE_PATH_ATTR } from './guide';

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

// --- paths for the first-time guide ------------------------------------------

const paths = new WeakMap<Node, string>();

// `/docs/guides/rust` -> `build/rust/guide/`
const docPath = (url: string) => {
  const path = url.replace(/^\/docs\/?/, '').replace(/\/$/, '');
  return path ? `${path}/` : '';
};

// The deepest folder all of the nodes are in: `use/first-steps/` for its pages.
function commonPath(nodes: Node[]) {
  let common: string[] | undefined;
  for (const node of nodes) {
    const path = paths.get(node);
    if (path === undefined) continue;
    const segments = path.split('/').filter(Boolean);
    if (!common) common = segments;
    else {
      const shared = common.findIndex((segment, index) => segment !== segments[index]);
      if (shared !== -1) common = common.slice(0, shared);
    }
  }
  return common && common.length > 0 ? `${common.join('/')}/` : '';
}

// The guide hides sidebar rows in CSS (see guideCss in src/lib/guide.ts), which
// finds a row by the path on the label inside it.
function label<T extends Node>(node: T, path: string): T {
  if (!path || paths.has(node)) return node;
  paths.set(node, path);
  node.name = (
    <span key="label" {...{ [GUIDE_PATH_ATTR]: path }}>
      {node.name}
    </span>
  );
  return node;
}

// A heading stands for the entries below it, up to the next heading. When those
// share no folder of their own, it gets a path made from its text instead
// (`build/~bare-protocols/`), so the guide can still name it.
function labelSeparators(children: Node[]) {
  const parent = commonPath(children);
  children.forEach((node, index) => {
    if (node.type !== 'separator') return;
    const end = children.findIndex((next, i) => i > index && next.type === 'separator');
    const own = commonPath(children.slice(index + 1, end === -1 ? undefined : end));
    const text = typeof node.name === 'string' ? node.name : typeof node.icon === 'string' ? node.icon : '';
    const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    label(node, own !== parent || !slug ? own : `${parent}~${slug}/`);
  });
}

/**
 * Puts a path on every sidebar label: a page its own, a folder and a heading
 * the folder their entries share. The first-time guide hides rows by it.
 */
export function guidePathPlugin(): LoaderPlugin {
  return {
    name: 'arkitekt:guide-paths',
    transformPageTree: {
      file(node) {
        return node.external ? node : label(node, docPath(node.url));
      },
      folder(node) {
        labelSeparators(node.children);
        return label(node, commonPath(node.index ? [node.index, ...node.children] : node.children));
      },
      root(node) {
        labelSeparators(node.children);
        return node;
      },
    },
  };
}
