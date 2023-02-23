"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[9006],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Mergerfs"},s=void 0,i={unversionedId:"applications/system-tools/mergerfs",id:"applications/system-tools/mergerfs",title:"Mergerfs",description:"Homepage:",source:"@site/docs/applications/system-tools/mergerfs.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/mergerfs",permalink:"/docs/applications/system-tools/mergerfs",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/system-tools/mergerfs.md",tags:[],version:"current",frontMatter:{title:"Mergerfs"},sidebar:"tutorialSidebar",previous:{title:"Krusader",permalink:"/docs/applications/system-tools/krusader"},next:{title:"MySql",permalink:"/docs/applications/system-tools/mysql"}},l={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Homepage: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trapexit/mergerfs"},"https://github.com/trapexit/mergerfs")),(0,o.kt)("p",null,"mergerfs is a union filesystem geared towards simplifying storage and management of files across numerous commodity storage devices. It is similar to mhddfs, unionfs, and aufs."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"mergerfs_enabled: true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file.\nSet ",(0,o.kt)("inlineCode",{parentName:"p"},"mergerfs_branches")," to the list of paths you want to merge and ",(0,o.kt)("inlineCode",{parentName:"p"},"mergerfs_mount")," the the resulting merged mount."),(0,o.kt)("p",null,"This basic setting will create and enable mergerfs systemd service."),(0,o.kt)("p",null,"For more advanced usage, if you have Rclone installed and ",(0,o.kt)("inlineCode",{parentName:"p"},"rclone_mount_enabled"),", the role will create a service that will merge ",(0,o.kt)("inlineCode",{parentName:"p"},"mergerfs_rclone_local_mount")," and your ",(0,o.kt)("inlineCode",{parentName:"p"},"rclone_mount")," (so your mounted remote) together. This can be further augumented by cloud_upload (TBD) scripts that would periodically sync your ",(0,o.kt)("inlineCode",{parentName:"p"},"mergerfs_rclone_local_path")," to your rclone remote."))}m.isMDXComponent=!0}}]);