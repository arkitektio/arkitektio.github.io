---
id: design
title: Design
sidebar_label: Design
sidebar_position: 2
---

# Welcome to the Arkitekt Design Docs

This is the home of the Arkitekt design docs. Here you will find the information you need to understand how Arkitekt works under the hood and
what design decisions have been made. This should help you understand how to use Arkitekt and how to potentially contribute to the project. 
When discussing the design of Arkitekt we will first have to adress to different aspects of the platform, which are:

- Server
- App



## Server

The server is the core of the Arkitekt platform. It is the 'heart' of the platform and provides the backbone for the Arkitekt platform. It represents the central
access point for the `Apps` and provides a communication platform between them. As a `Microservice` platform, Arkitekts server is build around multiple `Services`
that provide the functionality of the platform. When deploying Arkitekt, you can choose to [personalize](/docs/design/deployment/) your Arkitekt Server with the services you need, and personalize
the server to your needs.



:::info On the term `Server`
While the term `Server` is often used to describe one single physical machine, this is not always the case. In the context of Arkitekt, a `Server` is a logical entity that provides a set of services. This means that a `Server` can be just one  physical machine, but it can also be a cluster of machines, or a adapting collection of virtual machnines in the cloud. You will see us sometimes use the world `Deployment`, which more commonly describe the sets of services
that are deployed on multiple machines.
:::


## Apps

Apps are the main building blocks of any work done on Arkitekt platform. They are the entities that provide the actual functionality of the platform, as for the 
most part the server is just a communication platform and a data store. Apps are the entities that provide the actual functionality of the platform. They are the
ones that provide the user interface and the actual functionality.


