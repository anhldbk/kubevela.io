(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[38879],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92501:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"\u66b4\u9732\u8bbf\u95ee\u5730\u5740",description:"\u901a\u8fc7 UI \u8bbe\u7f6e\u5e94\u7528\u8bbf\u95ee\u65b9\u5f0f\uff0c\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u5730\u5740\u5e76\u8bbf\u95ee\u5e94\u7528\u3002"},p={unversionedId:"how-to/dashboard/application/get-application-endpoint",id:"version-v1.2/how-to/dashboard/application/get-application-endpoint",isDocsHomePage:!1,title:"\u66b4\u9732\u8bbf\u95ee\u5730\u5740",description:"\u901a\u8fc7 UI \u8bbe\u7f6e\u5e94\u7528\u8bbf\u95ee\u65b9\u5f0f\uff0c\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u5730\u5740\u5e76\u8bbf\u95ee\u5e94\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/how-to/dashboard/application/get-application-endpoint.md",sourceDirName:"how-to/dashboard/application",slug:"/how-to/dashboard/application/get-application-endpoint",permalink:"/zh/docs/v1.2/how-to/dashboard/application/get-application-endpoint",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/application/get-application-endpoint.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"\u66b4\u9732\u8bbf\u95ee\u5730\u5740",description:"\u901a\u8fc7 UI \u8bbe\u7f6e\u5e94\u7528\u8bbf\u95ee\u65b9\u5f0f\uff0c\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u5730\u5740\u5e76\u8bbf\u95ee\u5e94\u7528\u3002"},sidebar:"version-v1.2/docs",previous:{title:"\u67e5\u770b\u5e94\u7528\u8fd0\u884c\u65e5\u5fd7",permalink:"/zh/docs/v1.2/how-to/dashboard/application/get-application-log"},next:{title:"\u67e5\u770b\u5e94\u7528\u90e8\u7f72\u7684\u8d44\u6e90\u5217\u8868",permalink:"/zh/docs/v1.2/how-to/dashboard/application/view-application-resource"}},l=[{value:"\u8bbe\u7f6e\u5e94\u7528\u8bbf\u95ee\u65b9\u5f0f",id:"\u8bbe\u7f6e\u5e94\u7528\u8bbf\u95ee\u65b9\u5f0f",children:[]},{value:"\u83b7\u53d6\u8bbf\u95ee\u5730\u5740",id:"\u83b7\u53d6\u8bbf\u95ee\u5730\u5740",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:l};function s(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u8bbe\u7f6e\u5e94\u7528\u8bbf\u95ee\u65b9\u5f0f"},"\u8bbe\u7f6e\u5e94\u7528\u8bbf\u95ee\u65b9\u5f0f"),(0,i.kt)("p",null,"\u4ea4\u4ed8\u7684 Kubernetes \u96c6\u7fa4\u7684\u5e94\u7528\u9700\u8981\u8bbe\u7f6e\u8bbf\u95ee\u65b9\u5f0f\u5373\u53ef\u751f\u6210\u8bbf\u95ee\u5730\u5740\uff0c\u5e38\u89c1\u652f\u6301\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e Service \u7684\u66b4\u9732\u7c7b\u578b\uff0c\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"LoadBalancer")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"NodePort"),"\u3002\u9002\u7528\u4e8e\u6240\u6709\u5e94\u7528\u534f\u8bae\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e Ingress \u7b56\u7565\uff0c\u4ec5\u9002\u7528\u4e8e HTTP/HTTPs \u534f\u8bae\u3002")),(0,i.kt)("h4",{id:"webservice-\u7c7b\u578b\u7684\u5e94\u7528"},(0,i.kt)("inlineCode",{parentName:"h4"},"webservice")," \u7c7b\u578b\u7684\u5e94\u7528"),(0,i.kt)("p",null,"\u5728\u90e8\u7f72\u53c2\u6570\u4e2d\u53ef\u4ee5\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"ExposeType")," \u5b57\u6bb5\u53c2\u6570\u6765\u8bbe\u7f6e\u5176\u66b4\u9732\u65b9\u5f0f\uff0c\u540c\u65f6\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Ports")," \u4e2d\u8bbe\u7f6e\u5e94\u7528\u7684\u76d1\u542c\u7aef\u53e3\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"Expose")," \u8bbe\u7f6e\u4e3a True\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"webservice",src:n(36633).Z})),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u4e2d\u5b58\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress Controller"),"\uff0c\u5728\u5e94\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Baseline Config")," \u9875\u9762\u4e2d\uff0c\u65b0\u589e ",(0,i.kt)("inlineCode",{parentName:"p"},"gateway")," \u8fd0\u7ef4\u7279\u5f81\u6765\u8bbe\u7f6e\u8bbf\u95ee\u57df\u540d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"trait",src:n(56370).Z})),(0,i.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Domain")," \u4e2d\u914d\u7f6e\u4f60\u7684\u57df\u540d\uff0c\u6ce8\u610f\u8bf7\u5c06\u8be5\u57df\u540d DNS \u89e3\u6790\u5230\u76ee\u6807\u96c6\u7fa4\u7684\u7f51\u5173 IP \u4e4b\u4e0a\u3002\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," \u6a21\u5757\u4e0b\u914d\u7f6e\u8def\u7531\u89c4\u5219\uff0c\u9ed8\u8ba4\u4f60\u9700\u8981\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),":",(0,i.kt)("inlineCode",{parentName:"p"},"80"),"\uff0c\u6839\u636e\u4f60\u7684\u5e94\u7528\u76d1\u542c\u7aef\u53e3\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,"\u5176\u4ed6\u90e8\u7f72\u7c7b\u578b\u7684\u5e94\u7528\uff0c\u4e00\u822c\u5b58\u5728\u5bf9\u5e94\u7684\u90e8\u7f72\u53c2\u6570\u8bbe\u7f6e\u9009\u9879\uff0c\u6839\u636e\u90e8\u7f72\u53c2\u6570\u8bbe\u7f6e\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"\u83b7\u53d6\u8bbf\u95ee\u5730\u5740"},"\u83b7\u53d6\u8bbf\u95ee\u5730\u5740"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5b8c\u5e94\u7528\u8bbf\u95ee\u65b9\u5f0f\u540e\uff0c\u6267\u884c\u5e94\u7528\u90e8\u7f72\uff0c\u7136\u540e\u5207\u6362\u5230\u73af\u5883\u89c6\u56fe\u4e0b\u5373\u53ef\u770b\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Endpoint")," \u6309\u94ae\uff0c\u9f20\u6807\u79fb\u52a8\u5230\u4e0a\u65b9\u5373\u53ef\u663e\u793a\u8be5\u5e94\u7528\u7684\u8bbf\u95ee\u5730\u5740\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"service endpoint",src:n(98403).Z})),(0,i.kt)("h3",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./view-application-resource"},"\u67e5\u770b\u5e94\u7528\u90e8\u7f72\u7684\u8d44\u6e90\u5217\u8868"))))}s.isMDXComponent=!0},56370:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gateway-trait-add-021aa402710ada77b9f48f921552e6cb.jpg"},98403:function(e,t,n){"use strict";t.Z=n.p+"assets/images/service-endpoint-45af91ab3fcb69f5c60600dbd27044dc.jpg"},36633:function(e,t,n){"use strict";t.Z=n.p+"assets/images/webservice-port-4b796f7d3519de948cf0a92d83ff9a67.jpg"}}]);