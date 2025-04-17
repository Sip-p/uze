import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-D4lIrffr.js";const l=({value:e,onChange:a,placeholder:t})=>o.jsx("input",{type:"text",value:e,onChange:n=>a(n.target.value),placeholder:t,className:"p-2 border rounded-md"}),V={title:"Components/TextInput",component:l},s=()=>{const[e,a]=m.useState(""),t=n=>{a(n)};return o.jsx(l,{value:e,onChange:t,placeholder:"Enter text here"})},r=()=>{const[e,a]=m.useState("Initial value"),t=n=>{a(n)};return o.jsx(l,{value:e,onChange:t,placeholder:"This is a placeholder"})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"WithInitialValue"};var u,c,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return <TextInput value={value} onChange={handleChange} placeholder="Enter text here" />;
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,d,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('Initial value');
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return <TextInput value={value} onChange={handleChange} placeholder="This is a placeholder" />;
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const v=["Default","WithInitialValue"];export{s as Default,r as WithInitialValue,v as __namedExportsOrder,V as default};
