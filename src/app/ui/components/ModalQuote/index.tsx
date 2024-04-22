import React from 'react';

export const ModalQuote = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <div
        style={{
          background: 'rgba(0,0,0,0.5)',
          padding: 20,
          borderRadius: 5,
          width: '80%',
          maxWidth: 500,
        }}>
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
