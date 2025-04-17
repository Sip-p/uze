import React from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
}

export const Heading = ({ level = 1, children }: HeadingProps) => {
  const tagMap = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  } as const;

  const Tag = tagMap[level];

  const sizeMap: Record<HeadingLevel, string> = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };

  return React.createElement(Tag, {
    className: `${sizeMap[level]} font-bold`,
    children,
  });
};
