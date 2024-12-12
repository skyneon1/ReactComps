import React from 'react';

const Avatar = ({ image, size = 'medium' }) => {
  const sizeStyle = size === 'large' ? { width: '100px', height: '100px' } : { width: '50px', height: '50px' };
  return <img src={image} alt="Avatar" style={{ borderRadius: '50%', ...sizeStyle }} />;
};

export default Avatar;
