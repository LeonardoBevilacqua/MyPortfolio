import{P as I,S as q,i as D,s as H,H as O,k as y,q as T,a as w,l as v,m as b,r as J,h,c as K,n as N,b as P,D as p,u as Q,I as R,J as V,K as j,Q as S,R as x,f as z,T as $,t as A}from"./index-fbfffa86.js";function B(n){const t=n-1;return t*t*t+1}function C(n,{delay:t=0,duration:a=400,easing:l=I}={}){const o=+getComputedStyle(n).opacity;return{delay:t,duration:a,easing:l,css:i=>`opacity: ${i*o}`}}function E(n,{delay:t=0,duration:a=400,easing:l=B,x:o=0,y:i=0,opacity:c=0}={}){const r=getComputedStyle(n),u=+r.opacity,_=r.transform==="none"?"":r.transform,f=u*(1-c);return{delay:t,duration:a,easing:l,css:(m,s)=>`
			transform: ${_} translate(${(1-m)*o}px, ${(1-m)*i}px);
			opacity: ${u-f*s}`}}function F(n){let t,a,l,o,i,c,r,u,_,f;const m=n[2].default,s=O(m,n,n[1],null);return{c(){t=y("section"),a=y("h2"),l=T(n[0]),c=w(),r=y("div"),s&&s.c(),this.h()},l(e){t=v(e,"SECTION",{});var d=b(t);a=v(d,"H2",{class:!0});var g=b(a);l=J(g,n[0]),g.forEach(h),c=K(d),r=v(d,"DIV",{});var k=b(r);s&&s.l(k),k.forEach(h),d.forEach(h),this.h()},h(){N(a,"class","text-light-10 dark:text-dark-10 uppercase font-semibold text-xl md:text-2xl tracking-wide border-b-2 border-light-10 dark:border-dark-10")},m(e,d){P(e,t,d),p(t,a),p(a,l),p(t,c),p(t,r),s&&s.m(r,null),f=!0},p(e,[d]){(!f||d&1)&&Q(l,e[0]),s&&s.p&&(!f||d&2)&&R(s,m,e,e[1],f?j(m,e[1],d,null):V(e[1]),null)},i(e){f||(S(()=>{i&&i.end(1),o=x(a,E,{x:200,delay:150}),o.start()}),z(s,e),S(()=>{_&&_.end(1),u=x(r,E,{x:200,delay:150}),u.start()}),f=!0)},o(e){o&&o.invalidate(),i=$(a,C,{duration:150}),A(s,e),u&&u.invalidate(),_=$(r,C,{duration:150}),f=!1},d(e){e&&h(t),e&&i&&i.end(),s&&s.d(e),e&&_&&_.end()}}}function G(n,t,a){let{$$slots:l={},$$scope:o}=t,{title:i}=t;return n.$$set=c=>{"title"in c&&a(0,i=c.title),"$$scope"in c&&a(1,o=c.$$scope)},[i,o,l]}class M extends q{constructor(t){super(),D(this,t,G,F,H,{title:0})}}export{M as S};