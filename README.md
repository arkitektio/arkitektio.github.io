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
| `pnpm build`         | Build the static export into `out/`, including redirect stubs.   |
| `pnpm check:links`   | Check every internal link of the built site (run after build).   |
| `pnpm start`         | Serve the built `out/` directory locally (`serve`).              |
| `pnpm types:check`   | Regenerate MDX/route types and run `tsc --noEmit`.              |
| `pnpm lint`          | Run ESLint.                                                      |

## Writing content

All documentation lives in [`content/docs`](content/docs) as MDX. It is organised by who is
reading and by what kind of page it is ([Diataxis](https://diataxis.fr)):

| Area                   | Reader                                                              |
| ---------------------- | ------------------------------------------------------------------- |
| `content/docs/use`     | Scientists using Orkestrator and the connected apps.                |
| `content/docs/deploy`  | Admins installing and operating an Arkitekt server.                 |
| `content/docs/build`   | Developers writing apps, plugins and services.                      |
| `content/docs/design`  | Everyone: philosophy, terminology, comparisons, what's changed.     |

Inside `use`, `deploy` and `build`, a page goes into one of four folders:

| Folder       | What belongs there                                             |
| ------------ | -------------------------------------------------------------- |
| `tutorials`  | A lesson that takes a newcomer through a first success.        |
| `guides`     | Steps for a reader who already knows what they want to do.     |
| `reference`  | Facts to look up: options, tables, protocols.                  |
| `concepts`   | Background that explains how and why something works.          |

The four areas are separate sidebars, switched from the dropdown at the top of the sidebar (each
has `"root": true` in its `meta.json`). Each folder uses a `meta.json` to control sidebar ordering
and labels. To add a page, drop a new `.mdx` file in the relevant folder with a `title` and
`description` in its frontmatter, and add it to that folder's `meta.json`.

Link to other pages with absolute URLs (`/docs/build/guides/python/workflows`), not relative paths.

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

The workflow also type-checks and runs `pnpm check:links`; pull requests are built and checked
but not deployed.

### Moving or renaming a page

GitHub Pages has no server-side redirects, so every URL that used to exist gets a static stub
that forwards the browser. The stubs are generated into `out/` at the end of `pnpm build` from
the tables in [`scripts/redirects`](scripts/redirects):

- `legacy.json`: old URL to new URL. Add an entry here when you move or remove a page.
- `moves.json` and `splits/`: the move to the persona layout, including where each heading of a
  split page went.
- `required.json`: URLs that are linked from outside (released apps, READMEs) and must keep
  resolving.

The build fails if a redirect points at a page or heading that does not exist. The previous
Docusaurus site lives on the `docusaurus-archive` branch.

## Learn more

- [Arkitekt documentation](https://arkitekt.live). The live site.
- [Fumadocs](https://fumadocs.dev). The docs framework.
- [Next.js Static Exports](https://nextjs.org/docs/app/guides/static-exports). The build target.
