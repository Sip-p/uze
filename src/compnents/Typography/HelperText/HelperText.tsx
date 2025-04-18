// HelperText.tsx
import React from 'react';

interface HelperTextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;  // Allow 'style' prop for inline styling
}

const HelperText: React.FC<HelperTextProps> = ({ children, style }) => {
  return <span style={style}>{children}</span>;  // Apply inline style to the component
};

export default HelperText;
