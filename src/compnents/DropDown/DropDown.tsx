// src/components/Dropdown/Dropdown.tsx
import React, { useState } from 'react';
import { DropdownProps } from './DropDown.types';

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      <button
        className="p-2 border rounded-md w-full"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOption || placeholder}
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-white border mt-1 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
