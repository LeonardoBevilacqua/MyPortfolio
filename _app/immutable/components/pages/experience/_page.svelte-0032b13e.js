import{S as L,i as N,s as Q,k as E,q as y,a as O,l as x,m as w,r as D,h as p,c as P,n as v,b as q,D as u,u as S,O as R,V as Y,E as B,w as T,x as U,y as W,f as A,t as C,z as X,H as Z,g as ee,d as te,P as le}from"../../../chunks/index-2122c327.js";import{S as se}from"../../../chunks/Section-8535bff7.js";import{E as ae}from"../../../chunks/Experience.store-25bf93af.js";function F(o,e,t){const l=o.slice();return l[1]=e[t],l[3]=t,l}function G(o,e){let t,l=e[1]+"",r;return{key:o,first:null,c(){t=E("p"),r=y(l),this.h()},l(n){t=x(n,"P",{class:!0});var i=w(t);r=D(i,l),i.forEach(p),this.h()},h(){v(t,"class","my-3 md:text-lg"),this.first=t},m(n,i){q(n,t,i),u(t,r)},p(n,i){e=n,i&1&&l!==(l=e[1]+"")&&S(r,l)},d(n){n&&p(t)}}}function re(o){let e,t,l=o[0].title+"",r,n,i,s=o[0].subtitle+"",a,f,k=o[0].start+"",g,_,h=(o[0].end?o[0].end:"Atualmente")+"",$,V,m=[],M=new Map,H=o[0].descriptions;const j=c=>c[3];for(let c=0;c<H.length;c+=1){let d=F(o,H,c),b=j(d);M.set(b,m[c]=G(b,d))}return{c(){e=E("div"),t=E("h3"),r=y(l),n=O(),i=E("h4"),a=y(s),f=y(", "),g=y(k),_=y(" - "),$=y(h),V=O();for(let c=0;c<m.length;c+=1)m[c].c();this.h()},l(c){e=x(c,"DIV",{class:!0});var d=w(e);t=x(d,"H3",{class:!0});var b=w(t);r=D(b,l),b.forEach(p),n=P(d),i=x(d,"H4",{class:!0});var I=w(i);a=D(I,s),f=D(I,", "),g=D(I,k),_=D(I," - "),$=D(I,h),I.forEach(p),V=P(d);for(let z=0;z<m.length;z+=1)m[z].l(d);d.forEach(p),this.h()},h(){v(t,"class","font-bold text-xl md:text-2xl text-light-10 dark:text-dark-10"),v(i,"class","font-semibold text-lg md:text-xl"),v(e,"class","bg-light-30 dark:bg-dark-30 text-light-default dark:text-dark-default p-3 shadow-lg")},m(c,d){q(c,e,d),u(e,t),u(t,r),u(e,n),u(e,i),u(i,a),u(i,f),u(i,g),u(i,_),u(i,$),u(e,V);for(let b=0;b<m.length;b+=1)m[b].m(e,null)},p(c,[d]){d&1&&l!==(l=c[0].title+"")&&S(r,l),d&1&&s!==(s=c[0].subtitle+"")&&S(a,s),d&1&&k!==(k=c[0].start+"")&&S(g,k),d&1&&h!==(h=(c[0].end?c[0].end:"Atualmente")+"")&&S($,h),d&1&&(H=c[0].descriptions,m=R(m,d,j,1,c,H,M,e,Y,G,null,F))},i:B,o:B,d(c){c&&p(e);for(let d=0;d<m.length;d+=1)m[d].d()}}}function ne(o,e,t){let{experience:l}=e;return o.$$set=r=>{"experience"in r&&t(0,l=r.experience)},[l]}class oe extends L{constructor(e){super(),N(this,e,ne,re,Q,{experience:0})}}function J(o,e,t){const l=o.slice();return l[2]=e[t],l[4]=t,l}function K(o,e){let t,l,r,n,i,s,a,f,k,g;return r=new oe({props:{experience:e[2]}}),{key:o,first:null,c(){t=E("div"),l=E("div"),T(r.$$.fragment),i=O(),s=E("div"),a=E("div"),k=O(),this.h()},l(_){t=x(_,"DIV",{class:!0});var h=w(t);l=x(h,"DIV",{class:!0});var $=w(l);U(r.$$.fragment,$),$.forEach(p),i=P(h),s=x(h,"DIV",{class:!0});var V=w(s);a=x(V,"DIV",{class:!0}),w(a).forEach(p),V.forEach(p),k=P(h),h.forEach(p),this.h()},h(){v(l,"class",n=e[1](e[4]+1)?"order-1":"order-3"),v(a,"class","bg-light-30 dark:bg-dark-30 h-12 w-12 rounded-full m-auto z-10 shadow-md"),v(s,"class",f="hidden xl:flex order-2 relative lines "+(e[1](e[4]+1)?"before:left-0":"col-end-3")+" "+(e[4]===0?"after:h-1/2 after:top-1/2":e[4]+1===e[0].length?"after:h-1/2":"after:h-full")+" svelte-11ttdpm"),v(t,"class","grid grid-cols-1 xl:grid-cols-3"),this.first=t},m(_,h){q(_,t,h),u(t,l),W(r,l,null),u(t,i),u(t,s),u(s,a),u(t,k),g=!0},p(_,h){e=_;const $={};h&1&&($.experience=e[2]),r.$set($),(!g||h&1&&n!==(n=e[1](e[4]+1)?"order-1":"order-3"))&&v(l,"class",n),(!g||h&1&&f!==(f="hidden xl:flex order-2 relative lines "+(e[1](e[4]+1)?"before:left-0":"col-end-3")+" "+(e[4]===0?"after:h-1/2 after:top-1/2":e[4]+1===e[0].length?"after:h-1/2":"after:h-full")+" svelte-11ttdpm"))&&v(s,"class",f)},i(_){g||(A(r.$$.fragment,_),g=!0)},o(_){C(r.$$.fragment,_),g=!1},d(_){_&&p(t),X(r)}}}function ie(o){let e,t=[],l=new Map,r,n=o[0];const i=s=>s[4];for(let s=0;s<n.length;s+=1){let a=J(o,n,s),f=i(a);l.set(f,t[s]=K(f,a))}return{c(){e=E("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=x(s,"DIV",{class:!0});var a=w(e);for(let f=0;f<t.length;f+=1)t[f].l(a);a.forEach(p),this.h()},h(){v(e,"class","pt-3 grid xl:block gap-3")},m(s,a){q(s,e,a);for(let f=0;f<t.length;f+=1)t[f].m(e,null);r=!0},p(s,a){a&3&&(n=s[0],ee(),t=R(t,a,i,1,s,n,l,e,le,K,null,J),te())},i(s){if(!r){for(let a=0;a<n.length;a+=1)A(t[a]);r=!0}},o(s){for(let a=0;a<t.length;a+=1)C(t[a]);r=!1},d(s){s&&p(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}function ce(o){let e,t;return e=new se({props:{title:"experi\xEAncias",$$slots:{default:[ie]},$$scope:{ctx:o}}}),{c(){T(e.$$.fragment)},l(l){U(e.$$.fragment,l)},m(l,r){W(e,l,r),t=!0},p(l,[r]){const n={};r&33&&(n.$$scope={dirty:r,ctx:l}),e.$set(n)},i(l){t||(A(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){X(e,l)}}}function de(o,e,t){let l;return Z(o,ae,n=>t(0,l=n)),[l,n=>!!(n%2)]}class _e extends L{constructor(e){super(),N(this,e,de,ce,Q,{})}}export{_e as default};
