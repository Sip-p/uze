import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  style?: React.CSSProperties; // Accept inline styles as a prop
}

const Paragraph: React.FC<ParagraphProps> = ({ children, style }) => {
  return <p style={style}>{children}</p>; // Apply inline styles
};

export default Paragraph;
