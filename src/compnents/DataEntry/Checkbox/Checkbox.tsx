import React from 'react';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;
