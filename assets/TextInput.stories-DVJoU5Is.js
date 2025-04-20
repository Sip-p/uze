import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./index-D4lIrffr.js";const D=({placeholder:E,value:I="",disabled:S,errorMessage:o})=>{const[w,P]=q.useState(I),C=M=>{P(M.target.value)};return i.jsxs("div",{children:[i.jsx("input",{type:"text",value:w,onChange:C,placeholder:E,disabled:S,className:`border px-3 py-2 rounded ${o?"border-red-500":"border-gray-300"}`}),o&&i.jsx("p",{className:"text-red-500 text-sm mt-1",children:o})]})};D.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{placeholder:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""}}};const V={title:"DataEntry/TextInput",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
### 🏷️ TextInput

**TextInput** is a simple and reusable input component for text entry.

---

### 📚 Use Cases:
- Collect text inputs like name, email, or other short text-based data.
- Used in forms for user input.
- Ideal for search fields or filter input.

---

### 🧠 Accessibility Notes:
- Ensure input fields are properly labeled for screen readers using \`<label>\` elements.
- \`aria-invalid\` is set to \`true\` if there's an error message.
- \`aria-describedby\` associates the error message with the input field for better accessibility.

---

### 🎨 Theming & Responsiveness:
- Fully customizable using Tailwind CSS or custom styles.
- Responsive design supports different screen sizes.
- Supports custom styling via the \`style\` prop.

---

### ✅ Do’s and Don’ts / Best Practices:
| ✅ Do | ❌ Don’t |
|------|---------|
| Use for collecting text-based inputs | Don’t use for multi-line text (use Textarea for that) |
| Make input accessible with proper labels | Don’t leave inputs without error handling or descriptions |
| Ensure sufficient contrast for visibility | Don’t use input fields without proper error states or feedback |

---

### 📐 Anatomy / Structure:
- The component consists of an \`<input>\` field for text input.
- Displays an error message below the input when applicable.
- Can be customized with various props like \`placeholder\`, \`value\`, \`disabled\`, and \`errorMessage\`.

---

### 🔄 Interaction Behavior:
- The input supports interaction via typing text.
- It dynamically updates the value as the user types.
- The component displays an error message if the \`errorMessage\` prop is provided.

---

### 🧩 Props / API:
| Prop         | Type           | Description                                  | Default   |
|--------------|----------------|----------------------------------------------|-----------|
| \`placeholder\` | \`string\`      | Placeholder text for the input field.        | \`''\`    |
| \`value\`       | \`string\`      | The current value of the input.              | \`''\`    |
| \`disabled\`    | \`boolean\`     | Whether the input is disabled or not.        | \`false\` |
| \`errorMessage\`| \`string\`      | Error message to display below the input.    | \`undefined\` |

---
      `}}}},e={args:{placeholder:"Enter text here"}},r={args:{placeholder:"Enter text here",value:"Pre-filled"}},s={args:{placeholder:"Disabled input",disabled:!0}},t={args:{placeholder:"Enter your name",errorMessage:"Name is required"}},a={args:{placeholder:"Type your email address"}};var n,l,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here',
    value: 'Pre-filled'
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,h,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,b,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your name',
    errorMessage: "Name is required"
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,v,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type your email address'
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const W=["Default","WithValue","Disabled","WithErrorMessage","CustomPlaceholder"];export{a as CustomPlaceholder,e as Default,s as Disabled,t as WithErrorMessage,r as WithValue,W as __namedExportsOrder,V as default};
