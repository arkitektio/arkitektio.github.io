---
id: my-first-app
title: My first App
sidebar_label: The basics
---

# Quickstart

The easiest way to install the library is to use poetry or pip:

```python
pip install arkitekt
```

As Arkitekt comes with a CLI, you can then use it to create a new project:

```python
arkitekt init
```

This will setup arkitekt in the local directory and guide you through connecting to your
local arkitekt instance for the first time.

# Usage

Lets's create an Arkitekt App, as it is the connection layer between your code and the arkitet server. If you don't know what we mean by an app, check out the [App](/docs/design/terminology/app.mdx) section of the terminology page.

```python
from arkitekt import easy


app = easy("my-app-name")

with app:
    # do stuff with arkitekt


```

Before we start exploring what you can do with this app a few general words about this
setup:

1. You might notice that we are creating an arkitekt app through calling the easy function, specifying only the name of the app, without having to explicitly
   pointing the app to an arkitekt instance. This is by design. Your code should not be aware of the backend it is connecting to, as this allows easy installation of your code anywhere. Arkitekt uses the fakt service to discover the backend, and will retrieve its configuration from the backend, before connecting to it, on the first call within the context (a useful feature for system admins to configure apps after deployment). Of course you can opt out of this behaviours by passing an explicity url of the arkitekt server or by changing the fakts attributes before entering the context.

   ```python
    from arkitekt import easy
    from fakts.grants.remote import RemoteDeviceGrant

    app = easy("my-app-name")

    app.fakts.grant = RemoteDeviceGrant("my-device-id", "my-device-secret") # Will try to connect claiming to be a preconfigured client
    with app:
        # do stuff with arkitekt
   ```

2. Arkitekt relies on the concept of an context manager (that `with` statement). We use
   this to manage the lifecycle of the application (e.g setup connections to the backend
   and tear down these connections). With this pattern we can ensure a graceful shutdown
   when it is no longer needed (or when an error occurs)

3. Within this context, you can use the `app` object to access the various services that
   Arkitekt provides. These services are available as attributes on the `app` object.
   For example, to access the `Mikro` service (responsible for storing your microscopy data
   ), you can use `app.mikro`.

4. The context manager also sets some context specific variables (contextvars).
   This means we can inject its dependencys within this context automatically sing the governing
   app context. This allows for more functional code. For example, you can use simply call
   `from_xarray` to save an xarray on the mikro instance of the governing app context, without
   explicitly passing the apps mikro server to the function. You can always opt out of this behaviour
   by specifically passing the desired context to the function.

   ```python
    from arkitekt import easy
    from mikro.api.schema import from_xarray
    import xarray as xr

    app = easy("my-app-name")

    with app:
        image = from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"])) # stores the xarray on the mikro instance of the governing app context

         # or

        image = from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"]), rath=app.mikro.rath) # stores the xarray on the specified mikro instance
   ```

   :::note
   This behaviour allows for more functional and concise code but can also lead to unexpected
   behaviour. For example, if you have multiple app contexts running in parallel, the
   `from_xarray` function will use the app context that is currently active. This can lead to
   unexpected behaviour if you are not aware of this.
   :::

5. Within the context you should avoid setting attributes on the `app`. An Arkitekt was designed
   to be configured before entering the context and not to be changed within the context.

6. Apps work both in async and synchronous contexts. This means that you can use the `app`
   object in both async and sync code. The `app` object will automatically detect the context
   and use the correct backend (check the documentation of koil for this). This means that you can use the same code in both async and
   sync code.

   ```python
    from arkitekt import Arkitekt
    import asyncio

    app = Arkitekt()

    async def main():
        async with app:
            # do stuff with arkitekt

    asyncio.run(main())
   ```

   :::note
   Arkitekt always uses an `asyncio` event loop internaly to manage the app context. In the non-async context, this event loop is
   run in a separate thread. Koil ensures that this threaded event loop is properly closed when the app context is closed, and bridges
   the calls between the threaded event loop and the main thread to ensure threadsafety. Btw: Threads started through rekuest are also
   able to call async / syncfuntions or the governing app context.
   :::

7. Calls outside of the app, context will always fail, as the app context is required to
   setup the connection to the backend. This is by design, as it ensures that you are aware
   of the context in which your code is running.

   ```python
    from arkitekt import easy
    from mikro.api.schema import from_xarray

    app = Arkitekt()

    with app:
         # do stuff with arkitekt
         from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"]), name="my-image")

    from_xarray(xr.DataArray((100,100,1), dims=["x", "y", "z"]), name="my-failed-image")  # will fail
   ```

# Lets get started

Now that we have a basic understanding of how Arkitekt works, let's start exploring the various things you can do with it.
We have created a few tutorials to get you started:

- [Storing image data](/docs/developers/python/basics/read-write.md)
-
