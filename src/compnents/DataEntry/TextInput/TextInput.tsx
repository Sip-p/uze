import React, { useState } from 'react';

interface TextInputProps {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} placeholder={placeholder} />;
};

export default TextInput;
