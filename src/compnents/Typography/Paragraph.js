import { jsx as _jsx } from "react/jsx-runtime";
export const Paragraph = ({ size = "md", children }) => {
    const sizeMap = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
    };
    return _jsx("p", { className: `${sizeMap[size]} text-gray-800 leading-relaxed`, children: children });
};
