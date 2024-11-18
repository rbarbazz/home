"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[3932],{151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var o=n(2986),l=n(4848),i=n(8453);const r={title:"Copy labels from an existing repository",date:new Date("2023-05-14T23:38:00.000Z"),draft:!1,tags:["github"]},a=void 0,s={authorsImageUrls:[]},c=[{value:"Install Github CLI",id:"install-github-cli",level:2},{value:"Clone your labels",id:"clone-your-labels",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"I recently learned how to copy labels from one repository to another."}),"\n",(0,l.jsx)(t.p,{children:"As far as I know it's the easiest way to bring existing Github labels to a new or existing repository. Creating a new repository from a template doesn't seem to include labels at this time."}),"\n",(0,l.jsx)(t.h2,{id:"install-github-cli",children:"Install Github CLI"}),"\n",(0,l.jsxs)(t.p,{children:["Start by installing the ",(0,l.jsx)(t.a,{href:"https://cli.github.com/",children:"Github CLI"})," if you haven't done so already."]}),"\n",(0,l.jsxs)(t.p,{children:["Next, you'll have to login with ",(0,l.jsx)(t.a,{href:"https://cli.github.com/manual/gh_auth_login",children:(0,l.jsx)(t.code,{children:"gh auth login"})}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"clone-your-labels",children:"Clone your labels"}),"\n",(0,l.jsxs)(t.p,{children:["Github CLI provides ",(0,l.jsx)(t.a,{href:"https://cli.github.com/manual/gh_label_clone",children:"a very convenient label cloning command"})," that lets you copy all of your labels at once:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-shell",children:"gh label clone username/source-repo --repo username/destination-repo\n"})}),"\n",(0,l.jsx)(t.p,{children:"The above command will copy all the labels but won't delete existing labels in the destination repository."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const l={},i=o.createContext(l);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(i.Provider,{value:t},e.children)}},2986:e=>{e.exports=JSON.parse('{"permalink":"/blog/copy-labels-from-an-existing-repo","editUrl":"https://github.com/rbarbazz/home/tree/master/blog/copy-labels-from-an-existing-repo.md","source":"@site/blog/copy-labels-from-an-existing-repo.md","title":"Copy labels from an existing repository","description":"I recently learned how to copy labels from one repository to another.","date":"2023-05-14T23:38:00.000Z","tags":[{"inline":true,"label":"github","permalink":"/blog/tags/github"}],"readingTime":0.605,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Copy labels from an existing repository","date":"2023-05-14T23:38:00.000Z","draft":false,"tags":["github"]},"unlisted":false,"prevItem":{"title":"Uptime monitor with Github Actions","permalink":"/blog/uptime-monitor-with-github-actions"},"nextItem":{"title":"Use Prettier with VSCode","permalink":"/blog/prettier-vscode"}}')}}]);