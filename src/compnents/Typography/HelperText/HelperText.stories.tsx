import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import HelperText from './HelperText.js';

const meta: Meta<typeof HelperText> = {
  title: 'Typography/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof HelperText>;

export const Default: Story = {
  args: {
    children: 'This is helper text',
    className: 'text-gray-700',
  },
};

export const Error: Story = {
  args: {
    children: 'This is an error message',
    className: 'text-red-500',
  },
};

export const Success: Story = {
  args: {
    children: 'This is a success message',
    className: "text-green-50",
  },
};

export const Info: Story = {
  args: {
    children: 'This is an informational message',
    className: 'text-blue-500',
  },
};
