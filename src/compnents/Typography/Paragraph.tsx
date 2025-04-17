import React from "react";

type ParagraphSize = "sm" | "md" | "lg";

interface ParagraphProps {
  size?: ParagraphSize;
  children: React.ReactNode;
}

export const Paragraph = ({ size = "md", children }: ParagraphProps) => {
  const sizeMap: Record<ParagraphSize, string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return <p className={`${sizeMap[size]} text-gray-800 leading-relaxed`}>{children}</p>;
};
