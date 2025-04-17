// src/components/Modal/Modal.stories.tsx
import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleConfirm = () => {
    alert('Confirmed!');
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen} className="px-4 py-2 bg-blue-500 text-white rounded-md">Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm} title="Confirmation">
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  );
};

export const WithoutButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpen} className="px-4 py-2 bg-blue-500 text-white rounded-md">Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose} onConfirm={() => {}} title="Information" confirmText="" cancelText="">
        <p>This modal does not have confirm/cancel buttons.</p>
      </Modal>
    </>
  );
};
