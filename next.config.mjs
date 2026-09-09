import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// Set via the GitHub Pages workflow (e.g. "/arkitekt-fuma") so the site works
// under a project subpath. Empty by default so local dev / `serve out` stay clean.
const basePath = process.env.PAGES_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const config = {
  serverExternalPackages: ['@takumi-rs/image-response'],
  output: 'export',
  basePath,
  // Expose the base path to client components so they can prefix raw asset
  // references (see src/lib/base-path.ts).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default withMDX(config);
