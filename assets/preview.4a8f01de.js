import("data:text/javascript;base64,Cg==");import{d as e,f as a,bx as t,bw as o,x as s,r,o as l,c as n,w as p,am as i,b as c,L as u,M as d,_ as v,e as f,s as g}from"./preload-helper.7e037e7d.js";var _=e({name:"App",setup(){const e=a(),r=t(),l=JSON.parse(localStorage.getItem(o.PAGE_DATA_KEY)),n=Object.keys(l.pages).filter((e=>!l.pages[e].config.keepAlive));return console.log("notNeedcachePages:",n),s((()=>r.path),(a=>{var t,o;if(n.includes(a)){const s=null==(o=null==(t=e.value)?void 0:t.$)?void 0:o.__v_cache;console.log("keep-alive cache",a,s),s.delete(a)}})),{keepAliveRef:e}}});_.render=function(e,a,t,o,s,u){const d=r("router-view");return l(),n(d,null,{default:p((({Component:e,route:a})=>[(l(),n(i,{ref:"keepAliveRef"},[(l(),n(c(e),{key:a.path}))],1536))])),_:1})};const m=[{path:"/:pathMatch(.*)*",component:()=>v((()=>import("./preview.337531e0.js")),["assets/preview.337531e0.js","assets/index.10fe1648.js","assets/index.8e87979a.css","assets/preload-helper.7e037e7d.js","assets/preload-helper.8f3edfb5.css","assets/useAnimate.5d549f89.js"])}],h=u({history:d(),routes:m}),A=JSON.parse(localStorage.getItem(o.PAGE_DATA_KEY));h.beforeEach((e=>{var a,t,o;return document.title=null!=(o=null==(t=null==(a=null==A?void 0:A.pages)?void 0:a[e.path])?void 0:t.title)?o:document.title,!0}));const b=f(_);g(b),b.config.globalProperties.$$refs={},window.$$refs=b.config.globalProperties.$$refs,b.use(h).mount("#app");export{h as r};
