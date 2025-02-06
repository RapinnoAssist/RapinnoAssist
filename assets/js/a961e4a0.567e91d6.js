"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3066],{7579:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=t(4848),i=t(8453);const l={id:"integration-channels",title:"Channels",sidebar_label:"Channels",sidebar_position:1},o=void 0,c={id:"Deploy/integration-channels",title:"Channels",description:"Once your AI bot is developed, the next step is to deploy it to a external platforms. Build once and deploy anywhere. Each channel has unique features. Below is a comprehensive list of supported channels:",source:"@site/docs/Deploy/Channels.mdx",sourceDirName:"Deploy",slug:"/Deploy/integration-channels",permalink:"/cogniassist-docs-updated/docs/Deploy/integration-channels",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"integration-channels",title:"Channels",sidebar_label:"Channels",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deploy",permalink:"/cogniassist-docs-updated/docs/category/deploy"},next:{title:"Deployments",permalink:"/cogniassist-docs-updated/docs/Deploy/deployments"}},d={},h=[{value:"SocketIO",id:"socketio",level:2},{value:"WhatsApp (via Twilio)",id:"whatsapp-via-twilio",level:2},{value:"Facebook",id:"facebook",level:2},{value:"Telegram",id:"telegram",level:2},{value:"Slack",id:"slack",level:2},{value:"Microsoft Bot Framework",id:"microsoft-bot-framework",level:2}];function r(e){const n={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Once your AI bot is developed, the next step is to deploy it to a external platforms. Build once and deploy anywhere. Each channel has unique features. Below is a comprehensive list of supported channels:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"SocketIO"}),"\n",(0,s.jsx)(n.li,{children:"WhatsApp (via Twilio)"}),"\n",(0,s.jsx)(n.li,{children:"Facebook"}),"\n",(0,s.jsx)(n.li,{children:"Telegram"}),"\n",(0,s.jsx)(n.li,{children:"Slack"}),"\n",(0,s.jsx)(n.li,{children:"Google Hangout"}),"\n",(0,s.jsx)(n.li,{children:"Microsoft Bot Framework"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"channel demo",src:t(9364).A+"",width:"860",height:"416"})}),"\n",(0,s.jsx)(n.p,{children:"By default, the REST channel is enabled, which supports unidirectional communication. This allows for one-on-one conversations with the bot."}),"\n",(0,s.jsx)(n.p,{children:"The REST channel provides a REST endpoint that accepts messages and responds with the bot's replies."}),"\n",(0,s.jsx)(n.h2,{id:"socketio",children:"SocketIO"}),"\n",(0,s.jsx)(n.p,{children:"The SocketIO channel utilizes web sockets for real-time communication."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SocketIO Example",src:t(5565).A+"",width:"732",height:"508"})}),"\n",(0,s.jsx)(n.p,{children:"To enable this channel, provide the following details:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bot_message_evt"}),(0,s.jsx)(n.td,{children:"The event name used by CogniAssist to send messages over SocketIO."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"user_message_evt"}),(0,s.jsx)(n.td,{children:"The event name used by CogniAssist to receive messages over SocketIO."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Enter the required details and toggle the icon ",(0,s.jsx)(n.img,{alt:"Toggle Icon",src:t(3446).A+"",width:"73",height:"20"})," to enable the channel."]}),"\n",(0,s.jsx)(n.h2,{id:"whatsapp-via-twilio",children:"WhatsApp (via Twilio)"}),"\n",(0,s.jsx)(n.p,{children:"Deploy your AI bot to WhatsApp via Twilio, making it accessible through text messages. Ensure you have a WhatsApp business profile."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"WhatsApp Example",src:t(3292).A+"",width:"748",height:"534"})}),"\n",(0,s.jsx)(n.p,{children:"To enable this channel, provide the following details:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account_sid"}),(0,s.jsx)(n.td,{children:"The account security identifier."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auth_token"}),(0,s.jsx)(n.td,{children:"The authorization token."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"twilio_number"}),(0,s.jsx)(n.td,{children:"The Twilio phone number."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Enter the required details and toggle the icon ",(0,s.jsx)(n.img,{alt:"Toggle Icon",src:t(3446).A+"",width:"73",height:"20"})," to enable the channel."]}),"\n",(0,s.jsx)(n.h2,{id:"facebook",children:"Facebook"}),"\n",(0,s.jsx)(n.p,{children:"Deploy your AI bot on a Facebook page. First, set up a Facebook page."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Facebook Example",src:t(7390).A+"",width:"746",height:"559"})}),"\n",(0,s.jsx)(n.p,{children:"To enable this channel, provide the following details:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"verify"}),(0,s.jsx)(n.td,{children:"The verification code."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"secret"}),(0,s.jsx)(n.td,{children:"The secret code."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"page_access_token"}),(0,s.jsx)(n.td,{children:"The page access token."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Enter the required details and toggle the icon ",(0,s.jsx)(n.img,{alt:"Toggle Icon",src:t(3446).A+"",width:"73",height:"20"})," to enable the channel."]}),"\n",(0,s.jsx)(n.h2,{id:"telegram",children:"Telegram"}),"\n",(0,s.jsx)(n.p,{children:"To deploy your AI bot on Telegram, create a Telegram bot using the Telegram credentials."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Telegram Example",src:t(4112).A+"",width:"740",height:"536"})}),"\n",(0,s.jsx)(n.p,{children:"To enable this channel, provide the following details:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"access_token"}),(0,s.jsx)(n.td,{children:"The access token."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"verify"}),(0,s.jsx)(n.td,{children:"The verification code."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"webhook_url"}),(0,s.jsx)(n.td,{children:"The webhook URL."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Enter the required details and toggle the icon ",(0,s.jsx)(n.img,{alt:"Toggle Icon",src:t(3446).A+"",width:"73",height:"20"})," to enable the channel."]}),"\n",(0,s.jsx)(n.h2,{id:"slack",children:"Slack"}),"\n",(0,s.jsx)(n.p,{children:"Deploy your AI bot on Slack by creating a Slack app."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Slack Example",src:t(7524).A+"",width:"394",height:"390"})}),"\n",(0,s.jsx)(n.p,{children:"To enable this channel, provide the following detail:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"slack_token"}),(0,s.jsx)(n.td,{children:"The Slack token."})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["Enter the required detail and toggle the icon ",(0,s.jsx)(n.img,{alt:"Toggle Icon",src:t(3446).A+"",width:"73",height:"20"})," to enable the channel."]}),"\n",(0,s.jsx)(n.h2,{id:"microsoft-bot-framework",children:"Microsoft Bot Framework"}),"\n",(0,s.jsx)(n.p,{children:"Deploy your AI bot on the Microsoft Bot Framework by creating a Microsoft app."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Microsoft Bot Framework Example",src:t(313).A+"",width:"700",height:"457"})}),"\n",(0,s.jsx)(n.p,{children:"To enable this channel, provide the following details:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MICROSOFT_APP_ID"}),(0,s.jsx)(n.td,{children:"The Microsoft application ID."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MICROSOFT_APP_PASSWORD"}),(0,s.jsx)(n.td,{children:"The Microsoft application password."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Enter the required details and toggle the icon ",(0,s.jsx)(n.img,{alt:"Toggle Icon",src:t(3446).A+"",width:"73",height:"20"})," to enable the channel."]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},9364:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Channels-d4b6d61a303f7518b56765ebb31d5969.gif"},313:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/channel-microsoft-682584be52121318d0fc0a22ed53bec7.png"},4112:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/channel-telegram-98e65032d6437365a49b6b07fd9b1e56.png"},7390:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/channels-facebook-3b25ec06a9b270256e26b7c72e7f58cf.png"},7524:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/channels-slack-c309d7c7f40fa2e387a3144f6e5b03a5.png"},5565:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/channels-socket-0f6eb071228b1f3968ad6ca7d8cdfe3b.png"},3446:(e,n,t)=>{t.d(n,{A:()=>s});const s="data:image/png;base64,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"},3292:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/channels-whatsapp-8aa91dad6ecbcb520e007a268c074520.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const i={},l=s.createContext(i);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);