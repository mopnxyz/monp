import{h as ie,j as se,k as ne,l as re,e as oe}from"./el-collapse-item.e8b41e59.js";import{d as le,a4 as ce,a3 as de,ab as me,g as F,B as ue,ac as pe,h as H,L as _e,o,c as l,e,f as t,t as v,b,E as he,l as L,F as Y,C as I,y as Se,n as fe,D as A,af as _,ag as O,ah as ve,ai as B,aj as G}from"./app.1aaf6482.js";import{d as k,u as xe,h as j,m as V,E as ge,a as $,M as U,S as h,f as ye,p as Pe}from"./whitelist.6886651f.js";import"./events.49e0d246.js";const be={"max-w-8xl":"","mx-auto":"","mt-10":"","md:mt-30":"","px-8":""},Te={"md:flex":"","justify-between":""},Ce=e("h1",{block:"","md:hidden":"","text-28":"","text-primary":"","text-center":"","mb-10":""}," MOPN PASS ",-1),Ne={style:{width:"40%"},hidden:"","md:block":""},we=["src"],ke={style:{width:"100%"},block:"","md:hidden":""},Ee=["src"],Me={"flex-1":""},De=e("h1",{hidden:"","md:block":"","text-48":"","font-bold":"","text-primary":""}," MOPN PASS ",-1),Fe=e("p",{"text-desc":"","mt-10":"","leading-7":"","text-center":"","md:text-left":"","text-12":""}," Own 1/10981 of MOPN. Each pass has 91 blocks. Pass has the untilization of $Energy Recycle, Commnunity Governance, priority of following games. ",-1),Oe={key:0,"mt-14":"","md:mt-20":"","text-primary":"","text-13":"","text-center":"","md:text-left":""},Be={key:1,"text-desc":"","mt-20":"","text-12":"","leading-8":""},He={key:2,"mt-5":"","md:pr-18":""},Le={key:0,"md:flex":"","items-end":"","justify-between":""},Ye={key:0,"text-center":"","md:text-left":""},Ie={key:0},Ae={"text-primary":"","text-16":"","md:text-20":""},Ge={"text-desc":"","ml-2":"","md:mr-6":"","text-12":""},je={key:1,"text-desc":""},Ve={key:1,style:{width:"150px"},"mx-auto":""},$e={flex:"","justify-between":""},Ue={"mt-10":"","md:mt-0":"","mr-2":"",class:"input-number"},ze=e("span",{style:{color:"#261802"},"text-16":""},"MINT",-1),Re={key:1,"text-primary":"","text-30":""},Ze={key:3,"text-primary":"","mt-10":"","text-16":"","md:text-20":""},qe={"mt-20":"","md:mt-50":""},Qe=e("h1",{"text-center":"","text-16":"","md:text-32":"","text-primary":"","leading-10":""}," Holder Benefits ",-1),We={grid:"","grid-cols-1":"","md:grid-cols-2":"","gap-10":"","mt-10":"","md:mt-30":""},Je={flex:"","justify-center":"","mb-0":"","md:mb-10":"","md:pr-30":""},Ke={"pl-8":"","md:pl-0":""},Xe={"text-13":"","md:text-14":"","text-primary":"","text-center":"","md:text-left":"",style:{"margin-left":"-28px"}},et=e("span",{hidden:"","md:inline-block":""},"*",-1),tt={"text-desc":"","text-12":"","mt-7":"","leading-7":"","text-center":"","md:text-left":""},at={"mt-20":"","md:mt-50":"","mb-20":""},it=e("h1",{"text-center":"","text-16":"","md:text-32":"","text-primary":""}," Mint Plan ",-1),st={grid:"","grid-cols-1":"","md:grid-cols-3":"","gap-15":"","mt-16":"","md:mt-30":""},nt={absolute:"","text-13":"",class:"plan-index"},rt={"text-16":"","md:text-22":"","text-primary":""},ot={"text-12":"","my-8":"","text-desc":""},lt={key:0,"text-desc":"","text-12":""},ct={"mt-8":""},dt={key:1,"text-desc":"","text-12":""},mt={key:0},ut=e("div",null,"TBD",-1),pt=e("div",{"mt-8":""},"TBD",-1),_t=[ut,pt],ht={key:1},St=e("div",null,"Ended",-1),ft=e("div",{"mt-8":""},"Ended",-1),vt=[St,ft],xt=le({__name:"index",setup(gt){k.extend(xe);const E="0xBeD80008DCE9CAC7bBCED650c58617cB0715FC03",{isConnected:z}=ce(),{address:T}=de(),{data:R}=me(),m=ie(),a=m.SaleConfig,u=F(1),d=F(!1),Z=ue("(max-width: 700px)"),q="https://mopn.infura-ipfs.io/ipfs/",Q="https://api.coingecko.com/api/v3/simple/price?ids=Ethereum&vs_currencies=usd",W=[{title:"Energy Recycle",description:"Each pass has 91 blocks\uFF0Cholders can recycle $Energy from $Props used on those blocks based on the Prop price, block level and Energy Content."},{title:"Community Governance",description:"Vote for which NFT collection can join in MOPN, and more governance rights in the future."},{title:"Priority",description:"MOPN is coming up with more interesting games, Pass Holder will have priority of those following games."},{title:"Potential Benefits",description:"Pass Holder are early users and backups of MOPN. MOPN will provide potential benefits for our pass holders."}],n=F([{index:0,number:"2,000",type:"Whitelist",start_time:"2022.12.31 00:00:00 UTC",planName:"Phase One",mintNum:2e3,publicSalePrice:!1,isStart:!0,price:null,mintType:"preSale",prePrice:"0.05ETH",nexPrice:"",mintPriceName:"preSalePrice"},{index:1,number:"3,000",type:"Public",start_time:"2023.1",planName:"Phase Two",mintNum:5e3,publicSalePrice:!0,isStart:!1,price:null,mintType:"secondSale",prePrice:"0.06ETH",nexPrice:"For every 10 sold, add 0.01 E",mintPriceName:"secondSalePrice"},{index:2,number:"5,981",type:"Public",start_time:"2023.3",planName:"Phase Three",mintNum:10981,publicSalePrice:!0,isStart:!1,price:null,mintType:"thirdSale",prePrice:"1.06ETH",nexPrice:"For every 10 sold, add 0.01 E",mintPriceName:"thirdSalePrice"}]),M=pe(),D=async()=>{const i=await $({addressOrName:E,contractInterface:U,signerOrProvider:M}).value,c=await i.saleConfig(),x=await i.totalSupply(),C=await i.whitelistCID();j.get(`${q}${C}`).then(f=>{f.status===200&&(m.SaleConfig.whitelistCID=f.data)});const g={preSaleStartTime:_.from(c.preSaleStartTime).toNumber(),preSalePrice:O(_.from(c.preSalePrice).toString()),secondSaleStartTime:_.from(c.secondSaleStartTime).toNumber(),thirdSaleStartTime:_.from(c.thirdSaleStartTime).toNumber(),secondSalePrice:O(_.from(c.secondSalePrice).toString()),thirdSalePrice:O(_.from(c.thirdSalePrice).toString()),totalSupply:_.from(x).toNumber()};n.value[0].start_time=k.unix(g.preSaleStartTime).format("YYYY.MM.DD HH:mm:ss Z"),n.value[1].start_time=k.unix(g.secondSaleStartTime).format("YYYY.MM.DD HH:mm:ss Z"),n.value[2].start_time=k.unix(g.thirdSaleStartTime).format("YYYY.MM.DD HH:mm:ss Z"),m.setSaleConfig(g)},S=k().unix(),s=H(()=>a.preSaleStartTime>0&&a.totalSupply<=n.value[0].mintNum?a.preSaleStartTime<=S?(n.value[0].start_time="On Going",{...n.value[0],price:a.preSalePrice,isStart:!0,now:S,startTime:a.preSaleStartTime}):{...n.value[0],price:a.preSalePrice,isStart:!1,now:S,startTime:a.preSaleStartTime}:a.secondSaleStartTime>0&&a.totalSupply>n.value[0].mintNum&&a.totalSupply<=n.value[1].mintNum?a.secondSaleStartTime<S?(n.value[1].start_time="On Going",{...n.value[1],isStart:!0,now:S,startTime:a.secondSaleStartTime,price:a.secondSalePrice}):{...n.value[1],isStart:!1,now:S,startTime:a.secondSaleStartTime,price:!1}:a.thirdSaleStartTime>0&&a.totalSupply>n.value[1].mintNum?a.thirdSaleStartTime<=S?(n.value[2].start_time="On Going",{...n.value[2],isStart:!0,startTime:a.thirdSaleStartTime,now:S,price:a.thirdSalePrice}):{...n.value[2],isStart:!1,startTime:a.thirdSaleStartTime,now:S,price:a.thirdSalePrice}:{...n.value[0]});j.get(Q).then(i=>{i.status===200&&(m.SaleConfig.ethPrice=i.data.ethereum.usd)}),_e(()=>{D()});const J=async()=>{if(!z.value)return!1;const i=$({addressOrName:E,contractInterface:U,signerOrProvider:ve(R.value)}).value;let c=null;if(s.publicSalePrice?c=await i.getPublicSalePrice():c=a.preSalePrice,!c)return!1;d.value=!0;const x=await i.totalSupply(),C=_.from(x).toNumber();if(u.value>s.value.mintNum-C)return h.error("Not enough quantity"),d.value=!1,!1;switch(s.value.mintType){case"preSale":const g=B(c).toString(),f=ye(T.value);if(!f)return h.error("Your address is not on the whitelist"),d.value=!1,!1;const r=await Pe(T.value),y={from:T.value,value:_.from(g).mul(u.value)};y.gasLimit=await i.estimateGas.preSale(u.value,f.max,r,y),y.gasLimit=parseInt(y.gasLimit.toNumber()*1.2);try{i.preSale(u.value,f.max,r,y).then(P=>{try{M.value.waitForTransaction(P.hash).then(p=>{p.status&&p.status===1&&(h.success("Mint Success"),d.value=!1)})}catch(p){h.error("Mint Error"),d.value=!1}}).catch(()=>{d.value=!1})}catch(P){h.success("Mint Error"),d.value=!1}break;case"secondSale":const te=B(a.secondSalePrice).toString(),N={from:T.value,value:_.from(te).mul(u.value)};N.gasLimit=await i.estimateGas.secondSale(u.value,N),N.gasLimit=parseInt(N.gasLimit.toNumber()*1.2),i.secondSale(u.value,N).then(P=>{try{M.value.waitForTransaction(P.hash).then(p=>{p.status&&p.status===1?(h.success("Mint Success"),d.value=!1):(h.success("Mint Error"),d.value=!1)})}catch(p){h.error("Mint Error"),d.value=!1}}).catch(()=>{d.value=!1});break;case"thirdSale":const ae=B(a.secondSalePrice).toString(),w={from:T.value,value:_.from(ae).mul(u.value)};w.gasLimit=await i.estimateGas.secondSale(u.value,w),w.gasLimit=parseInt(w.gasLimit.toNumber()*1.2),i.secondSale(u.value,w).then(P=>{try{M.value.waitForTransaction(P.hash).then(p=>{p.status&&p.status===1?(h.success("Mint Success"),d.value=!1):(h.success("Mint Error"),d.value=!1)})}catch(p){h.error("Mint Error"),d.value=!1}}).catch(()=>{d.value=!1});break}},K=H(()=>!s.value.isStart||m.SaleConfig.totalSupply>=s.value.mintNum),X=i=>{const c=i.mintType===s.value.mintType,x=m.SaleConfig.totalSupply<s.value.mintNum;return{"plan-active":c&&x,plan:!c||!x}},ee=i=>i.isStart?m.SaleConfig.totalSupply<i.mintNum?"On Going":"Ended":i.start_time?i.start_time:"TBD";return(i,c)=>{const x=se,C=ne,g=oe,f=re;return o(),l("div",be,[e("div",Te,[Ce,e("div",Ne,[e("img",{width:"340",src:t(V)},null,8,we)]),e("div",ke,[e("img",{width:"300","mx-auto":"",src:t(V)},null,8,Ee)]),e("div",Me,[De,Fe,t(s).isStart&&t(E)!=="0x0"?(o(),l("div",Oe," Mint Price ")):(o(),l("div",Be," Minting is starting soon\uFF0CTime remaining ")),t(E)!=="0x0"?(o(),l("div",He,[t(s).isStart?(o(),l("div",Le,[e("div",null,[t(s).price?(o(),l("div",Ye,[t(m).SaleConfig.totalSupply<t(s).mintNum?(o(),l("div",Ie,[e("span",Ae,v(t(s).price)+" ETH",1),e("span",Ge,"$"+v(parseFloat(t(s).price*t(m).SaleConfig.ethPrice).toFixed(2)==0?.01:parseFloat(t(s).price*t(m).SaleConfig.ethPrice).toFixed(2)),1)])):(o(),l("div",je," Ended "))])):(o(),l("div",Ve,[b(x,{color:"#C2A44D",type:"circle"})]))]),e("div",$e,[e("div",Ue,[b(t(ge),{modelValue:t(u),"onUpdate:modelValue":c[0]||(c[0]=r=>he(u)?u.value=r:null),size:t(Z)?"":"large",min:1,max:t(s).mintNum-t(m).SaleConfig.totalSupply>10?10:t(s).mintNum-t(m).SaleConfig.totalSupply},null,8,["modelValue","size","max"])]),b(g,null,{default:L(()=>[b(C,{class:"mobile-input-number md:w-full md:w-auto","mt-10":"","md:mt-0":"",loading:t(d),"loading-type":"rect",disabled:t(K),"md:ml-6":"",color:"radial-gradient(100% 508.08% at 100% 12.88%, #C2A44D 0%, #6B4C19 100%)",onClick:J},{default:L(()=>[ze]),_:1},8,["loading","disabled"])]),_:1})])])):(o(),l("div",Re,[b(f,{time:(t(s).startTime-t(s).now)*1e3,onEnd:D},null,8,["time"])]))])):(o(),l("div",Ze,[b(f,{time:(1672416e3-t(S))*1e3,onEnd:D},null,8,["time"])]))])]),e("div",qe,[Qe,e("div",We,[(o(),l(Y,null,I(W,r=>e("div",Je,[e("div",Ke,[e("h5",Xe,[et,Se(" "+v(r.title),1)]),e("p",tt,v(r.description),1)])])),64))])]),e("div",at,[it,e("div",st,[(o(!0),l(Y,null,I(t(n),(r,y)=>(o(),l("div",{key:y,"text-center":"","py-15":"",relative:"",class:fe(X(r))},[e("div",nt,v(r.planName),1),e("h5",rt,v(r.number),1),e("p",ot,v(r.type),1),t(m).SaleConfig[r.mintPriceName]!==0&&t(m).SaleConfig[r.mintPriceName]!=="0.0"?(o(),l("div",lt,[e("p",null,v(t(m).SaleConfig[r.mintPriceName])+" ETH",1),e("p",ct,v(ee(r)),1)])):(o(),l("div",dt,[t(s).index<r.index?(o(),l("div",mt,_t)):A("",!0),t(s).index>r.index?(o(),l("div",ht,vt)):A("",!0)]))],2))),128))])])])}}});typeof G=="function"&&G(xt);export{xt as default};
