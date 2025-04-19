import React, { useState } from 'react';

export interface TextInputProps {
  placeholder: string;
  value?: string;
  disabled?: boolean;
  errorMessage?: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, value = '', disabled, errorMessage }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`border px-3 py-2 rounded ${errorMessage ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
