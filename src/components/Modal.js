import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    // position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  const modalContentStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '15px',
    width: '80%',
    maxWidth: '500px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 0.3s',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
  };

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
