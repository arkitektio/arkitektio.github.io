// Checks every internal link of the built site. Run after `pnpm build`:
//
//   pnpm check:links
//
// It fails on links to pages, anchors or assets that do not exist, on internal
// links that only work through a redirect stub, and on relative page links in
// the docs (they break when a URL is served with a trailing slash). It looks at
// the rendered HTML in `out/`, at `/docs/...` URLs written in content/ and src/
// (some never reach static HTML), at the redirect stubs and at the search
// index and llms.txt.
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import {
  extractLinks,
  extractRelativeLinks,
  outDir,
  readJson,
  redirectsDir,
  root,
  sourceFiles,
  splitUrl,
  walk,
} from './lib/doc-links.mjs';

const base = process.env.PAGES_BASE_PATH || '';

if (!existsSync(join(outDir, 'index.html'))) {
  console.error('check-links: out/ not found, run `pnpm build` first');
  process.exit(1);
}

// --- index of the built site ------------------------------------------------

const pages = new Map(); // url -> { html, redirect }
for (const file of walk(outDir, (f) => f.endsWith('.html'))) {
  const rel = relative(outDir, file).replace(/\.html$/, '');
  const url = rel === 'index' ? '/' : `/${rel}`;
  const html = readFileSync(file, 'utf8');
  const stub = /<script id="arkitekt-redirect"[^>]*>(.*?)<\/script>/.exec(html);
  pages.set(url, { html, redirect: stub ? JSON.parse(stub[1]) : null });
}

const isFile = (path) => {
  const file = join(outDir, decodeURI(path));
  return existsSync(file) && statSync(file).isFile();
};

// Headings inside an inactive tab are not in the HTML, only in the RSC payload.
const hasAnchor = (html, id) =>
  html.includes(`id="${id}"`) || html.includes(`\\"id\\":\\"${id}\\"`);

/** Returns an error for an internal URL, or null when it resolves. */
function problem(url, { allowRedirect = false } = {}) {
  const { path, hash } = splitUrl(url.startsWith(base) ? url.slice(base.length) || '/' : url);
  if (path.startsWith('/_next/') || isFile(path)) return null;
  const page = pages.get(path);
  if (!page) return 'missing page';
  if (page.redirect) {
    if (!allowRedirect) return `goes through a redirect (to ${page.redirect.to})`;
    const target = (hash && page.redirect.anchors?.[hash]) || page.redirect.to;
    return problem(target.includes('#') || !hash ? target : `${target}#${hash}`);
  }
  if (hash && !hasAnchor(page.html, decodeURIComponent(hash))) return `missing anchor #${hash}`;
  return null;
}

// Missing files that predate the checker; remove an entry once the file is added.
const knownMissing = new Set([
  '/presentations/mikro/provenance-demo.webm',
  '/presentations/mikro/spatial-query-demo.webm',
]);

const errors = new Map(); // message -> sources
const report = (message, source) => {
  if (!errors.has(message)) errors.set(message, new Set());
  errors.get(message).add(source);
};

// --- rendered links ---------------------------------------------------------

const ATTR = /\s(?:href|src|poster)="(\/(?!\/)[^"]*)"/g;
for (const [url, page] of pages) {
  if (page.redirect) continue;
  for (const match of page.html.matchAll(ATTR)) {
    const target = match[1].replaceAll('&amp;', '&');
    const error = knownMissing.has(target) ? null : problem(target);
    if (error) report(`${target}: ${error}`, `page ${url}`);
  }
}

// --- links in the sources ---------------------------------------------------

for (const file of sourceFiles()) {
  const text = readFileSync(file, 'utf8');
  const name = relative(root, file);
  for (const link of extractLinks(text)) {
    const error = problem(link.raw);
    if (error) report(`${link.raw}: ${error}`, `${name}:${link.line}`);
  }
  if (!name.startsWith('content/docs/') || !name.endsWith('.mdx')) continue;
  for (const link of extractRelativeLinks(text)) {
    report(`${link.raw}: relative page link, write it as /docs/...`, `${name}:${link.line}`);
  }
}

// --- redirects --------------------------------------------------------------

for (const [url, page] of pages) {
  if (!page.redirect) continue;
  for (const target of [page.redirect.to, ...Object.values(page.redirect.anchors ?? {})]) {
    const error = problem(target);
    if (error) report(`${target}: ${error}`, `redirect ${url}`);
  }
}

// URLs that are linked from outside (released apps, READMEs, the paper).
for (const url of readJson(join(redirectsDir, 'required.json'), [])) {
  const error = problem(url, { allowRedirect: true });
  if (error) report(`${url}: ${error}`, 'scripts/redirects/required.json');
}

// --- derived artefacts ------------------------------------------------------

const search = join(outDir, 'api', 'search');
if (existsSync(search)) {
  const urls = new Set([...readFileSync(search, 'utf8').matchAll(/"url":"(\/[^"]*)"/g)].map((m) => m[1]));
  for (const url of urls) {
    const error = problem(url);
    if (error) report(`${url}: ${error}`, 'search index');
  }
}
for (const name of ['llms.txt', 'llms-full.txt']) {
  const file = join(outDir, name);
  if (!existsSync(file)) continue;
  for (const match of readFileSync(file, 'utf8').matchAll(/\]\((\/docs[^)\s]*)\)/g)) {
    const error = problem(match[1]);
    if (error) report(`${match[1]}: ${error}`, name);
  }
}

// --- report -----------------------------------------------------------------

if (errors.size > 0) {
  for (const [message, sources] of [...errors].sort(([a], [b]) => a.localeCompare(b))) {
    const list = [...sources];
    const more = list.length > 3 ? ` (+${list.length - 3} more)` : '';
    console.error(`✗ ${message}\n    ${list.slice(0, 3).join('\n    ')}${more}`);
  }
  console.error(`\ncheck-links: ${errors.size} broken link(s)`);
  process.exit(1);
}
console.log(`check-links: ${pages.size} pages, all internal links resolve`);
