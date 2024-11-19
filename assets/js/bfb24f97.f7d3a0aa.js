"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[4385],{1354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var o=n(3036),a=n(4848),s=n(8453);const r={title:"Automated DB Backups on B2",date:new Date("2021-02-13T07:19:00.000Z"),draft:!1,tags:["b2","cron","postgres"]},l=void 0,c={authorsImageUrls:[]},i=[{value:"Setup B2",id:"setup-b2",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Setup a cron job to export and upload a Postgres DB backup to a B2 bucket."}),"\n",(0,a.jsx)(t.h2,{id:"setup-b2",children:"Setup B2"}),"\n",(0,a.jsx)(t.p,{children:"Install the B2 cli tool."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"sudo apt install python3 python3-pip -y\npip3 install setuptools\npip3 install b2\nb2 authorize-account $APPLICATION_KEY_ID $APPLICATION_KEY\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then paste the following into a ",(0,a.jsx)(t.code,{children:".sh"})," file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"#!/bin/bash\n\nDB_NAME=mydb\nFILENAME=${DB_NAME}_$(date +'%Y_%m_%d').sql\nBUCKET_NAME=mybucket\nUSER=bob\n\npg_dump $DB_NAME > ~/$FILENAME\n/home/$USER/.local/bin/b2 upload-file $BUCKET_NAME ~/$FILENAME $FILENAME\nrm ~/$FILENAME\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then ",(0,a.jsx)(t.code,{children:"chmod +x"})," the script, ",(0,a.jsx)(t.code,{children:"crontab -e"})," and paste the following:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"0 1 * * * /absolute/path/to/the/script\n"})}),"\n",(0,a.jsx)(t.p,{children:"The script will run everyday at 01:00.\nYou can then set custom lifecycle rules on Backblaze to retain backups for X number of days."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(6540);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}},3036:e=>{e.exports=JSON.parse('{"permalink":"/blog/backup-db-on-b2","editUrl":"https://github.com/rbarbazz/home/tree/master/blog/backup-db-on-b2.md","source":"@site/blog/backup-db-on-b2.md","title":"Automated DB Backups on B2","description":"Setup a cron job to export and upload a Postgres DB backup to a B2 bucket.","date":"2021-02-13T07:19:00.000Z","tags":[{"inline":true,"label":"b2","permalink":"/blog/tags/b-2"},{"inline":true,"label":"cron","permalink":"/blog/tags/cron"},{"inline":true,"label":"postgres","permalink":"/blog/tags/postgres"}],"readingTime":0.565,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Automated DB Backups on B2","date":"2021-02-13T07:19:00.000Z","draft":false,"tags":["b2","cron","postgres"]},"unlisted":false,"prevItem":{"title":"ESLint with Typescript","permalink":"/blog/eslint-with-typescript"},"nextItem":{"title":"Hello World","permalink":"/blog/hello-world"}}')}}]);