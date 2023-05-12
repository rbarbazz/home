"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9856],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=i(r),m=a,f=b["".concat(p,".").concat(m)]||b[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[b]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"Automated DB Backups on B2",date:new Date("2021-02-13T07:19:00.000Z"),draft:!1,tags:["b2","cron","postgres"],authors:"rbarbazz"},l=void 0,c={permalink:"/blog/backup-db-on-b2",editUrl:"https://github.com/rbarbazz/blog/tree/master/blog/backup-db-on-b2.md",source:"@site/blog/backup-db-on-b2.md",title:"Automated DB Backups on B2",description:"Setup a cron job to export and upload a Postgres DB backup to a B2 bucket.",date:"2021-02-13T07:19:00.000Z",formattedDate:"February 13, 2021",tags:[{label:"b2",permalink:"/blog/tags/b-2"},{label:"cron",permalink:"/blog/tags/cron"},{label:"postgres",permalink:"/blog/tags/postgres"}],readingTime:.565,hasTruncateMarker:!0,authors:[{name:"Rapha\xebl Barbazza",url:"https://github.com/rbarbazz",imageURL:"https://github.com/rbarbazz.png",key:"rbarbazz"}],frontMatter:{title:"Automated DB Backups on B2",date:"2021-02-13T07:19:00.000Z",draft:!1,tags:["b2","cron","postgres"],authors:"rbarbazz"},prevItem:{title:"ESLint with Typescript",permalink:"/blog/eslint-with-typescript"},nextItem:{title:"Hello World",permalink:"/blog/hello-world"}},p={authorsImageUrls:[void 0]},i=[],u={toc:i},b="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setup a cron job to export and upload a Postgres DB backup to a B2 bucket."))}s.isMDXComponent=!0}}]);