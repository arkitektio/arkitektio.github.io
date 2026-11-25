---
name: building-arkitekt-apps
description: >-
  Build apps for the Arkitekt platform with the arkitekt Python package
  (version 19 and later). Use when the user is writing or scaffolding Arkitekt
  apps: declaring an App and offering Python functions as actions with
  @app.action, publishing live state with @app.state, loading models or devices
  in @app.startup hooks, calling other apps from an @app.workflow through an
  @app.declare protocol, passing images by reference with mikro specs, calling
  the platform from a script with connect(Mikro), or packaging and publishing
  with the arkitekt CLI (create, run, inspect, plugin). Triggers on mentions of
  arkitekt, rekuest, mikro, fluss, elektro, kabinet, fakts, "@app.action" or
  "run(app)" in a Python scientific-analysis or lab-automation context.
license: MIT
---

# Building arkitekt apps

`arkitekt` is the Python client for the **Arkitekt** platform. You declare an
`App`, decorate ordinary type-annotated Python functions on it, and run it. The
platform turns each function into a callable **action** with a generated form,
validation, provenance and a place in workflows.

This skill teaches an assistant to write correct `arkitekt` apps. For anything
not covered here, point the user to <https://arkitekt.live/docs/build/python>.

> The older `arkitekt-next` package (`from arkitekt_next import register`,
> `@register`, `easy(...)` as the app, the `arkitekt-next` CLI, a
> `.arkitekt/manifest.yaml`) is **retired**. Never write code for it. If the
> user has old code, port it using the table in
> <https://arkitekt.live/docs/about/legacy/migrating-from-arkitekt-next>.
>
> `arkitekt` 18 and earlier had `App(services=[mikro_service])`,
> `app.service(...)`, `easy(...)`, `aeasy(...)` and `interactive(...)`. They
> are **gone** in 19. Never write them. An app uses a client because an
> annotation names it, and a script calls `connect(Mikro)`. The port table is
> at <https://arkitekt.live/docs/build/python#what-changed-in-19>.

## Mental model

1. An **`App`** is a declaration: identifier, version and what it offers.
   Declaring it does no I/O and checks nothing yet: the app is **assembled**
   when it is run, inspected or checked (`arkitekt check`), and every problem
   is raised together as an `AppDeclarationError` with file and line.
2. Each **`@app.action`** function is one implementation of an action. The
   signature *is* the API:
   - the parameters become input ports, the return annotation the output ports
     (a tuple return gives several outputs),
   - the first docstring line is the action's title, the rest its description
     (`{{param}}` placeholders are filled in the UI),
   - a default makes a port optional, `Optional[...]` makes it nullable.
3. **`run(app)`** authenticates, starts an **agent** for this process, registers
   the implementations and serves **tasks** until stopped.
4. Large data travels **by reference**: an image lives in Mikro and only its id
   crosses the wire. Simple values travel by value.

Type hints are not optional: an unannotated parameter cannot become a port, and
using a type the app does not know is an `AppDeclarationError` when the app is
assembled. Run `arkitekt check` to see every problem without connecting.

## A minimal app

```python
from typing import Annotated

from arkitekt import App, Description, run

app = App("com.example.greeter", "0.1.0", description="Says hello")


@app.action
def greet(
    name: Annotated[str, Description("Who to greet")] = "world",
    times: Annotated[int, Description("How often to say it")] = 1,
) -> str:
    """Greet

    Says hello to {{name}}, possibly several times.
    """
    return " ".join([f"Hello {name}!"] * times)


if __name__ == "__main__":
    run(app)
```

- Declare the app **once, at module level**, as a variable called `app` in
  `app.py`. That is where the CLI looks for it (`arkitekt run dev pkg.main:api`
  or `ARKITEKT_APP=pkg.main:api` point it elsewhere).
- `Annotated[..., Description(...)]` documents one port. `Default`, `Units`,
  `Requires` and `Provides` are further markers used the same way.
- Actions can be `def` or `async def`. Sync actions run in a worker thread.
- The decorated function stays a plain function, so tests can call it directly.

### Options on `@app.action`

Use parentheses to pass options:

| Option | Meaning |
| --- | --- |
| `name=` | Override the action name (default: the function name) |
| `effects=` | What running it again would do: `Effects.NONE`, `REPEATABLE`, `UNKNOWN` (default), `IRREVERSIBLE` |
| `policy=` | What happens on a lost connection, e.g. `CancelOnDisconnect(grace=2.0)` |
| `concurrency=` | `"serial"` (default) or `"parallel"` |
| `locks=` | Named locks a task must hold while it runs |
| `widgets=`, `port_groups=`, `validators=` | Per-port UI widgets, grouping and validation |
| `port_effects=` | UI effects attached to ports (this was `effects=` in `arkitekt-next`) |

