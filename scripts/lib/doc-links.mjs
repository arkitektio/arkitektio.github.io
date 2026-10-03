// Shared helpers for the docs link tooling (check-links, migrate-docs, redirects).
// Everything here works on `/docs/...` URLs as they are written in the sources:
// markdown links and `href="..."` in MDX, linked separators in meta.json and
// string literals in src/.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const docsDir = join(root, 'content', 'docs');
export const publicDir = join(root, 'public');
export const outDir = join(root, 'out');
export const redirectsDir = join(root, 'scripts', 'redirects');

export function walk(dir, filter = () => true) {
  if (!existsSync(dir)) return [];
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(path, filter));
    else if (filter(path)) files.push(path);
  }
  return files;
}

export const readJson = (file, fallback) =>
  existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : fallback;

/** `design/services/index.mdx` -> `/docs/design/services` */
export function pageUrl(file) {
  const slug = file.replace(/\.mdx$/, '').replace(/(^|\/)index$/, '');
  return slug ? `/docs/${slug}` : '/docs';
}

/** All docs pages, as paths relative to content/docs. */
export const listPages = () =>
  walk(docsDir, (f) => f.endsWith('.mdx')).map((f) => relative(docsDir, f)).sort();

/** Files whose `/docs/...` links are checked and rewritten. */
export function sourceFiles() {
  return [
    ...walk(join(root, 'content'), (f) => /\.mdx$|meta\.json$/.test(f)),
    ...walk(join(root, 'src'), (f) => /\.(ts|tsx)$/.test(f)),
  ].sort();
}

export function splitUrl(raw) {
  const hashAt = raw.indexOf('#');
  const hash = hashAt < 0 ? '' : raw.slice(hashAt + 1);
  const rest = hashAt < 0 ? raw : raw.slice(0, hashAt);
  const queryAt = rest.indexOf('?');
  const query = queryAt < 0 ? '' : rest.slice(queryAt + 1);
  const path = (queryAt < 0 ? rest : rest.slice(0, queryAt)).replace(/(.)\/$/, '$1');
  return { path, query, hash };
}

export const joinUrl = ({ path, query, hash }) =>
  path + (query ? `?${query}` : '') + (hash ? `#${hash}` : '');

/** A file under public/ served at this URL (image, video, json, ...). */
export const isAsset = (path) => {
  const file = join(publicDir, decodeURI(path));
  return existsSync(file) && statSync(file).isFile();
};

// A `/docs` URL directly after a delimiter: `](`, `="`, `'`, a backtick or whitespace.
const DOCS_URL = /(?<=[("'`\s])\/docs(?=[/#?"'`)\s]|$)[^\s"'`)<>]*/g;

/**
 * Every `/docs...` URL in a source file, with its position. Route patterns
 * (`/docs/[[...slug]]`) and template literals with interpolation are skipped.
 */
export function extractLinks(text) {
  const links = [];
  for (const match of text.matchAll(DOCS_URL)) {
    // drop sentence punctuation after a URL mentioned in prose or a comment
    if (/\[|\$\{|\.\.\./.test(match[0])) continue;
    const raw = match[0].replace(/[.,;:]+$/, '');
    links.push({
      raw,
      start: match.index,
      end: match.index + raw.length,
      line: text.slice(0, match.index).split('\n').length,
      ...splitUrl(raw),
    });
  }
  return links;
}

// Markdown or href targets that are neither absolute, external nor same-page.
const RELATIVE = /(\]\(|href=["'])(?![a-z][a-z0-9+.-]*:|\/|#)([^)\s"']+)/g;

const FENCE = /^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[^\S\n]*$/gm;

/** Relative page links (`./x`, `../x`, `folder/x`) in an MDX file, outside code blocks. */
export function extractRelativeLinks(text) {
  const links = [];
  const prose = text.replace(FENCE, (block) => block.replace(/[^\n]/g, ' '));
  for (const match of prose.matchAll(RELATIVE)) {
    const start = match.index + match[1].length;
    links.push({
      raw: match[2],
      start,
      end: start + match[2].length,
      line: text.slice(0, match.index).split('\n').length,
    });
  }
  return links;
}

/** Apply `{start, end, to}` replacements to a string. */
export function applyEdits(text, edits) {
  let result = text;
  for (const edit of [...edits].sort((a, b) => b.start - a.start)) {
    result = result.slice(0, edit.start) + edit.to + result.slice(edit.end);
  }
  return result;
}

/**
 * The redirect tables: `legacy.json` (URLs of the old Docusaurus site and of
 * earlier layouts), `moves.json` (file moves of the persona restructure) and
 * `splits/*.json` (pages that were split, with a target per heading anchor).
 */
export function loadRedirects() {
  const legacy = readJson(join(redirectsDir, 'legacy.json'), {});
  const { moves = {}, removed = {} } = readJson(join(redirectsDir, 'moves.json'), {});
  const splits = walk(join(redirectsDir, 'splits'), (f) => f.endsWith('.json')).map((f) =>
    readJson(f),
  );

  // old URL -> new URL for every page that moved or was removed
  const moved = {};
  for (const [from, to] of Object.entries(moves)) {
    if (pageUrl(from) !== pageUrl(to)) moved[pageUrl(from)] = pageUrl(to);
  }
  for (const [from, to] of Object.entries(removed)) moved[pageUrl(from)] = to;

  // URL of a split page (old and new) -> { anchor: target URL }
  const anchors = {};
  for (const split of splits) {
    const targets = Object.fromEntries(
      Object.entries(split.anchors).map(([anchor, target]) => {
        const [file, hash] = target.split('#');
        return [anchor, pageUrl(file) + (hash ? `#${hash}` : '')];
      }),
    );
    anchors[pageUrl(split.source)] = targets;
    anchors[pageUrl(split.primary)] = targets;
  }

  /**
   * Where a URL lives today, following legacy and move redirects. Also returns
   * the per-anchor targets of the page it lands on, if that page was split.
   */
  function follow(raw) {
    let { path, query, hash } = splitUrl(raw);
    for (const table of [legacy, moved]) {
      const target = table[path];
      if (!target) continue;
      const next = splitUrl(target);
      path = next.path;
      // a hash on the redirect target wins over the incoming one
      hash = next.hash || hash;
    }
    const split = anchors[path];
    const override = hash && split?.[hash];
    if (override) ({ path, hash } = splitUrl(override));
    return { to: joinUrl({ path, query, hash }), anchors: split };
  }

  const resolve = (raw) => follow(raw).to;

  return { legacy, moves, removed, splits, moved, anchors, follow, resolve };
}
