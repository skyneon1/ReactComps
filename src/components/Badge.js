import React from 'react';

const Badge = ({ text, color = 'blue' }) => {
  const badgeStyle = {
    backgroundColor: color === 'blue' ? '#007bff' : '#28a745',
    padding: '5px 10px',
    borderRadius: '20px',
    color: '#fff',
    fontSize: '0.9rem',
  };

  return <span style={badgeStyle}>{text}</span>;
};

export default Badge;
