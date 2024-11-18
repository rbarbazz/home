"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[4661],{8704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var o=n(4523),r=n(4848),a=n(8453);const s={title:"Cron Local Mail",date:new Date("2021-02-17T05:46:29.000Z"),draft:!1,tags:["cron","unix"]},l=void 0,i={authorsImageUrls:[]},c=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"To see the output from cron you need to have a Mail Transfer Agent (MTA) installed."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo apt install postfix\n"})}),"\n",(0,r.jsx)(t.p,{children:'Select the "Local" option during the installation process.'}),"\n",(0,r.jsx)(t.p,{children:"You can now debug cron jobs with the output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo tail -f /var/mail/$USER\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(6540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}},4523:e=>{e.exports=JSON.parse('{"permalink":"/blog/cron-mail","editUrl":"https://github.com/rbarbazz/home/tree/master/blog/cron-mail.md","source":"@site/blog/cron-mail.md","title":"Cron Local Mail","description":"To see the output from cron you need to have a Mail Transfer Agent (MTA) installed.","date":"2021-02-17T05:46:29.000Z","tags":[{"inline":true,"label":"cron","permalink":"/blog/tags/cron"},{"inline":true,"label":"unix","permalink":"/blog/tags/unix"}],"readingTime":0.23,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Cron Local Mail","date":"2021-02-17T05:46:29.000Z","draft":false,"tags":["cron","unix"]},"unlisted":false,"prevItem":{"title":"Basic Dockerfile for a Node App","permalink":"/blog/node-app-dockerfile"},"nextItem":{"title":"Postgres Quickstart","permalink":"/blog/postgres-quickstart"}}')}}]);