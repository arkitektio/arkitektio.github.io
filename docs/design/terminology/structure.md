---
id: structure
title: How do these elements relate?
sidebar_label: Structure
sidebar_position: 1
---

# Structure

Structures are a core building block in Arkitekts Design and allow you to use more complex
data-types in your workflows and apps. By defining Structures you can define your own schema
of input and output data, that can be used in your apps and workflows.


# Shrink and Expand

Structures are data objects that can be `shrunk` and `expanded`. Shrinking a structure means
to convert it into a JSON serializable object, that can be send over the network. Expanding
a structure means to convert it from a JSON serializable object back into a structure.



# GLobal vs Local Structures

Structures can be defined globally or locally. 

Global structures are structures that live distributed and universally accesible to all apps.  
For the most part these are structures
that are defined by some service of the platform, and when created live on the platform.
Shrinking and expanding global structures is easily handled by sending only the ID of the
structure over the network, and then expanding it on the other side.

Local Structures are structures that are defined locally by an app. These structures are
NOT distributed and only accesible to the app that created them. Shrinking and expanding
local structures is simply done by putting them on a local "shelve" getting the ID of the
that shelved structure, and then expanding it on the other side. However, this means that
local structures are not accesible to other apps, and can only be used by the app that
created them.

Arkitekt allows you to define both global and local structures, and you can use both
in your workflows, however, Arkitket ensures that you can never pass a local structure
from one app to another, as this would break the workflow. 

:::note

Currently we are limiting the use of local structures to applications, that also acts
as the scheduler for the workflow. This means that you can only use local structures
in workflows on the same app, so called 'in app workflows'. We are not sure if we will
keep this limitation, but it is a good way to ensure that you do not break your workflow
by passing local structures between apps.

:::


