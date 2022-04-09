(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[78414],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86319:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"Performance Fine-tuning"},l={unversionedId:"platform-engineers/system-operation/performance-finetuning",id:"version-v1.2/platform-engineers/system-operation/performance-finetuning",isDocsHomePage:!1,title:"Performance Fine-tuning",description:"Recommended Configurations",source:"@site/versioned_docs/version-v1.2/platform-engineers/system-operation/performance-finetuning.md",sourceDirName:"platform-engineers/system-operation",slug:"/platform-engineers/system-operation/performance-finetuning",permalink:"/docs/v1.2/platform-engineers/system-operation/performance-finetuning",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/system-operation/performance-finetuning.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642176699,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Performance Fine-tuning"},sidebar:"version-v1.2/docs",previous:{title:"Observability",permalink:"/docs/v1.2/platform-engineers/system-operation/observability"},next:{title:"VelaQL",permalink:"/docs/v1.2/platform-engineers/system-operation/velaql"}},c=[{value:"Recommended Configurations",id:"recommended-configurations",children:[]},{value:"Fine-tuning Methods",id:"fine-tuning-methods",children:[]},{value:"Advanced Optimization",id:"advanced-optimization",children:[]}],p={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"recommended-configurations"},"Recommended Configurations"),(0,o.kt)("p",null,"When cluster scale becomes large and more applications are needed for managing, KubeVela controller performance might have bottleneck problems due to inappropriate parameters."),(0,o.kt)("p",null,"According to the KubeVela performance test, three sets of parameters are recommended in clusters with different scales as below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Scale"),(0,o.kt)("th",{parentName:"tr",align:"right"},"#Nodes"),(0,o.kt)("th",{parentName:"tr",align:"right"},"#Apps"),(0,o.kt)("th",{parentName:"tr",align:"right"},"#Pods"),(0,o.kt)("th",{parentName:"tr",align:"right"},"concurrent-reconciles"),(0,o.kt)("th",{parentName:"tr",align:"center"},"kube-api-qps"),(0,o.kt)("th",{parentName:"tr",align:"right"},"kube-api-burst"),(0,o.kt)("th",{parentName:"tr",align:"right"},"CPU"),(0,o.kt)("th",{parentName:"tr",align:"right"},"Memory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Small"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 200"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 3,000"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 18,000"),(0,o.kt)("td",{parentName:"tr",align:"right"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"300"),(0,o.kt)("td",{parentName:"tr",align:"right"},"500"),(0,o.kt)("td",{parentName:"tr",align:"right"},"0.5"),(0,o.kt)("td",{parentName:"tr",align:"right"},"1Gi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Medium"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 500"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 5,000"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 30,000"),(0,o.kt)("td",{parentName:"tr",align:"right"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"500"),(0,o.kt)("td",{parentName:"tr",align:"right"},"800"),(0,o.kt)("td",{parentName:"tr",align:"right"},"1"),(0,o.kt)("td",{parentName:"tr",align:"right"},"2Gi")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Large"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 1,000"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 12,000"),(0,o.kt)("td",{parentName:"tr",align:"right"},"< 72,000"),(0,o.kt)("td",{parentName:"tr",align:"right"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"800"),(0,o.kt)("td",{parentName:"tr",align:"right"},"1,000"),(0,o.kt)("td",{parentName:"tr",align:"right"},"2"),(0,o.kt)("td",{parentName:"tr",align:"right"},"4Gi")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The above configurations are based on medium size applications (each application contains 2~3 components and 5~6 resources). If the applications in your scenario are generally larger, e.g., containing 20 resources, then you could increase the application number accordingly to find the appropriate configuration and parameters.")),(0,o.kt)("h3",{id:"fine-tuning-methods"},"Fine-tuning Methods"),(0,o.kt)("p",null,"You might encounter various performance bottlenecks. Read the following examples and try to find the proper solution for your problem."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Applications could be created. Its managed resources are available but indirect resources are not. For example, Deployments in webservice are successfully created but Pods are not. You could check kube-controller-manager and see if there is performance bottleneck problems with it."),(0,o.kt)("li",{parentName:"ol"},"Applications could be created. Its managed resources are not available and there is no rendering problem with the application. Check if apiserver has lots of requests waiting in queue. The mutating requests for managed resources might be blocked at apiserver."),(0,o.kt)("li",{parentName:"ol"},"Applications could be found in cluster but no status information could be displayed. If there is no problem with the application content, it might be caused by the KubeVela controller bottleneck, such as limiting requests to apiserver. Increase ",(0,o.kt)("strong",{parentName:"li"},"kube-api-qps / kube-api-burst")," and check if CPU is overloaded. If CPU is not overloaded, check if the thread number is below the number of CPU cores."),(0,o.kt)("li",{parentName:"ol"},"KubeVela Controller itself could crash frequently due to Out-Of-Memory. Increase the memory to solve it.")),(0,o.kt)("h3",{id:"advanced-optimization"},"Advanced Optimization"),(0,o.kt)("p",null,"Although KubeVela has a bunch of capabilities, users might only use part of them. Some optimization techniques will harm part of the funcationalities but can help improve the performance of the others. For example, you might not need application rollback. Then you can turn off the ApplicationRevision to save the storage and computation. A list of optional optimization parameters are shown below. You can customize your KubeVela controller by setting some of them."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Arg"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-cached-gvks"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Types of resources to be cached. For example, --optimize-cached-gvks=Deployment.v1.apps,Job.v1.batch . If you have dedicated resources to be managed in your system, you can turn it on to improve performance. NOTE: this optimization only works for single-cluster. It will increase the memory cost of KubeVela controller.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-resource-tracker-list-op"),(0,o.kt)("td",{parentName:"tr",align:"center"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize ResourceTracker List Op by adding index. This will increase the use of memory and accelerate the list operation of ResourceTracker. Default to enable it . If you want to reduce the memory use of KubeVela, you can switch it off.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-controller-reconcile-loop-reduction"),(0,o.kt)("td",{parentName:"tr",align:"center"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize ApplicationController reconcile by reducing the number of loops to reconcile application. In detail, reconciles after finalizer patching and workflow finished will not return immediately but will continue running. If you do not care about the occasional re-run of workflow, you can switch it on to further improve KubeVela controller performance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-mark-with-prob"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize ResourceTracker GC by only run mark with probability. Side effect: outdated ResourceTracker might not be able to be removed immediately. Default to 0.1. If you want to cleanup outdated resource for keepLegacyResource mode immediately, set it to 1.0 to disable this optimization.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-disable-component-revision"),(0,o.kt)("td",{parentName:"tr",align:"center"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize ComponentRevision by disabling the creation and gc. Side effect: rollout cannot be used. If you don't use rollout trait, you can switch it on to reduce the storage and improve performance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-disable-application-revision"),(0,o.kt)("td",{parentName:"tr",align:"center"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize ApplicationRevision by disabling the creation and gc. Side effect: application cannot rollback. If you don't need to rollback applications, you can switch it on to reduce the storage and improve performance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-disable-workflow-recorder"),(0,o.kt)("td",{parentName:"tr",align:"center"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize workflow recorder by disabling the creation and gc. Side effect: workflow will not record application after finished running. If you do not use VelaUX, you can switch it on to improve performance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-enable-in-memory-workflow-context"),(0,o.kt)("td",{parentName:"tr",align:"center"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize workflow by use in-memory context. Side effect: controller crash will lead to workflow run again from scratch and possible to cause mistakes in workflow inputs/outputs. You can use this optimization when you don't use input/output feature of workflow.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-disable-resource-apply-double-check"),(0,o.kt)("td",{parentName:"tr",align:"center"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize workflow by ignoring resource double check after apply. Side effect: controller will not wait for resource creation. If you want to use KubeVela to dispatch tons of resources and do not need to double check the creation result, you can enable this optimization.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"optimize-enable-resource-tracker-delete-only-trigger"),(0,o.kt)("td",{parentName:"tr",align:"center"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Optimize resourcetracker by only trigger reconcile when resourcetracker is deleted. It is enabled by default. If you want to integrate KubeVela with your own operator or allow ResourceTracker manual edit, you can turn it off.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Read more details in ",(0,o.kt)("a",{parentName:"p",href:"/blog/2021/08/30/kubevela-performance-test"},"KubeVela Performance Test Report"))))}m.isMDXComponent=!0}}]);