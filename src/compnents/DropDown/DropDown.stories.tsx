// src/components/Dropdown/Dropdown.stories.tsx
import React, { useState } from 'react';
import Dropdown from './DropDown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export const Default = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (newOption: string) => {
    setSelectedOption(newOption);
  };

  return (
    <Dropdown
      options={['Option 1', 'Option 2', 'Option 3']}
      selectedOption={selectedOption}
      onChange={handleChange}
      placeholder="Select an option"
    />
  );
};

export const WithPreselectedOption = () => {
  const [selectedOption, setSelectedOption] = useState('Option 2');

  const handleChange = (newOption: string) => {
    setSelectedOption(newOption);
  };

  return (
    <Dropdown
      options={['Option 1', 'Option 2', 'Option 3']}
      selectedOption={selectedOption}
      onChange={handleChange}
      placeholder="Select an option"
    />
  );
};
