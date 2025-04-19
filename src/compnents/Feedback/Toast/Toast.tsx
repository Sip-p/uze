import React from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
}

const typeColors = {
  success: 'bg-green-500 text-white mt-4',
  error: 'bg-red-500 text-white mt-4',
  info: 'bg-blue-500 text-white mt-4',
};

const Toast: React.FC<ToastProps> = ({ message, type = 'info' }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <div
        className={`
          px-4 py-3 rounded-lg shadow-lg max-w-sm w-full
          ${typeColors[type]} 
          animate-fade-in-up
        `}
        role="alert"
        aria-live="assertive"
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;
