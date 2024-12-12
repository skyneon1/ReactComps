import React from 'react';

const Input = ({ label, type, placeholder, value, onChange }) => {
  const inputStyle = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '1rem',
    marginBottom: '15px',
    transition: 'all 0.3s ease',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '1rem',
    color: '#333',
  };

  const inputFocusStyle = {
    ...inputStyle,
    borderColor: '#007bff',
    boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
  };

  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        style={inputStyle}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={(e) => e.target.style = inputFocusStyle}
        onBlur={(e) => e.target.style = inputStyle}
      />
    </div>
  );
};

export default Input;
