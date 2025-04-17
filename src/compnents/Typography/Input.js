import { jsx as _jsx } from "react/jsx-runtime";
export const Input = ({ value, onChange, placeholder = "", disabled = false, error = false, type = "text", }) => {
    return (_jsx("input", { type: type, value: value, onChange: onChange, placeholder: placeholder, disabled: disabled, "aria-invalid": error, className: `w-full px-3 py-2 border rounded-md text-sm outline-none transition-all
        ${error ? "border-red-500" : "border-gray-300"}
        ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
        focus:ring-2 focus:ring-blue-500` }));
};
