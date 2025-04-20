import{j as c}from"./jsx-runtime-D_zvdyIk.js";const g=({label:C,checked:n=!1,onChange:x,disabled:y=!1,className:T=""})=>c.jsxs("div",{className:`flex items-center ${T}`,children:[c.jsx("input",{type:"checkbox",checked:n,onChange:x,disabled:y,className:"mr-2","aria-checked":n?"true":"false"}),c.jsx("label",{children:C})]});g.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const A={component:g,title:"DataEntry/Checkbox",tags:["autodocs"],parameters:{docs:{description:{component:`
### 🏷️ Component: Checkbox
The **Checkbox** component is used to toggle a binary state (checked/unchecked). It is commonly used for agreeing to terms and conditions, choosing options in a form, etc.

---

### 🧩 Anatomy / Structure
\`\`\`tsx
<Checkbox label="Accept Terms and Conditions" checked={false} />
\`\`\`
- Renders a native \`<input type="checkbox" />\` with an associated label.
- Accepts \`label\` (text to display) and \`checked\` (boolean to represent checked/unchecked state) as props.
- The component is styled to adapt to the overall theme of the application.

---

### 📋 Props / API
| Prop     | Type    | Default | Description                                   |
|----------|---------|---------|-----------------------------------------------|
| label    | string  | -       | The label text for the checkbox               |
| checked  | boolean | false   | Determines whether the checkbox is checked    |
| onChange | function| -       | Callback function to handle change events     |

---

### 📦 Use Cases
- Accepting Terms and Conditions in forms.
- Selecting preferences in settings.
- Checkbox groups (multiple choices) in surveys.

---

### 🔄 States & Variants
- **Unchecked**: Default state when \`checked={false}\`.
- **Checked**: Activated state when \`checked={true}\`.
- **Disabled**: Checkbox can be disabled with \`disabled={true}\` to prevent interaction.

---

### 🔄 Interaction Behavior
- Toggles between checked and unchecked when clicked.
- Can be controlled via the \`checked\` prop and \`onChange\` callback.

---

### ♿ Accessibility Notes (ARIA, Focus Management)
- The checkbox is focusable and interactive.
- Use \`aria-checked\` for custom accessibility in dynamic components.
- Ensure to pair checkbox with a label for better accessibility.

**Example**:
\`\`\`tsx
<Checkbox label="Subscribe to Newsletter" checked={true} onChange={handleCheckboxChange} />
\`\`\`

---

### 🎨 Theming / Responsiveness Support
- The component adapts to your theme by passing styles via the \`className\` or using Tailwind CSS for responsiveness.
- You can style the checkbox with colors or icons based on the checked state.

Example:
\`\`\`tsx
<Checkbox label="I agree" className="text-blue-500" />
\`\`\`

---

### ✅ Do’s and Don’ts / Best Practices
#### ✅ Do’s:
- ✅ Use labels for clear description of the checkbox.
- ✅ Ensure checkboxes are accessible with proper labels and ARIA attributes.
- ✅ Use in forms to select options or accept terms.

#### 🚫 Don’ts:
- ❌ Don’t use for purely decorative purposes.
- ❌ Don’t forget to associate labels with checkboxes using the \`label\` prop.

      `}}}},e={args:{label:"Accept Terms and Conditions",checked:!1}},s={args:{label:"Accept Terms and Conditions",checked:!0}},a={args:{label:"Accept Terms and Conditions (disabled)",checked:!1,disabled:!0}},t={args:{label:"Accept Terms and Conditions",checked:!1,className:"text-red-500",disabled:!1}};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "Accept Terms and Conditions",
    checked: false
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var l,d,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Accept Terms and Conditions",
    checked: true
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,m,u;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Accept Terms and Conditions (disabled)",
    checked: false,
    disabled: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,k,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Accept Terms and Conditions",
    checked: false,
    className: "text-red-500",
    disabled: false
  }
}`,...(f=(k=t.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const D=["Default","Checked","Disabled","WithCustomClass"];export{s as Checked,e as Default,a as Disabled,t as WithCustomClass,D as __namedExportsOrder,A as default};
