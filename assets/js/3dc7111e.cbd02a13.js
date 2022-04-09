(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[12476],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=s(n),k=r,c=u["".concat(o,".").concat(k)]||u[k]||p[k]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62306:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return o},default:function(){return m}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"Alibaba Cloud SLB-RULE"},d={unversionedId:"end-user/components/cloud-services/terraform/alibaba-slb-rule",id:"version-v1.3/end-user/components/cloud-services/terraform/alibaba-slb-rule",isDocsHomePage:!1,title:"Alibaba Cloud SLB-RULE",description:"Description",source:"@site/versioned_docs/version-v1.3/end-user/components/cloud-services/terraform/alibaba-slb-rule.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/alibaba-slb-rule",permalink:"/docs/end-user/components/cloud-services/terraform/alibaba-slb-rule",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/alibaba-slb-rule.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Alibaba Cloud SLB-RULE"}},o=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[{value:"Properties",id:"properties",children:[]}]}],s={toc:o};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Terraform-based module creates an SLB instance under AliCloud's VPC and configures rules"),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address_type"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of address. Choices are 'intranet' and 'internet'. Default to 'internet'."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"availability_zone"),(0,l.kt)("td",{parentName:"tr",align:null},"The available zone to launch modules."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"available_disk_category"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter the results by a specific disk category. Can be either ",(0,l.kt)("inlineCode",{parentName:"td"},"cloud"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"cloud_efficiency"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"cloud_ssd"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"ephemeral_ssd"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"available_resource_creation"),(0,l.kt)("td",{parentName:"tr",align:null},"Type of resources that can be created."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"backend_port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port used by the Server Load Balancer instance backend. Valid value range: ","[1-65535]","."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bandwidth"),(0,l.kt)("td",{parentName:"tr",align:null},"Bandwidth peak of Listener."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cidr_block"),(0,l.kt)("td",{parentName:"tr",align:null},"The CIDR block for the VPC. The cidr_block is Optional and default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"172.16.0.0/12")," after ",(0,l.kt)("inlineCode",{parentName:"td"},"v1.119.0+"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"The cookie configured on the server. It is mandatory when ",(0,l.kt)("inlineCode",{parentName:"td"},"sticky_session")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"on")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"sticky_session_type")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"server"),". Otherwise, it will be ignored. Valid value\uff1aString in line with RFC 2965, with length being 1- 200. It only contains characters such as ASCII codes, English letters and digits instead of the comma, semicolon or spacing, and it cannot start with $."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cookie_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Cookie timeout. It is mandatory when sticky_session is ",(0,l.kt)("inlineCode",{parentName:"td"},"on")," and sticky_session_type is ",(0,l.kt)("inlineCode",{parentName:"td"},"insert"),". Otherwise, it will be ignored. Valid value range: ","[1-86400]"," in seconds."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu_core_count"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of CPU cores."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Domain name of the forwarding rule. It can contain letters a-z, numbers 0-9, hyphens (-), and periods (.), and wildcard characters."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"frontend_port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port used by the Server Load Balancer instance frontend."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable health check. Valid values are ",(0,l.kt)("inlineCode",{parentName:"td"},"on")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"off"),". TCP and UDP listener's HealthCheck is always on, so it will be ignore when launching TCP or UDP listener. This parameter is required and takes effect only when ListenerSync is set to off."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_connect_port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port used for health check. Valid value range: ","[1-65535]",". Default to ",(0,l.kt)("inlineCode",{parentName:"td"},"None")," means the backend server port is used."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Domain name used for health check. When it used to launch TCP listener, health_check_type must be ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),". Its length is limited to 1-80 and only characters such as letters, digits, \u2018-\u2018 and \u2018.\u2019 are allowed. When it is not set or empty, Server Load Balancer uses the private network IP address of each backend server as Domain used for health check."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_http_code"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular health check HTTP status code. Multiple codes are segmented by \u201c,\u201d. It is required when health_check is on. Default to ",(0,l.kt)("inlineCode",{parentName:"td"},"http_2xx"),". Valid values are: ",(0,l.kt)("inlineCode",{parentName:"td"},"http_2xx"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"http_3xx"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"http_4xx")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"http_5xx"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Time interval of health checks. It is required when ",(0,l.kt)("inlineCode",{parentName:"td"},"health_check")," is on. Valid value range: ","[1-50]"," in seconds. Default to 2."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum timeout of each health check response. It is required when ",(0,l.kt)("inlineCode",{parentName:"td"},"health_check")," is on. Valid value range: ","[1-300]"," in seconds. Default to 5. Note: If ",(0,l.kt)("inlineCode",{parentName:"td"},"health_check_timeout")," < ",(0,l.kt)("inlineCode",{parentName:"td"},"health_check_interval"),", its will be replaced by ",(0,l.kt)("inlineCode",{parentName:"td"},"health_check_interval"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"health_check_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"URI used for health check. When it used to launch TCP listener, health_check_type must be ",(0,l.kt)("inlineCode",{parentName:"td"},"http"),". Its length is limited to 1-80 and it must start with /. Only characters such as letters, digits, \u2018-\u2019, \u2018/\u2019, \u2018.\u2019, \u2018%\u2019, \u2018?\u2019, #\u2019 and \u2018&\u2019 are allowed."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthy_threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Threshold determining the result of the health check is success. It is required when ",(0,l.kt)("inlineCode",{parentName:"td"},"health_check")," is on. Valid value range: ","[1-10]"," in seconds. Default to 3."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"images_most_recent"),(0,l.kt)("td",{parentName:"tr",align:null},"If more than one result are returned, select the most recent one."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"images_name_regex"),(0,l.kt)("td",{parentName:"tr",align:null},"A regex string to filter resulting images by name."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"images_owners"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter results by a specific image owner. Valid items are ",(0,l.kt)("inlineCode",{parentName:"td"},"system"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"self"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"others"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"marketplace"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"internal"),(0,l.kt)("td",{parentName:"tr",align:null},"It has been deprecated from 1.6.0 and 'address_type' instead. If true, SLB instance will be an internal SLB."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listener_sync"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether a forwarding rule inherits the settings of a health check , session persistence, and scheduling algorithm from a listener. Default to on."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memory_size"),(0,l.kt)("td",{parentName:"tr",align:null},"Size of memory, measured in GB."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of a new load balancer."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"The protocol to listen on."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rule_health_check_connect_port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port used for health check. Valid value range: ","[1-65535]",". Default to ",(0,l.kt)("inlineCode",{parentName:"td"},"None")," means the backend server port is used."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scheduler"),(0,l.kt)("td",{parentName:"tr",align:null},"Scheduling algorithm, Valid values are ",(0,l.kt)("inlineCode",{parentName:"td"},"wrr"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"rr")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"wlc"),". Default to ",(0,l.kt)("inlineCode",{parentName:"td"},"wrr"),". This parameter is required and takes effect only when ListenerSync is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"off"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spec"),(0,l.kt)("td",{parentName:"tr",align:null},"The specification of the SLB instance."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sticky_session"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable session persistence, Valid values are ",(0,l.kt)("inlineCode",{parentName:"td"},"on")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"off"),". Default to ",(0,l.kt)("inlineCode",{parentName:"td"},"off"),". This parameter is required and takes effect only when ListenerSync is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"off"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sticky_session_type"),(0,l.kt)("td",{parentName:"tr",align:null},"Mode for handling the cookie. If sticky_session is ",(0,l.kt)("inlineCode",{parentName:"td"},"on"),", it is mandatory. Otherwise, it will be ignored. Valid values are insert and server. insert means it is inserted from Server Load Balancer; server means the Server Load Balancer learns from the backend server."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"A mapping of tags to assign to the resource."),(0,l.kt)("td",{parentName:"tr",align:null},"map(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unhealthy_threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Threshold determining the result of the health check is fail. It is required when ",(0,l.kt)("inlineCode",{parentName:"td"},"health_check")," is on. Valid value range: ","[1-10]"," in seconds. Default to 3."),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"Domain of the forwarding rule. It must be 2-80 characters in length. Only letters a-z, numbers 0-9, and characters '-' '/' '?' '%' '#' and '&' are allowed. URLs must be started with the character '/', but cannot be '/' alone."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vswitch_id"),(0,l.kt)("td",{parentName:"tr",align:null},"VSwitch variables, if vswitch_id is empty, then the net_type = classic."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);