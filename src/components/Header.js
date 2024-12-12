import React from "react";

const Header = () => {
  const headerStyle = {
    background: "linear-gradient(45deg, #00bcd4, #ff4081)",
    color: "white",
    padding: "100px 20px",
    textAlign: "center",
    borderRadius: "0 0 20px 20px",
    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.2)",
    position: "relative",
    overflow: "hidden",
    animation: "pulseEffect 2s infinite alternate",
    zIndex: "10",  // To keep the content above the background layers
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "20px",
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.6)", // Glow effect for text
    animation: "titleAnim 1.5s ease-out",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    fontWeight: "400",
    lineHeight: "1.5",
    marginBottom: "40px",
    animation: "fadeIn 2s ease-out",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",  // Text shadow for subtle glow
  };

  // Liquid background animation keyframes
  const liquidEffect = `
    @keyframes liquidEffect {
      0% {
        transform: translateY(-10px);
      }
      50% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(-10px);
      }
    }
  `;

  // Pulsing Animation
  const pulseEffect = `
    @keyframes pulseEffect {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.05);
      }
    }
  `;

  // Title animation
  const titleAnim = `
    @keyframes titleAnim {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `;

  // Fade-in effect for subtitle
  const fadeIn = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  // Liquid border animation
  const liquidBorderEffect = `
    @keyframes liquidBorder {
      0% {
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
      }
      50% {
        box-shadow: 0px 0px 40px rgba(255, 255, 255, 0.7);
      }
      100% {
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
      }
    }
  `;

  // Particles background animation
  const particlesBackground = `
    @keyframes particlesBackground {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }
  `;

  return (
    <>
      <style>
        {liquidEffect}
        {pulseEffect}
        {titleAnim}
        {fadeIn}
        {liquidBorderEffect}
        {particlesBackground}
      </style>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Explore Amazing UI Components</h1>
        <p style={subtitleStyle}>
          Build interactive and dynamic React components effortlessly!
        </p>
        <div style={{ marginTop: "50px", fontSize: "1.1rem" }}>
          <a href="#components" style={styles.link}>Explore Components</a>
        </div>
      </header>
    </>
  );
};

// Custom link styles for interactive hover effect
const styles = {
  link: {
    color: "#ff4081",
    textDecoration: "none",
    padding: "10px 20px",
    border: "2px solid #ff4081",
    borderRadius: "30px",
    background: "transparent",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Header;
