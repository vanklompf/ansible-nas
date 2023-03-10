"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[6544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"Librespeed",description:"Free and Open Source Speedtest"},a=void 0,p={unversionedId:"applications/monitoring/librespeed",id:"applications/monitoring/librespeed",title:"Librespeed",description:"Free and Open Source Speedtest",source:"@site/docs/applications/monitoring/librespeed.md",sourceDirName:"applications/monitoring",slug:"/applications/monitoring/librespeed",permalink:"/docs/applications/monitoring/librespeed",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/monitoring/librespeed.md",tags:[],version:"current",frontMatter:{title:"Librespeed",description:"Free and Open Source Speedtest"},sidebar:"tutorialSidebar",previous:{title:"Graylog",permalink:"/docs/applications/monitoring/graylog"},next:{title:"Speedtest-Tracker",permalink:"/docs/applications/monitoring/speedtest"}},s={},l=[{value:"Usage",id:"usage",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Homepage: ",(0,o.kt)("a",{parentName:"p",href:"https://librespeed.org/"},"https://librespeed.org/")),(0,o.kt)("p",null,"Free and Open Source Speedtest. No Flash, No Java, No Websocket, No Bullshit."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"librespeed_enabled: true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,o.kt)("p",null,"librespeed web interface can be found at ",(0,o.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8104"},"http://ansible_nas_host_or_ip:8104"),"."))}u.isMDXComponent=!0}}]);