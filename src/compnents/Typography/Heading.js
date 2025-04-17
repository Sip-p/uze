import React from "react";
export const Heading = ({ level = 1, children }) => {
    const tagMap = {
        1: "h1",
        2: "h2",
        3: "h3",
        4: "h4",
        5: "h5",
        6: "h6",
    };
    const Tag = tagMap[level];
    const sizeMap = {
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
