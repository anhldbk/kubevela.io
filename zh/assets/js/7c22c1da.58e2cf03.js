(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[80356],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70426:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"Gcp-Openwisp"},l={unversionedId:"end-user/components/cloud-services/terraform/gcp-openwisp",id:"version-v1.3/end-user/components/cloud-services/terraform/gcp-openwisp",isDocsHomePage:!1,title:"Gcp-Openwisp",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/end-user/components/cloud-services/terraform/gcp-openwisp.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/gcp-openwisp",permalink:"/zh/docs/end-user/components/cloud-services/terraform/gcp-openwisp",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/gcp-openwisp.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"Gcp-Openwisp"}},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]}]}],s={toc:p};function u(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"Terraform files for deploying docker-openwisp infrastructure in Google Cloud."),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("h3",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"database_cloudsql"),(0,o.kt)("td",{parentName:"tr",align:null},"Find documentation here: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md"},"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md")),(0,o.kt)("td",{parentName:"tr",align:null},"object({\\n    name              = string\\n    tier              = string\\n    require_ssl       = bool\\n    availability_type = string\\n    disk_size         = number\\n    disk_type         = string\\n    sslmode           = string\\n    username          = string\\n    password          = string\\n    database          = string\\n    auto_backup = object({\\n      enabled    = bool\\n      start_time = string\\n    })\\n    maintaince = object({\\n      day   = number\\n      hour  = number\\n      track = string\\n    })\\n  })"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gce_persistent_disk"),(0,o.kt)("td",{parentName:"tr",align:null},"Find documentation here: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md"},"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md")),(0,o.kt)("td",{parentName:"tr",align:null},"object({\\n    name = string\\n    type = string\\n    size = number\\n    snapshots = object({\\n      name             = string\\n      hours_in_cycle   = string\\n      start_time       = string\\n      retention_days   = number\\n      on_disk_deletion = string\\n    })\\n  })"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gke_cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"Find documentation here: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md"},"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md")),(0,o.kt)("td",{parentName:"tr",align:null},"object({\\n    cluster_name             = string\\n    kubernetes_version       = string\\n    logging_service          = string\\n    monitoring_service       = string\\n    master_ipv4_cidr_block   = string\\n    regional                 = bool\\n    enable_private_endpoint  = bool\\n    daily_maintenance_window = string\\n    authorized_networks = list(object({\\n      display_name = string\\n      cidr_block   = string\\n    }))\\n  })"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gke_node_groups"),(0,o.kt)("td",{parentName:"tr",align:null},"Find documentation here: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md"},"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md")),(0,o.kt)("td",{parentName:"tr",align:null},"list(object({\\n    pool_name           = string\\n    initial_node_count  = number\\n    min_node_count      = number\\n    max_node_count      = number\\n    disk_size_gb        = number\\n    auto_repair         = bool\\n    auto_upgrade        = bool\\n    is_preemptible      = bool\\n    disk_type           = string\\n    instance_image_type = string\\n    oauth_scopes        = list(string)\\n    machine_type        = string\\n    enable_autoscaling  = bool\\n  }))"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"google_services"),(0,o.kt)("td",{parentName:"tr",align:null},"Find documentation here: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md"},"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md")),(0,o.kt)("td",{parentName:"tr",align:null},"object({\\n    service_account             = string\\n    project_id                  = string\\n    region                      = string\\n    zone                        = string\\n    common_resource_description = string\\n    configure_gloud             = bool\\n    disable_apis_on_destroy     = bool\\n    use_cloud_sql               = bool\\n    use_cloud_dns               = bool\\n  })"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"network_config"),(0,o.kt)("td",{parentName:"tr",align:null},"Find documentation here: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md"},"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md")),(0,o.kt)("td",{parentName:"tr",align:null},"object({\\n    vpc_name                  = string\\n    subnet_cidr               = string\\n    pods_cidr_range           = string\\n    services_cidr_range       = string\\n    http_loadbalancer_ip_name = string\\n    openvpn_ip_name           = string\\n    freeradius_ip_name        = string\\n    openwisp_dns_zone_name    = string\\n    openwisp_dns_name         = string\\n    openwisp_dns_records_ttl  = number\\n    subnet_flowlogs = object({\\n      enable   = bool\\n      interval = string\\n      sampling = number\\n      metadata = string\\n    })\\n  })"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"openwisp_services"),(0,o.kt)("td",{parentName:"tr",align:null},"Find documentation here: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md"},"https://github.com/atb00ker/terraform-gcp-openwisp/blob/master/docs/input.md")),(0,o.kt)("td",{parentName:"tr",align:null},"object({\\n    use_openvpn    = bool\\n    use_freeradius = bool\\n    setup_database = bool\\n    setup_fresh    = bool\\n  })"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret name which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"namespace"),(0,o.kt)("td",{parentName:"tr",align:null},"The secret namespace which the cloud resource connection will be written to"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);