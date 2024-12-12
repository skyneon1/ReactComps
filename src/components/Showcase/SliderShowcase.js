import React, { useState } from "react";
import "./Showcase.css";

const SliderShowcase = () => {
  const [value, setValue] = useState(50);

  return (
    <div className="showcase">
      <h2>Slider</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default SliderShowcase;
