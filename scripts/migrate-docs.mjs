// Rewrites links to docs pages that moved, driven by the tables in
// `scripts/redirects/` (`moves.json`, `splits/*.json`, `legacy.json`).
//
//   node scripts/migrate-docs.mjs check             validate the tables
//   node scripts/migrate-docs.mjs links [--dry-run] rewrite /docs/... links to their final URL
//
// `links` also turns relative page links into absolute ones. It is idempotent:
// a second run changes nothing.
import { readFileSync, writeFileSync } from 'node:fs';
import { posix, relative } from 'node:path';
import {
  applyEdits,
  docsDir,
  extractLinks,
  extractRelativeLinks,
  isAsset,
  listPages,
  loadRedirects,
  pageUrl,
  root,
  sourceFiles,
} from './lib/doc-links.mjs';

const [command, ...flags] = process.argv.slice(2);
const dryRun = flags.includes('--dry-run');
const redirects = loadRedirects();

function check() {
  const { moves, removed, splits } = redirects;
  const errors = [];
  const pages = listPages();

  // only before the move: every page must be accounted for
  const pending = Object.entries(moves).some(([from, to]) => from !== to && pages.includes(from));
  if (pending) {
    for (const page of pages) {
      if (!(page in moves) && !(page in removed)) errors.push(`${page}: not in moves.json`);
      if (page in moves && page in removed) errors.push(`${page}: both moved and removed`);
    }
    for (const page of [...Object.keys(moves), ...Object.keys(removed)]) {
      if (!pages.includes(page)) errors.push(`${page}: listed in moves.json but does not exist`);
    }
  }

  const seen = new Map();
  for (const [from, to] of Object.entries(moves)) {
    if (seen.has(to)) errors.push(`${to}: destination of both ${seen.get(to)} and ${from}`);
    seen.set(to, from);
    // an old URL that becomes a different page cannot be redirected
    if (from !== to && to in moves && moves[to] !== to) {
      errors.push(`${to}: new page reuses the URL of a page that moves away`);
    }
  }
  for (const split of splits) {
    if (moves[split.source] !== split.primary) {
      errors.push(`${split.source}: split primary must be its destination in moves.json`);
    }
  }

  if (errors.length > 0) {
    console.error(`migrate-docs: ${errors.length} problem(s)\n  ${errors.join('\n  ')}`);
    process.exit(1);
  }
  console.log(
    `migrate-docs: ${Object.keys(moves).length} moves, ${Object.keys(removed).length} removed, ${splits.length} splits, ok`,
  );
}

function links() {
  let changed = 0;
  const unresolved = [];
  const pages = new Set(listPages().map(pageUrl));

  for (const file of sourceFiles()) {
    const text = readFileSync(file, 'utf8');
    const name = relative(root, file);
    const edits = [];

    for (const link of extractLinks(text)) {
      if (isAsset(link.path)) continue;
      const to = redirects.resolve(link.raw);
      if (!pages.has(to.split(/[?#]/)[0]) && !to.startsWith('/showcase')) {
        unresolved.push(`${name}:${link.line} ${link.raw}`);
      } else if (to !== link.raw) {
        edits.push({ ...link, to });
      }
    }

    // relative links resolve against the page URL as it was before the move
    if (name.startsWith('content/docs/') && name.endsWith('.mdx')) {
      const page = relative(docsDir, file);
      const origin =
        Object.entries(redirects.moves).find(([, to]) => to === page)?.[0] ?? page;
      for (const link of extractRelativeLinks(text)) {
        const absolute = posix.resolve(posix.dirname(pageUrl(origin)), link.raw);
        edits.push({ ...link, to: redirects.resolve(absolute) });
      }
    }

    if (edits.length === 0) continue;
    changed += edits.length;
    for (const edit of edits) console.log(`${name}:${edit.line}  ${edit.raw} -> ${edit.to}`);
    if (!dryRun) writeFileSync(file, applyEdits(text, edits));
  }

  console.log(`migrate-docs: ${changed} link(s) ${dryRun ? 'would change' : 'rewritten'}`);
  if (unresolved.length > 0) {
    console.error(`unresolved:\n  ${unresolved.join('\n  ')}`);
    process.exit(1);
  }
}

const commands = { check, links };
if (!commands[command]) {
  console.error('usage: node scripts/migrate-docs.mjs <check|links> [--dry-run]');
  process.exit(1);
}
commands[command]();
