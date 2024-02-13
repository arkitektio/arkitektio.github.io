---
id: apps
title: Apps
sidebar_label: Apps
sidebar_position: 3
---

# Apps

This section aims to is a collection of different [Standalone Apps](/docs/apps/) and [Plugin Apps](/docs/services/) that can hook into the Arkitekt platform.
As opposed to the [Services](/docs/services/) that are designed to be installed and extend the functionality of the Arkitekt platform, by providing
new ways of storing data and connecting to other systems,  Apps are designed to be the "workhorses" of the platform. 
They are the entities that provide the actual functionality of the platform, as for the most part the server is just a communication platform and a data store.

#### Standalones

Standalones are [Apps](/docs/apps/) that are installable anywhere in your lab on any computer, and are designed to be user-friendly entrypoints
to the Arkitekt platform. We provide a few different standalones, that are community supported but feel free to create your own. 


#### Plugins

Plugins are also [Apps](/docs/apps/) but are build using software containers, so come with their own set of requirements and limitations.
They are most often more hooked into the Arkitekt Platform, which can provide a graphical user interface and a more seamless integration with the platform.


## Differences between Standalones and Plugins

| Feature            | Standalones                                                                                      | Plugins                                                                                               | Services                                                                 |
|--------------------|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| **Description**    | Apps that are installable anywhere in your lab on any computer.                                  | Software containers that are more integrated into the Arkitekt Platform.                            | Designed to extend the functionality of the Arkitekt platform by providing new ways of storing data and connecting to other systems. |
| **Installation**   | Designed to be easy to install and use by people not necessarily familiar with the Arkitekt platform. | Come with their own set of requirements and limitations due to being built using software containers. | Installed to extend the functionality of the Arkitekt platform.         |
| **Primary Purpose**| Serve as user-friendly entrypoints to the Arkitekt platform.                                     | Interact with the Arkitekt Server, though they can be run in other environments like NextFlow pipelines. | Provide new ways of storing data and connecting to other systems.       |
| **Integration**    | Designed to be installed on any resource that can connect to the Arkitekt platform. Provide their own GUI              | Provide a more seamless integration with the Arkitekt Platform, using it for a graphical user interface. | -                                                                        |
