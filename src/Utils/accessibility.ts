// src/utils/accessibility.ts

export function getAriaProps({
    role,
    label,
    describedBy,
  }: {
    role?: string;
    label?: string;
    describedBy?: string;
  }) {
    return {
      role,
      'aria-label': label,
      'aria-describedby': describedBy,
    };
  }
  
  // Example: Keyboard handler for "Enter" or "Space"
  export function handleKeyboardClick(
    event: React.KeyboardEvent,
    callback: () => void
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  }
  