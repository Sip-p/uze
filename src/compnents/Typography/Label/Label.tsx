// import React from 'react';

// interface LabelProps {
//   children: React.ReactNode;
//   className?: string;  // Use className instead of style
// }

// const Label: React.FC<LabelProps> = ({ children, className }) => {
//   return <label className={className}>{children}</label>;  // Apply className for styling
// };

// export default Label;


// Label.tsx
import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  htmlFor?: string; // For accessibility
}

const Label: React.FC<LabelProps> = ({ children, style, htmlFor }) => {
  return <label style={style} htmlFor={htmlFor}>{children}</label>;
};

export default Label;