```python
from arkitekt import App, Effects

app = App("liquid-handler", "0.1.0", effects=Effects.IRREVERSIBLE)  # app default


@app.action(effects=Effects.NONE)  # this one only reads
def read_absorbance(well: str) -> float:
    """Read Absorbance"""
    ...
```

### Streaming with a generator

A generator action streams: each `yield` reaches the caller as it happens.

```python
from collections.abc import Generator


@app.action
def count_to(n: int = 10) -> Generator[int, None, None]:
    """Count To

    Yields the integers from 0 to {{n}} one at a time.
    """
    for i in range(n):
        yield i
```

`AsyncGenerator[...]` works the same way for `async def` actions.

## Injection by annotation

Some parameters are filled by the runtime, not by the caller. Arkitekt tells them
apart by their **type annotation**; they are not ports. Make them keyword-only
(after `*`) for readability.

| Annotated with | Injected value |
| --- | --- |
| `Task` | The running task |
| A client (`Mikro`, `Fluss`, `Rekuest`, …) | The run's connected client. The annotation alone makes the app use it |
| An `@app.state` class | The app's live state instance |
| An `@app.context` class | The shared context built by a startup hook |
| The class passed as `App(app_context=...)` | The value given to `run(app, context=...)` |
| An `@app.declare` protocol | A proxy that calls another app (workflows only) |

### Logs and progress

There are no module-level `log(...)` or `progress(...)` functions. Take the task:

```python
from arkitekt import App, Task

app = App("measure", "0.1.0")


@app.action
def measure(count: int, *, task: Task) -> float:
    """Measure"""
    total = 0.0
    for i in range(count):
        task.progress(int(100 * i / count), f"sample {i}")
        total += read_sensor()
    task.log(f"read {count} samples")
    return total / count
```

Every task method has an async twin (`await task.aprogress(...)`). With the
`tqdm` extra, `from arkitekt.tqdm import tqdm` gives a progress bar that reports
to the running task. In tests, pass `Task.local()`, which logs to the console.

## Clients and data by reference

