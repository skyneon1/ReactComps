import React, { useState } from 'react';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const switchStyle = {
    width: '50px',
    height: '25px',
    background: isOn ? '#4CAF50' : '#ccc',
    borderRadius: '50px',
    position: 'relative',
    cursor: 'pointer',
  };

  const handleSwitch = () => setIsOn(!isOn);

  return (
    <div style={switchStyle} onClick={handleSwitch}>
      <div style={{
        width: '20px', height: '20px', background: 'white', borderRadius: '50%',
        position: 'absolute', top: '50%', left: isOn ? '50%' : '0',
        transform: 'translateY(-50%)', transition: 'all 0.3s ease'
      }} />
    </div>
  );
};

export default Switch;
