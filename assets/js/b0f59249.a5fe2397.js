(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[9036],{3040:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/segmentation.9e71a21.640.png 640w,"+n.p+"assets/ideal-img/segmentation.869719e.1320.png 1320w,"+n.p+"assets/ideal-img/segmentation.065c1e5.2000.png 2000w",images:[{path:n.p+"assets/ideal-img/segmentation.9e71a21.640.png",width:640,height:313},{path:n.p+"assets/ideal-img/segmentation.869719e.1320.png",width:1320,height:646},{path:n.p+"assets/ideal-img/segmentation.065c1e5.2000.png",width:2e3,height:979}],src:n.p+"assets/ideal-img/segmentation.9e71a21.640.png",toString:function(){return n.p+"assets/ideal-img/segmentation.9e71a21.640.png"},placeholder:void 0,width:640,height:313},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2ElEQVR4nAHNADL/ACgoKP0tLS39Kioq+DAwMf80NCV1AACmNCIQhf86HX7+EguC/jYcf/8AMTEx/zAwMP8xMTH8LS0v/11bRZ6vm6J2OhmG/0kjf/8hC4r/NxmB/wAvLy/8MDAw/TMzM/ktLS3/T1A/kfrdqmpTO4b/NROC/C0Sh/0QCYb8AC0tLf8wMDD/MzMz+jc2OP8mKSB2NRirNCoch/8zHYP+LBiG/hgMjv8ALCwsjkVFRZ5RUVGdOzs7pCsrH0AIAJ4dIyCLnWNIhp9INJGhIhiJlO6RTpxHDPovAAAAAElFTkSuQmCC"}},49132:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var a=n(85893),i=n(11151);n(83177),n(68648),n(21262),n(15944),n(3040);const r=n.p+"assets/medias/create_context-9bf4e77dc321d9190d5d777740f711e6.webm",o=n.p+"assets/medias/inspect_container-fbdd49c2415484201abc9b0a52f3d8af.webm",s=n.p+"assets/medias/train_care-524e8c37237b8c795ebed8e08f084a67.webm",d=n.p+"assets/medias/upload_train_data-fb6a967290132ae4c8d5433f3bb5831a.webm";var l=n(71698);const c={title:"Train a Deep Learning Model",sidebar_label:"Train a Deep Learning Model",sidebar_position:3},m=void 0,h={id:"introduction/advanced_tutorial/training",title:"Train a Deep Learning Model",description:"Deep Learning powered methods in Bioimage analysis have changed the way we analysis images, however they are still not widely used in the community.",source:"@site/docs/introduction/advanced_tutorial/training.mdx",sourceDirName:"introduction/advanced_tutorial",slug:"/introduction/advanced_tutorial/training",permalink:"/docs/introduction/advanced_tutorial/training",draft:!1,unlisted:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/advanced_tutorial/training.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Train a Deep Learning Model",sidebar_label:"Train a Deep Learning Model",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Parallelization",permalink:"/docs/introduction/advanced_tutorial/parallelization"},next:{title:"Live Analysis",permalink:"/docs/introduction/advanced_tutorial/live_analysis"}},p={},u=[{value:"What we are trying to achieve",id:"what-we-are-trying-to-achieve",level:2},{value:"Training with Arkitekt",id:"training-with-arkitekt",level:2},{value:"Training Context",id:"training-context",level:3},{value:"Lets get to this",id:"lets-get-to-this",level:3},{value:"Creating a Context",id:"creating-a-context",level:3},{value:"Training a CARE model",id:"training-a-care-model",level:3},{value:"Inspecting the Model",id:"inspecting-the-model",level:3},{value:"Using the Model",id:"using-the-model",level:2},{value:"The developers perspective",id:"the-developers-perspective",level:2}];function g(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Deep Learning powered methods in Bioimage analysis have changed the way we analysis images, however they are still not widely used in the community.\nThis is arguabley due to the lack of easy to use tools and the inability to adapt a published model to a new paradigm, such as a new microscope or a new cell type."}),"\n",(0,a.jsxs)(t.p,{children:["With Arkitekt we aimed to make it easy to both use already trained deep learning models in your analysis pipeline, and to make it easy to adapt a model to your specific needs.\nIn this tutorial we will show you how to train your own deep learning model using CARE, a popular method for image restoration, and how to use it in your analysis pipeline.\nWe advise you to first read the ",(0,a.jsx)(t.a,{href:"https://www.nature.com/articles/s41592-018-0216-7",children:"CARE paper"})," to understand the methodology of care, as well as following both the\nfirst steps of the ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps/interface",children:"Arkitekt tutorial"})," and the ",(0,a.jsx)(t.a,{href:"/docs/introduction/advanced_tutorial/deep_learning",children:"Deep Learning Bridge tutorial"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This tutorial aims to cover the following topics:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Our conceptional understanding of Deep Learning Training"}),"\n",(0,a.jsxs)(t.li,{children:["What is a training ",(0,a.jsx)(t.code,{children:"Context"})," and how to use it"]}),"\n",(0,a.jsx)(t.li,{children:"How to train a CARE model"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"what-we-are-trying-to-achieve",children:"What we are trying to achieve"}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial we would like to train a deep learning model that can be used to restore images that have been acquired with a confocal microscope. We are using the training\ndataset from the ",(0,a.jsx)(t.a,{href:"https://www.nature.com/articles/s41592-018-0216-7",children:"CARE paper"}),", which is a dataset of confocal images of the Tribolium Castaneum embryo, that vary in\ntheir signal-to-roise ratio. We here will aim to train a model that will help us in a second step to restore images that have been acquired with the same microscope."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["For the purpose of this tutorial we will only train a model on a subset of the data, and we will use the ",(0,a.jsx)(t.code,{children:"same"})," data for training and validation. This is ",(0,a.jsx)(t.em,{children:"NOT AT ALL"})," how you should train a model,\nand we are doing this only for the purpose of this tutorial. Training, Testing, and Validation should always be done on different datasets. This is just a demo."]})}),"\n",(0,a.jsx)(t.h2,{id:"training-with-arkitekt",children:"Training with Arkitekt"}),"\n",(0,a.jsxs)(t.p,{children:["With Arkitekt we wanted to make it easy to train deep learning models, but also to give developers the flexibility to adapt their full training process to their needs. This is why\nwe have a very simple conceptional understanding of training, which is that training a deep learning model is simply a ",(0,a.jsx)(t.code,{children:"Node"})," that returns a ",(0,a.jsx)(t.code,{children:"Model"})," that in a second step can be used to\nmake predictions (in a ",(0,a.jsx)(t.code,{children:"Prediction Node"}),"). This means that training a model is as simple as running a ",(0,a.jsx)(t.code,{children:"Node"})," that returns a ",(0,a.jsx)(t.code,{children:"Model"}),". The developer can then decide how to train the model, and to save it in\na way that makes sense for their use case. Importantly with Arkitekt we didn't want to limit the developer to speicifc models like image-to-image, or classifications, but to give them the flexibility to\ninteract with every datatype and model type. But with great power comes great responsibility, this is why we have developed ",(0,a.jsx)(t.code,{children:"Contexts"})]}),"\n",(0,a.jsx)(t.h3,{id:"training-context",children:"Training Context"}),"\n",(0,a.jsxs)(t.p,{children:["When training a deep learning model, we need data to train on, which often comes in the form of a dataset, that relates two specific datatypes. For example, in the case of CARE we need a dataset that relates\n",(0,a.jsx)(t.code,{children:"Image"})," and ",(0,a.jsx)(t.code,{children:"Image"}),". This is where ",(0,a.jsx)(t.code,{children:"Contexts"})," come in."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Context"})," in Arkitekt are a way to define ",(0,a.jsx)(t.strong,{children:"arbitrary"})," relationships between different Data Types inside the platform. This means that in a ",(0,a.jsx)(t.code,{children:"Context"})," you ",(0,a.jsx)(t.strong,{children:"can"})," relate a ",(0,a.jsx)(t.code,{children:"ROI"})," with an ",(0,a.jsx)(t.code,{children:"Image"}),", an ",(0,a.jsx)(t.code,{children:"Image"})," with a ",(0,a.jsx)(t.code,{children:"Table"}),"\nor a ",(0,a.jsx)(t.code,{children:"Table"})," with a ",(0,a.jsx)(t.code,{children:"Metric"}),",  it all depends on the use case and what type of relationship you want to define. In the case of CARE we want to define a relationship between two ",(0,a.jsx)(t.code,{children:"Image"})," datatypes, which is what we will\ndo in this tutorial. We just want to note that ",(0,a.jsx)(t.code,{children:"Contexts"})," are not limited to this use case, and can be used in many different ways. Importantly you can have also have multiple ",(0,a.jsx)(t.code,{children:"Contexts"})," that relate the same images in different\nways (for example a ",(0,a.jsx)(t.code,{children:"Context"})," that relates ",(0,a.jsx)(t.code,{children:"Image A "})," and ",(0,a.jsx)(t.code,{children:"Image B"})," and a ",(0,a.jsx)(t.code,{children:"Context"})," that relates ",(0,a.jsx)(t.code,{children:"Image A"})," and ",(0,a.jsx)(t.code,{children:"Image C"})," or ",(0,a.jsx)(t.code,{children:"Image B"})," and ",(0,a.jsx)(t.code,{children:"Table A"}),")."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["One more thing: Relationships inside a ",(0,a.jsx)(t.code,{children:"Context"})," can be named, so that you can for example have a ",(0,a.jsx)(t.code,{children:"Context"})," that relates ",(0,a.jsx)(t.code,{children:"Image A"})," as ",(0,a.jsx)(t.code,{children:"is High SNR"})," of  ",(0,a.jsx)(t.code,{children:"Image B"})," and a ",(0,a.jsx)(t.code,{children:"Context"})," that relates ",(0,a.jsx)(t.code,{children:"Image A"})," as ",(0,a.jsx)(t.code,{children:"is Low SNR"})," of ",(0,a.jsx)(t.code,{children:"Image B"}),".\nDevelopers can then use these names to define their training process."]})}),"\n",(0,a.jsx)(t.h3,{id:"lets-get-to-this",children:"Lets get to this"}),"\n",(0,a.jsxs)(t.p,{children:["Lets see how we can train a CARE model using Arkitekt. Of course we will need ",(0,a.jsx)(t.code,{children:"CARE"})," for that, but lets wait for a moment and first see how we can define a ",(0,a.jsx)(t.code,{children:"Context"})," that relates two ",(0,a.jsx)(t.code,{children:"Image"})," datatypes.\nIndeed this relationship has nothing to do with CARE, and we can use it for many different things. But lets start with the ",(0,a.jsx)(t.code,{children:"Data"})," that we will use for training. We will use the same data as in the CARE pape,\nwhich you can download ",(0,a.jsx)(t.a,{href:"/static/nGFP_high_snr.tif",children:"here"})," and ",(0,a.jsx)(t.a,{href:"/static/nGFP_low_snr.tif",children:"here"}),". We will use the ",(0,a.jsx)(t.code,{children:"same"})," data for training and validation, but as we said before, this is just for the purpose of this tutorial."]}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,a.jsx)("source",{src:d})}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" Uploading an converting the data"})}),"\n",(0,a.jsxs)(t.p,{children:["This steps should seem ",(0,a.jsx)(t.a,{href:"/docs/introduction/first_steps/interface",children:"familiar"}),", just a few notes:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["We are batch uploading the data by selecting both files and ",(0,a.jsx)(t.code,{children:"multi-dropping"})," them on the webinterface"]}),"\n",(0,a.jsxs)(t.li,{children:["Then we are batch converting the data through the ",(0,a.jsx)(t.code,{children:"Convert Omero"})," node, which will convert the data to the ",(0,a.jsx)(t.code,{children:"Image"})," datatype."]}),"\n",(0,a.jsxs)(t.li,{children:["We now have two ",(0,a.jsx)(t.code,{children:"Image"})," datatypes in our project, which we can see in the ",(0,a.jsx)(t.code,{children:"Data"})," tab."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-context",children:"Creating a Context"}),"\n",(0,a.jsxs)(t.p,{children:["Now that we have our data, we can create a ",(0,a.jsx)(t.code,{children:"Context"})," that relates the two ",(0,a.jsx)(t.code,{children:"Image"})," datatypes. To do this we could either use the ",(0,a.jsx)(t.code,{children:"Create Context"})," button, or have a ",(0,a.jsx)(t.code,{children:"Node"})," that returns a ",(0,a.jsx)(t.code,{children:"Context"})," datatype, and\ncreates this ",(0,a.jsx)(t.code,{children:"Context"})," for us. However we can of course do this also directly on the ",(0,a.jsx)(t.code,{children:"Data"})," tab, using the similar pattern of drag-and-drop."]}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,a.jsx)("source",{src:r})}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" Creating a Context and a Relationship"})}),"\n",(0,a.jsx)(t.p,{children:"A few notes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You can always relate items in the ",(0,a.jsx)(t.code,{children:"Data"})," tab by dragging one item on top of the other. This will open a dialog that will ask you to relate the two items by specifying a ",(0,a.jsx)(t.code,{children:"Context"})," and a ",(0,a.jsx)(t.code,{children:"Relationship"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["You will see a ",(0,a.jsx)(t.em,{children:"left"})," to ",(0,a.jsx)(t.em,{children:"right"})," relationship displayed, and you can give an arbitrary name to the relationship. In this case we are using ",(0,a.jsx)(t.code,{children:"gt"})," for ",(0,a.jsx)(t.code,{children:"ground truth"})," as our high SNR image is our ground truth\nfor the low SNR image. Just read it out loud in your head: ",(0,a.jsx)(t.code,{children:"Image A"})," is ",(0,a.jsx)(t.code,{children:"ground truth"})," of ",(0,a.jsx)(t.code,{children:"Image B"})," inside the context of ",(0,a.jsx)(t.code,{children:"Tribolium Denoising"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"If the relationship or the Context did not exists before it will be created for you, otherwise you will find existing context in the dropdown."}),"\n",(0,a.jsxs)(t.li,{children:["Once submited your images are now related. You can see this by cliking on the newly created ",(0,a.jsx)(t.code,{children:"Context"})," in the ",(0,a.jsx)(t.code,{children:"Data"})," tab, and you will see the two images related by the relationship you specified."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"training-a-care-model",children:"Training a CARE model"}),"\n",(0,a.jsxs)(t.p,{children:["And thats it, you created a training dataset for CARE. You can of course relate more items in the same context, but for now lets leave it at that. Now we can train a CARE model (on the GPU if you have one).\nFor this we will need the ",(0,a.jsx)(t.code,{children:"KARE"})," app, which is just ",(0,a.jsx)(t.code,{children:"CARE"})," but enabled as an Arkitekt app (this freaking K is for Arkitekt, get it?). You can install it by clicking on the ",(0,a.jsx)(t.code,{children:"Install Repo"})," button below."]}),"\n",(0,a.jsx)(l.I,{repo:"kare",user:"jhnnsrs",branch:"master"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:"Make sure to appify and deploy the plugin."}),"\n",(0,a.jsxs)(t.p,{children:["This app provides only two nodes ",(0,a.jsx)(t.code,{children:"Predict CARE"})," and ",(0,a.jsx)(t.code,{children:"Train CARE"}),", which allow you to train and predict CARE models, with your data. The Train CARE node will take a ",(0,a.jsx)(t.code,{children:"Context"})," as input, and will return a ",(0,a.jsx)(t.code,{children:"Model"})," as output.\nand the ",(0,a.jsx)(t.code,{children:"Predict CARE"})," node will take a ",(0,a.jsx)(t.code,{children:"Model"})," and an ",(0,a.jsx)(t.code,{children:"Image"})," as input and will return a ",(0,a.jsx)(t.code,{children:"Predicted Image"})," as output. Nodes all the way down. Lets see how we can train a CARE model."]}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsxs)(t.p,{children:["Sadly with modern deep learning frameworks there is not yet a ",(0,a.jsx)(t.em,{children:"reliable"})," way see if another process is using the GPU and some deep learning methods like Stardist and CARE sometimes still linger in the GPU memory even after\nthe process has finished. So if you run into the problem that you can't train a CARE model, because the GPU is already in use, simply stop any other deep learning process that might be running. We are working on a more user\nfriendly solution for this (also for better multi-gpu support)."]})]}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,a.jsx)("source",{src:s})}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" Reserving and training a CARE Model"})}),"\n",(0,a.jsx)(t.p,{children:"A few notes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You know the drill. Search for the ",(0,a.jsx)(t.code,{children:"Train CARE"})," node and ",(0,a.jsx)(t.code,{children:"Reserve it"})," to make it available."]}),"\n",(0,a.jsxs)(t.li,{children:["Navigate back to the ",(0,a.jsx)(t.code,{children:"Data tab"})," and run it directly from your just created ",(0,a.jsx)(t.code,{children:"Context"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["You will be prompted by the ",(0,a.jsx)(t.code,{children:"Assign Dialog"}),", which will now ask you training parameters. These are specific to CARE, and you can read more about them in the ",(0,a.jsx)(t.a,{href:"https://www.nature.com/articles/s41592-018-0216-7",children:"CARE paper"}),".\nWe just leave the default parameters for now, but be aware that you can change them to your needs. The default paramters are not optimal for this dataset, but we are just doing this for the purpose of this tutorial."]}),"\n",(0,a.jsxs)(t.li,{children:["Once you submit the dialog, the training will start. You can see the progress in the ",(0,a.jsx)(t.code,{children:"Dashboard"})," tab, and you will see the ",(0,a.jsx)(t.code,{children:"Train CARE"})," node turning green once the training is done.\nYou can also monitor the progress right there. Looking at the progress bar."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"inspecting-the-model",children:"Inspecting the Model"}),"\n",(0,a.jsxs)(t.p,{children:["Training CARE with the default parameters can take a LOOOONG time, and depending on your hardware you might have to wait for a while until the progress bar moves. You can of course always\ncheck the output of the Deep Learning process in the ",(0,a.jsx)(t.code,{children:"PluginApps"})," tab, by clicking on the running ",(0,a.jsx)(t.code,{children:"kare"})," container and inspecting the output of the training process of the container"]}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,a.jsx)("source",{src:o})}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" Inpsecting the deep learning output"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["While we are working on providing a few feedback graphs, that illustrate the training process, we are pretty much settled on the idea, that we don't want to provide a full fledged training\ninterface inside Arkitekt. We think that this is best left to the deep learning frameworks and software projects like ",(0,a.jsx)(t.a,{href:"https://wandb.ai/site",children:"wandb"})," that are specifically designed for this purpose.\nWe rather think Arkitekt should be seen as a tool for ",(0,a.jsx)(t.code,{children:"transfer learning"})," and ",(0,a.jsx)(t.code,{children:"model adaptation"}),", and not as a tool for developing deep learning models from scratch. But hey we are open to feedback,\nand you can always just integrate your favorite deep learning framework into Arkitekt and use it as you like."]})}),"\n",(0,a.jsx)(t.h2,{id:"using-the-model",children:"Using the Model"}),"\n",(0,a.jsxs)(t.p,{children:["Your training is going to take time. But at some point it will end, promise! Once it is done you can use the model to make predictions.\nFor this we will now reserve the ",(0,a.jsx)(t.code,{children:"Predict CARE"})," node, which in this case will take a ",(0,a.jsx)(t.code,{children:"Model"})," and an ",(0,a.jsx)(t.code,{children:"Image"})," as input and return an image."]}),"\n",(0,a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%",children:(0,a.jsx)("source",{src:s})}),"\n",(0,a.jsx)("div",{className:"text-gray-400 mb-2",children:(0,a.jsx)("small",{children:" Inpsecting the deep learning output"})}),"\n",(0,a.jsxs)(t.p,{children:["And thats it, you trained a CARE model and used it to make predictions. You can now use this model in your analysis pipeline, and you can also use it to adapt it to your specific needs.\nAlso of course you can download the model and share it with others, just like we did with the models that we are using in our ",(0,a.jsx)(t.a,{href:"/docs/showcases/intro",children:"Showcases"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"the-developers-perspective",children:"The developers perspective"}),"\n",(0,a.jsxs)(t.p,{children:["If you are a developer and you want to know how to integrate your own deep learning app into Arkitekt, you can read our Developer Tutorial on how to do this ",(0,a.jsx)(t.a,{href:"/docs/developers/python/basics/deep_learning",children:"here"}),".\nBut also please just find here ",(0,a.jsx)(t.strong,{children:"ALL"})," the code for the ",(0,a.jsx)(t.code,{children:"Train CARE"})," and ",(0,a.jsx)(t.code,{children:"Predict CARE"})," nodes, which are just a few lines of code, and should be easy to understand."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from arkitekt import register\nfrom mikro.api.schema import (\n    from_xarray,\n    ModelFragment,\n    create_model,\n    ModelKind,\n    RepresentationFragment,\n    links,\n    LinkableModels,\n    ContextFragment,\n)\nimport numpy as np\nfrom csbdeep.io import load_training_data\nfrom csbdeep.models import Config, CARE\nimport numpy as np\nimport uuid\nimport shutil\nfrom csbdeep.data import RawData, create_patches\nimport numpy as np\n\nfrom csbdeep.io import load_training_data\nfrom csbdeep.models import Config, CARE\nfrom arkitekt.tqdm import tqdm\n\n\n@register()\ndef train_care_model(\n    context: ContextFragment,\n    epochs: int = 100,\n    patches_per_image: int = 1024,\n    trainsteps_per_epoch: int = 400,\n    validation_split: float = 0.1,\n) -> ModelFragment:\n    """Train Care Model\n\n    Trains a care model according on a specific context.\n\n    Args:\n        context (ContextFragment): The context\n        epochs (int, optional): Number of epochs. Defaults to 10.\n        patches_per_image (int, optional): Number of patches per image. Defaults to 1024.\n        trainsteps_per_epoch (int, optional): Number of trainsteps per epoch. Defaults to 10.\n        validation_split (float, optional): Validation split. Defaults to 0.1.\n\n\n    Returns:\n        ModelFragment: The Model\n    """\n\n    training_data_id = f"context_data{context.id}"\n\n    x = links(\n        LinkableModels.GRUNNLAG_REPRESENTATION, # only works with images\n        LinkableModels.GRUNNLAG_REPRESENTATION, # that are related to each other\n        "gt", # trhough the `gt` relationship\n        context=context, # inside the given context\n    ) # HERE WE ARE GETTING THE DATA FROM THE CONTEXT, \n\n    # we are getting computing data from boths sides of the relationship\n    X = [t.left.data.sel(t=0, c=0).compute() for t in x] \n    Y = [t.right.data.sel(t=0, c=0).compute() for t in x]\n\n\n    # This is all CARE specific, and you can read more about it in the CARE paper\n    raw_data = RawData.from_arrays(X, Y, axes="ZYX")\n    print(raw_data)\n\n    X, Y, XY_axes = create_patches(\n        raw_data=raw_data,\n        patch_size=(16, 64, 64),\n        n_patches_per_image=patches_per_image,\n        save_file=f"data/{training_data_id}.npz",\n    )\n\n    (X, Y), (X_val, Y_val), axes = load_training_data(\n        f"data/{training_data_id}.npz",\n        validation_split=validation_split,\n        verbose=True,\n    )\n    config = Config(axes, train_steps_per_epoch=trainsteps_per_epoch)\n\n    model = CARE(config, training_data_id, basedir=".trainedmodels")\n\n\n    # Here we are training the model, we are utilizing a patch tqdm progress bar, that will just update\n    # the progress bar every time we train on a new patch on the Arkitekt Interface\n    for i in tqdm(range(epochs)):\n        model.train(X, Y, validation_data=(X_val, Y_val), epochs=1)\n\n    shutil.make_archive(\n        "active_model", "zip", f".trainedmodels/{training_data_id}"\n    )\n\n    # Here we are creating a model from the trained model, and we are saving it as an Akritekt Model\n    model = create_model(\n        "active_model.zip",\n        kind=ModelKind.TENSORFLOW,\n        name=f"Care Model of {context.name}",\n        contexts=[context],\n    )\n\n\n\n    shutil.rmtree(f"data")\n    return model\n\n\n@register()\ndef predict(\n    representation: RepresentationFragment, model: ModelFragment\n) -> RepresentationFragment:\n    """Predict Care\n\n    Use a care model and some images to generate images\n\n    Args:\n        model (ImageToImageModelFragment): The model\n        representations (List[RepresentationFragment]): The images\n\n    Returns:\n        List[RepresentationFragment]: The predicted images\n    """\n\n    random_dir = str(uuid.uuid4())\n    generated = []\n\n    # We are downloading the model into a temporary directory\n    with model.data as f:\n        # We are unpacking the model into a temporary directory\n\n        shutil.unpack_archive(f, f".modelcache/{random_dir}")\n\n        image_data = representation.data.sel(c=0, t=0).data.compute()\n        # We are loading the model from the temporary directory\n        care_model = CARE(config=None, name=random_dir, basedir=".modelcache")\n        # We are predicting the image\n        restored = care_model.predict(\n            image_data, "ZXY"\n        )\n        \n        # We are creating a new representation from the predicted image\n        generated = from_xarray(\n            restored,\n            name=f"Care denoised of {representation.name}",\n            tags=["denoised"],\n            origins=[representation],\n        )\n\n        shutil.rmtree(f".modelcache/{random_dir}")\n\n\n    return generated\n\n\n\n\n'})})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},71698:(e,t,n)=>{"use strict";n.d(t,{I:()=>c});var a=n(37887),i=n(69819),r=n(31230),o=(n(67294),n(85893));const s=r.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,d=r.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,l="my-2 p-2 rounded-md text-black text-center w-60 ",c=(0,i.Zh)((e=>{let{branch:t,repo:n,user:r}=e;const{client:c}=(0,i.AA)(),m=`${r}/${n}:${t}`,{data:h,refetch:p}=(0,a.a)(d,{client:c,variables:{tag:m},pollInterval:3e3});return(0,o.jsx)(o.Fragment,{children:h?.githubRepo?(0,o.jsxs)("button",{className:l+"bg-green-300",children:[" \u2705 ",m]}):(0,o.jsxs)("button",{onClick:async()=>{try{const{data:e}=await c.mutate({mutation:s,variables:{branch:t,repo:n,user:r}});await p(),console.log(e)}catch(e){console.log(e)}},className:l+"cursor-pointer bg-yellow-200",children:["\ud83e\ude84 Install ",m]})})}),(0,o.jsx)("div",{className:l+"bg-back-600",children:" \ud83c\udfb1 Connect to install"}))},21262:(e,t,n)=>{"use strict";n.d(t,{n:()=>ot});var a=n(67294),i=n(98268),r=(n(49263),n(85893));const o=e=>console.log("flow loaded:",e),s=e=>{let{edgeTypes:t,nodeTypes:n,nodes:a,edges:s,children:d,...l}=e;return(0,r.jsx)(i.tV,{children:(0,r.jsx)(i.x$,{nodes:a,edges:s,onInit:o,nodeTypes:n,edgeTypes:t,fitView:!0,attributionPosition:"top-right",...l,children:d})})};function d(e){return null!=e}const l=/\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g,c=/\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;function m(e){console.log(JSON.stringify(e));const t=JSON.stringify(e).replace(l,"").replace(c,"{");console.log(t);let n=JSON.parse(t);return console.log(n),n}const h=e=>e?.map((e=>{if(e){const{id:t,position:n,__typename:a,...i}=e;return{type:a,id:t,position:n,data:{__typename:a,...i},dragHandle:".custom-drag-handle",parentNode:i.parentNode?i.parentNode:void 0}}})).filter(d)||[],p=e=>e?.map((e=>{if(e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,__typename:o,...s}=e;return{id:t,type:o,source:n,sourceHandle:a,target:i,targetHandle:r,data:{__typename:o,...s}}}})).filter(d)||[],u=a.createContext({}),g=()=>(0,a.useContext)(u);var f=n(31230);let y=function(e){return e.Add="ADD",e.All="ALL",e.And="AND",e.BufferComplete="BUFFER_COMPLETE",e.BufferUntil="BUFFER_UNTIL",e.Chunk="CHUNK",e.Combinelatest="COMBINELATEST",e.Delay="DELAY",e.DelayUntil="DELAY_UNTIL",e.Divide="DIVIDE",e.Ensure="ENSURE",e.Filter="FILTER",e.Foreach="FOREACH",e.Gate="GATE",e.If="IF",e.Modulo="MODULO",e.Multiply="MULTIPLY",e.Omit="OMIT",e.Power="POWER",e.Prefix="PREFIX",e.Split="SPLIT",e.Subtract="SUBTRACT",e.Suffix="SUFFIX",e.ToList="TO_LIST",e.Withlatest="WITHLATEST",e.Zip="ZIP",e}({}),x=function(e){return e.Bool="BOOL",e.Dict="DICT",e.Enum="ENUM",e.Float="FLOAT",e.Int="INT",e.List="LIST",e.String="STRING",e.Structure="STRUCTURE",e.Union="UNION",e.Unset="UNSET",e}({});const w=f.Ps`
  fragment Leaf on Leaf {
    typename: __typename
    bold
    italic
    code
    text
  }
`,b=(f.Ps`
  fragment LevelDownDescendent on Descendent {
    typename: __typename
    ...Leaf
  }
  ${w}
`,f.Ps`
  fragment LevelDownParagraph on ParagraphDescendent {
    size
    untypedChildren
  }
`),k=f.Ps`
  fragment LevelDownMention on MentionDescendent {
    user {
      sub
    }
  }
`,j=f.Ps`
  fragment Node on CommentNode {
    typename: __typename
    children {
      typename: __typename
      ...Leaf
      ...LevelDownParagraph
      ...LevelDownMention
    }
  }
  ${w}
  ${b}
  ${k}
`,v=f.Ps`
  fragment Mention on MentionDescendent {
    user {
      sub
    }
    ...Node
  }
  ${j}
`,_=f.Ps`
  fragment Paragraph on ParagraphDescendent {
    size
    ...Node
  }
  ${j}
`,$=f.Ps`
  fragment Descendent on Descendent {
    typename: __typename
    ...Mention
    ...Paragraph
    ...Leaf
  }
  ${v}
  ${_}
  ${w}
`,N=f.Ps`
  fragment SubthreadComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    createdAt
    descendents {
      ...Descendent
    }
  }
  ${$}
