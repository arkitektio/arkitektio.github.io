// The base path the site is served under (e.g. "/arkitekt-fuma" on GitHub
// Pages). Set at build time via PAGES_BASE_PATH and exposed to the client as
// NEXT_PUBLIC_BASE_PATH in next.config.mjs. Empty for local dev / root hosting.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Prefix an absolute public-asset path (e.g. "/img/x.png") with the basePath.
// Next.js auto-prefixes its own <Link>/<Image>/static imports, but NOT raw
// string references (<img>, <video>, fetch, useGLTF, metadata). Use this there.
// Relative URLs, external URLs ("//", "http"), and already-prefixed paths pass
// through unchanged.
export function asset(path: string): string {
  if (
    !path ||
    !path.startsWith('/') ||
    path.startsWith('//') ||
    (basePath && path.startsWith(`${basePath}/`))
  ) {
    return path;
  }
  return `${basePath}${path}`;
}
