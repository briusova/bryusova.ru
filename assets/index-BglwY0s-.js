const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SingleView-C5c0MeS3.js","./unocss-D7ytMJtA.js","./ofetch-DfaEl5Lr.js","./destr-CVtkxrq9.js","./ufo-CsG24Xhf.js","./magic-string-DSj1XNNt.js","./jridgewell-CZjbnCxS.js","./ajv-DdW9kOyk.js","./fast-deep-equal-DhA4GXGS.js","./json-schema-traverse-DW8_mBst.js","./fast-uri-DiSllsZr.js","./unocss-DaoZmw1x.css","./ajv-keywords-B-LXxrVN.js","./uuid-random-DCzgQCSc.js","./iconify-DZNnka9g.js","./unhead-CEwDqR4t.js","./hookable-B8xFkYCm.js","./vue-router-DgSFFxGk.js","./vue-Cow_pXkh.js","./vueuse-Bs6x0GOr.js","./vue3-sfc-loader-CoUr1SK8.js","./MultiView-B5Q4TY4c.js","./NotFoundView-BBcaF0oN.js"])))=>i.map(i=>d[i]);
import{p as it,a as at,b as ct,c as lt,d as pt,_ as A,e as ut,i as dt}from"./unocss-D7ytMJtA.js";import{A as mt}from"./ajv-DdW9kOyk.js";import{d as z}from"./ajv-keywords-B-LXxrVN.js";import{u as ft}from"./uuid-random-DCzgQCSc.js";import*as G from"vue";import{reactive as J,watch as I,computed as _,defineComponent as gt,ref as k,resolveComponent as yt,openBlock as D,createBlock as L,withCtx as ht,resolveDynamicComponent as $t,createApp as wt,readonly as Q,nextTick as vt}from"vue";import{i as T,g as U,l as M}from"./iconify-DZNnka9g.js";import{u as B,a as F,c as bt}from"./unhead-CEwDqR4t.js";import{u as H,c as _t,a as jt}from"./vue-router-DgSFFxGk.js";import{u as xt}from"./vueuse-Bs6x0GOr.js";import{i as St}from"./vue3-sfc-loader-CoUr1SK8.js";import"./ofetch-DfaEl5Lr.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-DSj1XNNt.js";import"./jridgewell-CZjbnCxS.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-DiSllsZr.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();const so=!0,Pt=!0,Rt=!0,At=!0,It=!0,W=!0,Et="no-cache",Ot="smooth",Ct=0,kt=0,no=.1,Dt=async t=>(await fetch(t)).text(),Lt="urn:jsonschema:component",Tt=!1,Ut={script:{default:"",type:"string"},style:{default:"",type:"string"},template:{default:"",type:"string"}},Mt="object",Bt={$id:Lt,additionalProperties:Tt,properties:Ut,type:Mt},Ft="urn:jsonschema:credentials",b=!0,Ht={properties:{accessKeyId:{default:null,nullable:b,type:"string"},Bucket:{default:null,nullable:b,type:"string"},domain:{default:null,nullable:b,type:"string"},endpoint:{default:null,nullable:b,type:"string"},region:{default:null,nullable:b,type:"string"},secretAccessKey:{default:null,nullable:b,type:"string"}},type:"object"},Wt="object",Kt={$id:Ft,additionalProperties:Ht,type:Wt},Vt="urn:jsonschema:data",qt={$ref:"urn:jsonschema:page"},Nt="array",zt={$id:Vt,items:qt,type:Nt},Gt="urn:jsonschema:importmap",Jt=!1,Qt={imports:{additionalProperties:{type:"string"},default:{},type:"object"}},Xt="object",Yt={$id:Gt,additionalProperties:Jt,properties:Qt,type:Xt},Zt="urn:jsonschema:page",te=!1,f=!0,ee="uuid",oe={id:ee},se={default:[],items:{$ref:"#"},type:"array"},ne={along:{default:!0,type:"boolean"},alt:{default:[],items:{type:"string"},type:"array"},changefreq:{default:null,enum:["always","hourly","daily","weekly","monthly","yearly","never",null],nullable:f,type:"string"},class:{default:[],description:"Классы",items:{type:"string"},type:"array"},description:{default:null,nullable:f,type:"string"},enabled:{default:!0,type:"boolean"},header:{default:null,nullable:f,type:"string"},icon:{default:null,nullable:f,type:"string"},id:{type:"string"},image:{default:[],items:{type:"string"},type:"array"},images:{default:[],items:{properties:{alt:{type:"string"},url:{type:"string"}},type:"object"},type:"array"},keywords:{default:[],items:{type:"string"},type:"array"},lastmod:{default:null,nullable:f,type:"string"},loc:{default:null,nullable:f,type:"string"},name:{default:null,nullable:f,type:"string"},priority:{default:null,maximum:1,minimum:0,nullable:f,type:"number"},scoped:{default:!0,type:"boolean"},setup:{default:!0,type:"boolean"},type:{default:null,enum:["article","book","profile","website","music.song","music.album","music.playlist","music.radio_station","video.movie","video.episode","video.tv_show","video.other",null],nullable:f,type:"string"}},re="object",ie={$id:Zt,additionalProperties:te,dynamicDefaults:oe,properties:{children:se,...ne},type:re};z.DEFAULTS.uuid=()=>()=>ft();const ae={esm:It},ce=[Kt,ie,zt,Bt,Yt],le=[z()],S=new mt({code:ae,coerceTypes:Rt,keywords:le,removeAdditional:At,schemas:ce,useDefaults:Pt});S.getSchema("urn:jsonschema:page");const pe=S.getSchema("urn:jsonschema:component");S.getSchema("urn:jsonschema:credentials");const ue=S.getSchema("urn:jsonschema:data"),de=S.getSchema("urn:jsonschema:importmap"),E=J({}),j=J([]);{const t={get(){return j[0]}},e={get(){return this.siblings.findIndex(({id:i})=>this.id===i)}},c={get(){return this.siblings[this.index-1]}},s={get(){return this.siblings[this.index+1]}},n={get(){var i;return(i=this.children)==null?void 0:i.filter(({enabled:o})=>o)}},r={get(){return this.siblings.filter(({enabled:i})=>i)}},a={get(){return this.$siblings.findIndex(({id:i})=>this.id===i)}},p={get(){return this.$siblings[this.$index-1]}},l={get(){return this.$siblings[this.$index+1]}},u={get(){const i=[this];for(;i[0].parent;)i.unshift(i[0].parent);return i}},m={get(){return this.branch.slice(1).map(({name:i})=>i??"-").join("/").replaceAll(" ","_")}},g={get(){var i;return(((i=this.loc)==null?void 0:i.replaceAll(" ","_"))??this.path).replace(/^\/?/,"/").replace(/\/?$/,"/")}},y={get(){return this.icon&&`i-${this.icon}`}},h={get(){return this.header??this.name}},$=(i,o={value:void 0})=>{i.value.forEach(d=>{Object.defineProperties(d,{$children:n,$index:a,$next:l,$prev:p,$siblings:r,branch:u,i:y,index:e,next:s,parent:o,path:m,prev:c,root:t,siblings:i,title:h,to:g}),$({configurable:W,value:d.children??[]},{configurable:W,value:d})})};I(j,i=>{ue(i),$({value:i})})}const X=t=>t.flatMap(e=>[e,...X(e.children??[])]),x=_(()=>X(j)),me=t=>Object.fromEntries(t.map(e=>[e.toLowerCase().replaceAll(" ","_"),e])),fe="https://unpkg.com/",ge=[it(),at(),ct({cdn:fe}),lt(),pt()],K={presets:ge},ye=gt({__name:"App",setup(t,{expose:e}){e();const c=H(),s=_(()=>x.value.find(({id:o})=>o===c.name)),n=_(()=>{var o;return((o=s.value)==null?void 0:o.to)===void 0?void 0:`${window.location.origin}${s.value.to==="/"?"":s.value.to}`}),r=()=>{var o;return(o=s.value)==null?void 0:o.images.filter(({url:d})=>d).map(({alt:d,url:w})=>({alt:d,url:w?`${window.location.origin}/${w}`:""}))},a=k(),p=[[a,"icon","icon"],[n,"canonical"]].map(([o,d,w])=>({href:o,key:w,rel:d}));B({link:p});const l=()=>{var o;return((o=s.value)==null?void 0:o.title)??""},u=()=>{var o;return(o=s.value)==null?void 0:o.title},m=()=>{var o;return(o=s.value)==null?void 0:o.description},g=()=>{var o;return(o=s.value)==null?void 0:o.description},y=()=>{var o;return(o=s.value)==null?void 0:o.type},h=n,$=()=>{var o;return(o=s.value)==null?void 0:o.keywords.join()};F({description:m,keywords:$,ogDescription:g,ogImage:r,ogTitle:u,ogType:y,ogUrl:h,title:l}),I(s,async o=>{let d="/favicon.ico";if(o!=null&&o.icon){const w=T(o==null?void 0:o.icon)?U(o==null?void 0:o.icon):await M(o==null?void 0:o.icon);if(w){const{body:et,height:ot,left:st,top:nt,width:rt}=w;d=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${st.toString()} ${nt.toString()} ${rt.toString()} ${ot.toString()}">${et}</svg>`}}a.value=d});const i={route:c,a:s,canonical:n,ogImage:r,favicon:a,link:p,title:l,ogTitle:u,description:m,ogDescription:g,ogType:y,ogUrl:h,keywords:$,get getIcon(){return U},get iconExists(){return T},get loadIcon(){return M},get useHead(){return B},get useSeoMeta(){return F},get pages(){return x},computed:_,ref:k,watch:I,get useRoute(){return H}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function he(t,e,c,s,n,r){const a=yt("router-view");return D(),L(a,null,{default:ht(({Component:p})=>[(D(),L($t(p),{id:s.pages[0].id},null,8,["id"]))]),_:1})}const $e=(t,e)=>{const c=t.__vccOpts||t;for(const[s,n]of e)c[s]=n;return c},we=$e(ye,[["render",he],["__file","App.vue"]]),{computed:R,defineAsyncComponent:ve,markRaw:be,ref:Y}=G,P=new Map,_e=()=>{let t,e;return{promise:new Promise((s,n)=>{t=s,e=n}),reject:e,resolve:t}},je={vue:G},xe=async(t,e,c,s)=>{switch(t){case".css":return s.addStyle(await e(!1),c.toString()),null;case"js":return e(!1);default:return}},Se=(t,...e)=>{window.console[t](...e.map(c=>decodeURIComponent(c)))},Pe=(t,e)=>{xt(t,{id:e})},ro=({id:t,scoped:e,setup:c,sfc:s})=>{const n=`${t}.vue`;P.set(t,_e());const r=async a=>{const{imports:p}=E;switch(!0){case a===n:{const{script:l,style:u,template:m}=await s,g=l&&`<script${c?" setup":""}>${l}<\/script>`,y=m&&`<template>${m}</template>`,h=u&&`<style${e?" scoped":""}>${u}</style>`;return`${g}${y}${h}`}case Object.keys(p).some(l=>a.startsWith(l)):return{getContentData:()=>import(a),type:"js"};default:{const l=a.split("/").pop();return(await fetch(l===(l==null?void 0:l.split(".").pop())?`${a}.js`:a)).text()}}};return ve(async()=>St(n,{addStyle:Pe,getFile:r,handleModule:xe,log:Se,moduleCache:je}))},Re={async get(){if(!this.buffer){const t=await fetch(`pages/${this.id??""}.json`,{cache:Et}),e=be(t.ok?await t.json():{});pe(e),Reflect.defineProperty(this,"buffer",{value:e})}return this.buffer}},{pathname:Ae}=new URL(document.baseURI),Ie=_t(Ae),Ee=[],V=Y(!0);let O;const Oe=(t,e,c)=>O&&O(t,e,c),v=jt({history:Ie,routes:Ee,scrollBehavior:Oe});v.beforeEach(({path:t})=>t!==decodeURI(t)?decodeURI(t):void 0);const q=R(()=>x.value.find(({id:t})=>t===v.currentRoute.value.name)),Z=t=>{t.forEach(e=>{Object.defineProperties(e,{sfc:Re}),e.children&&Z(e.children)})},C=R(()=>{var t,e;return v.currentRoute.value.path==="/"?(e=(t=q.value)==null?void 0:t.$children)==null?void 0:e[0]:q.value}),Ce=R(()=>{var t;return((t=C.value)==null?void 0:t.siblings)??[]}),io=R(()=>Ce.value.filter(({enabled:t})=>t)),N=Y(!0),ke=({extractAll:t,toggleObserver:e})=>{const c=async()=>{N.value=!0,e(!1);{const[{promise:s}]=P.values();await s}await Promise.all([...P.values()].map(({promise:s})=>s)),await t(),e(!0),N.value=!1};O=async({name:s})=>new Promise(n=>{s?c().then(()=>{var a,p;const r=`#${String(s)}`;n(V.value&&{behavior:Ot,...(p=(a=C.value)==null?void 0:a.parent)!=null&&p.along&&C.value.index?{el:r}:{left:kt,top:Ct}}),V.value=!0},()=>{n(!1)}):n(!1)})},ao=({id:t}={})=>{var e;(e=P.get(t))==null||e.resolve(void 0)};window.console.info("⛵","vueS3","ver:3.29.2","https://vues3.com");window.app=wt(we);window.app.use(bt());const De=_(()=>v.currentRoute.value.name);window.app.provide("id",Q(De));const Le=(async()=>{const[{imports:t},[e]]=await Promise.all(["index.importmap","index.json"].map(async(r,a)=>{const p=await fetch(r);return(p.ok?p:new Response(a?"[{}]":"{}")).json()}));E.imports=t,de(E),j.push(e),Z(j),await vt(),window.app.provide("pages",Q(Object.fromEntries(x.value.map(r=>[r.id,r]))));{const r=(p,l,u)=>[{component:p,name:l,path:u}],a=()=>A(()=>import("./SingleView-C5c0MeS3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url);x.value.forEach(({along:p,id:l,loc:u,parent:m,path:g})=>{const y=((u==null?void 0:u.replaceAll(" ","_"))??"").replace(/^\/?/,"/").replace(/\/?$/,"/"),h=r((m==null?void 0:m.along)??p?()=>A(()=>import("./MultiView-B5Q4TY4c.js"),__vite__mapDeps([21,19,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20]),import.meta.url):a,l,""),$=g.replace(/^\/?/,"/").replace(/\/?$/,"/");v.addRoute({path:$,...u&&{alias:y},children:h,component:a})})}const c="/:pathMatch(.*)*",s=()=>A(()=>import("./NotFoundView-BBcaF0oN.js"),__vite__mapDeps([22,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20]),import.meta.url);v.addRoute({component:s,name:"404",path:c})})(),tt=()=>document.getElementById("app"),Te=async t=>{const{toggleObserver:e}=t;return ke(t),await Le,window.app.use(v),window.app.mount(tt()),e(!0),!1};(async()=>{const t=await fetch("fonts.json"),e=me(await(t.ok?t:new Response("[]")).json());K.presets.push(ut({customFetch:Dt,fonts:e})),dt({defaults:K,ready:Te,rootElement:tt})})().catch(()=>{});export{io as $,$e as _,no as a,Ot as b,N as c,so as d,ro as g,P as p,ao as r,V as s,C as t};
