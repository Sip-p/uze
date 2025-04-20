import{j as w}from"./jsx-runtime-D_zvdyIk.js";const b=({children:N,className:S=""})=>w.jsx("p",{className:S,children:N});b.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const R={title:"Typography/Paragraph",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
### Paragraph Component

The \`Paragraph\` component is used for displaying textual content in a clean and consistent format. 
It supports Tailwind utility classes for easy styling and can be reused throughout the application 
where text needs to be presented in different styles.

---

### ✅ Props / API

- \`children\` (\`ReactNode\`) - Required: The actual text content or elements to render inside the paragraph.
- \`className\` (\`string\`) - Optional: Tailwind CSS utility classes for styling text (size, color, spacing, etc).

---

### ✅ Use Cases

- Displaying descriptions, help text, or content blocks in UI.
- Styling specific blocks of text with different sizes or colors.
- Creating reusable typography components for a design system.

---

### ✅ Anatomy / Structure

- Root element: \`<p>\` (HTML paragraph tag)
- Accepts children as the content and className for styling

---

### ✅ States & Variants

- Default: Regular text
- Large: Bigger text size and looser line height
- Small: Compact text
- Styled: Colored and bold text
- Background: Text with background, padding, and border radius

---

### ✅ Accessibility Notes

- Uses semantic \`<p>\` tag for screen readers
- Ensure sufficient color contrast when applying custom colors
- Use with proper headings for structured and readable content

---

### ✅ Theming / Responsiveness Support

- Fully supports Tailwind's utility-first theming
- Easily responsive using Tailwind's responsive utilities (e.g. \`md:text-lg\`)

---

### ✅ Do’s and Don’ts

**✅ Do’s:**
- Use consistent font sizes and spacing via Tailwind
- Use for body content in forms, modals, cards, etc.
- Combine with utility classes for design consistency

**❌ Don’ts:**
- Don’t use for headings — use a Heading component or \`<h1>-<h6>\`
- Don’t apply inline styles — prefer Tailwind classes
        `}}}},e={args:{children:"This is a paragraph.",className:""}},a={args:{children:"This is a large paragraph.",className:"text-2x leading-loose"}},s={args:{children:"This is a small paragraph.",className:"text-sm leading-snug"}},r={args:{children:"This is a styled paragraph with custom color.",className:"text-blue-500 font-bold"}},t={args:{children:"This paragraph has a background color.",className:"bg-red-100 p-4 rounded-md"}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'This is a paragraph.',
    className: ''
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'This is a large paragraph.',
    className: "text-2x leading-loose"
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,g,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'This is a small paragraph.',
    className: 'text-sm leading-snug'
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,h,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'This is a styled paragraph with custom color.',
    className: 'text-blue-500 font-bold'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,x,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'This paragraph has a background color.',
    className: 'bg-red-100 p-4 rounded-md'
  }
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const k=["Default","Large","Small","Styled","Background"];export{t as Background,e as Default,a as Large,s as Small,r as Styled,k as __namedExportsOrder,R as default};
