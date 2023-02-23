"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[1765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Stats"},i=void 0,s={unversionedId:"applications/monitoring/stats",id:"applications/monitoring/stats",title:"Stats",description:"The stats role uses Prometheus (or Influxdb), Grafana, Telegraf and a number of metrics exporters to collect and record lots of metrics about your NAS.",source:"@site/docs/applications/monitoring/stats.md",sourceDirName:"applications/monitoring",slug:"/applications/monitoring/stats",permalink:"/docs/applications/monitoring/stats",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/monitoring/stats.md",tags:[],version:"current",frontMatter:{title:"Stats"},sidebar:"tutorialSidebar",previous:{title:"Speedtest-Tracker",permalink:"/docs/applications/monitoring/speedtest"},next:{title:"Wireshark",permalink:"/docs/applications/monitoring/wireshark"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The stats role uses Prometheus (or Influxdb), Grafana, Telegraf and a number of metrics exporters to collect and record lots of metrics about your NAS."),(0,a.kt)("p",null,"Telegraf also exposes an InfluxDB endpoint for applications that require it."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"stats_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. If you want to gather metrics on your internet connection, enable ",(0,a.kt)("inlineCode",{parentName:"p"},"stats_internet_speed_test_enabled")," too.\nSet ",(0,a.kt)("inlineCode",{parentName:"p"},"stats_prometheus_enabled: true")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"stats_influxdb_enabled: true")," depending on which time series db you want to use."),(0,a.kt)("p",null,"If you want to access Grafana externally, set ",(0,a.kt)("inlineCode",{parentName:"p"},"stats_grafana_available_externally: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. If you want to access Promethehus externally, set ",(0,a.kt)("inlineCode",{parentName:"p"},"stats_prometheus_available_externally: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("p",null,"The Grafana web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:3003"},"http://ansible_nas_host_or_ip:3003"),", Prometheus can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:9090"},"http://ansible_nas_host_or_ip:9090")))}u.isMDXComponent=!0}}]);