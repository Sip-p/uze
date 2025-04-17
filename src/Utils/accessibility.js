// src/utils/accessibility.ts
export function getAriaProps({ role, label, describedBy, }) {
    return {
        role,
        'aria-label': label,
        'aria-describedby': describedBy,
    };
}
// Example: Keyboard handler for "Enter" or "Space"
export function handleKeyboardClick(event, callback) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        callback();
    }
}
