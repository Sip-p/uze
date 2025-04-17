import{j as x}from"./jsx-runtime-D_zvdyIk.js";const y=({value:g,onChange:b,placeholder:f="",disabled:o=!1,error:t=!1,type:h="text"})=>x.jsx("input",{type:h,value:g,onChange:b,placeholder:f,disabled:o,"aria-invalid":t,className:`w-full px-3 py-2 border rounded-md text-sm outline-none transition-all
        ${t?"border-red-500":"border-gray-300"}
        ${o?"bg-gray-100 cursor-not-allowed":"bg-white"}
        focus:ring-2 focus:ring-blue-500`}),S={title:"Components/Input",component:y,tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},error:{control:"boolean"},type:{control:"select",options:["text","email","password"]}}},e={args:{placeholder:"Enter your name",disabled:!1,error:!1}},r={args:{placeholder:"Can't type here",disabled:!0}},a={args:{placeholder:"Invalid input",error:!0}};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter your name",
    disabled: false,
    error: false
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Can't type here",
    disabled: true
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,i,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: "Invalid input",
    error: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const v=["Default","Disabled","ErrorState"];export{e as Default,r as Disabled,a as ErrorState,v as __namedExportsOrder,S as default};
