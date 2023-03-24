(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[913],{95667:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/mintBtn",function(){return a(83954)}])},83954:function(e,t,a){"use strict";a.r(t);var r=a(11527),o=a(25942),i=a.n(o),s=a(50959),n=a(98312),l=a(50449),c=a(29274),d=a(57323),p=a(18170),u=a(88922);p.RJ.id;let m=e=>{let[t,a]=(0,s.useState)(1),{isConnected:o}=(0,c.mA)(),{openConnectModal:p}=(0,d.We)(),m=()=>{},f=()=>{},g=()=>{!o&&p&&(0,u.ZP)("Coming soon")};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between md:justify-start mb-14 md:mb-0",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(n.zx,{onClick:()=>f(),size:"large",icon:(0,r.jsx)(l.UrD,{}),theme:"solid",type:"secondary",style:{padding:"0 20px",color:"#C5C5C5"}}),(0,r.jsx)(n.II,{defaultValue:t,value:t,className:"w-input-64 md:w-128",style:{border:"1px solid #C5C5C5",margin:"1px 10px 0",height:"58px",borderRadius:"8px",color:"#C5C5C5",fontSize:"40px",fontWeight:"900",fontFamily:"".concat(i().style.fontFamily," !important")},size:"large"}),(0,r.jsx)(n.zx,{onClick:()=>m(),size:"large",icon:(0,r.jsx)(l.SC9,{}),theme:"solid",type:"secondary",style:{padding:"0 20px",color:"#C5C5C5"}})]}),(0,r.jsx)("div",{className:"md:ml-5 ",children:(0,r.jsx)(n.zx,{className:"px-0 md:px-2 py-5",style:{borderRadius:"12px",background:"#2E2D2D",color:"#C5C5C5"},size:"large",theme:"solid",onClick:()=>g(),children:(0,r.jsx)("span",{className:"".concat(i().className," font-bold px-10 text-3xl"),children:"MINT"})})})]}),(0,r.jsx)(u.x7,{})]})};t.default=m},25942:function(e){e.exports={style:{fontFamily:"'__Bakbak_One_d0337e', '__Bakbak_One_Fallback_d0337e', Helvetica, Arial, sans-serif",fontWeight:400,fontStyle:"normal"},className:"__className_d0337e"}},88922:function(e,t,a){"use strict";let r,o;a.d(t,{x7:function(){return eo},ZP:function(){return ei}});var i,s=a(50959);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let a="",r="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+s+";":r+="f"==i[1]?u(s,i):i+"{"+u(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=u(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(i,s):i+":"+s+";")}return a+(t&&o?t+"{"+o+"}":o)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},g=(e,t,a,r,o)=>{var i,s;let n=f(e),l=m[n]||(m[n]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(n));if(!m[l]){let t=n!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(p," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(p," ").trim();return r[0]})(e);m[l]=u(o?{["@keyframes "+l]:t}:t,a?"":"."+l)}let g=a&&m.g?m.g:null;return a&&(m.g=m[l]),i=m[l],s=t,g?s.data=s.data.replace(g,i):-1===s.data.indexOf(i)&&(s.data=r?i+s.data:s.data+i),l},y=(e,t,a)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function h(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?y(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let b,x,v,w=h.bind({k:1});function C(e,t){let a=this||{};return function(){let r=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;a.p=Object.assign({theme:x&&x()},n),a.o=/ *go\d+/.test(l),n.className=h.apply(a,r)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),b(c,n)}return t?t(o):o}}var k=e=>"function"==typeof e,E=(e,t)=>k(e)?e(t):e,_=(r=0,()=>(++r).toString()),j=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},N=new Map,$=e=>{if(N.has(e))return;let t=setTimeout(()=>{N.delete(e),A({type:4,toastId:e})},1e3);N.set(e,t)},z=e=>{let t=N.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&z(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?O(e,{type:1,toast:a}):O(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?$(r):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},D=[],P={toasts:[],pausedAt:void 0},A=e=>{P=O(P,e),D.forEach(e=>{e(P)})},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={})=>{let[t,a]=(0,s.useState)(P);(0,s.useEffect)(()=>(D.push(a),()=>{let e=D.indexOf(a);e>-1&&D.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},T=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||_()}),S=e=>(t,a)=>{let r=T(t,e,a);return A({type:2,toast:r}),r.id},M=(e,t)=>S("blank")(e,t);M.error=S("error"),M.success=S("success"),M.loading=S("loading"),M.custom=S("custom"),M.dismiss=e=>{A({type:3,toastId:e})},M.remove=e=>A({type:4,toastId:e}),M.promise=(e,t,a)=>{let r=M.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(M.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{M.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var H=(e,t)=>{A({type:1,toast:{id:e,height:t}})},B=()=>{A({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:a}=F(e);(0,s.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,s.useCallback)(()=>{a&&A({type:6,time:Date.now()})},[a]),o=(0,s.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:o=8,defaultPosition:i}=a||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:B,endPause:r,calculateOffset:o}}},R=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,W=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=C("div")`
  position: absolute;
`,X=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?s.createElement(q,null,t):t:"blank"===a?null:s.createElement(X,null,s.createElement(U,{...r}),"loading"!==a&&s.createElement(Z,null,"error"===a?s.createElement(R,{...r}):s.createElement(W,{...r})))},V=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Y=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,G=C("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Q=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=j()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[V(a),Y(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=s.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?Q(e.position||t||"top-center",e.visible):{opacity:0},i=s.createElement(J,{toast:e}),n=s.createElement(K,{...e.ariaProps},E(e.message,e));return s.createElement(G,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):s.createElement(s.Fragment,null,i,n))});i=s.createElement,u.p=void 0,b=i,x=void 0,v=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:o})=>{let i=s.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return s.createElement("div",{ref:i,className:t,style:a},o)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:j()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eo=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:o,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=L(a);return s.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let i=a.position||t,n=ea(i,c.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return s.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?E(a.message,a):o?o(a):s.createElement(ee,{toast:a,position:i}))}))},ei=M}},function(e){e.O(0,[8312,9774,2888,179],function(){return e(e.s=95667)}),_N_E=e.O()}]);