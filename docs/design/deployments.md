---
id: deployment
title: Arkitekt and Containers
sidebar_label: Arkitekt and Containers
sidebar_position: 2
---

# Deployment Strategies

## Introduction

Arkitekt aims to be highly costumizable in its deployment strategies, ranging from using Arkitekt on a single machine to deploying it on a cluster, the cloud, or even a hybrid of all. This document aims to give an overview of the different deployment strategies and their advantages and disadvantages. This document is not meant to be a step-by-step guide on how to deploy Arkitekt, but rather a high-level overview of the different strategies. For the step-to-step guide, please refer to the [first steps guide](../introduction/installation.mdx).

## Overview

Arkitekt is build around a microservice architecture, which means that it is composed of many small services that seperate concerns of the platform. Contrary to a lot of modern micro-services, Arkitekt containers limits internal (inter-service) communication , which means that the services _are not_ coupled. This allows for a lot of flexibility in the deployment strategies, as the services can be deployed on different machines, in different containers, or even in different clouds. On top of that Arkitekt is build on container technology, which means that it can be deployed on any container orchestration platform, such as Kubernetes, Docker Swarm, or even a custom solution.

# On Premise

On premise deployment refers to the deployment of Arkitekt on your own hardware, such as your own computer, or a server in your local network. This is the simplest way of deploying Arkitekt, as it does not require any additional infrastructure, and is the default deployment strategy when using the [first steps guide](../introduction/installation.mdx). We believe that on premise deployments will be the most common deployment strategy for Arkitekt, as you will have full control over the deployment, and enjoy the fastest possible (network) speeds.

## Single Machine

The simplest deployment strategy is to deploy Arkitekt on a single machine. This is the default deployment strategy when using the [first steps guide](../introduction/installation.mdx). This strategy is ideal for development and testing purposes, as it is easy to setup and does not require any additional infrastructure. This setup works great for small teams , or when developing proof-of-concepts. Installign Arkitket on a single machine only requires a basic installation of docker (preferably with Docker Desktop).

However, this strategy is not recommended for production environments, multiple users, or large teams, as it does not provide any redundancy or scalability. This type of deployment comes in multiple flavours, that further define the deployment strategy.

### Single Machine - Konstruktor Setup

Konstruktor is our preferred way of deploying Arkitekt on a single machine, as it abstracts a lof of the configuration away, while maintaining full
customizability. Konstruktor does this by only giving you a more user-friendly interface to the configuration files and docker-compose which it uses
under the hood. You can find more information about Konstruktor in the [Konstruktor documentation](https://arkitekt.live/docs/introduction/installation#konstruktor).

### Single Machine - Docker Compose Setup

The manual Docker Compose setup, is probably the most flexible way of deploying Arkitekt on a single machine, and should feel familiar to anyone who has worked with docker-compose before. This setup is ideal for developmental setups, that aim to use the newest features of the platform, and for users who want full control over the configuration of the platform.

### Single Machine - Integrated Setup

The integrated setup is by far the easiest way to interact with Arkitekt for python developers, as it allows you to run Arkitekt (the Server) directly from your python code. This setup is ideal for development and testing purposes, and for users who want to modules of Arkitekt in their own python code. Integrated setups, are utilizing the same docker-compose files as the manual setup, but abstracts away the docker-compose commands
so that you can interact more closely with the platform.

:::note Integrated Setup
The integrated setup is the way we test Arkitekt and its submodules, in testing environmens such as our CI/CD pipeline. It allows us to test the platform in a controlled environment, and to test the platform in a more fine-grained way. You probably do not want to deploy Arkitekt in this way, unless you are developing a module for Arkitekt.
:::

## Deploy to the Wide Internet

By default Arkitekt is configured to be reachable on all network interfaces, inside your local network. This means that you can access the platform from any device on your local network, as long as you know the IP address of the machine running Arkitekt. However this is not ideal for environments, where you would like to connect to your Arkitekt Server from outside your local network. Here we will go through some of the options you have for hosting your Arkitekt Server.

### Static IP

The simplest way to host your Arkitekt Server, is to give your machine a static IP address, that is reachable from outside your local network and the wider internet. This is the simplest way to host your Arkitekt Server, but it is a security risk, as you are exposing your machine to the internet, and arkitekt will not encrypt any of the traffic.

### Reverse Proxy

A more secure way of making Arkitekt available to the internet is by using a reverse proxy, that will forward all traffic to your Arkitekt Server, but will also encrypt outgoing and incoming traffic. This is a more secure way of hosting your Arkitekt Server, but it requires some additional configuration. We recommend using [Traefik](https://doc.traefik.io/traefik/providers/docker/) as a reverse proxy, as it is easy to configure and works well with docker-compose. Treafik will automatically generate SSL certificates for you (with the help of [Let's Encrypt](https://letsencrypt.org/)), and encrypt all incoming and outgoing traffic. We have a [guide](https://arkitekt.live/docs/introduction/installation#traefik) on how to setup Arkitekt with Traefik.

### Single Machine - Hosted - VPN Tunnel

Another way of making Arkitekt securely available to the internet is by sharing it through a VPN (Virtual Private Network) tunnel, with selective access. The sucess of this strategy can vastly depend on your network setup and if your University allows you to open and forward ports. You can
however setup your own VPN tunnel, using a service such as [Tailscale](https://tailscale.com/), which is free for personal use, and allows you to
securely share your Arkitekt Server with other devices (including mobile devices) on your network. We have a [guide](https://arkitekt.live/docs/introduction/installation#tailscale) on how to setup Arkitekt with Tailscale.

:::note VPN Tunnel

Please do not misunderstand our usage of a VPN here with the usage of VPNs advertised in the media. Tailscale is no tool to hide your identity on the internet, but rather a tool to securely interconnect devices on different networks. We use it to securely share our Arkitekt Server with our mobile devices, and to share our Arkitekt Server with our colleagues. We do not use it to hide our identity on the internet (and most likely your NordVPN subscription is not doing that either).

:::

... ongoing
