"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[5835],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=r,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return t?i.createElement(m,o(o({ref:n},c),{},{components:t})):i.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={},o="Miniflux",l={unversionedId:"applications/news/miniflux",id:"applications/news/miniflux",title:"Miniflux",description:"Homepage:",source:"@site/docs/applications/news/miniflux.md",sourceDirName:"applications/news",slug:"/applications/news/miniflux",permalink:"/docs/applications/news/miniflux",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/news/miniflux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Libreddit",permalink:"/docs/applications/news/libreddit"},next:{title:"RSS-Bridge",permalink:"/docs/applications/news/rssbridge"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"miniflux"},"Miniflux"),(0,r.kt)("p",null,"Homepage: ",(0,r.kt)("a",{parentName:"p",href:"https://miniflux.app/"},"https://miniflux.app/")),(0,r.kt)("p",null,"Miniflux is a minimalist and opinionated feed reader."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"miniflux_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"The Miniflux web interface can be found at ",(0,r.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8070"},"http://ansible_nas_host_or_ip:8070"),", the default username is ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," and password ",(0,r.kt)("inlineCode",{parentName:"p"},"supersecure"),"."),(0,r.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,r.kt)("p",null,"An admin user will be created with the username and password of ",(0,r.kt)("inlineCode",{parentName:"p"},"miniflux_admin_username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"miniflux_admin_password")," respectively. These can be found in the Miniflux section within ",(0,r.kt)("inlineCode",{parentName:"p"},"all.yml.dist"),"."))}u.isMDXComponent=!0}}]);