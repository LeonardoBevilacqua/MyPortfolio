import{B as M,S as y,i as D,s as E,k as d,a as N,q as P,l as _,m as h,c as j,r as z,h as f,n as m,C as S,b as k,D as p,u as F,E as v,w as A,x as B,y as G,f as $,t as w,z as I,G as V,g as J,N as O,d as T,e as C,O as W}from"../../chunks/index-fbfffa86.js";import{S as H}from"../../chunks/Section-64fb1c10.js";const K=M([{title:"Spring Framework",src:"/imgs/skills/spring-framework.png"},{title:"Node JS",src:"/imgs/skills/node-js.webp"},{title:"Angular",src:"/imgs/skills/angular.png"},{title:"Svelte",src:"/imgs/skills/svelte.webp"},{title:"Tailwind CSS",src:"/imgs/skills/tailwind-css.webp"},{title:"Bootstrap CSS",src:"/imgs/skills/bootstrap-5-logo.webp"},{title:"PostgreSql",src:"/imgs/skills/postgresql.png"},{title:"MongoDB",src:"/imgs/skills/mongodb.webp"},{title:"Amazon Web Services",src:"/imgs/skills/aws.png"},{title:"Godot Engine",src:"/imgs/skills/godot.png"},{title:"Figma",src:"/imgs/skills/figma.webp"},{title:"Docker",src:"/imgs/skills/docker.webp"}]);function L(n){let e,t,s,a,r,c,l,i=n[0].title+"",o;return{c(){e=d("div"),t=d("img"),c=N(),l=d("span"),o=P(i),this.h()},l(u){e=_(u,"DIV",{class:!0});var g=h(e);t=_(g,"IMG",{class:!0,src:!0,alt:!0,title:!0}),c=j(g),l=_(g,"SPAN",{class:!0});var b=h(l);o=z(b,i),b.forEach(f),g.forEach(f),this.h()},h(){m(t,"class","h-36 xl:h-64 w-3/4 m-auto object-contain"),S(t.src,s=n[0].src)||m(t,"src",s),m(t,"alt",a=n[0].title),m(t,"title",r=n[0].title),m(l,"class","text-lg"),m(e,"class","bg-light-30 dark:bg-dark-30 rounded-3xl text-center shadow-lg text-light-default dark:text-dark-default p-3 grid grid-rows-1")},m(u,g){k(u,e,g),p(e,t),p(e,c),p(e,l),p(l,o)},p(u,[g]){g&1&&!S(t.src,s=u[0].src)&&m(t,"src",s),g&1&&a!==(a=u[0].title)&&m(t,"alt",a),g&1&&r!==(r=u[0].title)&&m(t,"title",r),g&1&&i!==(i=u[0].title+"")&&F(o,i)},i:v,o:v,d(u){u&&f(e)}}}function Q(n,e,t){let{skill:s}=e;return n.$$set=a=>{"skill"in a&&t(0,s=a.skill)},[s]}class R extends y{constructor(e){super(),D(this,e,Q,L,E,{skill:0})}}function q(n,e,t){const s=n.slice();return s[1]=e[t],s[3]=t,s}function x(n,e){let t,s,a;return s=new R({props:{skill:e[1]}}),{key:n,first:null,c(){t=C(),A(s.$$.fragment),this.h()},l(r){t=C(),B(s.$$.fragment,r),this.h()},h(){this.first=t},m(r,c){k(r,t,c),G(s,r,c),a=!0},p(r,c){e=r;const l={};c&1&&(l.skill=e[1]),s.$set(l)},i(r){a||($(s.$$.fragment,r),a=!0)},o(r){w(s.$$.fragment,r),a=!1},d(r){r&&f(t),I(s,r)}}}function U(n){let e,t=[],s=new Map,a,r=n[0];const c=l=>l[3];for(let l=0;l<r.length;l+=1){let i=q(n,r,l),o=c(i);s.set(o,t[l]=x(o,i))}return{c(){e=d("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=_(l,"DIV",{class:!0});var i=h(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(f),this.h()},h(){m(e,"class","grid grid-cols-2 md:grid-cols-4 gap-3 m-auto mt-3 w-full")},m(l,i){k(l,e,i);for(let o=0;o<t.length;o+=1)t[o].m(e,null);a=!0},p(l,i){i&1&&(r=l[0],J(),t=O(t,i,c,1,l,r,s,e,W,x,null,q),T())},i(l){if(!a){for(let i=0;i<r.length;i+=1)$(t[i]);a=!0}},o(l){for(let i=0;i<t.length;i+=1)w(t[i]);a=!1},d(l){l&&f(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function X(n){let e,t;return e=new H({props:{title:"Compet\xEAncias",$$slots:{default:[U]},$$scope:{ctx:n}}}),{c(){A(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,a){G(e,s,a),t=!0},p(s,[a]){const r={};a&17&&(r.$$scope={dirty:a,ctx:s}),e.$set(r)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function Y(n,e,t){let s;return V(n,K,a=>t(0,s=a)),[s]}class et extends y{constructor(e){super(),D(this,e,Y,X,E,{})}}export{et as default};