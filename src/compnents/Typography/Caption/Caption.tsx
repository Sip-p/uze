// import React from 'react';

// type CaptionProps = {
//   children: React.ReactNode;
// };

// const Caption: React.FC<CaptionProps> = ({ children }) => {
//   return <small style={{ fontSize: '12px', color: '#666' }}>{children}</small>;
// };

// export default Caption;
// In your Caption component (Caption.tsx or Caption.js)
import React from 'react';

interface CaptionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;  // Allow the style prop
}

const Caption: React.FC<CaptionProps> = ({ children, style }) => {
  return <p style={style}>{children}</p>;
};

export default Caption;