parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZCfc":[function(require,module,exports) {
"use strict";function t(t,o){return r(t)||n(t,o)||i(t,o)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var l,c=t[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}function r(t){if(Array.isArray(t))return t}function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=i(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){a=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw l}}}}function i(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d=function t(e,n){u(this,t),this.text=e,this.completed=n},s={todos:[new d("Hi",!0),new d("Hello there",!1),new d("Hi there!",!0)],filter:"all"},f=function(){function t(e,n){u(this,t),this._todos=e,this._filter=n}return a(t,[{key:"addTodo",value:function(t){return this._todos.push(t)}},{key:"setFilter",value:function(t){this._filter=t}},{key:"todos",get:function(){var t=this;return this._todos.filter(function(e){return"all"===t._filter||("completed"===t._filter?!0===e.completed:"active"===t._filter?!1===e.completed:void 0)})},set:function(t){this._todos=t}},{key:"removeTodoByText",value:function(t){this._todos=this._todos.filter(function(e){return e.text.trim()!==t.trim()})}}]),t}(),y=new f(s.todos,s.filter);function v(t,e){e.innerHTML="";var n,r=o(t);try{for(r.s();!(n=r.n()).done;){var i=n.value,l=document.createElement("input");l.classList.add("toggle"),l.type="checkbox",l.checked=i.completed;var c=document.createElement("label");c.innerHTML=i.text;var a=document.createElement("button");a.classList.add("destroy");var u=document.createElement("li");u.appendChild(l),u.appendChild(c),u.appendChild(a),e.appendChild(u)}}catch(d){r.e(d)}finally{r.f()}T()}function m(t,e){e.innerHTML="";var n=t.map(function(t){return'\n                <li> \n                    <input class="toggle" type="checkbox" '.concat(t.completed?"checked":""," >\n                    <label> ").concat(t.text,' </label>\n                    <button class="destroy"></button>\n                </li>\n                ')}).join("");e.innerHTML=n,T()}var h=document.querySelector(".todo-list");v(y.todos,h);var p=document.querySelector(".new-todo");p.addEventListener("keyup",function(t){if("Enter"===t.key){var e={text:p.value,completed:!1};y.addTodo(e),p.value="",v(y.todos,h)}});for(var b=function t(e,n){u(this,t),this.name=e,this.filterEl=n},g={all:document.querySelector("#filter-all"),active:document.querySelector("#filter-active"),completed:document.querySelector("#filter-completed")},S=function(){var e=t(k[w],2),n=e[0];e[1].addEventListener("click",function(){E(n)})},w=0,k=Object.entries(g);w<k.length;w++)S();function E(t){for(var e=0,n=Object.values(g);e<n.length;e++){n[e].classList.remove("selected")}g[t].classList.add("selected"),y.setFilter(t),v(y.todos,h)}function T(){var t,e=o(h.children);try{var n=function(){var e=t.value,n=e.querySelector("button[class=destroy]"),r=e.querySelector("label").textContent.trim();n.addEventListener("click",function(){console.log("Destroy todo: "+r),y.removeTodoByText(r),v(y.todos,h)})};for(e.s();!(t=e.n()).done;)n()}catch(r){e.e(r)}finally{e.f()}}var x=document.querySelector("button[class=clear-completed]");x.addEventListener("click",function(){y.todos=y.todos.filter(function(t){return!0===t.completed}),v(y.todos,h)});
},{}]},{},["ZCfc"], null)
//# sourceMappingURL=main.254e024e.js.map