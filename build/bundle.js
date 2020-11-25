!function(n){"use strict";function t(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var e,o,s=t((function(n,t){function e(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function o(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?e(Object(o),!0).forEach((function(t){s(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))}))}return n}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(n){if("object"!==c(n))throw new Error("single-spa-svelte requires a configuration object");var t=o(o({},r),n);if(!t.component)throw new Error("single-spa-svelte must be passed opts.component");var e={};return{bootstrap:a.bind(null,t,e),mount:l.bind(null,t,e),unmount:i.bind(null,t,e),update:u.bind(null,t,e)}};var r={component:null,domElementGetter:null,props:{}};function a(n){return Promise.resolve()}function l(n,t,e){var s=Object.keys(r),c=Object.keys(n).reduce((function(t,e){return s.includes(e)||(t[e]=n[e]),t}),{});return Promise.resolve().then((function(){var s=function(n,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:n.domElementGetter?n.domElementGetter:function(n){var t=n.appName||n.name;if(!t)throw Error("single-spa-svelte was not given an application name as a prop, so it can't make a unique dom element container for the svelte application");var e="single-spa-application:".concat(t);return function(){var n=document.getElementById(e);return n||((n=document.createElement("div")).id=e,document.body.appendChild(n)),n}}(t)}(n,e)();t.instance=new n.component(o(o({},c),{},{target:s,props:Object.assign({},e,n.props)}))}))}function i(n,t){return Promise.resolve().then((function(){t.instance.$destroy?t.instance.$destroy():t.instance.destroy()}))}function u(n,t,e){return Promise.resolve().then((function(){t.instance.$set?t.instance.$set(e):t.instance.set(e)}))}}(o={path:e,exports:{},require:function(n,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&o.path)}},o.exports),o.exports));function c(){}function r(n){return n()}function a(){return Object.create(null)}function l(n){n.forEach(r)}function i(n){return"function"==typeof n}function u(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function p(n,t){n.appendChild(t)}function f(n,t,e){n.insertBefore(t,e||null)}function d(n){n.parentNode.removeChild(n)}function b(n){return document.createElement(n)}function m(n){return document.createTextNode(n)}function h(){return m(" ")}function y(n,t,e){null==e?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}let g;function j(n){g=n}function v(){if(!g)throw new Error("Function called outside component initialization");return g}const O=[],$=[],E=[],H=[],k=Promise.resolve();let x=!1;function w(n){E.push(n)}let Z=!1;const _=new Set;function P(){if(!Z){Z=!0;do{for(let n=0;n<O.length;n+=1){const t=O[n];j(t),M(t.$$)}for(j(null),O.length=0;$.length;)$.pop()();for(let n=0;n<E.length;n+=1){const t=E[n];_.has(t)||(_.add(t),t())}E.length=0}while(O.length);for(;H.length;)H.pop()();x=!1,Z=!1,_.clear()}}function M(n){if(null!==n.fragment){n.update(),l(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(w)}}const z=new Set;let S;function T(n,t){n&&n.i&&(z.delete(n),n.i(t))}function A(n,t){const e=t.token={};function o(n,o,s,c){if(t.token!==e)return;t.resolved=c;let r=t.ctx;void 0!==s&&(r=r.slice(),r[s]=c);const a=n&&(t.current=n)(r);let i=!1;t.block&&(t.blocks?t.blocks.forEach(((n,e)=>{e!==o&&n&&(S={r:0,c:[],p:S},function(n,t,e,o){if(n&&n.o){if(z.has(n))return;z.add(n),S.c.push((()=>{z.delete(n),o&&(e&&n.d(1),o())})),n.o(t)}}(n,1,1,(()=>{t.blocks[e]=null})),S.r||l(S.c),S=S.p)})):t.block.d(1),a.c(),T(a,1),a.m(t.mount(),t.anchor),i=!0),t.block=a,t.blocks&&(t.blocks[o]=a),i&&P()}if((s=n)&&"object"==typeof s&&"function"==typeof s.then){const e=v();if(n.then((n=>{j(e),o(t.then,1,t.value,n),j(null)}),(n=>{if(j(e),o(t.catch,2,t.error,n),j(null),!t.hasCatch)throw n})),t.current!==t.pending)return o(t.pending,0),!0}else{if(t.current!==t.then)return o(t.then,1,t.value,n),!0;t.resolved=n}var s}function C(n,t){-1===n.$$.dirty[0]&&(O.push(n),x||(x=!0,k.then(P)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function F(n,t,e,o,s,u,p=[-1]){const f=g;j(n);const b=t.props||{},m=n.$$={fragment:null,ctx:null,props:u,update:c,not_equal:s,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:a(),dirty:p,skip_bound:!1};let h=!1;if(m.ctx=e?e(n,b,((t,e,...o)=>{const c=o.length?o[0]:e;return m.ctx&&s(m.ctx[t],m.ctx[t]=c)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](c),h&&C(n,t)),e})):[],m.update(),h=!0,l(m.before_update),m.fragment=!!o&&o(m.ctx),t.target){if(t.hydrate){const n=function(n){return Array.from(n.childNodes)}(t.target);m.fragment&&m.fragment.l(n),n.forEach(d)}else m.fragment&&m.fragment.c();t.intro&&T(n.$$.fragment),function(n,t,e){const{fragment:o,on_mount:s,on_destroy:c,after_update:a}=n.$$;o&&o.m(t,e),w((()=>{const t=s.map(r).filter(i);c?c.push(...t):l(t),n.$$.on_mount=[]})),a.forEach(w)}(n,t.target,t.anchor),P()}j(f)}function G(n){let t;return{c(){t=b("h2"),t.textContent="Some unknown error occurred, can't able to fetch the restaurant menu."},m(n,e){f(n,t,e)},p:c,d(n){n&&d(t)}}}function X(n){let t,e,o,s,r,a,l,i,u,g,j,v,O,$,E=n[1].name+"",H=n[1].description+"";return{c(){t=b("div"),e=b("div"),o=b("section"),o.innerHTML='<div class="sc-bwzfXH bMKTbk"><h2 class="sc-bdVaJa iirVBG">Menu:</h2> \n            <ol class="sc-htpNat hNeiyA"><li class="menu-item svelte-nx2cuo"><span><span style="width: 55px;" class="sc-EHOje jZHygc">$9</span> \n                  <span class="sc-EHOje jZHygc">Cheeseburger</span> \n                </span><span class="sc-ifAKCX jZzfvq"><span class="sc-EHOje jZHygc"><button disabled="" class="sc-bZQynM bzHnOF">-</button> \n                  </span><span class="sc-EHOje jZHygc">x0</span> \n                  <span class="sc-EHOje jZHygc"><button class="sc-bZQynM bzHnOF">+</button></span> \n                  <span class="sc-EHOje jZHygc">$0</span></span></li> \n              <li class="sc-bxivhb jKIXFz"><span><span style="width: 55px;" class="sc-EHOje jZHygc">$4</span> \n                  <span class="sc-EHOje jZHygc">Milkshake</span></span><span class="sc-ifAKCX jZzfvq"><span class="sc-EHOje jZHygc"><button disabled="" class="sc-bZQynM bzHnOF">-</button></span><span class="sc-EHOje jZHygc">x0</span><span class="sc-EHOje jZHygc"><button class="sc-bZQynM bzHnOF">+</button></span><span class="sc-EHOje jZHygc">$0</span></span></li><li class="sc-bxivhb jKIXFz"><span><span style="width: 55px;" class="sc-EHOje jZHygc">$15</span><span class="sc-EHOje jZHygc">Meal (burger, fries, and shake)</span></span><span class="sc-ifAKCX jZzfvq"><span class="sc-EHOje jZHygc"><button disabled="" class="sc-bZQynM bzHnOF">-</button></span><span class="sc-EHOje jZHygc">x0</span><span class="sc-EHOje jZHygc"><button class="sc-bZQynM bzHnOF">+</button></span><span class="sc-EHOje jZHygc">$0</span></span></li></ol></div> \n          <div class="sc-jTzLTM eVcixw">Total: $0</div> \n          <button class="sc-fjdhpX ioFrMz">Order now</button>',s=h(),r=b("section"),a=b("h1"),l=m(E),i=h(),u=b("figure"),g=b("img"),v=h(),O=b("figcaption"),$=m(H),y(o,"class","menu-section svelte-nx2cuo"),y(a,"class","sc-iwsKbI dJgGYT svelte-nx2cuo"),g.src!==(j="https://content.demo.microfrontends.com"+n[1].imageSrc)&&y(g,"src",j),y(g,"alt","A photo of a burger with fries and a milkshake"),y(g,"class","sc-gZMcBi uxjla"),y(O,"class","sc-VigVT crfTJo"),y(u,"class","sc-gqjmRU iXXjRT"),y(r,"class","restaurant-section svelte-nx2cuo"),y(e,"class","order-wrapper svelte-nx2cuo"),y(t,"class","sc-jzJRlG cDoAnW")},m(n,c){f(n,t,c),p(t,e),p(e,o),p(e,s),p(e,r),p(r,a),p(a,l),p(r,i),p(r,u),p(u,g),p(u,v),p(u,O),p(O,$)},p:c,d(n){n&&d(t)}}}function q(n){let t;return{c(){t=b("h2"),t.textContent="Loading..."},m(n,e){f(n,t,e)},p:c,d(n){n&&d(t)}}}function K(n){let t,e,o={ctx:n,current:null,token:null,hasCatch:!0,pending:q,then:X,catch:G,value:1,error:2};return A(e=n[0],o),{c(){t=b("main"),o.block.c(),y(t,"id","order"),y(t,"class","svelte-nx2cuo")},m(n,e){f(n,t,e),o.block.m(t,o.anchor=null),o.mount=()=>t,o.anchor=null},p(t,[e]){{const s=(n=t).slice();s[1]=s[2]=o.resolved,o.block.p(s,e)}},i:c,o:c,d(n){n&&d(t),o.block.d(),o.token=null,o=null}}}function D(n){return[fetch("https://api.jsonbin.io/b/5fbded3990e7c66167f6aa01",{headers:{"secret-key":"$2b$10$WgrEnl6Ev9ry0rK.KNhgo.lGZjT0PEuOnXTSfRAd61nH5SOrvoPz."}}).then((n=>n.json())).then((n=>{const[,,t]=location.pathname.split("/"),e=n.find((n=>n.id===t));return console.log(e),e}))]}const N=s({component:class extends class{$destroy(){!function(n,t){const e=n.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=c}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}{constructor(n){super(),F(this,n,D,K,u,{})}},domElementGetter:()=>document.getElementById("single-spa-application:@feedme/order"),props:{someData:"data"}}),Q=N.bootstrap,B=N.mount,I=N.unmount;n.bootstrap=Q,n.mount=B,n.unmount=I,Object.defineProperty(n,"__esModule",{value:!0})}(this["@feedme/order"]=this["@feedme/order"]||{});
//# sourceMappingURL=bundle.js.map
