(window["webpackJsonpconfig-editor"]=window["webpackJsonpconfig-editor"]||[]).push([[0],{106:function(e,t){},108:function(e,t){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(49),l=n.n(c),u=n(7),o=n.n(u),i=n(25),s=n(20),m=n(14),f=n(51),p=n.n(f);function E(e){var t=e.catalog.schemas;return r.a.createElement("ul",null,t.map(function(e){var t=e.name;return r.a.createElement("li",{key:t},r.a.createElement(m.a,{to:"/".concat(t)},t))}))}var b=n(52),d=n.n(b),h=n(53),v=n.n(h),g=n(54);function j(e){var t=e.default,n=e.type;if(Array.isArray(n))return r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(j,{default:t,type:e}))}));switch(n){case"string":return r.a.createElement("input",{defaultValue:t});case"number":case"integer":return r.a.createElement("input",{type:"number",defaultValue:t});case"boolean":return r.a.createElement("input",{type:"checkbox",defaultChecked:t});case"object":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",null),": ",r.a.createElement("input",null),r.a.createElement("br",null),r.a.createElement("button",null,"Add"));case"array":return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",null),r.a.createElement("br",null),r.a.createElement("button",null,"Add"));default:return null}}function w(e){var t=e.name,n=Object(g.a)(e,["name"]);return r.a.createElement("div",null,r.a.createElement("label",null,t,r.a.createElement("br",null),r.a.createElement(j,n)))}function y(e){var t=e.catalog,n=e.name,c=Object(a.useState)(),l=Object(s.a)(c,2),u=l[0],m=l[1];return Object(a.useEffect)(function(){function e(){return(e=Object(i.a)(o.a.mark(function e(){var a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=t.schemas.find(function(e){return e.name===n}))){e.next=17;break}return e.next=5,fetch(a.url);case 5:return r=e.sent,e.t0=m,e.t1=v.a,e.t2=d.a,e.next=11,r.json();case 11:return e.t3=e.sent,e.next=14,e.t2.dereference.call(e.t2,e.t3);case 14:e.t4=e.sent,e.t5=(0,e.t1)(e.t4),(0,e.t0)(e.t5);case 17:e.next=22;break;case 19:e.prev=19,e.t6=e.catch(0),console.error(e.t6);case 22:case"end":return e.stop()}},e,null,[[0,19]])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[t,n]),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,u.title),Object.entries(u.properties||[]).map(function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement(w,Object.assign({key:n,name:n},a))})):null}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){function e(){return(e=Object(i.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://schemastore.org/api/json/catalog.json");case 3:return t=e.sent,e.t0=c,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),console.error(e.t2);case 14:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),n?r.a.createElement(m.b,{history:Object(m.d)(p()())},r.a.createElement(m.c,null,r.a.createElement(E,{path:"/",catalog:n}),r.a.createElement(y,{path:":name",catalog:n}))):null},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,n){e.exports=n(126)},98:function(e,t){}},[[55,1,2]]]);
//# sourceMappingURL=main.5cf58c12.chunk.js.map