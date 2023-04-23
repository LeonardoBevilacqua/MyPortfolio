import{S as D,i as E,s as A,k as d,a as M,q as P,l as _,m as h,c as j,r as z,h as m,n as f,C as w,b as k,D as p,u as G,E as S,y as T,z as B,A as F,g as $,d as b,B as I,F as N,v as V,T as J,f as U,e as q,U as W}from"../chunks/index.b8b22268.js";import{S as H}from"../chunks/Section.da408ec0.js";import{t as K}from"../chunks/Translation.7390f564.js";function L(n){let e,t,s,a,l,u,r,i=n[0].title+"",o;return{c(){e=d("div"),t=d("img"),u=M(),r=d("span"),o=P(i),this.h()},l(g){e=_(g,"DIV",{class:!0});var c=h(e);t=_(c,"IMG",{class:!0,src:!0,alt:!0,title:!0}),u=j(c),r=_(c,"SPAN",{class:!0});var v=h(r);o=z(v,i),v.forEach(m),c.forEach(m),this.h()},h(){f(t,"class","h-36 xl:h-64 w-3/4 m-auto object-contain"),w(t.src,s=n[0].src)||f(t,"src",s),f(t,"alt",a=n[0].title),f(t,"title",l=n[0].title),f(r,"class","text-lg"),f(e,"class","bg-light-30 dark:bg-dark-30 rounded-3xl text-center shadow-lg text-light-default dark:text-dark-default p-3 grid grid-rows-1")},m(g,c){k(g,e,c),p(e,t),p(e,u),p(e,r),p(r,o)},p(g,[c]){c&1&&!w(t.src,s=g[0].src)&&f(t,"src",s),c&1&&a!==(a=g[0].title)&&f(t,"alt",a),c&1&&l!==(l=g[0].title)&&f(t,"title",l),c&1&&i!==(i=g[0].title+"")&&G(o,i)},i:S,o:S,d(g){g&&m(e)}}}function O(n,e,t){let{skill:s}=e;return n.$$set=a=>{"skill"in a&&t(0,s=a.skill)},[s]}class Q extends D{constructor(e){super(),E(this,e,O,L,A,{skill:0})}}const x=[{title:"Spring Framework",src:"/imgs/skills/spring-framework.png"},{title:"Node JS",src:"/imgs/skills/node-js.webp"},{title:"Angular",src:"/imgs/skills/angular.png"},{title:"Svelte",src:"/imgs/skills/svelte.webp"},{title:"Tailwind CSS",src:"/imgs/skills/tailwind-css.webp"},{title:"Bootstrap CSS",src:"/imgs/skills/bootstrap-5-logo.webp"},{title:"PostgreSql",src:"/imgs/skills/postgresql.png"},{title:"MongoDB",src:"/imgs/skills/mongodb.webp"},{title:"Amazon Web Services",src:"/imgs/skills/aws.png"},{title:"Godot Engine",src:"/imgs/skills/godot.png"},{title:"Figma",src:"/imgs/skills/figma.webp"},{title:"Docker",src:"/imgs/skills/docker.webp"}];function y(n,e,t){const s=n.slice();return s[1]=e[t],s[3]=t,s}function C(n,e){let t,s,a;return s=new Q({props:{skill:e[1]}}),{key:n,first:null,c(){t=q(),T(s.$$.fragment),this.h()},l(l){t=q(),B(s.$$.fragment,l),this.h()},h(){this.first=t},m(l,u){k(l,t,u),F(s,l,u),a=!0},p(l,u){e=l},i(l){a||($(s.$$.fragment,l),a=!0)},o(l){b(s.$$.fragment,l),a=!1},d(l){l&&m(t),I(s,l)}}}function R(n){let e,t=[],s=new Map,a,l=x;const u=r=>r[3];for(let r=0;r<l.length;r+=1){let i=y(n,l,r),o=u(i);s.set(o,t[r]=C(o,i))}return{c(){e=d("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=_(r,"DIV",{class:!0});var i=h(e);for(let o=0;o<t.length;o+=1)t[o].l(i);i.forEach(m),this.h()},h(){f(e,"class","grid grid-cols-2 md:grid-cols-4 gap-3 m-auto mt-3 w-full")},m(r,i){k(r,e,i);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);a=!0},p(r,i){i&0&&(l=x,V(),t=J(t,i,u,1,r,l,s,e,W,C,null,y),U())},i(r){if(!a){for(let i=0;i<l.length;i+=1)$(t[i]);a=!0}},o(r){for(let i=0;i<t.length;i+=1)b(t[i]);a=!1},d(r){r&&m(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function X(n){let e,t;return e=new H({props:{title:n[0]("interface.skillTitle"),$$slots:{default:[R]},$$scope:{ctx:n}}}),{c(){T(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,a){F(e,s,a),t=!0},p(s,[a]){const l={};a&1&&(l.title=s[0]("interface.skillTitle")),a&16&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function Y(n,e,t){let s;return N(n,K,a=>t(0,s=a)),[s]}class st extends D{constructor(e){super(),E(this,e,Y,X,A,{})}}export{st as default};
