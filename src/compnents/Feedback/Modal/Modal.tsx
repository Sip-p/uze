import React from 'react';

type ModalProps = {
  isOpen: boolean;
  title: string;
  content: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, title, content }) => {
  if (!isOpen) return null;

  return (
    <div style={{ border: '1px solid black', padding: '16px', background: 'white' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Modal;