# Documentation rigor audit

Audit of all 125 MDX pages under `content/` (2026-09-30). ✅ marks what was fixed in the same change
as this report. Everything else is open. Line numbers refer to the state before this change.

**How to read it.** The largest problem is not individual pages but **drift between two generations
of the platform**. Pages written for the *Paper* release (installer channels, demo/demo accounts,
port 8000, a web UI, `arkitekt-next`) sit next to pages that describe *Next* (coordinator accounts,
image tags, port 7080/7443, desktop Orkestrator, `arkitekt` 5). A reader who follows both gets
contradictory instructions.

---

## 1. Cross-cutting problems

### 1.1 Paper vs Next drift

| Topic | Paper-era statement (where) | Current truth (where) |
|---|---|---|
| Accounts | demo/demo user and admin created at install (`introduction/first-steps/interface.mdx` L102, L115-122) | accounts live on the coordination server, hub keeps none (`design/whats-changed/installing.mdx`) |
| Channels | stable/beta/next live channels, Next "not recommended for production" (`design/philosophy/version.mdx`, `design/terminology/manifest.mdx` L66-72/L123-129, `design/deployment/testing.mdx`) | channels are image tags in `hub_config.yaml`; Next is what you install (`design/whats-changed/index.mdx`) |
| Ports | 8000-8061 (`troubleshooting/startup.mdx` L198, L269-280; `python/plugin.mdx`) | 7080/7443 (`introduction/installation/starting-new.mdx` L113) |
| Discovery | local instances auto-detected (`apps/standalones/mikro-napari.mdx` L84) | local advertising removed (`starting-new.mdx` L302-310) |
| UI | "webinterface", "refresh the page" (`interface.mdx` L174, `first-tool.mdx` L125, `training.mdx` L85) | Orkestrator is a desktop app |
| GraphQL stack | Graphene, migration "ongoing" (`design/services/index.mdx` L56/L65, `lok.mdx`) | Strawberry (`whats-changed/features.mdx` L114) |
| "Next" status | "not yet ready for external use" (`developers/contribute/projects.mdx` L151-156) | "what these docs describe" (`whats-changed/index.mdx`) |
| Python API | `arkitekt_next`, `easy` + `@register`, `arkitekt-next` CLI (all of `developers/python/`) | `arkitekt` 5: `App` + `@app.action`, `run(app)`, `arkitekt` CLI. ✅ Python section rewritten |
| JS clients | `fakts` + `herre` (`developers/javascript/installation.mdx` L73) | ✅ JavaScript section removed until the client is published again |

**Recommendation:** add a `version: paper` banner (as the showcases already have) to every page that
is not rewritten yet, so readers know which world a page describes.

### 1.2 Terminology

- **Agent** was used in two senses (running app instance vs. AI assistant) and never defined.
  ✅ New `design/terminology/agent.mdx` defines it and separates the two senses.
- **Task** was defined differently in `terminology/task.mdx` and `architecture/provenance.mdx` L42
  ("groups every change during one logical run"). ✅ `task.mdx` rewritten, with a state table
  including LOST and the child-task relation. `provenance.mdx` is compatible now but could link to it.
- **Node vs action.** "node" is correct for a workflow graph element, but is used for *action* in
  `first-steps/first-workflow.mdx` L9/L89 and `design/services/index.mdx` L11 ("Node Repository").
  Image files are still named `node-template.png` / `node-stream.png`.
- **Server naming.** hub (146 uses), deployment (167), Arkitekt server (86), instance (67) and
  central server (6) are used interchangeably. Pick one term per concept and define it.
- **Plugin / PluginApp / Plugin-App / plugin engine** are mixed. The same docs button is called
  "Connect" and "login with arkitekt".
- **Scheduler** is referenced (`troubleshooting/general.mdx` L27 "restart the scheduler") but its
  terminology page is a stub.

### 1.3 Outdated API outside the Python section

- ✅ `design/comparisons/nextflow.mdx`: ported to `App` / `@app.context` / `@app.startup`. This also
  resolves its contradiction with the old `python/more.mdx`, which put a model in `@state`. The
  Groovy snippet was converted to valid DSL2, and the overclaim "Nextflow simply cannot preload a
  model" was softened.
- `introduction/advanced/training.mdx` L221+: Paper-era code (`from arkitekt import register`,
  `mikro.api.schema` fragments, duplicate imports, docstring defaults that contradict the
  signature). ✅ Flagged with a callout. Still needs porting to the current mikro API.
