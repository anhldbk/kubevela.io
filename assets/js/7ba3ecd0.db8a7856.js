(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[76292],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,b=u["".concat(c,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23074:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={title:"Delete Application",description:"delete an application by KubeVela dashboard"},l={unversionedId:"how-to/dashboard/application/delete-application",id:"version-v1.3/how-to/dashboard/application/delete-application",isDocsHomePage:!1,title:"Delete Application",description:"delete an application by KubeVela dashboard",source:"@site/versioned_docs/version-v1.3/how-to/dashboard/application/delete-application.md",sourceDirName:"how-to/dashboard/application",slug:"/how-to/dashboard/application/delete-application",permalink:"/docs/how-to/dashboard/application/delete-application",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/application/delete-application.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Delete Application",description:"delete an application by KubeVela dashboard"},sidebar:"version-v1.3/docs",previous:{title:"Recycle Application Instance",permalink:"/docs/how-to/dashboard/application/recycle-environment"},next:{title:"Manage Workflows",permalink:"/docs/how-to/dashboard/workflow/overview"}},c=[],p={toc:c};function d(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before you delete an application, you should recycle all instances bond in environments."),(0,a.kt)("p",null,"After all application instance were recycled, you can click ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove")," for deletion."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"delete application",src:n(97273).Z})),(0,a.kt)("p",null,"As the picture shows, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Remove")," button is hidden in the application detail."))}d.isMDXComponent=!0},97273:function(e,t,n){"use strict";t.Z=n.p+"assets/images/app-delete-2040ad684a714e54065057d357229e1b.jpg"}}]);