import{defineComponent as v,inject as f,computed as d,onUpdated as _,openBlock as p,createElementBlock as h,normalizeClass as g,createBlock as k,resolveDynamicComponent as y,createCommentVNode as C}from"vue";import{t as S,p as m,g as V,r as u,_ as x}from"./index-CHxj4Ivz.js";import{v as b}from"./uuid-C_lTrkZC.js";import"./unocss-DJo0ncQY.js";import"./ofetch-DfaEl5Lr.js";import"./destr-CVtkxrq9.js";import"./ufo-CsG24Xhf.js";import"./magic-string-D9CdRQHO.js";import"./jridgewell-9KHfGwW6.js";import"./vues3-C2L1g2Uv.js";import"./iconify-B_9Z2IXi.js";import"./unhead-BCgpajpV.js";import"./packrup-BqxTmGwz.js";import"./hookable-B8xFkYCm.js";import"./vue-router-Db1rCyv1.js";import"./vue-Cow_pXkh.js";import"./vueuse-BCBbjqoF.js";import"./vue3-sfc-loader-CoUr1SK8.js";const w=v({__name:"SingleView",props:{id:{}},setup(i,{expose:n}){n();const t=f("pages")??null,e=d(()=>i.id?(t==null?void 0:t[i.id])??null:S.value),a=d(()=>{const[[o,r]=[]]=m;return m.clear(),o&&r&&m.set(o,r),e.value&&V(e.value)});_(()=>{i.id&&e.value&&u(e.value)});const l={pages:t,the:e,is:a,get v4(){return b},get resolve(){return u}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),B=["id"];function j(i,n,t,e,a,l){var o,r,s,c;return(o=e.the)!=null&&o.enabled?(p(),h("div",{key:0,class:g((r=e.the)==null?void 0:r.class),id:((s=e.the)==null?void 0:s.id)??e.v4(),"un-cloak":""},[(p(),k(y(e.is),{id:(c=e.the)==null?void 0:c.id,onVnodeMounted:n[0]||(n[0]=()=>{e.the&&e.resolve(e.the)})},null,8,["id"]))],10,B)):C("",!0)}const R=x(w,[["render",j],["__file","SingleView.vue"]]);export{R as default};
