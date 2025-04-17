import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, variant = 'primary', onClick, }) => {
    const baseStyle = 'px-4 py-2 rounded font-semibold';
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-400 text-white hover:bg-gray-500',
    };
    return (_jsx("button", { className: `${baseStyle} ${variantStyles[variant]}`, onClick: onClick, children: children }));
};
