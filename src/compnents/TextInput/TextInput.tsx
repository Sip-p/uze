// src/components/TextInput/TextInput.tsx
import React from 'react';
import { TextInputProps } from './TextInput.types';

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="p-2 border rounded-md"
    />
  );
};

export default TextInput;
