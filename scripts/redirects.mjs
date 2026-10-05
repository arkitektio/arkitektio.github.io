// Generates static redirect stubs for URLs that used to exist: the old
// Docusaurus site, earlier Fumadocs layouts and pages moved by the persona
// restructure. The site is a static export on GitHub Pages, which has no
// server-side redirects, so every old path gets an `<path>.html` file in `out/`
// that forwards the browser to the new location.
//
// Runs after `next build` (see the `build` script). The tables live in
// `scripts/redirects/`: add an entry to `legacy.json` (old URL -> new URL) when a
// page moves. Fails when a stub would shadow a page or point at a missing one.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { loadRedirects, outDir, splitUrl } from './lib/doc-links.mjs';

const base = process.env.PAGES_BASE_PATH || '';
const { legacy, moved, follow } = loadRedirects();

if (!existsSync(outDir)) {
  console.error('redirects: out/ not found, run `next build` first');
  process.exit(1);
}

const htmlFile = (path) => join(outDir, path === '/' ? 'index.html' : `${path}.html`);
const errors = [];

/** The target must be a built page, and its anchor a heading on that page. */
function checkTarget(from, to) {
  const { path, hash } = splitUrl(to);
  const file = htmlFile(path);
  if (!existsSync(file)) return errors.push(`${from} -> ${to}: target page does not exist`);
  if (!hash) return;
  const html = readFileSync(file, 'utf8');
  if (!html.includes(`id="${hash}"`) && !html.includes(`\\"id\\":\\"${hash}\\"`)) {
    errors.push(`${from} -> ${to}: target has no #${hash}`);
  }
}

// The script picks the target for the incoming hash (pages that were split send
// each heading to its new page), keeps the query string and emits a single `#`.
const stub = ({ to, anchors }) => {
  const data = JSON.stringify({ to: base + to, anchors }).replaceAll('<', '\\u003c');
  return `<!doctype html>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${base + to}">
<script id="arkitekt-redirect" type="application/json">${data}</script>
<script>(function(){var d=JSON.parse(document.getElementById('arkitekt-redirect').textContent),
h=decodeURIComponent(location.hash.slice(1)),o=h&&d.anchors&&d.anchors[h],t=o||d.to;
var i=t.indexOf('#'),p=i<0?t:t.slice(0,i),g=i<0?(h&&!o?'#'+h:''):t.slice(i);
location.replace(p+location.search+g)})()</script>
<noscript><meta http-equiv="refresh" content="0; url=${base + to}"></noscript>
<a href="${base + to}">Redirecting…</a>
`;
};

const stubs = [];
for (const from of new Set([...Object.keys(legacy), ...Object.keys(moved)])) {
  const { to, anchors = {} } = follow(from);
  if (splitUrl(to).path === from) continue;
  // a stub from an earlier run of this script may be replaced, a page may not
  const existing = existsSync(htmlFile(from)) && readFileSync(htmlFile(from), 'utf8');
  if (existing && !existing.includes('id="arkitekt-redirect"')) {
    errors.push(`${from}: a page exists at this URL, the redirect would shadow it`);
    continue;
  }
  checkTarget(from, to);
  for (const target of Object.values(anchors)) checkTarget(`${from}#…`, target);
  stubs.push({
    from,
    to,
    anchors: Object.fromEntries(Object.entries(anchors).map(([a, t]) => [a, base + t])),
  });
}

if (errors.length > 0) {
  console.error(`redirects: ${errors.length} problem(s)\n  ${errors.join('\n  ')}`);
  process.exit(1);
}

for (const entry of stubs) {
  const file = htmlFile(entry.from);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, stub(entry));
}
console.log(`redirects: wrote ${stubs.length} stubs into out/`);
