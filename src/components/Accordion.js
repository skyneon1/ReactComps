import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionStyle = {
    marginTop: '15px',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    padding: '10px',
    backgroundColor: '#0f3460',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const contentStyle = {
    padding: '10px',
    backgroundColor: '#f8f9fa',
    display: isOpen ? 'block' : 'none',
    transition: 'max-height 0.3s ease',
  };

  return (
    <div style={accordionStyle}>
      <div style={headerStyle} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
