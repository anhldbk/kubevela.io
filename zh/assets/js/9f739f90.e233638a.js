(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[55793],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=l,g=u["".concat(i,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96222:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return m}});var a=t(22122),l=t(19756),r=(t(67294),t(3905)),o={title:"\u57fa\u4e8e KubeVela \u7684\u673a\u5668\u5b66\u4e60\u5b9e\u8df5",author:"Tianxin Dong",author_title:"KubeVela \u56e2\u961f",author_url:"https://github.com/oam-dev/kubevela",author_image_url:"https://kubevela.io/img/logo.svg",tags:["KubeVela"],description:"",image:"https://raw.githubusercontent.com/oam-dev/kubevela.io/main/docs/resources/KubeVela-03.png",hide_table_of_contents:!1},s={permalink:"/zh/blog/2022/03/02/kubevela-with-machine-learning",editUrl:"https://github.com/oam-dev/kubevela.io/tree/main/blog/2022-03-02-kubevela-with-machine-learning.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2022-03-02-kubevela-with-machine-learning.md",title:"\u57fa\u4e8e KubeVela \u7684\u673a\u5668\u5b66\u4e60\u5b9e\u8df5",description:"",date:"2022-03-02T00:00:00.000Z",formattedDate:"2022\u5e743\u67082\u65e5",tags:[{label:"KubeVela",permalink:"/zh/blog/tags/kube-vela"}],readingTime:3.7,truncated:!1,prevItem:{title:"China Merchants Bank's Practice on Offline Installation with KubeVela",permalink:"/zh/blog/2022/04/01/offline-deployment-practice copy"},nextItem:{title:"\u5982\u4f55\u7528 100 \u884c\u4ee3\u7801\u5feb\u901f\u5f15\u5165 AWS \u6700\u53d7\u6b22\u8fce\u7684 50 \u79cd\u4e91\u8d44\u6e90",permalink:"/zh/blog/2022/03/01/kubevela-generate-top-50-popular-resources-of-aws-using-100-lines-of-code"}},i=[{value:"KubeVela AI \u63d2\u4ef6",id:"kubevela-ai-\u63d2\u4ef6",children:[]},{value:"\u6a21\u578b\u8bad\u7ec3",id:"\u6a21\u578b\u8bad\u7ec3",children:[]},{value:"\u6a21\u578b\u670d\u52a1\uff1a\u7070\u5ea6\u6d4b\u8bd5",id:"\u6a21\u578b\u670d\u52a1\uff1a\u7070\u5ea6\u6d4b\u8bd5",children:[]},{value:"\u6a21\u578b\u670d\u52a1\uff1aA/B \u6d4b\u8bd5",id:"\u6a21\u578b\u670d\u52a1\uff1aab-\u6d4b\u8bd5",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:i};function m(e){var n=e.components,o=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u673a\u5668\u5b66\u4e60\u6d6a\u6f6e\u8ff8\u53d1\u7684\u5f53\u4e0b\uff0cAI \u5de5\u7a0b\u5e08\u9664\u4e86\u9700\u8981\u8bad\u7ec3\u3001\u8c03\u8bd5\u81ea\u5df1\u7684\u6a21\u578b\u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u5c06\u6a21\u578b\u8fdb\u884c\u90e8\u7f72\u4e0a\u7ebf\uff0c\u4ece\u800c\u9a8c\u8bc1\u6a21\u578b\u7684\u6548\u679c\uff08\u5f53\u7136\uff0c\u6709\u7684\u65f6\u5019\uff0c\u8fd9\u90e8\u5206\u5de5\u4f5c\u7531 AI \u7cfb\u7edf\u5de5\u7a0b\u5e08\u6765\u5b8c\u6210\uff09\u3002\u8fd9\u4e00\u90e8\u5206\u5de5\u4f5c\u5bf9\u4e8e AI \u5de5\u7a0b\u5e08\u4eec\u6765\u8bf4\u662f\u7e41\u7410\u3001\u4e14\u6d88\u8017\u989d\u5916\u7cbe\u529b\u7684\u3002"),(0,r.kt)("p",null,"\u800c\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u6211\u4eec\u7684\u6a21\u578b\u8bad\u7ec3\u548c\u6a21\u578b\u670d\u52a1\u4e5f\u901a\u5e38\u5728\u4e91\u4e0a\u8fdb\u884c\u3002\u8fd9\u6837\u505a\u4e0d\u4ec5\u63d0\u9ad8\u4e86\u53ef\u6269\u5c55\u6027\uff0c\u8fd8\u80fd\u591f\u63d0\u5347\u8d44\u6e90\u7684\u5229\u7528\u7387\u3002\u8fd9\u5bf9\u4e8e\u9700\u8981\u6d88\u8017\u5927\u91cf\u8ba1\u7b97\u8d44\u6e90\u7684\u673a\u5668\u5b66\u4e60\u573a\u666f\u6765\u8bf4\uff0c\u662f\u5341\u5206\u6709\u6548\u7684\u3002"),(0,r.kt)("p",null,"\u4f46\u662f AI \u5de5\u7a0b\u5e08\u8981\u60f3\u4f7f\u7528\u4e91\u539f\u751f\u7684\u80fd\u529b\u901a\u5e38\u6bd4\u8f83\u56f0\u96be\u3002\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u4e91\u539f\u751f\u7684\u6982\u5ff5\u5df2\u7ecf\u8d8a\u6765\u8d8a\u590d\u6742\u3002\u60f3\u8981\u5728\u4e91\u539f\u751f\u4e4b\u4e0a\u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684\u6a21\u578b\u670d\u52a1\uff0c\u53ef\u80fd\u5bf9\u4e8e AI \u5de5\u7a0b\u5e08\u6765\u8bf4\uff0c\u9700\u8981\u989d\u5916\u5b66\u4e60\u6570\u79cd\u6982\u5ff5\uff1a\u6bd4\u5982 Deployment\u3001Service\u3001Ingress \u7b49\u3002"),(0,r.kt)("p",null,"\u800c KubeVela \u4f5c\u4e3a\u4e00\u4e2a\u7b80\u5355\u3001\u6613\u7528\u3001\u4e14\u9ad8\u53ef\u6269\u5c55\u7684\u4e91\u539f\u751f\u5e94\u7528\u7ba1\u7406\u5de5\u5177\uff0c\u80fd\u8ba9\u5f00\u53d1\u4eba\u5458\u65b9\u4fbf\u5feb\u6377\u5730\u5728 Kubernetes \u4e0a\u5b9a\u4e49\u4e0e\u4ea4\u4ed8\u5e94\u7528\uff0c\u65e0\u9700\u4e86\u89e3\u4efb\u4f55\u5e95\u5c42\u4e91\u539f\u751f\u57fa\u7840\u8bbe\u65bd\u76f8\u5173\u7684\u7ec6\u8282\u3002KubeVela \u62e5\u6709\u7740\u4e30\u5bcc\u7684\u53ef\u6269\u5c55\u6027\uff0c\u5176 AI \u63d2\u4ef6\u63d0\u4f9b\u4e86\u6a21\u578b\u8bad\u7ec3\u3001\u6a21\u578b\u670d\u52a1\u3001A/B \u6d4b\u8bd5\u7b49\u529f\u80fd\uff0c\u8986\u76d6\u4e86 AI \u5de5\u7a0b\u5e08\u7684\u57fa\u672c\u9700\u6c42\uff0c\u80fd\u591f\u5e2e\u52a9 AI \u5de5\u7a0b\u5e08\u5feb\u901f\u5728\u4e91\u539f\u751f\u73af\u5883\u4e2d\u8fdb\u884c\u6a21\u578b\u8bad\u7ec3\u548c\u6a21\u578b\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KubeVela \u7684 AI \u63d2\u4ef6\uff0c\u6765\u5e2e\u52a9\u5de5\u7a0b\u5e08\u66f4\u4fbf\u6377\u5730\u5b8c\u6210\u6a21\u578b\u8bad\u7ec3\u53ca\u6a21\u578b\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"kubevela-ai-\u63d2\u4ef6"},"KubeVela AI \u63d2\u4ef6"),(0,r.kt)("p",null,"KubeVela AI \u63d2\u4ef6\u5206\u4e3a\u6a21\u578b\u8bad\u7ec3\u548c\u6a21\u578b\u670d\u52a1\u4e24\u4e2a\u63d2\u4ef6\uff0c\u6a21\u578b\u8bad\u7ec3\u63d2\u4ef6\u57fa\u4e8e KubeFlow \u7684 training-operator\uff0c\u80fd\u591f\u652f\u6301\u5982 TensorFlow\u3001PyTorch\u3001MXNet \u7b49\u4e0d\u540c\u6846\u67b6\u7684\u5206\u5e03\u5f0f\u6a21\u578b\u8bad\u7ec3\u3002\u800c\u6a21\u578b\u670d\u52a1\u63d2\u4ef6\u57fa\u4e8e Seldon Core\uff0c\u53ef\u4ee5\u4fbf\u6377\u5730\u4f7f\u7528\u6a21\u578b\u542f\u52a8\u6a21\u578b\u670d\u52a1\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u6d41\u91cf\u5206\u53d1\uff0cA/B \u6d4b\u8bd5\u7b49\u9ad8\u7ea7\u529f\u80fd\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(77097).Z})),(0,r.kt)("p",null,"\u901a\u8fc7 KubeVela AI \u63d2\u4ef6\uff0c\u53ef\u4ee5\u5927\u5927\u7b80\u5316\u6a21\u578b\u8bad\u7ec3\u4efb\u52a1\u7684\u90e8\u7f72\u4ee5\u53ca\u6a21\u578b\u670d\u52a1\u7684\u90e8\u7f72\uff0c\u540c\u65f6\uff0c\u53ef\u4ee5\u5c06\u6a21\u578b\u8bad\u7ec3\u3001\u6a21\u578b\u670d\u52a1\u7b49\u8fc7\u7a0b\u4e0e KubeVela \u672c\u8eab\u7684\u5de5\u4f5c\u6d41\u3001\u591a\u96c6\u7fa4\u7b49\u529f\u80fd\u76f8\u7ed3\u5408\uff0c\u4ece\u800c\u5b8c\u6210\u751f\u4ea7\u53ef\u7528\u7684\u670d\u52a1\u90e8\u7f72\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/11.Machine_Learning_Demo"},"KubeVela Samples")," \u4e2d\u627e\u5230\u6240\u6709\u7684\u6e90\u7801\u548c YAML \u6587\u4ef6\u3002\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u9884\u8bad\u7ec3\u7684\u6a21\u578b\uff0c\u6587\u4ef6\u5939\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"style-model.yaml")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"color-model.yaml")," \u4f1a\u5c06\u6a21\u578b\u590d\u5236\u5230 PVC \u4e2d\u3002")),(0,r.kt)("h2",{id:"\u6a21\u578b\u8bad\u7ec3"},"\u6a21\u578b\u8bad\u7ec3"),(0,r.kt)("p",null,"\u9996\u5148\u542f\u52a8\u6a21\u578b\u8bad\u7ec3\u548c\u6a21\u578b\u670d\u52a1\u7684\u4e24\u4e2a\u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela addon enable model-training\nvela addon enable model-serving\n")),(0,r.kt)("p",null,"\u6a21\u578b\u8bad\u7ec3\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"model-training")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"jupyter-notebook")," \u4e24\u4e2a\u7ec4\u4ef6\u7c7b\u578b\uff0c \u6a21\u578b\u670d\u52a1\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"model-serving")," \u8fd9\u4e2a\u7ec4\u4ef6\u7c7b\u578b\u3002\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"vela show")," \u547d\u4ee4\u6765\u67e5\u770b\u8fd9\u4e09\u4e2a\u7ec4\u4ef6\u4e2d\u7684\u5177\u4f53\u53c2\u6570\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://kubevela.io/zh/docs/next/reference/addons/ai"},"KubeVela AI \u63d2\u4ef6\u6587\u6863"),", \u6765\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vela show model-training\nvela show jupyter-notebook\nvela show model-serving\n")),(0,r.kt)("p",null,"\u6211\u4eec\u6765\u8bad\u7ec3\u4e00\u4e2a\u7b80\u5355\u7684\u4f7f\u7528 TensorFlow \u6846\u67b6\u7684\u6a21\u578b\uff0c\u8fd9\u4e2a\u6a21\u578b\u7684\u6548\u679c\u662f\u80fd\u591f\u5c06\u7070\u8272\u7684\u56fe\u7247\u53d8\u6210\u5f69\u8272\u7684\u3002\u90e8\u7f72\u5982\u4e0b YAML \u6587\u4ef6\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u6a21\u578b\u8bad\u7ec3\u7684\u6e90\u7801\u6765\u6e90\u4e8e\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/emilwallner/Coloring-greyscale-images"},"emilwallner/Coloring-greyscale-images"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: training-serving\n  namespace: default\nspec:\n  components:\n  # \u8bad\u7ec3\u6a21\u578b\n  - name: demo-training\n    type: model-training\n    properties:\n      # \u8bad\u7ec3\u6a21\u578b\u7684\u955c\u50cf\n      image: fogdong/train-color:v1\n      # \u6a21\u578b\u8bad\u7ec3\u7684\u6846\u67b6\n      framework: tensorflow\n      # \u58f0\u660e\u5b58\u50a8\uff0c\u5c06\u6a21\u578b\u6301\u4e45\u5316\u3002\u6b64\u5904\u4f1a\u4f7f\u7528\u96c6\u7fa4\u5185\u7684\u9ed8\u8ba4 storage class \u6765\u521b\u5efa PVC\n      storage:\n        - name: "my-pvc"\n          mountPath: "/model"\n')),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c KubeVela \u5c06\u62c9\u8d77\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"TFJob")," \u8fdb\u884c\u6a21\u578b\u8bad\u7ec3\u3002"),(0,r.kt)("p",null,"\u4ec5\u4ec5\u662f\u8bad\u7ec3\u6a21\u578b\u5f88\u96be\u770b\u51fa\u6548\u679c\uff0c\u6211\u4eec\u4fee\u6539\u4e00\u4e0b\u8fd9\u4e2a YAML \u6587\u4ef6\uff0c\u5c06\u6a21\u578b\u670d\u52a1\u653e\u5230\u6a21\u578b\u8bad\u7ec3\u7684\u6b65\u9aa4\u4e4b\u540e\u3002\u540c\u65f6\uff0c\u56e0\u4e3a\u6a21\u578b\u670d\u52a1\u4f1a\u76f4\u63a5\u542f\u52a8\u6a21\u578b\uff0c\u800c\u6a21\u578b\u7684\u8f93\u5165\u8f93\u51fa\u4e0d\u592a\u76f4\u89c2\uff08ndarray \u6216\u8005 Tensor\uff09\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u518d\u90e8\u7f72\u4e00\u4e2a\u6d4b\u8bd5\u670d\u52a1\u6765\u8c03\u7528\u670d\u52a1\uff0c\u5e76\u5c06\u7ed3\u679c\u8f6c\u6362\u6210\u56fe\u50cf\u3002"),(0,r.kt)("p",null,"\u90e8\u7f72\u5982\u4e0b YAML \u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: training-serving\n  namespace: default\nspec:\n  components:\n  # \u8bad\u7ec3\u6a21\u578b\n  - name: demo-training\n    type: model-training\n    properties:\n      image: fogdong/train-color:v1\n      framework: tensorflow\n      storage:\n        - name: "my-pvc"\n          mountPath: "/model"\n  \n  # \u542f\u52a8\u6a21\u578b\u670d\u52a1\n  - name: demo-serving\n    type: model-serving\n    # \u6a21\u578b\u670d\u52a1\u4f1a\u5728\u6a21\u578b\u8bad\u7ec3\u5b8c\u6210\u540e\u542f\u52a8\n    dependsOn:\n      - demo-training\n    properties:\n      # \u542f\u52a8\u6a21\u578b\u670d\u52a1\u4f7f\u7528\u7684\u534f\u8bae\uff0c\u53ef\u4ee5\u4e0d\u586b\uff0c\u9ed8\u8ba4\u4f7f\u7528 seldon \u81ea\u8eab\u7684\u534f\u8bae\n      protocol: tensorflow\n      predictors:\n        - name: model\n          # \u6a21\u578b\u670d\u52a1\u7684\u526f\u672c\u6570\n          replicas: 1\n          graph:\n            # \u6a21\u578b\u540d\n            name: my-model\n            # \u6a21\u578b\u6846\u67b6\n            implementation: tensorflow\n            # \u6a21\u578b\u5730\u5740\uff0c\u4e0a\u4e00\u6b65\u4f1a\u5c06\u8bad\u7ec3\u5b8c\u7684\u6a21\u578b\u4fdd\u5b58\u5230 my-pvc \u8fd9\u4e2a pvc \u5f53\u4e2d\uff0c\u6240\u4ee5\u901a\u8fc7 pvc://my-pvc \u6307\u5b9a\u6a21\u578b\u7684\u5730\u5740\n            modelUri: pvc://my-pvc\n\n  # \u6d4b\u8bd5\u6a21\u578b\u670d\u52a1\n  - name: demo-rest-serving\n    type: webservice\n    # \u6d4b\u8bd5\u670d\u52a1\u4f1a\u5728\u6a21\u578b\u8bad\u7ec3\u5b8c\u6210\u540e\u542f\u52a8\n    dependsOn:\n      - demo-serving\n    properties:\n      image: fogdong/color-serving:v1\n      # \u4f7f\u7528 LoadBalancer \u66b4\u9732\u5bf9\u5916\u5730\u5740\uff0c\u65b9\u4fbf\u8c03\u7528\n      exposeType: LoadBalancer\n      env:\n        - name: URL\n          # \u6a21\u578b\u670d\u52a1\u7684\u5730\u5740\n          value: http://ambassador.vela-system.svc.cluster.local/seldon/default/demo-serving/v1/models/my-model:predict\n      ports:\n        # \u6d4b\u8bd5\u670d\u52a1\u7684\u7aef\u53e3\n        - port: 3333\n          expose: true\n')),(0,r.kt)("p",null,"\u90e8\u7f72\u4e4b\u540e\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"vela ls")," \u6765\u67e5\u770b\u5e94\u7528\u7684\u72b6\u6001\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela ls\n\ntraining-serving        demo-training       model-training          running healthy Job Succeeded   2022-03-02 17:26:40 +0800 CST\n\u251c\u2500                      demo-serving        model-serving           running healthy Available       2022-03-02 17:26:40 +0800 CST\n\u2514\u2500                      demo-rest-serving   webservice              running healthy Ready:1/1       2022-03-02 17:26:40 +0800 CST\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5e94\u7528\u5df2\u7ecf\u6b63\u5e38\u542f\u52a8\u3002\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"vela status <app-name> --endpoint")," \u6765\u67e5\u770b\u5e94\u7528\u7684\u670d\u52a1\u5730\u5740\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status training-serving --endpoint\n\n+---------+-----------------------------------+---------------------------------------------------+\n| CLUSTER |     REF(KIND/NAMESPACE/NAME)      |                     ENDPOINT                      |\n+---------+-----------------------------------+---------------------------------------------------+\n|         | Service/default/demo-rest-serving | tcp://47.251.10.177:3333                          |\n|         | Service/vela-system/ambassador    | http://47.251.36.228/seldon/default/demo-serving  |\n|         | Service/vela-system/ambassador    | https://47.251.36.228/seldon/default/demo-serving |\n+---------+-----------------------------------+---------------------------------------------------+\n")),(0,r.kt)("p",null,"\u8be5\u5e94\u7528\u6709\u4e09\u4e2a\u670d\u52a1\u5730\u5740\uff0c\u7b2c\u4e00\u4e2a\u662f\u6211\u4eec\u7684\u6d4b\u8bd5\u670d\u52a1\u7684\u5730\u5740\uff0c\u7b2c\u4e8c\u4e2a\u548c\u7b2c\u4e09\u90fd\u662f\u539f\u751f\u6a21\u578b\u7684\u5730\u5740\u3002\u6211\u4eec\u53ef\u4ee5\u8c03\u7528\u6d4b\u8bd5\u670d\u52a1\u6765\u67e5\u770b\u6a21\u578b\u7684\u6548\u679c\uff1a\u6d4b\u8bd5\u670d\u52a1\u4f1a\u8bfb\u53d6\u56fe\u50cf\u7684\u5185\u5bb9\uff0c\u5e76\u5c06\u5176\u8f6c\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tensor")," \u5e76\u8bf7\u6c42\u6a21\u578b\u670d\u52a1\uff0c\u6700\u540e\u5c06\u6a21\u578b\u670d\u52a1\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tensor")," \u8f6c\u6210\u56fe\u50cf\u8fd4\u56de\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u9009\u62e9\u4e00\u5f20\u9ed1\u767d\u7684\u5973\u6027\u56fe\u7247\u4f5c\u4e3a\u8f93\u5165\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(634).Z})),(0,r.kt)("p",null,"\u8bf7\u6c42\u540e\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u8f93\u51fa\u4e86\u4e00\u5f20\u5f69\u8272\u56fe\u7247\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(4495).Z})),(0,r.kt)("h2",{id:"\u6a21\u578b\u670d\u52a1\uff1a\u7070\u5ea6\u6d4b\u8bd5"},"\u6a21\u578b\u670d\u52a1\uff1a\u7070\u5ea6\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u9664\u4e86\u76f4\u63a5\u542f\u52a8\u6a21\u578b\u670d\u52a1\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u5728\u4e00\u4e2a\u6a21\u578b\u670d\u52a1\u4e2d\u4f7f\u7528\u591a\u4e2a\u7248\u672c\u7684\u6a21\u578b\uff0c\u5e76\u5bf9\u5176\u5206\u914d\u4e0d\u540c\u7684\u6d41\u91cf\u4ee5\u8fdb\u884c\u7070\u5ea6\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"\u90e8\u7f72\u5982\u4e0b YAML\uff0c\u53ef\u4ee5\u770b\u5230\uff0cv1 \u7248\u672c\u7684\u6a21\u578b\u548c v2 \u7248\u672c\u7684\u6a21\u578b\u90fd\u8bbe\u7f6e\u4e3a\u4e86 50% \u7684\u6d41\u91cf\u3002\u540c\u6837\uff0c\u6211\u4eec\u5728\u6a21\u578b\u670d\u52a1\u540e\u9762\u90e8\u7f72\u4e00\u4e2a\u6d4b\u8bd5\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: color-serving\n  namespace: default\nspec:\n  components:\n  - name: color-model-serving\n    type: model-serving\n    properties:\n      protocol: tensorflow\n      predictors:\n        - name: model1\n          replicas: 1\n          # v1 \u7248\u672c\u7684\u6a21\u578b\u6d41\u91cf\u4e3a 50\n          traffic: 50\n          graph:\n            name: my-model\n            implementation: tensorflow\n            # \u6a21\u578b\u5730\u5740\uff0c\u5728 color-model \u8fd9\u4e2a pvc \u4e2d /model/v1 \u8def\u5f84\u4e0b\u5b58\u653e\u4e86\u6211\u4eec\u7684 v1 \u7248\u672c\u6a21\u578b\uff0c\u6240\u4ee5\u901a\u8fc7 pvc://color-model/model/v1 \u6307\u5b9a\u6a21\u578b\u7684\u5730\u5740\n            modelUri: pvc://color-model/model/v1\n        - name: model2\n          replicas: 1\n          # v2 \u7248\u672c\u7684\u6a21\u578b\u6d41\u91cf\u4e3a 50\n          traffic: 50\n          graph:\n            name: my-model\n            implementation: tensorflow\n            # \u6a21\u578b\u5730\u5740\uff0c\u5728 color-model \u8fd9\u4e2a pvc \u4e2d /model/v2 \u8def\u5f84\u4e0b\u5b58\u653e\u4e86\u6211\u4eec\u7684 v2 \u7248\u672c\u6a21\u578b\uff0c\u6240\u4ee5\u901a\u8fc7 pvc://color-model/model/v2 \u6307\u5b9a\u6a21\u578b\u7684\u5730\u5740\n            modelUri: pvc://color-model/model/v2\n  - name: color-rest-serving\n    type: webservice\n    dependsOn:\n      - color-model-serving\n    properties:\n      image: fogdong/color-serving:v1\n      exposeType: LoadBalancer\n      env:\n        - name: URL\n          value: http://ambassador.vela-system.svc.cluster.local/seldon/default/color-model-serving/v1/models/my-model:predict\n      ports:\n        - port: 3333\n          expose: true\n")),(0,r.kt)("p",null,"\u5f53\u6a21\u578b\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"vela status <app-name> --endpoint")," \u67e5\u770b\u6a21\u578b\u670d\u52a1\u7684\u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status color-serving --endpoint\n\n+---------+------------------------------------+----------------------------------------------------------+\n| CLUSTER |      REF(KIND/NAMESPACE/NAME)      |                         ENDPOINT                         |\n+---------+------------------------------------+----------------------------------------------------------+\n|         | Service/vela-system/ambassador     | http://47.251.36.228/seldon/default/color-model-serving  |\n|         | Service/vela-system/ambassador     | https://47.251.36.228/seldon/default/color-model-serving |\n|         | Service/default/color-rest-serving | tcp://47.89.194.94:3333                                  |\n+---------+------------------------------------+----------------------------------------------------------+\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u4e00\u5f20\u9ed1\u767d\u7684\u57ce\u5e02\u56fe\u7247\u8bf7\u6c42\u6a21\u578b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(10462).Z})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u7b2c\u4e00\u6b21\u8bf7\u6c42\u7684\u7ed3\u679c\u5982\u4e0b\u3002\u867d\u7136\u5929\u7a7a\u548c\u5730\u9762\u90fd\u88ab\u6e32\u67d3\u6210\u5f69\u8272\u4e86\uff0c\u4f46\u662f\u57ce\u5e02\u672c\u8eab\u8fd8\u662f\u9ed1\u767d\u7684\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(98435).Z})),(0,r.kt)("p",null,"\u518d\u6b21\u8bf7\u6c42\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u6b21\u8bf7\u6c42\u7684\u7ed3\u679c\u4e2d\uff0c\u5929\u7a7a\u3001\u5730\u9762\u548c\u57ce\u5e02\u90fd\u88ab\u6e32\u67d3\u6210\u4e86\u5f69\u8272\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(9656).Z})),(0,r.kt)("p",null,"\u901a\u8fc7\u5bf9\u4e0d\u540c\u7248\u672c\u7684\u6a21\u578b\u8fdb\u884c\u6d41\u91cf\u5206\u53d1\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u66f4\u597d\u5730\u5bf9\u6a21\u578b\u7ed3\u679c\u8fdb\u884c\u5224\u65ad\u3002"),(0,r.kt)("h2",{id:"\u6a21\u578b\u670d\u52a1\uff1aab-\u6d4b\u8bd5"},"\u6a21\u578b\u670d\u52a1\uff1aA/B \u6d4b\u8bd5"),(0,r.kt)("p",null,"\u540c\u6837\u4e00\u5f20\u9ed1\u767d\u7684\u56fe\u7247\uff0c\u6211\u4eec\u65e2\u53ef\u4ee5\u901a\u8fc7\u6a21\u578b\u5c06\u5176\u53d8\u6210\u5f69\u8272\u7684\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e0a\u4f20\u53e6\u4e00\u5f20\u98ce\u683c\u56fe\u7247\uff0c\u5bf9\u539f\u56fe\u8fdb\u884c\u98ce\u683c\u8fc1\u79fb\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\uff0c\u7a76\u7adf\u662f\u5f69\u8272\u7684\u56fe\u7247\u597d\u8fd8\u662f\u4e0d\u540c\u98ce\u683c\u7684\u56fe\u7247\u66f4\u80dc\u4e00\u7b79\uff1f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fdb\u884c A/B \u6d4b\u8bd5\uff0c\u6765\u63a2\u7d22\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u90e8\u7f72\u5982\u4e0b YAML\uff0c\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"customRouting"),"\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Header")," \u4e2d\u5e26\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"style: transfer")," \u7684\u8bf7\u6c42\uff0c\u8f6c\u53d1\u5230\u98ce\u683c\u8fc1\u79fb\u7684\u6a21\u578b\u3002\u540c\u65f6\uff0c\u4f7f\u8fd9\u4e2a\u98ce\u683c\u8fc1\u79fb\u7684\u6a21\u578b\u4e0e\u5f69\u8272\u5316\u7684\u6a21\u578b\u5171\u7528\u4e00\u4e2a\u5730\u5740\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u98ce\u683c\u8fc1\u79fb\u7684\u6a21\u578b\u6765\u6e90\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2"},"TensorFlow Hub"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: color-style-ab-serving\n  namespace: default\nspec:\n  components:\n  - name: color-ab-serving\n    type: model-serving\n    properties:\n      protocol: tensorflow\n      predictors:\n        - name: model1\n          replicas: 1\n          graph:\n            name: my-model\n            implementation: tensorflow\n            modelUri: pvc://color-model/model/v2\n  - name: style-ab-serving\n    type: model-serving\n    properties:\n      protocol: tensorflow\n      # \u98ce\u683c\u8fc1\u79fb\u7684\u6a21\u578b\u9700\u8981\u7684\u65f6\u95f4\u8f83\u957f\uff0c\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\u4f7f\u8bf7\u6c42\u4e0d\u4f1a\u88ab\u8d85\u65f6\n      timeout: "10000"\n      customRouting:\n        # \u6307\u5b9a\u81ea\u5b9a\u4e49 Header\n        header: "style: transfer"\n        # \u6307\u5b9a\u81ea\u5b9a\u4e49\u8def\u7531\n        serviceName: "color-ab-serving"\n      predictors:\n        - name: model2\n          replicas: 1\n          graph:\n            name: my-model\n            implementation: tensorflow\n            modelUri: pvc://style-model/model\n  - name: ab-rest-serving\n    type: webservice\n    dependsOn:\n      - color-ab-serving\n      - style-ab-serving\n    properties:\n      image: fogdong/style-serving:v1\n      exposeType: LoadBalancer\n      env:\n        - name: URL\n          value: http://ambassador.vela-system.svc.cluster.local/seldon/default/color-ab-serving/v1/models/my-model:predict\n      ports:\n        - port: 3333\n          expose: true\n')),(0,r.kt)("p",null,"\u90e8\u7f72\u6210\u529f\u540e\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"vela status <app-name> --endpoint")," \u67e5\u770b\u6a21\u578b\u670d\u52a1\u7684\u5730\u5740\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela status color-style-ab-serving --endpoint\n\n+---------+---------------------------------+-------------------------------------------------------+\n| CLUSTER |    REF(KIND/NAMESPACE/NAME)     |                       ENDPOINT                        |\n+---------+---------------------------------+-------------------------------------------------------+\n|         | Service/vela-system/ambassador  | http://47.251.36.228/seldon/default/color-ab-serving  |\n|         | Service/vela-system/ambassador  | https://47.251.36.228/seldon/default/color-ab-serving |\n|         | Service/vela-system/ambassador  | http://47.251.36.228/seldon/default/style-ab-serving  |\n|         | Service/vela-system/ambassador  | https://47.251.36.228/seldon/default/style-ab-serving |\n|         | Service/default/ab-rest-serving | tcp://47.251.5.97:3333                                |\n+---------+---------------------------------+-------------------------------------------------------+\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5e94\u7528\u4e2d\uff0c\u4e24\u4e2a\u670d\u52a1\u5404\u81ea\u6709\u4e24\u4e2a\u5730\u5740\uff0c\u4f46\u662f\u7b2c\u4e8c\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"style-ab-serving")," \u7684\u6a21\u578b\u670d\u52a1\u5730\u5740\u662f\u65e0\u6548\u7684\uff0c\u56e0\u4e3a\u8fd9\u4e2a\u6a21\u578b\u670d\u52a1\u5df2\u7ecf\u88ab\u6307\u5411\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"color-ab-serving")," \u7684\u5730\u5740\u4e2d\u3002\u540c\u6837\uff0c\u6211\u4eec\u901a\u8fc7\u8bf7\u6c42\u6d4b\u8bd5\u670d\u52a1\u6765\u67e5\u770b\u6a21\u578b\u6548\u679c\u3002"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5728\u4e0d\u52a0 header \u7684\u60c5\u51b5\u4e0b\uff0c\u56fe\u50cf\u4f1a\u4ece\u9ed1\u767d\u53d8\u4e3a\u5f69\u8272\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(57277).Z})),(0,r.kt)("p",null,"\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a\u6d77\u6d6a\u7684\u56fe\u7247\u4f5c\u4e3a\u98ce\u683c\u6e32\u67d3\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(26504).Z})),(0,r.kt)("p",null,"\u6211\u4eec\u4e3a\u672c\u6b21\u8bf7\u6c42\u52a0\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"style: transfer")," \u7684 Header\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u57ce\u5e02\u53d8\u6210\u4e86\u6d77\u6d6a\u98ce\u683c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(77125).Z})),(0,r.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4e00\u5f20\u6c34\u58a8\u753b\u7684\u56fe\u7247\u4f5c\u4e3a\u98ce\u683c\u6e32\u67d3\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(30752).Z})),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u6b21\u57ce\u5e02\u53d8\u6210\u4e86\u6c34\u58a8\u753b\u98ce\u683c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:t(10060).Z})),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u901a\u8fc7 KubeVela \u7684 AI \u63d2\u4ef6\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u66f4\u4fbf\u6377\u5730\u8fdb\u884c\u6a21\u578b\u8bad\u7ec3\u4e0e\u6a21\u578b\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u901a\u8fc7\u4e0e KubeVela \u7684\u7ed3\u5408\uff0c\u6211\u4eec\u8fd8\u80fd\u5c06\u6d4b\u8bd5\u5b8c\u6548\u679c\u7684\u6a21\u578b\u901a\u8fc7 KubeVela \u7684\u591a\u73af\u5883\u529f\u80fd\uff0c\u4e0b\u53d1\u5230\u4e0d\u540c\u7684\u73af\u5883\u4e2d\uff0c\u4ece\u800c\u5b9e\u73b0\u6a21\u578b\u7684\u7075\u6d3b\u90e8\u7f72\u3002"))}m.isMDXComponent=!0},57277:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ab-request1-05b112438a860a7e590f9922add14c46.png"},77125:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ab-request2-9eb2e8760112fe66bcaf742fb97d4248.png"},10060:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ab-request3-09e8be352e5bef4a239b1ab2bfa211da.png"},77097:function(e,n,t){"use strict";n.Z=t.p+"assets/images/ai-addon-b00e60c94fb2a6e6d6d661cbf2e1cef8.png"},98435:function(e,n,t){"use strict";n.Z=t.p+"assets/images/canary-request1-de4f9f1c4f81b200f2827e5277e8bc60.png"},9656:function(e,n,t){"use strict";n.Z=t.p+"assets/images/canary-request2-1ce63a83354786cb7e9f56891002771a.png"},10462:function(e,n,t){"use strict";n.Z=t.p+"assets/images/chicago-grey-9beb20b9876bfbb19f12ccb570ad3e77.png"},30752:function(e,n,t){"use strict";n.Z=t.p+"assets/images/chinese-style-e6c8e27f2f4d33f707a58d3f274bde7a.jpg"},4495:function(e,n,t){"use strict";n.Z=t.p+"assets/images/test-request-d575b2a24081dc7da768f9dd8fd18572.png"},26504:function(e,n,t){"use strict";n.Z=t.p+"assets/images/wave-25ac6d548667b746e5349d29e39b915e.jpg"},634:function(e,n,t){"use strict";n.Z=t.p+"assets/images/woman-grey-7d5fe53e7da342e9136cf2473d2c4f8b.png"}}]);