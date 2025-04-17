// src/components/Modal/Modal.tsx
import React from 'react';
import { ModalProps } from './Modal.types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, onConfirm, confirmText = 'Confirm', cancelText = 'Cancel' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-600 font-semibold text-xl">&times;</button>
        </div>
        <div className="mb-4">{children}</div>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md">{cancelText}</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded-md">{confirmText}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
