"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9627],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),g=a,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"Postgres Quickstart",date:new Date("2021-02-15T16:48:17.000Z"),draft:!1,tags:["postgres"]},s=void 0,l={permalink:"/blog/postgres-quickstart",editUrl:"https://github.com/rbarbazz/home/tree/master/blog/postgres-quickstart.md",source:"@site/blog/postgres-quickstart.md",title:"Postgres Quickstart",description:"Here is how to get started with Postgres on Ubuntu.",date:"2021-02-15T16:48:17.000Z",formattedDate:"February 15, 2021",tags:[{label:"postgres",permalink:"/blog/tags/postgres"}],readingTime:.36,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Postgres Quickstart",date:"2021-02-15T16:48:17.000Z",draft:!1,tags:["postgres"]},prevItem:{title:"Cron Local Mail",permalink:"/blog/cron-mail"},nextItem:{title:"Cron Environment",permalink:"/blog/cron-environment"}},p={authorsImageUrls:[]},i=[],c={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here is how to get started with Postgres on Ubuntu."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the packages\nsudo apt update && sudo apt install postgresql postgresql-contrib -y\n\n# Create a new user\nsudo -u postgres createuser --pwprompt username\n\n# Create a new DB\nsudo -u postgres createdb -O username db_name\n")),(0,a.kt)("p",null,"The connection URL will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"postgresql://username:password@localhost:5432/db_name\n")),(0,a.kt)("p",null,"If your password contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," sign it needs to be replaced by ",(0,a.kt)("inlineCode",{parentName:"p"},"%25"),"."))}m.isMDXComponent=!0}}]);