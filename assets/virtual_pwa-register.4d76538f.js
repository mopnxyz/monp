import{_ as u}from"./app.bc9b88be.js";function _(v={}){const{immediate:w=!1,onNeedRefresh:s,onOfflineReady:o,onRegistered:d,onRegisteredSW:l,onRegisterError:c}=v;let i,t,g,n;const f=async(a=!0)=>{await g,a&&(i==null||i.addEventListener("controlling",r=>{r.isUpdate&&window.location.reload()})),await(n==null?void 0:n())};async function p(){if("serviceWorker"in navigator){const{Workbox:a,messageSW:r}=await u(()=>import("./workbox-window.prod.es5.6aa5910e.js"),[]);n=async()=>{t&&t.waiting&&await r(t.waiting,{type:"SKIP_WAITING"})},i=new a("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",e=>{e.isUpdate||o==null||o()});{const e=()=>{s==null||s()};i.addEventListener("waiting",e),i.addEventListener("externalwaiting",e)}i.register({immediate:w}).then(e=>{t=e,l?l("/sw.js",e):d==null||d(e)}).catch(e=>{c==null||c(e)})}}return g=p(),f}export{_ as registerSW};
