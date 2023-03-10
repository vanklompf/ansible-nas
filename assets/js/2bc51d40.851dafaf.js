"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7387],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Moviematch",description:"MovieMatch for Plex"},o=void 0,p={unversionedId:"applications/media-serving/moviematch",id:"applications/media-serving/moviematch",title:"Moviematch",description:"MovieMatch for Plex",source:"@site/docs/applications/media-serving/moviematch.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/moviematch",permalink:"/docs/applications/media-serving/moviematch",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/media-serving/moviematch.md",tags:[],version:"current",frontMatter:{title:"Moviematch",description:"MovieMatch for Plex"},sidebar:"tutorialSidebar",previous:{title:"MiniDLNA",permalink:"/docs/applications/media-serving/minidlna"},next:{title:"My Media for Alexa",permalink:"/docs/applications/media-serving/mymediaforalexa"}},c={},l=[{value:"Usage",id:"usage",level:2}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Homepage: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LukeChannings/moviematch"},"https://github.com/LukeChannings/moviematch")),(0,a.kt)("p",null,"MovieMatch for Plex. Have you ever spent longer deciding on a movie than it'd take to just watch a random movie? This is an app that helps you and your friends pick a movie to watch from a Plex server."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"moviematch_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file.\nset appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"moviematch_*")," environment variables, especially ",(0,a.kt)("inlineCode",{parentName:"p"},"moviematch_plex_url"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"moviematch_plex_token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"moviematch_library_filter"),"."),(0,a.kt)("p",null,"Moviematch web interface can be found at ",(0,a.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8003"},"http://ansible_nas_host_or_ip:8003"),"."))}m.isMDXComponent=!0}}]);