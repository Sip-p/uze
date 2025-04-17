import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-D4lIrffr.js";const d=({isOpen:t,onClose:n,title:s,children:o,onConfirm:r,confirmText:f="Confirm",cancelText:b="Cancel"})=>t?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-sm w-full",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold",children:s}),e.jsx("button",{onClick:n,className:"text-gray-600 font-semibold text-xl",children:"×"})]}),e.jsx("div",{className:"mb-4",children:o}),e.jsxs("div",{className:"flex justify-end gap-4",children:[e.jsx("button",{onClick:n,className:"px-4 py-2 bg-gray-200 text-gray-800 rounded-md",children:b}),e.jsx("button",{onClick:r,className:"px-4 py-2 bg-blue-500 text-white rounded-md",children:f})]})]})}):null,j={title:"Components/Modal",component:d},a=()=>{const[t,n]=x.useState(!1),s=()=>n(!0),o=()=>n(!1),r=()=>{alert("Confirmed!"),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:s,className:"px-4 py-2 bg-blue-500 text-white rounded-md",children:"Open Modal"}),e.jsx(d,{isOpen:t,onClose:o,onConfirm:r,title:"Confirmation",children:e.jsx("p",{children:"Are you sure you want to proceed?"})})]})},l=()=>{const[t,n]=x.useState(!1),s=()=>n(!0),o=()=>n(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:s,className:"px-4 py-2 bg-blue-500 text-white rounded-md",children:"Open Modal"}),e.jsx(d,{isOpen:t,onClose:o,onConfirm:()=>{},title:"Information",confirmText:"",cancelText:"",children:e.jsx("p",{children:"This modal does not have confirm/cancel buttons."})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"WithoutButtons"};var i,c,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    alert('Confirmed!');
    setIsOpen(false);
  };
  return <>\r
      <button onClick={handleOpen} className="px-4 py-2 bg-blue-500 text-white rounded-md">Open Modal</button>\r
      <Modal isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm} title="Confirmation">\r
        <p>Are you sure you want to proceed?</p>\r
      </Modal>\r
    </>;
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return <>\r
      <button onClick={handleOpen} className="px-4 py-2 bg-blue-500 text-white rounded-md">Open Modal</button>\r
      <Modal isOpen={isOpen} onClose={handleClose} onConfirm={() => {}} title="Information" confirmText="" cancelText="">\r
        <p>This modal does not have confirm/cancel buttons.</p>\r
      </Modal>\r
    </>;
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const g=["Default","WithoutButtons"];export{a as Default,l as WithoutButtons,g as __namedExportsOrder,j as default};
