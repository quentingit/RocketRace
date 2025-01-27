import{R as e}from"./index-B-SYruCi.js";const i=({numberRockets:R,selectedRocketNames:k})=>e.createElement("div",{className:"text-lg font-pixel text-neon-blue mb-10 text-center animate-crt-flicker"},e.createElement("p",null,"Total Fusées : ",R),e.createElement("p",null,"Sélectionnées :"," ",e.createElement("span",{className:"text-neon-yellow"},k)));i.__docgenInfo={description:"",methods:[],displayName:"InfoPanel",props:{numberRockets:{required:!0,tsType:{name:"number"},description:""},selectedRocketNames:{required:!0,tsType:{name:"string"},description:""}}};const N={title:"Components/InfoPanel",component:i,parameters:{layout:"centered"},args:{numberRockets:5,selectedRocketNames:"Falcon, Apollo"}},t={},s={args:{numberRockets:5,selectedRocketNames:""}},o={args:{numberRockets:10,selectedRocketNames:"Falcon, Apollo, Dragon, Starship"}};var r,a,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var n,l,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    numberRockets: 5,
    selectedRocketNames: ''
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    numberRockets: 10,
    selectedRocketNames: 'Falcon, Apollo, Dragon, Starship'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const f=["Default","NoRocketsSelected","ManyRocketsSelected"];export{t as Default,o as ManyRocketsSelected,s as NoRocketsSelected,f as __namedExportsOrder,N as default};
