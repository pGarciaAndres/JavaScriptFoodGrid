!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";window.onload=function(){o()};var r=function(e){return document.createElement(e)},a=function(e,n){return e.appendChild(n)},o=function(){var e=document.getElementById("food-group");fetch("https://api.myjson.com/bins/11a4ds").then(function(e){return e.json()}).then(function(n){return n.map(function(n){var t=r("div"),o=r("img"),c=r("div"),i=r("span"),u=r("span"),l=r("p"),s=r("a"),d=r("i");t.className="card "+n.type,t.style="display:inline-block",o.className="card-img-top cropped",o.src=n.img,c.className="card-body",i.className="card-title",i.innerHTML=n.name,u.className="card-type badge badge-pill "+function(e){switch(e){case"Vegetable":return"badge-success";case"Fruit":return"badge-warning";case"Meat":return"badge-danger";default:return""}}(n.type),u.innerHTML=n.type,l.className="card-text",l.innerHTML=n.description,s.innerHTML="More info",s.className="more-info",d.className="fa fa-angle-right fa-2x float-left",d.style="color:"+function(e){switch(e){case"Vegetable":return"green";case"Fruit":return"orange";case"Meat":return"red";default:return""}}(n.type),a(t,o),a(c,i),a(c,u),a(c,l),a(s,d),a(c,s),a(t,c),a(e,t)})}).then(function(){c()}).catch(function(e){console.log(JSON.stringify(e))})},c=function(){0===Array.from(document.getElementsByClassName("card")).filter(function(e){return"inline-block"===e.style.display}).length?document.getElementById("no-items").style.display="block":document.getElementById("no-items").style.display="none"}}]);
//# sourceMappingURL=bundle.js.map