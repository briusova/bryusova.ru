const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SingleView-DKOq8w-w.js","assets/unocss-Sc4JooVO.js","assets/ofetch-C2qHvINx.js","assets/destr-CVtkxrq9.js","assets/ufo-CsG24Xhf.js","assets/magic-string-Ci9uVji-.js","assets/jridgewell-BQ5JxrZg.js","assets/ajv-B9jPN_u1.js","assets/fast-deep-equal-DhA4GXGS.js","assets/json-schema-traverse-DW8_mBst.js","assets/fast-uri-WMTOr92D.js","assets/unocss-DVpSmXhq.css","assets/ajv-keywords-C7uUwL6G.js","assets/uuid-random-BBDbE0jX.js","assets/iconify-DZNnka9g.js","assets/unhead-DyRpM8pl.js","assets/hookable-B8xFkYCm.js","assets/vue-router-DgSFFxGk.js","assets/vue-Cow_pXkh.js","assets/vueuse-B28Glbfg.js","assets/vue3-sfc-loader-DxcuOqa0.js","assets/MultiView-BA-21GT9.js","assets/NotFoundView-CxrzZa9r.js"])))=>i.map(i=>d[i]);
import{p as se,a as re,b as ie,_ as A,c as ae,i as ce}from"./unocss-Sc4JooVO.js";import{A as le}from"./ajv-B9jPN_u1.js";import{d as V}from"./ajv-keywords-C7uUwL6G.js";import{u as pe}from"./uuid-random-BBDbE0jX.js";import*as q from"vue";import{reactive as ue,watch as R,computed as P,defineComponent as de,ref as E,resolveComponent as me,openBlock as I,createBlock as O,withCtx as fe,resolveDynamicComponent as ge,createApp as ye,readonly as z,nextTick as he}from"vue";import{i as D,g as k,l as L}from"./iconify-DZNnka9g.js";import{u as T,a as B,c as ve}from"./unhead-DyRpM8pl.js";import{u as F,c as $e,a as we}from"./vue-router-DgSFFxGk.js";import{u as be}from"./vueuse-B28Glbfg.js";import{i as _e}from"./vue3-sfc-loader-DxcuOqa0.js";import"./ofetch-C2qHvINx.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-Ci9uVji-.js";import"./jridgewell-BQ5JxrZg.js";import"./fast-deep-equal-DhA4GXGS.js";import"./json-schema-traverse-DW8_mBst.js";import"./fast-uri-WMTOr92D.js";import"./hookable-B8xFkYCm.js";import"./vue-Cow_pXkh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const co=!0,je=!0,Pe=!0,xe=!0,Se=!0,W=!0,Ae="no-cache",Re="smooth",Ce=0,Ee=0,lo=.1,Ie=async e=>(await fetch(e)).text(),Oe="urn:jsonschema:component",De=!1,ke={script:{default:"",type:"string"},style:{default:"",type:"string"},template:{default:"",type:"string"}},Le="object",Te={$id:Oe,additionalProperties:De,properties:ke,type:Le},Be="urn:jsonschema:config",Fe=!1,We={expanded:{default:[],items:{type:"string"},type:"array"},selected:{type:"string"},tab:{default:"wysiwyg",enum:["wysiwyg","template","script","style"],type:"string"}},Me="object",Ue={$id:Be,additionalProperties:Fe,properties:We,type:Me},He="urn:jsonschema:credentials",M=!0,Ke={properties:{accessKeyId:{default:null,nullable:M,type:"string"},Bucket:{default:"",type:"string"},endpoint:{default:"",type:"string"},region:{default:"",type:"string"},secretAccessKey:{default:null,nullable:M,type:"string"}},type:"object"},Ne="object",Ve={$id:He,additionalProperties:Ke,type:Ne},qe="urn:jsonschema:data",ze={$ref:"urn:jsonschema:page"},Ge="array",Je={$id:qe,items:ze,type:Ge},Qe="urn:jsonschema:importmap",Xe=!1,Ye={imports:{additionalProperties:{type:"string"},default:{},type:"object"}},Ze="object",et={$id:Qe,additionalProperties:Xe,properties:Ye,type:Ze},tt="urn:jsonschema:page",ot=!1,f=!0,nt="uuid",st={id:nt},rt={default:[],items:{$ref:"#"},type:"array"},it={along:{default:!0,type:"boolean"},alt:{default:[],items:{type:"string"},type:"array"},changefreq:{default:null,enum:["always","hourly","daily","weekly","monthly","yearly","never",null],nullable:f,type:"string"},class:{default:[],description:"Классы",items:{type:"string"},type:"array"},description:{default:null,nullable:f,type:"string"},enabled:{default:!0,type:"boolean"},header:{default:null,nullable:f,type:"string"},icon:{default:null,nullable:f,type:"string"},id:{type:"string"},image:{default:[],items:{type:"string"},type:"array"},images:{default:[],items:{properties:{alt:{type:"string"},url:{type:"string"}},type:"object"},type:"array"},keywords:{default:[],items:{type:"string"},type:"array"},lastmod:{default:null,nullable:f,type:"string"},loc:{default:null,nullable:f,type:"string"},name:{default:null,nullable:f,type:"string"},priority:{default:null,maximum:1,minimum:0,nullable:f,type:"number"},scoped:{default:!0,type:"boolean"},setup:{default:!0,type:"boolean"},type:{default:null,enum:["article","book","profile","website","music.song","music.album","music.playlist","music.radio_station","video.movie","video.episode","video.tv_show","video.other",null],nullable:f,type:"string"}},at="object",ct={$id:tt,additionalProperties:ot,dynamicDefaults:st,properties:{children:rt,...it},type:at};V.DEFAULTS.uuid=()=>()=>pe();const lt={esm:Se},pt=[Ue,Ve,ct,Je,Te,et],ut=[V()],b=new le({code:lt,coerceTypes:Pe,keywords:ut,removeAdditional:xe,schemas:pt,useDefaults:je});b.getSchema("urn:jsonschema:page");b.getSchema("urn:jsonschema:config");const dt=b.getSchema("urn:jsonschema:component");b.getSchema("urn:jsonschema:credentials");const mt=b.getSchema("urn:jsonschema:data");b.getSchema("urn:jsonschema:importmap");const x=ue([]);{const e={get(){return x[0]}},t={get(){return this.siblings.findIndex(({id:a})=>this.id===a)}},i={get(){return this.siblings[this.index-1]}},n={get(){return this.siblings[this.index+1]}},o={get(){return this.children?.filter(({enabled:a})=>a)}},s={get(){return this.siblings.filter(({enabled:a})=>a)}},r={get(){return this.$siblings.findIndex(({id:a})=>this.id===a)}},c={get(){return this.$siblings[this.$index-1]}},l={get(){return this.$siblings[this.$index+1]}},m={get(){const a=[this];for(;a[0].parent;)a.unshift(a[0].parent);return a}},p={get(){return this.branch.slice(1).map(({name:a})=>a??"-").join("/").replaceAll(" ","_")}},g={get(){return(this.loc?.replaceAll(" ","_")??this.path).replace(/^\/?/,"/").replace(/\/?$/,"/")}},v={get(){return this.icon&&`i-${this.icon}`}},$={get(){return this.header??this.name}},j=(a,u={value:void 0})=>{a.value.forEach(d=>{Object.defineProperties(d,{$children:o,$index:r,$next:l,$prev:c,$siblings:s,branch:m,i:v,index:t,next:n,parent:u,path:p,prev:i,root:e,siblings:a,title:$,to:g}),j({configurable:W,value:d.children??[]},{configurable:W,value:d})})};R(x,a=>{mt(a),j({value:a})})}const G=e=>e.flatMap(t=>[t,...G(t.children??[])]),y=P(()=>G(x)),ft=e=>Object.fromEntries(e.map(t=>[t.toLowerCase().replaceAll(" ","_"),t])),gt="https://unpkg.com/",yt=[se(),re(),ie({cdn:gt})],J={presets:yt},ht=de({__name:"App",setup(e,{expose:t}){t();const i=F(),n=P(()=>y.value.find(({id:u})=>u===i.name)),o=P(()=>n.value?.to===void 0?void 0:`${window.location.origin}${n.value.to==="/"?"":n.value.to}`),s=()=>n.value?.images.map(({alt:u,url:d})=>({alt:u,url:d?`${window.location.origin}${d}`:""})),r=E(),c=[[r,"icon","icon"],[o,"canonical"]].map(([u,d,S])=>({href:u,key:S,rel:d}));T({link:c});const l=()=>n.value?.title??"",m=()=>n.value?.title??"",p=()=>n.value?.description??"",g=()=>n.value?.description??"",v=()=>n.value?.type,$=o,j=()=>n.value?.keywords.join();B({description:p,keywords:j,ogDescription:g,ogImage:s,ogTitle:m,ogType:v,ogUrl:$,title:l}),R(n,async u=>{let d="/favicon.ico";if(u?.icon){const S=D(u?.icon)?k(u?.icon):await L(u?.icon);if(S){const{body:Z,height:ee,left:te,top:oe,width:ne}=S;d=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${te.toString()} ${oe.toString()} ${ne.toString()} ${ee.toString()}">${Z}</svg>`}}r.value=d});const a={route:i,a:n,canonical:o,ogImage:s,favicon:r,link:c,title:l,ogTitle:m,description:p,ogDescription:g,ogType:v,ogUrl:$,keywords:j,get getIcon(){return k},get iconExists(){return D},get loadIcon(){return L},get useHead(){return T},get useSeoMeta(){return B},get pages(){return y},computed:P,ref:E,watch:R,get useRoute(){return F}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function vt(e,t,i,n,o,s){const r=me("router-view");return I(),O(r,null,{default:fe(({Component:c})=>[(I(),O(ge(c),{id:n.pages[0].id},null,8,["id"]))]),_:1})}const $t=(e,t)=>{const i=e.__vccOpts||e;for(const[n,o]of t)i[n]=o;return i},wt=$t(ht,[["render",vt],["__file","App.vue"]]),{computed:_,defineAsyncComponent:bt,markRaw:_t,ref:Q}=q,jt={vue:q},Pt=(e,t)=>{const{refPath:i}=e,{getPathname:n,pathResolve:o}=t,s=o(e,t),r=s.toString(),c=n(r).split(".").pop()??"",l=c&&`.${c}`;return{getContent:async()=>{if(i&&!(r.startsWith("./")||r.startsWith("../")||r.startsWith("/")&&!r.startsWith("//")))return l===".css"?{type:l}:{getContentData:()=>import(r)};const p=await t.getFile(s);return typeof p=="string"||p instanceof ArrayBuffer?{getContentData:()=>Promise.resolve(p),type:l}:p},id:r,path:s}},xt=async(e,t,i,n)=>{switch(e){case".css":return n.addStyle(await(await fetch(i)).text(),void 0),null;case void 0:return t(!1);default:return}},St=(e,...t)=>{window.console[e](...t.map(i=>decodeURIComponent(i)))},At=(e,t)=>{be(e,{id:t})},po=({path:e,scoped:t,setup:i,sfc:n})=>{const o=async()=>{const{script:s,style:r,template:c}=await n,l=s&&`<script${i?" setup":""}>${s}<\/script>`,m=c&&`<template>${c}</template>`,p=r&&`<style${t?" scoped":""}>${r}</style>`;return`${l}${m}${p}`};return bt(async()=>_e(`${y.value[0].name??""}${e&&"/"}${e}.vue`,{addStyle:At,getFile:o,getResource:Pt,handleModule:xt,log:St,moduleCache:jt}))},Rt={async get(){if(!this.buffer){const e=await fetch(`/pages/${this.id??""}.json`,{cache:Ae}),t=_t(e.ok?await e.json():{});dt(t),Reflect.defineProperty(this,"buffer",{value:t})}return this.buffer}},Ct=$e("/"),Et=[],U=Q(!0);let C;const It=(e,t,i)=>C&&C(e,t,i),h=we({history:Ct,routes:Et,scrollBehavior:It});h.beforeEach(({path:e})=>e!==decodeURI(e)?decodeURI(e):void 0);const H=_(()=>y.value.find(({id:e})=>e===h.currentRoute.value.name)),X=e=>{e.forEach(t=>{Object.defineProperties(t,{sfc:Rt}),t.children&&X(t.children)})},w=_(()=>h.currentRoute.value.path==="/"?H.value?.children?.[0]:H.value),Ot=_(()=>w.value?.siblings??[]),Dt=_(()=>Ot.value.filter(({enabled:e})=>e)),kt=()=>{let e,t;return{promise:new Promise((n,o)=>{e=n,t=o}),reject:t,resolve:e}},Lt=_(()=>!w.value||w.value.parent?.along),Y=_(()=>Object.fromEntries([...Lt.value?Dt.value:[w.value],y.value[0]].map(({id:e})=>[e,kt()]))),K=Q(!0),Tt=({extractAll:e,toggleObserver:t})=>{const i=async()=>{K.value=!0,t(!1),await Promise.all(Object.values(Y.value).map(({promise:n})=>n)),await e(),t(!0),K.value=!1};C=async({name:n})=>new Promise(o=>{n?i().then(()=>{const s=`#${String(n)}`;o(U.value&&{behavior:Re,...w.value?.parent?.along&&w.value.index?{el:s}:{left:Ee,top:Ce}}),U.value=!0},()=>{o(!1)}):o(!1)})},uo=({id:e}={})=>{Y.value[e]?.resolve(void 0)};window.console.info("⛵","vueS3","ver:3.27.5","https://vues3.com");window.app=ye(wt);window.app.use(ve());const Bt=P(()=>h.currentRoute.value.name);window.app.provide("id",z(Bt));const Ft=(async()=>{const e=await fetch("/index.json");x.push(e.ok?(await e.json())[0]:{}),X(x),await he(),window.app.provide("pages",z(Object.fromEntries(y.value.map(o=>[o.id,o]))));{const o=(r,c,l)=>[{component:r,name:c,path:l}],s=()=>A(()=>import("./SingleView-DKOq8w-w.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));y.value.forEach(({along:r,id:c,loc:l,parent:m,path:p})=>{const g=(l?.replaceAll(" ","_")??"").replace(/^\/?/,"/").replace(/\/?$/,"/"),v=o(m?.along??r?()=>A(()=>import("./MultiView-BA-21GT9.js"),__vite__mapDeps([21,19,17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20])):s,c,""),$=p.replace(/^\/?/,"/").replace(/\/?$/,"/");h.addRoute({path:$,...l&&{alias:g},children:v,component:s})})}const t="/:pathMatch(.*)*",i=()=>A(()=>import("./NotFoundView-CxrzZa9r.js"),__vite__mapDeps([22,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20]));h.addRoute({component:i,name:"404",path:t})})(),Wt=async e=>{const{toggleObserver:t}=e;return Tt(e),await Ft,window.app.use(h),window.app.mount("#app"),t(!0),!1},N=await fetch("/fonts.json"),Mt=ft(N.ok?await N.json():[]);J.presets.push(ae({customFetch:Ie,fonts:Mt}));const Ut=()=>document.getElementById("app");ce({defaults:J,ready:Wt,rootElement:Ut});export{Dt as $,$t as _,lo as a,Re as b,co as d,po as g,K as p,uo as r,U as s,w as t};
