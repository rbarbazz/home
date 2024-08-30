"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[7483],{863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var s=t(4848),r=t(8453);const o={title:"Wordpress Theme Deployment",date:new Date("2021-03-29T05:57:46.000Z"),draft:!1,tags:["wordpress","ci/cd"]},c=void 0,l={permalink:"/blog/wordpress-theme-deployment",editUrl:"https://github.com/rbarbazz/home/tree/master/blog/wordpress-theme-deployment.md",source:"@site/blog/wordpress-theme-deployment.md",title:"Wordpress Theme Deployment",description:"Deploy a custom Wordpress theme with zero downtime using Github Actions.",date:"2021-03-29T05:57:46.000Z",formattedDate:"March 29, 2021",tags:[{label:"wordpress",permalink:"/blog/tags/wordpress"},{label:"ci/cd",permalink:"/blog/tags/ci-cd"}],readingTime:.795,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Wordpress Theme Deployment",date:"2021-03-29T05:57:46.000Z",draft:!1,tags:["wordpress","ci/cd"]},unlisted:!1,prevItem:{title:"Wordpress Plugins",permalink:"/blog/wordpress-plugins"},nextItem:{title:"Worpress Theme Development",permalink:"/blog/worpress-theme-development"}},a={authorsImageUrls:[]},p=[];function i(e){const n={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Deploy a custom Wordpress theme with zero downtime using Github Actions."}),"\n",(0,s.jsxs)(n.p,{children:["Build the project, ",(0,s.jsx)(n.code,{children:"scp"})," the theme folder to the host. Link the new version and remove the old one."]}),"\n",(0,s.jsx)(n.p,{children:"Example workflow:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"name: Deployment\non:\n  push:\n    branches:\n      - master\njobs:\n  deploy:\n    name: Deploy\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v1\n        with:\n          node-version: 12\n      - run: npm ci\n      - run: npm run build\n      - name: Copy theme to host\n        uses: appleboy/scp-action@v0.1.1\n        with:\n          host: ${{ secrets.HOST }}\n          username: ${{ secrets.USERNAME }}\n          key: ${{ secrets.SSH_KEY }}\n          source: '.'\n          target: '${{ secrets.THEME_ABS_PATH }}-new'\n  link:\n    name: Link\n    needs: [deploy]\n    runs-on: ubuntu-latest\n    steps:\n      - name: Symlink the current release\n        uses: appleboy/ssh-action@v0.1.3\n        with:\n          host: ${{ secrets.HOST }}\n          username: ${{ secrets.USERNAME }}\n          key: ${{ secrets.SSH_KEY }}\n          script: |\n            ln -fsn ${{ secrets.THEME_ABS_PATH }}-new ${{ secrets.THEME_ABS_PATH }}\n            rm -rf ${{ secrets.THEME_ABS_PATH }}-old\n            cp -r ${{ secrets.THEME_ABS_PATH }}-new ${{ secrets.THEME_ABS_PATH }}-old\n            ln -fsn ${{ secrets.THEME_ABS_PATH }}-old ${{ secrets.THEME_ABS_PATH }}\n            rm -rf ${{ secrets.THEME_ABS_PATH }}-new\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(6540);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);