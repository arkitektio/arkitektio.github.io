---
id: intro
title: Intro
sidebar_label: Intro
sidebar_position: 1
---

# Welcome to the Arkitekt Design Docs

This is the home of the Arkitekt design docs. Here you will find the information you need to understand how Arkitekt works under the hood and
what design decisions have been made. This should help you understand how to use Arkitekt and how to potentially contribute to the project. 
When discussing the design of Arkitekt we will first have to adress to different aspects of the platform, which are:

- Server
- Apps


## Overview

Arkitekt is build around a microservice architecture, which means that it is composed of many small services that seperate concerns of the platform. Contrary to a lot of modern micro-services, Arkitekt containers limits internal (inter-service) communication , which means that the services _are not_ coupled. This allows for a lot of flexibility in the deployment strategies, as the services can be deployed on different machines, in different containers, or even in different clouds. On top of that Arkitekt is build on container technology, which means that it can be deployed on any container orchestration platform, such as Kubernetes, Docker Swarm, or even a custom solution.




## Under Construction

This is a work in progress. We are working on adding more content to this section. If you have any questions, please contact us directly.
Until then and if you are inclined also feel free to consult the [PhD thesis](/thesis.pdf), which contains a lot of information about the design of Arkitekt.
