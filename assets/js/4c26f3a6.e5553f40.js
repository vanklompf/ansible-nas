"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[4654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"SearxNG",description:"Free internet metasearch engine"},o=void 0,s={unversionedId:"applications/other/searxng",id:"applications/other/searxng",title:"SearxNG",description:"Free internet metasearch engine",source:"@site/docs/applications/other/searxng.md",sourceDirName:"applications/other",slug:"/applications/other/searxng",permalink:"/docs/applications/other/searxng",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/searxng.md",tags:[],version:"current",frontMatter:{title:"SearxNG",description:"Free internet metasearch engine"},sidebar:"tutorialSidebar",previous:{title:"Restic",permalink:"/docs/applications/other/seafile"},next:{title:"Shaarli",permalink:"/docs/applications/other/shaarli"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/searxng/searxng"},"https://github.com/searxng/searxng")),(0,a.kt)("p",null,"SearXNG is a free internet metasearch engine which aggregates results from various search services and databases. Users are neither tracked nor profiled."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"searxng_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file. Set all relevant ",(0,a.kt)("inlineCode",{parentName:"p"},"searxng_*")," variables to suit your needs. For more advenced needs, edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"templates\\settings.yml.j2")," file directly."),(0,a.kt)("p",null,"SearxNG web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8109"},"http://ansible_nas_host_or_ip:8109"),"."))}u.isMDXComponent=!0}}]);