"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[5889],{1034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=n(5893),a=n(1151);const s={title:"Automated DB Backups on B2",date:new Date("2021-02-13T07:19:00.000Z"),draft:!1,tags:["b2","cron","postgres"]},r=void 0,l={permalink:"/blog/backup-db-on-b2",editUrl:"https://github.com/rbarbazz/home/tree/master/blog/backup-db-on-b2.md",source:"@site/blog/backup-db-on-b2.md",title:"Automated DB Backups on B2",description:"Setup a cron job to export and upload a Postgres DB backup to a B2 bucket.",date:"2021-02-13T07:19:00.000Z",formattedDate:"February 13, 2021",tags:[{label:"b2",permalink:"/blog/tags/b-2"},{label:"cron",permalink:"/blog/tags/cron"},{label:"postgres",permalink:"/blog/tags/postgres"}],readingTime:.565,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Automated DB Backups on B2",date:"2021-02-13T07:19:00.000Z",draft:!1,tags:["b2","cron","postgres"]},unlisted:!1,prevItem:{title:"ESLint with Typescript",permalink:"/blog/eslint-with-typescript"},nextItem:{title:"Hello World",permalink:"/blog/hello-world"}},c={authorsImageUrls:[]},p=[{value:"Setup B2",id:"setup-b2",level:2}];function i(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Setup a cron job to export and upload a Postgres DB backup to a B2 bucket."}),"\n",(0,o.jsx)(t.h2,{id:"setup-b2",children:"Setup B2"}),"\n",(0,o.jsx)(t.p,{children:"Install the B2 cli tool."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"sudo apt install python3 python3-pip -y\npip3 install setuptools\npip3 install b2\nb2 authorize-account $APPLICATION_KEY_ID $APPLICATION_KEY\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then paste the following into a ",(0,o.jsx)(t.code,{children:".sh"})," file."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"#!/bin/bash\n\nDB_NAME=mydb\nFILENAME=${DB_NAME}_$(date +'%Y_%m_%d').sql\nBUCKET_NAME=mybucket\nUSER=bob\n\npg_dump $DB_NAME > ~/$FILENAME\n/home/$USER/.local/bin/b2 upload-file $BUCKET_NAME ~/$FILENAME $FILENAME\nrm ~/$FILENAME\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then ",(0,o.jsx)(t.code,{children:"chmod +x"})," the script, ",(0,o.jsx)(t.code,{children:"crontab -e"})," and paste the following:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"0 1 * * * /absolute/path/to/the/script\n"})}),"\n",(0,o.jsx)(t.p,{children:"The script will run everyday at 01:00.\nYou can then set custom lifecycle rules on Backblaze to retain backups for X number of days."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var o=n(7294);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);