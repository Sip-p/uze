import React from 'react';
import Heading from './compnents/Typography/Heading/Heading.js';
import Paragraph from './compnents/Typography/Paragraph/Paragraph.js';
import TextInput from './compnents/DataEntry/TextInput/TextInput.js';
import Toast from './compnents/Feedback/Toast/Toast.js';

const App: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Welcome to Uzence Design System</Heading>
      <Paragraph>This is a simple paragraph to demonstrate the Typography component.</Paragraph>
      <TextInput placeholder="Enter your name" />
      <Toast message="This is a Toast message!" />
    </div>
  );
};

export default App;
