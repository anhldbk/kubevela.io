(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[49359],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),a=n(80944),l=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var u=37,c=39;var s=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,m=e.groupId,f=e.className,d=(0,a.Z)(),b=d.tabGroupChoices,v=d.setTabGroupChoices,k=(0,r.useState)(s),g=k[0],h=k[1],y=r.Children.toArray(e.children),O=[];if(null!=m){var w=b[m];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&h(w)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),r=p[n].value;h(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,l,o,u,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,l=e.right,o=window,u=o.innerHeight,c=o.innerWidth,n>=0&&l<=c&&a<=u&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case u:var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},19409:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=n(41395),i=n(58215),u={title:"\u5b89\u88c5 kubectl \u63d2\u4ef6"},c={unversionedId:"kubectlplugin",id:"kubectlplugin",isDocsHomePage:!1,title:"\u5b89\u88c5 kubectl \u63d2\u4ef6",description:"\u5b89\u88c5 vela kubectl \u63d2\u4ef6\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u7b80\u5355\u7684\u4ea4\u4ed8\u4e91\u539f\u751f\u5e94\u7528\uff01",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/kubectlplugin.mdx",sourceDirName:".",slug:"/kubectlplugin",permalink:"/zh/docs/next/kubectlplugin",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/kubectlplugin.mdx",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1641994039,formattedLastUpdatedAt:"2022/1/12",frontMatter:{title:"\u5b89\u88c5 kubectl \u63d2\u4ef6"}},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b89\u88c5 vela kubectl \u63d2\u4ef6\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u7b80\u5355\u7684\u4ea4\u4ed8\u4e91\u539f\u751f\u5e94\u7528\uff01"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl vela"),"\uff1a"),(0,l.kt)(o.Z,{className:"unique-tabs",defaultValue:"krew",values:[{label:"Krew",value:"krew"},{label:"Script",value:"script"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"krew",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5e76\u4e14\u8bbe\u7f6e ",(0,l.kt)("a",{parentName:"li",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"},"krew")),(0,l.kt)("li",{parentName:"ol"},"\u66f4\u65b0 kubectl \u63d2\u4ef6\u5217\u8868\uff1a",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl krew update\n"))),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 kubectl vela\uff1a",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl krew install vela\n"))))),(0,l.kt)(i.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install-kubectl-vela.sh | bash\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/releases"},"release \u9875\u9762\uff08>= v1.0.3\uff09"),"\u624b\u52a8\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\uff0cKubectl \u4f1a\u81ea\u52a8\u4ece\u4f60\u7684\u7cfb\u7edf\u8def\u5f84\u4e2d\u627e\u5230\u5b83\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl vela -h\nA Highly Extensible Platform Engine based on Kubernetes and Open Application Model.\n\nUsage:\n  kubectl vela [flags]\n  kubectl vela [command]\n\n")))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);