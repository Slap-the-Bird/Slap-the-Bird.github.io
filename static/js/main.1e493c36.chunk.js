(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),s=n(3),o=n(4),c=n(8),a=n.n(c),l=n(2),d=function(){function t(e,n){Object(s.a)(this,t),this.gravity=void 0,this.jumpSpeed=void 0,this.velocity=void 0,this.jumpSpeed=e,this.gravity=n,this.velocity=0}return Object(o.a)(t,[{key:"applyGravity",value:function(t){t.y<100&&(this.velocity+=this.gravity,t.y+=this.velocity*p.getTime().getTimeScale())}},{key:"applyJump",value:function(t){t.y>-12&&(this.velocity=this.jumpSpeed,t.y+=this.velocity*p.getTime().getTimeScale())}},{key:"getVelocity",value:function(){return this.velocity}}],[{key:"AxisAlignedBoundingBox",value:function(t,e){return t.x<e.x+e.width&&t.x+t.width>e.x&&t.y<e.y+e.height&&t.y+t.height>e.y}}]),t}(),u=n(0),h=r.a.createContext();function f(t){var e=r.a.useState({}),n=Object(l.a)(e,2),i=n[0],s=n[1];return r.a.useEffect((function(){p.fixedUpdate((function t(){for(var e in i)if("player"===i[e].tag){var n=document.getElementById(e).getBoundingClientRect();for(var r in i)if(e!==r&&!(!i[r].tag in["obstacle","score"])){var s=document.getElementById(r).getBoundingClientRect();if(d.AxisAlignedBoundingBox(n,s)){var o=new CustomEvent("isColliding",{detail:{items:[{id:e,tag:i[e].tag},{id:r,tag:i[r].tag}]}});p.getEvent().dispatch(o)}}}p.fixedUpdate(t)}))}),[]),Object(u.jsx)(h.Provider,{value:[i,s],children:null===t||void 0===t?void 0:t.children})}var j=h,x=n(9),m=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;Object(s.a)(this,t),this.sounds=new Array,this.channels=void 0,this.index=0,this.channels=n;for(var i=0;i<this.channels;i++)this.sounds.push(new Audio(e))}return Object(o.a)(t,[{key:"play",value:function(){this.sounds[this.index].play(),this.index=(this.index+1)%this.channels}},{key:"stop",value:function(){var t,e=Object(x.a)(this.sounds);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.pause(),n.currentTime=0}}catch(i){e.e(i)}finally{e.f()}}}]),t}(),v=function(){function t(){Object(s.a)(this,t)}return Object(o.a)(t,[{key:"dispatch",value:function(t){return document.dispatchEvent(t)}},{key:"listen",value:function(t,e){return document.addEventListener(t,e)}},{key:"remove",value:function(t,e){return document.removeEventListener(t,e)}}]),t}(),g=function(){function t(){Object(s.a)(this,t),this.timeScale=1}return Object(o.a)(t,[{key:"start",value:function(){this.timeScale=1}},{key:"stop",value:function(){this.timeScale=0}},{key:"setTimeScale",value:function(t){this.timeScale=t}},{key:"getTimeScale",value:function(){return this.timeScale}}]),t}();var b=function t(e){Object(s.a)(this,t),this.x=void 0,this.y=void 0,this.x=e&&e.x||0,this.y=e&&e.y||0},y=function(){function t(){Object(s.a)(this,t),this.hud=void 0,this.background=void 0,this.objects=new Array,this.audio=new Map,this.time=new g,this.event=new v,this.debugId="slapIdDebug"}return Object(o.a)(t,[{key:"addObject",value:function(t){this.objects.push(t)}},{key:"setBackground",value:function(t){this.background=t}},{key:"setHud",value:function(t){this.hud=t}},{key:"fixedUpdate",value:function(t){return requestAnimationFrame(t)}},{key:"cancelFixedUpdate",value:function(t){cancelAnimationFrame(t)}},{key:"addAudio",value:function(t){this.audio.set(t,new m(t))}},{key:"removeAudio",value:function(t){return this.audio.delete(t)}},{key:"playAudio",value:function(t){var e;0!==this.time.getTimeScale()&&(null===(e=this.audio.get(t))||void 0===e||e.play())}},{key:"stopAudio",value:function(t){var e;null===(e=this.audio.get(t))||void 0===e||e.stop()}},{key:"getEvent",value:function(){return this.event}},{key:"getTime",value:function(){return this.time}},{key:"getPos",value:function(t){return new b(t)}},{key:"getPhysics",value:function(t,e){return new d(t,e)}},{key:"getContext",value:function(){return j}},{key:"debugWrite",value:function(t){document.getElementById(this.debugId).innerHTML=t}},{key:"stop",value:function(){this.time.stop()}},{key:"restart",value:function(){window.location.reload()}},{key:"start",value:function(){a.a.render(Object(u.jsxs)(r.a.StrictMode,{children:[Object(u.jsx)("style",{children:"\n          *\n          {\n            box-sizing: border-box;\n          }\n\n          html\n          {\n            -ms-touch-action: manipulation;\n            touch-action: manipulation;\n          }\n          \n          body\n          {\n            margin: 0px;\n            max-height: 100vh;\n            max-width: 100vw;\n            overflow: hidden;\n\n            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n            \n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n          }\n        "}),Object(u.jsxs)(f,{children:[Object(u.jsx)("div",{style:{zIndex:-1e4,position:"fixed",width:"100%",height:"100%",top:"0"},children:this.background}),this.objects.map((function(t,e){return Object(u.jsx)("span",{id:"slapId_".concat(e,"_0"),children:t},e)})),Object(u.jsxs)("div",{style:{zIndex:1e4,position:"fixed",width:"100%",height:"100%",top:"0"},children:[Object(u.jsx)("div",{id:this.debugId,style:{color:"white",fontSize:"14pt",textShadow:"rgb(51 51 51) 0vh 0.1vh"}}),this.hud]})]})]}),document.getElementById("root"))}}],[{key:"getInstance",value:function(){return t.instance}}]),t}();y.instance=new y;var p=y.getInstance();!function(){function t(t){t.preventDefault()}document.onpointerdown=function(){p.getEvent().dispatch(new CustomEvent("playerInput"))},document.onmousedown=function(e){return t(e)},document.onmouseenter=function(e){return t(e)},document.onmouseleave=function(e){return t(e)},document.onmousemove=function(e){return t(e)},document.onmouseout=function(e){return t(e)},document.onmouseover=function(e){return t(e)},document.onmouseup=function(e){return t(e)},document.ontouchend=function(e){return t(e)},document.ontouchmove=function(e){return t(e)},document.ontouchcancel=function(e){return t(e)},document.onpointerover=function(e){return t(e)},document.onpointerenter=function(e){return t(e)},document.onpointermove=function(e){return t(e)},document.onpointerup=function(e){return t(e)},document.onpointercancel=function(e){return t(e)},document.onpointerout=function(e){return t(e)},document.onpointerleave=function(e){return t(e)},document.ongotpointercapture=function(e){return t(e)},document.onlostpointercapture=function(e){return t(e)}}();var O=n(5),k=0,w="/assets/audio/jump.wav";p.addAudio(w);var W="/assets/audio/quack.wav";function S(t){t.debug;var e,n="slapId_0_1",i=1.25,s=r.a.useRef(null),o=r.a.useRef(null),c=r.a.useContext(p.getContext()),a=Object(l.a)(c,2),d=a[0],h=a[1],f=r.a.useState(!1),j=Object(l.a)(f,2),x=j[0],m=j[1],v=r.a.useState(!1),g=Object(l.a)(v,2),b=g[0],y=g[1],S=r.a.useState(!0),E=Object(l.a)(S,2),I=E[0],C=E[1],T=r.a.useState(p.getPos({x:10,y:48})),A=Object(l.a)(T,2),B=A[0],R=A[1],F=r.a.useMemo((function(){return p.getPhysics(-1.25,.125)}),[]);r.a.useEffect((function(){p.getEvent().listen("isColliding",(function(t){var e,n,i,r=null===t||void 0===t||null===(e=t.detail)||void 0===e?void 0:e.items;"player"==(null===(n=r[0])||void 0===n?void 0:n.tag)&&"obstacle"==(null===(i=r[1])||void 0===i?void 0:i.tag)&&(!1===b&&(p.playAudio(W),y(!0)),p.stop(),p.stopAudio(w),s.current.classList.add("fall"))})),d[n]={tag:"player"},h(Object(O.a)({},d))}),[]),r.a.useEffect((function(){function t(){p.debugWrite("".concat(++k)),m(!0),p.playAudio(w)}return p.getEvent().listen("playerInput",t),function(){return p.getEvent().remove("playerInput",t)}}),[]),r.a.useEffect((function(){p.fixedUpdate((function(){x?(F.applyJump(B),m(!1),I&&(C(!1),o.current.classList.add("wingDown"),new Promise((function(t){return setTimeout(t,100)})).then((function(){o.current.classList.remove("wingDown"),new Promise((function(t){return setTimeout(t,100)})).then((function(){C(!0)}))})))):F.applyGravity(B),R(p.getPos(Object(O.a)({},B)))}))}),[B]),(0!=p.getTime().getTimeScale()||b)&&(e=180*Math.atan2(F.getVelocity(),i)/Math.PI);var L={display:"flex",position:"fixed",willChange:"transform",transform:"translate3d(".concat(B.x,"vh, ").concat(B.y,"vh, 0)")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("style",{jsx:!0,children:"\n        .wingDown\n        {\n          transform: translate3d(-0.6vh, -2.4vh, 0);\n        }\n\n        .fall\n        {\n          transform: translate3d(".concat(B.x,"vw, 150vh, 0px) !important;\n          transition: transform 900ms linear;\n        }\n      ")}),Object(u.jsx)("span",{ref:s,id:n,style:L,children:Object(u.jsx)("svg",{style:{transform:"rotate(".concat(e,"deg)")},height:"4.25vh",version:"1.1",viewBox:"0 0 74.017 55.852",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("g",{transform:"translate(-62.95 -83.663)",children:Object(u.jsxs)("g",{strokeWidth:"1.5875",children:[Object(u.jsxs)("g",{stroke:"#28220b",strokeWidth:"1.5875",children:[Object(u.jsx)("ellipse",{transform:"translate(-1.1875e-6)",cx:"98.366",cy:"116.63",rx:"31.759",ry:"17.625",fill:"#fc0",fillRule:"evenodd"}),Object(u.jsx)("ellipse",{transform:"translate(-1.1875e-6)",cx:"95.883",cy:"134.04",rx:"8.6278",ry:"4.6856",fill:"#f60"}),Object(u.jsx)("ellipse",{transform:"translate(-1.1875e-6)",cx:"117.06",cy:"97.553",rx:"16.571",ry:"13.096",fill:"#fc0"}),Object(u.jsx)("ellipse",{transform:"translate(-1.1875e-6)",cx:"131.36",cy:"100.83",rx:"4.8109",ry:"3.2741",fill:"#f60"})]}),Object(u.jsx)("ellipse",{transform:"translate(-1.1875e-6)",cx:"119.67",cy:"95.883",rx:"3.1404",ry:"3.1404",fill:"#28220b",strokeWidth:"1.5875"}),Object(u.jsx)("path",{transform:"translate(-1.1875e-6)",d:"m69.832 110.85a10.758 4.744 0 0 1-6.0829-4.1265 10.758 4.744 0 0 1 5.4902-4.285 10.758 4.744 0 0 1 11.154 0.16847",fill:"#fc0",stroke:"#28220b",strokeWidth:"1.5875"}),Object(u.jsx)("path",{ref:o,style:{willChange:"transform",transition:"transform 100ms linear"},transform:"matrix(1.2706 0 0 .70673 -26.92 30.601)",d:"m92.163 110.46c7.0526-0.57349 13.065-1.0384 18.959 3.5441 2.8957 2.2515-0.93968 8.5576-2.8468 11.41-3.8818 5.8064-7.4472 9.4699-14.606 11.69-3.5174 1.0909-5.0289-0.49088-7.0157-3.2841-4.0439-5.6852-3.3033-11.785-2.8827-19.267 0.20662-3.6764 4.9272-3.8118 8.3922-4.0935z",fill:"#fc0",stroke:"#28220b",strokeWidth:"1.6752"})]})})})})]})}function E(t){var e=t.id,n=t.pos,i=t.rotation,s=t.score,o=r.a.useContext(p.getContext()),c=Object(l.a)(o,2),a=c[0],d=c[1];r.a.useEffect((function(){a[e]={tag:"obstacle"},s&&(a["".concat(e,"_score")]={tag:"score"}),d(Object(O.a)({},a))}),[]),i||(i=0);var h={position:"fixed",willChange:"transform",transform:"translate3d(".concat(null===n||void 0===n?void 0:n.x,"vh, ").concat(null===n||void 0===n?void 0:n.y,"vh, 0) rotate(").concat(i,"deg)")};return Object(u.jsxs)("div",{style:h,children:[Object(u.jsx)("svg",{id:e,height:"100vh",version:"1.1",viewBox:"0 0 70 514.19",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsxs)("g",{transform:"translate(-65 8.2278)",fill:"#999",stroke:"#000",strokeLinejoin:"round",children:[Object(u.jsx)("rect",{transform:"scale(1,-1)",x:"70.798",y:"-505.16",width:"58.404",height:"478.4",rx:"0",ry:"0",imageRendering:"auto",strokeWidth:"1.5964",style:{mixBlendMode:"normal"}}),Object(u.jsx)("rect",{transform:"scale(1,-1)",x:"65.694",y:"-26.078",width:"68.612",height:"33.612",ry:"5.2732",strokeWidth:"1.3882",style:{mixBlendMode:"normal"}})]})}),s&&Object(u.jsx)("span",{id:"".concat(e,"_score"),style:{position:"fixed",willChange:"transform",transform:"translate3d(0, -30vh, 0px)",height:"40vh",width:"0.1vh"}})]})}function I(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)}function C(t,e,n,i){return p.getPos({x:e*t+e,y:I(n,i)})}function T(t){var e=t.index,n=t.offset,i=t.spacing,s=t.numberOfPipes,o=t.min,c=t.max,a=t.speed,d=r.a.useState(!1),h=Object(l.a)(d,2),f=h[0],j=h[1],x=r.a.useState(C(e,n+3.5,o,c)),m=Object(l.a)(x,2),v=m[0],g=m[1];r.a.useEffect((function(){f&&g(C(s-1,n,o,c))}),[f]),r.a.useEffect((function(){p.fixedUpdate((function(){v.x>-12.7?v.x+=-a*p.getTime().getTimeScale():j(!f),g(p.getPos(Object(O.a)({},v)))}))}),[v]);var b=Object(O.a)({},v);return null!=(null===b||void 0===b?void 0:b.y)&&(b.y-=i),Object(u.jsxs)("span",{children:[Object(u.jsx)(E,{id:"".concat(e,"_up"),pos:v,score:!0}),Object(u.jsx)(E,{id:"".concat(e,"_down"),pos:b,rotation:180})]})}function A(t){var e=t.id,n=r.a.useState(0),i=Object(l.a)(n,2),s=(i[0],i[1],r.a.useContext(p.getContext())),o=Object(l.a)(s,2),c=o[0],a=o[1];return r.a.useEffect((function(){c[e]={tag:"obstacle"},a(Object(O.a)({},c))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("style",{jsx:!0,children:"\n        // .groundImageContainer\n        // {\n        //   height: 100%;\n        //   width: ".concat(400,"vh;\n        //   background: #f4d7d7;\n        //   transform: translate3d(0vh, 79.66vh, -1px);\n        // }\n\n        // .groundImage\n        // {\n        //   height: 100%;\n        //   width: 200vh;\n        //   will-change: transform;\n        // }\n\n        .groundImageContainer\n        {\n          height: 1vh;\n          width: 100vh;\n          transform: translate3d(0vh, 100vh, -1px);\n        }\n      ")}),Object(u.jsx)("div",{id:e,className:"groundImageContainer"})]})}function B(){for(var t=[],e=0;e<6;e++)t.push(Object(u.jsx)(T,{index:e,offset:50,spacing:120,numberOfPipes:6,min:30,max:90,speed:.4},e));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{style:{},children:t}),Object(u.jsx)(A,{id:"slapId_background_0"})]})}function R(t){var e=t.style,n=t.className;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("svg",{className:n,style:e,width:"1e3",height:"300",version:"1.1",viewBox:"0 0 264.58 79.375",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsxs)("g",{transform:"translate(0 -33.928)",children:[Object(u.jsx)("rect",{x:"-1.1102e-16",y:"33.928",width:"264.58",height:"79.375",fill:"#ffb380",fillRule:"evenodd"}),Object(u.jsxs)("g",{transform:"matrix(.8446 0 0 .88327 23.452 3.3686)",children:[Object(u.jsxs)("g",{fillRule:"evenodd",stroke:"#24221c",strokeLinejoin:"round",strokeWidth:".565",children:[Object(u.jsx)("rect",{x:"90.872",y:"43.817",width:"40.625",height:"46.505",fill:"#afe9dd"}),Object(u.jsx)("rect",{x:"90.872",y:"43.817",width:"12.428",height:"34.344",fill:"#5fd35f"}),Object(u.jsx)("rect",{x:"119.87",y:"43.817",width:"11.626",height:"34.077",fill:"#5fd35f"})]}),Object(u.jsx)("path",{d:"m112.39 90.055-0.13364-46.238",fill:"none",stroke:"#000",strokeWidth:".565"}),Object(u.jsx)("path",{d:"m103.43 66.268 16.303-0.13364",fill:"none",stroke:"#000",strokeWidth:".565"})]}),Object(u.jsx)("rect",{x:"159.56",y:"69.538",width:"86.061",height:"2.5941",fill:"#c87137",fillRule:"evenodd",stroke:"#28170b",strokeLinejoin:"round",strokeWidth:".53072"}),Object(u.jsxs)("g",{transform:"matrix(.90046 0 0 .884 16.985 3.8828)",fillRule:"evenodd",stroke:"#28170b",strokeLinejoin:"round",strokeWidth:".565",children:[Object(u.jsx)("rect",{x:"170.79",y:"61.59",width:"7.2163",height:"12.428",fill:"#ff8080"}),Object(u.jsx)("rect",{x:"173.16",y:"57.835",width:"2.7403",height:"3.7325",fill:"#de8787"})]}),Object(u.jsxs)("g",{transform:"matrix(1 0 0 .88235 0 3.9915)",fillRule:"evenodd",stroke:"#28170b",strokeLinejoin:"round",strokeWidth:".565",children:[Object(u.jsx)("rect",{x:"187.69",y:"70.21",width:"12.428",height:"3.8754",fill:"#f60"}),Object(u.jsx)("rect",{x:"189.56",y:"68.74",width:"9.0203",height:"1.47",fill:"#a40"})]}),Object(u.jsxs)("g",{transform:"matrix(.84238 0 0 .88235 37.242 3.9915)",children:[Object(u.jsxs)("g",{stroke:"#28220b",children:[Object(u.jsx)("ellipse",{transform:"scale(-1,1)",cx:"-240.12",cy:"71.84",rx:"3.2327",ry:"1.7402",fill:"#fc0",fillRule:"evenodd",strokeWidth:".225"}),Object(u.jsx)("ellipse",{transform:"scale(-1,1)",cx:"-240.38",cy:"73.558",rx:".87823",ry:".46263",fill:"#f60",strokeWidth:".225"}),Object(u.jsx)("ellipse",{transform:"scale(-1,1)",cx:"-238.22",cy:"69.956",rx:"1.6867",ry:"1.293",fill:"#fc0",strokeWidth:".227"}),Object(u.jsx)("ellipse",{transform:"scale(-1,1)",cx:"-236.76",cy:"70.279",rx:".4897",ry:".32326",fill:"#f60",strokeWidth:".227"})]}),Object(u.jsx)("ellipse",{transform:"scale(-1,1)",cx:"-237.95",cy:"69.791",rx:".31967",ry:".31006",fill:"#28220b",strokeWidth:".026525"}),Object(u.jsx)("path",{transform:"scale(-1,1)",d:"m-243.03 71.269a1.095 0.4684 0 0 1-0.61918-0.40742 1.095 0.4684 0 0 1 0.55885-0.42308 1.095 0.4684 0 0 1 1.1354 0.01663",fill:"#fc0",stroke:"#28220b",strokeWidth:".227"}),Object(u.jsx)("path",{transform:"matrix(-.12934 0 0 .069778 252.88 63.346)",d:"m92.163 110.46c7.0526-0.57349 13.065-1.0384 18.959 3.5441 2.8957 2.2515-0.93968 8.5576-2.8468 11.41-3.8818 5.8064-7.4472 9.4699-14.606 11.69-3.5174 1.0909-5.0289-0.49088-7.0157-3.2841-4.0439-5.6852-3.3033-11.785-2.8827-19.267 0.20662-3.6764 4.9272-3.8118 8.3922-4.0935z",fill:"#fc0",stroke:"#28220b",strokeWidth:"2.3684"})]}),Object(u.jsxs)("g",{transform:"matrix(.83281 0 0 .88235 36.172 3.9915)",fillRule:"evenodd",stroke:"#28170b",strokeLinejoin:"round",children:[Object(u.jsx)("ellipse",{cx:"223.64",cy:"70.577",rx:"7.2831",ry:"3.5079",fill:"#ff2a2a",strokeWidth:".565"}),Object(u.jsx)("rect",{x:"222.49",y:"64.096",width:"2.2551",height:"2.9901",fill:"#ff8080",strokeWidth:".565"})]}),Object(u.jsxs)("g",{transform:"matrix(1 0 0 .88235 0 3.9915)",fillRule:"evenodd",strokeLinejoin:"round",children:[Object(u.jsxs)("g",{fill:"#e6e6e6",stroke:"#28170b",strokeWidth:".565",children:[Object(u.jsx)("rect",{x:"174.26",y:"105.16",width:"76.573",height:"16.972"}),Object(u.jsx)("rect",{x:"176.77",y:"122.16",width:"2.1686",height:"1.4375"}),Object(u.jsx)("rect",{x:"247.31",y:"122.16",width:"2.2974",height:"1.4366"}),Object(u.jsx)("rect",{x:"172.43",y:"106.24",width:"1.7718",height:"1.0631"})]}),Object(u.jsx)("rect",{x:"169.5",y:"105.18",width:"2.9057",height:"2.9529",fill:"#b3b3b3",stroke:"#28170b",strokeWidth:".565"}),Object(u.jsxs)("g",{fill:"#a05a2c",stroke:"#28220b",children:[Object(u.jsx)("rect",{x:"15.502",y:"90.99",width:"58.131",height:"1.7373",strokeWidth:".427"}),Object(u.jsx)("rect",{x:"20.502",y:"92.728",width:"1.1326",height:"30.934",strokeWidth:".4283"}),Object(u.jsx)("rect",{x:"67.5",y:"92.728",width:"1.1327",height:"30.928",strokeWidth:".42827"})]})]}),Object(u.jsxs)("g",{transform:"matrix(.88588 0 0 .88349 14.148 5.2351)",fillRule:"evenodd",strokeLinejoin:"round",children:[Object(u.jsx)("rect",{x:"20.847",y:"44.619",width:"25.925",height:"27.261",fill:"#cdde87",stroke:"#a05a2c",strokeWidth:".565"}),Object(u.jsx)("ellipse",{cx:"33.409",cy:"57.715",rx:"6.6817",ry:"8.2854",fill:"#fc0",stroke:"#2b2200",strokeWidth:".565"}),Object(u.jsxs)("g",{children:[Object(u.jsx)("ellipse",{transform:"rotate(2.2223)",cx:"33.213",cy:"54.664",rx:"1.2762",ry:"1.2628",strokeWidth:".427"}),Object(u.jsx)("ellipse",{transform:"rotate(2.2223)",cx:"38.226",cy:"54.47",rx:"1.2762",ry:"1.2628",strokeWidth:".427"}),Object(u.jsx)("ellipse",{transform:"matrix(.98914 .14695 .14695 -.98914 0 0)",cx:"41.912",cy:"-53.415",rx:"2.4961",ry:"1.211",strokeWidth:".636"})]}),Object(u.jsx)("ellipse",{transform:"matrix(.99281 -.11966 -.11966 -.99281 0 0)",cx:"26.86",cy:"-62.207",rx:"4.3111",ry:"1.211",fill:"#fc0",strokeWidth:".83584"}),Object(u.jsx)("ellipse",{transform:"matrix(.99923 .039128 -.038427 .99926 0 0)",cx:"33.205",cy:"54.64",rx:"1.1359",ry:"1.1342",fill:"#fff",strokeWidth:".38178"}),Object(u.jsx)("ellipse",{transform:"matrix(.99923 .039128 -.038427 .99926 0 0)",cx:"38.207",cy:"54.456",rx:"1.1359",ry:"1.1342",fill:"#fff",strokeWidth:".38178"}),Object(u.jsx)("ellipse",{transform:"matrix(.99954 .03025 -.049695 .99876 0 0)",cx:"33.801",cy:"54.909",rx:".21209",ry:".1638",strokeWidth:".06269"}),Object(u.jsx)("ellipse",{transform:"matrix(.99954 .03025 -.049695 .99876 0 0)",cx:"38.949",cy:"54.695",rx:".21209",ry:".1638",strokeWidth:".06269"})]})]})})})}function F(){var t,e=r.a.useState(0),n=Object(l.a)(e,2),i=n[0],s=n[1],o=0;return r.a.useEffect((function(){return t=p.fixedUpdate((function e(){var n=i-.1*p.getTime().getTimeScale();i<-294&&(o-=294,n=0),s(n),t=p.fixedUpdate(e)})),function(){return p.cancelFixedUpdate(t)}}),[i]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("style",{jsx:!0,children:"\n        .backgroundImageContainer\n        {\n          height: 100%;\n          width: ".concat(588,"vh;\n          background: #ffb380;\n          filter: blur(0.15vh);\n        }\n\n        .backgroundImage\n        {\n          height: 100%;\n          width: 294vh;\n          will-change: transform;\n        }\n      ")}),Object(u.jsxs)("div",{className:"backgroundImageContainer",children:[Object(u.jsx)(R,{className:"backgroundImage",style:{transform:"translate3d(".concat(o+i,"vh, 0, -2px)")}}),Object(u.jsx)(R,{className:"backgroundImage",style:{transform:"translate3d(".concat(o+i+.2,"vh, 0, -3px)")}})]})]})}function L(){var t=r.a.useState(!1),e=Object(l.a)(t,2),n=e[0],i=e[1],s=r.a.useState(0),o=Object(l.a)(s,2),c=o[0],a=o[1],d=r.a.useState(!1),h=Object(l.a)(d,2),f=h[0],j=h[1],x=r.a.useState(""),m=Object(l.a)(x,2),v=m[0],g=m[1],b=r.a.useState(!1),y=Object(l.a)(b,2),O=y[0],k=y[1];return r.a.useEffect((function(){function t(){n?n&&O&&p.restart():i(!0)}return p.getEvent().listen("playerInput",t),function(){return p.getEvent().remove("playerInput",t)}}),[n,O]),r.a.useEffect((function(){function t(t){var e,n,i,r,s,o,c,l=null===t||void 0===t||null===(e=t.detail)||void 0===e?void 0:e.items;"player"==(null===(n=l[0])||void 0===n?void 0:n.tag)&&"score"==(null===(i=l[1])||void 0===i?void 0:i.tag)&&((null===(o=l[1])||void 0===o?void 0:o.id)!=v&&(a((function(t){return++t})),g(null===(c=l[1])||void 0===c?void 0:c.id)));"player"==(null===(r=l[0])||void 0===r?void 0:r.tag)&&"obstacle"==(null===(s=l[1])||void 0===s?void 0:s.tag)&&(j(!0),k(!0))}return p.getEvent().listen("isColliding",t),function(){return p.getEvent().remove("isColliding",t)}}),[v]),r.a.useEffect((function(){n?p.getTime().start():p.getTime().stop()}),[n]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{style:{width:"100vw",height:"100vh"},children:Object(u.jsxs)("div",{style:{color:"#FFF",fontSize:"4vh",textShadow:"0vh 0.4vh #333",fontWeight:"600",textAlign:"center",marginTop:"8.5vh"},children:[Object(u.jsx)("h2",{children:c}),Object(u.jsx)("h1",{style:{marginTop:"28vh",height:"9.5vh"},children:f&&"Game Over"}),(!n||f)&&Object(u.jsxs)("span",{children:[Object(u.jsx)("span",{children:Object(u.jsx)("svg",{style:{transform:"rotate(90deg)",marginTop:"18vh"},height:"4.25vh",version:"1.1",viewBox:"0 0 5.8304 5.6861",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("g",{transform:"translate(-81.253 -98.706)",children:Object(u.jsx)("path",{d:"m84.593 103.95-0.28127 0.28128c-0.11909 0.11907-0.31168 0.11907-0.42952 0l-2.463-2.4618c-0.11909-0.11905-0.11909-0.31171 0-0.42949l2.463-2.4631c0.1191-0.11909 0.31168-0.11909 0.42952 0l0.28127 0.28127c0.12036 0.12037 0.11784 0.31675-0.0051 0.43458l-1.5267 1.4545h3.6413c0.16851 0 0.30408 0.13551 0.30408 0.30408v0.40545c0 0.16852-0.13557 0.30408-0.30408 0.30408h-3.6413l1.5267 1.4545c0.12417 0.11779 0.12669 0.3142 0.0051 0.43456z",fill:"#fff",stroke:"#000",strokeWidth:".15415"})})})}),Object(u.jsx)("h4",{style:{marginTop:"0px"},children:f?"Touch to Restart":"Touch to Start"})]})]})})})}p.addAudio(W),p.addObject(Object(u.jsx)(S,{})),p.addObject(Object(u.jsx)(B,{})),p.setBackground(Object(u.jsx)(F,{})),p.setHud(Object(u.jsx)(L,{})),p.start()}},[[15,1,2]]]);
//# sourceMappingURL=main.1e493c36.chunk.js.map