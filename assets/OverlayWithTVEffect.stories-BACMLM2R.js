import{R as t}from"./index-B-SYruCi.js";const m=({isPoweringOn:n,onClose:u,buttonText:d="Allumer !"})=>t.createElement("div",{className:`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center ${n?"animate-tv-power-on":""}`},t.createElement("div",{className:"absolute inset-0 bg-stripes opacity-25 pointer-events-none"}),!n&&t.createElement("button",{onClick:u,className:"text-5xl mb-10 md:text-6xl font-extrabold text-neon-green tracking-widest animate-crt-flicker-button"},d));m.__docgenInfo={description:"",methods:[],displayName:"OverlayWithTVEffect",props:{isPoweringOn:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},buttonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Allumer !'",computed:!1}}}};const f={title:"Components/OverlayWithTVEffect",component:m,args:{isPoweringOn:!1,buttonText:"Allumer !"}},e={args:{isPoweringOn:!1,onClose:()=>alert("Overlay fermé !")}},r={args:{isPoweringOn:!0,onClose:()=>alert("Overlay en cours de démarrage !")}};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    isPoweringOn: false,
    onClose: () => alert('Overlay fermé !')
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,l,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isPoweringOn: true,
    onClose: () => alert('Overlay en cours de démarrage !')
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const g=["Default","PoweringOn"];export{e as Default,r as PoweringOn,g as __namedExportsOrder,f as default};
