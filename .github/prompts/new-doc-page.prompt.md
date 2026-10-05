---
name: new-doc-page
description: "Scaffold a new documentation page or section inside content/docs of this Fumadocs site. Use when: adding a doc page, creating a new docs section."
argument-hint: "Describe the page: title, who it is for (use, deploy, build or design), and what kind of page it is (tutorial, guide, reference or concept)."
---

# New Documentation Page

Create a new documentation page in this Fumadocs project following the established conventions.

## Gather inputs

Determine from the user's request:

1. **Title**: the display title for the page.
2. **Reader**: which area of `content/docs/` it belongs to.
   - `use`: scientists using Orkestrator and the connected apps.
   - `deploy`: admins installing and operating an Arkitekt server.
   - `build`: developers writing apps, plugins and services.
   - `design`: explanation that all three share (philosophy, terminology, comparisons).
3. **Kind** (inside `use`, `deploy` and `build`): one folder per [Diataxis](https://diataxis.fr) type.
   - `tutorials`: a lesson that takes a newcomer through a first success.
   - `guides`: steps for a reader who already knows what they want to do.
   - `reference`: facts to look up, such as options, tables and protocols.
   - `concepts`: background that explains how and why something works.
4. **Page type**: a single `.mdx` file (default), or an `index.mdx` that introduces a new sub-folder.

If any of these are ambiguous, infer reasonable defaults from the target folder's existing pages
rather than asking. A page that would mix kinds (a walkthrough followed by an option table) is two
pages that link to each other.

## Conventions to follow

- **Frontmatter**: every page starts with `title` and `description`, nothing else.

```yaml
---
title: <Title>
description: <One sentence; it is shown in search, link previews and llms.txt.>
---
```

- **Sidebar**: order and labels come from the `meta.json` of the folder. Add the new file name
  (without `.mdx`) to its `pages` list. A new sub-folder needs its own `meta.json` with `title`
  and `pages`, and an entry in the parent's `pages`.
- **Links**: write links to other pages as absolute URLs (`/docs/build/guides/python/workflows`),
  never as relative paths. `pnpm check:links` rejects relative page links.
- **Images and assets**: put media files under `public/` and reference them by absolute URL.
- **Imports**: components come from `@/components/docs` and `@/components/arkitekt`; `Callout`
  and `Cards` need no import. Only add imports the page actually uses.
- **Moving a page**: add the old URL to `scripts/redirects/legacy.json` so it keeps working.

## Steps

1. **Determine the full file path** under `content/docs/` from the reader and the kind.
2. **Inspect similar existing pages** in the target folder to match their structure and tone.
3. **Create the file** with frontmatter and a starter body.
4. **Add it to `meta.json`** of the folder, in a sensible position among its siblings.
5. **Run `pnpm build && pnpm check:links`** to confirm the page builds and its links resolve.
6. **Summarise** what was created and where, so the user knows the next step is to fill in the content.
