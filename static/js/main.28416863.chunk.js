(this.webpackJsonptwx=this.webpackJsonptwx||[]).push([[0],{102:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n(10),i=n.n(r),s=(n(102),n(220)),o=n(216),l=n(217),j=n(211),d=n(208),b=n(180),u=n(88),h=n(11),f=n(60),x=n(25),O=n(215),p=n(182),m=n(89),v=n(66),g=n.n(v),y=n(85),w=n(86),C=n.n(w),k=function(e){return function(){var t=Object(y.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){var a=new FileReader;switch(a.addEventListener("load",(function(e){var n;return t(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.result)})),e){case"readAsDataURL":case"dataURL":case"base64":a.readAsDataURL(n);break;case"readAsText":case"text":a.readAsText(n);break;case"buffer":case"arrayBuffer":case"readAsArrayBuffer":a.readAsArrayBuffer(n);break;case"bs":case"binaryString":case"readAsBinaryString":a.readAsBinaryString(n);break;default:throw new Error("readFile received an unknown option ".concat(e))}})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=(k("readAsDataURL"),k("readAsText"),k("readAsArrayBuffer"),k("readAsBinaryString")),A=n(90),E=n(214),B=n(223),D=n(218),J=n(224),N=n(87),I=n.n(N),F=function(e){var t=e.data;return Object(a.jsx)(I.a,{data:t,theme:{scheme:"bright",author:"chris kempson (http://chriskempson.com)",base00:"#000000",base01:"#303030",base02:"#505050",base03:"#b0b0b0",base04:"#d0d0d0",base05:"#e0e0e0",base06:"#f5f5f5",base07:"#ffffff",base08:"#fb0120",base09:"#fc6d24",base0A:"#fda331",base0B:"#a1c659",base0C:"#76c7b7",base0D:"#6fb3d2",base0E:"#d381c3",base0F:"#be643c"}})},L=function(e){var t=e.raw,n=e.defaultShow,r=e.name,i=Object(c.useState)(null!==n&&void 0!==n?n:0),s=Object(x.a)(i,2),o=s[0],l=s[1],j={color:"rgba(0, 0, 0, 0.54)",backgroundColor:"rgba(0, 0, 0, 0.12)"};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.a,{children:[Object(a.jsx)(b.a,{onClick:function(){return l(0)},style:0===o?j:void 0,children:"Hide JSON"}),Object(a.jsx)(b.a,{onClick:function(){return l(1)},style:1===o?j:void 0,children:"Tree JSON"}),Object(a.jsx)(b.a,{onClick:function(){return l(2)},style:2===o?j:void 0,children:"Raw JSON"})]}),Object(a.jsxs)(d.a,{style:{marginLeft:"8px"},children:[Object(a.jsx)(b.a,{onClick:function(){return function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(JSON.stringify(t,null,2))},children:"Copy JSON"}),Object(a.jsx)(b.a,{onClick:function(){return function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}(JSON.stringify(t,null,2),void 0!==r?"".concat(r,".json"):"download.json")},children:"Download JSON"})]}),1===o&&Object(a.jsx)(F,{data:t}),2===o&&Object(a.jsx)("pre",{children:JSON.stringify(t,null,2)})]})},R=n(221),T=n(222),P=n(212),U=n(42),W=n.n(U),M=function(e){var t=e.event,n=e.eventName;return Object(a.jsxs)(R.a,{children:[Object(a.jsxs)(T.a,{expandIcon:Object(a.jsx)(W.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:[Object(a.jsxs)(j.a,{children:["\u4e8b\u4ef6 ",n]}),Object(a.jsx)("div",{style:{flex:1}}),Object(a.jsx)(j.a,{variant:"caption",children:t.tag})]}),Object(a.jsx)(P.a,{children:Object(a.jsx)(s.a,{children:Object(a.jsx)(L,{raw:t,defaultShow:1})})})]})},$=n(213),G=function(e){var t=e.inf;return Object(a.jsxs)(R.a,{children:[Object(a.jsx)(T.a,{expandIcon:Object(a.jsx)(W.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(a.jsx)(j.a,{children:"Mission Info"})}),Object(a.jsx)(P.a,{children:Object(a.jsxs)($.a,{style:{maxWidth:"100%"},spacing:1,container:!0,direction:"column",children:[Object(a.jsxs)($.a,{item:!0,children:["mission name: ",t.n]}),Object(a.jsx)($.a,{item:!0,children:"mission description:"}),Object(a.jsx)($.a,{style:{maxWidth:"100%"},children:t.dp.split(/[\n\r]+/g).map((function(e){return Object(a.jsx)("div",{style:{lineBreak:"auto",maxWidth:"100%"},children:e})}))}),Object(a.jsxs)($.a,{item:!0,children:["mission goal: ",t.go]}),Object(a.jsxs)($.a,{item:!0,children:["mission fail: ",t.fa]}),Object(a.jsxs)($.a,{item:!0,children:["camps: ",t.cs.join(",")]}),Object(a.jsxs)($.a,{item:!0,children:["minplayers: ",t.minp]}),Object(a.jsxs)($.a,{item:!0,children:["author: ",t.sn," (",t.su,")"]}),Object(a.jsxs)($.a,{item:!0,children:["ability: ",t.ab]}),Object(a.jsxs)($.a,{item:!0,children:["ri: ",t.ri.length>0?t.ri.join(","):Object(a.jsx)("i",{children:"none"})]}),Object(a.jsx)(L,{raw:t})]})})]})},H=function(e){var t=e.json,n=e.name;return Object(a.jsxs)(R.a,{children:[Object(a.jsx)(T.a,{expandIcon:Object(a.jsx)(W.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(a.jsx)(j.a,{children:n})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(s.a,{children:Object(a.jsx)(L,{raw:t,defaultShow:1})})})]})},_=function(e){var t=e.twf,n=Object(c.useMemo)((function(){var e=t.inf,n=t.ini,a=t.map,c=Object(A.a)(t,["inf","ini","map"]),r=[],i=[],s=[],o=new Set;Object.entries(c).forEach((function(e){var t=Object(x.a)(e,2),n=t[0],a=t[1];if(n.startsWith("ro"))r.push([n,a]);else if(n.startsWith("music"))s.push([n,a]);else{var c,l=a;i.push([n.replace("evt_",""),l]),null===(c=l.tag)||void 0===c||c.split(",").forEach((function(e){return o.add(e)}))}}));var l=Object.fromEntries(i.sort((function(e,t){return e[1].uo-t[1].uo})));return console.log(function(e){var t={},n={};return e.forEach((function(e){try{e.cks.forEach((function(e){e.type in t?t[e.type].push(e):t[e.type]=[e]})),e.act.forEach((function(e){e.type in n?n[e.type].push(e):n[e.type]=[e]}))}catch(a){console.log(e,a)}})),{checkExamples:t,actionExamples:n}}(Object.values(l))),{roles:r,inf:e,ini:n,map:a,events:l,musics:s,tags:Array.from(o)}}),[t]),r=n.inf,i=n.ini,o=n.map,l=n.roles,j=n.events,d=n.musics,b=n.tags,u=Object(c.useState)(""),h=Object(x.a)(u,2),f=h[0],O=h[1];return Object(a.jsxs)(s.a,{onClick:function(e){return e.stopPropagation()},style:{height:"100%"},children:[Object(a.jsxs)(s.a,{style:{margin:"8px 0",display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[Object(a.jsx)(s.a,{children:Object(a.jsx)(L,{raw:t,name:t.inf.n})}),Object(a.jsxs)(E.a,{children:[Object(a.jsx)(B.a,{children:"Tag"}),Object(a.jsxs)(D.a,{value:f,onChange:function(e){return O(e.target.value)},children:[Object(a.jsx)(J.a,{value:"",children:" - "}),b.map((function(e){return Object(a.jsx)(J.a,{value:e,children:e},e)}))]})]})]}),Object(a.jsx)(G,{inf:r}),Object(a.jsx)(H,{json:o,name:"map"}),Object(a.jsx)(H,{json:i,name:"spawn point"}),Object(a.jsx)(H,{json:l,name:"".concat(l.length," roles")}),Object(a.jsx)(H,{json:Object.fromEntries(d),name:"".concat(d.length," musics")}),Object.entries(j).filter((function(e){var t,n=Object(x.a)(e,2),a=(n[0],n[1]);return""===f||(null===(t=a.tag)||void 0===t?void 0:t.includes(f))})).map((function(e){var t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)(M,{event:c,eventName:n})}))]})},q=function(){var e=Object(c.useState)(null),t=Object(x.a)(e,2),n=t[0],r=t[1],i=Object(c.useCallback)((function(e){var t;(t=e[0],S(t).then((function(e){return C.a.inflate(e)})).then((function(e){return new TextDecoder("utf-8").decode(e)})).then((function(e){var t=e.indexOf("{"),n=e.lastIndexOf("}");return e.slice(t,n+1).replace(/([,{])(\d+):/g,'$1"$2":')})).then(JSON.parse)).then(r)}),[]),o=Object(m.a)({onDrop:i}),l=o.getRootProps,j=o.getInputProps;return Object(a.jsx)(s.a,Object(f.a)(Object(f.a)({style:{flex:1,overflow:"auto"}},null===n?l():{}),{},{children:Object(a.jsxs)(O.a,{style:{height:"100%",marginBottom:"16px"},children:[Object(a.jsx)("input",Object(f.a)({},j())),null===n&&Object(a.jsx)(s.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",height:"100%"},children:Object(a.jsx)(s.a,{children:Object(a.jsx)(p.a,{style:{padding:"30px"},children:"Drag and drop a twf file here, or click to open"})})}),null!==n&&Object(a.jsx)(_,{twf:n})]})}))};var z=function(){return Object(a.jsx)(u.a,{children:Object(a.jsxs)(s.a,{flexDirection:"column",style:{position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex"},children:[Object(a.jsx)(o.a,{position:"static",children:Object(a.jsxs)(l.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)(j.a,{variant:"h6",children:"\u540c\u4eba\u9663\u8b80\u6a94\u5668"}),Object(a.jsxs)(d.a,{variant:"text",color:"inherit",children:[Object(a.jsx)(b.a,{href:"//dipsy.me/twmap/",children:"\u820a\u8b80\u6a94\u5668(twf,twm,twr,var,sav)"}),Object(a.jsx)(b.a,{href:"//gamelet.online/",children:"\u560e\u59c6\u64c2\u53f0"}),Object(a.jsx)(b.a,{href:"//code.gamelet.com/",children:"Code.Gamelet"}),Object(a.jsx)(b.a,{href:"https://light-up.gamelet.online/",children:"\u5149\u5f71\u8ff7\u57ce"}),Object(a.jsx)(b.a,{href:"https://poker99.gamelet.online/",children:"\u7ae5\u8a7199"}),Object(a.jsx)(b.a,{href:"https://magile.gamelet.online/",children:"\u9b54\u6cd5\u98db\u5f48\u5927\u4f5c\u6230"})]})]})}),Object(a.jsx)(h.c,{children:Object(a.jsx)(h.a,{path:"/",children:Object(a.jsx)(q,{})})})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,227)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(z,{}),document.getElementById("root")),K()}},[[179,1,2]]]);
//# sourceMappingURL=main.28416863.chunk.js.map