import{j as o}from"./jsx-runtime-D_zvdyIk.js";const v={success:"bg-green-500 text-white mt-4",error:"bg-red-500 text-white mt-4",info:"bg-blue-500 text-white mt-4"},y=({message:b,type:T="info"})=>o.jsx("div",{className:"fixed bottom-4 right-4 z-50 space-y-2",children:o.jsx("div",{className:`
          px-4 py-3 rounded-lg shadow-lg max-w-sm w-full
          ${v[T]} 
          animate-fade-in-up
        `,role:"alert","aria-live":"assertive",children:b})});y.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'info'",computed:!1}}}};const x={title:"Feedback/Toast",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`
### 🏷️ Component: Toast
The **Toast** component is a lightweight notification that provides brief, non-blocking feedback to the user. Toasts typically appear for a short duration and automatically dismiss themselves after a set time. They are often used to display success, error, or informational messages.

---

### 🧩 Anatomy / Structure
\`\`\`tsx
<Toast message="Your action was successful" type="success" />
\`\`\`
- The toast consists of a **message** and an optional **type**.
- The **type** determines the style (e.g., success, error, or info).
- Toasts automatically disappear after a specified duration or can be dismissed manually.

---

### 📋 Props / API
| Prop      | Type                 | Default    | Description                                                                 |
|-----------|----------------------|------------|-----------------------------------------------------------------------------|
| message   | string               | -          | The message to display in the toast.                                         |
| type      | 'success' | 'error' | 'info' | 'info'    | The type of toast message, determining the style (success, error, or info).  |
  

---

### 📦 Use Cases
- Displaying brief messages such as success, error, or information to the user.
- Showing feedback after a user action like form submission or clicking a button.
- Informing the user about the status of their action (e.g., "Save successful" or "Error saving document").

---

### 🔄 States & Variants
- **Success**: A green toast indicating a successful operation.
- **Error**: A red toast indicating an error.
- **Info**: A blue or neutral-colored toast providing general information.
  
---

### 🔄 Interaction Behavior
- The toast is shown for a brief period (default 3 seconds) and disappears automatically.
- Can be manually dismissed if needed by clicking a close button (if implemented).
- Can be customized with different types and message content.

---

### ♿ Accessibility Notes (ARIA, Focus Management)
- Ensure to make toasts accessible to screen readers by adding appropriate ARIA roles (e.g., \`aria-live="assertive"\`).
- Toasts should not disrupt user flow, and they should automatically disappear after a brief period.

**Example**:
\`\`\`tsx
<Toast message="Form submitted successfully!" type="success" />
\`\`\`

---

### 🎨 Theming / Responsiveness Support
- Toast can be styled to match the overall theme of the application.
- The component supports responsiveness for different screen sizes and can be customized through classes or inline styles.

Example:
\`\`\`tsx
<Toast message="Check your inbox!" type="info" className="toast-custom" />
\`\`\`

---

### ✅ Do’s and Don’ts / Best Practices
#### ✅ Do’s:
- ✅ Use toasts for non-blocking notifications that don’t require immediate user action.
- ✅ Ensure toasts are dismissible either automatically or through user interaction.
- ✅ Provide clear and concise messages.

#### 🚫 Don’ts:
- ❌ Don’t use toasts for long-term notifications; for persistent messages, use modals or banners.
- ❌ Don’t overload the user with too many toasts at once.

---

**Documentation Checklist (via Storybook):** 
In your Storybook, please include: 
● ✅ Component name + description 
● ✅ Props / API 
● ✅ Use cases 
● ✅ Anatomy / Structure 
● ✅ States & variants 
● ✅ Interaction behavior 
● ✅ Accessibility notes (ARIA, focus management) 
● ✅ Theming / responsiveness support 
● ✅ Do’s and Don’ts / Best Practices
      `}}}},e={args:{message:"This is a toast message"}},s={args:{message:"This is a success message!",type:"success"}},t={args:{message:"Something went wrong!",type:"error"}},a={args:{message:"This is an informational message.",type:"info"}};var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    message: 'This is a toast message'
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    message: 'This is a success message!',
    type: 'success'
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    message: 'Something went wrong!',
    type: 'error'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: 'This is an informational message.',
    type: 'info'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const S=["Default","Success","Error","Info"];export{e as Default,t as Error,a as Info,s as Success,S as __namedExportsOrder,x as default};
