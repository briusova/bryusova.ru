const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SingleView-B9sNzoeJ.js","./uuid-C_lTrkZC.js","./unocss-6cHglVlK.js","./ofetch-DfaEl5Lr.js","./destr-CVtkxrq9.js","./ufo-CsG24Xhf.js","./magic-string-D9CdRQHO.js","./jridgewell-9KHfGwW6.js","./unocss-DeJTMLhw.css","./vues3-C2L1g2Uv.js","./iconify-B_9Z2IXi.js","./unhead-CEwDqR4t.js","./hookable-B8xFkYCm.js","./vue-router-Db1rCyv1.js","./vue-Cow_pXkh.js","./vueuse-BCBbjqoF.js","./vue3-sfc-loader-CoUr1SK8.js","./MultiView-CktD1JSp.js","./NotFoundView-DGMX4SZZ.js"])))=>i.map(i=>d[i]);
import{p as W,a as q,b as H,c as Q,d as V,_ as b,e as N,i as Y}from"./unocss-6cHglVlK.js";import{T as h,Q as L,Y as K,O as z,j as G}from"./vues3-C2L1g2Uv.js";import*as J from"vue";import{defineComponent as X,computed as d,ref as j,watch as Z,resolveComponent as ee,openBlock as x,createBlock as I,withCtx as te,resolveDynamicComponent as oe,defineAsyncComponent as se,createApp as ne,readonly as P,nextTick as re}from"vue";import{i as ae,g as ce,l as ie}from"./iconify-B_9Z2IXi.js";import{u as pe,a as le,c as ue}from"./unhead-CEwDqR4t.js";import{u as de,c as me,a as fe}from"./vue-router-Db1rCyv1.js";import{u as ve}from"./vueuse-BCBbjqoF.js";import{i as ge}from"./vue3-sfc-loader-CoUr1SK8.js";import{v as we}from"./uuid-C_lTrkZC.js";import"./ofetch-DfaEl5Lr.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-D9CdRQHO.js";import"./jridgewell-9KHfGwW6.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const he="https://cdn.jsdelivr.net/npm/",_e=[W(),q(),H({cdn:he}),Q(),V()],A={presets:_e},ye=X({__name:"App",setup(e,{expose:o}){o();const a=de(),t=d(()=>h.value.find(({id:s})=>s===a.name)??null),r=d(()=>{var s;return((s=t.value)==null?void 0:s.to)===null||t.value===null?void 0:`${window.location.origin}${t.value.to==="/"?"":t.value.to}`}),n=()=>{var s;return(s=t.value)==null?void 0:s.images.filter(({url:l})=>l).map(({alt:l,url:u})=>({alt:l,url:u?`${window.location.origin}/${u}`:""}))},c=j(),i=[[c,"icon","icon"],[r,"canonical"]].map(([s,l,u])=>({href:s,key:u,rel:l}));pe({link:i});const f=()=>{var s;return((s=t.value)==null?void 0:s.title)??""},p=()=>{var s;return(s=t.value)==null?void 0:s.title},v=()=>{var s;return(s=t.value)==null?void 0:s.description},g=()=>{var s;return(s=t.value)==null?void 0:s.description},_=()=>{var s;return(s=t.value)==null?void 0:s.type},w=r,y=()=>{var s;return(s=t.value)==null?void 0:s.keywords.join()};le({description:v,keywords:y,ogDescription:g,ogImage:n,ogTitle:p,ogType:_,ogUrl:w,title:f}),Z(t,async s=>{let l="/favicon.ico";if(s!=null&&s.icon){const u=ae(s.icon)?ce(s.icon):await ie(s.icon);if(u){const{body:D,height:k,left:B,top:M,width:F}=u;l=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${B.toString()} ${M.toString()} ${F.toString()} ${k.toString()}">${D}</svg>`}}c.value=l});const O={route:a,a:t,canonical:r,ogImage:n,favicon:c,link:i,title:f,ogTitle:p,description:v,ogDescription:g,ogType:_,ogUrl:w,keywords:y,get pages(){return h}};return Object.defineProperty(O,"__isScriptSetup",{enumerable:!1,value:!0}),O}}),$e=(e,o)=>{const a=e.__vccOpts||e;for(const[t,r]of o)a[t]=r;return a};function be(e,o,a,t,r,n){const c=ee("router-view");return x(),I(c,null,{default:te(({Component:i})=>[(x(),I(oe(i),{id:t.pages[0].id},null,8,["id"]))]),_:1})}const Re=$e(ye,[["render",be],["__file","App.vue"]]);let R;const Se=(e,o,a)=>R&&R(e,o,a),je="smooth",st=.1,Oe=0,xe=0,$=new Map,Ie={vue:J},{pathname:Ae}=new URL(document.baseURI),Ee=me(Ae),Te=[],m=fe({history:Ee,routes:Te,scrollBehavior:Se}),E=j(!0),T=j(!0),C=d(()=>h.value.find(({id:e})=>e===m.currentRoute.value.name)??null),S=d(()=>{var e;return(m.currentRoute.value.path==="/"?(e=C.value)==null?void 0:e.$children[0]:C.value)??null}),Ce=d(()=>{var e;return((e=S.value)==null?void 0:e.siblings)??[]}),nt=d(()=>Ce.value.filter(({enabled:e})=>e)),Le=()=>{let e,o;return{promise:new Promise((t,r)=>{e=t,o=r}),reject:o,resolve:e}},Pe=async(e,o,a,t)=>{switch(e){case".css":return t.addStyle(await o(!1),a.toString()),null;case"js":return o(!1);default:return}},Ue=(e,...o)=>{window.console[e](...o.map(a=>decodeURIComponent(a)))},De=(e,o)=>{ve(e,{...o&&{id:o}})},rt=({id:e=we()})=>{const o=`${e}.vue`;$.set(e,Le());const a=async t=>{const{imports:r}=L;switch(!0){case t===o:return(await fetch(`./pages/${t}`)).text();case Object.keys(r).some(n=>t.startsWith(n)):return{getContentData:()=>import(t),type:"js"};default:{const n=t.split("/").pop();return(await fetch(n===(n==null?void 0:n.split(".").pop())?`${t}.js`:t)).text()}}};return se(async()=>ge(o,{addStyle:De,getFile:a,handleModule:Pe,log:Ue,moduleCache:Ie}))},ke=({extractAll:e,toggleObserver:o})=>{const a=async()=>{T.value=!0,o(!1);{const[{promise:t=null}={}]=$.values();await t}await Promise.all([...$.values()].map(({promise:t})=>t)),await e(),o(!0),T.value=!1};R=async({name:t})=>new Promise(r=>{t?a().then(()=>{var c,i;const n=`#${String(t)}`;r(E.value&&{behavior:je,...(i=(c=S.value)==null?void 0:c.parent)!=null&&i.along&&S.value.index?{el:n}:{left:xe,top:Oe}}),E.value=!0},()=>{r(!1)}):r(!1)})},at=({id:e}={})=>{var o;e&&((o=$.get(e))==null||o.resolve(null))};m.beforeEach(({path:e})=>e!==decodeURI(e)?decodeURI(e):void 0);const Be=d(()=>m.currentRoute.value.name);window.app=ne(Re);window.app.use(ue());window.app.provide("id",P(Be));const Me=(async()=>{const[{imports:e},[o={}]]=await Promise.all(["index.importmap","index.json"].map(async(n,c)=>{const i=await fetch(n);return(i.ok?i:new Response(c?"[]":"{}")).json()}));L.imports=e,K.push(o),await re(),window.app.provide("pages",P(Object.fromEntries(h.value.map(n=>[n.id,n]))));{const n=(i,f,p)=>[{component:i,name:f,path:p}],c=()=>b(()=>import("./SingleView-B9sNzoeJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url);h.value.forEach(({along:i,id:f,loc:p,parent:v,path:g})=>{if(g!==null){const _=g.replace(/^\/?/,"/").replace(/\/?$/,"/"),w=p==null?void 0:p.replaceAll(" ","_").replace(/^\/?/,"/").replace(/\/?$/,"/"),y=n((v==null?void 0:v.along)??i?()=>b(()=>import("./MultiView-CktD1JSp.js"),__vite__mapDeps([17,9,15,13,14,1,2,3,4,5,6,7,8,10,11,12,16]),import.meta.url):c,f,"");m.addRoute({...w&&p?{alias:w}:{undefined:void 0},children:y,component:c,path:_})}})}const a="/:pathMatch(.*)*",t=()=>b(()=>import("./NotFoundView-DGMX4SZZ.js"),__vite__mapDeps([18,11,12,2,3,4,5,6,7,8,9,10,13,14,15,16,1]),import.meta.url);m.addRoute({component:t,name:"404",path:a})})(),U=()=>document.getElementById("app")??void 0,Fe=async e=>{const{toggleObserver:o}=e;return ke(e),await Me,window.app.use(m),window.app.mount(U()),o(!0),!1};(async()=>{const e=await fetch("fonts.json"),o=z(await(e.ok?e:new Response("[]")).json());A.presets.push(N({customFetch:G,fonts:o})),await Y({defaults:A,ready:Fe,rootElement:U})})().catch(()=>{});window.console.info("⛵","vueS3","ver:0.1.19","https://vues3.com");export{nt as $,$e as _,T as a,je as b,st as c,rt as g,$ as p,at as r,E as s,S as t};
