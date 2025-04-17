// src/components/Dropdown/Dropdown.types.ts
export interface DropdownProps {
    options: string[];
    selectedOption: string;
    onChange: (selectedOption: string) => void;
    placeholder?: string;
  }
  