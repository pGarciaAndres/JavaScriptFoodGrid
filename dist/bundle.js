!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";window.onload=function(){a(),i()};var r=function(e){return document.createElement(e)},o=function(e,n){return e.appendChild(n)},a=function(){var e=document.getElementById("food-group");fetch("https://api.myjson.com/bins/11a4ds").then(function(e){return e.json()}).then(function(n){return n.map(function(n){var t=r("div"),a=r("img"),c=r("div"),i=r("span"),u=r("span"),l=r("p"),s=r("a"),d=r("i");t.className="card "+n.type,t.style="display:inline-block",a.className="card-img-top cropped",a.src=n.img,c.className="card-body",i.className="card-title",i.innerHTML=n.name,u.className="card-type badge badge-pill "+function(e){switch(e){case"Vegetable":return"badge-success";case"Fruit":return"badge-warning";case"Meat":return"badge-danger";default:return""}}(n.type),u.innerHTML=n.type,l.className="card-text",l.innerHTML=n.description,s.innerHTML="More info",s.className="more-info",d.className="fa fa-angle-right fa-2x float-left",d.style="color:"+function(e){switch(e){case"Vegetable":return"green";case"Fruit":return"orange";case"Meat":return"red";default:return""}}(n.type),o(t,a),o(c,i),o(c,u),o(c,l),o(s,d),o(c,s),o(t,c),o(e,t)})}).then(function(){c()}).catch(function(e){console.log(JSON.stringify(e))})},c=function(){0===Array.from(document.getElementsByClassName("card")).filter(function(e){return"inline-block"===e.style.display}).length?document.getElementById("no-items").style.display="block":document.getElementById("no-items").style.display="none"},i=function(){document.querySelectorAll("input[type=checkbox]").forEach(function(e){e.addEventListener("change",function(){Array.from(document.getElementsByClassName(e.name)).map(function(n){n.style.display=e.checked?"inline-block":"none"}),c()})})}}]);
//# sourceMappingURL=bundle.js.map