(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(a,o,l){"use strict";l.r(o);var t=l(0),e=l.n(t),n=l(296),r=l(360);o.default=function(){return e.a.createElement(n.a,null,e.a.createElement(r.a,null))}},296:function(a,o,l){"use strict";var t=l(0),e=l.n(t);o.a=function(a){var o=a.children;return e.a.createElement("div",{className:"container mt-5"},o)}},360:function(a,o,l){"use strict";l.d(o,"a",function(){return i});var t=l(0),e=l.n(t),n=l(355),r=l.n(n),c=l(356),g=l.n(c);var i=function(a){var o,l;function t(){for(var o,l=arguments.length,t=new Array(l),n=0;n<l;n++)t[n]=arguments[n];return(o=a.call.apply(a,[this].concat(t))||this).chartRef=e.a.createRef(),o}l=a,(o=t).prototype=Object.create(l.prototype),o.prototype.constructor=o,o.__proto__=l;var n=t.prototype;return n.componentDidMount=function(){var a=this.chartRef.current.getContext("2d");new r.a(a,{type:"bar",responsive:!0,showTooltips:!1,showInlineValues:!0,data:{labels:["Goal 1","Goal 2","Goal 3","Goal 4","Goal 5","Goal 6","Goal 7","Goal 8","Goal 9","Goal 10","Goal 11","Goal 12","Goal 13","Goal 14","Goal 15","Goal 16","Goal 17"],datasets:[{label:"Goals",data:[633,67,91,524,939,703,24,343,343,343,600,45,56,343,343,234,99],backgroundColor:[g.a.goal1,g.a.goal2,g.a.goal3,g.a.goal4,g.a.goal5,g.a.goal6,g.a.goal7,g.a.goal8,g.a.goal9,g.a.goal10,g.a.goal11,g.a.goal12,g.a.goal13,g.a.goal14,g.a.goal15,g.a.goal16,g.a.goal17]}]},options:{legend:{display:!1},scales:{yAxes:[{display:!1}],xAxes:[{gridLines:{color:"#f2f2f2"},ticks:{fontColor:[g.a.goal1,g.a.goal2,g.a.goal3,g.a.goal4,g.a.goal5,g.a.goal6,g.a.goal7,g.a.goal8,g.a.goal9,g.a.goal10,g.a.goal11,g.a.goal12,g.a.goal13,g.a.goal14,g.a.goal15,g.a.goal16,g.a.goal17],callback:function(a,o,l){return a},fontSize:14,mirror:!0,fontFamily:"Oswald-Bold"}}]}}})},n.render=function(){return e.a.createElement("div",null,e.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))},t}(t.Component)}}]);