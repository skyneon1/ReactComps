import React from 'react';

const ProgressBar = ({ progress }) => {
  const progressBarStyle = {
    width: '100%',
    height: '20px',
    backgroundColor: '#f1f1f1',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const fillStyle = {
    width: `${progress}%`,
    height: '100%',
    backgroundColor: '#28a745',
    transition: 'width 0.3s ease',
  };

  return (
    <div style={progressBarStyle}>
      <div style={fillStyle}></div>
    </div>
  );
};

export default ProgressBar;
