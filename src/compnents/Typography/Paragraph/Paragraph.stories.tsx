import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph.js';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a paragraph.',
    className: '',
  },
};

export const Large: Story = {
  args: {
    children: 'This is a large paragraph.',
    className: "text-2x leading-loose",
  },
};

export const Small: Story = {
  args: {
    children: 'This is a small paragraph.',
    className: 'text-sm leading-snug',
  },
};

export const Styled: Story = {
  args: {
    children: 'This is a styled paragraph with custom color.',
    className: 'text-blue-500 font-bold',
  },
};

export const Background: Story = {
  args: {
    children: 'This paragraph has a background color.',
    className: 'bg-red-100 p-4 rounded-md',
  },
};
