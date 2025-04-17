import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Label = ({ htmlFor, children, size = "md", required = false }) => {
    const sizeMap = {
        sm: "text-sm",
        md: "text-base",
    };
    return (_jsxs("label", { htmlFor: htmlFor, className: `${sizeMap[size]} text-gray-700 font-medium inline-block`, children: [children, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }));
};
