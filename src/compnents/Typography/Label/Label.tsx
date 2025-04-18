// Label.tsx
import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  style?: React.CSSProperties; // Add style prop
}

const Label: React.FC<LabelProps> = ({ children, style }) => {
  return <label style={style}>{children}</label>;  // Apply inline style
};

export default Label;
