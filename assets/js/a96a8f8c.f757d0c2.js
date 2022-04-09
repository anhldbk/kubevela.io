(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[81571],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=i,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89269:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a={title:"Working with Jenkins"},l={unversionedId:"tutorials/jenkins",id:"tutorials/jenkins",isDocsHomePage:!1,title:"Working with Jenkins",description:"Introduction",source:"@site/docs/tutorials/jenkins.md",sourceDirName:"tutorials",slug:"/tutorials/jenkins",permalink:"/docs/next/tutorials/jenkins",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/jenkins.md",version:"current",lastUpdatedBy:"Yin Da",lastUpdatedAt:1642146970,formattedLastUpdatedAt:"1/14/2022",frontMatter:{title:"Working with Jenkins"},sidebar:"docs",previous:{title:"Deploy Kubernetes Objects",permalink:"/docs/next/tutorials/k8s-object"},next:{title:"Continuous Delivery from Image Registry",permalink:"/docs/next/tutorials/trigger"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Create Application",id:"create-application",children:[]},{value:"Setup Webhook Trigger for Jenkins",id:"setup-webhook-trigger-for-jenkins",children:[]},{value:"Use Webhook in Jenkins",id:"use-webhook-in-jenkins",children:[]},{value:"Advanced: Secure your Webhook URL",id:"advanced-secure-your-webhook-url",children:[]}],c={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The workflow execution of KubeVela application can be triggered by webhooks. Therefore, it is rather easy for user to integrate KubeVela with existing Continuous Integration platforms, such as Jenkins or Gitlab."),(0,o.kt)("p",null,"In KubeVela 1.2, ",(0,o.kt)("a",{parentName:"p",href:"../install#3-install-velaux"},"VelaUX")," provides webhook triggers for applications to use. Only a simple curl command in Jenkins pipeline is needed to bridge CI and CD systems."),(0,o.kt)("p",null,"In this section, we will demonstrate how to integrate KubeVela with Jenkins in details."),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"The following requirements are needed to be ensured before starting this tutorial"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KubeVela v1.2.0 with VelaUX installed."),(0,o.kt)("li",{parentName:"ul"},"Jenkins installed."),(0,o.kt)("li",{parentName:"ul"},"VelaUX can be accessed by Jenkins. (If KubeVela is installed in an offline environment, you need to check this condition.)")),(0,o.kt)("h3",{id:"create-application"},"Create Application"),(0,o.kt)("p",null,"To use triggers, we need to create a new application on VelaUX first. For example, let's deploy a new WebService type application and use LoadBalancer to expose port 80 for access."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(3604).Z})),(0,o.kt)("h3",{id:"setup-webhook-trigger-for-jenkins"},"Setup Webhook Trigger for Jenkins"),(0,o.kt)("p",null,"In the application view, we can see a default trigger as below"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(48797).Z})),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Manual Trigger"),", we can see the Webhook URL and the Curl Command. Either one is available to copy and use into Jenkins pipeline script."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(66890).Z})),(0,o.kt)("h3",{id:"use-webhook-in-jenkins"},"Use Webhook in Jenkins"),(0,o.kt)("p",null,"To use the webhook in Jenkins, we can paste the Curl Command in either Jenkins ",(0,o.kt)("em",{parentName:"p"},"Freestyle")," project or ",(0,o.kt)("em",{parentName:"p"},"Pipeline")," project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("em",{parentName:"li"},"Freestyle")," project, click ",(0,o.kt)("strong",{parentName:"li"},"Add Build Step")," and select ",(0,o.kt)("strong",{parentName:"li"},"Execute Shell"),". Copy the Curl Command above into it."),(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("em",{parentName:"li"},"Pipeline")," projetct, similarly copy the Curl Command and wraps it with a ",(0,o.kt)("inlineCode",{parentName:"li"},"sh")," command like the code below")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'stage(\'Deploy\') {\n    steps {\n        sh \'\'\'#!/bin/bash\n            set -ex\n            curl -X POST -H \'content-type: application/json\' --url http://47.251.6.101/api/v1/webhook/mbn6wckzh5lul3m2 -d \'{"upgrade":{"kubevela-jenkins-ci-demo":{"image":"busybox"}},"codeInfo":{"commit":"","branch":"","user":""}}\'\n        \'\'\'\n    }\n}\n')),(0,o.kt)("p",null,"Now when jenkins execute these build steps, it will notify KubeVela to execute the application workflow automatically."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(52164).Z})),(0,o.kt)("h3",{id:"advanced-secure-your-webhook-url"},"Advanced: Secure your Webhook URL"),(0,o.kt)("p",null,"The KubeVela webhook url in Jenkins can be secured by storing it in Jenkins credentials, instead of directly referring it in the project. You can set up a ",(0,o.kt)("inlineCode",{parentName:"p"},"secret text")," type credential in Jenkins and use it in the project."))}u.isMDXComponent=!0},3604:function(e,t,n){"use strict";t.Z=n.p+"assets/images/acr-trigger-newapp-37351acbac4f76cdc209e47184a16d9c.png"},66890:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-trigger-webhook-59c7644069e39a901f209d6251361a51.jpg"},48797:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-trigger-bd2129f537ca4f493c709fda3b9af614.jpg"},52164:function(e,t,n){"use strict";t.Z=n.p+"assets/images/jenkins-run-0c8507810ef04467310c3197801ca850.jpg"}}]);