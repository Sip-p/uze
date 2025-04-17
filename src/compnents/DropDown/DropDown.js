import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Dropdown/Dropdown.tsx
import { useState } from 'react';
const Dropdown = ({ options, selectedOption, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false); // Close dropdown after selection
    };
    return (_jsxs("div", { className: "relative", children: [_jsx("button", { className: "p-2 border rounded-md w-full", onClick: toggleDropdown, "aria-haspopup": "listbox", "aria-expanded": isOpen, children: selectedOption || placeholder }), isOpen && (_jsx("ul", { className: "absolute w-full bg-white border mt-1 rounded-md shadow-lg z-10", children: options.map((option, index) => (_jsx("li", { className: "p-2 hover:bg-gray-100 cursor-pointer", onClick: () => handleSelect(option), children: option }, index))) }))] }));
};
export default Dropdown;
