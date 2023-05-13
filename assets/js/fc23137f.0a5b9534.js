"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(b,p(p({ref:t},c),{},{components:r})):n.createElement(b,p({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"ESLint with Typescript",date:new Date("2021-02-13T19:25:42.000Z"),draft:!1,tags:["typescript","eslint"],authors:"rbarbazz"},p=void 0,o={permalink:"/blog/eslint-with-typescript",editUrl:"https://github.com/rbarbazz/home/tree/master/blog/eslint-with-typescript.md",source:"@site/blog/eslint-with-typescript.md",title:"ESLint with Typescript",description:"ESLint can be used alongside Typescript to enforce coding standards.",date:"2021-02-13T19:25:42.000Z",formattedDate:"February 13, 2021",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"eslint",permalink:"/blog/tags/eslint"}],readingTime:.4,hasTruncateMarker:!0,authors:[{name:"Rapha\xebl Barbazza",url:"https://github.com/rbarbazz",imageURL:"https://github.com/rbarbazz.png",key:"rbarbazz"}],frontMatter:{title:"ESLint with Typescript",date:"2021-02-13T19:25:42.000Z",draft:!1,tags:["typescript","eslint"],authors:"rbarbazz"},prevItem:{title:"Cron Environment",permalink:"/blog/cron-environment"},nextItem:{title:"Automated DB Backups on B2",permalink:"/blog/backup-db-on-b2"}},l={authorsImageUrls:[void 0]},s=[{value:"With Typescript",id:"with-typescript",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ESLint can be used alongside Typescript to enforce coding standards."),(0,a.kt)("h2",{id:"with-typescript"},"With Typescript"),(0,a.kt)("p",null,"To use ESLint in a Typescript project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin\n")),(0,a.kt)("p",null,"Paste the following configuration in a ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  root: true,\n  parser: '@typescript-eslint/parser',\n  plugins: ['@typescript-eslint'],\n  extends: [\n    'eslint:recommended',\n    'plugin:@typescript-eslint/eslint-recommended',\n    'plugin:@typescript-eslint/recommended',\n  ],\n}\n")),(0,a.kt)("p",null,"You can also add a ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintignore")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node_modules\ndist\nbuild\ncoverage\n")),(0,a.kt)("p",null,"For further configuration (Prettier, Airbnb, Standard JS, plugins) see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#next-steps"},"typescript-eslint")," repo."))}m.isMDXComponent=!0}}]);