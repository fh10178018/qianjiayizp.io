!function(){var e,n,t,r,l,o,a,i,c,u,m,s,d,p,f;function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,l,o=[],a=!0,i=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){i=!0,l=c}finally{try{a||null==t.return||t.return()}finally{if(i)throw l}}return o}(e,n)||E(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function E(e,n){if(e){if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./vendor-legacy.0daeb712.js"],(function(E,y){"use strict";var x,b,v,w,z,L,S,C,j,O,k,T,I,W,R,A,B,M,P,Y,_,K,F,H,D,N;return{setters:[function(e){x=e.s,b=e.R,v=e._,w=e.M,z=e.P,L=e.l,S=e.a,C=e.C,j=e.r,O=e.L,k=e.b,T=e.c,I=e.D,W=e.u,R=e.m,A=e.B,B=e.A,M=e.d,P=e.O,Y=e.W,_=e.e,K=e.j,F=e.F,H=e.f,D=e.H,N=e.g}],execute:function(){var E=function(e,n){return e()},U=x.div(e||(e=g([""]))),$=function(){return b.createElement(U,null,"Loading...")},q=x.div(n||(n=g([""]))),G=x.div(t||(t=g(["\n  width: 300px;\n  height: 300px;\n"]))),J=x.div(r||(r=g(['\n  background: url("http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 40px;\n  color: #000;\n  text-align: center;\n  line-height: 40px;\n']))),Q=function(){return console.error("d"),b.createElement(G,null,b.createElement(v,{amapkey:"d137b3f7a39c6a29971ee376f76a80a9",center:{longitude:118.939731,latitude:42.261111},zoom:15,dragEnable:!1},b.createElement(w,{title:"千家易宅配",position:{longitude:118.939731,latitude:42.261111}},b.createElement(z,{placement:"top",content:"千家易宅配门店",visible:!0},b.createElement(J,null)))))},V=function(){return b.createElement(L.Footer,null,b.createElement(S,null,b.createElement(C,{span:12},b.createElement(Q,null)),b.createElement(C,{span:12},"右侧地步")))},X=[{title:"主  页",name:"home",path:"/",isLogo:!1},{title:"商品分类",name:"product",path:"/product",isLogo:!1},{name:"logo",isLogo:!0},{title:"玩转定制",name:"wanzhuandingzhi",path:"/wanzhuandingzhi",isLogo:!1},{title:"品牌实力",name:"topic",path:"/topic",isLogo:!1}],Z=x.div(l||(l=g(["\n  line-height: 74px;\n  height: 74px;\n"]))),ee=function(){return b.createElement(Z,null,"千家易宅配")},ne=j.exports.createContext({bodyWidth:document.body.clientWidth,scrollTop:0}),te=ne.Provider,re=x(O.Header).attrs((function(e){return{pcBgChangeWhite:e.pcBgChangeWhite}}))(o||(o=g(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  background: ",";\n  height: 74px;\n  z-index: 2;\n  ",";\n  transition: all 0.5s;\n"])),(function(e){return e.pcBgChangeWhite?"white":"transparent !important"}),(function(e){return e.pcBgChangeWhite?"box-shadow: 0 0.5rem 1rem rgb(0,0,0,0.01);":""})),le=x(k)(a||(a=g(["\n  font-size: 16px;\n  font-weight: 500;\n  text-decoration: none;\n  letter-spacing: 0.05em;\n  height: 30px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  &:hover span {\n    color: "," !important;\n    transform: translateY(-100%);\n  }\n  & span {\n    line-height: 30px;\n    transition: transform 0.3s linear;\n  }\n  & :nth-child(2) {\n    color: "," !important;\n  }\n  & :nth-child(1) {\n    color: "," !important;\n  }\n"])),(function(e){return e.theme.PRIMARY}),(function(e){return e.theme.PRIMARY}),(function(e){return e.theme.TITLE_COLOR})),oe=x(T)(i||(i=g([""]))),ae=x(T)(c||(c=g(["\n  background: transparent !important;\n  justify-content: center;\n  border: 0;\n  color: ",";\n"])),(function(e){return e.theme.TITLE_COLOR})),ie=x(ae.Item)(u||(u=g(["\n  height: 74px;\n  min-width: 108px;\n  text-align: center;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  &.ant-menu-item-disabled {\n    cursor: unset !important;\n  }\n  &.ant-menu-item-selected a > span {\n    transform: translateY(-100%);\n  }\n  &.ant-menu-item::after,\n  &.ant-menu-item-selected::after {\n    border: 0 !important;\n  }\n  &.ant-menu-item a {\n    color: ",";\n  }\n"])),(function(e){return e.theme.TITLE_COLOR})),ce=x(oe.Item)(m||(m=g(["\n  padding: 0 !important;\n  &.ant-menu-item-disabled {\n    cursor: unset !important;\n  }\n  & .ant-menu-title-content {\n    padding-left: 50px;\n    padding-right: 40px;\n  }\n"]))),ue=x.div(s||(s=g(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),me=x(I)(d||(d=g(["\n  & .ant-drawer-body {\n    padding: 0;\n  }\n  & .ant-drawer-header {\n    padding-left: 40px;\n  }\n"]))),se=function(){var e=j.exports.useContext(ne),n=e.bodyWidth,t=e.scrollTop,r=j.exports.useMemo((function(){return n>=1200}),[n]),l=h(j.exports.useState(!1),2),o=l[0],a=l[1],i=h(j.exports.useState([]),2),c=i[0],u=i[1],m=h(j.exports.useState([]),2),s=m[0],d=m[1],p=W(),f=h(j.exports.useState(!1),2),g=f[0],E=f[1];j.exports.useEffect((function(){var e=R(ye,p.pathname),n=[];null!==e&&e.forEach((function(e){var t=e.route.path;"/"===t&&(t="home"),t&&n.push(t)})),n.length>1&&"home"===n[0]&&(console.error(n),n.splice(0,1)),u(n),d(n),E(!0)}),[p.pathname]);var y=h(j.exports.useState(!1),2),x=y[0],v=y[1];return j.exports.useEffect((function(){v(t>150)}),[t]),g?b.createElement(re,{pcBgChangeWhite:x},r?b.createElement(ae,{theme:"light",mode:"horizontal",defaultSelectedKeys:c},X.map((function(e){return e.isLogo?b.createElement(ie,{key:e.name,disabled:!0},b.createElement(ee,null)):b.createElement(ie,{key:e.name},b.createElement(le,{to:e.path},b.createElement("span",null,e.title),b.createElement("span",null,e.title)))}))):b.createElement(ue,null,b.createElement(A,{type:"text",onClick:function(){return a(!0)}},b.createElement(B,{style:{fontSize:"28px"}})),b.createElement(ee,null),b.createElement(A,{type:"text",style:{opacity:"0"}},b.createElement(B,{style:{fontSize:"28px"}})),b.createElement(me,{title:b.createElement(ee,null),placement:"left",closable:!1,onClose:function(){return a(!1)},visible:o,bodyStyle:{padding:0},extra:b.createElement(A,{type:"text",onClick:function(){return a(!1)}},b.createElement(M,null))},b.createElement(oe,{theme:"light",mode:"inline",defaultOpenKeys:s,defaultSelectedKeys:c},X.map((function(e){return e.isLogo?null:b.createElement(ce,{key:e.name},b.createElement(le,{to:e.path},b.createElement("span",null,e.title),b.createElement("span",null,e.title)))})))))):null},de=x.div(p||(p=g([""]))),pe=j.exports.lazy((function(){return E((function(){return y.import("./index-legacy.0db5c674.js")}))})),fe=j.exports.lazy((function(){return E((function(){return y.import("./index-legacy.684a3dd1.js")}))})),he=j.exports.lazy((function(){return E((function(){return y.import("./index-legacy.5b4b3706.js")}))})),ge=j.exports.lazy((function(){return E((function(){return y.import("./index-legacy.1a1ba9b8.js")}))})),Ee=function(e){return b.createElement(j.exports.Suspense,{fallback:b.createElement($,null)},e)},ye=[{path:"/",element:b.createElement((function(){return b.createElement(de,null,b.createElement(O,{className:"layout"},b.createElement(se,null),b.createElement(P,null),b.createElement(V,null)))}),null),children:[{index:!0,element:Ee(b.createElement(pe,null))},{path:"product",element:Ee(b.createElement(fe,null))},{path:"wanzhuandingzhi",element:Ee(b.createElement(he,null))},{path:"topic",element:Ee(b.createElement(ge,null))},{path:"*",element:b.createElement((function(){return b.createElement(q,null,"404")}),null)}]}],xe=Y(f||(f=g(["\n  body{\n    margin: 0;\n    padding: 0;\n  }\n"]))),be=function(){var e=h(j.exports.useState(document.body.clientWidth||0),2),n=e[0],t=e[1],r=h(j.exports.useState(document.body.scrollTop||0),2),l=r[0],o=r[1],a=function(){t(document.body.clientWidth)},i=function(){o(document.documentElement.scrollTop)};j.exports.useEffect((function(){return window.addEventListener("resize",a),window.addEventListener("scroll",i),function(){window.removeEventListener("resize",a),window.removeEventListener("scroll",i)}}));var c=N(ye);return K(te,{value:{bodyWidth:n,scrollTop:l},children:c})};_.render(K(F,{theme:{PRIMARY:"#e99c2e",TITLE_COLOR:"#616060"},children:H(b.StrictMode,{children:[K(xe,{}),K(D,{children:K(be,{})})]})}),document.getElementById("root"))}}}))}();