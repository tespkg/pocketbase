import{S as v,i as y,s as g,F as w,c as x,m as C,t as $,a as H,d as L,G as P,H as T,E as M,g as r,o as a,e as f,b as _,f as d,r as b,x as p}from"./index-B1z76Nrm.js";function S(c){let t,s,e,n,l;return{c(){t=f("div"),t.innerHTML='<div class="icon"><i class="ri-error-warning-line"></i></div> <div class="content txt-bold"><p>Invalid or expired verification token.</p></div>',s=_(),e=f("button"),e.textContent="Close",d(t,"class","alert alert-danger"),d(e,"type","button"),d(e,"class","btn btn-transparent btn-block")},m(i,o){r(i,t,o),r(i,s,o),r(i,e,o),n||(l=b(e,"click",c[4]),n=!0)},p,d(i){i&&(a(t),a(s),a(e)),n=!1,l()}}}function h(c){let t,s,e,n,l;return{c(){t=f("div"),t.innerHTML='<div class="icon"><i class="ri-checkbox-circle-line"></i></div> <div class="content txt-bold"><p>Successfully verified email address.</p></div>',s=_(),e=f("button"),e.textContent="Close",d(t,"class","alert alert-success"),d(e,"type","button"),d(e,"class","btn btn-transparent btn-block")},m(i,o){r(i,t,o),r(i,s,o),r(i,e,o),n||(l=b(e,"click",c[3]),n=!0)},p,d(i){i&&(a(t),a(s),a(e)),n=!1,l()}}}function F(c){let t;return{c(){t=f("div"),t.innerHTML='<div class="loader loader-lg"><em>Please wait...</em></div>',d(t,"class","txt-center")},m(s,e){r(s,t,e)},p,d(s){s&&a(t)}}}function I(c){let t;function s(l,i){return l[1]?F:l[0]?h:S}let e=s(c),n=e(c);return{c(){n.c(),t=M()},m(l,i){n.m(l,i),r(l,t,i)},p(l,i){e===(e=s(l))&&n?n.p(l,i):(n.d(1),n=e(l),n&&(n.c(),n.m(t.parentNode,t)))},d(l){l&&a(t),n.d(l)}}}function V(c){let t,s;return t=new w({props:{nobranding:!0,$$slots:{default:[I]},$$scope:{ctx:c}}}),{c(){x(t.$$.fragment)},m(e,n){C(t,e,n),s=!0},p(e,[n]){const l={};n&67&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){H(t.$$.fragment,e),s=!1},d(e){L(t,e)}}}function q(c,t,s){let{params:e}=t,n=!1,l=!1;i();async function i(){s(1,l=!0);const u=new P("../");try{const m=T(e==null?void 0:e.token);await u.collection(m.collectionId).confirmVerification(e==null?void 0:e.token),s(0,n=!0)}catch{s(0,n=!1)}s(1,l=!1)}const o=()=>window.close(),k=()=>window.close();return c.$$set=u=>{"params"in u&&s(2,e=u.params)},[n,l,e,o,k]}class G extends v{constructor(t){super(),y(this,t,q,V,g,{params:2})}}export{G as default};
