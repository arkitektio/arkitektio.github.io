---
id: manifest
title: Manifest
sidebar_label: Manifest
sidebar_position: 1
---

### What is a manifest?

A manifest is the Arkitekt way of identifying an application. It contains information about the app,
such as its name, version, and which access rights [scopes](#scopes) it requires. When you develop
an app for Arkitekt, you will need to create a manifest for your app, which will be used to uniquely
identify your app on the platform. No worries, this is a simple process, and if you are using the
[Arkitekt CLI](/docs/developers/python/intro.md), it will be done automatically for you.

In its simplest form, a manifest is a YAML file, that contains the following information:

```yaml
name: "Example App"
identifier: "com.example.app"
version: "0.1.0"
description: "This is an example app"
scopes: 
- openid
- email
```

As you can see, the manifest contains information about the app, such as its name, version, and
description. This information will be presented to the user, when they are asked to authenticate
your app, or they can be used to search for your app in the soon to be released [App Store](/docs/design/appstore).

### Plugin Manifest

When you develop an app for Arkitekt, your manifest will be slightly different, as it will contain
additional information about your app, such as its prefered hardware and software environments. This
information will be used by the platform to determine if your app can run on a given machine, and
which resources it will require. Additionality if you use more advanced container placement strategies,
(such as [Kubernetes](https://kubernetes.io/)), this information will be used to determine which
machines your app can run on.

```yaml
deployments:
    name: "Example App"
    identifier: "com.example.app"
    version: "0.1.0"
    deployed_at: "2021-01-01T00:00:00Z"
    description: "This is an example app"
    scopes: 
    - openid
    - email
    flavours:
        -   name: "CUDA"
            description: "This flavour requires a CUDA - 11 enabled GPU"
            selectors:
                -   type: resource
                    name: "gpu"
                    value: "cuda-11"
            image: "docker.io/arkitekt/example-app:0.1.0"
            priority: 1
        -   name: "CPU"
            description: "This flavour requires a CPU"
            selectors:
                -   type: resource
                    name: "cpu"
                    value: 1
            image: "docker.io/arkitekt/example-app:0.1.0"
            priority: 2
```

As you can see, this `deployment` manifest contains the same information as the simple manifest, but
it also contains information about the different flavours of the app. Flavours are a way of
describing the different ways an app can be deployed. In this example, the app can be deployed in two
different flavours, one that requires a CUDA enabled GPU, and one that requires a CPU. The platform
will use this information to determine which flavour of the app to deploy, based on the available
resources on the machine, and the user's preferences.

:::note

The flavour based deployment is currently highly experimental and is not yet supported by the
the `paper` and `beta` channels, and the api is subject to change. This feature is currently only
available in the `alpha` channel.

:::




