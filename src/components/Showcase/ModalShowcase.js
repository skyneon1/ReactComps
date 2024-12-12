import React, { useState } from "react";
import "./Showcase.css";

const ModalShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="showcase">
      <h2>Modal</h2>
      <button className="btn primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Modal Title</h3>
            <p>This is a modal description.</p>
            <button className="btn secondary" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalShowcase;
