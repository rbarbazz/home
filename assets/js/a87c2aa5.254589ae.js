"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[7519],{669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var s=n(6376),o=n(4848),r=n(8453);const l={title:"Worpress Theme Development",date:new Date("2021-03-04T06:14:23.000Z"),draft:!1,tags:["wordpress"]},i=void 0,a={authorsImageUrls:[]},c=[{value:"Requirements",id:"requirements",level:3},{value:"Setup",id:"setup",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The easiest way I have found to work on a custom Wordpress theme is to use Local."}),"\n",(0,o.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"If the site is already live, get a SQL dump"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Get your ",(0,o.jsx)(t.code,{children:"wp-config.php"})," file and add the following lines:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-php",children:"define('WP_HOME','http://mysite.local');\ndefine('WP_SITEURL','http://mysite.local');\n"})}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the same file, you might also need to update the table prefix, look for ",(0,o.jsx)(t.code,{children:"$table_prefix"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Get a copy of the ",(0,o.jsx)(t.code,{children:"wp-content"})," directory of your site"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Download and install ",(0,o.jsx)(t.a,{href:"https://localwp.com/",children:"Local"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Create a zip archive that contains the SQL dump, the copy of the ",(0,o.jsx)(t.code,{children:"wp-content"})," directory and the ",(0,o.jsx)(t.code,{children:"wp-config.php"})," file"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Drag and drop the archive in Local and follow the setup assistant"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Create a symbolic link to your theme:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"ln -s /absolute/path/to/theme /absolute/path/to/Local/site/location\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"When you need a fresh version of the DB or the content, you just have to put together the zip archive again.\nJust delete the existing site and create a new one."}),"\n",(0,o.jsxs)(t.p,{children:["An alternative way to do local theme development is to use Docker: ",(0,o.jsx)(t.a,{href:"https://github.com/nezhar/wordpress-docker-compose",children:"github.com/nezhar/wordpress-docker-compose"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var s=n(6540);const o={},r=s.createContext(o);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:t},e.children)}},6376:e=>{e.exports=JSON.parse('{"permalink":"/blog/worpress-theme-development","editUrl":"https://github.com/rbarbazz/home/tree/master/blog/worpress-theme-development.md","source":"@site/blog/worpress-theme-development.md","title":"Worpress Theme Development","description":"The easiest way I have found to work on a custom Wordpress theme is to use Local.","date":"2021-03-04T06:14:23.000Z","tags":[{"inline":true,"label":"wordpress","permalink":"/blog/tags/wordpress"}],"readingTime":0.86,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Worpress Theme Development","date":"2021-03-04T06:14:23.000Z","draft":false,"tags":["wordpress"]},"unlisted":false,"prevItem":{"title":"Wordpress Theme Deployment","permalink":"/blog/wordpress-theme-deployment"},"nextItem":{"title":"Automated Deployment with Watchtower","permalink":"/blog/deploy-with-watchtower"}}')}}]);