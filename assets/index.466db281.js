export function __vite_legacy_guard(){import("data:text/javascript,")}import{s as e,R as t,_ as n,M as r,P as l,l as a,a as o,C as i,r as s,L as c,b as m,c as d,D as p,u,m as h,B as E,A as g,d as f,O as x,W as y,e as b,j as L,F as v,f as _,H as w,g as z}from"./vendor.1ce7eafa.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k={},S=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in k)return;k[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((t,n)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()},C=e.div``,T=()=>t.createElement(C,null,"Loading..."),O=e.div``,I=e.div`
  width: 300px;
  height: 300px;
`,R=e.div`
  background: url("http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 40px;
  color: #000;
  text-align: center;
  line-height: 40px;
`,W=()=>(console.error("d"),t.createElement(I,null,t.createElement(n,{amapkey:"d137b3f7a39c6a29971ee376f76a80a9",center:{longitude:118.939731,latitude:42.261111},zoom:15,dragEnable:!1},t.createElement(r,{title:"千家易宅配",position:{longitude:118.939731,latitude:42.261111}},t.createElement(l,{placement:"top",content:"千家易宅配门店",visible:!0},t.createElement(R,null)))))),P=()=>t.createElement(a.Footer,null,t.createElement(o,null,t.createElement(i,{span:12},t.createElement(W,null)),t.createElement(i,{span:12},"右侧地步")));var $=[{title:"主  页",name:"home",path:"/",isLogo:!1},{title:"商品分类",name:"product",path:"/product",isLogo:!1},{name:"logo",isLogo:!0},{title:"玩转定制",name:"wanzhuandingzhi",path:"/wanzhuandingzhi",isLogo:!1},{title:"品牌实力",name:"topic",path:"/topic",isLogo:!1}];const j=e.div`
  line-height: 74px;
  height: 74px;
`,A=()=>t.createElement(j,null,"千家易宅配"),B=s.exports.createContext({bodyWidth:document.body.clientWidth,scrollTop:0}),M=B.Provider,D=e(c.Header).attrs((e=>({pcBgChangeWhite:e.pcBgChangeWhite})))`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: ${e=>e.pcBgChangeWhite?"white":"transparent !important"};
  height: 74px;
  z-index: 2;
  ${e=>e.pcBgChangeWhite?"box-shadow: 0 0.5rem 1rem rgb(0,0,0,0.01);":""};
  transition: all 0.5s;
`,Y=e(m)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.05em;
  height: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &:hover span {
    color: ${e=>e.theme.PRIMARY} !important;
    transform: translateY(-100%);
  }
  & span {
    line-height: 30px;
    transition: transform 0.3s linear;
  }
  & :nth-child(2) {
    color: ${e=>e.theme.PRIMARY} !important;
  }
  & :nth-child(1) {
    color: ${e=>e.theme.TITLE_COLOR} !important;
  }
`,K=e(d)``,N=e(d)`
  background: transparent !important;
  justify-content: center;
  border: 0;
  color: ${e=>e.theme.TITLE_COLOR};
`,V=e(N.Item)`
  height: 74px;
  min-width: 108px;
  text-align: center;
  display: flex !important;
  justify-content: center;
  align-items: center;
  &.ant-menu-item-disabled {
    cursor: unset !important;
  }
  &.ant-menu-item-selected a > span {
    transform: translateY(-100%);
  }
  &.ant-menu-item::after,
  &.ant-menu-item-selected::after {
    border: 0 !important;
  }
  &.ant-menu-item a {
    color: ${e=>e.theme.TITLE_COLOR};
  }
`,q=e(K.Item)`
  padding: 0 !important;
  &.ant-menu-item-disabled {
    cursor: unset !important;
  }
  & .ant-menu-title-content {
    padding-left: 50px;
    padding-right: 40px;
  }
`,F=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,H=e(p)`
  & .ant-drawer-body {
    padding: 0;
  }
  & .ant-drawer-header {
    padding-left: 40px;
  }
`,U=()=>{const{bodyWidth:e,scrollTop:n}=s.exports.useContext(B),r=s.exports.useMemo((()=>e>=1200),[e]),[l,a]=s.exports.useState(!1),[o,i]=s.exports.useState([]),[c,m]=s.exports.useState([]),d=u(),[p,x]=s.exports.useState(!1);s.exports.useEffect((()=>{const e=h(te,d.pathname),t=[];null!==e&&e.forEach((e=>{let{path:n}=e.route;"/"===n&&(n="home"),n&&t.push(n)})),t.length>1&&"home"===t[0]&&(console.error(t),t.splice(0,1)),i(t),m(t),x(!0)}),[d.pathname]);const[y,b]=s.exports.useState(!1);return s.exports.useEffect((()=>{b(n>150)}),[n]),p?t.createElement(D,{pcBgChangeWhite:y},r?t.createElement(N,{theme:"light",mode:"horizontal",defaultSelectedKeys:o},$.map((e=>e.isLogo?t.createElement(V,{key:e.name,disabled:!0},t.createElement(A,null)):t.createElement(V,{key:e.name},t.createElement(Y,{to:e.path},t.createElement("span",null,e.title),t.createElement("span",null,e.title)))))):t.createElement(F,null,t.createElement(E,{type:"text",onClick:()=>a(!0)},t.createElement(g,{style:{fontSize:"28px"}})),t.createElement(A,null),t.createElement(E,{type:"text",style:{opacity:"0"}},t.createElement(g,{style:{fontSize:"28px"}})),t.createElement(H,{title:t.createElement(A,null),placement:"left",closable:!1,onClose:()=>a(!1),visible:l,bodyStyle:{padding:0},extra:t.createElement(E,{type:"text",onClick:()=>a(!1)},t.createElement(f,null))},t.createElement(K,{theme:"light",mode:"inline",defaultOpenKeys:c,defaultSelectedKeys:o},$.map((e=>e.isLogo?null:t.createElement(q,{key:e.name},t.createElement(Y,{to:e.path},t.createElement("span",null,e.title),t.createElement("span",null,e.title))))))))):null},G=e.div``,J=s.exports.lazy((()=>S((()=>import("./index.b99e01cf.js")),["assets/index.b99e01cf.js","assets/index.406288f4.css","assets/vendor.1ce7eafa.js","assets/vendor.b84d387b.css"]))),Q=s.exports.lazy((()=>S((()=>import("./index.cc2f31f9.js")),["assets/index.cc2f31f9.js","assets/vendor.1ce7eafa.js","assets/vendor.b84d387b.css"]))),X=s.exports.lazy((()=>S((()=>import("./index.3222fa32.js")),["assets/index.3222fa32.js","assets/vendor.1ce7eafa.js","assets/vendor.b84d387b.css"]))),Z=s.exports.lazy((()=>S((()=>import("./index.f15555b3.js")),["assets/index.f15555b3.js","assets/vendor.1ce7eafa.js","assets/vendor.b84d387b.css"]))),ee=e=>t.createElement(s.exports.Suspense,{fallback:t.createElement(T,null)},e),te=[{path:"/",element:t.createElement((()=>t.createElement(G,null,t.createElement(c,{className:"layout"},t.createElement(U,null),t.createElement(x,null),t.createElement(P,null)))),null),children:[{index:!0,element:ee(t.createElement(J,null))},{path:"product",element:ee(t.createElement(Q,null))},{path:"wanzhuandingzhi",element:ee(t.createElement(X,null))},{path:"topic",element:ee(t.createElement(Z,null))},{path:"*",element:t.createElement((()=>t.createElement(O,null,"404")),null)}]}],ne=y`
  body{
    margin: 0;
    padding: 0;
  }
`,re=()=>{const[e,t]=s.exports.useState(document.body.clientWidth||0),[n,r]=s.exports.useState(document.body.scrollTop||0),l=()=>{t(document.body.clientWidth)},a=()=>{r(document.documentElement.scrollTop)};s.exports.useEffect((()=>(window.addEventListener("resize",l),window.addEventListener("scroll",a),()=>{window.removeEventListener("resize",l),window.removeEventListener("scroll",a)})));const o=z(te);return L(M,{value:{bodyWidth:e,scrollTop:n},children:o})};b.render(L(v,{theme:{PRIMARY:"#e99c2e",TITLE_COLOR:"#616060"},children:_(t.StrictMode,{children:[L(ne,{}),L(w,{children:L(re,{})})]})}),document.getElementById("root"));
