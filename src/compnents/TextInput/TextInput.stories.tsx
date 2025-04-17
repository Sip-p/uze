// src/components/TextInput/TextInput.stories.tsx
import React, { useState } from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
};

export const Default = () => {
  const [value, setValue] = useState('');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <TextInput
      value={value}
      onChange={handleChange}
      placeholder="Enter text here"
    />
  );
};

export const WithInitialValue = () => {
  const [value, setValue] = useState('Initial value');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <TextInput
      value={value}
      onChange={handleChange}
      placeholder="This is a placeholder"
    />
  );
};
