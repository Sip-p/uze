import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Label from './Label.js';

const meta: Meta<typeof Label> = {
  title: 'Typography/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'This is a label',
  },
};

export const Small: Story = {
  args: {
    children: 'This is a small label',
    style: { fontSize: '12px' },
  },
};

export const Large: Story = {
  args: {
    children: 'This is a large label',
    style: { fontSize: '20px' },
    htmlFor: ""
  },
};

export const Error: Story = {
  args: {
    children: 'This is an error label',
    style: { color: 'red' },
  },
};

export const Success: Story = {
  args: {
    children: 'This is a success label',
    style: { color: 'green' },
  },
};

export const WithInput: Story = {
  render: () => (
    <div>
      <Label htmlFor="username">Username</Label>
      <input id="username" type="text" />
    </div>
  ),
};
