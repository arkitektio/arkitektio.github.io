import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const TYPE_MAP = {
  note: 'info',
  tip: 'info',
  info: 'info',
  success: 'success',
  idea: 'info',
  caution: 'warn',
  warning: 'warn',
  warn: 'warn',
  danger: 'error',
  error: 'error',
};

// matches ":::type", ":::type[Title]", or ":::type Title"
const OPEN = /^(\s*):::(note|tip|info|success|idea|caution|warning|warn|danger|error)(?:\[(.*?)\]|[ \t]+(.*?))?[ \t]*$/;
const CLOSE = /^(\s*):::[ \t]*$/;

function escapeAttr(s) {
  return s.replace(/"/g, '&quot;').trim();
}

function convert(content) {
  const lines = content.split('\n');
  const out = [];
  const stack = []; // track open callouts
  let inFence = false;

  for (const line of lines) {
    // don't touch admonition-like text inside fenced code blocks
    const fence = /^\s*(```|~~~)/.test(line);
    if (fence) inFence = !inFence;

    if (!inFence) {
      const open = line.match(OPEN);
      if (open) {
        const type = TYPE_MAP[open[2]] ?? 'info';
        const title = open[3] ?? open[4];
        const attr = title ? ` title="${escapeAttr(title)}"` : '';
        out.push(`${open[1]}<Callout type="${type}"${attr}>`);
        out.push('');
        stack.push(true);
        continue;
      }
      if (stack.length > 0 && CLOSE.test(line)) {
        out.push('');
        out.push(`${line.match(CLOSE)[1]}</Callout>`);
        stack.pop();
        continue;
      }
    }
    out.push(line);
  }

  // close any stragglers (malformed source)
  while (stack.length > 0) {
    out.push('');
    out.push('</Callout>');
    stack.pop();
  }

  return out.join('\n');
}

const files = execSync(
  "find content/docs -name '*.mdx'",
  { encoding: 'utf8' },
)
  .trim()
  .split('\n')
  .filter(Boolean);

let changed = 0;
for (const f of files) {
  const before = readFileSync(f, 'utf8');
  if (!/^\s*:::/m.test(before)) continue;
  const after = convert(before);
  if (after !== before) {
    writeFileSync(f, after);
    changed++;
  }
}
console.log(`Converted admonitions in ${changed} files (of ${files.length}).`);
