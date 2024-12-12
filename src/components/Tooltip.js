import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  // Define styles for the container, tooltip, and the visibility toggle
  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const tooltipStyle = {
    visibility: 'hidden',
    position: 'absolute',
    bottom: '125%', // Position above the element
    left: '50%', // Center horizontally
    transform: 'translateX(-50%)', // Offset to ensure the tooltip is centered
    background: '#333',
    color: '#fff',
    padding: '8px 12px',
    borderRadius: '5px',
    fontSize: '0.875rem',
    zIndex: '1',
    opacity: '0',
    transition: 'opacity 0.3s ease, visibility 0s 0.3s',
  };

  const showTooltipStyle = {
    visibility: 'visible',
    opacity: '1',
    transition: 'opacity 0.3s ease',
  };

  // Using state to control tooltip visibility on hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={containerStyle}
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        style={{
          ...tooltipStyle,
          ...(isHovered ? showTooltipStyle : {}),
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