- `design/deployment/testing.mdx`: `from arkitekt import deployment` no longer exists in `arkitekt`.
  ✅ Flagged with a callout. The page should be rewritten around konstruktor or removed.
- `first-steps/first-workflow.mdx`, `first-run.mdx`: `@mikro/representation` (Paper type).
- `design/various/nextflow.mdx`: hypothetical `arkitekt call remote` CLI and invalid Groovy. It also
  duplicates `comparisons/nextflow.mdx`.
- `public/skills/arkitekt-next/SKILL.md`: the published AI skill teaches the old API throughout.
  ✅ `agent-skill.mdx` now warns about this. **The skill itself still needs a rewrite.**
- ✅ Landing page code snippets (`src/components/bento/{declare,async-api,state}-card.tsx`) now use
  `@app.action`, `@app.workflow` (the declare card calls a protocol), `@app.declare`, `@app.state`
  without `@dataclass`, and an injected `task.progress(...)`.

### 1.4 Unsupported claims (mostly security)

- `design/security/measures.mdx`
  - L15 "an app only has access to the data it needs… No app can spy on your data" contradicts
    `identity.mdx` L59-65 ("Scope-based access control is not yet fully enforced").
  - L17 "Plugins are sandboxed… can't access your filesystem": no mechanism documented (mounts,
    egress, privileges).
  - L24 "block all users that use Napari on a certain day": no mechanism documented.
  - L26 "For most actions, you can also revert": no revert mechanism is documented anywhere.
  - Nothing is said about token lifetime or revocation for stateless JWTs.
- `design/security/mesh.mdx` L23-26 "whoever runs the coordinator cannot see your images" states
  no trust model for a control server that can authorize its own nodes. It doesn't say who runs the
  relays. It calls the mesh "the secure default" (L50) and "optional and experimental" (L77).
- `design/philosophy/humans-first.mdx` L20: "Arkitekt **enforces**" human-started tasks, with no
  mechanism given, while L33 concedes "you can fake that".
- ✅ `design/services/rekuest.mdx` L42 "highly available and fault-tolerant" contradicted
  `developers/index.mdx` L53. It is replaced by the concrete delivery/LOST/resume contract, with a
  link to the new durable-execution page.
- Production readiness contradicts itself: `security/index.mdx` and `deployment/index.mdx`
  discourage multi-user production, while `philosophy/topology.mdx` rates fully self-hosted as
  "Production / advanced". `topology.mdx` recommends self-hosting the coordinator, but no page
  explains how.

### 1.5 Rendering

- ✅ Mermaid blocks (`first-steps/first-task.mdx`, `architecture/service-discovery.mdx`) rendered as
  raw code because no mermaid plugin is configured. They are now a text diagram and a table.
- ✅ `Callout type="alert"` (invalid) in `humans-first.mdx` changed to `idea`.
- `DisplayWorkflow` / `ShowWorkflow` / `LatestImage` (`src/components/arkitekt/`) are stubs that
  render "not available". There are 9 placements across 6 tutorial and showcase pages.
  `design/services/fluss.mdx` L43 advertises these as working.
- About 20 unused component imports (e.g. `first-tool.mdx` `InstallRepoButton`, `DownloadGrid` in
  three showcases) mark where content was removed.

### 1.6 Links and navigation

- ✅ Broken link `/docs/design/scheduling` in `services/fluss.mdx`.
- ✅ Dangling root `"ai"` entry in `content/docs/meta.json`.
- ✅ `services/kraph.mdx` was missing from `services/meta.json` (orphaned from the sidebar).
- ✅ Unresolved `[Kluster-Gateway]` reference in `services/kluster.mdx`.
- ✅ Malformed URLs `github.com/jhnnarkitektiosrs/fluss` (`projects.mdx`) and
  `github.com/arkitekt/arkitektio.github.io/doks` (`terminology/index.mdx`).
- Still wrong: `github.com/jhnnsrs/arkitektio` (`troubleshooting/startup.mdx` L160). Repo owners
  are inconsistent (segmentor and kare under `jhnnsrs` vs `arkitektio-apps`), and stdlib is
  `branch="main"` in tutorials vs `master` in showcases.
- Relative links (`services/lok`, `./action`, `./gucker`) break when served with a trailing slash.

---

## 2. Page table

Severity **H** means wrong or contradictory for most readers, **M** means incomplete or partly
outdated, and **L** means polish.

