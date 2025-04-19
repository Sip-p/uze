import type { Meta, StoryObj } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput.js';

const meta: Meta<typeof TextInput> = {
  title: 'DataEntry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### 🏷️ TextInput

**TextInput** is a simple and reusable input component for text entry.

---

### 📚 Use Cases:
- Collect text inputs like name, email, or other short text-based data.
- Used in forms for user input.
- Ideal for search fields or filter input.

---

### 🧠 Accessibility Notes:
- Ensure input fields are properly labeled for screen readers using \`<label>\` elements.
- \`aria-invalid\` is set to \`true\` if there's an error message.
- \`aria-describedby\` associates the error message with the input field for better accessibility.

---

### 🎨 Theming & Responsiveness:
- Fully customizable using Tailwind CSS or custom styles.
- Responsive design supports different screen sizes.
- Supports custom styling via the \`style\` prop.

---

### ✅ Do’s and Don’ts / Best Practices:
| ✅ Do | ❌ Don’t |
|------|---------|
| Use for collecting text-based inputs | Don’t use for multi-line text (use Textarea for that) |
| Make input accessible with proper labels | Don’t leave inputs without error handling or descriptions |
| Ensure sufficient contrast for visibility | Don’t use input fields without proper error states or feedback |

---

### 📐 Anatomy / Structure:
- The component consists of an \`<input>\` field for text input.
- Displays an error message below the input when applicable.
- Can be customized with various props like \`placeholder\`, \`value\`, \`disabled\`, and \`errorMessage\`.

---

### 🔄 Interaction Behavior:
- The input supports interaction via typing text.
- It dynamically updates the value as the user types.
- The component displays an error message if the \`errorMessage\` prop is provided.

---

### 🧩 Props / API:
| Prop         | Type           | Description                                  | Default   |
|--------------|----------------|----------------------------------------------|-----------|
| \`placeholder\` | \`string\`      | Placeholder text for the input field.        | \`''\`    |
| \`value\`       | \`string\`      | The current value of the input.              | \`''\`    |
| \`disabled\`    | \`boolean\`     | Whether the input is disabled or not.        | \`false\` |
| \`errorMessage\`| \`string\`      | Error message to display below the input.    | \`undefined\` |

---
      `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<TextInputProps>;

// Default state
export const Default: Story = {
  args: {
    placeholder: 'Enter text here',
  },
};

// With pre-filled value
export const WithValue: Story = {
  args: {
    placeholder: 'Enter text here',
    value: 'Pre-filled',
  },
};

// Disabled input
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

// With an error message
export const WithErrorMessage: Story = {
  args: {
    placeholder: 'Enter your name',
    errorMessage: "Name is required",
  },
};

// Custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Type your email address',
  },
};
