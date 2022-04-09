(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[61605],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(r),d=n,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},53590:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o={title:"Continuous Delivery from Image Registry"},s={unversionedId:"tutorials/trigger",id:"tutorials/trigger",isDocsHomePage:!1,title:"Continuous Delivery from Image Registry",description:"Introduction",source:"@site/docs/tutorials/trigger.md",sourceDirName:"tutorials",slug:"/tutorials/trigger",permalink:"/docs/next/tutorials/trigger",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/trigger.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1642423889,formattedLastUpdatedAt:"1/17/2022",frontMatter:{title:"Continuous Delivery from Image Registry"},sidebar:"docs",previous:{title:"Working with Jenkins",permalink:"/docs/next/tutorials/jenkins"},next:{title:"Manage Workflow",permalink:"/docs/next/tutorials/workflows"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Create Application",id:"create-application",children:[]},{value:"Create Triggers for Application",id:"create-triggers-for-application",children:[]},{value:"Setup Harbor Trigger",id:"setup-harbor-trigger",children:[]},{value:"Test and Apply",id:"test-and-apply",children:[]},{value:"Summary",id:"summary",children:[]}],c={toc:l};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In our daily development, when image tags changed, it is more convenient for CI/CD if the environments can automatically deploy the new image. KubeVela provides this mechanism."),(0,i.kt)("p",null,"In KubeVela 1.2, ",(0,i.kt)("a",{parentName:"p",href:"../install#3-install-velaux"},"VelaUX")," provides a good way to do this. We can use KubeVela triggers to apply applications automatically."),(0,i.kt)("p",null,"In this section, we will use GitLab as code repository and Harbor as image repository to integrate with KubeVela triggers, as a result, it will automatically update application when image tags changed."),(0,i.kt)("h2",{id:"create-application"},"Create Application"),(0,i.kt)("p",null,"To use triggers, we need to create a new application on VelaUX first. We can create a new WebService type application and use LoadBalancer to expose port 80 for access."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(3604).Z})),(0,i.kt)("h2",{id:"create-triggers-for-application"},"Create Triggers for Application"),(0,i.kt)("p",null,"After creating the application, use ",(0,i.kt)("inlineCode",{parentName:"p"},"New Trigger")," to create a trigger. Here we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Harbor")," as payload type to support requests from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Harbor")," image registry."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(1100).Z})),(0,i.kt)("p",null,"Check the details of the trigger, you can see the specific Webhook URL and the manual trigger command."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(75758).Z})),(0,i.kt)("h2",{id:"setup-harbor-trigger"},"Setup Harbor Trigger"),(0,i.kt)("p",null,"Harbor payload triggers need to cooperate with Harbor image registry. After creating a trigger of type Harbor, we can copy the Webhook URL of the trigger and configure it in the Harbor image registry."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(64926).Z})),(0,i.kt)("h2",{id:"test-and-apply"},"Test and Apply"),(0,i.kt)("p",null,"After these setups, we can now test the trigger."),(0,i.kt)("p",null,"Let's start by looking at the current app page, you can directly jump to the LoadBalancer address through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Endpoint")," of the application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(36187).Z})),(0,i.kt)("p",null,"As you can see, the current Demo application's version is ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.0.0"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(68761).Z})),(0,i.kt)("p",null,"This source code of this demo is on the ","[GitLab]"," (",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/FogDong/KubeVela-GitOps-Demo-Code"},"https://gitlab.com/FogDong/KubeVela-GitOps-Demo-Code"),"). There is also a CI file in this repo, in which steps are simple, every time the code is updated, it will automatically build the image and pushed to the image registry."),(0,i.kt)("p",null,"We can change the version in the code to ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"data(){\n    return {\n      v: 'v2.0.0',\n    }\n  },\n")),(0,i.kt)("p",null,"After changing the code, the GitLab CI will automatically build the image and push it to the image registry."),(0,i.kt)("p",null,"In the access log of the Harbor trigger, we can see that Harbor sends a request to our Webhook URL when the latest image is pushed to the image registry."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(23883).Z})),(0,i.kt)("p",null,"Check the application revisions in VelaUX, you can see that the most recent revision was from ",(0,i.kt)("inlineCode",{parentName:"p"},"Webhook"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(82250).Z})),(0,i.kt)("p",null,"Looking back at the app page, you can see that the app version has changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0")," and the background of the page has changed with the version."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(27785).Z})),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The KubeVela triggers' combination with the image registry is smooth and seamless. In addition to Harbor, KubeVela also supports ACR registry and custom trigger payload types."),(0,i.kt)("p",null,"With KubeVela triggers, we can easily apply application based on image tags automatically and complete iterations of application versions."))}p.isMDXComponent=!0},68761:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-appv1-b03cc90ba647e4f95751b1859a0ab262.png"},27785:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-appv2-34fd8a1fe732693afab3dfec0726dbc8.png"},36187:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-endpoints-721d7b7338443866723aa5e9efad1d6a.png"},75758:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-info-7cb29a072f544e98ffb0a41e17e7c5fd.png"},3604:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-newapp-37351acbac4f76cdc209e47184a16d9c.png"},23883:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-harborrecord-f644ee54d5904f4d0cca7c9b54811721.png"},1100:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-newtrigger-1294a428077c9ce0e981d2ab1e27f4ad.png"},82250:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-revisions-6c7e199a9e928cd3f0f4b30a4159613d.png"},64926:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-6bba927c7425b4524c0d9f2c7a228a50.png"}}]);