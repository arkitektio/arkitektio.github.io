---
id: my-first-app
title: Read and Write
sidebar_label: Read and Write
---

# Read and Write

Imaging you have some data that you want to store in Arkitekt. This could be a microscopy image, a segmented image, or any other data that you want to store. In this tutorial we will show you how to store this data in Arkitekt.

## What we will cover

In this tutorial we will cover the following topics:

- Understanding Mikro
- Creating an image on Arkitekt
- Where is my data stored
- Getting data from Arkitekt
- Working with big data on Arkitekt
- Associating metadata with your data

## Understanding Mikro

Mikro is Arkitekts storage system, and one of the core components of Arkitekt. You can use it to store, explore and organize your bioimage data. Backed by
a relational database and a s3 compatible object store, Mikro is designed for you to manage datasets of any size. If you are familiar with omero you can think of Mikro as the Arkitekt version of omero. Instead of providing a web interface, Mikro provides only a comprehensive GraphQL API that you can use to interact with your data. For more information on Mikro, see the [Mikro documentation](/docs/services/mikro.md). When interacting with Mikro through python, we can use the mikro client, that is a module of the arkitekt client, and provides some additional convenience methods to make the python ecosystem of
pandas, numpy and xarray work well with Mikro.

## Upload some data

Lets start with the simplest example. Imaging you have a numpy array that you want to store in Arkitekt. For this testing purpose we will create a random numpy array.

Lets first look at what code we need to upload the data to Arkitekt.

```python
from arkitekt import easy
from mikro.api.schema import from_xarray
import xarray as xr
import numpy as np

app = easy("my-app-name")

i = np.random.rand(100,100,1)
image_data = xr.DataArray(i, dims=["x", "y", "c"])

with app:
   image = from_xarray(image_data, name="Random image") # stores the xarray on the mikro instance of the governing app context
   print(image.data)
```

1. First we create an through the easy function. Find a more detailed explanation of the easy function in the [Intro](/docs/developers/python/intro.md) tutorial. By default the easy configuration will ask for the scopes `read` and `write`. So we will be able to read and write data to the app.

   :::note
   We would advise you to use the `easy` function to create an app. This function will automatically create a new app (uniquely belong to you) if it does not exist yet. If the app already exists, it will return the existing app. This is useful if you want to use the same app in multiple scripts.
   :::

2. We create a random numpy array with the shape (100,100,1). This is equivalent to an 100x100 image with one channel.
3. We create an xarray from the numpy array. As mikros datamodel of images is based on xarray, it is necessary and best practice to create an xarray from your data before uploading it to mikro. If you are not familiar with xarray, we recommend that you take a look at the [xarray documentation](http://xarray.pydata.org/en/stable/). You might notice that we are using the `dims` argument to specify the dimensions of the xarray. This labels the axis of the numpy array. In this case we have an image with the dimensions `x`, `y` and `c`. The `c` dimension is the channel dimension, and is used to store multiple channels in one image. If you have an image with only one channel, you can omit the `c` dimension.
4. We enter the app context, from now on we are able to call the functionality on the connected arkitekt server
5. In this one line of code we will create an Arkitekt image from the xarray. This will upload the data to the object store and create a new image in the database. The `name` argument is optional, but it is good practice to give your data a name. This will make it easier to find your data later on. The call of
   this function will return an `Image` object. This object is local representation of an object on the arkitekt instance. It contains all the information about the image, and can be used to access the data.

6. When accessing the image data we will have to use the `data` attribute of the image object. Which will be a lazy array that will only loaded from the object store when needed (using dask and zarr to minimize the amount of data that needs to be loaded from the object store).

## About that line of code

```python
image = from_xarray(image_data, name="Random image")
print(image.data)
```

These two lines of code is a bit more complex than the other lines of code in this tutorial. Lets take a look at what is happening here.

1. We are calling the `from_xarray` function from the `mikro.api.schema` module. This function is a convenience function that will in turn call the apps mikro services api, with the given parameters. Lets inspect these parameters on their way to the server:

### Illustration of the upload process

1. image_data is an xr.DataArray with the dims 'x', 'y' and 'z'. This is the data that we want to store on the server. When storing images however, arkitekt
   expects the data to have the dims x,y,z,t and c. Which is a strict requirement of the server to accept the data, ensuring consistency for consuming. As it is a common use case to store images that do not fullfill all dimensions, the `from_xarray` function will automatically add the missing dimensions to the data, by expanding the array.

2. The GraphQL API indeed does not accept xarray objects, but only JSON serializable objects. But we can't just serialize a numpy array to JSON, as this will result in a very large JSON string. To solve this problem, the `from_xarray` function will convert and compress the data to a zarr array upload the data to object store, and only store the url to the object store in the database. This way we can store large amounts of data without having to worry about the database.

3. The call to the API now will create the image in the database and associate the url to the object store with the image. All additional information about the image will be stored in the database. This includes the name, the dimensions, the size, the type and the metadata.

4. The API will now return the image object with all the information about the image. This object is a local representation of the image on the server. It contains all the information about the image.

5. The image object will have a `data` attribute. This attribute will be a lazy array that will only be loaded from the object store when needed (using dask and zarr to minimize the amount of data that needs to be loaded from the object store). If you want to convert the data to an in memory numpy array, you can use the `compute` method of the array. This will load the data from the object store and convert it to a numpy array.

:::note
It is important to understand that changing any attributes on the local instance of the image object will not change the image on the server. If you want to change the image on the server, you will have to expliclity call a mutation on the server. For example, if you want to change the name of the image, you will have to call the `update_image` function on the server. And pass the new name as an argument. This will update the image on the server.
:::
