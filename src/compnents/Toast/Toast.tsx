// src/components/Toast/Toast.tsx
import React, { useEffect, useState } from 'react';
import { ToastProps } from './Toast.types';

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 p-3 rounded-md shadow-lg transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-gray-500'
      }`}
    >
      <p className="text-white">{message}</p>
    </div>
  );
};

export default Toast;