| Page | Sev | Issues | Status |
|---|---|---|---|
| `developers/python/*` | H | Whole section on removed `arkitekt_next` API. Missing concepts (agent, implementation, generators, calling, progress, workflows, recovery). `@state` vs `@context` contradiction. Truncated `read-write.mdx`. Invalid snippets. | ✅ Rewritten: overview, installation + migration table, **concepts**, first-app, types, state-lifecycle, workflows, **durable-execution**, scripts, packaging, bloks, graphql, agent-skill. Old pages redirect. |
| — (new) | H | No Rust or embedded client docs | ✅ `developers/rust.mdx`, `developers/embedded.mdx` |
| — (new) | H | Durable execution was undocumented anywhere | ✅ `design/architecture/durable-execution.mdx` + `developers/python/durable-execution.mdx` |
| `introduction/first-steps/interface.mdx` | H | Paper login flow (demo/demo, admin at install), "no data to the internet" vs coordinator, "Paper channel", web UI, scopes docs "in the future" | open |
| `troubleshooting/startup.mdx` | H | Paper channels, ports 8000-8061, "Danger button", Lok port 8000, `nvidia/cuda:11.0-base`, wrong issue repo. Nothing on Next failures (hub authorization, mesh, `konstruktor`). | open |
| `design/security/measures.mdx` | H | See 1.4 | open |
| `design/philosophy/version.mdx` (+ channel callouts in `terminology/manifest.mdx`, `deployment/testing.mdx`) | H | Channel model contradicts whats-changed | open (`testing.mdx` flagged ✅) |
| `developers/javascript/*` | H | Broken code, Paper APIs, unpublished client | ✅ Removed (redirects to `/docs/developers`) |
| `introduction/advanced/training.mdx` | H | Paper code, doc/sig mismatch, unused import | flagged ✅, port open |
| `developers/contribute/projects.mdx` | H | "Next not ready", `port` described as a Fluss client, `reaktor` misfiled, poetry | URL fixed ✅, rest open |
| `design/terminology/scheduler.mdx` | H | Stub ("reworking… available soon") | open |
| `design/various/containers.mdx` | H | Stub. `first-tool.mdx` links to it as the explanation of plugin containers. | open |
| `apps/standalones/mikro-manager.mdx`, `apps/standalones/index.mdx` | H | Frontmatter only | open |
| `design/services/index.mdx` | H | Graphene vs Strawberry, "Node Repository", "no inter-service communication" absolute, CLI "Konstruktor" | kraph nav ✅, rest open |
| `showcases/omero-sink.mdx` | H | Contradicts itself on upload. `full` channel. Default `root/omero` creds without a warning. Paper behaviour without `version: paper`. | open |
| `design/services/fluss.mdx` | H | Broken link. Claims web components render workflows. Never names which app executes workflows. | link ✅, rest open |
| `design/terminology/task.mdx` | M | Empty "path of a task", "see below" to nothing, typos, no states | ✅ Rewritten |
| `design/terminology/action.mdx` | M | Empty "Action can establish streams" section, dangling pointer, duplicate captions | open |
| `design/terminology/implementation.mdx` | M | Garbled example (L8). Per-user implementations without mechanism. No relation to agent. | agent relation ✅ (in `agent.mdx`), rest open |
| `design/terminology/index.mdx` | M | Bogus repo link. Promised "visual guide" does not exist. | link ✅ |
| `design/terminology/manifest.mdx` | M | Channel callouts. `deployments:` map/list confusion. "Already part of the CLI" (which?). No manifest *file* exists any more in `arkitekt` 5. | open |
| `design/services/lok.mdx` | M | Caption copied from Mikro. Lok-in-hub vs coordinator unclear. Stale rewrite note. | caption ✅, rest open |
| `design/services/rekuest.mdx` | M | "Highly available" claim, uncaptioned recovery figure | ✅ |
| `design/services/kluster.mdx` | M | Unresolved reference, typos | ✅ |
| `design/services/omeroark.mdx` | M | L42 unfinished sentence | open |
| `design/services/port.mdx` | M | Deprecated but in nav. `kare.mdx` still says to install via Port. | open |
| `design/security/mesh.mdx` | M | See 1.4 | open |
| `design/philosophy/topology.mdx` | M | Self-hosting the coordinator is recommended but undocumented. "Kommunity partner" undefined. | open |
| `design/philosophy/humans-first.mdx` | M | "Enforces" without mechanism. Invalid callout type. Off-tone aside. | callout ✅ |
| `design/various/vpn.mdx` | M | Predates mesh. Profanity (L16). Undefined features. | open |
| `design/comparisons/nextflow.mdx` | M | Outdated API, invalid Groovy, `@state`/`@context` contradiction, overclaim | ✅ |
| `design/comparisons/rest.mdx` | M | "Work in progress". Rate limiting / dataloader claims without specifics. | open |
| `design/various/graphql.mdx` | M | "Try it out yourself" without a playground. Query/text mismatch (ROI labels). | open |
| `introduction/first-steps/first-task.mdx` | M | Visible TODO callout, mermaid, stale "Mikro next" callout, "Viv" links to vizarr | TODO ✅ mermaid ✅ |
| `introduction/first-steps/first-tool.mdx` | M | Empty "Convert a file" section. Unused import. "Store is empty". Unverified update-notification claim. No trust criteria. | open |
| `introduction/first-steps/first-workflow.mdx` | M | "node" for action, Paper type, stdlib branch | open |
| `introduction/first-steps/brief-interlude.mdx` | M | Connect button naming. Connecting from docs site vs `orkestrator.mdx` L52-56 (browser cannot reach lab network). No HTTPS/mixed-content limits. | open |
| `introduction/advanced/local-workflows.mdx` | M | Truncated sentence. Not in `advanced/index.mdx`. "No network latency" while needing fluss+rekuest. | sentence ✅ |
| `apps/standalones/gucker.mdx` | M | Wrong regexes (`.*.tif`, `[.tif\|.tiff]` as character class). Import/Export vs Target. No macOS. | open |
| `apps/standalones/orkestrator.mdx` | M | "Will support deep linking" while the badge already ships it | open |
| `apps/standalones/mikro-napari.mdx` | M | napari 0.4.17, local auto-detection, "more on that later" never covered | open |
| `apps/plugins/segmentor.mdx`, `apps/plugins/index.mdx`, `apps/plugins/kare.mdx` | M | One sentence / no list / Port install | open |
| `troubleshooting/general.mdx` | M | "Restart the scheduler". Heading inside a callout. Stateless claim ignores in-flight tasks. | open (in-flight semantics now documented in durable-execution) |
| `showcases/streaming-workflow.mdx` | M | Literal "TODO: Video". Paper CLI and port. | TODO ✅ |
| `developers/index.mdx` | L | Typos. No links into the sections. | ✅ |
| `introduction/basics.mdx` | L | "Hub runs in the background on your computer", typo "cental" | open |
| `design/various/index.mdx`, `lazy-loading.mdx`, `gpu.mdx`, `uc2.mdx` | L | One-liners, no mechanism, dated | open |
| `introduction/first-steps/index.mdx`, `advanced/index.mdx`, `troubleshooting/index.mdx` | L | No overview. Advanced index omits local-workflows. | open |
| `apps/standalones/pokket.mdx`, `imagej-plugin.mdx` | L | README paste. Macros-as-actions without how. | open |
| `introduction/installation/joining.mdx` | L | Non-descriptive description (feeds OG/SEO) | open |
| `developers/contribute/index.mdx` | L | Typos | open |
| `first-steps/first-run.mdx` | L | "Current bug, refresh the page" | open |

---

## 3. Suggested order for the remaining work

1. `introduction/first-steps/interface.mdx`: every new user hits it.
2. `troubleshooting/startup.mdx`: rewrite for Next failure modes.
3. `design/security/measures.mdx` and `mesh.mdx`: state mechanisms or drop the claims.
4. `design/philosophy/version.mdx` + channel callouts: align with image tags.
5. `public/skills/arkitekt-next/SKILL.md`: port to `arkitekt` 5.
6. `introduction/advanced/training.mdx`: port the code.
7. Stubs: scheduler, containers, mikro-manager, standalones index, segmentor.
8. `design/services/index.mdx` + `lok.mdx`: stack and coordinator story.
9. Terminology pass: node → action, one term for the server.

## 4. Upstream issue found while verifying

`examples/in_memory_pipeline.py` in the `arkitekt` repository annotates ports as
`numpy.typing.NDArray[Any]` after `app.memory_structure(np.ndarray)`. With the released
`arkitekt 5.0.1` (`arkitekt-spec 2.0.1`), that raises `DefinitionError: NDArray[Any] is not
registered`, while annotating with `np.ndarray` works. The docs use `np.ndarray`.
