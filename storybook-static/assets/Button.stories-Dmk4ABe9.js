import{j as y}from"./jsx-runtime-D_zvdyIk.js";const c=({children:d,variant:m="primary",onClick:l})=>{const p="px-4 py-2 rounded font-semibold",u={primary:"bg-blue-600 text-white hover:bg-blue-700",secondary:"bg-gray-400 text-white hover:bg-gray-500"};return y.jsx("button",{className:`${p} ${u[m]}`,onClick:l,children:d})};c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const b={title:"Components/Button",component:c,tags:["autodocs"]},e={args:{label:"Click Me",variant:"primary"}},r={args:{label:"Secondary",variant:"secondary"}};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: "Click Me",
    variant: "primary"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    variant: "secondary"
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const v=["Primary","Secondary"];export{e as Primary,r as Secondary,v as __namedExportsOrder,b as default};
