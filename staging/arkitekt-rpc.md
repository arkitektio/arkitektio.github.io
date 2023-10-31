---
id: arkitektrpc
title: How do we call your app.
sidebar_label: Calling your App
sidebar_position: 1
---

# How do we call your app.

Arkitekt is a platform that enables you to connect your favourite tools together. To do this, Arkitekt needs to know how to call your app. Arkitekt uses a simple protocol called Arkitekt RPC to call your app. Arkitekt RPC is a simple but powerful protocol that allows Arkitekt to call your app, and for your app to call Arkitekt. Arkitekt RPC is very much alike other RPC protocols, but extends their concepts to allow for a more client-side oriented approach.

## What is an RPC protocol?

RPC stands for Remote Procedure Call. It is a protocol that allows one program to call a function in another program. The program that calls the function is called the client, and the program that implements the function is often called the server. The function that is called is called a procedure. The client and server communicate over a transport. Often the transport is a network connection, but it can also be a file, a pipe, or even a socket.

As the configuration of the specific RPC setup can vary quite dramatically (mutiple servers, data-streaming, etc), a variety of RPC protocols have been developed. All of them excel at different things, and all of them have their own quirks. Arkitekt RPC is a simple RPC protocol that is designed to solve the specific usecase that we encounter when we want to distribute our analysis on multiple bioimage analysis tools, and is by now means a replacement for other great RPC protocols (like gRPC, TRPC, etc).

# What made use choose to develop Arkitekt RPC?

There are a lot of RPC protocols out there. Some of them are very mature, and have been around for a long time. Some of them are very new, and are still in development. Some of them are very simple, and some of them are very complex. We try to give you a good overview of our journey through the landscape of RPC protocols, and the problems that we encountered when we tried to use them. Arkitekts RPC is not a one-of-a-kind protocol. And parts of it functionality can be found in other protocols. So why did we choose to develop our own RPC protocol? Lets explore some of the reasons why we chose to develop our own RPC protocol, looking at the problems we encountered when we tried to use other RPC protocols.

### The landscape of RPC protocols

We will first devide them into two categories: 'client-server' RPC and 'message-based'' RPC (explaination of the two categories below). And briefly explain the advantages and disadvantages of each category.

# The 'client-server' RPC

~ Figure of client-server RPC ~

