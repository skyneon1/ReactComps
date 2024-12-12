import React, { useState } from "react";
import "./Showcase.css";

const AccordionShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="showcase">
      <h2>Accordion</h2>
      <div className="accordion">
        <button className="btn outline" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide" : "Show"} Content
        </button>
        {isOpen && <p>This is the expanded accordion content.</p>}
      </div>
    </div>
  );
};

export default AccordionShowcase;
