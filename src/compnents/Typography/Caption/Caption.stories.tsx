import type { Meta, StoryObj } from '@storybook/react';
import Caption from './Caption.js';

const meta: Meta<typeof Caption> = {
  title: 'Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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

`,
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content to be displayed inside the caption.',
      control: 'text',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    style: {
      description: 'Custom styles to be applied to the caption.',
      control: 'object',
      table: {
        type: { summary: 'React.CSSProperties' },
        defaultValue: { summary: '{}' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Caption>;

// Default state
export const Default: Story = {
  args: {
    children: 'This is a caption',
  },
};

// Variant: Large Font
export const LargeFontSize: Story = {
  args: {
    children: 'This caption has a larger font size.',
    style: { fontSize: '24px' },
  },
};

// Variant: Colored Caption
export const ColoredCaption: Story = {
  args: {
    children: 'This caption has a color.',
    style: { color: 'blue' },
  },
};
