// src/components/Form.js
import React from 'react';

const Form = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    onSubmit(Object.fromEntries(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="inputField" placeholder="Enter something" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
