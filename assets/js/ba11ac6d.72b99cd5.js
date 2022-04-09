(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[21963],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?i.createElement(h,r(r({ref:n},c),{},{components:t})):i.createElement(h,r({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81845:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var i=t(22122),a=t(19756),o=(t(67294),t(3905)),r={title:"Initialize/Destroy Environment"},l={unversionedId:"case-studies/initialize-env",id:"version-v1.3/case-studies/initialize-env",isDocsHomePage:!1,title:"Initialize/Destroy Environment",description:"This section will introduce what is environment and how to initialize and destroy an environment with KubeVela easily.",source:"@site/versioned_docs/version-v1.3/case-studies/initialize-env.md",sourceDirName:"case-studies",slug:"/case-studies/initialize-env",permalink:"/docs/case-studies/initialize-env",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/case-studies/initialize-env.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Initialize/Destroy Environment"},sidebar:"version-v1.3/docs",previous:{title:"GitOps",permalink:"/docs/case-studies/gitops"},next:{title:"Core Concept",permalink:"/docs/getting-started/core-concept"}},s=[{value:"What is environment",id:"what-is-environment",children:[]},{value:"How to use",id:"how-to-use",children:[{value:"Directly use Application for initialization",id:"directly-use-application-for-initialization",children:[]},{value:"Add initialize workflow in application",id:"add-initialize-workflow-in-application",children:[]}]},{value:"Destroy the Environment",id:"destroy-the-environment",children:[]}],p={toc:s};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section will introduce what is environment and how to initialize and destroy an environment with KubeVela easily."),(0,o.kt)("h2",{id:"what-is-environment"},"What is environment"),(0,o.kt)("p",null,"An Application development team usually needs to initialize some shared environment for users. An environment is a logical concept that represents a set of common resources for Applications."),(0,o.kt)("p",null,"For example, a team usually wants two environments: one for development, and one for production."),(0,o.kt)("p",null,"In general, the resource types that can be initialized include the following types:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"One or more Kubernetes clusters. Different environments may need different sizes and versions of Kubernetes clusters. Environment initialization can also manage multiple clusters .")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Any type of Kubernetes custom resources (CRDs) and system plug-ins can be set up in environment initialization.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"All kinds of shared resources and services.  For example. shared resources in microservices. These shared resources can be a microservice component, cloud database, cache, load balancer, API gateway, and so on.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Various management policies and processes. An environment may have different global policies. The policy can be chaos test, security scan, SLO and son on; the process can be initializing a database table, registering an automatic discovery configuration, and so on."))),(0,o.kt)("p",null,"KubeVela allows you to use different resources to initialize the environment."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Policy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Workflow")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),". Note that there may be dependencies between initializations, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"depends-on-app")," in workflow to do it."),(0,o.kt)("p",null,"The initialization of different environments has dependencies. Common resources can be separated as dependencies. In this way, reusable initialization modules can be formed."),(0,o.kt)("p",null,"For example, if both the test and develop environments rely on the same controllers, these controllers can be pulled out and initialized as separate environments, specifying dependency initialization in both the development and test environments."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("h3",{id:"directly-use-application-for-initialization"},"Directly use Application for initialization"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Make sure your KubeVela version is ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.1.6+"),".")),(0,o.kt)("p",null,"If we want to use some CRD controller like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"OpenKruise")," in cluster, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Helm")," to initialize ",(0,o.kt)("inlineCode",{parentName:"p"},"kruise"),"."),(0,o.kt)("p",null,"We can directly use Application to initialize a kruise environment. The application below will deploy a kruise controller in cluster."),(0,o.kt)("p",null,"We have to enable ",(0,o.kt)("inlineCode",{parentName:"p"},"fluxcd")," in cluster since we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Helm")," to deploy kruise.\nWe can use ",(0,o.kt)("inlineCode",{parentName:"p"},"depends-on-app")," to make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"fluxcd")," is deployed before kruise."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"depends-on-app")," will check if the cluster has the application with ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," defines in ",(0,o.kt)("inlineCode",{parentName:"p"},"properties"),".\nIf the application exists, the next step will be executed after the application is running.\nIf the application do not exists, KubeVela will check the ConfigMap with the same name, and read the config of the Application and apply to cluster.\nFor more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"../end-user/workflow/built-in-workflow-defs#depends-on-app"},"depends-on-app"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | vela up -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: kruise\n  namespace: vela-system\nspec:\n  components:\n  - name: kruise\n    type: helm\n    properties:\n      branch: master\n      chart: ./charts/kruise/v0.9.0\n      version: "*"\n      repoType: git\n      url: https://github.com/openkruise/kruise\n  workflow:\n    steps:\n    - name: check-flux\n      type: depends-on-app\n      properties:\n        name: fluxcd\n        namespace: vela-system\n    - name: apply-kruise\n      type: apply-component\n      properties:\n        component: kruise\nEOF\n')),(0,o.kt)("p",null,"Check the application in cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls -n vela-system\nAPP                 COMPONENT       TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME\nkruise              ...             raw           running           healthy         2021-09-24 20:59:06 +0800 CST\nfluxcd              ...             raw           running           healthy         2021-09-24 20:59:06 +0800 CST\n")),(0,o.kt)("p",null,"Kruise is running successfully! Then you can use kruise in your cluster. If you need to set up a new environment, the only thing you need to do is to apply the files like above."),(0,o.kt)("h3",{id:"add-initialize-workflow-in-application"},"Add initialize workflow in application"),(0,o.kt)("p",null,"Some Kubernetes native resources like ConfigMap/PVC are commonly used in the environment."),(0,o.kt)("p",null,"If you want to apply those resources before deploying your application, you can add an initialization workflow to your application."),(0,o.kt)("p",null,"KubeVela provides a built-in workflow step ",(0,o.kt)("inlineCode",{parentName:"p"},"apply-object")," to fill in native Kubernetes resources.\nIn this way, by filling in Kubernetes native resources, we can avoid writing redundant component definitions."),(0,o.kt)("p",null,"Apply the following application, it will initialize an environment with ConfigMap/PVC. There is two components in this application, the first one will write data to PVC, the second on will read the data from PVC:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: server-with-pvc-and-cm\n  namespace: default\nspec:\n  components:\n  - name: log-gen-worker\n    type: worker\n    properties:\n      image: busybox\n      cmd:\n        - /bin/sh\n        - -c\n        - >\n          i=0;\n          while true;\n          do\n            echo "$i: $(date)" >> /test-pvc/date.log;\n            i=$((i+1));\n            sleep 1;\n          done\n      volumes:\n        - name: "my-pvc"\n          type: "pvc"\n          mountPath: "/test-pvc"\n          claimName: "my-claim"\n        - name: "my-configmap"\n          type: "configMap"\n          mountPath: "/test-cm"\n          cmName: "my-cm"\n          items:\n            - key: test-key\n              path: test-key\n  - name: log-read-worker\n    type: worker\n    properties:\n      name: count-log\n      image: busybox\n      cmd: \n        - /bin/sh\n        - -c\n        - \'tail -n+1 -f /test-pvc/date.log\'\n      volumes:\n        - name: "my-pvc"\n          type: "pvc"\n          mountPath: "/test-pvc"\n          claimName: "my-claim"\n        - name: "my-configmap"\n          type: "configMap"\n          mountPath: "/test-cm"\n          cmName: "my-cm"\n          items:\n            - key: test-key\n              path: test-key\n\n  workflow:\n    steps:\n      - name: apply-pvc\n        type: apply-object\n        properties:\n          apiVersion: v1\n          kind: PersistentVolumeClaim\n          metadata:\n            name: my-claim\n            namespace: default\n          spec:\n            accessModes:\n            - ReadWriteOnce\n            resources:\n              requests:\n                storage: 8Gi\n            storageClassName: standard\n      - name: apply-cm\n        type: apply-object\n        properties:\n          apiVersion: v1\n          kind: ConfigMap\n          metadata:\n            name: my-cm\n            namespace: default\n          data:\n            test-key: test-value\n      - name: apply-remaining\n        type: apply-remaining\n')),(0,o.kt)("p",null,"Check the PVC and ConfigMap in cluster\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pvc\nNAME       STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nmy-claim   Bound    pvc-2621d7d7-453c-41df-87fb-58e6b3a8e136   8Gi        RWO            standard       2m53s\n\n$ kubectl get cm\nNAME                                      DATA   AGE\nmy-cm                                     1      3m8s\n")),(0,o.kt)("p",null,"Check the application in cluster\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP                     COMPONENT       TYPE    TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME\nserver-with-pvc-and-cm  log-gen-worker  worker          running healthy         2021-10-11 20:42:38 +0800 CST\n\u2514\u2500                      log-read-worker worker          running                 2021-10-11 20:42:38 +0800 CST\n")),(0,o.kt)("p",null,"Check the logs of the second component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl logs -f log-read-worker-774b58f565-ch8ch\n0: Mon Oct 11 12:43:01 UTC 2021\n1: Mon Oct 11 12:43:02 UTC 2021\n2: Mon Oct 11 12:43:03 UTC 2021\n3: Mon Oct 11 12:43:04 UTC 2021\n4: Mon Oct 11 12:43:05 UTC 2021\n5: Mon Oct 11 12:43:06 UTC 2021\n6: Mon Oct 11 12:43:07 UTC 2021\n7: Mon Oct 11 12:43:08 UTC 2021\n")),(0,o.kt)("p",null,"We can see that both components is running. The two components share the same PVC and use the same ConfigMap."),(0,o.kt)("h2",{id:"destroy-the-environment"},"Destroy the Environment"),(0,o.kt)("p",null,"As we have already modeled the environment as a KubeVela Application, we can destroy the environment easily by deleting the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela delete server-with-pvc-and-cm\n")),(0,o.kt)("p",null,"Then the KubeVela controller will clean up all these resources."))}c.isMDXComponent=!0}}]);