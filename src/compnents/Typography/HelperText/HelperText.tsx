import React from 'react';

interface HelperTextProps {
  children: React.ReactNode;
  className?: string; // Allow custom Tailwind classes
}

const HelperText: React.FC<HelperTextProps> = ({ children, className }) => {
  return <span className={className}>{children}</span>; // Apply custom className to the component
};

export default HelperText;
