import{j as n}from"./jsx-runtime-D_zvdyIk.js";const i=({children:j,style:z,htmlFor:D})=>n.jsx("label",{style:z,htmlFor:D,children:j});i.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},htmlFor:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Typography/Label",component:i,tags:["autodocs"],parameters:{docs:{description:{component:`
**Label** is a component used to define the title or description for form controls or other interactive UI elements.

---

### 🧩 Anatomy / Structure
\`\`\`tsx
<Label style={...} htmlFor="input-id">
  {children}
</Label>
\`\`\`
- Renders a native \`<label>\` HTML tag.
- Accepts \`children\` to show the label text.
- Supports optional \`style\` prop and \`htmlFor\` for accessibility.

---

### ♿ Accessibility Notes
- Use the \`htmlFor\` prop to associate the label with a form control.
- This improves usability for screen readers and form navigation.

**Example**:
\`\`\`tsx
<Label htmlFor="email">Email Address</Label>
<input id="email" type="email" />
\`\`\`

---

### 🎨 Theming / Responsiveness
- Style using \`style\` prop or external CSS.
- Responsive sizing through custom font sizes.

---

### ✅ Do’s
- ✅ Use with form inputs.
- ✅ Keep label text concise and clear.
- ✅ Link label and input using \`htmlFor\`.

### 🚫 Don’ts
- ❌ Don’t use labels for decoration.
- ❌ Don’t skip linking labels to inputs in forms.
        `}}}},e={args:{children:"This is a label"}},r={args:{children:"This is a small label",style:{fontSize:"12px"}}},s={args:{children:"This is a large label",style:{fontSize:"20px"},htmlFor:""}},a={args:{children:"This is an error label",style:{color:"red"}}},t={args:{children:"This is a success label",style:{color:"green"}}},o={render:()=>n.jsxs("div",{children:[n.jsx(i,{htmlFor:"username",children:"Username"}),n.jsx("input",{id:"username",type:"text"})]})};var l,c,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'This is a label'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'This is a small label',
    style: {
      fontSize: '12px'
    }
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'This is a large label',
    style: {
      fontSize: '20px'
    },
    htmlFor: ""
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,S,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'This is an error label',
    style: {
      color: 'red'
    }
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,T,L;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'This is a success label',
    style: {
      color: 'green'
    }
  }
}`,...(L=(T=t.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var F,R,v;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div>\r
      <Label htmlFor="username">Username</Label>\r
      <input id="username" type="text" />\r
    </div>
}`,...(v=(R=o.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};const U=["Default","Small","Large","Error","Success","WithInput"];export{e as Default,a as Error,s as Large,r as Small,t as Success,o as WithInput,U as __namedExportsOrder,w as default};
