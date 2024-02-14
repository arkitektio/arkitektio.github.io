---
id: security
title: Security
sidebar_label: Security
sidebar_position: 3
---

# Arkitekt and Security

Developing secure software is a top priority for Arkitekt, especially as we are both developing as a web application and as a platform for other developers to build on. We take security seriously and have implemented a number of measures to ensure that Arkitekt is as secure as possible.

## Why Security is Important

While we believe a majority of scientist are good actors, there is always a risk of encountering bad actors. But even if we assume that all users are good actors, some of your data may be sensitive and should be protected. Also, as a platform for other developers to build on, and given the nature of accidental bugs in scientific software we need to ensure that the platform is secure, and that a random plugin does not delete your whole
database.

## Security Measures

**Everything is authenticated and authorized** - Every request to the Arkitekt API is authenticated and authorized. This means that every request must be made by a user who is logged in and has the correct permissions to make that request, there is no way to make a request to the API without being authenticated and authorized.

**Apps only have access to the data they need** - When you create an app in Arkitekt, you can specify the permissions that the app needs. This means that an app only has access to the data it needs to function, and nothing more. No app can spy on your data and send it to a third party.

**Plugins are sandboxed** - Plugins run in a sandboxed environment, which means that they can't access the data of other plugins or your filesystem. This means that you can install plugins without worrying about them accessing your data or potentially damaging your system. They only
can interact with our protected APIs.

**Transport Layer Security (TLS)** - When hosting your own Arkitekt instance, you can enable TLS to encrypt the data that is sent between the client and the server. This means that even if someone intercepts the data, they won't be able to read it. You can find more information on how to enable TLS in the [deployment guide](/docs/design/deployment).

**Multi-user support** - Arkitekt supports multiple users, and each user has their own data and roles. This means that you can share your Arkitekt instance with other people without worrying about them accessing your data. Teams can be created and users can be assigned to teams, and each team can have different permissions.

**Admin configuration** - Arkitekt provides a variety of configuration options, that allow administrators to configure the system to their needs. This includes the ability to configure apps, plugins, and the system itself remotely. Do you want all users that use Napari to be blocked from using the system on a certain day? You can do that.

**Data restoration** - Newer Arkitekt services have audit logs, that allow administrators and users to see what has been done to their data and by whom (and by what app or plugin). For most actions, you can also revert the action, restoring the data to its previous state.


