---
name: building-arkitekt-next-apps
description: >-
  Build apps for the Arkitekt platform with the arkitekt-next Python client.
  Use when the user is writing or scaffolding arkitekt-next apps — registering
  Python functions as platform actions with @register/@action, choosing between
  standalone (easy/interactive) and plugin apps, handling complex data with
  shrink/expand structures, calling actions from other apps (find/call/iterate),
  reporting progress, or packaging and deploying with the arkitekt-next CLI
  (init, run, manifest, kabinet). Triggers on mentions of arkitekt, arkitekt-next,
  arkitekt_next, rekuest, mikro, fakts, kabinet, or "@register" in a Python
  microscopy / scientific-analysis context.
license: MIT
---

# Building arkitekt-next apps

`arkitekt-next` is the Python client for the **Arkitekt** platform ("streaming
analysis for microscopy"). You write ordinary, type-annotated Python functions
and **register** them; the platform turns each one into a callable *action* (a
node) with an auto-generated UI, validation, and provenance tracking.

This skill teaches an assistant to write correct arkitekt-next apps. When in
doubt about the platform itself, point the user to <https://arkitekt.live/docs>.

## Mental model

1. The unit of work is a **registered function**. Decorate it with `@register`
   (or `@action`) and the platform derives everything from the signature:
   - the action **name** from the function name,
   - the **description** and parameter docs from the NumPy-style docstring,
   - the **input ports** from the typed arguments,
   - the **output ports** from the return annotation.
2. An **app** hosts those functions and connects to an Arkitekt instance. There
   are two shapes — *standalone* and *plugin* (see below).
3. Data is passed by **value** for simple types and by **reference** for complex
   objects (images, models, files). References resolve through `shrink`/`expand`.

So good type annotations and good docstrings are not optional — they *are* the
API and the UI.

## The two app types — pick the right one

| | Standalone app | Plugin app |
| --- | --- | --- |
| Created with | `easy(...)` / `interactive(...)` builder in your own script | `arkitekt-next init` CLI scaffold |
| You write | the app instance **and** the functions | only the functions (in `app.py`) |
| Run with | `python my_app.py` | `arkitekt-next run dev` / `run prod` |
| GUI | full custom control (PyQt, napari, web) | integrated platform "Bloks" |
| Distribution | share the script | Docker image via `kabinet` |
| Best for | scripts, notebooks, GUI integration, prototyping | distribution, production, reproducibility |

**Rule of thumb:** building your own GUI, integrating into existing software, or
working in a notebook → **standalone**. Distributing to a team or deploying to a
server/cluster → **plugin**.

## Registering a function

```python
from arkitekt_next import register


@register
def add_world(hello: str) -> str:
    """Append World

    Appends " World" to the input string.

    Parameters
    ----------
    hello : str
        The input string.

    Returns
    -------
    str
        The input with " World" appended.
    """
    return hello + " World"
```

Guidelines:

- **Always annotate every argument and the return type.** Untyped parameters
  cannot be turned into input ports.
- **Always write a NumPy-style docstring** with a one-line title, a body, and a
  `Parameters` / `Returns` section. This text becomes the action's UI labels and
  help.
- Default values become the action's defaults and mark a port optional.
- Supported simple types serialize directly: `str`, `bool`, `int`, `float`,
  `Enum`, `list`, `dict`, and `pydantic` models. Do **not** try to pass raw
  numpy arrays or other heavy objects by value — use a structure (below).

### Streaming results with a generator

Return a `Generator` to stream multiple outputs over the life of one call:

```python
from arkitekt_next import register
from typing import Generator


@register
def count_up(n: int = 10) -> Generator[int, None, None]:
    """Count Up

    Yields the integers from 0 to {{n}} one at a time.

    Parameters
    ----------
    n : int, optional
        How many integers to yield, by default 10.
    """
    for i in range(n):
        yield i
```

### `register` vs `action`

`@register` registers the function with the default agent immediately — use it
in app entrypoints. `@action` (also from `arkitekt_next`) defines an action
without binding it to a specific agent, useful when you assemble registries
yourself. For most app code, reach for `@register`.

## Standalone app

Use the `easy` builder. The builder creates the app; the `with` block keeps it
connected and running while your registered functions are available.

```python
from arkitekt_next import easy, register


@register
def greet(name: str) -> str:
    """Greet someone by name."""
    return f"Hello {name}!"


# Connects to the default instance (http://localhost:8000) and registers the app
with easy("com.example.greeter", version="0.1.0") as app:
    app.run()  # blocks; registered functions are callable from the platform
```

Common `easy(...)` parameters:

- `identifier` – globally unique, reverse-domain (e.g. `com.example.myapp`).
- `version` – semver string, default `"0.0.1"`.
- `url` – fakts URL of the Arkitekt instance, default `http://localhost:8000`.
- `headless` – `True` prints auth instructions to the console instead of opening
  a browser (use on servers / in CI).
- `redeem_token` / `token` – non-interactive authentication.

In a **Jupyter notebook**, use `interactive(...)` instead — it runs the app in
sync mode so you can call actions without `await`:

```python
from arkitekt_next import interactive

app = interactive("com.example.notebook")
# now use find/call etc. synchronously
```

## Plugin app

Plugin apps are scaffolded by the CLI and contain **only** registered functions.

```bash
arkitekt-next init myapp \
  --identifier com.example.myapp \
  --version 0.1.0 \
  --package-manager uv
cd myapp
arkitekt-next run dev      # hot-reloading dev loop against a local instance
```

This writes an entrypoint `app.py` and a `.arkitekt_next/manifest.yaml`.

**Critical rules for the plugin `app.py`:**

- It must contain **only** registered functions (and their imports/helpers).
- It must **not** create an app instance (`easy(...)`) — the CLI does that.
- It must **not** run any code at import time. Module-level statements run on
  every reload. Guard one-off code behind `if __name__ == "__main__":`.
- Avoid mutable module-level globals; they leak across hot reloads. Run
  `arkitekt-next inspect variables` to detect leaking globals.

```python
# app.py — a plugin entrypoint
from arkitekt_next import register


@register
def max_intensity_projection(image: "Image") -> "Image":
    """Z-Project the Maximum Intensity ..."""
    ...
```

## Working with complex data (structures)

Heavy objects are never serialized into messages. Instead they live on central
storage and only a **reference (id)** travels. A class becomes an Arkitekt
*structure* by implementing async `shrink` (object → id) and classmethod
`expand` (id → object):

```python
class MyModel:
    id: str  # reference on central storage

    async def shrink(self) -> str:
        return self.id

    @classmethod
    async def expand(cls, value: str) -> "MyModel":
        return await cls.load_from_server(value)
```

Once a type is a structure you use it with plain type hints; arkitekt shrinks
and expands it automatically across the wire:

```python
@register
def summarize(model: MyModel) -> int:
    return model.size()
```

In practice you rarely write structures by hand — the companion library
**`mikro_next`** provides ready-made ones for microscopy data (`Image`, etc.).
Create a platform `Image` from a numpy/xarray array and pass it around by hint:

```python
from arkitekt_next import register
from mikro_next.api.schema import Image, from_array_like
import xarray as xr


@register
def upload(name: str) -> Image:
    """Upload a random image and return its platform reference."""
    data = xr.DataArray(..., dims=["x", "y"])
    return from_array_like(data, name=name)
```

## Calling other actions

From inside an app you can call actions that already exist on the platform:

```python
from arkitekt_next import find, call, acall, iterate

# find by hash / reference, then call blockingly
action = find("4df8e256...hash...")
image = action(width=200, height=400)

# or call directly
result = call("com.example.other/some_action", x=1)
results = list(iterate("com.example.streamer/produce", n=5))  # generator action

# async variants exist: acall, aiterate
```

In a Qt app, wrap the calling function so it runs on Arkitekt's thread:

```python
from arkitekt_next.qt import qt

app = qt(identifier="com.example.qtapp", parent=self)
worker = app.wrap(self.do_work)   # runs in the arkitekt thread
worker.returned.connect(self.on_result)  # back on the UI thread
worker.run()
```

## Reporting progress

For long-running actions, drive the platform progress bar. Either use the
arkitekt tqdm wrapper, or call `progress` / `aprogress` directly:

```python
from arkitekt_next.tqdm import tqdm   # reports each step to the platform

@register
def crunch(n: int) -> int:
    for _ in tqdm(range(n)):
        ...
    return n
```

## Advanced decorators (high level)

These are imported from `arkitekt_next` and used inside apps; consult
<https://arkitekt.live/docs> for full signatures before relying on them:

- `@state` – declare shared, observable app state.
- `@context` – provide a context object to actions.
- `@startup` – run setup once when the agent starts (e.g. load a model).
- `@background` – run a long-lived background task alongside the agent.
- `log` / `alog` – emit log lines attached to the current assignation.

## CLI cheat-sheet

```bash
arkitekt-next init [PATH]          # scaffold a plugin app
arkitekt-next run dev|prod         # run locally (dev = hot reload)
arkitekt-next manifest inspect     # show the app manifest
arkitekt-next manifest version patch|minor|major   # bump semver
arkitekt-next manifest scopes add write             # request rights
arkitekt-next kabinet init --flavour vanilla --devcontainer  # containerize
arkitekt-next kabinet build                          # build docker image(s)
arkitekt-next kabinet publish                        # push + register
arkitekt-next inspect variables    # find globals unsafe across reloads
arkitekt-next gen compile          # generate typed code from GraphQL docs
```

Every command has `--help`, and `-w/--work-dir` lets you target a project
without `cd`-ing into it.

### Scopes

Apps request **scopes** (rights) in the manifest — currently `read` and
`write`. Request only what you need; users are prompted for these on install.

### Flavours (multi-hardware builds)

A plugin app can declare multiple **flavours** (build recipes), e.g. a
`vanilla` CPU build and a `gpu` CUDA build. The platform picks the best flavour
for the target hardware using **selectors**:

```bash
arkitekt-next kabinet flavour add --flavour gpu --description "CUDA build"
arkitekt-next kabinet selector add gpu --kind cuda --cuda-cores 100
```

## Typical workflow

```bash
arkitekt-next init myapp --identifier com.example.myapp --package-manager uv
cd myapp
# edit app.py: add @register functions
arkitekt-next run dev                 # iterate
arkitekt-next manifest version patch  # bump
arkitekt-next kabinet init --flavour vanilla --devcontainer
arkitekt-next kabinet build
arkitekt-next kabinet publish
```

## Checklist before you finish an app

- [ ] Every registered function has full type hints **and** a NumPy docstring.
- [ ] No heavy objects passed by value — use `mikro_next` structures or
      `shrink`/`expand`.
- [ ] Plugin `app.py` has no import-time side effects and no `easy(...)` call.
- [ ] No leaking module-level globals (`arkitekt-next inspect variables`).
- [ ] Manifest requests only the scopes the app actually needs.
- [ ] `identifier` is globally unique reverse-domain; `version` is valid semver.
