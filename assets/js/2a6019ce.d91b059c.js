(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[5123],{60699:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/node_explaination.075aecc.640.png 640w,"+a.p+"assets/ideal-img/node_explaination.f7550c2.1320.png 1320w,"+a.p+"assets/ideal-img/node_explaination.2d491dd.1980.png 1980w",images:[{path:a.p+"assets/ideal-img/node_explaination.075aecc.640.png",width:640,height:261},{path:a.p+"assets/ideal-img/node_explaination.f7550c2.1320.png",width:1320,height:539},{path:a.p+"assets/ideal-img/node_explaination.2d491dd.1980.png",width:1980,height:808}],src:a.p+"assets/ideal-img/node_explaination.075aecc.640.png",toString:function(){return a.p+"assets/ideal-img/node_explaination.075aecc.640.png"},placeholder:void 0,width:640,height:261},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAr0lEQVQImQGkAFv/ANvJK/XJuSn/xbYo+9C/Kv/PvymJ3csrxdHAKv/Htyj5zr4q/8e3KI8AcGgd/ayfJvvq1y74gngi/2pjG5lWUBzMm48k/+3aLveGfCP/aGAcngDdyyz/6tcu/+7bL//o1S//wrMnoBoZFdmAdiH/9+Mw/+bULv/DsyimANfGKpnRwCmrzr0pptTDKbOwoiNdZV4bfZuPIrHSwSmm1MMqsqyfImQJPF3a07r9PAAAAABJRU5ErkJggg=="}},71698:(e,t,a)=>{"use strict";a.d(t,{I:()=>h});var n=a(37887),o=a(69819),i=a(31230),r=a(67294);const s=i.ZP`
  mutation ($branch: String!, $repo: String!, $user: String!) {
    createGithubRepo(branch: $branch, repo: $repo, user: $user) {
      branch
      repo
      user
    }
  }
`,l=i.ZP`
  query GithubRepo($tag: String!) {
    githubRepo(tag: $tag) {
      id
    }
  }
`,p="my-2 p-2 rounded-md text-black text-center w-60 ",h=(0,o.Zh)((e=>{let{branch:t,repo:a,user:i}=e;const{client:h}=(0,o.AA)(),d=`${i}/${a}:${t}`,{data:u,refetch:c}=(0,n.a)(l,{client:h,variables:{tag:d},pollInterval:3e3});return r.createElement(r.Fragment,null,u?.githubRepo?r.createElement("button",{className:p+"bg-green-300"}," \u2705 ",d):r.createElement("button",{onClick:async()=>{try{const{data:e}=await h.mutate({mutation:s,variables:{branch:t,repo:a,user:i}});await c(),console.log(e)}catch(e){console.log(e)}},className:p+"cursor-pointer bg-yellow-200"},"\ud83e\ude84 Install ",d))}),r.createElement("div",{className:p+"bg-back-600"}," \ud83c\udfb1 Connect to install"))},34440:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>w,frontMatter:()=>h,metadata:()=>u,toc:()=>m});var n=a(83117),o=(a(67294),a(3905)),i=a(15944);const r=a.p+"assets/medias/add_omero-0d62f0a745b7043d7a7ace10611cf4ba.webm",s=a.p+"assets/medias/reserve-2b8bbbed2ce1aead8c816267cd7f54ff.webm";var l=a(60699),p=a.n(l);a(71698);const h={title:"Your first Tool",sidebar_label:"3. Your first Tool",sidebar_position:3},d=void 0,u={unversionedId:"introduction/first_steps/first_tool",id:"introduction/first_steps/first_tool",title:"Your first Tool",description:"You might have noticed that so far there is not really a lot that we can do with the Arkitekt server so far. We can create datasets, but we cannot really do anything with them.",source:"@site/docs/introduction/first_steps/first_tool.mdx",sourceDirName:"introduction/first_steps",slug:"/introduction/first_steps/first_tool",permalink:"/docs/introduction/first_steps/first_tool",draft:!1,editUrl:"https://github.com/jhnnsrs/doks/edit/master/docs/introduction/first_steps/first_tool.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Your first Tool",sidebar_label:"3. Your first Tool",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Upload your data",permalink:"/docs/introduction/first_steps/upload"},next:{title:"4. Your first Task",permalink:"/docs/introduction/first_steps/first_task"}},c={},m=[{value:"Apps and Nodes",id:"apps-and-nodes",level:2},{value:"Installing our First App",id:"installing-our-first-app",level:2},{value:"Why do we go through this hurdles.",id:"why-do-we-go-through-this-hurdles",level:3},{value:"And we are almost done",id:"and-we-are-almost-done",level:2},{value:"So how do we use it?",id:"so-how-do-we-use-it",level:2},{value:"Convert a file",id:"convert-a-file",level:2}],k={toc:m},y="wrapper";function w(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You might have noticed that so far there is not really a lot that we can do with the Arkitekt server so far. We can create datasets, but we cannot really do anything with them.\nSure we might comment on them. But that's not really what we want to do. We want to use the data to create something. So its time to install our first ",(0,o.kt)("inlineCode",{parentName:"p"},"App"),"."),(0,o.kt)("p",null,"In this section we will explore:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What are Apps "),(0,o.kt)("li",{parentName:"ul"},"What are Plugins"),(0,o.kt)("li",{parentName:"ul"},"Install our first Arkitekt Plugin (A File Converter)"),(0,o.kt)("li",{parentName:"ul"},"Understand Nodes and Reservations"),(0,o.kt)("li",{parentName:"ul"},"Convert a file ")),(0,o.kt)("h2",{id:"apps-and-nodes"},"Apps and Nodes"),(0,o.kt)("p",null,'Before we start using Apps, we need to understand what the term Apps means in the Arkitekt ecosystem. You already go to know "Orkestrator", which is the main app to interface with\nArkitekt, it provides us with the graphical interface to tell arkitekt what to do. But who is going to do the work? '),(0,o.kt)("p",null,"Well, that's also Apps. Apps are tools that do the image analysis work. They can be anything from a simple file converter script, to  GUI Applications like FIJI or Napari, or complex machine learning algorithm.\nThe only thing that they really have in common is that they interface with the Arkitekt server, and tell it what they can do. They do this by providing so called\n",(0,o.kt)("inlineCode",{parentName:"p"},"Nodes")," to the platform. A ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),' is a (conceptual defnition of a) functionality an app can provide. It can be as simple as "I can convert. Give me a file from format A and i convert it to format B" or "I can\nsegment, track and analyze cells in a movie, and can give you the tracks as a Table", or a more complex "I can train a machine learning model to segment cells from your data".'),(0,o.kt)("div",{className:"mt-2 p-6 w-full"},(0,o.kt)(i.Z,{img:p(),mdxType:"Image"}),(0,o.kt)("div",{className:"text-gray-400 mb-2"},(0,o.kt)("small",null,"The concept of a `Node` in Arkitekt. Nodes are [abstract](/docs/design/terminology/node) defintions of bioimage tasks, that help organize the functinality inside the Arkitekt platform. All outside functionality that can be used with Arkitekt must be defined as a node. "))),(0,o.kt)("admonition",{title:"About Inputs and Outputs",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The node inputs and outputs are of most important to understand. They define what the app expects as input, and what it will give you as output.\nIt is exactly that information that will help us map the data in our server (e.g. a File, or a Dataset) to a correspoing functionality of the app.")),(0,o.kt)("p",null,"Of course the name Node suggests that this is something that is part of a graph. And we will see about it when we start using a Workflow.\nBut for now, lets start simple and find a tool that can convert our data.\nWell wouldn't it be nice if we had that convert node right now? Well, let's install it."),(0,o.kt)("h2",{id:"installing-our-first-app"},"Installing our First App"),(0,o.kt)("p",null,"Before we will use some functionality from an outside app (and another installation), lets start simple and let us install an Arkitekt ",(0,o.kt)("inlineCode",{parentName:"p"},"PluginApp"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"PluginApps"),"\nare ",(0,o.kt)("em",{parentName:"p"},"just")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Apps")," that are installed and running inside the Arkitekt server. They are not different from any other app, except that they are easily installed\nthrough the Arkitekt interface, and can run completely veritualized  seperate from your operating system (More about that in ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/containers"},'"Arkitekt and Containers"'),").\nInstallation of Plugin Apps is a prettry straightforward process and can be done in a few steps:"),(0,o.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,o.kt)("source",{src:r})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Whale/Docker")," button in the left hand Navigation."),(0,o.kt)("p",{parentName:"li"},"This opens the ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin Store")," of Arkitekt. Currently it is completely empty, but we will change that soon. (We will probably add some default apps to easily\ninstall in the future, but for now lets do this manually, as it will also help you understand what is happening in the background).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Repository")," button in the action bar."),(0,o.kt)("p",{parentName:"li"},"This will prompt you for a repository URL. A repository is a collection of (versioned) apps, that can be installed on any Arkitekt server.\nThese repositories represent git repositories, that contain some Arkitekt specific configurations provided by the app\ndeveloper. You don't need to worry about this, just copy the following values into the prompt:"),(0,o.kt)("p",{parentName:"li"},"User: ",(0,o.kt)("inlineCode",{parentName:"p"},"jhnnsrs"),"\nRepository: ",(0,o.kt)("inlineCode",{parentName:"p"},"omero"),"\nBranch: ",(0,o.kt)("inlineCode",{parentName:"p"},"master"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Submit")," button."),(0,o.kt)("p",{parentName:"li"},"This will add the repository to the list of available repositories. It should have popped up in your Repository list.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the repository"),(0,o.kt)("p",{parentName:"li"},"When clicking on the repository you should see a list of apps that are available in this repository.\nIt is important to note that each app (or plugin) has a version number. This version number is an important element of the\nArkitekt ecosystem. More about this in ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/why_we_version"},"Why we version"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Right click on the latest (highest version number) app and click on "Appify".'),(0,o.kt)("p",{parentName:"li"},"Now this is one of the most important steps. This will create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"App"),' from the plugin. During this process you will be\nasked if you trust this app with your (and potential your teams) data, similar to how you trusted the Orkestrator app with your data.\nThis App is trustworthy and we can trust it with our data. So click on "Appify". Then Return to the ',(0,o.kt)("inlineCode",{parentName:"p"},"Plugin Store"),"."))),(0,o.kt)("admonition",{title:"About Trust",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Trust is a very important concept in Arkitekt. It seats at the core of the entire platform. Only through these elements of trust do\nwe feel like we can build a platform that is truly open and collaborative, and protect users from potential harmfull apps. ")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Right click on the newly created App and click on the "Deploy" button.'),(0,o.kt)("p",{parentName:"li"},"Last and final step, Deployment. Only when hitting deploy will Arkitekt actually download your app, and install it on the server.\nThis procedure might take quite a while (depending on your internet connection), as it will download the app, and all its dependencies\nand run in inside a container on the server. Arkitekt will also ask you about an ",(0,o.kt)("a",{parentName:"p",href:"docs/design/multiinstance"},"instance"),' name. Just leave main as it is, and click on\n"Deploy". This will start the installation process.'))),(0,o.kt)("p",null,"But don't worry, you can continue working while this is happening in the background, and\nof course it only happens once."),(0,o.kt)("admonition",{title:"About the Plugin system",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'The plugin system is still in its early stages. We are working on making this process more streamlined, and we will some\ndefault repositories that you can install from. But for now, this is the way to install apps on the Arkitekt server. Also note that the\n"progress" indicator is (even though) functional not really accurate. It will show you the progress of the download, and\nunzipping. But it will not show you the progress of the actual installation. This is something that we will improve in the future. If it\nseems like its freezing or not doing anything, just wait a little bit longer. It will eventually finish. (Sometime a ',(0,o.kt)("a",{parentName:"p",href:"/docs/troubleshooting/general_help"},"refresh")," of the page\ncan also help).")),(0,o.kt)("h3",{id:"why-do-we-go-through-this-hurdles"},"Why do we go through this hurdles."),(0,o.kt)("p",null,"You might ask yourself, why do we need to have repositories and containers and why do we need to go through this process. Well, there are a few reasons for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security"),": We want to make sure that the apps that you install on your server are trustworthy. We don't want to have apps that can potentially\nharm your data, or your server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Updatability"),": We want to make sure that apps can be updated. This is important for security reasons, but also to make sure that you can always\nrely on the latest and greatest version of your app. Arkitekt will periodically check for updates of your apps, and will notify you if there are updates\navailable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Versioning"),": We want to make sure that you can always rely on the same version of an app. This is important for reproducibility, and to make sure\nthat you can always rely on the same functionality. If you want to learn more about this, read ",(0,o.kt)("a",{parentName:"li",href:"/docs/design/why_we_version"},"Why we version"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Portability")," : Do you know that the App which we just installed had some very specific version requirements for the Java Virtual Machine? Well, you don't\nhave to worry about this. As plugin can package all of that, you can be sure that the app is running in the correct environment, and you don't have to worry about\nany dependencies.")),(0,o.kt)("h2",{id:"and-we-are-almost-done"},"And we are almost done"),(0,o.kt)("p",null,"Now that was some steps but we are almost done. If you go back to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Plugin Store")," you should see that the app is now installed and running.\nIf you click on the running Application you can inspect what is happening in the software container (it will show you the command line in that container),\nand you can also stop the app if you want to. But for now, lets leave it running."),(0,o.kt)("h2",{id:"so-how-do-we-use-it"},"So how do we use it?"),(0,o.kt)("p",null,"And this is the most important question. How do we use this app? Where are our nodes? Can we just start using it on our data? Well, not quite yet.\nThere is one last step that we need to do. We need to tell Arkitekt that we want to use some of the functionality of this app. We do this by ",(0,o.kt)("inlineCode",{parentName:"p"},"Reserving"),"\nour desired nodes."),(0,o.kt)("admonition",{title:"About Reservations",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Reservations are a core concept of the Arkitekt platform. They represent a contract of use between you and the Arkitekt platform, which will try to provide\nyou the reserved ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),", and inform you if its currently not available, (Maybe because the connected application is not started yet).\nReservations are always bound to a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"Node"),", and connect the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," to one or multiple real-world implementation(s) (e.g. our plugin app).\nTo learn more about reservations, read ",(0,o.kt)("a",{parentName:"p",href:"/docs/design/reservations"},"Reservations"),".")),(0,o.kt)("p",null,"So lets see how we can reserve a node."),(0,o.kt)("video",{autoPlay:!0,muted:!0,loop:!0,controls:!0,className:"rounded rounded-md",width:"100%"},(0,o.kt)("source",{src:s})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard")," button in the left hand navigation."),(0,o.kt)("p",{parentName:"li"},"The Dashboard is another core view of the Arkitekt platform. It shows you all of your reservations (i.e. reserved functionality/node) that are currently active on the platform\n(you should see none display right now) and the status of the connected applications (you should now see the omero app being display). It will also show you the status of ongoing tasks\nthat you have assigned to the platform.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Search Sidebar")," by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Search")," button in the button left corner."),(0,o.kt)("p",{parentName:"li"},'The search sidebar allows for a platform wide search for functionality (i.e. nodes), irrespective of the applications. You can start typing in the search bar, and it will show you\nall the nodes that match your search. Search for "Convert" and you should see a node called "Convert Omero". This is the node that we want to reserve.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Drag and Drop or Right Click on the node and click on "Reserve".'),(0,o.kt)("p",{parentName:"li"},'This will open a dialog that will ask you for some information about the reservation. Here you can tell Arkitekt specific requests for your reservation. Do you want to use on\nspecific app, do you want to parellize it, do you want to give it a specific name. For now, just leave everything as it is, and click on "Reserve". This will use the "Auto", Scheduler\nand will reserve the node automatically on the first available app.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should now see a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Reservation"),' on your dashboard under the "This app uses" section.'),(0,o.kt)("p",{parentName:"li"},'Congratulations, you have now reserved your first node. You have told Arkitekt that you want to use the "Convert Omero" node, and Arkitekt will inform you when it is ready to use.\nIt should now appear green in your dashboard. If you click on it, you can see some more information about the reservation, and you can also cancel/',(0,o.kt)("inlineCode",{parentName:"p"},"unreserve")," it if you want to. But\nfor now, lets leave it as it is."))),(0,o.kt)("admonition",{title:"Why Reservations",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You might ask yourself, why do we need to reserve nodes? Why can't we just use them? Well, this is a highly involved topic and hopefully we will be able to explain it in more detail in the\ndesign section of this documentation. In short they help Arkitekt keep track of the dependencies of your function and later our workflows.. For now, just rest assured that you only have to reserve nodes ",(0,o.kt)("em",{parentName:"p"},"once"),",\nArkitekt will keep track of them until you tell it otherwise.")),(0,o.kt)("h2",{id:"convert-a-file"},"Convert a file"),(0,o.kt)("p",null,"But lets finally do the conversion.\nSee you in the next section."))}w.isMDXComponent=!0}}]);