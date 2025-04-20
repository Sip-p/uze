import{j as y}from"./jsx-runtime-D_zvdyIk.js";const u=({children:m,style:h})=>y.jsx("p",{style:h,children:m});u.__docgenInfo={description:"",methods:[],displayName:"Caption",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const f={title:"Typography/Caption",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
### 🏷️ Caption

The **Caption** component provides a brief description or title for visual content like images, charts, or videos.

---

### 📚 Use Cases:
- Add a short description under an image.
- Label a chart or table.
- Provide supporting text for UI sections.

---

### 🧠 Accessibility Notes:
- Use semantic tags (like \`<figcaption>\` or \`<p>\`) appropriately.
- Ensure good contrast and legibility.
- If used with media, ensure screen readers can associate the caption.

---

### 🎨 Theming & Responsiveness:
- Supports custom inline styles via the \`style\` prop.
- Easily adaptable using Tailwind or styled-components.

---

### ✅ Do’s and Don’ts:
| ✅ Do | ❌ Don’t |
|------|---------|
| Use for descriptive or secondary text | Don’t use for long paragraphs |
| Apply semantic tags for clarity | Don’t overload with styles |
| Ensure sufficient color contrast | Don’t use low contrast text |

`}}},argTypes:{children:{description:"The content to be displayed inside the caption.",control:"text",table:{type:{summary:"ReactNode"},defaultValue:{summary:"undefined"}}},style:{description:"Custom styles to be applied to the caption.",control:"object",table:{type:{summary:"React.CSSProperties"},defaultValue:{summary:"{}"}}}}},e={args:{children:"This is a caption"}},t={args:{children:"This caption has a larger font size.",style:{fontSize:"24px"}}},o={args:{children:"This caption has a color.",style:{color:"blue"}}};var s,a,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'This is a caption'
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var n,i,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'This caption has a larger font size.',
    style: {
      fontSize: '24px'
    }
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This caption has a color.',
    style: {
      color: 'blue'
    }
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const C=["Default","LargeFontSize","ColoredCaption"];export{o as ColoredCaption,e as Default,t as LargeFontSize,C as __namedExportsOrder,f as default};
