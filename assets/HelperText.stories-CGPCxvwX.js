import{j as T}from"./jsx-runtime-D_zvdyIk.js";const f=({children:y,className:x})=>T.jsx("span",{className:x,children:y});f.__docgenInfo={description:"",methods:[],displayName:"HelperText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Typography/HelperText",component:f,tags:["autodocs"],parameters:{docs:{description:{component:`
### HelperText Component

The \`HelperText\` component displays small bits of supportive information — like error messages, hints, or success feedback. Commonly used in forms or UI fields.

---

### ✅ Props / API

- \`children\` (\`ReactNode\`, **required**): The text or content displayed inside the component.
- \`className\` (\`string\`, optional): Tailwind CSS classes for custom styling.

---

### ✅ Use Cases

- Showing helper messages below input fields.
- Displaying validation error or success messages.
- Giving users contextual info in forms or cards.

---

### ✅ Anatomy / Structure

- Root element: \`<span>\`
- Accepts Tailwind classes for full customization

---

### ✅ States & Variants

- **Default**: Neutral helper message
- **Error**: Red-colored error feedback
- **Success**: Green-colored confirmation
- **Info**: Blue informational note

---

### ✅ Interaction Behavior

- This component is passive — used purely for displaying messages, without any interactive behavior.
- It can be conditionally shown/hidden based on form validation logic.

---

### ✅ Accessibility Notes

- Semantic \`<span>\` ensures it's screen-reader friendly.
- Ensure readable color contrast.
- Use \`aria-live="polite"\` or similar attributes externally if you want dynamic updates to be announced.

---

### ✅ Theming / Responsiveness

- Fully customizable using Tailwind's utility classes.
- Easily adapt size, margin, color for responsive UI.

---

### ✅ Do’s and Don’ts

**✅ Do’s:**
- Use to give context or feedback to user actions.
- Keep the message brief and informative.
- Use Tailwind classes for consistent theming.

**❌ Don’ts:**
- Don’t use for long content — keep it short.
- Don’t add logic or interactivity inside this component.
        `}}}},e={args:{children:"This is helper text",className:"text-gray-700"}},s={args:{children:"This is an error message",className:"text-red-500"}},r={args:{children:"This is a success message",className:"text-green-50"}},a={args:{children:"This is an informational message",className:"text-blue-500"}};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'This is helper text',
    className: 'text-gray-700'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,c,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'This is an error message',
    className: 'text-red-500'
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'This is a success message',
    className: "text-green-50"
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'This is an informational message',
    className: 'text-blue-500'
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const v=["Default","Error","Success","Info"];export{e as Default,s as Error,a as Info,r as Success,v as __namedExportsOrder,N as default};
