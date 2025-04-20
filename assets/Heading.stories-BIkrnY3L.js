import{j as a}from"./jsx-runtime-D_zvdyIk.js";const S=({level:$,children:e,className:s})=>{switch($){case 1:return a.jsx("h1",{className:`text-4xl font-bold ${s}`,children:e});case 2:return a.jsx("h2",{className:`text-3xl font-semibold ${s}`,children:e});case 3:return a.jsx("h3",{className:`text-2xl font-medium ${s}`,children:e});case 4:return a.jsx("h4",{className:`text-xl font-normal ${s}`,children:e});case 5:return a.jsx("h5",{className:`text-lg font-light ${s}`,children:e});case 6:return a.jsx("h6",{className:`text-base font-thin ${s}`,children:e});default:return a.jsx("h1",{className:`text-4xl font-bold ${s}`,children:e})}};S.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const C={title:"Typography/Heading",component:S,tags:["autodocs"],parameters:{docs:{description:{component:`
### Heading Component

The \`Heading\` component renders semantic headings (\`<h1>\` through \`<h6>\`) with predefined Tailwind styles.

---

### ✅ Props

- \`level\` (**required**): A number between 1–6 that determines the heading tag and its style.
- \`children\` (**required**): The content to render inside the heading.
- \`className\` (optional): Custom Tailwind classes to override or extend styles.

---

### ✅ Use Cases

- Display page titles and section headers.
- Maintain semantic HTML for accessibility and SEO.
- Keep design consistent across your application.

---

### ✅ Accessibility

- Uses semantic tags (\`h1\`–\`h6\`) dynamically for screen readers.
- Encourages proper heading hierarchy.

---

### ✅ Customization

- Easily override styles using \`className\` prop.
- Combine with theme-specific classes for branding.
        `}}}},r={args:{level:1,children:"This is a Heading 1"}},n={args:{level:2,children:"This is a Heading 2"}},t={args:{level:3,children:"This is a Heading 4",className:""}},i={args:{level:4,children:"This is a Heading 4"}},o={args:{level:5,children:"This is a Heading 5"}},c={args:{level:6,children:"This is a Heading 6"}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'This is a Heading 1'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: 'This is a Heading 2'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,v,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: "This is a Heading 4",
    className: ""
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,f,y;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: 'This is a Heading 4'
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var H,b,L;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: 'This is a Heading 5'
  }
}`,...(L=(b=o.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var j,N,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: 'This is a Heading 6'
  }
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const E=["Default","Level2","Level3","Level4","Level5","Level6"];export{r as Default,n as Level2,t as Level3,i as Level4,o as Level5,c as Level6,E as __namedExportsOrder,C as default};
