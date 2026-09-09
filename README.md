# arkitektio.github.io

The documentation and marketing site for **[Arkitekt](https://github.com/arkitektio)**. Arkitekt is an
open-source platform for bioimage analysis and beyond. Arkitekt is a "middleman"
that sits between your data, your tools and your team, turning scattered scripts
into shareable, reactive analysis apps.

This repository is the website itself: guides, design docs, tutorials and the
landing page. It's a [Next.js](https://nextjs.org) app built with
[Fumadocs](https://fumadocs.dev) and exported as a static site to GitHub Pages.

## Quick start

Requires **Node 22** (see [`.nvmrc`](.nvmrc)) and **pnpm**.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Content and
components hot-reload as you edit.

## Scripts

| Command              | Description                                                        |
| -------------------- | ----------------------------------------------------------------- |
| `pnpm dev`           | Start the dev server with hot reload.                             |
| `pnpm build`         | Build the static export into `out/`.                             |
| `pnpm start`         | Serve the built `out/` directory locally (`serve`).              |
| `pnpm types:check`   | Regenerate MDX/route types and run `tsc --noEmit`.              |
| `pnpm lint`          | Run ESLint.                                                      |

## Writing content

All documentation lives in [`content/docs`](content/docs) as MDX. The structure
mirrors the site navigation:

| Area                            | What it covers                                          |
| ------------------------------- | ------------------------------------------------------- |
| `content/docs/introduction`     | Installation and first-steps tutorials.                |
| `content/docs/design`           | Philosophy, architecture, services and terminology.    |
| `content/docs/apps`             | Standalone apps and plugins in the ecosystem.          |
| `content/docs/developers`       | Building apps in Python and JavaScript.                |
| `content/docs/roadmap`          | What's coming next.                                    |

Each folder uses a `meta.json` to control sidebar ordering and labels. To add a
page, drop a new `.mdx` file in the relevant folder with a `title` and
`description` in its frontmatter. The `meta.json` controls where it appears.

MDX components (callouts, code blocks, custom React widgets) are available inside
content. Frontmatter and MDX options are configured in
[`source.config.ts`](source.config.ts).

## Project layout

```
content/docs/         MDX documentation content
src/app/(home)/       Landing page, showcase, explorer and blog routes
src/app/docs/         Documentation layout and dynamic pages
src/app/api/          Search route handler
src/components/       Marketing sections, bento grids, MDX widgets, UI primitives
src/components/arkitekt/   Live Arkitekt client widgets (GraphQL explorer, connector)
src/lib/source.ts     Fumadocs content-source adapter
src/lib/shared.ts     Site-wide config (app name, repo links)
src/lib/layout.shared.tsx  Shared layout options
```

The site goes beyond plain docs: it embeds interactive components such as a 3D
robot scene, a live GraphQL explorer, an Arkitekt instance connector, and
animated marketing sections.

## Deployment

Pushing to `main` triggers the [GitHub Pages workflow](.github/workflows/deploy.yml),
which runs `pnpm build` and publishes the static `out/` directory to
[arkitekt.live](https://arkitekt.live) (`public/CNAME`). The site is served from
the domain root, so `PAGES_BASE_PATH` stays unset; set it only when deploying to
a project subpath.

Old Docusaurus URLs are kept alive by static redirect stubs in `public/`, generated
from the table in `scripts/redirects.mjs` (`pnpm redirects`). The previous
Docusaurus site lives on the `docusaurus-archive` branch.

## Learn more

- [Arkitekt documentation](https://arkitekt.live). The live site.
- [Fumadocs](https://fumadocs.dev). The docs framework.
- [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports). The build target.
