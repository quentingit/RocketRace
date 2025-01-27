import{R as r}from"./index-B-SYruCi.js";import{I as m}from"./image-BsBPtjSv.js";import"./use-merged-ref-B6IZN_wr.js";import"./jsx-runtime-BEh3FTX5.js";import"./index-C-aVi5AG.js";const s=({ships:i})=>r.createElement("div",{className:"absolute inset-0 overflow-hidden z-0"},i.map(e=>r.createElement("div",{key:e.id,className:"absolute animate-fly-up",style:{left:`${e.left}%`,bottom:"-10%",animationDuration:`${e.duration}s`}},r.createElement(m,{src:"/rocket.png",alt:"Rocket",width:e.size,height:e.size,className:"object-contain neon-rocket-yellow transition-transform hover:scale-110"}))));s.__docgenInfo={description:"",methods:[],displayName:"RocketShips",props:{ships:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  left: number;
  bottom: number;
  duration: number;
  size: number;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"duration",value:{name:"number",required:!0}},{key:"size",value:{name:"number",required:!0}}]}}],raw:"Ship[]"},description:""}}};const f={title:"Components/RocketShips",component:s,parameters:{layout:"fullscreen"}},u=[{id:1,left:20,size:50,duration:5,bottom:0},{id:2,left:50,size:70,duration:7,bottom:0},{id:3,left:80,size:40,duration:4,bottom:0}],t={args:{ships:u}};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ships: mockShips
  }
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,f as default};
