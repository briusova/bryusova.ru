const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SingleView-BvnAHq90.js","assets/unocss-Sc4JooVO.js","assets/ofetch-C2qHvINx.js","assets/destr-CVtkxrq9.js","assets/ufo-CsG24Xhf.js","assets/magic-string-Ci9uVji-.js","assets/jridgewell-BQ5JxrZg.js","assets/ajv-B9jPN_u1.js","assets/fast-deep-equal-DhA4GXGS.js","assets/json-schema-traverse-DW8_mBst.js","assets/fast-uri-WMTOr92D.js","assets/unocss-DVpSmXhq.css","assets/ajv-keywords-C7uUwL6G.js","assets/uuid-random-BBDbE0jX.js","assets/iconify-DZNnka9g.js","assets/unhead-DyRpM8pl.js","assets/hookable-B8xFkYCm.js","assets/vue-router-DgSFFxGk.js","assets/vue-Cow_pXkh.js","assets/vueuse-B28Glbfg.js","assets/vue3-sfc-loader-DxcuOqa0.js","assets/MultiView-1bQCD1MC.js","assets/NotFoundView-Cb1FnFSI.js"])))=>i.map(i=>d[i]);
import{p as se,a as re,b as ae,_ as A,c as ie,i as ce}from"./unocss-Sc4JooVO.js";import{A as le}from"./ajv-B9jPN_u1.js";import{d as V}from"./ajv-keywords-C7uUwL6G.js";import{u as pe}from"./uuid-random-BBDbE0jX.js";import*as q from"vue";import{reactive as ue,watch as D,computed as j,defineComponent as de,ref as C,resolveComponent as me,openBlock as E,createBlock as I,withCtx as fe,resolveDynamicComponent as ge,createApp as he,readonly as z,nextTick as ye}from"vue";import{i as O,g as k,l as L}from"./iconify-DZNnka9g.js";import{u as T,a as B,c as ve}from"./unhead-DyRpM8pl.js";import{u as F,c as $e,a as we}from"./vue-router-DgSFFxGk.js";import{u as be}from"./vueuse-B28Glbfg.js";import{i as _e}from"./vue3-sfc-loader-DxcuOqa0.js";import"./ofetch-C2qHvINx.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-Ci9uVji-.js";import"./jridgewell-BQ5JxrZg.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-WMTOr92D.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const no=!0,je=!0,Pe=!0,xe=!0,Se=!0,W=!0,Ae="no-cache",De="smooth",Re=0,Ce=0,so=.1,Ee=async e=>(await fetch(e)).text(),Ie="urn:jsonschema:component",Oe=!1,ke={script:{default:"",type:"string"},style:{default:"",type:"string"},template:{default:"",type:"string"}},Le="object",Te={$id:Ie,additionalProperties:Oe,properties:ke,type:Le},Be="urn:jsonschema:credentials",M=!0,Fe={properties:{accessKeyId:{default:null,nullable:M,type:"string"},Bucket:{default:"",type:"string"},endpoint:{default:"",type:"string"},region:{default:"",type:"string"},secretAccessKey:{default:null,nullable:M,type:"string"}},type:"object"},We="object",Me={$id:Be,additionalProperties:Fe,type:We},Ue="urn:jsonschema:data",He={$ref:"urn:jsonschema:page"},Ke="array",Ne={$id:Ue,items:He,type:Ke},Ve="urn:jsonschema:importmap",qe=!1,ze={imports:{additionalProperties:{type:"string"},default:{},type:"object"}},Ge="object",Je={$id:Ve,additionalProperties:qe,properties:ze,type:Ge},Qe="urn:jsonschema:page",Xe=!1,f=!0,Ye="uuid",Ze={id:Ye},et={default:[],items:{$ref:"#"},type:"array"},tt={along:{default:!0,type:"boolean"},alt:{default:[],items:{type:"string"},type:"array"},changefreq:{default:null,enum:["always","hourly","daily","weekly","monthly","yearly","never",null],nullable:f,type:"string"},class:{default:[],description:"Классы",items:{type:"string"},type:"array"},description:{default:null,nullable:f,type:"string"},enabled:{default:!0,type:"boolean"},header:{default:null,nullable:f,type:"string"},icon:{default:null,nullable:f,type:"string"},id:{type:"string"},image:{default:[],items:{type:"string"},type:"array"},images:{default:[],items:{properties:{alt:{type:"string"},url:{type:"string"}},type:"object"},type:"array"},keywords:{default:[],items:{type:"string"},type:"array"},lastmod:{default:null,nullable:f,type:"string"},loc:{default:null,nullable:f,type:"string"},name:{default:null,nullable:f,type:"string"},priority:{default:null,maximum:1,minimum:0,nullable:f,type:"number"},scoped:{default:!0,type:"boolean"},setup:{default:!0,type:"boolean"},type:{default:null,enum:["article","book","profile","website","music.song","music.album","music.playlist","music.radio_station","video.movie","video.episode","video.tv_show","video.other",null],nullable:f,type:"string"}},ot="object",nt={$id:Qe,additionalProperties:Xe,dynamicDefaults:Ze,properties:{children:et,...tt},type:ot};V.DEFAULTS.uuid=()=>()=>pe();const st={esm:Se},rt=[Me,nt,Ne,Te,Je],at=[V()],x=new le({code:st,coerceTypes:Pe,keywords:at,removeAdditional:xe,schemas:rt,useDefaults:je});x.getSchema("urn:jsonschema:page");const it=x.getSchema("urn:jsonschema:component");x.getSchema("urn:jsonschema:credentials");const ct=x.getSchema("urn:jsonschema:data");x.getSchema("urn:jsonschema:importmap");const P=ue([]);{const e={get(){return P[0]}},t={get(){return this.siblings.findIndex(({id:i})=>this.id===i)}},a={get(){return this.siblings[this.index-1]}},n={get(){return this.siblings[this.index+1]}},o={get(){return this.children?.filter(({enabled:i})=>i)}},s={get(){return this.siblings.filter(({enabled:i})=>i)}},r={get(){return this.$siblings.findIndex(({id:i})=>this.id===i)}},c={get(){return this.$siblings[this.$index-1]}},l={get(){return this.$siblings[this.$index+1]}},m={get(){const i=[this];for(;i[0].parent;)i.unshift(i[0].parent);return i}},p={get(){return this.branch.slice(1).map(({name:i})=>i??"-").join("/").replaceAll(" ","_")}},g={get(){return(this.loc?.replaceAll(" ","_")??this.path).replace(/^\/?/,"/").replace(/\/?$/,"/")}},v={get(){return this.icon&&`i-${this.icon}`}},$={get(){return this.header??this.name}},_=(i,u={value:void 0})=>{i.value.forEach(d=>{Object.defineProperties(d,{$children:o,$index:r,$next:l,$prev:c,$siblings:s,branch:m,i:v,index:t,next:n,parent:u,path:p,prev:a,root:e,siblings:i,title:$,to:g}),_({configurable:W,value:d.children??[]},{configurable:W,value:d})})};D(P,i=>{ct(i),_({value:i})})}const G=e=>e.flatMap(t=>[t,...G(t.children??[])]),h=j(()=>G(P)),lt=e=>Object.fromEntries(e.map(t=>[t.toLowerCase().replaceAll(" ","_"),t])),pt="https://unpkg.com/",ut=[se(),re(),ae({cdn:pt})],J={presets:ut},dt=de({__name:"App",setup(e,{expose:t}){t();const a=F(),n=j(()=>h.value.find(({id:u})=>u===a.name)),o=j(()=>n.value?.to===void 0?void 0:`${window.location.origin}${n.value.to==="/"?"":n.value.to}`),s=()=>n.value?.images.map(({alt:u,url:d})=>({alt:u,url:d?`${window.location.origin}${d}`:""})),r=C(),c=[[r,"icon","icon"],[o,"canonical"]].map(([u,d,S])=>({href:u,key:S,rel:d}));T({link:c});const l=()=>n.value?.title??"",m=()=>n.value?.title??"",p=()=>n.value?.description??"",g=()=>n.value?.description??"",v=()=>n.value?.type,$=o,_=()=>n.value?.keywords.join();B({description:p,keywords:_,ogDescription:g,ogImage:s,ogTitle:m,ogType:v,ogUrl:$,title:l}),D(n,async u=>{let d="/favicon.ico";if(u?.icon){const S=O(u?.icon)?k(u?.icon):await L(u?.icon);if(S){const{body:Z,height:ee,left:te,top:oe,width:ne}=S;d=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${te.toString()} ${oe.toString()} ${ne.toString()} ${ee.toString()}">${Z}</svg>`}}r.value=d});const i={route:a,a:n,canonical:o,ogImage:s,favicon:r,link:c,title:l,ogTitle:m,description:p,ogDescription:g,ogType:v,ogUrl:$,keywords:_,get getIcon(){return k},get iconExists(){return O},get loadIcon(){return L},get useHead(){return T},get useSeoMeta(){return B},get pages(){return h},computed:j,ref:C,watch:D,get useRoute(){return F}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function mt(e,t,a,n,o,s){const r=me("router-view");return E(),I(r,null,{default:fe(({Component:c})=>[(E(),I(ge(c),{id:n.pages[0].id},null,8,["id"]))]),_:1})}const ft=(e,t)=>{const a=e.__vccOpts||e;for(const[n,o]of t)a[n]=o;return a},gt=ft(dt,[["render",mt],["__file","App.vue"]]),{computed:b,defineAsyncComponent:ht,markRaw:yt,ref:Q}=q,vt={vue:q},$t=(e,t)=>{const{refPath:a}=e,{getPathname:n,pathResolve:o}=t,s=o(e,t),r=s.toString(),c=n(r).split(".").pop()??"",l=c&&`.${c}`;return{getContent:async()=>{if(a&&!(r.startsWith("./")||r.startsWith("../")||r.startsWith("/")&&!r.startsWith("//")))return l===".css"?{type:l}:{getContentData:()=>import(r)};const p=await t.getFile(s);return typeof p=="string"||p instanceof ArrayBuffer?{getContentData:()=>Promise.resolve(p),type:l}:p},id:r,path:s}},wt=async(e,t,a,n)=>{switch(e){case".css":return n.addStyle(await(await fetch(a)).text(),void 0),null;case void 0:return t(!1);default:return}},bt=(e,...t)=>{window.console[e](...t.map(a=>decodeURIComponent(a)))},_t=(e,t)=>{be(e,{id:t})},ro=({path:e,scoped:t,setup:a,sfc:n})=>{const o=async()=>{const{script:s,style:r,template:c}=await n,l=s&&`<script${a?" setup":""}>${s}<\/script>`,m=c&&`<template>${c}</template>`,p=r&&`<style${t?" scoped":""}>${r}</style>`;return`${l}${m}${p}`};return ht(async()=>_e(`${h.value[0].name??""}${e&&"/"}${e}.vue`,{addStyle:_t,getFile:o,getResource:$t,handleModule:wt,log:bt,moduleCache:vt}))},jt={async get(){if(!this.buffer){const e=await fetch(`/pages/${this.id??""}.json`,{cache:Ae}),t=yt(e.ok?await e.json():{});it(t),Reflect.defineProperty(this,"buffer",{value:t})}return this.buffer}},Pt=$e("/"),xt=[],U=Q(!0);let R;const St=(e,t,a)=>R&&R(e,t,a),y=we({history:Pt,routes:xt,scrollBehavior:St});y.beforeEach(({path:e})=>e!==decodeURI(e)?decodeURI(e):void 0);const H=b(()=>h.value.find(({id:e})=>e===y.currentRoute.value.name)),X=e=>{e.forEach(t=>{Object.defineProperties(t,{sfc:jt}),t.children&&X(t.children)})},w=b(()=>y.currentRoute.value.path==="/"?H.value?.children?.[0]:H.value),At=b(()=>w.value?.siblings??[]),Dt=b(()=>At.value.filter(({enabled:e})=>e)),Rt=()=>{let e,t;return{promise:new Promise((n,o)=>{e=n,t=o}),reject:t,resolve:e}},Ct=b(()=>!w.value||w.value.parent?.along),Y=b(()=>Object.fromEntries([...Ct.value?Dt.value:[w.value],h.value[0]].map(({id:e})=>[e,Rt()]))),K=Q(!0),Et=({extractAll:e,toggleObserver:t})=>{const a=async()=>{K.value=!0,t(!1),await Promise.all(Object.values(Y.value).map(({promise:n})=>n)),await e(),t(!0),K.value=!1};R=async({name:n})=>new Promise(o=>{n?a().then(()=>{const s=`#${String(n)}`;o(U.value&&{behavior:De,...w.value?.parent?.along&&w.value.index?{el:s}:{left:Ce,top:Re}}),U.value=!0},()=>{o(!1)}):o(!1)})},ao=({id:e}={})=>{Y.value[e]?.resolve(void 0)};window.console.info("⛵","vueS3","ver:3.27.6","https://vues3.com");window.app=he(gt);window.app.use(ve());const It=j(()=>y.currentRoute.value.name);window.app.provide("id",z(It));const Ot=(async()=>{const e=await fetch("/index.json");P.push(e.ok?(await e.json())[0]:{}),X(P),await ye(),window.app.provide("pages",z(Object.fromEntries(h.value.map(o=>[o.id,o]))));{const o=(r,c,l)=>[{component:r,name:c,path:l}],s=()=>A(()=>import("./SingleView-BvnAHq90.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));h.value.forEach(({along:r,id:c,loc:l,parent:m,path:p})=>{const g=(l?.replaceAll(" ","_")??"").replace(/^\/?/,"/").replace(/\/?$/,"/"),v=o(m?.along??r?()=>A(()=>import("./MultiView-1bQCD1MC.js"),__vite__mapDeps([21,19,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20])):s,c,""),$=p.replace(/^\/?/,"/").replace(/\/?$/,"/");y.addRoute({path:$,...l&&{alias:g},children:v,component:s})})}const t="/:pathMatch(.*)*",a=()=>A(()=>import("./NotFoundView-Cb1FnFSI.js"),__vite__mapDeps([22,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20]));y.addRoute({component:a,name:"404",path:t})})(),kt=async e=>{const{toggleObserver:t}=e;return Et(e),await Ot,(async()=>{console.log(1,Date.now()),window.app.use(y),console.log(2,Date.now()),window.app.mount("#app"),console.log(3,Date.now())})().catch(()=>{}),console.log(4,Date.now()),t(!0),!1},N=await fetch("/fonts.json"),Lt=lt(N.ok?await N.json():[]);J.presets.push(ie({customFetch:Ee,fonts:Lt}));const Tt=()=>document.getElementById("app");ce({defaults:J,ready:kt,rootElement:Tt});export{Dt as $,ft as _,so as a,De as b,no as d,ro as g,K as p,ao as r,U as s,w as t};
