import React from 'react';

interface HeadingProps {
  level: number;
  children: React.ReactNode;
  className?: string; // Allow the className prop for custom styling
}

const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  switch (level) {
    case 1:
      return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
    case 2:
      return <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>;
    case 3:
      return <h3 className={`text-2xl font-medium ${className}`}>{children}</h3>;
    case 4:
      return <h4 className={`text-xl font-normal ${className}`}>{children}</h4>;
    case 5:
      return <h5 className={`text-lg font-light ${className}`}>{children}</h5>;
    case 6:
      return <h6 className={`text-base font-thin ${className}`}>{children}</h6>;
    default:
      return <h1 className={`text-4xl font-bold ${className}`}>{children}</h1>;
  }
};

export default Heading;
