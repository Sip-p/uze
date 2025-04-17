import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-D4lIrffr.js";const l=({message:t,type:e,duration:o=3e3,onClose:i})=>{const[S,x]=c.useState(!0);return c.useEffect(()=>{const C=setTimeout(()=>{x(!1),i&&i()},o);return()=>clearTimeout(C)},[o,i]),S?s.jsx("div",{className:`fixed bottom-5 left-5 p-3 rounded-md shadow-lg transition-all duration-300 ${e==="success"?"bg-green-500":e==="error"?"bg-red-500":"bg-gray-500"}`,children:s.jsx("p",{className:"text-white",children:t})}):null},E={title:"Components/Toast",component:l},r=()=>{const[t,e]=c.useState(!0),o=()=>e(!1);return s.jsx(s.Fragment,{children:t&&s.jsx(l,{message:"Success! Your action was completed.",type:"success",onClose:o})})},a=()=>{const[t,e]=c.useState(!0),o=()=>e(!1);return s.jsx(s.Fragment,{children:t&&s.jsx(l,{message:"Error! Something went wrong.",type:"error",onClose:o})})},n=()=>{const[t,e]=c.useState(!0),o=()=>e(!1);return s.jsx(s.Fragment,{children:t&&s.jsx(l,{message:"Info: This is an informational message.",type:"info",onClose:o})})};r.__docgenInfo={description:"",methods:[],displayName:"SuccessToast"};a.__docgenInfo={description:"",methods:[],displayName:"ErrorToast"};n.__docgenInfo={description:"",methods:[],displayName:"InfoToast"};var m,u,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [showToast, setShowToast] = useState(true);
  const handleClose = () => setShowToast(false);
  return <>\r
      {showToast && <Toast message="Success! Your action was completed." type="success" onClose={handleClose} />}\r
    </>;
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,T,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [showToast, setShowToast] = useState(true);
  const handleClose = () => setShowToast(false);
  return <>\r
      {showToast && <Toast message="Error! Something went wrong." type="error" onClose={handleClose} />}\r
    </>;
}`,...(p=(T=a.parameters)==null?void 0:T.docs)==null?void 0:p.source}}};var f,g,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [showToast, setShowToast] = useState(true);
  const handleClose = () => setShowToast(false);
  return <>\r
      {showToast && <Toast message="Info: This is an informational message." type="info" onClose={handleClose} />}\r
    </>;
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const I=["SuccessToast","ErrorToast","InfoToast"];export{a as ErrorToast,n as InfoToast,r as SuccessToast,I as __namedExportsOrder,E as default};
