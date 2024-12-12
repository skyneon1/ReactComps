import React from 'react';

const TooltipIcon = ({ icon, tooltip }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span>{icon}</span>
      <div style={{
        position: 'absolute', bottom: '125%', background: '#333', color: 'white',
        padding: '5px 10px', borderRadius: '5px', fontSize: '0.875rem', visibility: 'hidden'
      }}>
        {tooltip}
      </div>
    </div>
  );
};

export default TooltipIcon;
