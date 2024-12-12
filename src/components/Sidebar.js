import React from "react";
import { Link } from "react-scroll"; // Importing Link from react-scroll
import "../styles/Layout.css"; // Assuming your CSS file is correctly set up

const Sidebar = () => {
  const sidebarStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "250px",
    height: "100vh",
    background: "linear-gradient(45deg, #f06, #00f, #0ff, #f0f)",
    backgroundSize: "400% 400%",
    animation: "liquidCrystal 10s ease infinite",
    color: "white",
    paddingTop: "20px",
    boxShadow: "2px 0 10px rgba(0, 0, 0, 0.3)",
    overflowY: "auto", // Enables scrolling
    zIndex: "999", // Lower than the navbar's z-index
    backdropFilter: "blur(10px)", // Adds blur effect to background
    transition: "background 0.5s ease",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "15px 25px",
    marginBottom: "15px",
    borderRadius: "5px",
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
    display: "block",
  };

  // Liquid Crystal animation
  const liquidCrystalAnim = `
    @keyframes liquidCrystal {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 100%;
      }
      100% {
        background-position: 0% 0%;
      }
    }
  `;

  return (
    <>
      <style>
        {liquidCrystalAnim}
      </style>
      <aside style={sidebarStyle}>
        <ul>
          <li>
            <Link to="Button" smooth={true} duration={500} style={linkStyle} activeClass="active">
              Button
            </Link>
          </li>
          <li>
            <Link to="Modal" smooth={true} duration={500} style={linkStyle} activeClass="active">
              Modal
            </Link>
          </li>
          <li>
            <Link to="Card" smooth={true} duration={500} style={linkStyle} activeClass="active">
              Card
            </Link>
          </li>
          <li>
            <Link to="Tooltip" smooth={true} duration={500} style={linkStyle} activeClass="active">
              Tooltip
            </Link>
          </li>
          <li>
            <Link to="Accordion" smooth={true} duration={500} style={linkStyle} activeClass="active">
              Accordion
            </Link>
          </li>
          <li>
            <Link to="Dropdown" smooth={true} duration={500} style={linkStyle} activeClass="active">
              Dropdown
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
