(this.webpackJsonpditado=this.webpackJsonpditado||[]).push([[0],{43:function(e){e.exports=JSON.parse('[{"text":"exterminador"},{"text":"latroc\xednio"},{"text":"assim\xe9trico"},{"text":"criterioso"},{"text":"porquice"},{"text":"branqu\xedssimo"},{"text":"prostrado"},{"text":"criancice"},{"text":"repugn\xe2ncia"},{"text":"quadriciclo"},{"text":"paralelep\xedpedo"},{"text":"astron\xf4mico"},{"text":"prepara\xe7\xe3o"},{"text":"cris\xe1lida"},{"text":"proximidade"},{"text":"exterior"},{"text":"promissor"},{"text":"microondas"},{"text":"escravid\xe3o"},{"text":"esnobar"},{"text":"aliena\xe7\xe3o"},{"text":"esfor\xe7ado"},{"text":"soterrado"},{"text":"erup\xe7\xf5es"},{"text":"premissa"},{"text":"previs\xedvel"},{"text":"reconstru\xe7\xf5es"},{"text":"vasculhar"},{"text":"veracidade"},{"text":"mundanismo"},{"text":"abnega\xe7\xe3o"},{"text":"murm\xfario"},{"text":"tranquilidade"},{"text":"admira\xe7\xe3o"},{"text":"hemisf\xe9rio"},{"text":"crep\xfasculo"},{"text":"interrogat\xf3rio"}]')},67:function(e,t,a){e.exports=a(77)},72:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(72),a(128)),c=a(16),s=a(120),m=a(116),u=a(55),p=a.n(u),d=a(121),h=a(43),g=a(20),E=a(132),b=a(44),x=a.n(b),f=a(45),v=a.n(f),w=Object(m.a)({root:{maxWidth:400,flexGrow:1}}),k=function(e){var t=e.steps,a=e.count,n=e.handleNextPlayer,o=e.handleBackPlayer,l=w(),i=Object(g.a)(),m=r.a.useState(a),u=Object(c.a)(m,2),p=u[0],d=u[1];return r.a.createElement(E.a,{variant:"progress",steps:t,position:"static",activeStep:p,className:l.root,nextButton:r.a.createElement(s.a,{size:"small",onClick:function(){n(),d((function(e){return e+1}))},disabled:p===t},"Next","rtl"===i.direction?r.a.createElement(x.a,null):r.a.createElement(v.a,null)),backButton:r.a.createElement(s.a,{size:"small",onClick:function(){o(),d((function(e){return e-1}))},disabled:0===p},"rtl"===i.direction?r.a.createElement(v.a,null):r.a.createElement(x.a,null),"Back")})},y=Object(m.a)((function(e){return{root:{width:"100%",maxWidth:360,margin:"auto",backgroundColor:e.palette.background.paper},button:{width:"100%"},formControl:{margin:e.spacing(1),minWidth:300},selectEmpty:{marginTop:e.spacing(2)},chip:{margin:e.spacing(.5)},section:{margin:e.spacing(3,2)}}})),O=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],o=t[1],l=y(),i={steps:h.length,count:a,handleNextPlayer:function(){o((function(e){return e+1}))},handleBackPlayer:function(){o((function(e){return e-1}))}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.root},r.a.createElement("div",{className:l.section},r.a.createElement(s.a,{variant:"contained",color:"primary",size:"large",className:l.button,endIcon:r.a.createElement(p.a,null),onClick:function(){return function(e){var t=new SpeechSynthesisUtterance(e);t.lang=localStorage.getItem("lang")||"pt-PT",t.voiceURI="native",t.rate=.7,window.speechSynthesis.speak(t)}(h[a].text)}},"Play")),r.a.createElement(d.a,{variant:"middle"}),r.a.createElement("div",{className:l.section},r.a.createElement(k,i))))},C=a(33),j=a(10),N=a(125),I=a(126),S=a(123),R=a(127),B=a(130),P=a(124),W=a(131),z=a(59),M=a(56),U=a.n(M),T=a(57),q=a.n(T),L=a(48),D=a.n(L),J=a(46),A=a.n(J),F=a(47),G=a.n(F),V=a(58),$=a.n(V),H=a(129),K=a(122),Q=a(133),X=Object(m.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:100},selectEmpty:{marginTop:e.spacing(2)}}})),Y=function(){var e=X(),t=window.speechSynthesis,a=Object(n.useState)([]),o=Object(c.a)(a,2),l=o[0],i=o[1],s=r.a.useState(""),m=Object(c.a)(s,2),u=m[0],p=m[1];return r.a.createElement(K.a,{variant:"outlined",className:e.formControl},r.a.createElement(Q.a,{id:"demo-simple-select-outlined-label"},"Lang"),r.a.createElement(H.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:u,onChange:function(e){var t=e.target.value;p(t),localStorage.setItem("lang",t)},label:"Age",onOpen:function(){!l.length&&i(t.getVoices().sort((function(e,t){return e.voiceURI>t.voiceURI?1:t.voiceURI>e.voiceURI?-1:0})))}},r.a.createElement(W.a,{value:""},r.a.createElement("em",null,"None")),l.map((function(e){var t=e.lang,a=e.voiceURI;return r.a.createElement(W.a,{key:a,value:t},a," - ",t)}))))},Z=Object(m.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(C.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(C.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(C.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),_=function(){var e=Z(),t=r.a.useState(null),a=Object(c.a)(t,2),n=a[0],o=a[1],l=r.a.useState(null),i=Object(c.a)(l,2),s=i[0],m=i[1],u=Boolean(n),p=Boolean(s),d=function(e){o(e.currentTarget)},h=function(){m(null)},g=function(){o(null),h()},E="primary-search-account-menu",b=r.a.createElement(z.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:E,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:g},r.a.createElement(W.a,{onClick:g},"Profile"),r.a.createElement(W.a,{onClick:g},"My account")),x=r.a.createElement(z.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:h},r.a.createElement(W.a,null,r.a.createElement(S.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(P.a,{badgeContent:4,color:"secondary"},r.a.createElement(A.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(W.a,null,r.a.createElement(S.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(P.a,{badgeContent:11,color:"secondary"},r.a.createElement(G.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(W.a,{onClick:d},r.a.createElement(S.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(D.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(N.a,{position:"static"},r.a.createElement(I.a,null,r.a.createElement(S.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(U.a,null)),r.a.createElement(R.a,{className:e.title,variant:"h6",noWrap:!0},"Ditado"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(q.a,null)),r.a.createElement(B.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(Y,null),r.a.createElement(S.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(P.a,{badgeContent:4,color:"secondary"},r.a.createElement(A.a,null))),r.a.createElement(S.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(P.a,{badgeContent:17,color:"secondary"},r.a.createElement(G.a,null))),r.a.createElement(S.a,{edge:"end","aria-label":"account of current user","aria-controls":E,"aria-haspopup":"true",onClick:d,color:"inherit"},r.a.createElement(D.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(S.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},r.a.createElement($.a,null))))),x,b)},ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(i.a,{maxWidth:"sm"},r.a.createElement("div",{className:"App"},r.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.128f487c.chunk.js.map