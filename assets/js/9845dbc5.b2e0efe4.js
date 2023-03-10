"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[2896],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(o),h=n,d=u["".concat(l,".").concat(h)]||u[h]||f[h]||i;return o?r.createElement(d,a(a({ref:t},c),{},{components:o})):r.createElement(d,a({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7788:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const i={title:"Photofield",description:"Experimental fast photo viewer"},a=void 0,p={unversionedId:"applications/other/photofield",id:"applications/other/photofield",title:"Photofield",description:"Experimental fast photo viewer",source:"@site/docs/applications/other/photofield.md",sourceDirName:"applications/other",slug:"/applications/other/photofield",permalink:"/docs/applications/other/photofield",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/photofield.md",tags:[],version:"current",frontMatter:{title:"Photofield",description:"Experimental fast photo viewer"},sidebar:"tutorialSidebar",previous:{title:"Paperless-ngx",permalink:"/docs/applications/other/paperless_ng"},next:{title:"Photoprism",permalink:"/docs/applications/other/photoprism"}},l={},s=[{value:"Usage",id:"usage",level:2}],c={toc:s};function f(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Homepage: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SmilyOrg/photofield"},"https://github.com/SmilyOrg/photofield")),(0,n.kt)("p",null,"Photofield is a photo viewer built to mainly push the limits of what is possible in terms of the number of photos visible at the same time and at the speed at which they are displayed. The goal is to be as fast or faster than Google Photos on commodity hardware while displaying more photos at the same time. It is non-invasive and at this point meant to be used to complement other photo gallery software."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"photofield_enabled: true")," in your ",(0,n.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,n.kt)("p",null,"Edit the ",(0,n.kt)("inlineCode",{parentName:"p"},"file/configuration.yaml")," file to suit your needs."),(0,n.kt)("p",null,"Photofield web interface can be found at ",(0,n.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8100"},"http://ansible_nas_host_or_ip:8100"),"."))}f.isMDXComponent=!0}}]);