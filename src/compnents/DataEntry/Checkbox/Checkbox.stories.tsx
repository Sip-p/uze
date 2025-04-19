import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox.js";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "DataEntry/Checkbox",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
### 🏷️ Component: Checkbox
The **Checkbox** component is used to toggle a binary state (checked/unchecked). It is commonly used for agreeing to terms and conditions, choosing options in a form, etc.

---

### 🧩 Anatomy / Structure
\`\`\`tsx
<Checkbox label="Accept Terms and Conditions" checked={false} />
\`\`\`
- Renders a native \`<input type="checkbox" />\` with an associated label.
- Accepts \`label\` (text to display) and \`checked\` (boolean to represent checked/unchecked state) as props.
- The component is styled to adapt to the overall theme of the application.

---

### 📋 Props / API
| Prop     | Type    | Default | Description                                   |
|----------|---------|---------|-----------------------------------------------|
| label    | string  | -       | The label text for the checkbox               |
| checked  | boolean | false   | Determines whether the checkbox is checked    |
| onChange | function| -       | Callback function to handle change events     |

---

### 📦 Use Cases
- Accepting Terms and Conditions in forms.
- Selecting preferences in settings.
- Checkbox groups (multiple choices) in surveys.

---

### 🔄 States & Variants
- **Unchecked**: Default state when \`checked={false}\`.
- **Checked**: Activated state when \`checked={true}\`.
- **Disabled**: Checkbox can be disabled with \`disabled={true}\` to prevent interaction.

---

### 🔄 Interaction Behavior
- Toggles between checked and unchecked when clicked.
- Can be controlled via the \`checked\` prop and \`onChange\` callback.

---

### ♿ Accessibility Notes (ARIA, Focus Management)
- The checkbox is focusable and interactive.
- Use \`aria-checked\` for custom accessibility in dynamic components.
- Ensure to pair checkbox with a label for better accessibility.

**Example**:
\`\`\`tsx
<Checkbox label="Subscribe to Newsletter" checked={true} onChange={handleCheckboxChange} />
\`\`\`

---

### 🎨 Theming / Responsiveness Support
- The component adapts to your theme by passing styles via the \`className\` or using Tailwind CSS for responsiveness.
- You can style the checkbox with colors or icons based on the checked state.

Example:
\`\`\`tsx
<Checkbox label="I agree" className="text-blue-500" />
\`\`\`

---

### ✅ Do’s and Don’ts / Best Practices
#### ✅ Do’s:
- ✅ Use labels for clear description of the checkbox.
- ✅ Ensure checkboxes are accessible with proper labels and ARIA attributes.
- ✅ Use in forms to select options or accept terms.

#### 🚫 Don’ts:
- ❌ Don’t use for purely decorative purposes.
- ❌ Don’t forget to associate labels with checkboxes using the \`label\` prop.

      `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Accept Terms and Conditions (disabled)",
    checked: false,
    disabled: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    label: "Accept Terms and Conditions",
    checked: false,
    className: "text-red-500",
    disabled: false
  },
};