`,C=f.Ps`
  fragment ListComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    resolved
    resolvedBy {
      sub
    }
    id
    createdAt
    children {
      ...SubthreadComment
    }
  }
  ${$}
  ${N}
`,A=f.Ps`
  fragment MentionComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    id
    createdAt
    children {
      ...SubthreadComment
    }
    mentions {
      id
      sub
    }
    resolved
    resolvedBy {
      sub
    }
    objectId
    contentType
  }
  ${$}
  ${N}
`,P=f.Ps`
  fragment DetailComment on Comment {
    user {
      sub
    }
    parent {
      id
    }
    descendents {
      ...Descendent
    }
    id
    resolved
    resolvedBy {
      sub
    }
    createdAt
    children {
      ...SubthreadComment
    }
    mentions {
      sub
    }
    objectId
    contentType
  }
  ${$}
  ${N}
`,R=f.Ps`
  fragment ConditionEvent on ConditionEvent {
    id
    source
    createdAt
    value
    state
  }
`,T=f.Ps`
  fragment ConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
    status
    events {
      ...ConditionEvent
    }
  }
  ${R}
`,L=f.Ps`
  fragment ListConditionSnapshot on ConditionSnapshot {
    id
    condition {
      id
      provision
    }
  }
`,I=f.Ps`
  fragment Widget on Widget {
    kind
    query
    hook
    ward
    min
    step
    placeholder
    max
    choices {
      value
      label
    }
    asParagraph
  }
