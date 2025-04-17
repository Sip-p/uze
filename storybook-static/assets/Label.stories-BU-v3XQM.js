import{j as s}from"./jsx-runtime-D_zvdyIk.js";const h=({htmlFor:c,children:d,size:i="md",required:u=!1})=>{const p={sm:"text-sm",md:"text-base"};return s.jsxs("label",{htmlFor:c,className:`${p[i]} text-gray-700 font-medium inline-block`,children:[d,u&&s.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})},g={title:"Components/Label",component:h,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md"]},htmlFor:{control:"text"},required:{control:"boolean"},children:{control:"text"}}},e={args:{children:"Email Address",size:"md",htmlFor:"email",required:!0}},r={args:{children:"Username",size:"sm",htmlFor:"username"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Email Address",
    size: "md",
    htmlFor: "email",
    required: true
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,m,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: "Username",
    size: "sm",
    htmlFor: "username"
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const b=["Default","Small"];export{e as Default,r as Small,b as __namedExportsOrder,g as default};
