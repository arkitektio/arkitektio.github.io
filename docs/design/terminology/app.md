---
id: app
title: What is an App?
sidebar_label: App
sidebar_position: 1
---

import Image from "@theme/IdealImage";
import app from "./app.png";
import oauth from "./oauth_example.png";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';





Arkitekts is built around connecting Apps. Without these Apps arkitekt would be just a (reasonably cool) storage platform with a developer interface. Apps ( in the Arkitekt sense) connect to arkitekt and provide the functionality that makes Arkitekt useful (like applying filters to images) and give you the ability to interact with the data that you store in Arkitekt. As such, the definition of an arkitekt App is a bit broaders, than what you might think of as an App (especially if you are used to the App Store on your phone). This section will introduce you to the concept of an App in Arkitekt, and will give you a few examples of what an App can be.

<div className="mt-2">
<Image img={app} />

<div className="text-gray-400 mb-2">
<small>Arkitekts design as an App middleman</small>
</div>
</div>

How apps fit into the Arkitekt ecoystem is best examplified by the interplay between the Orkestrator *App* and the Fiji *App*. While Arkitekt only stands as the connection layer it is these two apps that actually manage and do the work. Orkestrator assigns work and Fiji does the actually work. Arkitekt only acts as the Middleman, so that they don't have to interact directly with each other (which would be a lot more complicated than you might think).

Arkitekt without apps is like a car without wheels. It might look cool, but it won't get you anywhere. So let's take a closer look at what an App is, and what it can do.

# The type of Apps

You already saw that Orkestrator and Fiji are apps, but Arkitekts definition of apps is way broader than the usual apps that you might be used to. In fact, almost anything can be an app, as long as it is able to connect to Arkitekt. This means that you can use a website as an app, or your own code, or even your robot or Iot device. What *unifies* all of these apps is that they all follow some common principles of **authentication** them when connecting with the platform. This is an important feature, because it not only that you are in control of your data, but Arkitekt can use the provided information of the app to *version* the app. This versioning ensures that if you want to use the functionality of this app in a workflows or just directly in tasks you can be sure that the app will behave the same way every time.


This means that the first time a new app decides to connect to Arkitekt, you will be asked to approve the connection and the permissions that the app is asking for.(this is done through Oauth2 Standard, the same principle that is used when you press "login with google", but you don't need to know that to use Arkitekt.). This double authentication process is key to Arkitekts security and some other design principles, and we will go into more detail about it in the [Security](/docs/design/security/why.md) section.

<div className="mt-2 w-max-xl">
<Image img={oauth} />
<div className="text-gray-400 mb-2">
<small>Example of an App asking for permissions</small>
</div>
</div>


## Apps can provide functionality

Depending on the App, you can use it to do a lot of different things. For example, you can use an App to just download images from Arkitekt, or you can use some interesting python code to display a graph of your data. One important aspect is that an app can also choose to expose some of its functionality as [Templates](template.md). This means that you can use the functionality of the App in other Apps, or in the Orkestrator. This is a very powerful feature, and we will go into more detail about it in the [Nodes and Templates](node.md) section.


## Examples of Apps

As we are a firm believer in the power of the example, here are a few examples of Apps in the Arkitekt sense, and a few negative examples of Apps in the Arkitekt sense.

<Tabs>
  <TabItem value="apple" label="Computer" default>
    An App on your computer is the obvious example, and yes, if that app is able to connect to Arkitekt (because the developer decided to make it an Arkitekt App), then it is an Arkitekt App. Easy. Two examples of this are the Orkestrator Desktop App, and MikroJ an app that is used to enable ImageJ on the platform. Both apps will as you to approve the connection to Arkitekt, and both apps will ask you for permissions.



Importantly though the Orkestrator apps asks you for a lot more permissions than the MikroJ app, because the Orkestrator app is able to do a lot more things with your data. If you want to know more about the permissions that an App can ask for, you can read more about it in the [Security](/docs/design/security/why.md) section. Always remember that you are in control of your data, and you decide what Apps are allowed to do with it, so check the permissions before you approve an App.
  </TabItem>
  <TabItem value="orange" label="Website">
    
Also a website can be an an arkitekt app. Indeed this website is an arkitekt app (If you haven't done so already, you can try it out by clicking the "login with arkitekt" button in the top right corner). In most cases the website will ask you to point it to your arkitekt instance (which could be running on a public server, or in your local network), and then it will ask you to approve the connection. If you do, you will be able to use the website to interact with your data in Arkitekt.

  </TabItem>
  <TabItem value="banana" label="Robot">
    
Now this is where it gets interesting. Your robot or Iot device can also become an arkitekt app. Most of the time, these machines do not need access to your data, but can provide functionality like taking pictures, or measuring temperature. In this case you can use the [Orkestrator](/docs/intro.mdx) to connect to your robot or Iot device, and call the functionality that it provides. This is a very powerful feature, and we will go into more detail about it in the [Nodes and Templates](node.md) section.
  </TabItem>
  <TabItem value="code" label="Code">

Your code can also become an Arkitekt app. In fact, if you want your code to connect to an arkitekt server, it needs to become an app, because it needs rights to access your data. If you are using python you can use the arkitekt python library to connect to Arkitekt. If you are using javascript you can use the arkitekt javascript/typescript library. If you are using another language, you can use the Arkitekt API directly.

If you want to know more about how to connect to Arkitekt, you can read more about it in the [Developer](/docs/developers/intro.mdx) section. We made sure to be compatible with standard webstandards (Oauth2, websockets), so you can use almost any language that is able to connect to a webserver.
  </TabItem>
</Tabs>

<details>
  <summary>How does this work?</summary>
  <div>
    <div>

**How does the App know where to connect to?**


As Arkitekt is nothing more than a server in your lab (or in the cloud), and these apps are just programs that run on your computer, they need to know where to connect to. So you might wonder how does the app know which server to use? The answer turns out to be quite difficult and what keeps us up at night. The short answer is that the app needs to know the ip-adress of the Arkitekt server, which depending on your apps location can be autoconfigured through the network through the App Admin Interface. This mean that once you are using the Orkestrator Desktop App, it will automatically discover local servers, and you don't need to worry about the configuration.
</div>
</div>
</details>

### TLDR

- Apps are Agents that connect with the Arkitekt Platform
- Apps are versioned
- Apps can provide functionality
- Apps can be anything that can connect to a webserver
- All Code that connects to Arkitekt needs to be an App
- Apps are powered by Oauth2 Authentication
- Apps have specific rights to access your data (scopes)





