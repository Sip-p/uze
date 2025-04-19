// import React from 'react';

// type CheckboxProps = {
//   label: string;
//   checked: boolean;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
//   return (
//     <label className="inline-flex items-center space-x-2 cursor-pointer">
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={onChange}
//         className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
//       />
//       <span className="text-sm text-gray-700">{label}</span>
//     </label>
//   );
// };

// export default Checkbox;



import React from "react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="mr-2"
        aria-checked={checked ? "true" : "false"}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
