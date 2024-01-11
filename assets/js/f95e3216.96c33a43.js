"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[2600],{6317:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(5893),l=o(1151);const i={title:"Copy labels from an existing repository",date:new Date("2023-05-14T23:38:00.000Z"),draft:!1,tags:["github"]},r=void 0,a={permalink:"/blog/copy-labels-from-an-existing-repo",editUrl:"https://github.com/rbarbazz/home/tree/master/blog/copy-labels-from-an-existing-repo.md",source:"@site/blog/copy-labels-from-an-existing-repo.md",title:"Copy labels from an existing repository",description:"I recently learned how to copy labels from one repository to another.",date:"2023-05-14T23:38:00.000Z",formattedDate:"May 14, 2023",tags:[{label:"github",permalink:"/blog/tags/github"}],readingTime:.605,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Copy labels from an existing repository",date:"2023-05-14T23:38:00.000Z",draft:!1,tags:["github"]},unlisted:!1,prevItem:{title:"Uptime monitor with Github Actions",permalink:"/blog/uptime-monitor-with-github-actions"},nextItem:{title:"Use Prettier with VSCode",permalink:"/blog/prettier-vscode"}},s={authorsImageUrls:[]},c=[{value:"Install Github CLI",id:"install-github-cli",level:2},{value:"Clone your labels",id:"clone-your-labels",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"I recently learned how to copy labels from one repository to another."}),"\n",(0,n.jsx)(t.p,{children:"As far as I know it's the easiest way to bring existing Github labels to a new or existing repository. Creating a new repository from a template doesn't seem to include labels at this time."}),"\n",(0,n.jsx)(t.h2,{id:"install-github-cli",children:"Install Github CLI"}),"\n",(0,n.jsxs)(t.p,{children:["Start by installing the ",(0,n.jsx)(t.a,{href:"https://cli.github.com/",children:"Github CLI"})," if you haven't done so already."]}),"\n",(0,n.jsxs)(t.p,{children:["Next, you'll have to login with ",(0,n.jsx)(t.a,{href:"https://cli.github.com/manual/gh_auth_login",children:(0,n.jsx)(t.code,{children:"gh auth login"})}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"clone-your-labels",children:"Clone your labels"}),"\n",(0,n.jsxs)(t.p,{children:["Github CLI provides ",(0,n.jsx)(t.a,{href:"https://cli.github.com/manual/gh_label_clone",children:"a very convenient label cloning command"})," that lets you copy all of your labels at once:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"gh label clone username/source-repo --repo username/destination-repo\n"})}),"\n",(0,n.jsx)(t.p,{children:"The above command will copy all the labels but won't delete existing labels in the destination repository."})]})}function p(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var n=o(7294);const l={},i=n.createContext(l);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);