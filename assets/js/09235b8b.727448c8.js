(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[16725],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(f,i(i({ref:e},d),{},{components:n})):r.createElement(f,i({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86877:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"AWS GUARDDUTY"},l={unversionedId:"end-user/components/cloud-services/terraform/aws-guardduty",id:"version-v1.2/end-user/components/cloud-services/terraform/aws-guardduty",isDocsHomePage:!1,title:"AWS GUARDDUTY",description:"Description",source:"@site/versioned_docs/version-v1.2/end-user/components/cloud-services/terraform/aws-guardduty.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/aws-guardduty",permalink:"/docs/v1.2/end-user/components/cloud-services/terraform/aws-guardduty",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/aws-guardduty.md",version:"v1.2",lastUpdatedBy:"Avery",lastUpdatedAt:1649401229,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"AWS GUARDDUTY"}},s=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[{value:"Properties",id:"properties",children:[]}]}],u={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Terraform module to provision AWS Guard Duty"),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cloudwatch_event_rule_pattern_detail_type"),(0,o.kt)("td",{parentName:"tr",align:null},"The detail-type pattern used to match events that will be sent to SNS.\\n\\nFor more information, see:\\n",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html%5Cnhttps://docs.aws.amazon.com/eventbridge/latest/userguide/event-types.html%5Cnhttps://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html%5Cn"},"https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/CloudWatchEventsandEventPatterns.html\\nhttps://docs.aws.amazon.com/eventbridge/latest/userguide/event-types.html\\nhttps://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html\\n")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"create_sns_topic"),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether an SNS topic should be created for notifications.\\nIf you want to send findings to a new SNS topic, set this to true and provide a valid configuration for subscribers.\\n"),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"enable_cloudwatch"),(0,o.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether an CloudWatch logging should be enabled for GuardDuty\\n"),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"finding_publishing_frequency"),(0,o.kt)("td",{parentName:"tr",align:null},'The frequency of notifications sent for finding occurrences. If the detector is a GuardDuty member account, the value\\nis determined by the GuardDuty master account and cannot be modified, otherwise it defaults to SIX_HOURS.\\n\\nFor standalone and GuardDuty master accounts, it must be configured in Terraform to enable drift detection.\\nValid values for standalone and master accounts: FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS."\\n\\nFor more information, see:\\n',(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html#guardduty_findings_cloudwatch_notification_frequency%5Cn"},"https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings_cloudwatch.html#guardduty_findings_cloudwatch_notification_frequency\\n")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"findings_notification_arn"),(0,o.kt)("td",{parentName:"tr",align:null},"The ARN for an SNS topic to send findings notifications to. This is only used if create_sns_topic is false.\\nIf you want to send findings to an existing SNS topic, set the value of this to the ARN of the existing topic and set\\ncreate_sns_topic to false.\\n"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"subscribers"),(0,o.kt)("td",{parentName:"tr",align:null},"A map of subscription configurations for SNS topics\\n\\nFor more information, see:\\n",(0,o.kt)("a",{parentName:"td",href:"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sns_topic_subscription#argument-reference%5Cn%5Cnprotocol:%5Cn"},"https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sns_topic_subscription#argument-reference\\n\\nprotocol:\\n"),"  The protocol to use. The possible values for this are: sqs, sms, lambda, application. (http or https are partially\\n  supported, see link) (email is an option but is unsupported in terraform, see link).\\nendpoint:\\n  The endpoint to send data to, the contents will vary with the protocol. (see link for more information)\\nendpoint_auto_confirms:\\n  Boolean indicating whether the end point is capable of auto confirming subscription e.g., PagerDuty. Default is\\n  false\\nraw_message_delivery:\\n  Boolean indicating whether or not to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property).\\n  Default is false\\n"),(0,o.kt)("td",{parentName:"tr",align:null},"map(object({\\n    protocol               = string\\n    endpoint               = string\\n    endpoint_auto_confirms = bool\\n    raw_message_delivery   = bool\\n  }))"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"namespace"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);