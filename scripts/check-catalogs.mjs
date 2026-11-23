// Checks the catalogs under public/catalogs: the curated repository lists kabinet reads
// (kabinet's docs/catalogs.md). The rules are kabinet's, so a file that passes here is one a
// hub reads; kabinet refuses the whole file when one entry is wrong.
//
//   node scripts/check-catalogs.mjs            the format only
//   node scripts/check-catalogs.mjs --remote   and every oci repository is readable anonymously
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const DIR = path.join(import.meta.dirname, '..', 'public', 'catalogs');
const KEY = /^[a-z0-9][a-z0-9._-]*$/;
const GITHUB_URL = /^https:\/\/github\.com\/([^/]+)\/([^/]+)(?:\/tree\/([^/]+))?/;
const MAX_BYTES = 2 * 1024 * 1024;
const remote = process.argv.includes('--remote');

const isString = (value) => typeof value === 'string';
const isStringList = (value) => Array.isArray(value) && value.every(isString);
const isUrl = (value) => isString(value) && /^https?:\/\//.test(value);

// What kabinet's oci.parse_reference accepts: a repository alone, no tag, no digest.
function ociReference(reference) {
  const ref = reference.trim().replace(/^oci:\/\//, '').replace(/^https:\/\//, '');
  const last = ref.split('/').at(-1);
  if (!ref || ref.includes('@') || last.includes(':')) {
    return { error: 'name the repository alone, without a tag or a digest' };
  }
  const [head, ...rest] = ref.split('/');
  const hasRegistry = rest.length > 0 && (head.includes('.') || head.includes(':') || head === 'localhost');
  const registry = hasRegistry ? head : 'registry-1.docker.io';
  const repository = hasRegistry ? rest.join('/') : ref.includes('/') ? ref : `library/${ref}`;
  if (repository !== repository.toLowerCase() || repository.includes(' ')) {
    return { error: 'the repository path must be lowercase, without spaces' };
  }
  return { registry, repository };
}

function githubReference(reference) {
  if (GITHUB_URL.test(reference)) return {};
  const [owner, rest] = reference.split(/\/(.*)/s);
  const repo = (rest ?? '').split(':')[0];
  return owner && repo ? {} : { error: "expected a github.com URL, 'owner/repo' or 'owner/repo:branch'" };
}

function check(catalog) {
  const problems = [];
  if (catalog === null || typeof catalog !== 'object' || Array.isArray(catalog)) return ['the file is not a mapping'];
  if (catalog.spec_version !== 1) problems.push('spec_version: must be 1');
  if (!isString(catalog.name)) problems.push('name: required, a string');
  if (catalog.description !== undefined && !isString(catalog.description)) problems.push('description: a string');
  if (!Array.isArray(catalog.entries)) return [...problems, 'entries: a list'];

  const seen = new Set();
  catalog.entries.forEach((entry, index) => {
    const at = `entries[${index}]${isString(entry?.key) ? ` (${entry.key})` : ''}`;
    if (!isString(entry?.key) || !KEY.test(entry.key) || entry.key.length > 200) {
      problems.push(`${at}.key: lowercase letters, digits, '.', '_' and '-'`);
    } else if (seen.has(entry.key)) {
      problems.push(`${at}.key: listed twice`);
    } else {
      seen.add(entry.key);
    }
    if (!isString(entry.name)) problems.push(`${at}.name: required, a string`);
    if (!isString(entry.reference)) {
      problems.push(`${at}.reference: required, a string`);
    } else if (entry.kind === 'oci') {
      const { error } = ociReference(entry.reference);
      if (error) problems.push(`${at}.reference: ${error}`);
    } else if (entry.kind === 'github') {
      const { error } = githubReference(entry.reference);
      if (error) problems.push(`${at}.reference: ${error}`);
      if (entry.channels?.length) problems.push(`${at}.channels: only an oci entry follows channels`);
    } else {
      problems.push(`${at}.kind: 'oci' or 'github'`);
    }
    for (const field of ['channels', 'tags']) {
      if (entry[field] !== undefined && !isStringList(entry[field])) problems.push(`${at}.${field}: a list of strings`);
    }
    for (const field of ['logo', 'homepage']) {
      if (entry[field] != null && !isUrl(entry[field])) problems.push(`${at}.${field}: an http(s) URL`);
    }
    for (const field of ['description', 'maintainer']) {
      if (entry[field] != null && !isString(entry[field])) problems.push(`${at}.${field}: a string`);
    }
  });
  return problems;
}

// Reads the repository's tags the way kabinet does: anonymously, through the token challenge.
async function readable({ registry, repository }) {
  const url = `https://${registry}/v2/${repository}/tags/list`;
  let response = await fetch(url);
  const challenge = response.headers.get('www-authenticate') ?? '';
  if (response.status === 401 && challenge.startsWith('Bearer ')) {
    const params = Object.fromEntries([...challenge.matchAll(/(\w+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));
    const tokenUrl = new URL(params.realm);
    if (params.service) tokenUrl.searchParams.set('service', params.service);
    tokenUrl.searchParams.set('scope', `repository:${repository}:pull`);
    const { token, access_token: accessToken } = await (await fetch(tokenUrl)).json();
    response = await fetch(url, { headers: { Authorization: `Bearer ${token ?? accessToken}` } });
  }
  if (!response.ok) return `${registry}/${repository} answered ${response.status}`;
  const { tags } = await response.json();
  return tags?.length ? null : `${registry}/${repository} has no tags`;
}

let failed = false;
for (const name of (await readdir(DIR)).filter((file) => file.endsWith('.json')).sort()) {
  const file = path.join(DIR, name);
  const content = await readFile(file);
  let problems;
  let catalog;
  try {
    catalog = JSON.parse(content.toString('utf8'));
    problems = content.length > MAX_BYTES ? ['larger than 2 MiB'] : check(catalog);
  } catch (error) {
    problems = [`not JSON: ${error.message}`];
  }
  if (!problems.length && remote) {
    const refs = catalog.entries.filter((entry) => entry.kind === 'oci').map((entry) => ociReference(entry.reference));
    problems = (await Promise.all(refs.map(readable))).filter(Boolean);
  }
  if (problems.length) {
    failed = true;
    console.error(`✗ catalogs/${name}`);
    for (const problem of problems) console.error(`  ${problem}`);
  } else {
    console.log(`✓ catalogs/${name}: ${catalog.entries.length} entries`);
  }
}
process.exit(failed ? 1 : 0);
