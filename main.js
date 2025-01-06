(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),o=n.n(r),a=n(314),c=n.n(a)()(o());c.push([e.id,":root {\n    --carrusel-width: 100vw;\n    --carrusel-height: 60vh;\n    --back-ground-color: rgb(43, 61, 66);\n    --back-ground-color-hover: rgb(66, 43, 66, 0.5);\n    --color-text: rgb(255, 255, 255);\n    --color-text-hover: rgb(255, 255, 255, 0.5);\n}\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.mainContainer {\n    display: grid;\n    grid-template-rows: var(--carrusel-height) 100px;\n    width: var(--carrusel-width);\n    overflow: hidden;\n}\n\n.carruselContainer {\n    height: var(--carrusel-height);\n    display: flex;\n}\n\n.sectionImg {\n    width: var(--carrusel-width);\n    height: var(--carrusel-height);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n\n.carruselImage {\n    width: var(--carrusel-width);\n    height: var(--carrusel-height);\n    object-fit: cover;\n}\n\n.carruselNavContainer {\n    display: grid;\n    width: var(--carrusel-width);\n    grid-template-columns: 1fr 7fr 1fr;\n    justify-content: center;\n}\n\n.carruselNavButtonLeft, .carruselNavButtonRight {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    margin: 20px;\n    font-size: 32px;\n    color: white;\n    border: none;\n    background-color: var(--back-ground-color);\n    width: 56px;\n    height: 56px;\n}\n\n.carruselNavButtonLeft:hover, .carruselNavButtonRight:hover {\n    cursor: pointer;\n    background-color: var(--back-ground-color-hover);\n}\n\n.navImg {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 11px;\n}\n\n.navImgSection {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    background-color: var(--back-ground-color-hover);\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 460px) {\n\n    :root {\n        --carrusel-height: 40vh;\n    }\n\n    .navImg {\n      display: none;\n    }\n\n    .carruselNavContainer {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n  }\n",""]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var g=o(h,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:g,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),c=n.n(a),i=n(659),s=n.n(i),l=n(56),d=n.n(l),u=n(540),p=n.n(u),h=n(113),g=n.n(h),v=n(208),m={};m.styleTagTransform=g(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=p(),o()(v.A,m),v.A&&v.A.locals&&v.A.locals;const f=[n.p+"41164c0e1e5ba1843c30.webp",n.p+"fe8b8ab31b712822bbec.webp",n.p+"23ca6754cc70c472d0c2.webp",n.p+"f698d2166905e42a7245.webp",n.p+"11cc9b435a6ae5423d29.webp",n.p+"d4f266412e9aa3db3d93.webp"],y=document.createElement("div");y.classList.add("carruselContainer"),y.id="carruselContainer";const b=f.length;y.style.width=100*b+"%";for(let e=0;e<f.length;e++){const t=document.createElement("section"),n=document.createElement("img");t.classList.add("sectionImg"),n.classList.add("carruselImage"),n.alt="carruselImage",n.id=`carruselImage${e+1}`,n.src=f[e],t.append(n),y.append(t)}let x=0,w=0;const I=(e,t,n,r)=>{const o=Object.assign(document.createElement("button"),{className:`carruselNavButton${t}`,id:`carruselNavButton${e}`,textContent:n});return o.addEventListener("click",r),o},C=()=>{let e=0;const t=document.getElementById("carruselContainer"),n=t.offsetWidth/f.length/t.offsetWidth*100;return e=n-n/f.length,Math.round(e*Math.pow(10,4))/Math.pow(10,4)/(f.length-1)},E=()=>{const e=document.getElementById("carruselContainer");x+=C(),w++,x===C()*f.length?(x=0,w=0,e.style.transition="none",e.style.transform=`translateX(-${x}%)`):(e.style.transition="transform 0.5s ease-in-out",e.style.transform=`translateX(-${x}%)`),k(w)},k=e=>{const t=document.querySelectorAll(".navImgSection");for(let n=0;n<t.length;n++){const t=document.getElementById(`navImgSection${n+1}`);if(t.style.backgroundColor="var(--back-ground-color-hover)",t.style.width="32px",t.style.height="32px",t.addEventListener("mouseover",(()=>{t.style.backgroundColor="var(--back-ground-color)",t.style.width="42px",t.style.height="42px"})),t.addEventListener("mouseout",(()=>{t.style.backgroundColor="var(--back-ground-color-hover)",t.style.width="32px",t.style.height="32px"})),t.addEventListener("click",(()=>{const t=document.getElementById("carruselContainer");w=0+(n+1),x=0,x=(e=0+n)*C(),t.style.transition="transform 0.5s ease-in-out",t.style.transform=`translateX(-${x}%)`;const r=document.querySelectorAll(".navImgSection");for(let t=0;t<r.length;t++){const n=document.getElementById(`navImgSection${t+1}`);if(n.style.backgroundColor="var(--back-ground-color-hover)",n.style.width="32px",n.style.height="32px",n.id===`navImgSection${e+1}`){const t=document.getElementById(`navImgSection${e+1}`);t.style.backgroundColor="var(--back-ground-color)",t.style.width="42px",t.style.height="42px",t.addEventListener("mouseout",(()=>{t.style.backgroundColor="var(--back-ground-color)",t.style.width="42px",t.style.height="42px"}))}}})),t.id===`navImgSection${e+1}`){const t=document.getElementById(`navImgSection${e+1}`);t.style.backgroundColor="var(--back-ground-color)",t.style.width="42px",t.style.height="42px",t.addEventListener("mouseout",(()=>{t.style.backgroundColor="var(--back-ground-color)",t.style.width="42px",t.style.height="42px"}))}}};window.addEventListener("load",(()=>k(w)));const S=Object.assign(document.createElement("div"),{className:"carruselNavContainer",id:"carruselNavContainer"});S.append(I("Left","Left","<",(()=>{const e=document.getElementById("carruselContainer"),t=e.offsetWidth/f.length/e.offsetWidth*100;0===w?(x=t-t/f.length,w=f.length-1,e.style.transition="none"):(x-=t/f.length,w--,e.style.transition="transform 0.5s ease-in-out"),e.style.transform=`translateX(-${x}%)`,k(w)})),(()=>{const e=document.createElement("div");e.classList.add("navImg"),e.id="navImg";for(let t=1;t<=f.length;t++){const n=document.createElement("div");n.classList.add("navImgSection"),n.id=`navImgSection${t}`,e.append(n)}return e})(),I("Right","Right",">",E));const L=document.getElementById("main");setInterval(E,5e3),L.append(y,S)})();