import{g}from"./ajv-CP5YtGLq.js";var s={exports:{}};(function(p,u){Object.defineProperty(u,"__esModule",{value:!0});const i={},a={timestamp:()=>()=>Date.now(),datetime:()=>()=>new Date().toISOString(),date:()=>()=>new Date().toISOString().slice(0,10),time:()=>()=>new Date().toISOString().slice(11),random:()=>()=>Math.random(),randomint:e=>{var t;const n=(t=e?.max)!==null&&t!==void 0?t:2;return()=>Math.floor(Math.random()*n)},seq:e=>{var t;const n=(t=e?.name)!==null&&t!==void 0?t:"";return i[n]||(i[n]=0),()=>i[n]++}},c=Object.assign(d,{DEFAULTS:a});function d(){return{keyword:"dynamicDefaults",type:"object",schemaType:["string","object"],modifying:!0,valid:!0,compile(e,t,n){if(!n.opts.useDefaults||n.compositeRule)return()=>!0;const l={};for(const o in e)l[o]=m(e[o]);const v=n.opts.useDefaults==="empty";return o=>{for(const r in e)(o[r]===void 0||v&&(o[r]===null||o[r]===""))&&(o[r]=l[r]());return!0}},metaSchema:{type:"object",additionalProperties:{anyOf:[{type:"string"},{type:"object",additionalProperties:!1,required:["func","args"],properties:{func:{type:"string"},args:{type:"object"}}}]}}}}function m(e){return typeof e=="object"?y(e):D(e)}function y({func:e,args:t}){const n=a[e];return f(e,n),n(t)}function D(e=""){const t=a[e];return f(e,t),t()}function f(e,t){if(!t)throw new Error(`invalid "dynamicDefaults" keyword property value: ${e}`)}u.default=c,p.exports=c})(s,s.exports);var j=s.exports;const b=g(j);export{b as d};
