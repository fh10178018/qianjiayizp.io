import{s as e,R as t,h as a}from"./vendor.1ce7eafa.js";var r={carousel:[{url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstaticqn.qizuang.com%2Fmeitu%2F20200804%2F5f292846484e5-s5.jpg&refer=http%3A%2F%2Fstaticqn.qizuang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656586570&t=3be3aa4b6085ca5b665967236f589d5b"},{url:"https://img0.baidu.com/it/u=1234296081,3600749702&fm=253&fmt=auto&app=120&f=JPEG?w=888&h=500"},{url:"https://img0.baidu.com/it/u=1234296081,3600749702&fm=253&fmt=auto&app=120&f=JPEG?w=888&h=500"}]};const u=e.div``,c=e.div.attrs((e=>({url:e.url})))`
  height: 100vh;
  width: 100vw;
  display: block;
  background: url(${e=>e.url});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
`,o=({carousel:e})=>t.createElement(u,null,t.createElement(a,{autoplay:!0},e.map(((e,a)=>t.createElement("div",{key:a},t.createElement(c,{url:e.url})))))),l=e.div``,i=()=>t.createElement(l,null,t.createElement(o,{carousel:r.carousel}));export{i as default};
