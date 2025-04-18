import React from 'react';

interface HeadingProps {
  level: number;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    default:
      return <h1>{children}</h1>;
  }
};

export default Heading;
