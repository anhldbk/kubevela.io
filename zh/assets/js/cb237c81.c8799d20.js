(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[51051],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(o,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12481:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),l={title:"\u4ea4\u4ed8\u5bb9\u5668\u955c\u50cf",description:"\u53c2\u8003\u672c\u6587\u7ae0\uff0c\u5b66\u4e60\u4f7f\u7528\u5bb9\u5668\u955c\u50cf\u90e8\u7f72\u4f01\u4e1a\u4e1a\u52a1\u5e94\u7528\uff0c\u5927\u591a\u6570\u4f01\u4e1a\u4e1a\u52a1\u5e94\u7528\u90fd\u53ef\u4f5c\u4e3a\u65e0\u72b6\u6001\u5e94\u7528\u4ea4\u4ed8\u3002"},p={unversionedId:"tutorials/webservice",id:"tutorials/webservice",isDocsHomePage:!1,title:"\u4ea4\u4ed8\u5bb9\u5668\u955c\u50cf",description:"\u53c2\u8003\u672c\u6587\u7ae0\uff0c\u5b66\u4e60\u4f7f\u7528\u5bb9\u5668\u955c\u50cf\u90e8\u7f72\u4f01\u4e1a\u4e1a\u52a1\u5e94\u7528\uff0c\u5927\u591a\u6570\u4f01\u4e1a\u4e1a\u52a1\u5e94\u7528\u90fd\u53ef\u4f5c\u4e3a\u65e0\u72b6\u6001\u5e94\u7528\u4ea4\u4ed8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tutorials/webservice.md",sourceDirName:"tutorials",slug:"/tutorials/webservice",permalink:"/zh/docs/next/tutorials/webservice",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/webservice.md",version:"current",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642480750,formattedLastUpdatedAt:"2022/1/18",frontMatter:{title:"\u4ea4\u4ed8\u5bb9\u5668\u955c\u50cf",description:"\u53c2\u8003\u672c\u6587\u7ae0\uff0c\u5b66\u4e60\u4f7f\u7528\u5bb9\u5668\u955c\u50cf\u90e8\u7f72\u4f01\u4e1a\u4e1a\u52a1\u5e94\u7528\uff0c\u5927\u591a\u6570\u4f01\u4e1a\u4e1a\u52a1\u5e94\u7528\u90fd\u53ef\u4f5c\u4e3a\u65e0\u72b6\u6001\u5e94\u7528\u4ea4\u4ed8\u3002"},sidebar:"docs",previous:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/zh/docs/next/quick-start"},next:{title:"\u4ea4\u4ed8 Helm Chart",permalink:"/zh/docs/next/tutorials/helm"}},o=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u521b\u5efa\u5e94\u7528",id:"\u521b\u5efa\u5e94\u7528",children:[]},{value:"\u90e8\u7f72\u5e94\u7528",id:"\u90e8\u7f72\u5e94\u7528",children:[]},{value:"\u53d8\u66f4\u955c\u50cf\u7248\u672c",id:"\u53d8\u66f4\u955c\u50cf\u7248\u672c",children:[]},{value:"\u53d8\u66f4\u5e94\u7528\u7684\u526f\u672c\u6570\u91cf",id:"\u53d8\u66f4\u5e94\u7528\u7684\u526f\u672c\u6570\u91cf",children:[]},{value:"\u5e94\u7528\u5347\u7ea7",id:"\u5e94\u7528\u5347\u7ea7",children:[]},{value:"\u5e94\u7528\u56de\u6536\u4e0e\u5220\u9664",id:"\u5e94\u7528\u56de\u6536\u4e0e\u5220\u9664",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:o};function u(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f01\u4e1a\u57fa\u4e8e KubeVela \u901a\u8fc7\u5bb9\u5668\u955c\u50cf\u4ea4\u4ed8\u4e1a\u52a1\u5e94\u7528\u7684\u64cd\u4f5c\u65b9\u5f0f\uff0c\u901a\u8fc7\u8be5\u65b9\u5f0f\u4ea4\u4ed8\u5e94\u7528\u65e0\u9700\u4f60\u5b66\u4e60\u8fc7\u591a\u7684 Kubernetes \u9886\u57df\u77e5\u8bc6\u3002"),(0,a.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4f60\u7684\u4e1a\u52a1\u5bb9\u5668\u5316\uff0c\u65e0\u8bba\u4f60\u7684\u4e1a\u52a1\u4f7f\u7528\u4f55\u79cd\u5f00\u53d1\u8bed\u8a00\uff0c\u8bf7\u5148\u5c06\u5176\u901a\u8fc7 CI \u7cfb\u7edf\u6216\u5728\u672c\u5730\u5b8c\u6210\u8fd0\u884c\u955c\u50cf\u6253\u5305\u3002"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"KubeVela \u672a\u6765\u8ba1\u5212\u63d0\u4f9b\u652f\u6301\u591a\u79cd\u5f00\u53d1\u8bed\u8a00\u7684\u5bb9\u5668\u6253\u5305\u65b9\u6848\uff0c\u5e2e\u52a9\u4f60\u4f4e\u95e8\u69db\u5b8c\u6210\u4e1a\u52a1\u5bb9\u5668\u5316\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u4f60\u7684\u4e1a\u52a1\u955c\u50cf\u5b58\u653e\u4e8e\u955c\u50cf\u4ed3\u5e93\u4e2d\uff0cKubeVela \u7ba1\u7406\u7684\u96c6\u7fa4\u53ef\u4ee5\u6b63\u5e38\u83b7\u53d6\u8be5\u955c\u50cf\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u660e\u786e\u4f60\u7684\u4e1a\u52a1\u9700\u8981\u8bbe\u7f6e\u54ea\u4e9b\u73af\u5883\u53d8\u91cf\uff0c\u662f\u5426\u6709\u5176\u4ed6\u4e2d\u95f4\u4ef6\u4f9d\u8d56\uff08\u6bd4\u5982\u6570\u636e\u5e93\u3001\u7f13\u5b58\u7b49\uff09\uff0c\u5982\u679c\u6709\uff0c\u8bf7\u5148\u90e8\u7f72\u4e2d\u95f4\u4ef6\u670d\u52a1\u3002"))),(0,a.kt)("h2",{id:"\u521b\u5efa\u5e94\u7528"},"\u521b\u5efa\u5e94\u7528"),(0,a.kt)("p",null,"\u8fdb\u5165 KubeVela \u5e94\u7528\u7ba1\u7406\u9875\u9762\uff08\u76ee\u5f55\uff1aApplictaions\uff09\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"New Application")," \u8fdb\u5165\u5e94\u7528\u521b\u5efa\u6d41\u7a0b\u3002\u9996\u5148\u8bbe\u7f6e\u5e94\u7528\u7684\u540d\u79f0\u3001\u522b\u540d\u548c\u63cf\u8ff0\uff1b\u9009\u62e9\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"webservice"),"\uff1b\u9009\u62e9\u53d1\u5e03\u7684\u73af\u5883\uff0c\u521d\u59cb\u60c5\u51b5\u4e0b\u5df2\u7ecf\u5b58\u5728 Default \u73af\u5883\u53ef\u9009\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8fdb\u5165\u73af\u5883\u7ba1\u7406\u9875\u9762(\u76ee\u5f55\uff1aEnvs) \u521b\u5efa\u65b0\u7684\u73af\u5883\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create webservice application",src:n(18605).Z})),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Next Step")," \u8fdb\u5165\u90e8\u7f72\u53c2\u6570\u8bbe\u7f6e\u9875\u9762\u3002\u5728\u5f53\u524d\u9875\u9762\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e\u4e1a\u52a1\u5e94\u7528\u7684\u955c\u50cf\u540d\u79f0\uff08Image\uff09\uff0c\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u955c\u50cf\u7684\u542f\u52a8\u547d\u4ee4\uff0c\u53ef\u4ee5\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"CMD")," \u680f\u76ee\uff0c\u6dfb\u52a0\u542f\u7528\u547d\u4ee4\uff0c\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"ENV")," \u680f\u76ee\uff0c\u6309\u7167\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"set webservice application",src:n(60710).Z})),(0,a.kt)("p",null,"\u622a\u56fe\u6240\u793a\u90e8\u7f72\u7684\u4e1a\u52a1\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Wordpress"),"\uff0c\u586b\u5199\u4e86\u955c\u50cf\u540d\u79f0 ",(0,a.kt)("inlineCode",{parentName:"p"},"wordpress")," \u548c\u8bbe\u7f6e\u4e86\u56db\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u82e5\u4f60\u4e5f\u4f7f\u7528\u8be5\u955c\u50cf\u8fdb\u884c\u6d4b\u8bd5\uff0c\u8bf7\u8bbe\u7f6e\u6b63\u786e\u7684\u6570\u636e\u5e93\u5730\u5740\u53d8\u91cf\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," \u5b8c\u6210\u5e94\u7528\u7684\u521b\u5efa\u6d41\u7a0b\uff0c\u8fdb\u5165\u5e94\u7528\u7ba1\u7406\u9875\u9762\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,a.kt)("p",null,"\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u65b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," \u6309\u94ae\uff0c\u5f00\u59cb\u5e94\u7528\u7684\u90e8\u7f72\u3002\u70b9\u51fb\u8be5\u6309\u94ae\u7684\u542b\u4e49\u662f\u6267\u884c\u9ed8\u8ba4\u7684\u5de5\u4f5c\u6d41\u3002\u8bf7\u6ce8\u610f\uff0cKubeVela \u5df2\u7ecf\u4e3a\u5e94\u7528\u7684\u6bcf\u4e00\u4e2a\u53d1\u5e03\u73af\u5883\u751f\u6210\u4e86\u5bf9\u5e94\u7684\u5de5\u4f5c\u6d41\u3002\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Baseline Config")," \u7684\u53f3\u65b9\u5373\u4e3a\u5e94\u7528\u9700\u8981\u4ea4\u4ed8\u7684\u73af\u5883\uff0c\u70b9\u51fb\u73af\u5883\u540d\u79f0\u5373\u53ef\u8fdb\u5165\u8be5\u73af\u5883\u9875\u9762\u67e5\u8be2\u5e94\u7528\u90e8\u7f72\u72b6\u6001\u548c\u5e94\u7528\u5b9e\u4f8b\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"webservice application env page",src:n(48643).Z})),(0,a.kt)("p",null,"\u82e5\u8be5\u73af\u5883\u4e2d\u5305\u62ec\u591a\u4e2a\u4ea4\u4ed8\u76ee\u6807\uff0c\u53ef\u4ee5\u5207\u6362\u4e0d\u540c\u7684\u4ea4\u4ed8\u76ee\u6807\u67e5\u770b\u5e94\u7528\u5b9e\u4f8b\u5217\u8868\u3002\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Check the details"),"\uff0c\u5728\u5f39\u7a97\u4e2d\u53ef\u4ee5\u67e5\u770b\u5230\u5e94\u7528\u7684\u90e8\u7f72\u6574\u4f53\u8fdb\u5ea6\u548c\u521b\u5efa\u7684\u8d44\u6e90\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5728\u5b9e\u4f8b\u5217\u8868\u4e2d\u53ef\u4ee5\u67e5\u770b\u5e94\u7528\u5b9e\u4f8b\u7684\u4ea4\u4ed8\u72b6\u6001\uff0c\u82e5\u5176\u4e00\u76f4\u5904\u4e8e\u975e\u8fd0\u884c\u6001\uff0c\u53ef\u70b9\u51fb\u5b9e\u4f8b\u884c\u6700\u524d\u65b9\u7684+\u53f7\u5c55\u5f00\u5b9e\u4f8b\u8be6\u60c5\uff0c\u67e5\u770b\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u53d8\u66f4\u955c\u50cf\u7248\u672c"},"\u53d8\u66f4\u955c\u50cf\u7248\u672c"),(0,a.kt)("p",null,"\u5f53\u5e94\u7528\u5b8c\u6210\u7b2c\u4e00\u6b21\u90e8\u7f72\u540e\uff0c\u6211\u4eec\u7684\u4e1a\u52a1\u53ef\u80fd\u5728\u6301\u7eed\u5f00\u53d1\uff0c\u540e\u7eed\u4ea7\u751f\u7684\u65b0\u7248\u672c\u955c\u50cf\uff0c\u6211\u4eec\u9700\u8981\u53d8\u66f4\u955c\u50cf\u7248\u672c\u3002\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Baseline Config"),"\uff0c\u8fdb\u5165\u5e94\u7528\u914d\u7f6e\u9875\u9762\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit Properties")," \u6309\u94ae\u5373\u53ef\u518d\u6b21\u8fdb\u5165\u90e8\u7f72\u53c2\u6570\u8bbe\u7f6e\u9875\u9762\uff0c\u5728\u8be5\u9875\u9762\u4e2d\u53ef\u4ee5\u53d8\u66f4\u955c\u50cf\u540d\u79f0\uff0c\u7248\u672c\u548c\u73af\u5883\u53d8\u91cf\u7b49\u53c2\u6570\u3002"),(0,a.kt)("h2",{id:"\u53d8\u66f4\u5e94\u7528\u7684\u526f\u672c\u6570\u91cf"},"\u53d8\u66f4\u5e94\u7528\u7684\u526f\u672c\u6570\u91cf"),(0,a.kt)("p",null,"\u5982\u679c\u4e1a\u52a1\u5e94\u7528\u9700\u8981\u8bbe\u7f6e\u591a\u4e2a\u526f\u672c\uff0c\u8fdb\u5165\u5e94\u7528\u914d\u7f6e\u9875\u9762\uff0c\u5728\u8fd0\u7ef4\u7279\u5f81\u7ba1\u7406\u4e2d\uff0c\u5df2\u7ecf\u9ed8\u8ba4\u6302\u8f7d\u4e86\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Set Replicas")," \u7684\u8fd0\u7ef4\u7279\u5f81\uff0c\u70b9\u51fb\u8bbe\u7f6e\u56fe\u6807\u6309\u94ae\u5373\u53ef\u8fdb\u5165\u526f\u672c\u6570\u8c03\u6574\u8bbe\u7f6e\u9875\u9762\uff0c\u586b\u5199\u4f60\u9700\u8981\u8bbe\u7f6e\u7684\u526f\u672c\u6570\u91cf\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Update")," \u6309\u94ae\u63d0\u4ea4\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"set application replicas",src:n(48994).Z})),(0,a.kt)("h2",{id:"\u5e94\u7528\u5347\u7ea7"},"\u5e94\u7528\u5347\u7ea7"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4e24\u4e2a\u6b65\u9aa4\u5206\u522b\u6539\u53d8\u4e86\u5e94\u7528\u7684\u90e8\u7f72\u53c2\u6570\u548c\u8fd0\u7ef4\u7279\u5f81\uff0c\u4f46\u662f\u5b83\u8fd8\u5904\u4e8e\u8349\u7a3f\u72b6\u6001\uff0c\u6211\u4eec\u9700\u8981\u518d\u6b21\u70b9\u51fb\u90e8\u7f72\u6309\u94ae\u5373\u53ef\u5c06\u5e94\u7528\u5b8c\u6210\u5347\u7ea7\u3002"),(0,a.kt)("h2",{id:"\u5e94\u7528\u56de\u6536\u4e0e\u5220\u9664"},"\u5e94\u7528\u56de\u6536\u4e0e\u5220\u9664"),(0,a.kt)("p",null,"\u82e5\u4f60\u6d4b\u8bd5\u5b8c\u6210\u9700\u8981\u5c06\u5e94\u7528\u5220\u9664\uff0c\u9700\u8981\u9996\u5148\u56de\u6536\u6240\u6709\u90e8\u7f72\u7684\u73af\u5883\uff0c\u540c\u6837\u70b9\u51fb\u73af\u5883\u540d\u79f0\u8fdb\u5165\u73af\u5883\u5b9e\u4f8b\u5217\u8868\u67e5\u8be2\u9875\u9762\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Recycle")," \u6309\u94ae\u5373\u53ef\u56de\u6536\u5e94\u7528\u5728\u8be5\u73af\u5883\u7684\u90e8\u7f72\u3002\u56de\u6536\u5b8c\u6210\u540e\u5e94\u7528\u5728\u8be5\u73af\u5883\u8fdb\u5165\u672a\u90e8\u7f72\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u5f53\u6240\u6709\u73af\u5883\u90fd\u5df2\u56de\u6536\u5b8c\u6210\u540e\uff0c\u53ef\u8fdb\u884c\u5e94\u7528\u5220\u9664\u64cd\u4f5c\u3002\u76ee\u524d\u5e94\u7528\u5220\u9664\u5165\u53e3\u5728\u5e94\u7528\u5217\u8868\u9875\u9762\u3002\u70b9\u51fb\u5de6\u4fa7\u76ee\u5f55\uff0c\u56de\u5230\u5e94\u7528\u5217\u8868\u9875\u9762\uff0c\u9f20\u6807\u5e94\u7528\u540d\u79f0\u53f3\u4fa7\u7684\u64cd\u4f5c\u56fe\u6807\u4e0a\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove")," \u9009\u9879\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"delete application",src:n(48801).Z})),(0,a.kt)("p",null,"\u5230\u6b64\uff0c\u4f60\u5df2\u7ecf\u57fa\u672c\u638c\u63e1\u4e86\u4e1a\u52a1\u5e94\u7528\u7684\u90e8\u7f72\u65b9\u6cd5\uff0c\u66f4\u591a\u7684\u90e8\u7f72\u53c2\u6570\u652f\u6301\u90fd\u96c6\u4e2d\u5728\u5e94\u7528\u90e8\u7f72\u53c2\u6570\u8bbe\u7f6e\u9875\u9762\u4e4b\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./helm"},"\u5b66\u4e60\u57fa\u4e8e Helm Chart \u90e8\u7f72\u4e2d\u95f4\u4ef6\u5e94\u7528")))}u.isMDXComponent=!0},48801:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-delete-2040ad684a714e54065057d357229e1b.jpg"},18605:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-webservice-ebf046413101428fc53e22324260c256.jpg"},48994:function(e,t,n){"use strict";t.Z=n.p+"assets/images/set-replicas-bc40ff5b12af9100c01f79d6a846d50b.jpg"},60710:function(e,t,n){"use strict";t.Z=n.p+"assets/images/set-webservice-a2cafcdc6076a1d25b003d3b04528c04.jpg"},48643:function(e,t,n){"use strict";t.Z=n.p+"assets/images/webservice-env-1eef2c1259531e395271ec3aa76412c5.jpg"}}]);