`,S=f.Ps`
  fragment ReturnWidget on ReturnWidget {
    kind
    query
    choices {
      value
      label
    }
  }
`,E=f.Ps`
  fragment PortChildNested on PortChild {
    scope
    identifier
    kind
    nullable
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
    child {
      identifier
      scope
      kind
      nullable
      assignWidget {
        ...Widget
      }
      returnWidget {
        ...ReturnWidget
      }
    }
    variants {
      identifier
      scope
      kind
      nullable
      assignWidget {
        ...Widget
      }
      returnWidget {
        ...ReturnWidget
      }
    }
  }
  ${I}
  ${S}
`,D=f.Ps`
  fragment PortChild on PortChild {
    identifier
    kind
    scope
    nullable
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
    child {
      ...PortChildNested
    }
    variants {
      ...PortChildNested
    }
  }
  ${I}
  ${S}
  ${E}
`,W=f.Ps`
  fragment Port on Port {
    key
    label
    identifier
    scope
    kind
    description
    assignWidget {
      ...Widget
    }
    returnWidget {
      ...ReturnWidget
    }
    child {
      ...PortChild
    }
    variants {
      ...PortChild
    }
    nullable
  }
  ${I}
  ${S}
  ${D}
`,F=f.Ps`
  fragment FlowNodeCommons on FlowNodeCommons {
    instream {
      ...Port
    }
    outstream {
      ...Port
    }
    constream {
      ...Port
    }
    constants
    name
    description
  }
  ${W}
