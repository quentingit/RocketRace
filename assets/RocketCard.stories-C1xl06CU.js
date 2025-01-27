import{R as r}from"./index-B-SYruCi.js";import{N as w}from"./nextImageMock-C6ws-YJd.js";import{c as q}from"./clsx-B-dksMZM.js";const y=({rocket:e,isSelected:t,launching:s,onToggleSelection:v})=>{const R=q("relative border-4 rounded-lg p-4 shadow-lg text-center bg-black bg-opacity-75 text-white cursor-pointer transition-transform transform hover:scale-105",t?"neon-border-green":"neon-border-blue",s&&t&&"animate-pulse",t?"selected-rocket":"pulsating selected-rocket",s&&t&&"animate-rocket-launch");return r.createElement("div",{key:e.id,onClick:()=>v(e),className:R},r.createElement(w,{src:e.image,alt:e.name,width:150,height:150,className:"object-contain mx-auto rounded-md neon-rocket-green animate-floating"}),r.createElement("h2",{className:"mt-4 font-pixel text-neon-yellow"},e.name),r.createElement("p",{className:"text-sm font-pixel text-neon-gray"},e.description))};y.__docgenInfo={description:"",methods:[],displayName:"RocketCard",props:{rocket:{required:!0,tsType:{name:"intersection",raw:"Rocket & RocketProgress",elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Rocket';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Rocket'",required:!1}},{key:"description",value:{name:"signature['output']",raw:"Scalars['String']['output']",required:!0}},{key:"id",value:{name:"signature['output']",raw:"Scalars['ID']['output']",required:!0}},{key:"image",value:{name:"signature['output']",raw:"Scalars['String']['output']",required:!0}},{key:"name",value:{name:"signature['output']",raw:"Scalars['String']['output']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  __typename?: 'RocketProgress';
  exploded: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  progress: Scalars['Int']['output'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'RocketProgress'",required:!1}},{key:"exploded",value:{name:"signature['output']",raw:"Scalars['Boolean']['output']",required:!0}},{key:"id",value:{name:"signature['output']",raw:"Scalars['ID']['output']",required:!0}},{key:"progress",value:{name:"signature['output']",raw:"Scalars['Int']['output']",required:!0}}]}}]},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},launching:{required:!0,tsType:{name:"boolean"},description:""},onToggleSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"(rocket: RocketInteraction) => void",signature:{arguments:[{type:{name:"intersection",raw:"Rocket & RocketProgress",elements:[{name:"signature",type:"object",raw:`{
  __typename?: 'Rocket';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'Rocket'",required:!1}},{key:"description",value:{name:"signature['output']",raw:"Scalars['String']['output']",required:!0}},{key:"id",value:{name:"signature['output']",raw:"Scalars['ID']['output']",required:!0}},{key:"image",value:{name:"signature['output']",raw:"Scalars['String']['output']",required:!0}},{key:"name",value:{name:"signature['output']",raw:"Scalars['String']['output']",required:!0}}]}},{name:"signature",type:"object",raw:`{
  __typename?: 'RocketProgress';
  exploded: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  progress: Scalars['Int']['output'];
}`,signature:{properties:[{key:"__typename",value:{name:"literal",value:"'RocketProgress'",required:!1}},{key:"exploded",value:{name:"signature['output']",raw:"Scalars['Boolean']['output']",required:!0}},{key:"id",value:{name:"signature['output']",raw:"Scalars['ID']['output']",required:!0}},{key:"progress",value:{name:"signature['output']",raw:"Scalars['Int']['output']",required:!0}}]}}]},name:"rocket"}],return:{name:"void"}}},description:""}}};const b={title:"Components/RocketCard",component:y,args:{isSelected:!1,launching:!1,onToggleSelection:()=>alert("Toggled!")},argTypes:{onToggleSelection:{action:"clicked"}}},u={id:"1",name:"Falcon 9",description:"Reusable rocket by SpaceX.",image:"/rocket.png"},a={args:{rocket:u}},n={args:{rocket:u,isSelected:!0}},o={args:{rocket:u,isSelected:!0,launching:!0}};var c,i,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    rocket: mockRocket as RocketInteraction
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    rocket: mockRocket as RocketInteraction,
    isSelected: true
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,k,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    rocket: mockRocket as RocketInteraction,
    isSelected: true,
    launching: true
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const x=["Default","Selected","Launching"];export{a as Default,o as Launching,n as Selected,x as __namedExportsOrder,b as default};
