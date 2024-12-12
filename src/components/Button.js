import React from "react";
import "../styles/liquidCrystal.css";

const Button = ({ label, onClick }) => {
  return (
    <button className="liquid-crystal" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
