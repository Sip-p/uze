// import React from 'react';

// interface ParagraphProps {
//   children: React.ReactNode;
//   className?: string; // Use Tailwind classes instead of inline styles
// }

// const Paragraph: React.FC<ParagraphProps> = ({ children, className = '' }) => {
//   return <p className={className}>{children}</p>;
// };

// export default Paragraph;



import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string; // Use Tailwind classes instead of inline styles
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = '' }) => {
  return <p className={className}>{children}</p>;
};

export default Paragraph;