`,O=f.Ps`
  fragment RetriableNode on RetriableNode {
    maxRetries
    retryDelay
  }
`,M=f.Ps`
  fragment ArkitektNode on ArkitektNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    hash
    kind
    defaults
    mapStrategy
    allowLocal
    binds {
      clients
      templates
    }
    assignTimeout
    yieldTimeout
    reserveTimeout
    maxRetries
  }
  ${F}
  ${O}
`,U=f.Ps`
  fragment ArkitektFilterNode on ArkitektFilterNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    hash
    kind
    defaults
    mapStrategy
    allowLocal
    binds {
      clients
      templates
    }
    assignTimeout
    yieldTimeout
    reserveTimeout
    maxRetries
  }
  ${F}
  ${O}
`,B=f.Ps`
  fragment ReactiveNode on ReactiveNode {
    ...FlowNodeCommons
    __typename
    implementation
    defaults
  }
  ${F}
`,H=f.Ps`
  fragment ArgNode on ArgNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,G=f.Ps`
  fragment KwargNode on KwargNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,q=f.Ps`
  fragment ReturnNode on ReturnNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,Y=f.Ps`
  fragment LocalNode on LocalNode {
    ...FlowNodeCommons
    ...RetriableNode
    __typename
    interface
    hash
    kind
    defaults
    mapStrategy
    allowLocal
    assignTimeout
    yieldTimeout
    maxRetries
  }
  ${F}
  ${O}
`,z=f.Ps`
  fragment GraphNode on GraphNode {
    ...FlowNodeCommons
    __typename
  }
  ${F}
`,X=f.Ps`
  fragment FlowNode on FlowNode {
    id
    position {
      x
      y
    }
    typename
    parentNode
    ...ArkitektNode
    ...ArkitektFilterNode
    ...ReactiveNode
    ...ArgNode
    ...KwargNode
    ...ReturnNode
    ...LocalNode
    ...GraphNode
  }
  ${M}
  ${U}
  ${B}
  ${H}
  ${G}
  ${q}
  ${Y}
  ${z}
`,K=f.Ps`
  fragment StreamItemChild on StreamItemChild {
    kind
    identifier
    scope
    nullable
    child {
      scope
      kind
      nullable
      identifier
    }
    variants {
      scope
      kind
      nullable
      identifier
    }
  }
`,V=f.Ps`
  fragment StreamItem on StreamItem {
    key
    kind
    identifier
    scope
    nullable
    child {
      ...StreamItemChild
    }
    variants {
      ...StreamItemChild
    }
  }
  ${K}
`,Z=f.Ps`
  fragment FlowEdgeCommons on FlowEdgeCommons {
    stream {
      ...StreamItem
    }
  }
  ${V}
`,J=f.Ps`
  fragment LabeledEdge on LabeledEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${Z}
`,Q=f.Ps`
  fragment FancyEdge on FancyEdge {
    ...FlowEdgeCommons
    __typename
  }
  ${Z}
`,ee=f.Ps`
  fragment FlowEdge on FlowEdge {
    id
    source
    sourceHandle
    target
    targetHandle
    typename
    ...LabeledEdge
    ...FancyEdge
  }
  ${J}
  ${Q}
`,te=f.Ps`
  fragment Global on Global {
    toKeys
    port {
      ...Port
    }
  }
  ${W}
`,ne=f.Ps`
  fragment Flow on Flow {
    __typename
    id
    graph {
      nodes {
        ...FlowNode
      }
      edges {
        ...FlowEdge
      }
      globals {
        ...Global
      }
      args {
        ...Port
      }
      returns {
        ...Port
      }
    }
    restrict
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
  ${X}
  ${ee}
  ${te}
  ${W}
`,ae=f.Ps`
  fragment Condition on Condition {
    id
    snapshots {
      id
      status
      createdAt
    }
    provision
    createdAt
    latestSnapshot {
      createdAt
      events {
        ...ConditionEvent
      }
    }
    flow {
      ...Flow
    }
  }
  ${R}
  ${ne}
`,ie=f.Ps`
  fragment ListCondition on Condition {
    id
    provision
    createdAt
    flow {
      id
      name
      workspace {
        name
      }
    }
  }
`,re=f.Ps`
  fragment ListFlow on Flow {
    id
    name
    screenshot
    createdAt
    workspace {
      id
    }
  }
`,oe=f.Ps`
  fragment ListWorkspace on Workspace {
    id
    name
    latestFlow {
      ...ListFlow
    }
  }
  ${re}
`,se=f.Ps`
  fragment Workspace on Workspace {
    id
    name
    latestFlow {
      ...Flow
    }
  }
  ${ne}
`,de=(f.Ps`
  fragment RunLog on RunLog {
    id
    node
    log
  }
`,f.Ps`
  fragment ReactiveTemplate on ReactiveTemplate {
    constream {
      ...Port
    }
    instream {
      ...Port
    }
    outstream {
      ...Port
    }
    name
    implementation
    description
    id
    constants {
      ...Port
    }
  }
  ${W}
`),le=f.Ps`
  fragment RunEvent on RunEvent {
    id
    source
    handle
    type
    createdAt
    value
    t
    causedBy
  }
`,ce=f.Ps`
  fragment Snapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    status
    events {
      ...RunEvent
    }
    t
  }
  ${le}
`,me=f.Ps`
  fragment ListSnapshot on Snapshot {
    id
    run {
      id
      assignation
    }
    t
  }
`,he=f.Ps`
  fragment Run on Run {
    id
    status
    assignation
    snapshots {
      id
      status
      t
      createdAt
    }
    createdAt
    latestSnapshot {
      createdAt
      events {
        ...RunEvent
      }
      t
    }
    flow {
      ...Flow
    }
  }
  ${le}
  ${ne}
`,pe=f.Ps`
  fragment ExportRun on Run {
    id
    status
    assignation
    snapshots {
      id
      status
      t
      createdAt
    }
    createdAt
    events {
      ...RunEvent
    }
    flow {
      ...Flow
    }
  }
  ${le}
  ${ne}
`,ue=f.Ps`
  fragment ListRun on Run {
    id
    status
    assignation
    createdAt
    flow {
      id
      name
      workspace {
        name
      }
    }
  }
`;f.Ps`
  mutation CreateComment(
    $id: ID!
    $model: CommentableModels!
    $descendents: [DescendendInput]!
    $parent: ID
  ) {
    createComment(
      object: $id
      type: $model
      descendents: $descendents
      parent: $parent
    ) {
      ...ListComment
    }
  }
  ${C}
`;f.Ps`
  mutation ReplyTo($descendents: [DescendendInput]!, $parent: ID!) {
    replyTo(descendents: $descendents, parent: $parent) {
      ...ListComment
    }
  }
  ${C}
`;f.Ps`
  mutation ResolveComment($id: ID!) {
    resolveComment(id: $id) {
      ...ListComment
    }
  }
  ${C}
`;f.Ps`
  mutation DeleteCondition($id: ID!) {
    deleteCondition(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation pinCondition($id: ID!, $pin: Boolean!) {
    pinCondition(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;f.Ps`
  mutation UpdateFlow($id: ID!, $graph: GraphInput!, $screenshot: ImageFile) {
    updateworkspace(id: $id, graph: $graph, screenshot: $screenshot) {
      ...Workspace
    }
  }
  ${se}
