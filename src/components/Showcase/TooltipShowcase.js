import React from "react";
import "./Showcase.css";

const TooltipShowcase = () => {
  return (
    <div className="showcase">
      <h2>Tooltips</h2>
      <div className="tooltip-container">
        <button className="btn">Hover Me</button>
        <span className="tooltip">This is a tooltip!</span>
      </div>
    </div>
  );
};

export default TooltipShowcase;
