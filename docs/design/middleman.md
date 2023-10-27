---
id: middleman
title: Arkitekt the Middleman
sidebar_label: Middleman
sidebar_position: 3
---

# How we see the landscape of bioimage analysis

Bioimage analysis has been around for a long time, and has been a very active field of research for the past 20 years. There are many tools available for bioimage analysis, and many of them are very good at what they do. However, there are a few problems that we see with the current landscape of bioimage analysis tools.

#### The tools are often very good at what they do, but not very good at doing anything else

Many of the tools available for bioimage analysis are very good at what they do, but they are often not very good at doing anything else. This means that if you want to use a tool for a specific task, you have to use that tool for that task, and you can't use it for anything else. This is a problem because it means that you have to learn a new tool for every task you want to do, and you can't use the tools you already know and love for other tasks.

#### Our tools are stuck in the past or stuck in the future

A lot of the bioimage analysis tools have been written in the last decades and even though they have seen a lot of love and dedication by the developers and the community, the age of the tools is starting to show, which has in turn prompted a new era of bioimage apps, that are designed from the core up to be adapt to the new challenges of bioimage analysis (3D, Big Data, etc.). However, these new tools are often not backwards compatible with the old tools, or are even adapted to completly different ecosystem like the cloud.

#### Meta data is being lost in translation

While traversing a modern bioimage analysis pipeline, the data is often being transformed from one format to another, and the meta data is lost in translation. Often users after the experimentee have to then to go back to the original data to find the meta data they need to make sense of the data


### What we would like to do with Arkitekt for users

Arkitekt was designed to be a platform for non-experts, acknowledging that everyone is a non-expert at some point. Even if you are an expert in one field, you might not an expert in another field of bioimage analysis. We wanted an easy to use platform that would allow users to connect their favourite tools together, and not have to worry about the underlying infrastructure. We wanted you to as easily connect ImageJ to Napari, as you would connect ImageJ to your local Python Script, your Microscope to your Deep Learning Model running in the cloud, and your pipetting robot to your coffee machine (if you have one, or both). 


### What we would like to do with Arkitekt for developers

With Arkitekt we wanted to acknowled that scienctific data analysis is an always evolving, ever-changing beast, and that the solution for today's data won't work tomorrow. Experts in the feild know their problem space very well, and often require very tailored solutions for their specific usecase.They are the best at solving their own problems, and we believe that the best way to enable them to share their expert knowledge is by providing them with tools that don't get in their way.

With Arkitekt we didn't want the developers to have to worry about adhering to a rigid platform or the constraints of doing all their analysis in the cloud,
but to enable them to use the tools they are most comfortable with, and to be able to use the tools they already know and love.


Arkitekt therefore emerged as a platform that acts as a middleman between the user and the developer, enabling the user to seamlessly connect their favourite tools together as well as providing the developer with a simple but powerful interface to enable their tools to be run on the hardware and in the software of their choice.

![img](../../static/img/middleman.svg)

Arkitekt itself provides only a sound backbone, trying to offload computation to these apps and the hardware they run on. This enables arkitekt to connect multiple apps, written in different programming languages and running on different hardware, to interact and share data.

