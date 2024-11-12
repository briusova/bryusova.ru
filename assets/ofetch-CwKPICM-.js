import{d as E}from"./destr-CVtkxrq9.js";import{w as S,a as q}from"./ufo-CsG24Xhf.js";class R extends Error{constructor(r,s){super(r,s),this.name="FetchError",s!=null&&s.cause&&!this.cause&&(this.cause=s.cause)}}function A(o){var i,a,e,p,d;const r=((i=o.error)==null?void 0:i.message)||((a=o.error)==null?void 0:a.toString())||"",s=((e=o.request)==null?void 0:e.method)||((p=o.options)==null?void 0:p.method)||"GET",y=((d=o.request)==null?void 0:d.url)||String(o.request)||"/",h=`[${s}] ${JSON.stringify(y)}`,n=o.response?`${o.response.status} ${o.response.statusText}`:"<no response>",u=`${h}: ${n}${r?` ${r}`:""}`,t=new R(u,o.error?{cause:o.error}:void 0);for(const c of["request","options","response"])Object.defineProperty(t,c,{get(){return o[c]}});for(const[c,f]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(t,c,{get(){return o.response&&o.response[f]}});return t}const $=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function w(o="GET"){return $.has(o.toUpperCase())}function j(o){if(o===void 0)return!1;const r=typeof o;return r==="string"||r==="number"||r==="boolean"||r===null?!0:r!=="object"?!1:Array.isArray(o)?!0:o.buffer?!1:o.constructor&&o.constructor.name==="Object"||typeof o.toJSON=="function"}const C=new Set(["image/svg","application/xml","application/xhtml","application/html"]),P=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function O(o=""){if(!o)return"json";const r=o.split(";").shift()||"";return P.test(r)?"json":C.has(r)||r.startsWith("text/")?"text":"blob"}function k(o,r,s,y){const h=D((r==null?void 0:r.headers)??(o==null?void 0:o.headers),s==null?void 0:s.headers,y);let n;return(s!=null&&s.query||s!=null&&s.params||r!=null&&r.params||r!=null&&r.query)&&(n={...s==null?void 0:s.params,...s==null?void 0:s.query,...r==null?void 0:r.params,...r==null?void 0:r.query}),{...s,...r,query:n,params:n,headers:h}}function D(o,r,s){if(!r)return new s(o);const y=new s(r);if(o)for(const[h,n]of Symbol.iterator in o||Array.isArray(o)?o:new s(o))y.set(h,n);return y}async function b(o,r){if(r)if(Array.isArray(r))for(const s of r)await s(o);else await r(o)}const F=new Set([408,409,425,429,500,502,503,504]),H=new Set([101,204,205,304]);function T(o={}){const{fetch:r=globalThis.fetch,Headers:s=globalThis.Headers,AbortController:y=globalThis.AbortController}=o;async function h(t){const i=t.error&&t.error.name==="AbortError"&&!t.options.timeout||!1;if(t.options.retry!==!1&&!i){let e;typeof t.options.retry=="number"?e=t.options.retry:e=w(t.options.method)?0:1;const p=t.response&&t.response.status||500;if(e>0&&(Array.isArray(t.options.retryStatusCodes)?t.options.retryStatusCodes.includes(p):F.has(p))){const d=typeof t.options.retryDelay=="function"?t.options.retryDelay(t):t.options.retryDelay||0;return d>0&&await new Promise(c=>setTimeout(c,d)),n(t.request,{...t.options,retry:e-1})}}const a=A(t);throw Error.captureStackTrace&&Error.captureStackTrace(a,n),a}const n=async function(i,a={}){var c;const e={request:i,options:k(i,a,o.defaults,s),response:void 0,error:void 0};e.options.method=(c=e.options.method)==null?void 0:c.toUpperCase(),e.options.onRequest&&await b(e,e.options.onRequest),typeof e.request=="string"&&(e.options.baseURL&&(e.request=S(e.request,e.options.baseURL)),e.options.query&&(e.request=q(e.request,e.options.query))),e.options.body&&w(e.options.method)&&(j(e.options.body)?(e.options.body=typeof e.options.body=="string"?e.options.body:JSON.stringify(e.options.body),e.options.headers=new s(e.options.headers||{}),e.options.headers.has("content-type")||e.options.headers.set("content-type","application/json"),e.options.headers.has("accept")||e.options.headers.set("accept","application/json")):("pipeTo"in e.options.body&&typeof e.options.body.pipeTo=="function"||typeof e.options.body.pipe=="function")&&("duplex"in e.options||(e.options.duplex="half")));let p;if(!e.options.signal&&e.options.timeout){const f=new y;p=setTimeout(()=>{const l=new Error("[TimeoutError]: The operation was aborted due to timeout");l.name="TimeoutError",l.code=23,f.abort(l)},e.options.timeout),e.options.signal=f.signal}try{e.response=await r(e.request,e.options)}catch(f){return e.error=f,e.options.onRequestError&&await b(e,e.options.onRequestError),await h(e)}finally{p&&clearTimeout(p)}if(e.response.body&&!H.has(e.response.status)&&e.options.method!=="HEAD"){const f=(e.options.parseResponse?"json":e.options.responseType)||O(e.response.headers.get("content-type")||"");switch(f){case"json":{const l=await e.response.text(),g=e.options.parseResponse||E;e.response._data=g(l);break}case"stream":{e.response._data=e.response.body;break}default:e.response._data=await e.response[f]()}}return e.options.onResponse&&await b(e,e.options.onResponse),!e.options.ignoreResponseError&&e.response.status>=400&&e.response.status<600?(e.options.onResponseError&&await b(e,e.options.onResponseError),await h(e)):e.response},u=async function(i,a){return(await n(i,a))._data};return u.raw=n,u.native=(...t)=>r(...t),u.create=(t={},i={})=>T({...o,...i,defaults:{...o.defaults,...i.defaults,...t}}),u}const m=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),J=m.fetch?(...o)=>m.fetch(...o):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),N=m.Headers,U=m.AbortController,_=T({fetch:J,Headers:N,AbortController:U}),L=_;export{L as $fetch,U as AbortController,R as FetchError,N as Headers,T as createFetch,A as createFetchError,J as fetch,_ as ofetch};
