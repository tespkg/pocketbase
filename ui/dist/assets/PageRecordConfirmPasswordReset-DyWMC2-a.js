import{S as J,i as M,s as W,F as Y,c as H,m as N,t as P,a as y,d as T,C as j,E as z,g as _,k as B,n as D,o as m,G as K,H as O,A as Q,p as E,e as b,v as q,b as C,f as p,q as G,h as w,r as S,u as U,x as F,w as V,y as R}from"./index-B1z76Nrm.js";function X(a){let e,l,s,n,t,o,c,r,i,u,v,g,k,h,d=a[4]&&I(a);return o=new E({props:{class:"form-field required",name:"password",$$slots:{default:[x,({uniqueId:f})=>({10:f}),({uniqueId:f})=>f?1024:0]},$$scope:{ctx:a}}}),r=new E({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[ee,({uniqueId:f})=>({10:f}),({uniqueId:f})=>f?1024:0]},$$scope:{ctx:a}}}),{c(){e=b("form"),l=b("div"),s=b("h5"),n=q(`Reset your user password
                    `),d&&d.c(),t=C(),H(o.$$.fragment),c=C(),H(r.$$.fragment),i=C(),u=b("button"),v=b("span"),v.textContent="Set new password",p(l,"class","content txt-center m-b-base"),p(v,"class","txt"),p(u,"type","submit"),p(u,"class","btn btn-lg btn-block"),u.disabled=a[2],G(u,"btn-loading",a[2])},m(f,$){_(f,e,$),w(e,l),w(l,s),w(s,n),d&&d.m(s,null),w(e,t),N(o,e,null),w(e,c),N(r,e,null),w(e,i),w(e,u),w(u,v),g=!0,k||(h=S(e,"submit",U(a[5])),k=!0)},p(f,$){f[4]?d?d.p(f,$):(d=I(f),d.c(),d.m(s,null)):d&&(d.d(1),d=null);const A={};$&3073&&(A.$$scope={dirty:$,ctx:f}),o.$set(A);const L={};$&3074&&(L.$$scope={dirty:$,ctx:f}),r.$set(L),(!g||$&4)&&(u.disabled=f[2]),(!g||$&4)&&G(u,"btn-loading",f[2])},i(f){g||(P(o.$$.fragment,f),P(r.$$.fragment,f),g=!0)},o(f){y(o.$$.fragment,f),y(r.$$.fragment,f),g=!1},d(f){f&&m(e),d&&d.d(),T(o),T(r),k=!1,h()}}}function Z(a){let e,l,s,n,t;return{c(){e=b("div"),e.innerHTML='<div class="icon"><i class="ri-checkbox-circle-line"></i></div> <div class="content txt-bold"><p>Successfully changed the user password.</p> <p>You can now sign in with your new password.</p></div>',l=C(),s=b("button"),s.textContent="Close",p(e,"class","alert alert-success"),p(s,"type","button"),p(s,"class","btn btn-transparent btn-block")},m(o,c){_(o,e,c),_(o,l,c),_(o,s,c),n||(t=S(s,"click",a[7]),n=!0)},p:F,i:F,o:F,d(o){o&&(m(e),m(l),m(s)),n=!1,t()}}}function I(a){let e,l,s;return{c(){e=q("for "),l=b("strong"),s=q(a[4])},m(n,t){_(n,e,t),_(n,l,t),w(l,s)},p(n,t){t&16&&V(s,n[4])},d(n){n&&(m(e),m(l))}}}function x(a){let e,l,s,n,t,o,c,r;return{c(){e=b("label"),l=q("New password"),n=C(),t=b("input"),p(e,"for",s=a[10]),p(t,"type","password"),p(t,"id",o=a[10]),t.required=!0,t.autofocus=!0},m(i,u){_(i,e,u),w(e,l),_(i,n,u),_(i,t,u),R(t,a[0]),t.focus(),c||(r=S(t,"input",a[8]),c=!0)},p(i,u){u&1024&&s!==(s=i[10])&&p(e,"for",s),u&1024&&o!==(o=i[10])&&p(t,"id",o),u&1&&t.value!==i[0]&&R(t,i[0])},d(i){i&&(m(e),m(n),m(t)),c=!1,r()}}}function ee(a){let e,l,s,n,t,o,c,r;return{c(){e=b("label"),l=q("New password confirm"),n=C(),t=b("input"),p(e,"for",s=a[10]),p(t,"type","password"),p(t,"id",o=a[10]),t.required=!0},m(i,u){_(i,e,u),w(e,l),_(i,n,u),_(i,t,u),R(t,a[1]),c||(r=S(t,"input",a[9]),c=!0)},p(i,u){u&1024&&s!==(s=i[10])&&p(e,"for",s),u&1024&&o!==(o=i[10])&&p(t,"id",o),u&2&&t.value!==i[1]&&R(t,i[1])},d(i){i&&(m(e),m(n),m(t)),c=!1,r()}}}function te(a){let e,l,s,n;const t=[Z,X],o=[];function c(r,i){return r[3]?0:1}return e=c(a),l=o[e]=t[e](a),{c(){l.c(),s=z()},m(r,i){o[e].m(r,i),_(r,s,i),n=!0},p(r,i){let u=e;e=c(r),e===u?o[e].p(r,i):(B(),y(o[u],1,1,()=>{o[u]=null}),D(),l=o[e],l?l.p(r,i):(l=o[e]=t[e](r),l.c()),P(l,1),l.m(s.parentNode,s))},i(r){n||(P(l),n=!0)},o(r){y(l),n=!1},d(r){r&&m(s),o[e].d(r)}}}function se(a){let e,l;return e=new Y({props:{nobranding:!0,$$slots:{default:[te]},$$scope:{ctx:a}}}),{c(){H(e.$$.fragment)},m(s,n){N(e,s,n),l=!0},p(s,[n]){const t={};n&2079&&(t.$$scope={dirty:n,ctx:s}),e.$set(t)},i(s){l||(P(e.$$.fragment,s),l=!0)},o(s){y(e.$$.fragment,s),l=!1},d(s){T(e,s)}}}function le(a,e,l){let s,{params:n}=e,t="",o="",c=!1,r=!1;async function i(){if(c)return;l(2,c=!0);const k=new K("../");try{const h=O(n==null?void 0:n.token);await k.collection(h.collectionId).confirmPasswordReset(n==null?void 0:n.token,t,o),l(3,r=!0)}catch(h){Q.error(h)}l(2,c=!1)}const u=()=>window.close();function v(){t=this.value,l(0,t)}function g(){o=this.value,l(1,o)}return a.$$set=k=>{"params"in k&&l(6,n=k.params)},a.$$.update=()=>{a.$$.dirty&64&&l(4,s=j.getJWTPayload(n==null?void 0:n.token).email||"")},[t,o,c,r,s,i,n,u,v,g]}class oe extends J{constructor(e){super(),M(this,e,le,se,W,{params:6})}}export{oe as default};
