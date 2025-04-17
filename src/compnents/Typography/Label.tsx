import React from "react";

type LabelProps = {
  htmlFor?: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  required?: boolean;
};

export const Label = ({ htmlFor, children, size = "md", required = false }: LabelProps) => {
  const sizeMap = {
    sm: "text-sm",
    md: "text-base",
  };

  return (
    <label
      htmlFor={htmlFor}
      className={`${sizeMap[size]} text-gray-700 font-medium inline-block`}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
