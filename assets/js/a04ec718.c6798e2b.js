"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[6396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Virtual Desktop"},i=void 0,s={unversionedId:"applications/other/virtual_desktop",id:"applications/other/virtual_desktop",title:"Virtual Desktop",description:"It's possible to run a cut down desktop within a Docker container. We use RattyDAVE's custom Ubuntu Mate image.",source:"@site/docs/applications/other/virtual_desktop.md",sourceDirName:"applications/other",slug:"/applications/other/virtual_desktop",permalink:"/docs/applications/other/virtual_desktop",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/other/virtual_desktop.md",tags:[],version:"current",frontMatter:{title:"Virtual Desktop"},sidebar:"tutorialSidebar",previous:{title:"Vaultwarden",permalink:"/docs/applications/other/vaultwarden"},next:{title:"Wallabag",permalink:"/docs/applications/other/wallabag"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Mounts",id:"mounts",level:2},{value:"Remote Access",id:"remote-access",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It's possible to run a cut down desktop within a Docker container. We use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RattyDAVE/docker-ubuntu-xrdp-mate-custom"},"RattyDAVE's custom Ubuntu Mate image"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"virtual_desktop_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"ansible_nas_user")," will be granted access with a password of ",(0,a.kt)("inlineCode",{parentName:"p"},"topsecret")," with sudo rights. To change or add additional users override ",(0,a.kt)("inlineCode",{parentName:"p"},"vd_users")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"nas.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'vd_users:\n  - username: "{{ ansible_nas_user }}"\n    password: "topsecret"\n    sudo: "Y"\n  - username: "larrylaffer"\n    password: "kensentme"\n    sudo: "Y"\n')),(0,a.kt)("h2",{id:"mounts"},"Mounts"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"samba_shares_root")," is mounted to ",(0,a.kt)("inlineCode",{parentName:"p"},"/samba"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker_home")," is mounted to ",(0,a.kt)("inlineCode",{parentName:"p"},"/docker"),"."),(0,a.kt)("h2",{id:"remote-access"},"Remote Access"),(0,a.kt)("p",null,"It's possible to access your virtual desktop through a web browser! Check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/applications/other/guacamole"},"Guacamole"),"."))}u.isMDXComponent=!0}}]);