"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[137],{251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=n(5893),s=n(1151);const r={title:"ESLint with Typescript",date:new Date("2021-02-13T19:25:42.000Z"),draft:!1,tags:["typescript","eslint"]},c=void 0,p={permalink:"/blog/eslint-with-typescript",editUrl:"https://github.com/rbarbazz/home/tree/master/blog/eslint-with-typescript.md",source:"@site/blog/eslint-with-typescript.md",title:"ESLint with Typescript",description:"ESLint can be used alongside Typescript to enforce coding standards.",date:"2021-02-13T19:25:42.000Z",formattedDate:"February 13, 2021",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"eslint",permalink:"/blog/tags/eslint"}],readingTime:.4,hasTruncateMarker:!0,authors:[],frontMatter:{title:"ESLint with Typescript",date:"2021-02-13T19:25:42.000Z",draft:!1,tags:["typescript","eslint"]},unlisted:!1,prevItem:{title:"Cron Environment",permalink:"/blog/cron-environment"},nextItem:{title:"Automated DB Backups on B2",permalink:"/blog/backup-db-on-b2"}},a={authorsImageUrls:[]},o=[{value:"With Typescript",id:"with-typescript",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"ESLint can be used alongside Typescript to enforce coding standards."}),"\n",(0,i.jsx)(t.h2,{id:"with-typescript",children:"With Typescript"}),"\n",(0,i.jsx)(t.p,{children:"To use ESLint in a Typescript project:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Paste the following configuration in a ",(0,i.jsx)(t.code,{children:".eslintrc.js"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"module.exports = {\n  root: true,\n  parser: '@typescript-eslint/parser',\n  plugins: ['@typescript-eslint'],\n  extends: [\n    'eslint:recommended',\n    'plugin:@typescript-eslint/eslint-recommended',\n    'plugin:@typescript-eslint/recommended',\n  ],\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also add a ",(0,i.jsx)(t.code,{children:".eslintignore"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"node_modules\ndist\nbuild\ncoverage\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For further configuration (Prettier, Airbnb, Standard JS, plugins) see the ",(0,i.jsx)(t.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#next-steps",children:"typescript-eslint"})," repo."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>c});var i=n(7294);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);