import{s as he,f as I,g as P,h as q,d as $,j as S,i as w,a as U,l as x,c as F,m as ee,K as R,p as te,M as ue,o as Ue,e as ke,I as Fe,n as Re}from"../chunks/scheduler.7a274a43.js";import{S as _e,i as ge,b as L,d as V,m as y,a as h,t as _,e as M,g as le,c as re}from"../chunks/index.28409b7f.js";import{U as Me,e as K}from"../chunks/UIcon.9faa29d6.js";import{C as de}from"../chunks/Chip.f42bfba3.js";import{i as Te,c as Ye,d as we,g as me,M as ze,P as Ae}from"../chunks/params.b19b3384.js";import{C as Ke}from"../chunks/Card.de059275.js";import{C as Ne,a as Je}from"../chunks/ChipIcon.3d1c95e9.js";import{C as Ce}from"../chunks/CardDivider.09b854d8.js";import{C as Oe}from"../chunks/CardLogo.ffd18bf4.js";import{b as $e}from"../chunks/paths.53e8d6b3.js";import{S as Ge}from"../chunks/SearchPage.895a79d4.js";function He(o){let t,r,e;return r=new Me({props:{icon:"i-carbon-link",classes:"text-[var(--secondary-text)]"}}),{c(){t=I("a"),L(r.$$.fragment),this.h()},l(l){t=P(l,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0,"data-help":!0});var s=q(t);V(r.$$.fragment,s),s.forEach($),this.h()},h(){S(t,"class","card-link row-center relative m-x-2.5px border-1px border-solid border-[var(--border)] p-5px rounded-10px text-inherit svelte-18qy750"),S(t,"href",o[1]),S(t,"title",o[0]),S(t,"target","_blank"),S(t,"rel","noreferrer"),S(t,"data-help",o[0])},m(l,s){w(l,t,s),y(r,t,null),e=!0},p(l,[s]){(!e||s&2)&&S(t,"href",l[1]),(!e||s&1)&&S(t,"title",l[0]),(!e||s&1)&&S(t,"data-help",l[0])},i(l){e||(h(r.$$.fragment,l),e=!0)},o(l){_(r.$$.fragment,l),e=!1},d(l){l&&$(t),M(r)}}}function Qe(o,t,r){let{label:e}=t,{to:l}=t;return o.$$set=s=>{"label"in s&&r(0,e=s.label),"to"in s&&r(1,l=s.to)},[e,l]}class We extends _e{constructor(t){super(),ge(this,t,Qe,He,he,{label:0,to:1})}}function Se(o,t,r){const e=o.slice();return e[5]=t[r],e}function je(o,t,r){const e=o.slice();return e[8]=t[r],e}function De(o){let t,r;return t=new We({props:{label:o[8].label??"",to:o[8].to}}),{c(){L(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p(e,l){const s={};l&1&&(s.label=e[8].label??""),l&1&&(s.to=e[8].to),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function Xe(o){let t;return{c(){t=x(o[2])},l(r){t=ee(r,o[2])},m(r,e){w(r,t,e)},p(r,e){e&4&&te(t,r[2])},d(r){r&&$(t)}}}function Ee(o){let t,r;return t=new de({props:{$$slots:{default:[Ze]},$$scope:{ctx:o}}}),{c(){L(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p(e,l){const s={};l&2050&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function Ze(o){let t;return{c(){t=x(o[1])},l(r){t=ee(r,o[1])},m(r,e){w(r,t,e)},p(r,e){e&2&&te(t,r[1])},d(r){r&&$(t)}}}function Ie(o){let t,r;return t=new Je({props:{logo:me(o[5].logo),name:o[5].name,href:`${$e}/skills/${o[5].slug}`}}),{c(){L(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p(e,l){const s={};l&1&&(s.logo=me(e[5].logo)),l&1&&(s.name=e[5].name),l&1&&(s.href=`${$e}/skills/${e[5].slug}`),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function xe(o){let t,r,e,l,s,i,u,a,B,E,j,v=o[0].type+"",f,p,k,b,N,J,Z,ne=o[0].shortDescription+"",se,ae,T,Y,pe,ie,O,fe,z,G;t=new Oe({props:{alt:o[0].name,src:me(o[0].logo),size:40,radius:"0"}}),l=new Ne({props:{title:o[0].name}});let H=K(o[0].links),g=[];for(let n=0;n<H.length;n+=1)g[n]=De(je(o,H,n));const qe=n=>_(g[n],1,1,()=>{g[n]=null});a=new Ce({}),Y=new de({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}});let C=o[2]!==o[1]&&Ee(o);O=new Ce({});let Q=K(o[0].skills),d=[];for(let n=0;n<Q.length;n+=1)d[n]=Ie(Se(o,Q,n));const Be=n=>_(d[n],1,1,()=>{d[n]=null});return{c(){L(t.$$.fragment),r=U(),e=I("div"),L(l.$$.fragment),s=U(),i=I("div");for(let n=0;n<g.length;n+=1)g[n].c();u=U(),L(a.$$.fragment),B=U(),E=I("div"),j=I("p"),f=x(v),p=U(),k=I("p"),b=x(o[3]),N=U(),J=I("div"),Z=I("p"),se=x(ne),ae=U(),T=I("div"),L(Y.$$.fragment),pe=U(),C&&C.c(),ie=U(),L(O.$$.fragment),fe=U(),z=I("div");for(let n=0;n<d.length;n+=1)d[n].c();this.h()},l(n){V(t.$$.fragment,n),r=F(n),e=P(n,"DIV",{class:!0});var c=q(e);V(l.$$.fragment,c),s=F(c),i=P(c,"DIV",{class:!0});var D=q(i);for(let X=0;X<g.length;X+=1)g[X].l(D);D.forEach($),c.forEach($),u=F(n),V(a.$$.fragment,n),B=F(n),E=P(n,"DIV",{class:!0});var W=q(E);j=P(W,"P",{});var oe=q(j);f=ee(oe,v),oe.forEach($),p=F(W),k=P(W,"P",{});var m=q(k);b=ee(m,o[3]),m.forEach($),W.forEach($),N=F(n),J=P(n,"DIV",{class:!0});var A=q(J);Z=P(A,"P",{class:!0});var ve=q(Z);se=ee(ve,ne),ve.forEach($),A.forEach($),ae=F(n),T=P(n,"DIV",{class:!0});var ce=q(T);V(Y.$$.fragment,ce),pe=F(ce),C&&C.l(ce),ce.forEach($),ie=F(n),V(O.$$.fragment,n),fe=F(n),z=P(n,"DIV",{class:!0});var be=q(z);for(let X=0;X<d.length;X+=1)d[X].l(be);be.forEach($),this.h()},h(){S(i,"class","row"),S(e,"class","m-t-20px row justify-between items-center"),S(E,"class","row m-b-15px justify-between text-[var(--secondary-text)] text-0.9em font-italic font-300"),S(Z,"class","text-[0.95em] text-[var(--secondary-text)] font-300 m-t-20px m-b-40px flex-1 line-clamp-3"),S(J,"class","col sm:h-100px md:h-160px"),S(T,"class","row justify-between text-0.8em font-400"),S(z,"class","row flex-wrap")},m(n,c){y(t,n,c),w(n,r,c),w(n,e,c),y(l,e,null),R(e,s),R(e,i);for(let D=0;D<g.length;D+=1)g[D]&&g[D].m(i,null);w(n,u,c),y(a,n,c),w(n,B,c),w(n,E,c),R(E,j),R(j,f),R(E,p),R(E,k),R(k,b),w(n,N,c),w(n,J,c),R(J,Z),R(Z,se),w(n,ae,c),w(n,T,c),y(Y,T,null),R(T,pe),C&&C.m(T,null),w(n,ie,c),y(O,n,c),w(n,fe,c),w(n,z,c);for(let D=0;D<d.length;D+=1)d[D]&&d[D].m(z,null);G=!0},p(n,c){const D={};c&1&&(D.alt=n[0].name),c&1&&(D.src=me(n[0].logo)),t.$set(D);const W={};if(c&1&&(W.title=n[0].name),l.$set(W),c&1){H=K(n[0].links);let m;for(m=0;m<H.length;m+=1){const A=je(n,H,m);g[m]?(g[m].p(A,c),h(g[m],1)):(g[m]=De(A),g[m].c(),h(g[m],1),g[m].m(i,null))}for(le(),m=H.length;m<g.length;m+=1)qe(m);re()}(!G||c&1)&&v!==(v=n[0].type+"")&&te(f,v),(!G||c&8)&&te(b,n[3]),(!G||c&1)&&ne!==(ne=n[0].shortDescription+"")&&te(se,ne);const oe={};if(c&2052&&(oe.$$scope={dirty:c,ctx:n}),Y.$set(oe),n[2]!==n[1]?C?(C.p(n,c),c&6&&h(C,1)):(C=Ee(n),C.c(),h(C,1),C.m(T,null)):C&&(le(),_(C,1,1,()=>{C=null}),re()),c&1){Q=K(n[0].skills);let m;for(m=0;m<Q.length;m+=1){const A=Se(n,Q,m);d[m]?(d[m].p(A,c),h(d[m],1)):(d[m]=Ie(A),d[m].c(),h(d[m],1),d[m].m(z,null))}for(le(),m=Q.length;m<d.length;m+=1)Be(m);re()}},i(n){if(!G){h(t.$$.fragment,n),h(l.$$.fragment,n);for(let c=0;c<H.length;c+=1)h(g[c]);h(a.$$.fragment,n),h(Y.$$.fragment,n),h(C),h(O.$$.fragment,n);for(let c=0;c<Q.length;c+=1)h(d[c]);G=!0}},o(n){_(t.$$.fragment,n),_(l.$$.fragment,n),g=g.filter(Boolean);for(let c=0;c<g.length;c+=1)_(g[c]);_(a.$$.fragment,n),_(Y.$$.fragment,n),_(C),_(O.$$.fragment,n),d=d.filter(Boolean);for(let c=0;c<d.length;c+=1)_(d[c]);G=!1},d(n){n&&($(r),$(e),$(u),$(B),$(E),$(N),$(J),$(ae),$(T),$(ie),$(fe),$(z)),M(t,n),M(l),ue(g,n),M(a,n),M(Y),C&&C.d(),M(O,n),ue(d,n)}}}function et(o){let t,r;return t=new Ke({props:{color:o[0].color,href:`${$e}/projects/${o[0].slug}`,$$slots:{default:[xe]},$$scope:{ctx:o}}}),{c(){L(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p(e,[l]){const s={};l&1&&(s.color=e[0].color),l&1&&(s.href=`${$e}/projects/${e[0].slug}`),l&2063&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function tt(o,t,r){let e,l,s,{project:i}=t;return o.$$set=u=>{"project"in u&&r(0,i=u.project)},o.$$.update=()=>{o.$$.dirty&1&&Te(i.period.from,i.period.to),o.$$.dirty&1&&r(3,e=`${Ye(i.period.from,i.period.to??new Date(Date.now()+1e3*60*60*24))}`),o.$$.dirty&1&&r(2,l=`${we(i.period.from.getMonth())} ${i.period.from.getFullYear()}`),o.$$.dirty&1&&r(1,s=i.period.to?`${we(i.period.to.getMonth())} ${i.period.to.getFullYear()}`:"now")},[i,s,l,e]}class lt extends _e{constructor(t){super(),ge(this,t,tt,et,he,{project:0})}}function Pe(o,t,r){const e=o.slice();return e[9]=t[r],e}function Le(o,t,r){const e=o.slice();return e[12]=t[r],e}function rt(o){let t=o[12].name+"",r;return{c(){r=x(t)},l(e){r=ee(e,t)},m(e,l){w(e,r,l)},p(e,l){l&1&&t!==(t=e[12].name+"")&&te(r,t)},d(e){e&&$(r)}}}function Ve(o){let t,r;function e(){return o[6](o[12])}return t=new de({props:{active:o[12].isSelected,classes:"text-0.8em",$$slots:{default:[rt]},$$scope:{ctx:o}}}),t.$on("click",e),{c(){L(t.$$.fragment)},l(l){V(t.$$.fragment,l)},m(l,s){y(t,l,s),r=!0},p(l,s){o=l;const i={};s&1&&(i.active=o[12].isSelected),s&32769&&(i.$$scope={dirty:s,ctx:o}),t.$set(i)},i(l){r||(h(t.$$.fragment,l),r=!0)},o(l){_(t.$$.fragment,l),r=!1},d(l){M(t,l)}}}function nt(o){let t,r,e=K(o[1]),l=[];for(let i=0;i<e.length;i+=1)l[i]=ye(Pe(o,e,i));const s=i=>_(l[i],1,1,()=>{l[i]=null});return{c(){t=I("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){t=P(i,"DIV",{class:!0});var u=q(t);for(let a=0;a<l.length;a+=1)l[a].l(u);u.forEach($),this.h()},h(){S(t,"class","projects-list mt-5 svelte-f4z73x")},m(i,u){w(i,t,u);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(t,null);r=!0},p(i,u){if(u&2){e=K(i[1]);let a;for(a=0;a<e.length;a+=1){const B=Pe(i,e,a);l[a]?(l[a].p(B,u),h(l[a],1)):(l[a]=ye(B),l[a].c(),h(l[a],1),l[a].m(t,null))}for(le(),a=e.length;a<l.length;a+=1)s(a);re()}},i(i){if(!r){for(let u=0;u<e.length;u+=1)h(l[u]);r=!0}},o(i){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)_(l[u]);r=!1},d(i){i&&$(t),ue(l,i)}}}function ot(o){let t,r,e,l,s="Could not find anything...",i;return r=new Me({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){t=I("div"),L(r.$$.fragment),e=U(),l=I("p"),l.textContent=s,this.h()},l(u){t=P(u,"DIV",{class:!0});var a=q(t);V(r.$$.fragment,a),e=F(a),l=P(a,"P",{class:!0,["data-svelte-h"]:!0}),Fe(l)!=="svelte-1jyyf6v"&&(l.textContent=s),a.forEach($),this.h()},h(){S(l,"class","font-300"),S(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m(u,a){w(u,t,a),y(r,t,null),R(t,e),R(t,l),i=!0},p:Re,i(u){i||(h(r.$$.fragment,u),i=!0)},o(u){_(r.$$.fragment,u),i=!1},d(u){u&&$(t),M(r)}}}function ye(o){let t,r;return t=new lt({props:{project:o[9]}}),{c(){L(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p(e,l){const s={};l&2&&(s.project=e[9]),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function st(o){let t,r,e,l,s,i,u=K(o[0]),a=[];for(let f=0;f<u.length;f+=1)a[f]=Ve(Le(o,u,f));const B=f=>_(a[f],1,1,()=>{a[f]=null}),E=[ot,nt],j=[];function v(f,p){return f[1].length===0?0:1}return e=v(o),l=j[e]=E[e](o),{c(){t=I("div");for(let f=0;f<a.length;f+=1)a[f].c();r=U(),l.c(),s=ke(),this.h()},l(f){t=P(f,"DIV",{class:!0});var p=q(t);for(let k=0;k<a.length;k+=1)a[k].l(p);p.forEach($),r=F(f),l.l(f),s=ke(),this.h()},h(){S(t,"class","projects-filters")},m(f,p){w(f,t,p);for(let k=0;k<a.length;k+=1)a[k]&&a[k].m(t,null);w(f,r,p),j[e].m(f,p),w(f,s,p),i=!0},p(f,p){if(p&9){u=K(f[0]);let b;for(b=0;b<u.length;b+=1){const N=Le(f,u,b);a[b]?(a[b].p(N,p),h(a[b],1)):(a[b]=Ve(N),a[b].c(),h(a[b],1),a[b].m(t,null))}for(le(),b=u.length;b<a.length;b+=1)B(b);re()}let k=e;e=v(f),e===k?j[e].p(f,p):(le(),_(j[k],1,1,()=>{j[k]=null}),re(),l=j[e],l?l.p(f,p):(l=j[e]=E[e](f),l.c()),h(l,1),l.m(s.parentNode,s))},i(f){if(!i){for(let p=0;p<u.length;p+=1)h(a[p]);h(l),i=!0}},o(f){a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)_(a[p]);_(l),i=!1},d(f){f&&($(t),$(r),$(s)),ue(a,f),j[e].d(f)}}}function at(o){let t,r;return t=new Ge({props:{title:o[2],$$slots:{default:[st]},$$scope:{ctx:o}}}),t.$on("search",o[4]),{c(){L(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,l){y(t,e,l),r=!0},p(e,[l]){const s={};l&32771&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){r||(h(t.$$.fragment,e),r=!0)},o(e){_(t.$$.fragment,e),r=!1},d(e){M(t,e)}}}function it(o,t,r){const{items:e,title:l}=Ae;let s=ze.filter(v=>e.some(f=>f.skills.some(p=>p.slug===v.slug))),i="",u=[];const a=v=>s.some(f=>f.slug===v&&f.isSelected),B=v=>{r(0,s=s.map(f=>(f.slug===v&&(f.isSelected=!a(v)),f)))},E=v=>{r(5,i=v.detail.search)};Ue(()=>{if(location.search){const p=new URLSearchParams(location.search).get("item");p&&r(5,i=p)}});const j=v=>B(v.slug);return o.$$.update=()=>{o.$$.dirty&33&&r(1,u=e.filter(v=>{const f=s.every(k=>!k.isSelected)||v.skills.some(k=>s.some(b=>b.isSelected&&b.slug===k.slug)),p=i.trim().length===0||v.name.trim().toLowerCase().includes(i.trim().toLowerCase());return f&&p}))},[s,u,l,B,E,i,j]}class bt extends _e{constructor(t){super(),ge(this,t,it,at,he,{})}}export{bt as component};
