import{j as i}from"./jsx-runtime-D_zvdyIk.js";const v=({isOpen:D,title:S,content:k})=>D?i.jsxs("div",{style:{border:"1px solid black",padding:"16px",background:"white"},children:[i.jsx("h2",{children:S}),i.jsx("p",{children:k})]}):null;v.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"string"},description:""}}};const E={title:"Feedback/Modal",component:v,tags:["autodocs"],parameters:{docs:{description:{component:`### 🏷️ Component: Modal
The **Modal** component is a dialog box that appears on top of the content to capture the user's attention. It is used for confirmations, forms, important messages, or focused interactions that require the user to act before proceeding further.

---

### 🧩 Anatomy / Structure
\`\`\`tsx
<Modal isOpen={true} title="Modal Title" content="This is the content of the modal" />
\`\`\`
- The modal typically contains a **title**, **content**, and a **close button**.
- It can be controlled by the \`isOpen\` prop to toggle visibility.
- Customizable with various props for content, actions, and accessibility.

---

### 📋 Props / API
| Prop     | Type     | Default | Description                                               |
|----------|----------|---------|-----------------------------------------------------------|
| isOpen   | boolean  | false   | Determines whether the modal is visible or not.            |
| title    | string   | -       | The title displayed at the top of the modal.               |
| content  | string   | -       | The content to display inside the modal.                   |
| onClose  | function | -       | A callback function triggered when the modal is closed.    |

---

### 📦 Use Cases
- Displaying critical messages or confirmations.
- User forms or custom user input dialogs.
- Warning or alert messages that require immediate user attention.

---

### 🔄 States & Variants
- **Open**: When \`isOpen={true}\`, the modal appears.
- **Closed**: When \`isOpen={false}\`, the modal is hidden.
- **Custom Content**: The modal can handle custom content such as forms or long text.
- **Title-Only**: The modal can show just a title without any content.

---

### 🔄 Interaction Behavior
- The modal opens when the \`isOpen\` prop is \`true\`.
- The modal can be closed via a close button or programmatically using the \`onClose\` prop.
- It is typically used to ensure the user addresses a particular task before proceeding.

---

### ♿ Accessibility Notes (ARIA, Focus Management)
- The modal should be focusable and trap keyboard navigation inside it while open.
- Use \`aria-labelledby\` to associate the modal title with the modal dialog for better screen reader support.
- Ensure the modal is closed when the user dismisses it (e.g., using a close button or pressing Escape).

**Example**:
\`\`\`tsx
<Modal isOpen={true} title="Confirmation" content="Are you sure you want to proceed?" onClose={handleClose} />
\`\`\`

---

### 🎨 Theming / Responsiveness Support
- The modal supports responsive design and adapts to various screen sizes.
- You can apply custom styling to the modal using the \`className\` prop or theme settings.

Example:
\`\`\`tsx
<Modal isOpen={true} title="Responsive Modal" content="This modal is responsive." className="w-full sm:w-1/2 lg:w-1/3" />
\`\`\`

---

### ✅ Do’s and Don’ts / Best Practices
#### ✅ Do’s:
- ✅ Use modals for essential user interactions such as confirmations, forms, or alerts.
- ✅ Ensure modals are dismissible either by a close button or other accessible means.
- ✅ Make sure the modal content is concise and focused on a single task.

#### 🚫 Don’ts:
- ❌ Don’t overload modals with too much information or content.
- ❌ Don’t use modals for non-essential information that could be displayed elsewhere.
  
      `}}}},e={args:{isOpen:!0,title:"Modal Title",content:"This is a modal content"}},t={args:{isOpen:!0,title:"Custom Modal Title",content:"Here is some custom content for this modal."}},o={args:{isOpen:!0,title:"Closed Modal",content:"This modal is not open."}},s={args:{isOpen:!0,title:"Long Content Modal",content:`This is a modal with a longer content to demonstrate how the modal handles more text. 
              You can see here that the content is longer than usual, which might cause the modal to grow in size, depending on the styling applied to it. 
              This can be useful for testing how modals behave with varying content lengths.`}},n={args:{isOpen:!0,title:"Only Title Modal",content:""}},a={args:{isOpen:!0,title:"Modal with Close Button",content:"This modal includes a close button that will allow you to close it."}};var r,l,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Modal Title',
    content: 'This is a modal content'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Custom Modal Title',
    content: 'Here is some custom content for this modal.'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,h,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Closed Modal',
    content: 'This modal is not open.'
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,y,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Long Content Modal',
    content: \`This is a modal with a longer content to demonstrate how the modal handles more text. 
              You can see here that the content is longer than usual, which might cause the modal to grow in size, depending on the styling applied to it. 
              This can be useful for testing how modals behave with varying content lengths.\`
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,w,M;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Only Title Modal',
    content: ''
  }
}`,...(M=(w=n.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var C,O,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: 'Modal with Close Button',
    content: 'This modal includes a close button that will allow you to close it.'
  }
}`,...(x=(O=a.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};const I=["Default","WithCustomContent","ClosedModal","LongContentModal","TitleOnlyModal","ModalWithCloseButton"];export{o as ClosedModal,e as Default,s as LongContentModal,a as ModalWithCloseButton,n as TitleOnlyModal,t as WithCustomContent,I as __namedExportsOrder,E as default};