In a client-server RPC the application that exposes its functionality, provides the infrastructure to call the functions. This means that the server needs to setup a transport, that the client can connect to. The client then calls the functions on the server returning the results. Great examples of this are the [XML-RPC](https://en.wikipedia.org/wiki/XML-RPC) and [JSON-RPC](https://en.wikipedia.org/wiki/JSON-RPC) protocols, as well as the [gRPC](https://grpc.io/) protocol.

## Advantages of the 'client-server' RPC

### Easy to understand

Very easy to understand setup, with distinct client and server roles and responsibilities.

### Fast to setup

Very easy to setup, as the server just needs to expose the functions, and the client just needs to call the functions.

### Easy to scale

When done right, the server can be scaled by just spinning up more servers. The client does not need to know about the servers, if you are using a load balancer, the client will just connect to the load balancer, and the load balancer will distribute the requests to the servers.

### Easy to advertise functionality

The server can advertise its functionality by just exposing an endpoint that returns the list of functions that it exposes. The client can then inspect
this list and call the functions that it needs.

## Disadvantages of the 'client-server' RPC in the Arkitekt context

### Not always suitable for a distributed environment.

The problem with this approach though that it is very hard to make it work in the distributed environment, that we envisioned with arkitekt. In a distributed environment, the client and server are not always on the same machine and importantly may not know where they are located in respect to each other (Discovery problem).

~ Figure of client-server RPC falling short when in another network~

You can fix this by using a service discovery protocol, but this adds a lot of complexity to the setup. And it is not always possible to use a service discovery protocol. For example, if your application with exposed functionatliy sits behind a institutional firewall, you may not be able to connect to it from outside the firewall, as the firewall may not allow incoming connections.

### Not easy to scale

When done right, the server can be scaled by just spinning up more servers. The client does not need to know about the servers, if you are using a load balancer, the client will just connect to the load balancer, and the load balancer will distribute the requests to the servers. Setting up a load balancer however is not a trivial task and automatic configuration again necesitates a service discovery protocol.

~ Figure of load balancer ~

### Not easy to debug

Because computers are not perfect, things can go wrong. When things go wrong, it is very hard to debug the problem. The client does not know what is going on on the server, or even if the server is still running. The server does not know if the client is still running, or if the client is still connected. This makes it very hard to debug problems, especially if we want to enable workflows that are distributed over multiple machines.

~ Figure of client-server RPC falling short when an error occurs in one app ~

Here we see that the client is still running, but the server is not. The client does not know this, and will keep on sending requests to the server, which will never be answered. But how does the client know that the server is not running? It does not. It just keeps on sending requests, and the requests will just time out. This makes it very hard to debug problems, especially if we want to enable workflows that are distributed over multiple machines.

### Hard to protect

One of the core ideas behind arkitekt was that we wanted to develop a secure platform. This means that we want to make sure that the functionatliy is not being used by a malicious actor. This is very hard to do in a client-server RPC setup, as the server needs to implement its own security policy to protect itself from malicious actors. This is not a trivial task, and is very hard to get right.

# The 'message-based'/'broker' RPC

~ Figure of broker RPC ~

In a message-based RPC, the application that exposes its functionality, does not provide the infrastructure to call the functions. Instead, the application that exposes its functionality, connects as a client (worker) to a central server (a broker). The calling agent then again as a client connects to the broker demanding to call a specific funtionality and the broker then routes the request to the worker. The worker then executes the function and returns the result to the broker, which then returns the result to the calling agent.

## Advantages of the 'message-based'/'broker' RPC

### Easy to configure

As the broker is a central server that all the clients connect to, it is very easy to configure. As long as the broker can be configured to accept connections from all the clients, all clients are in theory able to talk to each other through the broker. This compleltely removes the need for a service discovery protocol (as long as we know where the broker is)

### Easy to debug

The broker is a central point of authority. It knows what workers are available, and it knows what workers are busy. This makes it very easy to debug problems, as the broker can tell you what is going on.

### Easy to protect

The broker can implement its own security policy to protect itself from malicious actors. This again is not a trivial task, and is very hard to get right. But once it is done, it is done. All the workers are protected by the security policy of the broker, and we can have a central source of truth for the security policy of each worker (app)

### Easy to scale to and recover

~ Message based broker with multiple workers (Topic) ~

It also makes it very easy to scale the system, as you can just spin up more workers to handle the load of all the requests that are coming in. As we are just sending messages to the broker, and the broker is then routing the messages to the workers, we can scale the system by just spinning up more workers, without any additional configuration. Conceptually this is very similar to the load balancer in the client-server RPC, however often queues are introduced to enable the broker to route the requests to the workers that are not busy.

Additionality if a worker goes down, the broker will just (re)route the requests to another worker, and the calling agent will not even notice that the worker went down. Often the broker will also keep track of the state of the workers, so that it can route the requests to the workers that are not busy.

## The disadavantages of the message-based broker

### Centralized broker

The broker is a central point of failure. If the broker goes down, all the workers are not able to do their work. This can make it very hard to scale the system, as you need to make sure that the broker can handle the load of all the requests that are coming in. (We can however use a truly distributed broker like Kafka, but this is not trivial to setup and maintain.)

### Latency

As all connections have to be routed through the broker, there is a latency penalty. This is not always a big problem, as the latency penalty is very small, but it is still quite a penalty if your application is latency sensitive, and could have connected directly to the worker.

### Hard to advertise functionality

As the broker is just made to route messages, it does not know what functionality is available on the workers. This means that the workers need to advertise their functionality to a central repository of all functionality that is available. This necessates a common protocol often interface definition language (IDL) to be used by all workers.

### Hard to setup

The initial setup of the broker is not trivial, as you need to be familiar with the technology.

# The decision on the architecture

It was not an easy decision to make, but we decided to go with the message-based RPC protocol. We believe that the advantages of the message-based RPC protocol outweigh the disadvantages (in our specific use case). Arkitekt is a platform that wants to focus on the functionality of the applicationn, and provide a secure and easy to use platform. We believe that the message-based RPC protocol is the best fit for this use case. But lets look at our design in more detail.

~ Image of discovry protocol, side by side with assignment protocol ~

In our design the arkitekt platform (indeed its `rekuest` service) is the central broker, that negotiates between your applications. As discussed previously, we need a central repository for our functionality, that all applications can publish to and read from. With `rekuest` we also provide this and enable apps to simply publish their functionality when connecting to the platform. This functionality is then available to all other apps that are connected to the platform in the form of a Template implementing a Node. See the [Template](terminology/template.md) section for more information on this. The application now when put into
the provide mode, will connect to the central broker as an agent (worker). This agent is now uniquely identified by the user, and the oauth2 client as well as an instance_id (If you would like to use multiple instances of the same application). The agent now represents a stateful connection to the broker, and we can track the state of all of the agents on the platform.

Importantly the agent does not listen to any requests by itself, but will only do so when receiving a provision. (see figure2). A provision is the act of requesting a specific functionality of an applicaiton through the broker. It represents a contract between the application and the broker. The application can choose to respect this contract, or not (e.g when it can't ensure the requested resources are available).

Clients trying to use the functionality of an application, will connect to the broker, and request a reservation. A reservation is a request to the broker to make a specific functionality available for the client. Again its a contract between the broker and this time the client. The broker will then try to find an application that provided the functioniality (already exisiting provision) or provide this functionality (creating a provision) on another app. This provision is then linked to the reservation.

When now requesting to use the functionality (doing the RPC call itself), the client will send a request through its connection to the reservation which will in turn map this request to the provision. The provision will then send the request to the agent, which will then execute the request and return the result to the provision, which will then return the result to the reservation, which will then return the result to the client.

We establish these contracts as core elements of our design as they allow a clear seperation between the client and the worker. Additionaly these contracts
allow the client to determine the conditions of validity of its contract to use the functionality (e.g demanding multiple workers to be available, which apps
are allowed to provide the functionality, etc). This enables easy debugging of the system, as the broker can tell you what is going on.

Internally these contracts mimic closely the concepts of topics and queues in message-based systems. The reservation is the topic, and the provisions are the queues that are subscribed (in a round-robin manner) to the topic. The client send messages to the topic and they get mapped to the queue.

~ Extended image of the broker RPC with arkitekts, reservation and provision ~

Lets look at the image above. We see that the broker is still the central point of authority, and both the application providing functionality and the client are connecting to it, through stateful connections. However we introduce the concept of reservations and provisions

# Going asynchronous

One of the most important decisions when choosing to use an RPC protocol is choosing how you want to interface with your application. Do you want to use synchronous or asynchronous calls?

Synchronous RPC calls are blocking. The client will wait for the server to return the result before it can continue. Asynchronous RPC calls are non-blocking. The client will not wait for the server to return the result before it can continue.

:::note
Notice, that this behaviour is completely orthogonal to the design of the protocol. It possible to use synchronous or asynchronous calls both in a message-based RPC protocol and in a client-server protocol. In a message-based RPC protocol, the client can send a request to the broker, and then wait for the broker to return the result. Or the client can send a request to the broker, and then continue with its work. The broker will then send the result to the client when it is ready.
:::

Even though we provide you with synchronous interface in our client-libraries, arkitekt is designed to be asynchronous, which allows you to easily design
concurrent workflows,

# The request/response cycle

# The message-based RPC

# The 'client-focus' RPC
