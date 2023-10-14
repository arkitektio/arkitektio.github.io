---
id: tasks
title: How do these elements relate?
sidebar_label: Tasks
sidebar_position: 1
---


# I want ImageJ to filter an Image for me

One of the core functionality of Arkitekt is to assign different apps some
task (e.g filter that image for me) and to get the result back. But how does that work internally?














# How and why do we add the complexity  

Once you start using Arkitekt you might wonder why we introduce all of this abstractions,
that we then try to hide from you as much as possible. This holds true especially if you are
used to dealing with other RPC frameworks where you would just call some functionality on a remote
system, and get the return value back.

Let's explore on some examples, exploring why we choose these abstractions over some more classic
rpc functionality:
