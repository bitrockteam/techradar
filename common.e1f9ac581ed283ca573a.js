!function(n){var t={};function e(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return n[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)e.d(r,a,function(t){return n[t]}.bind(null,a));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=108)}({108:function(n,t,e){"use strict";e.r(t);e(109),e(114),e(115),e(116)},109:function(n,t,e){var r=e(110);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(112)(r,a);r.locals&&(n.exports=r.locals)},110:function(n,t,e){(t=n.exports=e(111)(!1)).push([n.i,"@import url(https://www.thoughtworks.com/css/screen.css);",""]),t.push([n.i,'.d3-tip {\n  white-space: nowrap;\n  line-height: 1;\n  font-size: 12px;\n  display: none;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 4px;\n  border-color: #000;\n  pointer-events: none;\n  z-index: 2; }\n\n@media screen and (min-width: 800px) {\n  .d3-tip {\n    display: block; } }\n\n.d3-tip:after {\n  box-sizing: border-box;\n  display: none;\n  font-size: 10px;\n  width: 100%;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  pointer-events: none; }\n\n@media screen and (min-width: 800px) {\n  .d3-tip:after {\n    display: inline; } }\n\n.d3-tip.n {\n  margin: -10px 0 0; }\n\n.d3-tip.n:after {\n  content: "\\25BC";\n  margin: -3px 0 0;\n  top: 100%;\n  left: 0;\n  text-align: center; }\n\n.d3-tip.ne {\n  margin: -10px 0 0 -45px; }\n\n.d3-tip.ne:after {\n  content: "\\25BC";\n  bottom: -8px;\n  left: 18px;\n  text-align: left; }\n\n.d3-tip.nw {\n  margin: -10px 0 0 45px; }\n\n.d3-tip.nw:after {\n  content: "\\25BC";\n  bottom: -8px;\n  right: 18px;\n  text-align: right; }\n\n.input-sheet {\n  margin: 60px auto; }\n  .input-sheet p {\n    font-weight: 100;\n    color: #000;\n    font-size: 18px; }\n  .input-sheet .input-sheet__logo {\n    text-align: center;\n    padding-bottom: 40px; }\n    .input-sheet .input-sheet__logo a {\n      border-bottom: none; }\n      .input-sheet .input-sheet__logo a img {\n        width: 200px; }\n  .input-sheet .radar-footer {\n    padding-top: 200px; }\n  .input-sheet .input-sheet__banner {\n    background-image: url("/images/tech-radar-landing-page-wide.png");\n    background-repeat: no-repeat;\n    background-color: #eee;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    margin: 0 auto;\n    text-align: center;\n    min-height: 285px;\n    display: table; }\n    .input-sheet .input-sheet__banner div {\n      display: table-cell;\n      vertical-align: middle; }\n    .input-sheet .input-sheet__banner p, .input-sheet .input-sheet__banner h1 {\n      color: #fff; }\n    .input-sheet .input-sheet__banner a {\n      color: #fff;\n      border-bottom-color: #fff; }\n  .input-sheet .input-sheet__form {\n    width: 50%;\n    margin: 0 auto;\n    text-align: center;\n    padding-top: 30px; }\n    .input-sheet .input-sheet__form button {\n      border: none;\n      background-color: transparent;\n      margin: 0;\n      padding: 0; }\n  .input-sheet input[type="text"] {\n    border-bottom: 2px solid #d7d7d7;\n    display: block;\n    font-size: 18px;\n    margin-bottom: 30px;\n    padding: 10px;\n    transition: box-shadow 0.3s, border 0.3s; }\n    .input-sheet input[type="text"]:focus, .input-sheet input[type="text"].focus {\n      outline: none;\n      border-bottom: 2px solid #d7d7d7;\n      box-shadow: none; }\n\n.error-container {\n  text-align: center;\n  padding-top: 300px; }\n  .error-container .error-container__message {\n    width: 60%;\n    display: inline-block; }\n\n.input-sheet .page-not-found {\n  font-size: 40px;\n  font-weight: 900;\n  margin-bottom: 20px; }\n\n.input-sheet .message p {\n  font-size: 25px; }\n\n.support {\n  margin-top: 20px; }\n  .support p {\n    font-weight: 500;\n    font-size: 30px;\n    margin-bottom: 1px; }\n\n.support-link {\n  font-size: 26px;\n  padding: 20px; }\n  .support-link span {\n    padding: 0 40px;\n    display: table-cell; }\n\nheader {\n  width: 100%;\n  line-height: 60px;\n  text-align: center;\n  margin-bottom: 15px; }\n  header .radar-title {\n    background-color: #eee;\n    padding-top: 30px;\n    padding-bottom: 30px;\n    display: table;\n    margin: auto;\n    width: 100%; }\n    header .radar-title .radar-title__text {\n      display: table-cell;\n      width: 70%;\n      text-align: left;\n      padding-left: 100px; }\n      header .radar-title .radar-title__text h1 {\n        font-size: 55px;\n        font-weight: 900;\n        letter-spacing: -.04em;\n        line-height: 0.8em;\n        margin: 0;\n        text-transform: uppercase; }\n    header .radar-title .radar-title__logo {\n      width: 30%;\n      display: table-cell;\n      vertical-align: middle; }\n      header .radar-title .radar-title__logo a {\n        border-bottom: none; }\n      header .radar-title .radar-title__logo img {\n        vertical-align: top;\n        width: 140px; }\n  header .print-radar {\n    margin-left: 100px; }\n  header .home-link {\n    color: #ee0b77;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 17px;\n    padding-bottom: 15px;\n    text-align: left;\n    width: 80%; }\n  header .button {\n    font-size: 17px;\n    text-transform: capitalize;\n    display: inline-block;\n    margin-right: 20px;\n    border-radius: 2px;\n    line-height: 1em;\n    padding: 10px 20px;\n    cursor: pointer;\n    transition: all .2s ease-out;\n    background-color: #eee;\n    color: #000; }\n    header .button.no-capitalize {\n      text-transform: none; }\n    header .button:hover, header .button.selected {\n      transform: translate(0, -2px);\n      opacity: .85; }\n      header .button:hover.first, header .button.selected.first {\n        color: white;\n        background-color: #86b782; }\n      header .button:hover.second, header .button.selected.second {\n        color: white;\n        background-color: #1ebccd; }\n      header .button:hover.third, header .button.selected.third {\n        color: white;\n        background-color: #f38a3e; }\n      header .button:hover.fourth, header .button.selected.fourth {\n        color: white;\n        background-color: #b32059; }\n    header .button.full-view.first {\n      background-color: #86b782;\n      color: #fff; }\n    header .button.full-view.second {\n      background-color: #1ebccd;\n      color: #fff; }\n    header .button.full-view.third {\n      background-color: #f38a3e;\n      color: #fff; }\n    header .button.full-view.fourth {\n      background-color: #b32059;\n      color: #fff; }\n\n#footer {\n  text-align: center;\n  clear: both; }\n  #footer .footer-content {\n    width: 50%;\n    margin: 0 auto; }\n    #footer .footer-content p {\n      padding-top: 60px;\n      font-size: 17px;\n      font-weight: 100;\n      text-align: left; }\n\n@media (max-width: 480px) {\n  header .button.print-radar {\n    display: none; } }\n\nbody {\n  font: 18px \'Open Sans\';\n  -webkit-font-smoothing: antialiased;\n  margin: 0; }\n\n@media print {\n  body, article {\n    width: 100%;\n    margin: 0;\n    padding: 0; }\n  @page {\n    margin: 2cm; }\n  a:after {\n    content: " <" attr(href) "> ";\n    font-size: 0.8em;\n    font-weight: normal; }\n  #radar-plot {\n    display: none; }\n  .quadrant-table .quadrant-table__name {\n    display: block;\n    font-size: 36pt;\n    padding: 0 10px;\n    margin-bottom: 20px; }\n  .quadrant-table.first .quadrant-table__name {\n    color: #86b782; }\n  .quadrant-table.second .quadrant-table__name {\n    color: #1ebccd; }\n  .quadrant-table.third .quadrant-table__name {\n    color: #f38a3e; }\n  .quadrant-table.fourth .quadrant-table__name {\n    color: #b32059; }\n  .quadrant-table {\n    page-break-after: always; }\n    .quadrant-table ul {\n      list-style: none;\n      padding: 0;\n      margin: 0; }\n    .quadrant-table li {\n      page-break-inside: avoid; }\n    .quadrant-table h3 {\n      page-break-before: always;\n      padding: 0 10px;\n      text-transform: uppercase;\n      font-size: 18pt;\n      font-weight: bold; }\n    .quadrant-table h2 + h3 {\n      page-break-before: avoid; }\n  .blip-list-item {\n    font-weight: bold; }\n  .blip-item-description {\n    padding: 0 15px; }\n  header {\n    text-align: left; }\n    header .radar-title .radar-title__text {\n      font-size: 40px;\n      width: 100%;\n      padding: 10px;\n      display: block; }\n    header .radar-title .radar-title__logo {\n      display: block;\n      width: auto; }\n      header .radar-title .radar-title__logo a {\n        padding: 40px 10px 0;\n        display: block; }\n        header .radar-title .radar-title__logo a::after {\n          display: none; }\n      header .radar-title .radar-title__logo img {\n        max-width: 150px; }\n    header .button {\n      display: none; }\n    header .home-link {\n      display: none; }\n      header .home-link.selected {\n        display: none; }\n    header .print-radar {\n      display: none; }\n  #footer {\n    display: none; }\n  .error-container {\n    display: none; } }\n\n@media screen {\n  #radar {\n    width: 80%;\n    margin: 0 auto;\n    position: relative; }\n    #radar svg#radar-plot {\n      margin: 0 auto;\n      transition: all 1s ease;\n      position: absolute;\n      left: 0;\n      right: 0; }\n      #radar svg#radar-plot .legend {\n        visibility: hidden;\n        transition: visibility 1s ease 1s;\n        color: #000; }\n      #radar svg#radar-plot path.ring-arc-3 {\n        stroke: none;\n        fill: #eee; }\n      #radar svg#radar-plot path.ring-arc-2 {\n        stroke: none;\n        fill: #dadada; }\n      #radar svg#radar-plot path.ring-arc-1 {\n        stroke: none;\n        fill: #cacaca; }\n      #radar svg#radar-plot path.ring-arc-0 {\n        stroke: none;\n        fill: #bababa; }\n      #radar svg#radar-plot .blip-link {\n        text-decoration: none;\n        cursor: pointer; }\n      #radar svg#radar-plot .quadrant-group {\n        cursor: pointer; }\n      #radar svg#radar-plot circle.first, #radar svg#radar-plot polygon.first, #radar svg#radar-plot path.first {\n        fill: #86b782;\n        stroke: none; }\n      #radar svg#radar-plot circle.second, #radar svg#radar-plot polygon.second, #radar svg#radar-plot path.second {\n        fill: #1ebccd;\n        stroke: none; }\n      #radar svg#radar-plot circle.third, #radar svg#radar-plot polygon.third, #radar svg#radar-plot path.third {\n        fill: #f38a3e;\n        stroke: none; }\n      #radar svg#radar-plot circle.fourth, #radar svg#radar-plot polygon.fourth, #radar svg#radar-plot path.fourth {\n        fill: #b32059;\n        stroke: none; }\n      #radar svg#radar-plot line {\n        stroke: white; }\n      #radar svg#radar-plot text.blip-text {\n        font-size: 9px;\n        font-style: italic;\n        fill: #fff; }\n      #radar svg#radar-plot text.line-text {\n        font-weight: bold;\n        text-transform: uppercase;\n        fill: #000;\n        font-size: 11px; }\n    #radar div.quadrant-table {\n      max-height: 0;\n      max-width: 0;\n      position: absolute;\n      overflow: hidden;\n      transition: max-height 0.5s ease 1s; }\n      #radar div.quadrant-table .quadrant-table__name {\n        display: none; }\n      #radar div.quadrant-table h3 {\n        text-transform: uppercase;\n        font-size: 17px;\n        margin: 0;\n        font-weight: bold; }\n      #radar div.quadrant-table.first {\n        right: 20px; }\n        #radar div.quadrant-table.first.selected {\n          float: right; }\n      #radar div.quadrant-table.second {\n        left: 20px; }\n        #radar div.quadrant-table.second.selected {\n          float: left; }\n      #radar div.quadrant-table.third {\n        left: 20px; }\n        #radar div.quadrant-table.third.selected {\n          float: left; }\n      #radar div.quadrant-table.fourth {\n        right: 20px; }\n        #radar div.quadrant-table.fourth.selected {\n          float: right; }\n      #radar div.quadrant-table.selected {\n        position: relative;\n        max-height: 10000px;\n        max-width: 40%; }\n      #radar div.quadrant-table ul {\n        padding: 0;\n        margin-left: 0; }\n        #radar div.quadrant-table ul li {\n          list-style-type: none;\n          padding-left: 0; }\n          #radar div.quadrant-table ul li .blip-list-item {\n            padding: 2px 5px;\n            border-radius: 2px;\n            cursor: pointer;\n            font-size: 17px;\n            font-weight: 400; }\n            #radar div.quadrant-table ul li .blip-list-item.highlight {\n              color: white;\n              background-color: rgba(0, 0, 0, 0.8); }\n          #radar div.quadrant-table ul li .blip-item-description {\n            max-height: 0;\n            overflow: hidden;\n            width: 300px;\n            transition: max-height 0.2s ease; }\n            #radar div.quadrant-table ul li .blip-item-description p {\n              margin: 0;\n              border-top: 1px solid #777777;\n              border-bottom: 1px solid #777777;\n              padding: 20px;\n              color: #333333;\n              font-weight: 100;\n              font-size: 14px; }\n            #radar div.quadrant-table ul li .blip-item-description.expanded {\n              transition: max-height 0.5s ease 0.2s;\n              max-height: 1000px; } }\n',""])},111:function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(o).concat([a]).join("\n")}var i;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(a=0;a<n.length;a++){var i=n[a];null!=i[0]&&r[i[0]]||(e&&!i[2]?i[2]=e:e&&(i[2]="("+i[2]+") and ("+e+")"),t.push(i))}},t}},112:function(n,t,e){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),d=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),l=null,p=0,s=[],u=e(113);function c(n,t){for(var e=0;e<n.length;e++){var r=n[e],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(v(r.parts[i],t))}else{var d=[];for(i=0;i<r.parts.length;i++)d.push(v(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:d}}}}function f(n,t){for(var e=[],r={},a=0;a<n.length;a++){var o=n[a],i=t.base?o[0]+t.base:o[0],d={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(d):e.push(r[i]={id:i,parts:[d]})}return e}function h(n,t){var e=d(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),s.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=d(n.insertAt.before,e);e.insertBefore(t,a)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=s.indexOf(n);t>=0&&s.splice(t,1)}function g(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return x(t,n.attrs),h(n,t),t}function x(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,r,a,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var i=p++;e=l||(l=g(t)),r=_.bind(null,e,i,!1),a=_.bind(null,e,i,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",x(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,a=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(r=u(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),d=n.href;n.href=URL.createObjectURL(i),d&&URL.revokeObjectURL(d)}.bind(null,e,t),a=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),a=function(){b(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else a()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return c(e,t),function(n){for(var r=[],a=0;a<e.length;a++){var i=e[a];(d=o[i.id]).refs--,r.push(d)}n&&c(f(n,t),t);for(a=0;a<r.length;a++){var d;if(0===(d=r[a]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete o[d.id]}}}};var m,w=(m=[],function(n,t){return m[n]=t,m.filter(Boolean).join("\n")});function _(n,t,e,r){var a=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(t,a);else{var o=document.createTextNode(a),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(o,i[t]):n.appendChild(o)}}},113:function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var a,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},114:function(n,t,e){n.exports=e.p+"images/tech-radar-landing-page-wide.png"},115:function(n,t,e){n.exports=e.p+"images/tw-logo.png"},116:function(n,t,e){n.exports=e.p+"images/favicon.ico"}});
//# sourceMappingURL=common.e1f9ac581ed283ca573a.js.map