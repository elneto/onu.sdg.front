(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{232:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),l=t(312),i=[{label:"Overview",id:"overview"},{label:"Targets and Indicators",id:"targets"},{label:"Progress and Info",id:"progress"}];e.default=function(){return r.a.createElement(l.a,{tabs:i})}},283:function(a,e,t){var n;t(57),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var a=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var l=typeof n;if("string"===l||"number"===l)a.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&a.push(i)}else if("object"===l)for(var s in n)t.call(n,s)&&n[s]&&a.push(s)}}return a.join(" ")}a.exports?(r.default=r,a.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(a.exports=n)}()},312:function(a,e,t){"use strict";var n=t(0),r=t.n(n),l=(t(324),t(283)),i=t.n(l);e.a=function(a){var e=a.tabs,t=a.children;return r.a.createElement("div",{className:"tabs tabs-dark"},r.a.createElement("div",{className:"nav-tabs-un"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav nav-tabs flex-column flex-lg-row",id:"myTab",role:"tablist"},e&&e.map(function(a,e){return r.a.createElement("li",{className:"nav-item "},r.a.createElement("a",{className:i()("nav-link",{active:0===e}),id:a.id+"-tab","data-toggle":"tab",href:"#"+a.id,role:"tab","aria-controls":a.id,"aria-selected":"true"},a.label))})))),t&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"tab-content",id:"myTabContent"},e.map(function(a,e){var n;return r.a.createElement("div",((n={className:"tab-pane fade"}).className=i()("tab-pane fade",{"show active":0===e}),n.id=a.id,n.role="tabpanel",n["aria-labelledby"]=a.id+"-tab",n),t[e])}))))}}}]);