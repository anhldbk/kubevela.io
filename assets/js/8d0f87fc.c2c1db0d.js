(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[42903],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,g=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return t?a.createElement(g,l(l({ref:n},m),{},{components:t})):a.createElement(g,l({ref:n},m))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},35060:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var a=t(22122),o=t(19756),r=(t(67294),t(3905)),l={title:"Machine Learning Practice with KubeVela",author:"Tianxin Dong",author_title:"KubeVela team",author_url:"https://github.com/oam-dev/kubevela",author_image_url:"https://kubevela.io/img/logo.svg",tags:["KubeVela"],description:"",image:"https://raw.githubusercontent.com/oam-dev/kubevela.io/main/docs/resources/KubeVela-03.png",hide_table_of_contents:!1},i={permalink:"/blog/2022/03/02/kubevela-with-machine-learning",editUrl:"https://github.com/oam-dev/kubevela.io/tree/main/blog/2022-03-02-kubevela-with-machine-learning.md",source:"@site/blog/2022-03-02-kubevela-with-machine-learning.md",title:"Machine Learning Practice with KubeVela",description:"",date:"2022-03-02T00:00:00.000Z",formattedDate:"March 2, 2022",tags:[{label:"KubeVela",permalink:"/blog/tags/kube-vela"}],readingTime:9.37,truncated:!1,prevItem:{title:"China Merchants Bank's Practice on Offline Installation with KubeVela",permalink:"/blog/2022/04/01/offline-deployment-practice copy"},nextItem:{title:"Generate top 50 popular resources of AWS using 100 lines of code",permalink:"/blog/2022/03/01/kubevela-generate-top-50-popular-resources-of-aws-using-100-lines-of-code"}},s=[{value:"KubeVela AI Addon",id:"kubevela-ai-addon",children:[]},{value:"Model Training",id:"model-training",children:[]},{value:"Model Servings: Canary Testing",id:"model-servings-canary-testing",children:[]},{value:"Model Serving: A/B Testing",id:"model-serving-ab-testing",children:[]},{value:"Summary",id:"summary",children:[]}],d={toc:s};function m(e){var n=e.components,l=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At the background of Machine learning goes viral, AI engineers not only need to train and debug their models, but also need to deploy them online to verify how it looks(of course sometimes, this part of the work is done by AI platform engineers. ). It is very tedious and draining AI engineers."),(0,r.kt)("p",null,"In the cloud-native era, our model training and model serving are also usually performed on the cloud. Doing so not only improves scalability, but also improves resource utility. This is very effective for machine learning scenarios that consume a lot of computing resources."),(0,r.kt)("p",null,"But it is often difficult for AI engineers to use cloud-native techniques. The concept of cloud native has become more complex over time. Even to deploy a simple model serving on cloud native architecture, AI engineers may need to learn several additional concepts: Deployment, Service, Ingress, etc."),(0,r.kt)("p",null,"As a simple, easy-to-use, and highly scalable cloud-native application management tool, KubeVela enables developers to quickly and easily define and deliver applications on Kubernetes without knowing any details about the underlying cloud-native infrastructure. KubeVela's rich extensibility extends to AI addons and provide functions such as model training, model serving, and A/B testing, covering the basic needs of AI engineers and helping AI engineers quickly conduct model training and model serving in a cloud-native environment."),(0,r.kt)("p",null,"This article mainly focus on how to use KubeVela's AI addon to help engineers complete model training and model serving more easily."),(0,r.kt)("h2",{id:"kubevela-ai-addon"},"KubeVela AI Addon"),(0,r.kt)("p",null,"The KubeVela AI addon is divided into two: model training and model serving. The model training addon is based on KubeFlow's training-operator and can support distributed model training in different frameworks such as TensorFlow, PyTorch, and MXNet. The model serving addon is based on Seldon Core, which can easily use the model to start the model serving, and also supports advanced functions such as traffic distribution and A/B testing."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(78710).Z})),(0,r.kt)("p",null,"Through the KubeVela AI addon, the deployment of model training and serving tasks can be significantly simplified. At the same time, the process of model training and serving can be combined with KubeVela's own workflow, multi-cluster and other functions to complete production-level services."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: You can find all source code and YAML files in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/11.Machine_Learning_Demo"},"KubeVela Samples"),". If you want to use the model pretrained in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"style-model.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"color-model.yaml")," in the folder will do that and copy the model into the PVC.")),(0,r.kt)("h2",{id:"model-training"},"Model Training"),(0,r.kt)("p",null,"First enable the two addons for model training and model serving."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela addon enable model-training\nvela addon enable model-serving\n")),(0,r.kt)("p",null,"Model training includes two component types, ",(0,r.kt)("inlineCode",{parentName:"p"},"model-training")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jupyter-notebook"),", and model serving includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"model-serving")," component type. The specific parameters of these three components can be viewed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"vela show")," command."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also read ",(0,r.kt)("a",{parentName:"p",href:"https://kubevela.io/en/docs/next/reference/addons/ai"},"KubeVela AI Addon Documentation")," for more information.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela show model-training\nvela show jupyter-notebook\nvela show model-serving\n")),(0,r.kt)("p",null,"Let's train a simple model using the TensorFlow framework that turns gray images into colored ones. Deploy the following YAML file:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The source code for model training comes from: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/emilwallner/Coloring-greyscale-images"},"emilwallner/Coloring-greyscale-images"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: training-serving\n  namespace: default\nspec:\n  components:\n  # Train the model\n  - name: demo-training\n    type: model-training\n    properties:\n      # Mirror of the trained model\n      image: fogdong/train-color:v1\n      # A framework for model training\n      framework: tensorflow\n      # Declare storage to persist models. Here, the default storage class in the cluster will be used to create the PVC\n      storage:\n        - name: "my-pvc"\n          mountPath: "/model"\n')),(0,r.kt)("p",null,"At this point, KubeVela will pull up a ",(0,r.kt)("inlineCode",{parentName:"p"},"TFJob")," for model training."),(0,r.kt)("p",null,"It's hard to see what's going on just by training the model. Let's modify this YAML file and put the model serving after the model training step. At the same time, because the model serving will directly start the model, and the input and output of the model are not intuitive (ndarray or Tensor), therefore, we deploy a test service to call the service and convert the result into an image."),(0,r.kt)("p",null,"Deploy the following YAML file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: training-serving\n  namespace: default\nspec:\n  components:\n  # Train the model\n  - name: demo-training\n    type: model-training\n    properties:\n      image: fogdong/train-color:v1\n      framework: tensorflow\n      storage:\n        - name: "my-pvc"\n          mountPath: "/model"\n  \n  # Start the model serving\n  - name: demo-serving\n    type: model-serving\n    # The model serving will start after model training is complete\n    dependsOn:\n      - demo-training\n    properties:\n      # The protocol used to start the model serving can be left blank. By default, seldon\'s own protocol is used.\n      protocol: tensorflow\n      predictors:\n        - name: model\n          # The number of replicas for the model serving\n          replicas: 1\n          graph:\n            # model name\n            name: my-model\n            # model frame\n            implementation: tensorflow\n            # Model address, the previous step will save the trained model to the pvc of my-pvc, so specify the address of the model through pvc://my-pvc\n            modelUri: pvc://my-pvc\n\n  # test model serving\n  - name: demo-rest-serving\n    type: webservice\n    # The test service will start after model training is complete\n    dependsOn:\n      - demo-serving\n    properties:\n      image: fogdong/color-serving:v1\n      # Use LoadBalancer to expose external addresses for easy to access\n      exposeType: LoadBalancer\n      env:\n        - name: URL\n          # The address of the model serving\n          value: http://ambassador.vela-system.svc.cluster.local/seldon/default/demo-serving/v1/models/my-model:predict\n      ports:\n        # Test service port\n        - port: 3333\n          expose: true\n')),(0,r.kt)("p",null,"After deployment, check the status of the application with ",(0,r.kt)("inlineCode",{parentName:"p"},"vela ls"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela ls\n\ntraining-serving        demo-training       model-training          running healthy Job Succeeded   2022-03-02 17:26:40 +0800 CST\n\u251c\u2500                      demo-serving        model-serving           running healthy Available       2022-03-02 17:26:40 +0800 CST\n\u2514\u2500                      demo-rest-serving   webservice              running healthy Ready:1/1       2022-03-02 17:26:40 +0800 CST\n")),(0,r.kt)("p",null,"As you can see, the application has started normally. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"vela status <app-name> --endpoint")," to view the service address of the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status training-serving --endpoint\n\n+---------+-----------------------------------+---------------------------------------------------+\n| CLUSTER |     REF(KIND/NAMESPACE/NAME)      |                     ENDPOINT                      |\n+---------+-----------------------------------+---------------------------------------------------+\n|         | Service/default/demo-rest-serving | tcp://47.251.10.177:3333                          |\n|         | Service/vela-system/ambassador    | http://47.251.36.228/seldon/default/demo-serving  |\n|         | Service/vela-system/ambassador    | https://47.251.36.228/seldon/default/demo-serving |\n+---------+-----------------------------------+---------------------------------------------------+\n")),(0,r.kt)("p",null,"The application has three service addresses, the first is the address of our test service, the second and third are the addresses of the native model."),(0,r.kt)("p",null,"We can call the test service to see the effect of the model: the test service will read the content of the image, convert it into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tensor")," and request the model serving, and finally convert the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tensor")," returned by the model serving into an image to return."),(0,r.kt)("p",null,"We choose a black and white female image as input:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(634).Z})),(0,r.kt)("p",null,"After the request, you can see that a color image is output:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(4495).Z})),(0,r.kt)("h2",{id:"model-servings-canary-testing"},"Model Servings: Canary Testing"),(0,r.kt)("p",null,"In addition to starting the model serving directly, we can also use multiple versions of the model in one model serving and assign different traffic to them for canary testing."),(0,r.kt)("p",null,"Deploy the following YAML, you can see that both the v1 version of the model and the v2 version of the model are set to 50% traffic. Again, we deploy a test service behind the model serving:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: color-serving\n  namespace: default\nspec:\n  components:\n  - name: color-model-serving\n    type: model-serving\n    properties:\n      protocol: tensorflow\n      predictors:\n        - name: model1\n          replicas: 1\n          # v1 version model traffic is 50\n          traffic: 50\n          graph:\n            name: my-model\n            implementation: tensorflow\n            # Model address, our v1 version model is stored under the /model/v1 path in the pvc of color-model, so specify the address of the model through pvc://color-model/model/v1\n            modelUri: pvc://color-model/model/v1\n        - name: model2\n          replicas: 1\n          # v2 version model traffic is 50\n          traffic: 50\n          graph:\n            name: my-model\n            implementation: tensorflow\n            # Model address, our v2 version model is stored under the /model/v2 path in the pvc of color-model, so specify the address of the model through pvc://color-model/model/v2\n            modelUri: pvc://color-model/model/v2\n  - name: color-rest-serving\n    type: webservice\n    dependsOn:\n      - color-model-serving\n    properties:\n      image: fogdong/color-serving:v1\n      exposeType: LoadBalancer\n      env:\n        - name: URL\n          value: http://ambassador.vela-system.svc.cluster.local/seldon/default/color-model-serving/v1/models/my-model:predict\n      ports:\n        - port: 3333\n          expose: true\n")),(0,r.kt)("p",null,"When the model deployment is complete, use ",(0,r.kt)("inlineCode",{parentName:"p"},"vela status <app-name> --endpoint")," to view the address of the model serving:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status color-serving --endpoint\n\n+---------+------------------------------------+----------------------------------------------------------+\n| CLUSTER |      REF(KIND/NAMESPACE/NAME)      |                         ENDPOINT                         |\n+---------+------------------------------------+----------------------------------------------------------+\n|         | Service/vela-system/ambassador     | http://47.251.36.228/seldon/default/color-model-serving  |\n|         | Service/vela-system/ambassador     | https://47.251.36.228/seldon/default/color-model-serving |\n|         | Service/default/color-rest-serving | tcp://47.89.194.94:3333                                  |\n+---------+------------------------------------+----------------------------------------------------------+\n")),(0,r.kt)("p",null,"Request the model with a black and white city image:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(10462).Z})),(0,r.kt)("p",null,"As you can see, the result of the first request is as follows. While the sky and ground are rendered in color, the city itself is black and white:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(98435).Z})),(0,r.kt)("p",null,"Request again, you can see that in the result of this request, the sky, ground and city are rendered in color:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(9656).Z})),(0,r.kt)("p",null,"By distributing traffic to different versions of the model, it can help us better judge the model results."),(0,r.kt)("h2",{id:"model-serving-ab-testing"},"Model Serving: A/B Testing"),(0,r.kt)("p",null,"For a black and white image, we can turn it into color through the model. Or in another way, we can transfer the style of the original image by uploading another style image."),(0,r.kt)("p",null,"Do our users love colorful pictures more or pictures of different styles more? We can explore this question by conducting A/B testing."),(0,r.kt)("p",null,"Deploy the following YAML, by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"customRouting"),", forward the request with ",(0,r.kt)("inlineCode",{parentName:"p"},"style: transfer")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," to the model of style transfer. At the same time, make this style transfer model share the same address as the colorized model."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The model for style transfer comes from ",(0,r.kt)("a",{parentName:"p",href:"https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2"},"TensorFlow Hub"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: color-style-ab-serving\n  namespace: default\nspec:\n  components:\n  - name: color-ab-serving\n    type: model-serving\n    properties:\n      protocol: tensorflow\n      predictors:\n        - name: model1\n          replicas: 1\n          graph:\n            name: my-model\n            implementation: tensorflow\n            modelUri: pvc://color-model/model/v2\n  - name: style-ab-serving\n    type: model-serving\n    properties:\n      protocol: tensorflow\n      # The model of style migration takes a long time, set the timeout time so that the request will not be timed out\n      timeout: "10000"\n      customRouting:\n        # Specify custom Header\n        header: "style: transfer"\n        # Specify custom routes\n        serviceName: "color-ab-serving"\n      predictors:\n        - name: model2\n          replicas: 1\n          graph:\n            name: my-model\n            implementation: tensorflow\n            modelUri: pvc://style-model/model\n  - name: ab-rest-serving\n    type: webservice\n    dependsOn:\n      - color-ab-serving\n      - style-ab-serving\n    properties:\n      image: fogdong/style-serving:v1\n      exposeType: LoadBalancer\n      env:\n        - name: URL\n          value: http://ambassador.vela-system.svc.cluster.local/seldon/default/color-ab-serving/v1/models/my-model:predict\n      ports:\n        - port: 3333\n          expose: true\n')),(0,r.kt)("p",null,"After successful deployment, view the address of the model serving through ",(0,r.kt)("inlineCode",{parentName:"p"},"vela status <app-name> --endpoint"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status color-style-ab-serving --endpoint\n\n+---------+---------------------------------+-------------------------------------------------------+\n| CLUSTER |    REF(KIND/NAMESPACE/NAME)     |                       ENDPOINT                        |\n+---------+---------------------------------+-------------------------------------------------------+\n|         | Service/vela-system/ambassador  | http://47.251.36.228/seldon/default/color-ab-serving  |\n|         | Service/vela-system/ambassador  | https://47.251.36.228/seldon/default/color-ab-serving |\n|         | Service/vela-system/ambassador  | http://47.251.36.228/seldon/default/style-ab-serving  |\n|         | Service/vela-system/ambassador  | https://47.251.36.228/seldon/default/style-ab-serving |\n|         | Service/default/ab-rest-serving | tcp://47.251.5.97:3333                                |\n+---------+---------------------------------+-------------------------------------------------------+\n")),(0,r.kt)("p",null,"In this application, the two services have two addresses each, but the model service address of the second ",(0,r.kt)("inlineCode",{parentName:"p"},"style-ab-serving")," is invalid because the model service is already pointed to the address of ",(0,r.kt)("inlineCode",{parentName:"p"},"color-ab-serving")," . Again, we see how it works by requesting the test service."),(0,r.kt)("p",null,"First, without the header, the image changes from black and white to color:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(57277).Z})),(0,r.kt)("p",null,"Let's add an image of an ocean wave as a style render:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(26504).Z})),(0,r.kt)("p",null,"We add the Header of ",(0,r.kt)("inlineCode",{parentName:"p"},"style: transfer")," to this request, and you can see that the city has become a wave style:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(77125).Z})),(0,r.kt)("p",null,"We can also use an ink painting image as a style rendering:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(30752).Z})),(0,r.kt)("p",null,"It can be seen that this time the city has become an ink painting style:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(10060).Z})),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Through KubeVela's AI plug-in, it can help you to perform model training and model serving more conveniently."),(0,r.kt)("p",null,"In addition, together with KubeVela, we can also deliver the tested model to different environments through KubeVela's multi-environment function, so as to realize the flexible deployment of the model."))}m.isMDXComponent=!0},57277:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ab-request1-05b112438a860a7e590f9922add14c46.png"},77125:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ab-request2-9eb2e8760112fe66bcaf742fb97d4248.png"},10060:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ab-request3-09e8be352e5bef4a239b1ab2bfa211da.png"},78710:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ai-addon-en-5857a7d1438f1c37dd3b5d3d477a5f8e.png"},98435:function(e,n,t){"use strict";n.Z=t.p+"assets/images/canary-request1-de4f9f1c4f81b200f2827e5277e8bc60.png"},9656:function(e,n,t){"use strict";n.Z=t.p+"assets/images/canary-request2-1ce63a83354786cb7e9f56891002771a.png"},10462:function(e,n,t){"use strict";n.Z=t.p+"assets/images/chicago-grey-9beb20b9876bfbb19f12ccb570ad3e77.png"},30752:function(e,n,t){"use strict";n.Z=t.p+"assets/images/chinese-style-e6c8e27f2f4d33f707a58d3f274bde7a.jpg"},4495:function(e,n,t){"use strict";n.Z=t.p+"assets/images/test-request-d575b2a24081dc7da768f9dd8fd18572.png"},26504:function(e,n,t){"use strict";n.Z=t.p+"assets/images/wave-25ac6d548667b746e5349d29e39b915e.jpg"},634:function(e,n,t){"use strict";n.Z=t.p+"assets/images/woman-grey-7d5fe53e7da342e9136cf2473d2c4f8b.png"}}]);