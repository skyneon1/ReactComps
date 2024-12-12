import React from 'react';

const Slider = ({ min, max, step, value, onChange }) => {
  const sliderStyle = {
    width: '100%',
    height: '8px',
    borderRadius: '4px',
    backgroundColor: '#ddd',
  };

  const thumbStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    position: 'absolute',
    top: '-6px',
    left: `${((value - min) / (max - min)) * 100}%`,
    transition: 'left 0.2s ease',
  };

  return (
    <div style={{ position: 'relative' }}>
      <input type="range" min={min} max={max} step={step} value={value} onChange={onChange} style={sliderStyle} />
      <div style={thumbStyle}></div>
    </div>
  );
};

export default Slider;
