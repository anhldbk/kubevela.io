(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[33693],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(r),d=a,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},34645:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"\u4f7f\u7528\u89e6\u53d1\u5668\u5bf9\u63a5 CI \u81ea\u52a8\u90e8\u7f72",description:"\u4f7f\u7528\u89e6\u53d1\u5668\u5bf9\u63a5 CI \u81ea\u52a8\u90e8\u7f72"},l={unversionedId:"how-to/dashboard/trigger/overview",id:"version-v1.3/how-to/dashboard/trigger/overview",isDocsHomePage:!1,title:"\u4f7f\u7528\u89e6\u53d1\u5668\u5bf9\u63a5 CI \u81ea\u52a8\u90e8\u7f72",description:"\u4f7f\u7528\u89e6\u53d1\u5668\u5bf9\u63a5 CI \u81ea\u52a8\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/how-to/dashboard/trigger/overview.md",sourceDirName:"how-to/dashboard/trigger",slug:"/how-to/dashboard/trigger/overview",permalink:"/zh/docs/how-to/dashboard/trigger/overview",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/trigger/overview.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"\u4f7f\u7528\u89e6\u53d1\u5668\u5bf9\u63a5 CI \u81ea\u52a8\u90e8\u7f72",description:"\u4f7f\u7528\u89e6\u53d1\u5668\u5bf9\u63a5 CI \u81ea\u52a8\u90e8\u7f72"},sidebar:"version-v1.3/docs",previous:{title:"\u7ba1\u7406\u8fd0\u7ef4\u7279\u5f81",permalink:"/zh/docs/how-to/dashboard/trait/overview"},next:{title:"\u7ba1\u7406\u90e8\u7f72\u76ee\u6807",permalink:"/zh/docs/how-to/dashboard/target/overview"}},c=[{value:"Custom \u89e6\u53d1\u5668",id:"custom-\u89e6\u53d1\u5668",children:[]},{value:"Harbor \u89e6\u53d1\u5668",id:"harbor-\u89e6\u53d1\u5668",children:[]},{value:"ACR \u89e6\u53d1\u5668",id:"acr-\u89e6\u53d1\u5668",children:[]},{value:"DockerHub \u89e6\u53d1\u5668",id:"dockerhub-\u89e6\u53d1\u5668",children:[]},{value:"JFrog \u89e6\u53d1\u5668",id:"jfrog-\u89e6\u53d1\u5668",children:[]}],s={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e94\u7528\u5728\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u9ed8\u8ba4\u89e6\u53d1\u5668\uff0c\u4f60\u53ef\u4ee5\u5220\u9664\u6216\u8005\u521b\u5efa\u65b0\u7684\u89e6\u53d1\u5668\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"default-trigger",src:r(1261).Z})),(0,o.kt)("p",null,"KubeVela \u89e6\u53d1\u5668\u53ef\u4ee5\u5bf9\u63a5\u4e0d\u540c\u7c7b\u578b\u7684 CI \u7cfb\u7edf\uff0c\u5728 CI \u7cfb\u7edf\u4e2d\u6dfb\u52a0\u89e6\u53d1\u5668\u4ee5\u6b64\u5b9e\u73b0\u5e94\u7528\u7684\u81ea\u52a8\u90e8\u7f72\u3002\u6bd4\u5982\u4ece\u5236\u54c1\u4ed3\u5e93\u7684\u955c\u50cf\u66f4\u65b0\u89e6\u53d1\uff0c\u901a\u8fc7 Jenkins Pipeline \u89e6\u53d1\u7b49\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u53ef\u4ee5\u521b\u5efa\u4e94\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u89e6\u53d1\u5668\uff1aCustom\u3001ACR\u3001Harbor\u3001DockerHub\u3001JFrog\uff0c\u6211\u4eec\u5c06\u5206\u522b\u4ecb\u7ecd\u3002"),(0,o.kt)("h2",{id:"custom-\u89e6\u53d1\u5668"},"Custom \u89e6\u53d1\u5668"),(0,o.kt)("p",null,"Custom \u4e3a\u81ea\u5b9a\u4e49\u7c7b\u578b\u7684\u89e6\u53d1\u5668\uff0c\u5b83\u63d0\u4f9b\u4e00\u4e2a Webhook URL \u4ee5\u53ca\u6307\u5b9a\u7684\u8bf7\u6c42\u4f53\u683c\u5f0f\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u6765\u5bf9\u63a5\u4efb\u610f CI \u7cfb\u7edf\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u89e6\u53d1\u5668\u662f\u4e00\u4e2a Custom \u7c7b\u578b\u7684\u89e6\u53d1\u5668\uff0c\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"Manual Trigger"),"\uff0c\u53ef\u4ee5\u67e5\u770b\u89e6\u53d1\u5668\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"manual-trigger",src:r(63185).Z})),(0,o.kt)("p",null,"Webhook URL \u662f\u8fd9\u4e2a\u89e6\u53d1\u5668\u7684\u89e6\u53d1\u5730\u5740\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Curl Command")," \u91cc\uff0c\u8fd8\u63d0\u4f9b\u4e86\u624b\u52a8 Curl \u8be5\u89e6\u53d1\u5668\u7684\u8bf7\u6c42\u793a\u4f8b\u3002\u6211\u4eec\u6765\u8be6\u7ec6\u89e3\u6790\u4e00\u4e0b\u8bf7\u6c42\u4f53\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    // \u5fc5\u586b\uff0c\u6b64\u6b21\u89e6\u53d1\u7684\u66f4\u65b0\u4fe1\u606f\n    "upgrade": {\n      // Key \u4e3a\u5e94\u7528\u7684\u540d\u79f0\n      "<application-name>": {\n        // \u9700\u8981\u66f4\u65b0\u7684\u503c\uff0c\u8fd9\u91cc\u7684\u5185\u5bb9\u4f1a\u88ab Patch \u66f4\u65b0\u5230\u5e94\u7528\u4e0a\n        "image": "<image-name>"\n      }\n    },\n    // \u53ef\u9009\uff0c\u6b64\u6b21\u89e6\u53d1\u643a\u5e26\u7684\u4ee3\u7801\u4fe1\u606f\n    "codeInfo": {\n      "commit": "<commit-id>",\n      "branch": "<branch>",\n      "user": "<user>",\n    }\n  }\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"upgrade")," \u4e0b\u662f\u672c\u6b21\u89e6\u53d1\u8981\u643a\u5e26\u7684\u66f4\u65b0\u4fe1\u606f\uff0c\u5728\u5e94\u7528\u540d\u4e0b\uff0c\u662f\u9700\u8981\u88ab Patch \u66f4\u65b0\u7684\u503c\u3002\u9ed8\u8ba4\u63a8\u8350\u7684\u662f\u66f4\u65b0\u955c\u50cf ",(0,o.kt)("inlineCode",{parentName:"p"},"image"),"\uff0c\u4e5f\u53ef\u4ee5\u6269\u5c55\u8fd9\u91cc\u7684\u5b57\u6bb5\u6765\u66f4\u65b0\u5e94\u7528\u7684\u5176\u4ed6\u5c5e\u6027\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"codeInfo")," \u4e2d\u662f\u4ee3\u7801\u4fe1\u606f\uff0c\u53ef\u4ee5\u9009\u62e9\u6027\u5730\u643a\u5e26\uff0c\u6bd4\u5982\u63d0\u4ea4 ID\u3001\u5206\u652f\u3001\u63d0\u4ea4\u8005\u7b49\uff0c\u4e00\u822c\u8fd9\u4e9b\u503c\u53ef\u4ee5\u901a\u8fc7\u5728 CI \u7cfb\u7edf\u4e2d\u4f7f\u7528\u53d8\u91cf\u66ff\u6362\u6765\u6307\u5b9a\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5728 GitLab CI \u4e2d\u4f7f\u7528\u89e6\u53d1\u5668\u7684\u4f8b\u5b50\uff0c\u91cc\u9762\u6240\u6709\u7684\u503c\u90fd\u4f7f\u7528\u4e86\u53d8\u91cf\u66ff\u6362\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'webhook-request:\n  stage: request\n  before_script:\n    - apk add --update curl && rm -rf /var/cache/apk/*\n  script:\n    - |\n      curl -X POST -H "Content-Type: application/json" -d \'{"upgrade":{"\'"$APP_NAME"\'":{"image":"\'"$BUILD_IMAGE"\'"}},"codeInfo":{"user":"\'"$CI_COMMIT_AUTHOR"\'","commit":"\'"$CI_COMMIT_SHA"\'","branch":"\'"$CI_COMMIT_BRANCH"\'"}}\' $WEBHOOK_URL\n')),(0,o.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5f53 CI \u4e2d\u6267\u884c\u4e86\u8be5\u6b65\u9aa4\uff0c\u5219\u80fd\u5728 VelaUX \u4e2d\u770b\u5230\u5e94\u7528\u5df2\u88ab\u6210\u529f\u90e8\u7f72\uff0c\u4e14\u80fd\u770b\u5230\u672c\u6b21\u90e8\u7f72\u76f8\u5173\u7684\u4ee3\u7801\u4fe1\u606f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"gitlab-trigger",src:r(34666).Z})),(0,o.kt)("h2",{id:"harbor-\u89e6\u53d1\u5668"},"Harbor \u89e6\u53d1\u5668"),(0,o.kt)("p",null,"Harbor \u89e6\u53d1\u5668\u53ef\u4ee5\u5bf9\u63a5 Harbor \u955c\u50cf\u4ed3\u5e93\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6765\u521b\u5efa\u4e00\u4e2a Harbor \u89e6\u53d1\u5668\uff0cPayload Type \u9009\u62e9 Harbor\uff0cExecution Workflow \u9009\u62e9\u89e6\u53d1\u5668\u9700\u8981\u89e6\u53d1\u7684\u5de5\u4f5c\u6d41\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(51711).Z})),(0,o.kt)("p",null,"\u65b0\u5efa\u5b8c\u6bd5\u540e\uff0c\u5728 Harbor \u4e2d\u914d\u7f6e\u8be5\u89e6\u53d1\u5668\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(10876).Z})),(0,o.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5f53 Harbor \u4e2d\u88ab\u63a8\u9001\u4e86\u65b0\u955c\u50cf\u65f6\uff0cVelaUX \u4e2d\u4f1a\u6536\u5230\u5bf9\u5e94\u7684\u89e6\u53d1\u8bf7\u6c42\uff0c\u4ece\u800c\u5b8c\u6210\u81ea\u52a8\u90e8\u7f72\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(62092).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(64641).Z})),(0,o.kt)("h2",{id:"acr-\u89e6\u53d1\u5668"},"ACR \u89e6\u53d1\u5668"),(0,o.kt)("p",null,"ACR \u89e6\u53d1\u5668\u53ef\u4ee5\u5bf9\u63a5 ACR \u955c\u50cf\u4ed3\u5e93\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6765\u521b\u5efa\u4e00\u4e2a ACR \u89e6\u53d1\u5668\uff0cPayload Type \u9009\u62e9 ACR\uff0cExecution Workflow \u9009\u62e9\u89e6\u53d1\u5668\u9700\u8981\u89e6\u53d1\u7684\u5de5\u4f5c\u6d41\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(85774).Z})),(0,o.kt)("p",null,"\u65b0\u5efa\u5b8c\u6bd5\u540e\uff0c\u5728 ACR \u4e2d\u914d\u7f6e\u8be5\u89e6\u53d1\u5668\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(35974).Z})),(0,o.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5f53 ACR \u4e2d\u88ab\u63a8\u9001\u4e86\u65b0\u955c\u50cf\u65f6\uff0cVelaUX \u4e2d\u4f1a\u6536\u5230\u5bf9\u5e94\u7684\u89e6\u53d1\u8bf7\u6c42\uff0c\u4ece\u800c\u5b8c\u6210\u81ea\u52a8\u90e8\u7f72\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(620).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(81948).Z})),(0,o.kt)("h2",{id:"dockerhub-\u89e6\u53d1\u5668"},"DockerHub \u89e6\u53d1\u5668"),(0,o.kt)("p",null,"DockerHub \u89e6\u53d1\u5668\u53ef\u4ee5\u5bf9\u63a5 DockerHub \u4ed3\u5e93\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6765\u521b\u5efa\u4e00\u4e2a DockerHub \u89e6\u53d1\u5668\uff0cPayload Type \u9009\u62e9 dockerhub\uff0cExecution Workflow \u9009\u62e9\u89e6\u53d1\u5668\u8981\u89e6\u53d1\u7684\u5de5\u4f5c\u6d41\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(99466).Z})),(0,o.kt)("p",null,"\u65b0\u5efa\u5b8c\u6bd5\u540e\uff0c\u5728 DockerHub \u4e2d\u914d\u7f6e\u8be5\u89e6\u53d1\u5668\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(72141).Z})),(0,o.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5f53 DockerHub \u4e2d\u88ab\u63a8\u9001\u4e86\u955c\u50cf\u65f6\uff0cVelaUX \u4e2d\u4f1a\u6536\u5230\u5bf9\u5e94\u7684\u89e6\u53d1\u8bf7\u6c42\uff0c\u4ece\u800c\u5b8c\u6210\u81ea\u52a8\u90e8\u7f72\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(4286).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(22047).Z})),(0,o.kt)("h2",{id:"jfrog-\u89e6\u53d1\u5668"},"JFrog \u89e6\u53d1\u5668"),(0,o.kt)("p",null,"JFrog \u89e6\u53d1\u5668\u53ef\u4ee5\u5bf9\u63a5 JFrog Artifactory\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u6765\u521b\u5efa\u4e00\u4e2a JFrog \u89e6\u53d1\u5668\uff0cPayload Type \u9009\u62e9 jfrog\uff0c Workflow \u9009\u62e9\u89e6\u53d1\u5668\u8981\u89e6\u53d1\u7684\u5de5\u4f5c\u6d41\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(35075).Z})),(0,o.kt)("p",null,"\u65b0\u5efa\u5b8c\u6bd5\u540e\uff0c\u5728 JFrog \u4e2d\u914d\u7f6e\u8be5\u89e6\u53d1\u5668\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:r(44736).Z})),(0,o.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5f53 JFrog \u4e2d\u88ab\u63a8\u9001\u4e86\u955c\u50cf\u65f6\uff0cVelaUX \u4e2d\u4f1a\u6536\u5230\u5bf9\u5e94\u7684\u89e6\u53d1\u8bf7\u6c42\uff0c\u4ece\u800c\u5b8c\u6210\u81ea\u52a8\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a\u7531\u4e8e jFrog \u7684\u56de\u8c03\u8bf7\u6c42\u4e2d\u4e0d\u5305\u542b jFrog \u672c\u8eab\u7684\u5730\u5740\uff0cKubeVela \u5c06\u8bc6\u522b\u5728 jFrog Webhook \u4e2d\u914d\u7f6e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"X-jFrogURL")," \u5730\u5740\uff0c\u5c06\u5176\u5199\u5165\u5230\u5e94\u7528\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," \u5b57\u6bb5\u4e2d\u3002"))}u.isMDXComponent=!0},620:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-acrrecord-0ce59eca57f0502eeeb400dc2fa8be68.png"},85774:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-newtrigger-e90baae3b3d802bdd7d5686a34c671cf.png"},81948:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-revisions-73076829d1ee5a56648380381f1c0741.png"},35974:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-ff30870e9bb413a28cf96b8604853988.png"},1261:function(e,t,r){"use strict";t.Z=r.p+"assets/images/default-trigger-2d679f182f58a72090474f3b0d343dd7.png"},4286:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dockerhub-trigger-dockerhubrecord-a979f6ff14b771e6c12996c7c77463bb.png"},99466:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dockerhub-trigger-newtrigger-c5069e4c7ce9c10d2970f66d2292c903.png"},22047:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dockerhub-trigger-revisions-92f0c9aa21ee7c7bf587575583d916b0.png"},72141:function(e,t,r){"use strict";t.Z=r.p+"assets/images/dockerhub-trigger-3fe092950e8c89580780e6d5ddbbff0f.png"},34666:function(e,t,r){"use strict";t.Z=r.p+"assets/images/gitlab-trigger-89a8a953cfbe5dcf1ed118ca20f3c71e.png"},62092:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-harborrecord-f644ee54d5904f4d0cca7c9b54811721.png"},51711:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-newtrigger-1294a428077c9ce0e981d2ab1e27f4ad.png"},64641:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-revisions-6c7e199a9e928cd3f0f4b30a4159613d.png"},10876:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-6bba927c7425b4524c0d9f2c7a228a50.png"},35075:function(e,t,r){"use strict";t.Z=r.p+"assets/images/jfrog-trigger-newtrigger-21a9620c3b53de4dd57b1a088731d62d.png"},44736:function(e,t,r){"use strict";t.Z=r.p+"assets/images/jfrog-trigger-80f70a626e34d20421dce8fa376aba7c.png"},63185:function(e,t,r){"use strict";t.Z=r.p+"assets/images/manual-trigger-8361fea9230d5f56d649dca15a33f1db.png"}}]);