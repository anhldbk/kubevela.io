(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[30538],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87713:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={title:"\u7ba1\u7406\u8fd0\u7ef4\u7279\u5f81",description:"\u7ba1\u7406\u5e94\u7528\u7684\u8fd0\u7ef4\u7279\u5f81"},c={unversionedId:"how-to/dashboard/trait/overview",id:"how-to/dashboard/trait/overview",isDocsHomePage:!1,title:"\u7ba1\u7406\u8fd0\u7ef4\u7279\u5f81",description:"\u7ba1\u7406\u5e94\u7528\u7684\u8fd0\u7ef4\u7279\u5f81",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to/dashboard/trait/overview.md",sourceDirName:"how-to/dashboard/trait",slug:"/how-to/dashboard/trait/overview",permalink:"/zh/docs/next/how-to/dashboard/trait/overview",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/trait/overview.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649409805,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"\u7ba1\u7406\u8fd0\u7ef4\u7279\u5f81",description:"\u7ba1\u7406\u5e94\u7528\u7684\u8fd0\u7ef4\u7279\u5f81"},sidebar:"docs",previous:{title:"\u5de5\u4f5c\u6d41\u7ba1\u7406",permalink:"/zh/docs/next/how-to/dashboard/workflow/overview"},next:{title:"\u4f7f\u7528\u89e6\u53d1\u5668\u5bf9\u63a5 CI \u81ea\u52a8\u90e8\u7f72",permalink:"/zh/docs/next/how-to/dashboard/trigger/overview"}},l=[{value:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81",id:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81",children:[]},{value:"\u66f4\u65b0\u8fd0\u7ef4\u7279\u5f81",id:"\u66f4\u65b0\u8fd0\u7ef4\u7279\u5f81",children:[]},{value:"\u5220\u9664\u8fd0\u7ef4\u7279\u5f81",id:"\u5220\u9664\u8fd0\u7ef4\u7279\u5f81",children:[]},{value:"\u66f4\u591a",id:"\u66f4\u591a",children:[]}],u={toc:l};function s(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5e94\u7528\u5728\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u4f1a\u9ed8\u8ba4\u7ed1\u5b9a\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," \u8bbe\u7f6e\u526f\u672c\u6570\u7684\u8fd0\u7ef4\u7279\u5f81\uff0c\u4f60\u53ef\u4ee5\u66f4\u65b0\u3001\u5220\u9664\u6216\u8005\u7ed1\u5b9a\u5176\u4ed6\u7684\u8fd0\u7ef4\u7279\u5f81\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"trait-list",src:r(52638).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff0c\u5bf9\u8fd0\u7ef4\u7279\u5f81\u8fdb\u884c\u53d8\u66f4\u540e\uff0c\u9700\u8981\u91cd\u65b0\u90e8\u7f72\u5e94\u7528\u624d\u80fd\u4f7f\u66f4\u65b0\u751f\u6548\u3002")),(0,o.kt)("h2",{id:"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81"},"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81"),(0,o.kt)("p",null,"\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"New Trait"),"\uff0c\u53ef\u4ee5\u4e3a\u5e94\u7528\u7ed1\u5b9a\u65b0\u7684\u8fd0\u7ef4\u7279\u5f81\u3002"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Type")," \u5217\u53ef\u4ee5\u9009\u62e9\u4e0d\u540c\u7c7b\u578b\u7684\u8fd0\u7ef4\u7279\u5f81\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5f00\u542f ",(0,o.kt)("inlineCode",{parentName:"p"},"Addon")," \u63d2\u4ef6\u6765\u542f\u7528\u66f4\u591a\u7c7b\u578b\u7684\u8fd0\u7ef4\u7279\u5f81\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"new-trait",src:r(60712).Z})),(0,o.kt)("h2",{id:"\u66f4\u65b0\u8fd0\u7ef4\u7279\u5f81"},"\u66f4\u65b0\u8fd0\u7ef4\u7279\u5f81"),(0,o.kt)("p",null,"\u70b9\u51fb\u8fd0\u7ef4\u7279\u5f81\u65c1\u7684\u9f7f\u8f6e\u5373\u53ef\u8fdb\u5165\u7f16\u8f91\u9875\u9762\uff0c\u6b64\u5904\u6211\u4eec\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," \u8fd0\u7ef4\u7279\u5f81\u7684\u526f\u672c\u6570\u8bbe\u7f6e\u4e3a 5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"edit-trait",src:r(11584).Z})),(0,o.kt)("h2",{id:"\u5220\u9664\u8fd0\u7ef4\u7279\u5f81"},"\u5220\u9664\u8fd0\u7ef4\u7279\u5f81"),(0,o.kt)("p",null,"\u70b9\u51fb\u8fd0\u7ef4\u7279\u5f81\u65c1\u7684\u5783\u573e\u6876\u5373\u53ef\u5220\u9664\u8fd0\u7ef4\u7279\u5f81\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete-trait",src:r(13902).Z})),(0,o.kt)("h2",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,o.kt)("p",null,"\u5173\u4e8e\u6240\u6709\u8fd0\u7ef4\u7279\u5f81\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"../../../end-user/traits/references"},"\u8fd0\u7ef4\u7279\u5f81"),"\u3002"))}s.isMDXComponent=!0},13902:function(e,t,r){"use strict";t.Z=r.p+"assets/images/delete-trait-72df2c0c6e790a041907e45e7ee550c6.png"},11584:function(e,t,r){"use strict";t.Z=r.p+"assets/images/edit-trait-b0f474f3729b3c997405fa10562f9ff8.png"},60712:function(e,t,r){"use strict";t.Z=r.p+"assets/images/new-trait-2eadc8a8e8c7988a39a6d67a797ff744.png"},52638:function(e,t,r){"use strict";t.Z=r.p+"assets/images/trait-list-19a8fc29f12ee365eed051bd0b4505aa.png"}}]);