(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,c,t){},29:function(e,c,t){},30:function(e,c,t){},32:function(e,c,t){},45:function(e,c,t){},48:function(e,c,t){},49:function(e,c,t){},50:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(1),i=t.n(a),n=t(18),j=t.n(n),r=t(10),b=(t(28),t(9)),o=t(2),l=(t(29),function(){var e=Object(a.useState)(!1),c=Object(r.a)(e,2),t=c[0],i=c[1];return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h1",{children:"Wellsbury Furniture Store"}),Object(s.jsx)("p",{children:"Please note that this is a project website using Paypal sandbox and therefore no actual transactions should occur."}),Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsx)("button",{onClick:function(e){t?i(!1):t||i(!0)},children:"Navbar"}),t&&Object(s.jsxs)("div",{className:"NavLinks",children:[Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/",className:"NavLink",children:"Home"})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/bedroom",className:"NavLink",children:"Bedroom"})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/living-room",className:"NavLink",children:"Living Room"})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/dining-room",className:"NavLink",children:"Dining Room"})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/office",className:"NavLink",children:"Office"})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/garden",className:"NavLink",children:"Garden"})})]})]})]})}),h=(t(30),function(e){return Object(a.useEffect)((function(){e.setArea("")}),[]),Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("div",{className:"about",children:Object(s.jsx)("p",{children:"At Wellsbury Furniture Store we pride ourselves on our high quality furniture at affordable prices. Browse our range of products on our website or come in to our store where one of our sales agents will be happy to help."})}),Object(s.jsxs)("div",{className:"NavLinkDivs",children:[Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/bedroom",className:"NavLink",children:Object(s.jsxs)("div",{className:"NavLinkContent",children:[Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg",alt:"bedroom"}),Object(s.jsx)("p",{children:"Bedroom"})]})})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/living-room",className:"NavLink",children:Object(s.jsxs)("div",{className:"NavLinkContent",children:[Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",alt:"Living Room"}),Object(s.jsx)("p",{children:"Living Room"})]})})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/dining-room",className:"NavLink",children:Object(s.jsxs)("div",{className:"NavLinkContent",children:[Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/06/13/22/42/kitchen-2400367__340.jpg",alt:"Dining Room"}),Object(s.jsx)("p",{children:"Dining Room"})]})})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/office",className:"NavLink",children:Object(s.jsxs)("div",{className:"NavLinkContent",children:[Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2014/04/26/00/41/office-332211_1280.jpg",alt:"office"}),Object(s.jsx)("p",{children:"Office"})]})})}),Object(s.jsx)("div",{className:"NavLinkDiv",children:Object(s.jsx)(b.b,{to:"/garden",className:"NavLink",children:Object(s.jsxs)("div",{className:"NavLinkContent",children:[Object(s.jsx)("img",{src:"https://cdn.pixabay.com/photo/2017/06/27/07/48/armchair-2446560__480.jpg",alt:"garden"}),Object(s.jsx)("p",{children:"Garden"})]})})})]})]})}),d=t(15),x=t.n(d),N=t(19),m=function(){var e=Object(N.a)(x.a.mark((function e(c){var t,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:5000","/api/").concat(c));case 2:return t=e.sent,e.next=5,t.json();case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),B=(t(32),t(33)),O=function(e){var c=Object(a.useState)(""),t=Object(r.a)(c,2),i=t[0],n=t[1];function j(e){for(var c=e.split(" "),t=0;t<c.length;t++)c[t]=c[t][0].toUpperCase()+c[t].substr(1);return c.join(" ")}return Object(a.useEffect)((function(){n(""),e.setArea(window.location.pathname.slice(1))}),[]),Object(a.useEffect)((function(){n(""),e.setArea(window.location.pathname.slice(1))}),[window.location.pathname]),Object(a.useEffect)((function(){e.area&&m(e.area).then((function(e){return n(e)}))}),[e.area]),Object(s.jsxs)("div",{className:"area",children:[Object(s.jsxs)("h2",{className:"area-header",children:[j(window.location.pathname.slice(1).replace("-"," "))," Furniture"]}),Object(s.jsx)("div",{className:"products",children:i&&i.map((function(e,c){return Object(s.jsxs)("div",{className:"product product"+e.id,children:[Object(s.jsx)("img",{src:e.image,alt:e.name}),Object(s.jsx)("h2",{children:j(e.name)}),Object(s.jsxs)("p",{children:["\xa3",e.cost]}),Object(s.jsxs)("div",{children:[B(String(e.paypal))," "]})]},c)}))})]})},A=(t(45),t(21)),v=t(22),u=function(){return Object(s.jsxs)("div",{className:"viewcart",children:[Object(s.jsx)(v.a,{icon:A.a,className:"fa-3x basket"}),Object(s.jsxs)("form",{target:"paypal",action:"https://www.sandbox.paypal.com/cgi-bin/webscr",method:"post",children:[Object(s.jsx)("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),Object(s.jsx)("input",{type:"hidden",name:"encrypted",value:"-----BEGIN PKCS7-----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-----END PKCS7-----"}),Object(s.jsx)("input",{type:"image",src:"https://www.sandbox.paypal.com/en_GB/i/btn/btn_viewcart_LG.gif",border:"0",name:"submit",alt:"PayPal \u2013 The safer, easier way to pay online!"}),Object(s.jsx)("img",{alt:"",border:"0",src:"https://www.sandbox.paypal.com/en_GB/i/scr/pixel.gif",width:"1",height:"1"})]})]})},g=(t(48),function(){return Object(s.jsx)("div",{className:"footer",children:Object(s.jsx)("p",{children:"Charles Davis - Web Developer - 2022"})})});var p=function(){var e=Object(a.useState)(""),c=Object(r.a)(e,2),t=c[0],i=c[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Raleway:500|Vollkorn:400i",rel:"stylesheet"}),Object(s.jsx)(b.a,{children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",element:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(l,{})," ",Object(s.jsx)(h,{setArea:i})," ",Object(s.jsx)(u,{}),Object(s.jsx)(g,{})]})}),Object(s.jsx)(o.a,{exact:!0,path:"/bedroom",element:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(l,{})," ",Object(s.jsx)(O,{area:t,setArea:i})," ",Object(s.jsx)(u,{})," ",Object(s.jsx)(g,{})]})}),Object(s.jsx)(o.a,{exact:!0,path:"/living-room",element:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(l,{})," ",Object(s.jsx)(O,{area:t,setArea:i})," ",Object(s.jsx)(u,{})," ",Object(s.jsx)(g,{})]})}),Object(s.jsx)(o.a,{exact:!0,path:"/dining-room",element:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(l,{})," ",Object(s.jsx)(O,{area:t,setArea:i})," ",Object(s.jsx)(u,{})," ",Object(s.jsx)(g,{})]})}),Object(s.jsx)(o.a,{exact:!0,path:"/office",element:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(l,{})," ",Object(s.jsx)(O,{area:t,setArea:i}),Object(s.jsx)(u,{})," ",Object(s.jsx)(g,{})]})}),Object(s.jsx)(o.a,{exact:!0,path:"/garden",element:Object(s.jsxs)("div",{children:[" ",Object(s.jsx)(l,{})," ",Object(s.jsx)(O,{area:t,setArea:i})," ",Object(s.jsx)(u,{})," ",Object(s.jsx)(g,{})]})})]})})]})};t(49);j.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.28935dbf.chunk.js.map