(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[39628],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39873:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),l={title:"Easily Manage your Application Shipment With Differentiated Configuration in Multi-Cluster",author:"Wei Duan",author_title:"KubeVela Team",author_url:"https://github.com/oam-dev/KubeVela",author_image_url:"https://KubeVela.io/img/logo.svg",tags:["KubeVela"],description:"",image:"https://raw.githubusercontent.com/oam-dev/KubeVela.io/main/docs/resources/KubeVela-03.png",hide_table_of_contents:!1},o={permalink:"/blog/2022/04/06/multi-cluster-management",editUrl:"https://github.com/oam-dev/kubevela.io/tree/main/blog/2022-04-06-multi-cluster-management.md",source:"@site/blog/2022-04-06-multi-cluster-management.md",title:"Easily Manage your Application Shipment With Differentiated Configuration in Multi-Cluster",description:"",date:"2022-04-06T00:00:00.000Z",formattedDate:"April 6, 2022",tags:[{label:"KubeVela",permalink:"/blog/tags/kube-vela"}],readingTime:6.18,truncated:!1,nextItem:{title:"China Merchants Bank's Practice on Offline Installation with KubeVela",permalink:"/blog/2022/04/01/offline-deployment-practice copy"}},s=[{value:"Before Starting",id:"before-starting",children:[]},{value:"Distribute to Multiple Specified Clusters",id:"distribute-to-multiple-specified-clusters",children:[]},{value:"Use Cluster Labels to Do Grouping",id:"use-cluster-labels-to-do-grouping",children:[]},{value:"Differentiated Configuration",id:"differentiated-configuration",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Under today's multi-cluster business scene, we often encounter these typical requirements: distribute to multiple specific clusters, specific group distributions according to business need, and differentiated configurations for multi-clusters."),(0,r.kt)("p",null,"KubeVela v1.3 iterates based on the previous multi-cluster function. This article will reveal how to use it to do swift multiple clustered deployment and management to address all your anxieties."),(0,r.kt)("h3",{id:"before-starting"},"Before Starting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare a Kubernetes cluster as the control plane of KubeVela."),(0,r.kt)("li",{parentName:"ol"},"Make sure ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases/tag/v1.3.0"},"KubeVela v1.3")," and KubeVela CLI v1.3.0 have been installed successfully."),(0,r.kt)("li",{parentName:"ol"},"The list of Kubeconfig from sub clusters that you want to manage. We will take three clusters naming beijing-1, beijing-2 and us-west-1 as examples."),(0,r.kt)("li",{parentName:"ol"},"Download and combine with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/sample/tree/master/12.multi_cluster_demo"},"Multi-Cluster-Demo")," to better understand how to use the KubeVela multi-cluster capabilities.")),(0,r.kt)("h3",{id:"distribute-to-multiple-specified-clusters"},"Distribute to Multiple Specified Clusters"),(0,r.kt)("p",null,"Distributing multiple specified clusters is the most basic multi-cluster management operation. In KubeVela, you will use a policy called ",(0,r.kt)("inlineCode",{parentName:"p"},"topology")," to implement it. The cluster will be listed in the attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"clusters"),", an array."),(0,r.kt)("p",null,"First let's make sure switching kubeconfig to the control plane cluster, go with ",(0,r.kt)("inlineCode",{parentName:"p"},"vela cluster join")," to include in the 3 clusters of Beijing-1, Beijing-2 and us-west-1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c   vela cluster join beijing-1.kubeconfig --name beijing-1\n\u279c   vela cluster join beijing-2.kubeconfig --name beijing-2\n\u279c   vela cluster join us-west-1.kubeconfig --name us-west-1\n\u279c   vela cluster list\nCLUSTER         TYPE            ENDPOINT                    ACCEPTED    LABELS\nbeijing-1       X509Certificate https://47.95.22.71:6443    true\nbeijing-2       X509Certificate https://47.93.117.83:6443   true\nus-west-1       X509Certificate https://47.88.31.118:6443   true\n")),(0,r.kt)("p",null,"Then open multi-cluster-demo, look into ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: example-app\n  namespace: default\nspec:\n  components:\n    - name: hello-world-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: scaler\n          properties:\n            replicas: 3\n        - type: gateway\n          properties:\n            domain: testsvc-mc.example.com\n            # classInSpec : true   If the sub clusters has Kubernetes versions below v1.20 installed, please add this field\n            http:\n              "/": 8000\n  policies:\n    - type: topology\n      name: beijing-clusters\n      properties:\n        clusters: ["beijing-1","beijing-2"]\n')),(0,r.kt)("p",null,"It can be seen that this app uses the component of type ",(0,r.kt)("inlineCode",{parentName:"p"},"webservice")," and distributes 3 Deployments to beijing-1 and beijing-2 clusters through the ",(0,r.kt)("inlineCode",{parentName:"p"},"topology")," policy."),(0,r.kt)("p",null,"Please note that the premise of successfully distributing resource into managed clusters is that it must contain the exactly same namespace as control plane did.  Since each cluster has the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"default"))," namespace by default, we won't be worry in this case. But suppose we change the namespace in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"basic.yaml"))," to be ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"multi-cluster")),", we will receive an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'... \n Status:        runningWorkflow\n\nWorkflow:\n\n  mode: DAG\n  finished: false\n  Suspend: false\n  Terminated: false\n  Steps\n  - id:9fierfkhsc\n    name:deploy-beijing-clusters\n    type:deploy\n    phase:failed\n    message:step deploy: step deploy: run step(provider=oam,do=components-apply): Found 1 errors. [(failed to apply component beijing-1-multi-cluster-0: HandleComponentsRevision: failed to create componentrevision beijing-1/multi-cluster/hello-world-server-v1: namespaces "multi-cluster" not found)]\n\nServices:\n...\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In future versions of KubeVela, we plan to support a comprehensive Authentication System, more convenient and more securely to: create namespaces in managed cluster through the hub cluster in quick moves.")),(0,r.kt)("p",null,"After creating the sub cluster's namespace, come back to the control plane cluster to create the application and ship out resources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u279c   vela up -f basic.yaml\nApplying an application in vela K8s object format...\n"patching object" name="example-app" resource="core.oam.dev/v1beta1, Kind=Application"\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward example-app\n             SSH: vela exec example-app\n         Logging: vela logs example-app\n      App status: vela status example-app\n  Service status: vela status example-app --svc hello-world-server\n')),(0,r.kt)("p",null,"We use ",(0,r.kt)("inlineCode",{parentName:"p"},"vela status <App Name>")," to view detailed infos about this app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c   vela status example-app\nAbout:\n\n  Name:         example-app\n  Namespace:    default\n  Created at:   2022-03-25 17:42:33 +0800 CST\n  Status:       running\n\nWorkflow:\n\n  mode: DAG\n  finished: true\n  Suspend: false\n  Terminated: false\n  Steps\n  - id:wftf9d4exj\n    name:deploy-beijing-clusters\n    type:deploy\n    phase:succeeded\n    message:\n\nServices:\n\n  - Name: hello-world-server\n    Cluster: beijing-1  Namespace: default\n    Type: webservice\n    Healthy Ready:3/3\n    Traits:\n      \u2705 scaler      \u2705 gateway: Visiting URL: testsvc-mc.example.com, IP: 60.205.222.30\n  - Name: hello-world-server\n    Cluster: beijing-2  Namespace: default\n    Type: webservice\n    Healthy Ready:3/3\n    Traits:\n      \u2705 scaler      \u2705 gateway: Visiting URL: testsvc-mc.example.com, IP: 182.92.222.128\n")),(0,r.kt)("p",null,"Both the beijing-1 and beijing-2 have issued the corresponding resources, they also displayed external access IP addresses, and you can therefore make it public for your users."),(0,r.kt)("h3",{id:"use-cluster-labels-to-do-grouping"},"Use Cluster Labels to Do Grouping"),(0,r.kt)("p",null,"In addition to the above basic need, we often encounter additional situations: cross-regional deployment to certain clusters, specify which cloud provider's cluster, etc. In order to achieve a similar goal, the ",(0,r.kt)("inlineCode",{parentName:"p"},"labels")," feature can be used."),(0,r.kt)("p",null,"Here, suppose the us-west-1 cluster comes from AWS, we must additionally apply to the AWS cluster. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"vela cluster labels add")," command to tag the cluster. Of course, if there is more of AWS related clusters such as us-west-2, it will be handled as well after they were labeled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  ~ vela cluster labels add us-west-1 provider=AWS\nSuccessfully update labels for cluster us-west-1 (type: X509Certificate).\nprovider=AWS\n\u279c  ~ vela cluster list\nCLUSTER         TYPE            ENDPOINT                    ACCEPTED    LABELS\nbeijing-1       X509Certificate https://47.95.22.71:6443    true\nbeijing-2       X509Certificate https://47.93.117.83:6443   true\nus-west-1       X509Certificate https://47.88.31.118:6443   true        provider=AWS\n")),(0,r.kt)("p",null,"Next we update the ",(0,r.kt)("inlineCode",{parentName:"p"},"basic.yaml")," to add an application policy ",(0,r.kt)("inlineCode",{parentName:"p"},"topology-aws"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'...\n  policies:\n    - type: topology\n      name: beijing-clusters\n      properties:\n        clusters: ["beijing-1","beijing-2"]\n    - type: topology\n      name: topology-aws\n      properties:\n        clusterLabelSelector:\n          provider: AWS\n')),(0,r.kt)("p",null,"In order save your time, please deploy ",(0,r.kt)("inlineCode",{parentName:"p"},"intermediate.yaml")," directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  ~ vela up -f intermediate.yaml\n")),(0,r.kt)("p",null,"Review the status of the application again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c   vela status example-app\n\n...\n\n  - Name: hello-world-server\n    Cluster: us-west-1  Namespace: default\n    Type: webservice\n    Healthy Ready:3/3\n    Traits:\n      \u2705 scaler      \u2705 gateway: Visiting URL: testsvc-mc.example.com, IP: 192.168.40.10\n\n")),(0,r.kt)("h3",{id:"differentiated-configuration"},"Differentiated Configuration"),(0,r.kt)("p",null,"Apart from above scenarios, we tend to have more application strategic needs, such as high availability of hoping to distribute 5 replicas. In this case, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"override")," policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"...        \n        clusterLabelSelector:\n          provider: AWS\n    -  type: override\n       name: override-high-availability\n       properties:\n          components:\n            - type: webservice\n              traits:\n              - type: scaler\n                properties:\n                  replicas: 5\n")),(0,r.kt)("p",null,"At the same time, we hope that only AWS clusters can get high availability. Then we can expect KubeVela's workflow give us a hand. We use the following workflow: it aims to deploy this app by, first distributing to Beijing's clusters through the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy-beijing")," policy, then distributing 5 copies to clusters which were labeled as AWS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'...                \n                properties:\n                  replicas: 5\n  workflow:\n    steps:\n      - type: deploy\n        name: deploy-beijing\n        properties:\n          policies: ["beijing-clusters"]\n      - type: deploy\n        name: deploy-aws\n        properties:\n          policies: ["override-high-availability","topology-aws"]\n')),(0,r.kt)("p",null,"Then we attach the above policy and workflow to ",(0,r.kt)("inlineCode",{parentName:"p"},"intermediate.yaml")," and make it to ",(0,r.kt)("inlineCode",{parentName:"p"},"advanced.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'...\n  policies:\n    - type: topology\n      name: beijing-clusters\n      properties:\n        clusters: ["beijing-1","beijing-2"]\n    - type: topology\n      name: topology-aws\n      properties:\n        clusterLabelSelector:\n          provider: AWS\n    -  type: override\n       name: override-high-availability\n       properties:\n          components:\n            - type: webservice\n              traits:\n              - type: scaler\n                properties:\n                  replicas: 5\n  workflow:\n    steps:\n      - type: deploy\n        name: deploy-beijing\n        properties:\n          policies: ["beijing-clusters"]\n      - type: deploy\n        name: deploy-aws\n        properties:\n          policies: ["override-high-availability","topology-aws"]\n')),(0,r.kt)("p",null,"Then deploy it, view the status of the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u279c   vela up -f advanced.yaml\nApplying an application in vela K8s object format...\n"patching object" name="example-app" resource="core.oam.dev/v1beta1, Kind=Application"\n\u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n    Port forward: vela port-forward example-app\n             SSH: vela exec example-app\n         Logging: vela logs example-app\n      App status: vela status example-app\n  Service status: vela status example-app --svc hello-world-serverapplication.core.oam.dev/podinfo-app configured\n  \n\u279c   vela status example-app\n\n...\n\n  - Name: hello-world-server\n    Cluster: us-west-1  Namespace: default\n    Type: webservice\n    Healthy Ready:5/5\n    Traits:\n      \u2705 scaler      \u2705 gateway: Visiting URL: testsvc-mc.example.com, IP: 192.168.40.10\n\n')),(0,r.kt)("p",null,"The above all are what we'd like to share with you for this time, thank you for reading and trying them out."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/install"},"We invite you to explore KubeVela v1.3 for more")," to meet further complex requirements on business, such as ",(0,r.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/next/case-studies/multi-cluster#override-default-configurations-in-clusters"},"dig deep")," in differentiated configurations to use ",(0,r.kt)("inlineCode",{parentName:"p"},"override")," application policy to either override all resources on one type or only certain specific components."))}u.isMDXComponent=!0}}]);