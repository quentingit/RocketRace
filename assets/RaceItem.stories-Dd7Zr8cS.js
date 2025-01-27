import{R as r}from"./index-B-SYruCi.js";import{L as y}from"./link-C7295PTN.js";import{I as f}from"./image-BsBPtjSv.js";import"./use-merged-ref-B6IZN_wr.js";import"./jsx-runtime-BEh3FTX5.js";import"./index-C-aVi5AG.js";const v=(e,t,s)=>e?e===t.id?t.name:s.name:"Course en cours",d=({race:e})=>{const t=[e.rocket1,e.rocket2],s=v(e.winner,e.rocket1,e.rocket2),k=t.map(a=>r.createElement("div",{key:a.id,className:"flex flex-col items-center"},r.createElement(f,{src:a.image,alt:a.name,width:100,height:100,className:"rounded-md"}),r.createElement("p",{className:"mt-2 text-neon-yellow"},a.name)));return r.createElement("li",{key:e.id,className:"border-b border-gray-700 pb-4 hover:bg-gray-800 transition"},r.createElement(y,{href:`/race/${e.id}`,rel:"noopener noreferrer",className:"block p-4"},r.createElement("p",{className:"text-xl mb-2"},"Course ID : ",e.id),r.createElement("div",{className:"flex mt-4"},r.createElement("div",{className:"flex space-x-10"},k),r.createElement("div",{className:"flex items-center ml-10 border-l-2 border-neon-green pl-6"},r.createElement("span",{className:"text-2xl font-bold text-neon-blue mr-2"},"Gagnant :"),r.createElement("span",{className:"text-2xl font-bold text-neon-green"},s)))))};d.__docgenInfo={description:"",methods:[],displayName:"RaceItem",props:{race:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  __typename?: 'Race';
  id: Scalars['ID']['output'];
  rocket1: RocketProgress;
  rocket2: RocketProgress;
  winner?: Maybe<Scalars['ID']['output']>;
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Race'",required:!1}},{key:"id",value:{name:"signature['output']",raw:"Scalars['ID']['output']",required:!0}},{key:"rocket1",value:{name:"signature",type:"object",raw:`{
  __typename?: 'RocketProgress';
  exploded: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  progress: Scalars['Int']['output'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'RocketProgress'",required:!1}},{key:"exploded",value:{name:"signature['output']",raw:"Scalars['Boolean']['output']",required:!0}},{key:"id",value:{name:"signature['output']",raw:"Scalars['ID']['output']",required:!0}},{key:"progress",value:{name:"signature['output']",raw:"Scalars['Int']['output']",required:!0}}]},required:!0}},{key:"rocket2",value:{name:"signature",type:"object",raw:`{
  __typename?: 'RocketProgress';
  exploded: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  progress: Scalars['Int']['output'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'RocketProgress'",required:!1}},{key:"exploded",value:{name:"signature['output']",raw:"Scalars['Boolean']['output']",required:!0}},{key:"id",value:{name:"signature['output']",raw:"Scalars['ID']['output']",required:!0}},{key:"progress",value:{name:"signature['output']",raw:"Scalars['Int']['output']",required:!0}}]},required:!0}},{key:"winner",value:{name:"union",raw:"T | null",elements:[{name:"signature['output']",raw:"Scalars['ID']['output']"},{name:"null"}],required:!1}}]}},description:""}}};const q={title:"Components/RaceItem",component:d,tags:["autodocs"]},w={id:"rocket-1",name:"Falcon 9",image:"/rocket.png",description:""},x={id:"rocket-2",name:"Starship",image:"/rocket.png",description:""},g={id:"race-123",rocket1:w,rocket2:x,winner:"rocket-1"},n={args:{race:g}},o={args:{race:{...g,winner:null}}};var u,c,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    race: mockRace
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,m,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    race: {
      ...mockRace,
      winner: null // No winner scenario
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const E=["Default","NoWinner"];export{n as Default,o as NoWinner,E as __namedExportsOrder,q as default};
