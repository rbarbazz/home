"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[8021],{4687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=n(5893),i=n(1151);const o={title:"Uptime monitor with Github Actions",date:new Date("2023-07-03T00:00:00.000Z"),draft:!1,tags:["github actions"]},a=void 0,c={permalink:"/blog/uptime-monitor-with-github-actions",editUrl:"https://github.com/rbarbazz/home/tree/master/blog/uptime-monitor-with-github-actions.md",source:"@site/blog/uptime-monitor-with-github-actions.md",title:"Uptime monitor with Github Actions",description:"In this post, I will explain how you can use Github Actions with the Github API to implement a simple uptime monitor.",date:"2023-07-03T00:00:00.000Z",formattedDate:"July 3, 2023",tags:[{label:"github actions",permalink:"/blog/tags/github-actions"}],readingTime:2.35,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Uptime monitor with Github Actions",date:"2023-07-03T00:00:00.000Z",draft:!1,tags:["github actions"]},unlisted:!1,nextItem:{title:"Copy labels from an existing repository",permalink:"/blog/copy-labels-from-an-existing-repo"}},r={authorsImageUrls:[]},h=[{value:"Code Breakdown",id:"code-breakdown",level:2},{value:"Health Check",id:"health-check",level:3},{value:"Check Failure",id:"check-failure",level:3},{value:"Check Success",id:"check-success",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In this post, I will explain how you can use Github Actions with the Github API to implement a simple uptime monitor."}),"\n",(0,s.jsx)(t.h2,{id:"code-breakdown",children:"Code Breakdown"}),"\n",(0,s.jsx)(t.h3,{id:"health-check",children:"Health Check"}),"\n",(0,s.jsx)(t.p,{children:"First, we need to define our workflow with the CURL command that will act as a health check."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'name: Health Check\n\non:\n  schedule:\n    - cron: "*/5 * * * *"\n\njobs:\n  check:\n    name: check\n    runs-on: ubuntu-latest\n    steps:\n      - name: Check URL\n        run: curl -sSf raphaelbarbazza.com -m 30 > /dev/null\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We schedule our action to run every 5 minute and send a request to the website we want to monitor. The ",(0,s.jsx)(t.code,{children:"-sSf"})," options tell curl to be silent while still failing when the server returns an error code.\nFinally, we set a timeout of 30 seconds to prevent the action from hanging."]}),"\n",(0,s.jsxs)(t.p,{children:["The website URL can be hardcoded like in the example or stored in secrets or as ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/actions/learn-github-actions/variables",children:"an environment variable"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"check-failure",children:"Check Failure"}),"\n",(0,s.jsx)(t.p,{children:"When the check fails, we will send a message to a Discord channel:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"  notify-failure:\n    name: notify-failure\n    runs-on: ubuntu-latest\n    needs: [check] # Only run after the health check\n    if: ${{ failure() }} # Only run when the health check fails\n    steps:\n      - name: Send Discord notification\n        uses: appleboy/discord-action@master\n        with:\n          webhook_id: ${{ secrets.WEBHOOK_ID }}\n          webhook_token: ${{ secrets.WEBHOOK_TOKEN }}\n          message: '\ud83d\udd34 ${{ secrets.SITE_URL }} is offline'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Sending the notification is facilitated by the ",(0,s.jsx)(t.code,{children:"appleboy/discord-action"})," action. See ",(0,s.jsx)(t.a,{href:"https://github.com/appleboy/discord-action",children:"the documentation"})," for instructions on how to set it up."]}),"\n",(0,s.jsx)(t.h3,{id:"check-success",children:"Check Success"}),"\n",(0,s.jsx)(t.p,{children:"Finally, we'll handle a successful health check:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"  notify-success:\n    name: notify-success\n    runs-on: ubuntu-latest\n    needs: [check] # Only run after the health check\n    steps:\n      - name: Get previous Health Check run status\n        id: get_prev_status\n        run: >\n          echo \"::set-output name=previous_status::$(\n            curl -sSf 'https://api.github.com/repos/${{ github.repository }}/actions/runs' | \n            jq -r '[.workflow_runs[] | select(.name==\"${{ github.workflow }}\")][1].conclusion'\n          )\"\n      - name: Send Discord notification\n        if: ${{ steps.get_prev_status.outputs.previous_status != 'success' }}\n        uses: appleboy/discord-action@master\n        with:\n          webhook_id: ${{ secrets.WEBHOOK_ID }}\n          webhook_token: ${{ secrets.WEBHOOK_TOKEN }}\n          message: '\ud83d\udfe2 ${{ secrets.SITE_URL }} is back online'\n"})}),"\n",(0,s.jsx)(t.p,{children:"This step will only run when the health check succeeds."}),"\n",(0,s.jsxs)(t.p,{children:["Using the Github API and the ",(0,s.jsx)(t.a,{href:"https://jqlang.github.io/jq/",children:(0,s.jsx)(t.code,{children:"jq"})})," command, we can retrieve the status of the previous run. This is used as a persistance layer to check the status of the previous run."]}),"\n",(0,s.jsx)(t.p,{children:"If the previous failed, then we want to send an update on Discord so that we know our website is back online. Otherwise, our website is still down. On Discord, we can assume that the last status update reflects the current status of our website."}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"This is a very simple implementation of an uptime monitor, I would probably not use it in production. It was a great way for me to learn more about Github Actions though, especially dependencies and conditional steps."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/upptime/upptime",children:(0,s.jsx)(t.code,{children:"upptime"})})," is a great alternative that uses Github Actions and comes with many features including graphs and incident reports."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(7294);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);