`;f.Ps`
  mutation DeleteFlow($id: ID!) {
    deleteFlow(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation CreateVanillaDiagram($name: String, $restrict: [String]) {
    drawvanilla(name: $name, restrict: $restrict) {
      ...Workspace
    }
  }
  ${se}
`;f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      ...Workspace
    }
  }
  ${se}
`;f.Ps`
  mutation pinFlow($id: ID!, $pin: Boolean!) {
    pinFlow(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;f.Ps`
  mutation DeleteSnapshot($id: ID!) {
    deleteSnapshot(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation DeleteRun($id: ID!) {
    deleteRun(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation PinRun($id: ID!, $pin: Boolean!) {
    pinRun(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;f.Ps`
  mutation DeleteWorkspace($id: ID!) {
    deleteWorkspace(id: $id) {
      id
    }
  }
`;f.Ps`
  mutation PinWorkspace($id: ID!, $pin: Boolean!) {
    pinWorkspace(id: $id, pin: $pin) {
      id
      pinnedBy {
        id
        email
      }
      pinned
    }
  }
`;f.Ps`
  query CommentsFor($id: ID!, $model: CommentableModels!) {
    commentsfor(model: $model, id: $id) {
      ...ListComment
    }
  }
  ${C}
`;f.Ps`
  query MyMentions {
    mymentions {
      ...MentionComment
    }
  }
  ${A}
`;f.Ps`
  query DetailComment($id: ID!) {
    comment(id: $id) {
      ...DetailComment
    }
  }
  ${P}
`;f.Ps`
  query ConditionSnapshots {
    conditionSnapshots {
      ...ListConditionSnapshot
    }
  }
  ${L}
`;f.Ps`
  query DetailConditionSnapshot($id: ID!) {
    conditionSnapshot(id: $id) {
      ...ConditionSnapshot
    }
  }
  ${T}
`;f.Ps`
  query Conditions {
    conditions {
      ...ListCondition
    }
  }
  ${ie}
`;f.Ps`
  query MyConditions(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myconditions(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListCondition
    }
  }
  ${ie}
`;f.Ps`
  query DetailCondition($id: ID, $provision: ID) {
    condition(id: $id, provision: $provision) {
      ...Condition
    }
  }
  ${ae}
`;f.Ps`
  query ConditionEventsBetween($id: ID!, $min: DateTime, $max: DateTime) {
    conditionEventsBetween(condition: $id, min: $min, max: $max) {
      ...ConditionEvent
    }
  }
  ${R}
`;f.Ps`
  query Flow($id: ID) {
    flow(id: $id) {
      ...Flow
    }
  }
  ${ne}
`;f.Ps`
  query Workspace($id: ID!) {
    workspace(id: $id) {
      ...Workspace
    }
  }
  ${se}
`;f.Ps`
  query MyWorkspaces(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myworkspaces(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListWorkspace
    }
  }
  ${oe}
`;f.Ps`
  query PinnedWorkspaces(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    workspaces(
      limit: $limit
      offset: $offset
      order: $order
      pinned: true
      createdDay: $createdDay
    ) {
      ...ListWorkspace
    }
  }
  ${oe}
`;f.Ps`
  query SearchWorkspaces($name: String) {
    workspaces(name: $name) {
      ...ListWorkspace
    }
  }
  ${oe}
`;f.Ps`
  query SearchFlows($name: String, $workspace: ID) {
    flows(name: $name, workspace: $workspace) {
      ...ListFlow
    }
  }
  ${re}
`;f.Ps`
  query Snapshots {
    snapshots {
      ...ListSnapshot
    }
  }
  ${me}
`;f.Ps`
  query DetailSnapshot($id: ID!) {
    snapshot(id: $id) {
      ...Snapshot
    }
  }
  ${ce}
`;f.Ps`
  query Runs {
    runs {
      ...ListRun
    }
  }
  ${ue}
`;f.Ps`
  query MyRuns(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    myruns(
      limit: $limit
      offset: $offset
      order: $order
      createdDay: $createdDay
    ) {
      ...ListRun
    }
  }
  ${ue}
`;f.Ps`
  query PinnedRuns(
    $limit: Int
    $offset: Int
    $order: String
    $createdDay: DateTime
  ) {
    runs(
      limit: $limit
      offset: $offset
      order: $order
      pinned: true
      createdDay: $createdDay
    ) {
      ...ListRun
    }
  }
  ${ue}
`;f.Ps`
  query DetailRun($id: ID, $assignation: ID) {
    run(id: $id, assignation: $assignation) {
      ...Run
    }
  }
  ${he}
`;f.Ps`
  query ExportRun($id: ID) {
    run(id: $id) {
      ...ExportRun
    }
  }
  ${pe}
`;f.Ps`
  query EventsBetween($id: ID!, $min: Int, $max: Int) {
    eventsBetween(run: $id, min: $min, max: $max) {
      ...RunEvent
    }
  }
  ${le}
`;f.Ps`
  query FlussGlobalSearch($search: String) {
    workspaces(search: $search) {
      ...ListWorkspace
    }
  }
  ${oe}
`;f.Ps`
  query ReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${de}
`;f.Ps`
  query DetailReactiveTemplate(
    $id: ID
    $implementation: ReactiveImplementationModelInput
  ) {
    reactivetemplate(id: $id, implementation: $implementation) {
      ...ReactiveTemplate
    }
  }
  ${de}
`;f.Ps`
  query ReactiveTemplates($search: String) {
    reactivetemplates(name: $search) {
      ...ReactiveTemplate
    }
  }
  ${de}
`;f.Ps`
  subscription ConditionEvents($id: ID!) {
    conditionevents(id: $id) {
      deleted
      create {
        ...ConditionEvent
      }
      update {
        ...ConditionEvent
      }
    }
  }
  ${R}
`;f.Ps`
  subscription Events($id: ID!) {
    events(id: $id) {
      deleted
      create {
        ...RunEvent
      }
      update {
        ...RunEvent
      }
    }
  }
  ${le}
`;const ge=e=>{const{}=g(),{id:t,sourcePosition:n,targetPosition:a,sourceX:o,sourceY:s,targetX:d,targetY:l,style:c,markerStart:m,markerEnd:h,data:p}=e,[u,f,y]=(0,i.OW)({sourcePosition:n,targetPosition:a,sourceX:o,sourceY:s,targetX:d,targetY:l});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{id:t,style:c,className:"react-flow__edge-path",d:u}),(0,r.jsx)(i.XQ,{children:(0,r.jsx)("div",{style:{position:"absolute",transform:`translate(-50%, -50%) translate(${f}px,${y}px)`},className:"relative m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 flex-col flex ",children:p?.stream.map(((e,t)=>(0,r.jsx)("span",{className:"text-xs",children:(e?.kind==x.List?"[ "+(e?.child?.identifier||e?.child?.kind)+" ]":e?.identifier||e?.kind)+(e?.nullable?"?":"")},t)))})})]})};var fe=n(1706);const ye=a.createContext({isExpanded:!1,isSelected:!1,isHovered:!1,toggleExpanded:()=>{},width:200,height:70}),xe=e=>{let{id:t,children:n,expandedHeight:i=200,expandedWidth:o=400,collapsedWidth:s=170,collapsedHeight:d=70}=e;const[l,c]=(0,a.useState)({isExpanded:!1,isSelected:!1,isHovered:!1,width:s,height:d});return(0,r.jsx)(fe.Resizable,{height:l.height,width:l.width,onResize:(e,t)=>{let{size:n,handle:a}=t;c((e=>({...e,width:n.width,height:n.height,isExpanded:n.height>200&&n.width>200}))),e.stopPropagation()},resizeHandles:["se"],handleSize:[40,40],children:(0,r.jsx)(ye.Provider,{value:{...l,toggleExpanded:()=>{c((e=>({...e,isExpanded:!e.isExpanded,width:e.isExpanded?s:o,height:e.isExpanded?d:i})))}},children:(0,r.jsx)("div",{style:{width:l.width+"px",height:l.height+"px"},className:"flex flex-col",children:n})})},t)},we=e=>t=>(0,r.jsx)(xe,{id:t.id,children:(0,r.jsx)(e,{...t})}),be={pink:"border-pink-300 shadow-pink-500/20 ",blue:"border-blue-500 shadow-blue-500/20 ",green:"border-green-500 shadow-green-500/20 ",red:"border-red-500 shadow-red-500/20 ",white:"border-slate-200 shadow-slate-200/20"},ke=e=>{let{children:t,id:n,color:i="white"}=e;const[o,s]=a.useState(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${be[i]}`,children:t})})};var je=n(55770),ve=n(86419),_e=n(90512),$e=n(57851);function Ne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,$e.m)((0,_e.W)(t))}const Ce=ve.fC,Ae=ve.xz,Pe=a.forwardRef(((e,t)=>{let{className:n,align:a="center",sideOffset:i=4,...o}=e;return(0,r.jsx)(ve.h_,{children:(0,r.jsx)(ve.VY,{ref:t,align:a,sideOffset:i,className:Ne("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})})}));Pe.displayName=ve.VY.displayName;const Re=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"}),Te=()=>(0,r.jsx)("div",{className:"h-2 w-2 rounded rounded-full bg-green-200 my-auto"}),Le=(e,t,n)=>e.graph.globals.find((e=>e.toKeys.includes(((e,t)=>`${e}.${t}`)(t,n)))),Ie=e=>{const{data:t,error:n,loading:a}=(0,je.un)(f.ZP`
    { node(hash: "${e.hash}") {
      name
    }
    }
    `);return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Re,{}),(0,r.jsxs)("div",{className:"text-yellow-500 my-auto",children:[" ",e.name," "]})]}):(0,r.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,r.jsx)(Te,{}),(0,r.jsxs)("div",{className:"text-green-500 my-auto",children:[" ",t?.node?.name," "]})]})})},Se=e=>{const{flow:t}=g(),n=e.data.defaults&&Object.keys(e.data.defaults).filter((n=>e.data.defaults[n]&&null!=e.data.defaults[n]&&0!=e.data.defaults[n]||Le(t,e.id,n)))||[];return(0,r.jsxs)(Ce,{children:[(0,r.jsx)(Ae,{className:"appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full ",children:(0,r.jsx)(je.Z6,{fallback:(0,r.jsxs)(r.Fragment,{children:[" ",e.data?.name]}),children:(0,r.jsx)(Ie,{hash:e.data.hash,name:e.data.name})})}),(0,r.jsxs)(Pe,{className:"text-xs bg-back-800 my-auto  ",children:[" ",e.data?.description,n&&n.length>0&&(0,r.jsxs)("div",{className:"flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3",children:[(0,r.jsx)("div",{className:"font-semibold text-md mb-2",children:"Constants "}),(0,r.jsx)("div",{className:"flex flex-row gap-2 text-white",children:(0,r.jsx)("div",{className:"flex grid grid-cols-2 gap-2",children:n.map((n=>{const a=Le(t,e.id,n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:" my-auto",children:[" ",n," "]}),a?(0,r.jsxs)("div",{className:"text-primary-300",children:[" ",(0,r.jsx)("div",{className:"font-bold inline",children:"Global "}),a.port.key," "]}):(0,r.jsxs)("div",{className:"my-auto",children:[" ",e.data.defaults[n]," "]})]})}))})})]})]})]})},Ee=we((e=>{const{isExpanded:t,toggleExpanded:n}=(0,a.useContext)(ye);return(0,r.jsxs)(ke,{id:e.id,children:[e.data.instream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),e.data.outstream.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{top:"50%",zIndex:"-1",cursor:"pointer"}}))),(0,r.jsx)("div",{className:"flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden ",children:(0,r.jsx)(Se,{...e})})]})})),De=we((e=>{let{data:{outstream:t,instream:n},id:o}=e;const[s,d]=(0,a.useState)(!1),[l,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ke,{color:"blue",id:o,children:(0,r.jsx)("div",{className:"px-2 py-2",children:(0,r.jsxs)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!l),children:["Inputs"," "]})})}),t.map(((e,t)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:"return_"+t,style:{background:"#555"},"data-tip":e&&e.map((e=>e?.key)).join(" | "),"data-for":"tooltip"+o})))]})}));var We=n(63750);const Fe=we((e=>{let{data:{constream:t},id:n}=e;const[i,o]=(0,a.useState)(!1),[s,d]=(0,a.useState)(!0);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(ke,{color:"green",id:n,children:[!s&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex",children:t?.map(((e,t)=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex-1 border m-1 py-0 px-1 rounded border-gray-200","data-tip":e&&e.map((e=>e?.kind)).join("|"),"data-for":"tooltip_special"+n,children:(0,r.jsx)("div",{className:"flex justify-between",children:(0,r.jsx)("button",{type:"button",onClick:()=>alert("implement"),children:(0,r.jsx)(We.yvY,{})})})},t)})))})}),(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsxs)("div",{className:"font-light text-xl w-full text-center custom-drag-handle cursor-pointer",onDoubleClick:()=>d(!s),children:["Constants"," "]}),(0,r.jsx)("p",{className:"text-gray-700 text-base"})]})]})})})),Oe=we((e=>{let{data:{outstream:t,instream:n},id:o}=e;const[s,d]=(0,a.useState)(!1),[l,c]=(0,a.useState)(!0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ke,{color:"red",id:o,children:(0,r.jsxs)("div",{className:"px-2 py-2",children:[(0,r.jsx)("div",{className:"font-light text-xl custom-drag-handle cursor-pointer",onDoubleClick:()=>c(!l),children:"Outputs"}),(0,r.jsxs)("p",{className:"text-gray-700 text-base",children:[(0,r.jsxs)(r.Fragment,{children:[n[0]?.map((e=>e?.kind)).join(" | "),(0,r.jsx)("br",{})]}),!l&&(0,r.jsx)("button",{type:"button",className:"rounded px-2 py-1 text-xs font-semibold border-gray-300",onClick:()=>d(!0),children:"Add Documentation"})]})]})}),n.map(((e,t)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:"arg_"+t,style:{background:"#555"}})))]})})),Me="px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ",Ue={ArkitektNode:Ee,ArkitektFilterNode:Ee,LocalNode:Ee,ReactiveNode:e=>{let{data:{outstream:t,instream:n,constream:o,implementation:s,defaults:d},id:l}=e;const c=(0,i.Bn)();return(0,a.useEffect)((()=>{console.log("Update node internals",l,s),c(l)}),[t,n,o]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"custom-drag-handle text-xs ",children:[s&&[y.Combinelatest,y.Withlatest,y.Zip,y.BufferUntil].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[y.Gate].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,40 40,20 0,0",style:{strokeWidth:1,stroke:"white",fill:"green"}})}),s&&[y.Split].includes(s)&&(0,r.jsx)("svg",{height:"40",width:"40",children:(0,r.jsx)("polygon",{points:"0,20 40,40 40,0",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})}),s&&[y.Chunk,y.All,y.BufferComplete,y.Divide,y.Filter,y.Multiply,y.Modulo,y.Power,y.Subtract,y.Add,y.Prefix,y.Suffix].includes(s)&&(0,r.jsxs)("div",{className:Me,children:[s," ",d?.number&&(0,r.jsx)("b",{className:"font-bold",children:d.number})]}),s&&[y.Ensure].includes(s)&&(0,r.jsx)("div",{className:Me,children:(0,r.jsx)("h1",{children:"!"})}),s&&[y.ToList].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}}),(0,r.jsx)("text",{children:s})]}),s&&[y.Omit].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"var(--color-primary-50)",fontSize:"13px"},children:s})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"var(--color-primary-300)"}})]}),s&&[y.If].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"If"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),s&&[y.And].includes(s)&&(0,r.jsxs)("svg",{height:"40",width:"40",children:[(0,r.jsx)("text",{children:(0,r.jsx)("textPath",{style:{fill:"rgb(var(--color-primary-100))",fontSize:"13px"},children:"And"})}),(0,r.jsx)("polygon",{points:"0,0 40,0 40,40 0,40",style:{strokeWidth:1,stroke:"white",fill:"rgb(var(--color-primary-300))"}})]}),o?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Bottom,id:`kwarg_${t}`,style:{background:"#555",marginTop:10,height:"1em"}},t))),n?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"target",position:i.Ly.Left,id:`arg_${t}`,style:{top:100/n.length*t+45/n.length+"%",background:"#555",height:"1em"}},t))),t?.map(((e,t,n)=>(0,r.jsx)(i.HH,{type:"source",position:i.Ly.Right,id:`return_${t}`,style:{top:100/n.length*t+46/n.length+"%",background:"#555"}},t)))]})})},ArgNode:De,ReturnNode:Oe,KwargNode:Fe,GraphNode:()=>null},Be={LabeledEdge:ge,FancyEdge:ge},He=e=>{let{flow:t}=e;const[n,a,o]=(0,i.Rr)(h(t.graph?.nodes)),[d,l,c]=(0,i.ll)(p(t.graph?.edges));return(0,r.jsx)(u.Provider,{value:{flow:t},children:(0,r.jsx)(s,{nodes:n,edges:d,onNodesChange:o,onEdgesChange:c,elementsSelectable:!0,nodeTypes:Ue,edgeTypes:Be,fitView:!0,attributionPosition:"bottom-right"})})};var Ge=n(89423),qe=n(39903);const Ye=e=>{const{user:t}=(0,Ge.gX)(),{fakts:n}=(0,qe.sT)();return(0,r.jsxs)("div",{className:"relative "+e.className,children:[e.children,!t||!n&&(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center",children:e.hideLabel})," "]})};var ze=n(81154),Xe=n(50319),Ke=n(12854),Ve=n(79592);const Ze=Ke.fC,Je=(Ke.xz,Ke.h_),Qe=(Ke.x8,a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ke.aV,{ref:t,className:Ne("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a})})));Qe.displayName=Ke.aV.displayName;const et=a.forwardRef(((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(Je,{children:[(0,r.jsx)(Qe,{}),(0,r.jsxs)(Ke.VY,{ref:t,className:Ne("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",n),...i,children:[a,(0,r.jsxs)(Ke.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(Ve.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}));et.displayName=Ke.VY.displayName;const tt=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:Ne("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};tt.displayName="DialogHeader";const nt=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ke.Dx,{ref:t,className:Ne("text-lg font-semibold leading-none tracking-tight",n),...a})}));nt.displayName=Ke.Dx.displayName;const at=a.forwardRef(((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(Ke.dk,{ref:t,className:Ne("text-sm text-muted-foreground",n),...a})}));at.displayName=Ke.dk.displayName;const it=f.Ps`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`,rt=e=>{let{flow:t,blockImport:n}=e;const{client:i}=(0,ze.dB)(),[o,s]=(0,Xe.D)(it,{client:i}),[l,c]=(0,a.useState)(!1),u=async()=>{try{const n=(e=h(t.graph.nodes),e?.map((e=>{if(e){const{id:t,position:n,type:a,parentNode:i,data:{outstream:r,constream:o,instream:s,...l}}=e;return{outstream:r?.map((e=>e?e.filter(d).map(m):[]))||[[]],constream:o?.map((e=>e?e.filter(d).map(m):[]))||[[]],instream:s?.map((e=>e?e.filter(d).map(m):[]))||[[]],id:t,position:{x:n.x,y:n.y},typename:a||"Fake type",name:l.name,description:l.description,hash:l.hash,implementation:l.implementation,kind:l.kind,defaults:l.defaults,mapStrategy:l.mapStrategy,allowLocal:l.allowLocal,maxRetries:l.maxRetries,retryDelay:l.retryDelay,binds:l.binds,parentNode:i,interface:l.interface}}})).filter(d)||[]||[]),a=(e=>e?.map((e=>{if(console.log(e),e){const{id:t,source:n,sourceHandle:a,target:i,targetHandle:r,type:o,data:s}=e;return{id:t,typename:o||"Fake type",source:n,sourceHandle:a||"returns",target:i,targetHandle:r||"args",stream:s?.stream.filter(d).map(m)||[]}}})).filter(d)||[])(p(t.graph.edges));let i={nodes:n.filter(d).map(m),edges:a.filter(d).map(m),globals:t.graph.globals.filter(d).map(m),args:t.graph.args.filter(d).map(m),returns:t.graph.returns.filter(d).map(m)};await o({variables:{name:t.name,graph:i}});c(!0)}catch(n){alert(n.message)}var e};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Ze,{open:l,onOpenChange:c,children:(0,r.jsx)(et,{children:(0,r.jsxs)(tt,{children:[(0,r.jsx)(nt,{children:"Succesfully imported workflow"}),(0,r.jsx)(at,{children:"We have imported the workflow into Arkitekt. You can now use it in your flows."})]})})}),(0,r.jsx)("button",{onClick:()=>u(),disabled:n,className:"bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer",children:"Re-Import into Arkitekt"})]})},ot=e=>(0,r.jsxs)("div",{className:"border border-1 rounded border-gray-800",children:[(0,r.jsx)("div",{className:"flex w-full h-[400px] flex-col  overflow-hidden relative",children:(0,r.jsx)(He,{flow:e.flow})}),(0,r.jsx)(Ye,{className:"flex w-full p-3 border-t-2 border-gray-800",hideLabel:"Connect to use this workflow",children:(0,r.jsx)(ze.Ot,{children:(0,r.jsx)(rt,{flow:e.flow,blockImport:e.blockImport})})})]})},83177:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"21","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","position":{"__typename":"Position","x":358,"y":96},"typename":"ArkitektNode","parentNode":null,"hash":"45015b39b08f99bd22aa3ce653385e7d7022a9757ca5ff6524106ea76fd174a8","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"The name of the image (default: \\"Active Image\\")","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"origin","label":"origin","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The original image that this immage was created from","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Active Image","description":"Uploads the active image to the server","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","position":{"__typename":"Position","x":791,"y":117},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","position":{"__typename":"Position","x":1109,"y":113},"typename":"ArkitektNode","parentNode":null,"hash":"032f88b73d989695e9230e313abe9aa86e9acabe3833fcfd51c217c5a896c7d9","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"image","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":null,"assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[]],"constants":null,"name":"Show on Imagej","description":"Shows the image on imagej","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81arg_0","source":"1","sourceHandle":"return_0","target":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-578c181a-4b89-40a2-8a43-864d25ea3f81return_0-arkid-065e3609-6606-424f-bef7-b928dbdd8b11arg_0","source":"arkid-578c181a-4b89-40a2-8a43-864d25ea3f81","sourceHandle":"return_0","target":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-065e3609-6606-424f-bef7-b928dbdd8b11return_0-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdarg_0","source":"arkid-065e3609-6606-424f-bef7-b928dbdd8b11","sourceHandle":"return_0","target":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bdreturn_0-2arg_0","source":"arkid-f9b460c5-69dc-45e5-9a94-b6244f0934bd","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Image J Segmentation","screenshot":null,"createdAt":"2023-10-28T10:44:05.534911+00:00","workspace":{"__typename":"Workspace","id":"10"}}')},68648:e=>{"use strict";e.exports=JSON.parse('{"__typename":"Flow","id":"24","graph":{"__typename":"FlowGraph","nodes":[{"__typename":"ArgNode","id":"1","position":{"__typename":"Position","x":0,"y":50},"typename":"ArgNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ReturnNode","id":"2","position":{"__typename":"Position","x":1500,"y":50},"typename":"ReturnNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"KwargNode","id":"3","position":{"__typename":"Position","x":750,"y":400},"typename":"KwargNode","parentNode":null,"instream":[[]],"outstream":[[]],"constream":[[]],"constants":null,"name":"","description":"No description"},{"__typename":"ArkitektNode","id":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","position":{"__typename":"Position","x":443,"y":20},"typename":"ArkitektNode","parentNode":null,"hash":"f994d581e3dfa751c3ff53b0ae5710813e345c582a9b8b38653a53dce8fbaa48","kind":"FUNCTION","defaults":null,"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The uploaded image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[{"__typename":"Port","key":"name","label":"name","identifier":null,"scope":"GLOBAL","kind":"STRING","description":"Overwrite the layer name. Defaults to None.","assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Upload Napari Layer","description":"Upload the current image to the server.","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","position":{"__typename":"Position","x":834,"y":15},"typename":"ArkitektNode","parentNode":null,"hash":"92b326a80ea7f578543c0b8e334aea6462d5051f123039f0c1712adbd875c83c","kind":"FUNCTION","defaults":{"rep":null},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Representation.","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[{"__typename":"Port","key":"return0","label":null,"identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"A Representation","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"constream":[[]],"constants":null,"name":"Segment Flou2","description":"Segments Cells using the stardist flou2 pretrained model","retryDelay":2000},{"__typename":"ArkitektNode","id":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","position":{"__typename":"Position","x":1214,"y":57},"typename":"ArkitektNode","parentNode":null,"hash":"277c15f3c78f7f664774dbd41fe1c29b1882a99db5642cb385f47f4b94df6e40","kind":"FUNCTION","defaults":{"rep":null,"show_roi_layer":true,"scale_to_physical_size":false},"mapStrategy":"MAP","allowLocal":false,"binds":null,"assignTimeout":100000,"yieldTimeout":100000,"reserveTimeout":100000,"maxRetries":3,"instream":[[{"__typename":"Port","key":"rep","label":"rep","identifier":"@mikro/representation","scope":"GLOBAL","kind":"STRUCTURE","description":"The Image","assignWidget":{"__typename":"Widget","kind":"SearchWidget","query":"query search_representation($search: String, $values: [ID]) {\\n  options: representations(name: $search, limit: 20, ids: $values) {\\n    value: id\\n    label: name\\n  }\\n}","hook":null,"ward":"mikro","min":null,"step":null,"placeholder":null,"max":null,"choices":null,"asParagraph":null},"returnWidget":null,"child":null,"variants":null,"nullable":false}]],"outstream":[[]],"constream":[[{"__typename":"Port","key":"show_roi_layer","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true},{"__typename":"Port","key":"scale_to_physical_size","label":null,"identifier":null,"scope":"GLOBAL","kind":"BOOL","description":null,"assignWidget":null,"returnWidget":null,"child":null,"variants":null,"nullable":true}]],"constants":null,"name":"Show on Napari","description":"Loads the image into the viewer","retryDelay":2000}],"edges":[{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61return_0-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abarg_0","source":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","sourceHandle":"return_0","target":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-1return_0-arkid-ab03c86e-943c-43ae-b06c-725d9b076e61arg_0","source":"1","sourceHandle":"return_0","target":"arkid-ab03c86e-943c-43ae-b06c-725d9b076e61","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-24a1b3b9-3621-4143-b399-48233c6ff4abreturn_0-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0arg_0","source":"arkid-24a1b3b9-3621-4143-b399-48233c6ff4ab","sourceHandle":"return_0","target":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","targetHandle":"arg_0","typename":"LabeledEdge","stream":[{"__typename":"StreamItem","key":"return0","kind":"STRUCTURE","identifier":"@mikro/representation","scope":"GLOBAL","nullable":false,"child":null,"variants":null}]},{"__typename":"LabeledEdge","id":"reactflow__edge-arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0return_0-2arg_0","source":"arkid-71c0f344-e124-4ffb-9297-4e1a14a95be0","sourceHandle":"return_0","target":"2","targetHandle":"arg_0","typename":"LabeledEdge","stream":[]}],"globals":[],"args":[],"returns":[]},"restrict":[],"name":"Napari Deep Learning","screenshot":null,"createdAt":"2023-10-28T12:56:05.741114+00:00","workspace":{"__typename":"Workspace","id":"8"}}')}}]);