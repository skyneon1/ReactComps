import React from "react";
import "./Showcase.css";

const CardShowcase = () => {
  return (
    <div className="showcase">
      <h2>Cards</h2>
      <div className="card">
        <h3>Card Title</h3>
        <p>This is a card description.</p>
        <button className="btn outline">Learn More</button>
      </div>
    </div>
  );
};

export default CardShowcase;
