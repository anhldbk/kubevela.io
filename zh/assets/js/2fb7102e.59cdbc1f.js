(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[13614],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return o},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},o),{},{components:a})):n.createElement(k,i({ref:e},o))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38603:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return o}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={title:"\u963f\u91cc\u4e91 SLB-LISTENER"},d={unversionedId:"end-user/components/cloud-services/terraform/alibaba-slb-listener",id:"version-v1.3/end-user/components/cloud-services/terraform/alibaba-slb-listener",isDocsHomePage:!1,title:"\u963f\u91cc\u4e91 SLB-LISTENER",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/end-user/components/cloud-services/terraform/alibaba-slb-listener.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/alibaba-slb-listener",permalink:"/zh/docs/end-user/components/cloud-services/terraform/alibaba-slb-listener",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/alibaba-slb-listener.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"\u963f\u91cc\u4e91 SLB-LISTENER"}},s=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}]}],p={toc:s};function o(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"Quickly create slb listeners resources on AliCloud based on Terraform module"),(0,l.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"advanced_setting"),(0,l.kt)("td",{parentName:"tr",align:null},"The slb listener advanced settings to use on listeners. It's supports fields 'sticky_session', 'sticky_session_type', 'cookie', 'cookie_timeout', 'gzip', 'persistence_timeout', 'acl_status', 'acl_type', 'acl_id', 'idle_timeout' and 'request_timeout'."),(0,l.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookie_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create load balancer listeners."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_gzip"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_health_check"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_sticky_session"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check"),(0,l.kt)("td",{parentName:"tr",align:null},"The slb listener health check settings to use on listeners. It's supports fields 'healthy_threshold','unhealthy_threshold','health_check_timeout', 'health_check', 'health_check_type', 'health_check_connect_port', 'health_check_domain', 'health_check_uri', 'health_check_http_code', 'health_check_method' and 'health_check_interval'"),(0,l.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_connect_port"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_domain"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_http_code"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'health_check' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'health_check' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_type"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthy_threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'health_check' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listeners"),(0,l.kt)("td",{parentName:"tr",align:null},"List of slb listeners. Each item can set all or part fields of alicloud_slb_listener resource."),(0,l.kt)("td",{parentName:"tr",align:null},"list(map(string))"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"persistence_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profile"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated from version 1.3.0)The profile name as set in the shared credentials file. If not set, it will be sourced from the ALICLOUD_PROFILE environment variable."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"region"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated from version 1.3.0)The region used to launch this module resources."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retrive_slb_id"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retrive_slb_ip"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"retrive_slb_proto"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shared_credentials_file"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated from version 1.3.0)This is the path to the shared credentials file. If this is not set and a profile is specified, $HOME/.aliyun/config.json will be used."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"skip_region_validation"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated from version 1.3.0)Skip static validation of region ID. Used by users of alternative AlibabaCloud-like APIs or users w/ access to regions that are not public (yet)."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"slb"),(0,l.kt)("td",{parentName:"tr",align:null},"The load balancer ID used to add one or more listeners."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_certificates"),(0,l.kt)("td",{parentName:"tr",align:null},"SLB Server certificate settings to use on listeners. It's supports fields 'tls_cipher_policy', 'server_certificate_id' and 'enable_http2'"),(0,l.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sticky_session_type"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'advance_setting' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unhealthy_threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"(Deprecated) It has been deprecated from 1.2.0, use 'listeners' and 'health_check' instead."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x_forwarded_for"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional HTTP Header field 'X-Forwarded-For' to use on listeners. It's supports fields 'retrive_slb_ip', 'retrive_slb_id' and 'retrive_slb_proto'"),(0,l.kt)("td",{parentName:"tr",align:null},"map(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))))}o.isMDXComponent=!0}}]);