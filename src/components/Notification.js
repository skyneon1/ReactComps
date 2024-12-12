import React from 'react';

const Notification = ({ message, type }) => {
  const notificationStyle = {
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px',
    color: 'white',
    backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
  };

  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
