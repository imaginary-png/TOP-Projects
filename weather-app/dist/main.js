(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,':root {\n    font-family: "Bebas Neue", cursive;\n    font-family: "Source Code Pro", monospace;\n    background-color: #888;\n}\n\nbody {\n    background-color: aliceblue;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n}\n\n#top {\n    background-color: blue;\n    display: flex;\n    height: 60%;\n}\n\n#location-div {\n    background-color: beige;\n    width: 50%;\n}\n#todays-info-div {\n    background-color: antiquewhite;\n    width: 50%;\n    justify-content: right;\n    text-align: right;\n}\n\n/* weather forecast styling */\n#bottom {\n    background-color: blueviolet;\n    height: 40%;\n}\n\n#weather-main {\n    background-color: beige;\n    display: flex;\n    justify-content: center;\n\n    height: 100%;\n}\n\n.weather-daily {\n    background-color: aquamarine;\n    width: 20%;\n    text-align: center;\n\n    border-style: inset;\n    border-width: 2px;\n    height: calc(100%-border-width);\n}\n',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var m=n(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=a(p,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),u=0;u<o.length;u++){var d=n(o[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e="f9281fab7d3058095f9025193db497a0";class t{constructor(e,t,n,r,a,o,i,s,c,u,d,l,m,p){this.date=e,this.temp=t,this.maxTemp=n,this.minTemp=r,this.humidity=a,this.sea_level=o,this.grnd_level=i,this.clouds=s,this.rain=c,this.wind=u,this.city=d,this.country=l,this.sunrise=new Date(m).toTimeString(),this.sunset=new Date(p).toTimeString(),this.#e(e)}#e(e){switch(new Date(1e3*e).getDay()){case 0:this.day="Sunday";break;case 1:this.day="Monday";break;case 2:this.day="Tuesday";break;case 3:this.day="Wednesday";break;case 4:this.day="Thursday";break;case 5:this.day="Friday";break;case 6:this.day="Saturday";break;default:this.day="ERROR: DAY NOT FOUND?!"}}}const r=(()=>{let n=new t,r=[],a="metric",o="London";function i(){return n}function s(){return r}return{update:async function(){!async function(){const r=`http://api.openweathermap.org/data/2.5/weather?q=${o}&units=${a}&&APPID=${e}`,i=await fetch(r),s=await i.json();try{const e=s.dt,{temp:r}=s.main,a=s.main.temp_max,o=s.main.temp_min,{humidity:i}=s.main,{sea_level:c}=s.main,{grnd_level:u}=s.main,{clouds:d}=s,{rain:l}=s,{wind:m}=s,p=s.name,{country:h}=s.sys,{sunrise:f}=s.sys,{sunset:y}=s.sys;n=new t(e,r,a,o,i,c,u,d,l,m,p,h,f,y),console.log("Current:"),console.log(n)}catch{console.log(`Error: ${s.message}`)}}(),async function(){const n=`http://api.openweathermap.org/data/2.5/forecast?q=${o}&units=${a}&&APPID=${e}`,i=await fetch(n),s=await i.json();try{r=[];const e=s.city.name,{country:n}=s.city,{sunrise:a}=s.city,{sunset:o}=s.city;s.list.forEach((i=>{const s=i.dt,{temp:c}=i.main,u=i.main.temp_max,d=i.main.temp_min,{humidity:l}=i.main,{sea_level:m}=i.main,{grnd_level:p}=i.main,{clouds:h}=i,{rain:f}=i,{wind:y}=i,g=new t(s,c,u,d,l,m,p,h,f,y,e,n,a,o);r.push(g)})),console.log("Current:"),console.log(r)}catch{console.log(`Error: ${s.message}`)}}()},getCurrentWeather:i,getWeeklyWeather:s,setLocation:function(e){o=e,i(),s()},useMetric:function(e){a=e?"metric":"imperial"}}})(),a=(document.getElementById("location-div"),document.getElementById("weather-main"),document.getElementById("location-input"),{startup:async function(){await r.update(),console.log("ok"),function(){const e=r.getCurrentWeather(),t=document.getElementById("current-temperature"),n=document.getElementById("current-temperature-max"),a=document.getElementById("current-temparature-min"),o=document.getElementById("current-humidity");t.innerText=e.temp,n.innerText=e.maxTemp,a.innerText=e.minTemp,o.innerText=e.humidity}(),r.getWeeklyWeather()}});var o=n(379),i=n.n(o),s=n(795),c=n.n(s),u=n(569),d=n.n(u),l=n(565),m=n.n(l),p=n(216),h=n.n(p),f=n(589),y=n.n(f),g=n(426),v={};v.styleTagTransform=y(),v.setAttributes=m(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=h(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,a.startup()})()})();