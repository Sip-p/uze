// src/components/Toast/Toast.stories.tsx
import React, { useState } from 'react';
import Toast from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
};

export const SuccessToast = () => {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => setShowToast(false);

  return (
    <>
      {showToast && <Toast message="Success! Your action was completed." type="success" onClose={handleClose} />}
    </>
  );
};

export const ErrorToast = () => {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => setShowToast(false);

  return (
    <>
      {showToast && <Toast message="Error! Something went wrong." type="error" onClose={handleClose} />}
    </>
  );
};

export const InfoToast = () => {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => setShowToast(false);

  return (
    <>
      {showToast && <Toast message="Info: This is an informational message." type="info" onClose={handleClose} />}
    </>
  );
};
