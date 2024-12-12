import React from "react";
import "./Showcase.css";

const FormShowcase = () => {
  return (
    <div className="showcase">
      <h2>Forms</h2>
      <form>
        <input type="text" placeholder="Enter your name" />
        <button type="submit" className="btn primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormShowcase;
