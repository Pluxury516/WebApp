(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\nheader {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n}\r\n\r\n.my-button {\r\n  position: fixed;\r\n  right: 50px;\r\n  background-color: #fff;\r\n  color: black;\r\n}\r\n\r\nheader ul.mui-list--inline {\r\n  margin-bottom: 0;\r\n}\r\n\r\nheader a {\r\n  color: white;\r\n}\r\n\r\nheader table {\r\n  width: 100%;\r\n}\r\n/* main content */\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n/**\r\n  * Sidebar CSS\r\n  */\r\n\r\n#sidebar {\r\n  background-color: #e57373;\r\n  padding: 15px;\r\n}\r\n\r\n#footer {\r\n  background-color: #0288d1;\r\n  color: #fff;\r\n}\r\n\r\n#footer a {\r\n  color: #fff;\r\n  text-decoration: underline;\r\n}\r\n\r\n.modal {\r\n  max-width: 600px;\r\n  max-height: 500px;\r\n  margin: 100px auto;\r\n  overflow-y: auto;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.modal > h1 {\r\n  text-align: center;\r\n}\r\n\r\n.modal-content {\r\n  padding: 1rem;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  text-align: center;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 180px;\r\n    height: 100%;\r\n    padding-top: 30px;\r\n  }\r\n}\r\n\r\n/**\r\n  * Content CSS\r\n  */\r\n@media (min-width: 768px) {\r\n  #content {\r\n    margin-left: 180px;\r\n  }\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var f=t(u),p={css:d[1],media:d[2],sourceMap:d[3]};-1!==f?(e[f].references++,e[f].updater(p)):e.push({identifier:u,updater:o(p,r),references:1}),a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n){return n.length>=10}function e(n,e){const t=document.createElement("div");t.classList.add("modal");const r=`<h1>${n}</h1> <div class="modal-content">${e}</div>`;t.innerHTML=r,mui.overlay("on",t)}var r=t(379),o=t.n(r),i=t(795),a=t.n(i),s=t(569),d=t.n(s),c=t(565),l=t.n(c),u=t(216),f=t.n(u),p=t(589),m=t.n(p),h=t(426),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=f(),o()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;class b{static create(n){return fetch("https://register-pluxury-app-default-rtdb.firebaseio.com/question.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((n=>n.json())).then((e=>(n.id=e.name,n))).then(g).then(b.renderList)}static fetch(n){return n?fetch(`https://register-pluxury-app-default-rtdb.firebaseio.com/question.json?auth=${n}`).then((n=>n.json())).then((n=>n&&n.error?`<p class="error"> ${n.error} </p>`:n?Object.keys(n).map((e=>({...n[e],id:e}))):[])):Promise.resolve('<p class="error"> Неправильный логин или пароль! </p>')}static renderList(){const n=y(),e=n.length?n.map(x).join(" "):'<div class="mui--text-headline">Вы ничего не спрашивали</div>';document.getElementById("list").innerHTML=e}static listToHTML(n){return n.length?`<ol>${n.map((n=>`<li>${n.text}</li>`)).join("")}</ol>`:"<p> Вопросов пока нет</p>"}}function g(n){const e=y();e.push(n),localStorage.setItem("questions",JSON.stringify(e))}function y(){return JSON.parse(localStorage.getItem("questions")||"[]")}function x(n){return`<div class="mui--text-black-54">\n  </br>\n  ${new Date(n.date).toLocaleDateString()}\n  ${new Date(n.date).toLocaleTimeString()}\n</div>\n<div>\n  ${n.text}\n</div>`}const S=document.getElementById("form"),w=document.getElementById("modal-btn"),T=S.querySelector("#question-input"),L=S.querySelector("#submit");function E(n){n.preventDefault();const e=n.target.querySelector("button"),t=n.target.querySelector("#email").value,r=n.target.querySelector("#password").value;e.disabled=!0,function(n,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrLiyW9HWUmYNOgeBsxqg7TvPEfzQ5fUA",{method:"POST",body:JSON.stringify({email:n,password:e,returnSecureToken:!0}),headers:{"Content-type":"aplication.json"}}).then((n=>n.json())).then((n=>n.idToken))}(t,r).then(b.fetch).then(j).then((()=>e.disabled=!1))}function j(n){"string"==typeof n?e("Ошибка!",n):e("Список вопросов",b.listToHTML(n))}window.addEventListener("load",b.renderList),S.addEventListener("submit",(function(e){if(e.preventDefault(),n(T.value)){const n={text:T.value.trim(),date:(new Date).toJSON()};L.disabled=!0,b.create(n).then((()=>{T.value="",T.className="",L.disabled=!1}))}})),w.addEventListener("click",(function(){e("Авторизация",'\n   <form class="mui-form" id="auth-form">\n   <div class="mui-textfield mui-textfield--float-label">\n     <input\n       type="email"\n       id="email"\n       required\n     />\n     <label for="email">Email</label>\n   </div>\n   <div class="mui-textfield mui-textfield--float-label">\n   <input\n     type="password"\n     id="password"\n     required\n   />\n   <label for="password">Пароль</label>\n </div>\n   <button\n     type="submit"\n     class="mui-btn mui-btn--raised mui-btn--primary"\n   >\n     Войти\n   </button>\n </form>'),document.getElementById("auth-form").addEventListener("submit",E,{once:!0})})),T.addEventListener("input",(()=>{L.disabled=!n(T.value)}))})()})();