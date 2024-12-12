import React from "react";

const Footer = () => {
  const footerStyle = {
    position: "relative",
    background: "linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(0, 0, 255, 0.2))",
    padding: "50px 0",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    animation: "liquidFlow 5s infinite linear", // Animation to simulate liquid motion
  };

  const footerTextStyle = {
    position: "relative",
    zIndex: 2,
    fontSize: "1rem",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
    letterSpacing: "1px",
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  // Liquid Background Animation
  const liquidAnimation = `
    @keyframes liquidFlow {
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
      <style>{liquidAnimation}</style>
      <footer style={footerStyle}>
        <p style={footerTextStyle}>
          &copy; 2024 React UI Showcase. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
