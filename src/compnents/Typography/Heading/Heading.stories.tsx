import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Heading from './Heading.js';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'This is a Heading 1',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    children: 'This is a Heading 2',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    children: "This is a Heading 4",
    className: ""
  },
};

export const Level4: Story = {
  args: {
    level: 4,
    children: 'This is a Heading 4',
  },
};

export const Level5: Story = {
  args: {
    level: 5,
    children: 'This is a Heading 5',
  },
};

export const Level6: Story = {
  args: {
    level: 6,
    children: 'This is a Heading 6',
  },
};