Take a client by annotation (`mikro: Mikro`). **The annotation is the whole
declaration**: there is no `services=` list. A port typed with a client's
structure (`Volume` is Mikro's) also makes the app use that client. Only a
client that no annotation names (used by a startup hook, a blok's query or
generated GraphQL code) goes in `App(..., clients=[Mikro])`, which takes
`@client` classes. `arkitekt inspect clients` lists what a run builds.

```python
from typing import Annotated

import numpy as np
import xarray as xr
from scipy import ndimage

from arkitekt import App, Description, Task, run
from mikro import Mikro
from mikro.arkitekt.specs import Volume

app = App("denoise-volume", "0.1.0")


@app.action
def denoise(
    volume: Annotated[Volume, Description("The stack to smooth")],
    sigma: Annotated[float, Description("Gaussian width, in pixels")] = 1.5,
    *,
    mikro: Mikro,
    task: Task,
) -> Volume:
    """Denoise Volume

    Smooths a stack with a gaussian and stores the result on the same grid.
    """
    source = volume.data  # lazy xarray, fetched chunk by chunk
    task.progress(20, f"Smoothing {source.shape}")
    smoothed = xr.DataArray(
        ndimage.gaussian_filter(np.asarray(source), sigma=sigma), dims=source.dims
    )
    result = mikro.create_array_dataset(
        data=smoothed,
        scales=[],
        name=f"denoised (sigma={sigma})",
        axes=volume.carried_axes(smoothed.dims),
        derived_from=[volume.derive_identity(value_relation="TRANSFORMED")],
    )
    return result.lens()


if __name__ == "__main__":
    run(app)
```

- Specs are all one class, `ArrayLens`, narrowed with `Requires` (arguments)
  and `Provides` (returns) on per-instance descriptors such as
  `@mikro/n_space_axes`. Write narrower ones as a plain `Annotated[ArrayLens,
  Requires(...), Provides(...)]` assignment (never a PEP 695 `type`), and use
  `Fits("...")` for what one machine can handle.
- `Volume`, `Image`, `SingleChannelImage`, `MultichannelVolume`,
  `TimelapseVolume`, `LabelMask`, … in `mikro.arkitekt.specs` are **lenses** over
  a stored array dataset with a requirement attached (e.g. exactly three spatial
  axes). As an input they restrict what the UI offers; as an output they say
  what the action provides.
- Results are **written with the client** (`mikro.create_array_dataset(...)`)
  and returned as a reference, never returned as raw arrays.
- Client objects are snapshots. Setting an attribute changes nothing on the
  server; call the matching mutation.

Other kinds of port types:

| Kind | How |
| --- | --- |
| Scalars, `Enum`, `list[...]`, `dict[str, ...]`, `Optional`, `Union` | just annotate |
| A value object passed field by field | decorate a class with `@app.model` |
| Your own stored type | `app.register_structure(Thing, "@mylib/thing", expand=expand_thing)` |
| Scratch data kept on this agent (e.g. `np.ndarray`) | `app.memory_structure(np.ndarray)`, **sparingly** (see below) |

Never pass numpy arrays or other heavy objects by value.

Memory structures make the app implicitly stateful: every returned object stays
in the agent's memory until Rekuest collects it or the agent stops, so memory
grows with every run, and a reference only resolves on the agent that made it.
Do not split a pipeline into many actions that pass arrays this way. Put steps
that always run together into one action, and store results worth keeping in
Mikro.

## State, context and lifecycle

Things that live longer than one task (a device connection, a loaded model, a
stage position) are built in **startup hooks**, not at import time.

| Declaration | For | Visible to others? |
| --- | --- | --- |
| `@app.state` | Values others should see change live | Yes, published and patched as it changes |
| `@app.context` | Heavy or private objects: a model, a device handle | No |
| `App(app_context=Setup)` | Configuration of this installation, given to `run(app, context=...)` | No |

```python
@app.state
class Stage:
    x_um: float = 0.0
    y_um: float = 0.0


@app.startup
def connect_stage() -> Stage:
    return Stage()


@app.action
def move_to(stage: Stage, x_um: float, y_um: float) -> None:
    """Move To

    Moves the stage; where it is now is the state.
    """
    stage.x_um, stage.y_um = x_um, y_um  # assigning a field publishes it
```

- **Publish state instead of offering getters.** Do not write `get_position` or
  `is_on` actions; other apps and the UI watch the state.
- An action returns what it made, never what the state already says.
- **State is small and actionable.** Only publish what a workflow could guard
  on or a person could act on, and write it when it changes meaningfully, not on
  every reading. Never put arrays in state (`.tolist()` included): store the
  data in Mikro and publish a reference (`last_image: Image | None`) or a
  summary. State is not a real-time channel: every assignment is one update,
  sent as its own frame and journaled, nothing is merged, and each has the
  latency of a trip through the server. Group fields that change together with
  `with task.updating(state): ...`. Live
  video and fast signals go through Lovekit streams (`lovekit.publish(...)`),
  with only the stream list in state.
- UIs (bloks, Qt widgets) **bind to the published state**. They never keep
  their own copy of what the device is doing. View state (a slider before
  Apply, an open tab) stays in the UI, in a blok's `<local>`.
- Full list with examples: <https://arkitekt.live/docs/build/anti-patterns>.
- `@app.shutdown` runs when the agent stops providing, `@app.background` runs for
  as long as the agent runs.

## Calling other apps: workflows

A plain `@app.action` **may not call other actions** (that is why there is no
`find(...)` / `call(...)` inside an action any more). Orchestration is an
`@app.workflow` that declares what it needs as a `Protocol`:

```python
from typing import Protocol

from arkitekt import App, Task
from mikro.arkitekt.specs import LabelMask, SingleChannelImage

app = App("plate-workflow", "0.1.0")


@app.declare(app="segmentation", auto_resolvable=True, min=1)
class Segmentation(Protocol):
    def count_cells(self, image: SingleChannelImage) -> int:
        """Count Cells"""
        ...

    def segment(self, image: SingleChannelImage) -> LabelMask:
        """Segment"""
        ...


@app.workflow
def count_and_segment(
    segmentation: Segmentation, image: SingleChannelImage, *, task: Task
) -> int:
    """Count And Segment"""
    cells = segmentation.count_cells(image)
    task.log(f"{cells} cells")
    if cells > 0:
        segmentation.segment(image)
    return cells
```

- Each protocol method must match an action of the other app by name, title and
  typed ports. Annotated attributes on the protocol are state demands.
- Proxy methods also have explicit forms: `.call(...)`, `await .acall(...)`,
  `.iterate(...)`, `.aiterate(...)`.
- Workflows are **resumed** if their agent dies; plain actions end `LOST`.
  Values from the outside world inside a workflow go through `task.now()`,
  `task.random()`, `task.sleep()` or `task.record(fn)` so a resume replays them.

## Scripts and notebooks (calling only)

A program that only *calls* the platform does not declare actions. Use
`connect` with the client classes it needs; nothing connects until the block is
entered. The app it logs in as is named after the script's file
(`identifier=` names another).

```python
from arkitekt import connect
from mikro import Mikro

with connect(Mikro) as mikro:
    folder = mikro.create_folder(name="examples")
```

- Several clients give a tuple, in order: `with connect(Mikro, Fluss) as (mikro, fluss):`.
- Async: `async with connect(Mikro) as mikro:`.
- Jupyter: `mikro = connect(Mikro).enter()` stays connected for the kernel's
  lifetime; re-running the cell replaces the previous connection.
- To call an action by id from a script, connect `RekuestCaller`
  (`from rekuest.client.client import RekuestCaller`) and use
  `rekuest.call("<action-id>", x=21)`. This raises `RootOnlyCallError` inside a
  running action; use a workflow there.
- `connect(app)` (an `App`, not a client class) connects an existing app's
  clients without offering anything: `with connect(app) as rt: rt.require(Mikro)`.

Connection options shared by `run` and `connect`: `url=` (otherwise
`$FAKTS_URL`), `headless=True` (print a device code instead of opening a
browser), `token=`, `mandate_key=`, `reauth=`, `skip_cache=`. `run`,
`connect(app)` and `run_detached` also take `clients=[...]`: client instances
to use instead of building them (a fake in a test).

## Desktop apps and other hosts

- **Qt** (the `qt` extra): `from arkitekt.qt import QtApp, MagicBar`;
  `app = QtApp("my-viewer", app_context=Window)`; in the window,
  `MagicBar(connect(app, provide=True), context=self)` logs in, offers the
  actions and shows the connection. `arkitekt create --template qt` writes one.
- A program with its own event loop or threads uses `run_detached(app, ...)`
  instead of the blocking `run(app)`.
- **FastAPI** (the `serve` extra): `arkitekt.serve(app, fastapi_app, ...)`.
- **Bloks** (declarative dashboards): `app.blok(...)` with a JSX-like BSX string;
  `bsx(...)` parses one ahead of time.

## CLI cheat-sheet

```bash
arkitekt create my-app --identifier com.example.myapp   # scaffold a project
arkitekt run dev                  # run with hot reload
arkitekt run prod                 # run as in a container, no reload
arkitekt inspect all              # what the app registers, without connecting
arkitekt inspect variables        # module-level variables that leak across reloads
arkitekt call remote ...          # call an action through the server
arkitekt check                    # assemble the app, report every problem
arkitekt inspect clients          # the clients a run of the app builds
arkitekt gen init --client mikro  # set up typed GraphQL code generation
uvx --with mikro turms gen        # generate it (arkitekt never runs turms)
arkitekt plugin flavour add --flavour gpu --description "CUDA build"
arkitekt plugin validate          # check every flavour
arkitekt plugin build             # build the image(s)
arkitekt plugin stage             # run the image against your server
arkitekt plugin publish           # push and record the release
arkitekt self info                # versions of every Arkitekt package
```

With uv, prefix with `uv run` (or `uvx arkitekt create ...` before a project
exists). Every command has `--help`.

There is **no manifest file**. Identifier and version are the arguments of
`App(...)` in `app.py`; requirements come from the clients its annotations name. Flavours live in
`.arkitekt/flavours/<name>/` (a `Dockerfile` and a `config.yaml`).

## Typical workflow

```bash
uvx arkitekt create my-app --identifier com.example.myapp
cd my-app
# edit app.py: add @app.action functions
uv run arkitekt run dev
uv run arkitekt inspect all
uv run arkitekt plugin build
uv run arkitekt plugin stage
uv run arkitekt plugin publish
```

## Checklist before you finish an app

- [ ] `from arkitekt import ...` only; no `arkitekt_next`, `rekuest_next` or
      `mikro_next` imports.
- [ ] One `app = App(identifier, version)` at module level. No `services=`, no `easy`.
- [ ] `arkitekt check` passes.
- [ ] Every action has full type hints and a docstring whose first line is the title.
- [ ] Logs and progress go through an injected `task: Task`.
- [ ] No heavy objects passed by value: use mikro specs or a registered structure.
- [ ] No I/O at import time: devices and models load in `@app.startup`.
- [ ] Read-only values are published with `@app.state`, not offered as getters.
- [ ] State holds no arrays and nothing written at frame rate; live data goes through Lovekit.
- [ ] Calls to other apps happen only in an `@app.workflow` through an `@app.declare` protocol.
- [ ] Read-only or harmless actions declare `effects=Effects.NONE`.
- [ ] `arkitekt inspect all` shows what you expect.
