import React from 'react';

const Spinner = () => {
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #0f3460',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 2s linear infinite',
  };

  return <div style={spinnerStyle}></div>;
};

export default Spinner;
