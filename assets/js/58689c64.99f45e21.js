(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[94423],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82372:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Manage Targets"},s={unversionedId:"how-to/dashboard/target/overview",id:"version-v1.2/how-to/dashboard/target/overview",isDocsHomePage:!1,title:"Manage Targets",description:"To deploy application components into different places, VelaUX provides Target for user to manage their deploy destinations like clusters or namespaces.",source:"@site/versioned_docs/version-v1.2/how-to/dashboard/target/overview.md",sourceDirName:"how-to/dashboard/target",slug:"/how-to/dashboard/target/overview",permalink:"/docs/v1.2/how-to/dashboard/target/overview",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/target/overview.md",version:"v1.2",lastUpdatedBy:"Yin Da",lastUpdatedAt:1643447158,formattedLastUpdatedAt:"1/29/2022",frontMatter:{title:"Manage Targets"},sidebar:"version-v1.2/docs",previous:{title:"Integrate with CI system by Triggers",permalink:"/docs/v1.2/how-to/dashboard/trigger/overview"},next:{title:"Deploy First Application",permalink:"/docs/v1.2/end-user/quick-start-cli"}},c=[{value:"Cluster",id:"cluster",children:[]},{value:"Create Target",id:"create-target",children:[]},{value:"Bind Targets in Environment",id:"bind-targets-in-environment",children:[]},{value:"Create Application with Environment",id:"create-application-with-environment",children:[]}],l={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To deploy application components into different places, VelaUX provides ",(0,o.kt)("strong",{parentName:"p"},"Target")," for user to manage their deploy destinations like clusters or namespaces."),(0,o.kt)("h2",{id:"cluster"},"Cluster"),(0,o.kt)("p",null,"First, before configuring Target, you need to ensure your clusters have been joined. You can check your clusters in the Cluster page. The ",(0,o.kt)("strong",{parentName:"p"},"local")," cluster represents the cluster that KubeVela control plane is running on. If you have other clusters, you can either connect those clusters directly to KubeVela by providing their KubeConfig, or join clusters from your cloud provider such as Alibaba Cloud."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"manage-clusters",src:n(97211).Z})),(0,o.kt)("p",null,"After adding clusters in KubeVela, you can edit their descriptions or disconnect them when there is no Application running on them."),(0,o.kt)("h2",{id:"create-target"},"Create Target"),(0,o.kt)("p",null,"Now you can creating Target for deploying your applications. A target identifies a specific namespace in one cluster. If the namespace does not exist in the cluster, you can also create the namespace by clicking the ",(0,o.kt)("strong",{parentName:"p"},"New")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new-target",src:n(13507).Z})),(0,o.kt)("p",null,"If you want to use the cloud resource (such as RDS from alibaba cloud), you can also set the ",(0,o.kt)("em",{parentName:"p"},"Shared Variables")," and fill the provider name and region name in it. Make sure you have related terraform addon installed already."),(0,o.kt)("h2",{id:"bind-targets-in-environment"},"Bind Targets in Environment"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("strong",{parentName:"p"},"Environment")," page and now you can bind your created targets in a environment."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new-environment",src:n(86622).Z})),(0,o.kt)("h2",{id:"create-application-with-environment"},"Create Application with Environment"),(0,o.kt)("p",null,"Now you can use the environent which was bound to the targets just created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bind-env-to-app",src:n(89858).Z})),(0,o.kt)("p",null,"In the newly created application, you will see two targets contained in the workflow, which means when you deploy this application, the component will be dispatch to both targets."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app-with-target",src:n(68305).Z})))}u.isMDXComponent=!0},68305:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-with-target-b304926f1ccae3466b3084ef3f3e5571.jpg"},89858:function(e,t,n){"use strict";t.Z=n.p+"assets/images/bind-env-to-app-90de7a5635a8dbcd3455e805f441fcb5.jpg"},97211:function(e,t,n){"use strict";t.Z=n.p+"assets/images/manage-clusters-6213289637cac22fe8d69e3b10bcf000.jpg"},86622:function(e,t,n){"use strict";t.Z=n.p+"assets/images/new-environment-234d3c5f387019e6b75af908e3e29b55.jpg"},13507:function(e,t,n){"use strict";t.Z=n.p+"assets/images/new-target-27c67c758ab6a95ec69b6bfdadaa9da3.jpg"}}]);