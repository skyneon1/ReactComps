import React from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">React UI Showcase</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/docs" className="nav-link">Docs</Link>
        <Link to="/playground" className="nav-link">Playground</Link>
        <button className="showcase-btn">Showcase</button>
      </div>
    </nav>
  );
};

export default Navbar;
