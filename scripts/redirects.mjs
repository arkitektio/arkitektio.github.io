// Generates static redirect stubs for URLs of the old Docusaurus site
// (arkitekt.live before the Fumadocs rewrite). The site is a static export on
// GitHub Pages, which has no server-side redirects, so every legacy path gets a
// `public/<path>.html` file that forwards the browser to the new location.
//
// Usage: `pnpm redirects` (re-run after editing the table, commit the output).
import { mkdirSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const manifest = join(root, 'scripts', 'redirects.manifest.json');

// old path (without .html) -> new path. Keep this sorted by area.
const hyphenate = (p) => p.replaceAll('_', '-');

const firstSteps = [
  '', 'brief_interlude', 'done', 'first_app', 'first_run', 'first_task',
  'first_tool', 'first_workflow', 'interface', 'upload',
];

export const redirects = {
  // top level pages
  '/privacy': '/docs/privacy',
  '/markdown-page': '/',

  // docs root
  '/docs/intro': '/docs',
  '/docs/category/introduction': '/docs',
  '/docs/category/troubleshooting': '/docs/troubleshooting',

  // introduction (underscore -> hyphen)
  ...Object.fromEntries(
    firstSteps.map((s) => {
      const p = `/docs/introduction/first_steps${s ? `/${s}` : ''}`;
      return [p, hyphenate(p)];
    }),
  ),
  '/docs/introduction/advanced/deep_learning': '/docs/introduction/advanced/deep-learning',
  '/docs/introduction/advanced/local_workflows': '/docs/introduction/advanced/local-workflows',

  // showcases (the paper links!)
  '/docs/showcases/paper/interactive_workflow': '/docs/showcases/paper/interactive-workflow',
  '/docs/showcases/paper/smart_microscopy_workflow': '/docs/showcases/paper/smart-microscopy-workflow',
  '/docs/showcases/paper/streaming_workflow': '/docs/showcases/paper/streaming-workflow',
  '/docs/showcases/advanced/fiji_workflow': '/docs/showcases/advanced/fiji-workflow',
  '/docs/showcases/advanced/omero_sink': '/docs/showcases/advanced/omero-sink',

  // design
  '/docs/design/various/lazy_loading': '/docs/design/various/lazy-loading',
  '/docs/design/deployment/on_premise': '/docs/design/deployment/on-premise',
  '/docs/design/deployment/on_premise/cli': '/docs/design/deployment/cli',
  '/docs/design/deployment/on_premise/testing': '/docs/design/deployment/testing',
  '/docs/design/deployment/on_premise/Konstruktor': '/docs/apps/standalones/konstruktor',
  '/docs/design/api': '/docs/design/philosophy/api',
  '/docs/design/middleman': '/docs/design/philosophy/middleman',
  '/docs/design/version': '/docs/design/philosophy/version',
  '/docs/design/real-time': '/docs/design/philosophy/realtime',
  '/docs/design/why': '/docs/design',
  '/docs/design/scheduling': '/docs/design',
  '/docs/design/configuration': '/docs/design',
  '/docs/design/vs': '/docs/design/comparisons',
  '/docs/design/why-not': '/docs/design/comparisons',
  '/docs/design/vs/nextflow': '/docs/design/comparisons/nextflow',
  '/docs/design/why-not/kafka': '/docs/design/comparisons/kafka',
  '/docs/design/why-not/rest': '/docs/design/comparisons/rest',
  '/docs/design/services/next': '/docs/design/services',
  '/docs/design/services/next/kabinet': '/docs/design/services/kabinet',
  '/docs/design/services/next/kluster': '/docs/design/services/kluster',
  '/docs/design/services/next/omeroark': '/docs/design/services/omeroark',
  '/docs/design/terminology/node': '/docs/design/terminology/action',
  '/docs/design/terminology/template': '/docs/design/terminology/implementation',
  '/docs/design/terminology/assignation': '/docs/design/terminology/task',
  '/docs/design/terminology/provision': '/docs/design/terminology',
  '/docs/design/terminology/reservation': '/docs/design/terminology',
  '/docs/design/terminology/workflow': '/docs/design/terminology',

  // developers
  '/docs/developers/contribute/next': '/docs/developers/contribute',
  '/docs/developers/python/classical': '/docs/developers/python/classic',
  '/docs/developers/python/classical/Usage': '/docs/developers/python/classic-usage',
  '/docs/developers/python/classical/read-write': '/docs/developers/python/read-write',
  '/docs/developers/python/plugin/getting-started': '/docs/developers/python/plugin',
  '/docs/developers/python/plugin/build': '/docs/developers/python/build',
  '/docs/developers/python/plugin/more': '/docs/developers/python/more',

  // roadmap
  '/docs/roadmap/thoughts/app': '/docs/roadmap/thoughts',
};

const stub = (to) => `<!doctype html>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${to}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.hash)</script>
<a href="${to}">Redirecting…</a>
`;

// Remove stubs from a previous run so renamed entries don't linger.
if (existsSync(manifest)) {
  const { default: previous } = await import(manifest, { with: { type: 'json' } });
  for (const p of previous) rmSync(join(publicDir, `${p}.html`), { force: true });
}

const written = [];
for (const [from, to] of Object.entries(redirects)) {
  const file = join(publicDir, `${from}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, stub(to));
  written.push(from);
}
writeFileSync(manifest, `${JSON.stringify(written.sort(), null, 2)}\n`);
console.log(`wrote ${written.length} redirect stubs into public/`);
