(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[64316],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10174:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"VelaUX Concept"},l={unversionedId:"getting-started/velaux-concept",id:"getting-started/velaux-concept",isDocsHomePage:!1,title:"VelaUX Concept",description:"VelaUX is an addon on top of KubeVela, it works as an out-of-box platform which also brings some more concepts.",source:"@site/docs/getting-started/velaux-concept.md",sourceDirName:"getting-started",slug:"/getting-started/velaux-concept",permalink:"/docs/next/getting-started/velaux-concept",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/getting-started/velaux-concept.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649409805,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"VelaUX Concept"},sidebar:"docs",previous:{title:"Manage Workflow",permalink:"/docs/next/tutorials/workflows"},next:{title:"Create Application",permalink:"/docs/next/how-to/dashboard/application/create-application"}},c=[{value:"Project",id:"project",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Delivery Target",id:"delivery-target",children:[]},{value:"Application",id:"application",children:[{value:"Revision",id:"revision",children:[]}]},{value:"Next Step",id:"next-step",children:[]}],u={toc:c};function s(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"VelaUX is an addon on top of KubeVela, it works as an out-of-box platform which also brings some more concepts."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:n(2806).Z})),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("p",null,"Project is where you manage all the applications and collaborate with your team member. Project is one stand alone scope that separates it from other project."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"Environment refers to the environment for development, testing, and production and it can include multiple Delivery Targets. Only applications in the same environment can visit and share resource with each other."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Bind Application with Environment")," The application can be bound to multiple Environments, and for each environment, you can set the unique parameter difference for each environment.")),(0,i.kt)("h2",{id:"delivery-target"},"Delivery Target"),(0,i.kt)("p",null,"Delivery Target describes the space where the application resources actually delivered. One target describes one Kubernetes cluster and namespace, it can also describe a region or VPC for cloud providers which includes shared variables and machine resources."),(0,i.kt)("p",null,"Kubernetes cluster and Cloud resources are currently the main way for KubeVela application delivery. In one target, credentials of cloud resources created will automatically delievered to the Kubernetes cluster."),(0,i.kt)("h2",{id:"application"},"Application"),(0,i.kt)("p",null,"An application in VelaUX is a bit different with KubeVela, we add lifecycle includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Create")," an application is just create a metadata records, it won't run in real cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Deploy")," an application will bind with specified environment and instantiate application resource into Kubernetes clusters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Recycle")," an application will delete the instance of the application and reclaim its resources from Kubernetes clusters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("b",null,"Delete")," an application is actually delete the metadata.")),(0,i.kt)("p",null,"The rest concept in VelaUX Application are align with KubeVela Core."),(0,i.kt)("h3",{id:"revision"},"Revision"),(0,i.kt)("p",null,"Revision generates each time when the application deployed and holds all infos in one snapshot. You use it for rolling back to whichever version whenever you needed."),(0,i.kt)("h2",{id:"next-step"},"Next Step"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"View ",(0,i.kt)("a",{parentName:"li",href:"../tutorials/webservice"},"Tutorials")," to look on more of what you can achieve with KubeVela."),(0,i.kt)("li",{parentName:"ul"},"View ",(0,i.kt)("a",{parentName:"li",href:"../how-to/dashboard/application/create-application"},"How To guides")," to check out more features.")))}s.isMDXComponent=!0},2806:function(e,t,n){"use strict";t.Z=n.p+"assets/images/velaux-concept-b38769d39c88ec070809a0fb8544c804.png"}}]);