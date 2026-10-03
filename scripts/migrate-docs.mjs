// Moves docs pages and rewrites the links that point at them, driven by the
// tables in `scripts/redirects/` (`moves.json`, `splits/*.json`, `legacy.json`).
//
//   node scripts/migrate-docs.mjs check             validate moves.json against content/docs
//   node scripts/migrate-docs.mjs mv                git mv every page to its new path
//   node scripts/migrate-docs.mjs links [--dry-run] rewrite /docs/... links to their final URL
//
// `links` also turns relative page links into absolute ones. It is idempotent:
// a second run changes nothing.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, posix, relative } from 'node:path';
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
  const destinations = new Set(Object.values(moves));

  // before the move every page is a source, afterwards every page is a destination
  const moved = pages.every((page) => destinations.has(page));
  if (!moved) {
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
  console.log(`migrate-docs: ${Object.keys(moves).length} moves, ${Object.keys(removed).length} removed, ok`);
}

function mv() {
  const git = (...args) => execFileSync('git', args, { cwd: docsDir, stdio: 'inherit' });
  for (const [from, to] of Object.entries(redirects.moves)) {
    if (from === to || !existsSync(join(docsDir, from))) continue;
    // two steps, so a page can move into a folder that an old page still occupies
    mkdirSync(dirname(join(docsDir, to)), { recursive: true });
    git('mv', from, to);
  }
  for (const from of Object.keys(redirects.removed)) {
    if (existsSync(join(docsDir, from))) git('rm', '-q', from);
  }
  // folders left with nothing but their meta.json are gone
  const prune = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) prune(join(dir, entry.name));
    }
    const rest = readdirSync(dir);
    if (rest.length === 0 || (rest.length === 1 && rest[0] === 'meta.json')) {
      if (rest.length === 1) git('rm', '-q', relative(docsDir, join(dir, 'meta.json')));
      rmSync(dir, { recursive: true, force: true });
    }
  };
  prune(docsDir);
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

const commands = { check, mv, links };
if (!commands[command]) {
  console.error('usage: node scripts/migrate-docs.mjs <check|mv|links> [--dry-run]');
  process.exit(1);
}
commands[command]();
