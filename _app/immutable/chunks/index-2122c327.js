function b(){}const Z=t=>t;function wt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function W(){return Object.create(null)}function N(t){t.forEach(tt)}function F(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function Gt(t,e){return O||(O=document.createElement("a")),O.href=e,t===O.href}function xt(t){return Object.keys(t).length===0}function $t(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push($t(e,n))}function Kt(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?wt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Ut(t,e,n,i,r,u){if(r){const s=et(e,n,i,u);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const nt=typeof window<"u";let it=nt?()=>window.performance.now():()=>Date.now(),Q=nt?t=>requestAnimationFrame(t):b;const k=new Set;function rt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&Q(rt)}function st(t){let e;return k.size===0&&Q(rt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let H=!1;function vt(){H=!0}function Et(){H=!1}function kt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:kt(1,r,_=>e[n[_]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const u=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<u.length&&s[o].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[o],f)}}function St(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function At(t){const e=lt("style");return Ct(ct(t),e),e.sheet}function Ct(t,e){return St(t.head||t,e),e.sheet}function Mt(t,e){if(H){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Wt(t,e,n){H&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function jt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function Xt(){return U(" ")}function Yt(){return U("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function te(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t){return Array.from(t.childNodes)}function zt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,r=!1){zt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function at(t,e,n,i){return ut(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ee(t,e,n){return at(t,e,n,lt)}function ne(t,e,n){return at(t,e,n,jt)}function Ot(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>U(e),!0)}function ie(t){return Ot(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function Pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function oe(t,e){return new t(e)}const R=new Map;let T=0;function Dt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:At(e),rules:{}};return R.set(t,n),n}function ft(t,e,n,i,r,u,s,l=0){const o=16.666/i;let c=`{
`;for(let p=0;p<=1;p+=o){const x=e+(n-e)*u(p);c+=p*100+`%{${s(x,1-x)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Dt(f)}_${l}`,_=ct(t),{stylesheet:d,rules:h}=R.get(_)||Lt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,T+=1,a}function J(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),T-=r,T||Rt())}function Rt(){Q(()=>{T||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ot(e)}),R.clear())})}let j;function M(t){j=t}function _t(){if(!j)throw new Error("Function called outside component initialization");return j}function le(t){_t().$$.on_mount.push(t)}function ue(t){_t().$$.after_update.push(t)}const C=[],X=[],D=[],Y=[],dt=Promise.resolve();let K=!1;function ht(){K||(K=!0,dt.then(mt))}function ae(){return ht(),dt}function q(t){D.push(t)}const G=new Set;let P=0;function mt(){const t=j;do{for(;P<C.length;){const e=C[P];P++,M(e),Tt(e.$$)}for(M(null),C.length=0,P=0;X.length;)X.pop()();for(let e=0;e<D.length;e+=1){const n=D[e];G.has(n)||(G.add(n),n())}D.length=0}while(C.length);for(;Y.length;)Y.pop()();K=!1,G.clear(),M(t)}function Tt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let A;function pt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function B(t,e,n){t.dispatchEvent(Pt(`${e?"intro":"outro"}${n}`))}const L=new Set;let $;function fe(){$={r:0,c:[],p:$}}function _e(){$.r||N($.c),$=$.p}function yt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),$.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const gt={duration:0};function de(t,e,n){let i=e(t,n),r=!1,u,s,l=0;function o(){u&&J(t,u)}function c(){const{delay:a=0,duration:_=300,easing:d=Z,tick:h=b,css:y}=i||gt;y&&(u=ft(t,0,1,_,a,d,y,l++)),h(0,1);const p=it()+a,x=p+_;s&&s.abort(),r=!0,q(()=>B(t,!0,"start")),s=st(v=>{if(r){if(v>=x)return h(1,0),B(t,!0,"end"),o(),r=!1;if(v>=p){const S=d((v-p)/_);h(S,1-S)}}return r})}let f=!1;return{start(){f||(f=!0,J(t),F(i)?(i=i(),pt().then(c)):c())},invalidate(){f=!1},end(){r&&(o(),r=!1)}}}function he(t,e,n){let i=e(t,n),r=!0,u;const s=$;s.r+=1;function l(){const{delay:o=0,duration:c=300,easing:f=Z,tick:a=b,css:_}=i||gt;_&&(u=ft(t,1,0,c,o,f,_));const d=it()+o,h=d+c;q(()=>B(t,!1,"start")),st(y=>{if(r){if(y>=h)return a(0,1),B(t,!1,"end"),--s.r||N(s.c),!1;if(y>=d){const p=f((y-d)/c);a(1-p,p)}}return r})}return F(i)?pt().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),r&&(u&&J(t,u),r=!1)}}}function me(t,e){t.d(1),e.delete(t.key)}function pe(t,e){Bt(t,1,1,()=>{e.delete(t.key)})}function ye(t,e,n,i,r,u,s,l,o,c,f,a){let _=t.length,d=u.length,h=_;const y={};for(;h--;)y[t[h].key]=h;const p=[],x=new Map,v=new Map;for(h=d;h--;){const m=a(r,u,h),g=n(m);let w=s.get(g);w?i&&w.p(m,e):(w=c(g,m),w.c()),x.set(g,p[h]=w),g in y&&v.set(g,Math.abs(h-y[g]))}const S=new Set,V=new Set;function I(m){yt(m,1),m.m(l,f),s.set(m.key,m),f=m.first,d--}for(;_&&d;){const m=p[d-1],g=t[_-1],w=m.key,z=g.key;m===g?(f=m.first,_--,d--):x.has(z)?!s.has(w)||S.has(w)?I(m):V.has(z)?_--:v.get(w)>v.get(z)?(V.add(w),I(m)):(S.add(z),_--):(o(g,s),_--)}for(;_--;){const m=t[_];x.has(m.key)||o(m,s)}for(;d;)I(p[d-1]);return p}function ge(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||q(()=>{const s=t.$$.on_mount.map(tt).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),u.forEach(q)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(C.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function be(t,e,n,i,r,u,s,l=[-1]){const o=j;M(t);const c=t.$$={fragment:null,ctx:[],props:u,update:b,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:W(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&It(t,a)),_}):[],c.update(),f=!0,N(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){vt();const a=qt(e.target);c.fragment&&c.fragment.l(a),a.forEach(ot)}else c.fragment&&c.fragment.c();e.intro&&yt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),Et(),mt()}M(o)}class xe{$destroy(){Ht(this,1),this.$destroy=b}$on(e,n){if(!F(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const E=[];function $e(t,e=b){let n;const i=new Set;function r(l){if(bt(t,l)&&(t=l,n)){const o=!E.length;for(const c of i)c[1](),E.push(c,t);if(o){for(let c=0;c<E.length;c+=2)E[c][0](E[c+1]);E.length=0}}}function u(l){r(l(t))}function s(l,o=b){const c=[l,o];return i.add(c),i.size===1&&(n=e(r)||b),l(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:s}}export{ae as A,$e as B,Gt as C,Mt as D,b as E,ce as F,Zt as G,Jt as H,Kt as I,Ut as J,Vt as K,Qt as L,jt as M,ne as N,ye as O,pe as P,Z as Q,q as R,xe as S,de as T,he as U,me as V,Xt as a,Wt as b,ie as c,_e as d,Yt as e,yt as f,fe as g,ot as h,be as i,ue as j,lt as k,ee as l,qt as m,te as n,le as o,se as p,U as q,Ot as r,bt as s,Bt as t,re as u,oe as v,ge as w,we as x,Ft as y,Ht as z};
