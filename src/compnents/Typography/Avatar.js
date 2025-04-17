import { jsx as _jsx } from "react/jsx-runtime";
export const Avatar = ({ src, alt, size = "md" }) => {
    const sizeMap = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
    };
    return (_jsx("img", { src: src, alt: alt, className: `rounded-full object-cover ${sizeMap[size]}` }));
};
