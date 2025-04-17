import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-D4lIrffr.js";const l=({options:t,selectedOption:o,onChange:n,placeholder:s})=>{const[i,d]=c.useState(!1),w=()=>d(!i),x=r=>{n(r),d(!1)};return e.jsxs("div",{className:"relative",children:[e.jsx("button",{className:"p-2 border rounded-md w-full",onClick:w,"aria-haspopup":"listbox","aria-expanded":i,children:o||s}),i&&e.jsx("ul",{className:"absolute w-full bg-white border mt-1 rounded-md shadow-lg z-10",children:t.map((r,C)=>e.jsx("li",{className:"p-2 hover:bg-gray-100 cursor-pointer",onClick:()=>x(r),children:r},C))})]})},j={title:"Components/Dropdown",component:l},a=()=>{const[t,o]=c.useState(""),n=s=>{o(s)};return e.jsx(l,{options:["Option 1","Option 2","Option 3"],selectedOption:t,onChange:n,placeholder:"Select an option"})},p=()=>{const[t,o]=c.useState("Option 2"),n=s=>{o(s)};return e.jsx(l,{options:["Option 1","Option 2","Option 3"],selectedOption:t,onChange:n,placeholder:"Select an option"})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"WithPreselectedOption"};var O,h,u;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (newOption: string) => {
    setSelectedOption(newOption);
  };
  return <Dropdown options={['Option 1', 'Option 2', 'Option 3']} selectedOption={selectedOption} onChange={handleChange} placeholder="Select an option" />;
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,g,S;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [selectedOption, setSelectedOption] = useState('Option 2');
  const handleChange = (newOption: string) => {
    setSelectedOption(newOption);
  };
  return <Dropdown options={['Option 1', 'Option 2', 'Option 3']} selectedOption={selectedOption} onChange={handleChange} placeholder="Select an option" />;
}`,...(S=(g=p.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const b=["Default","WithPreselectedOption"];export{a as Default,p as WithPreselectedOption,b as __namedExportsOrder,j as default};
