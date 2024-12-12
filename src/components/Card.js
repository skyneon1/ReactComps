import React from 'react';

const Card = ({ title, description, image }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    marginBottom: '20px',
    transition: 'all 0.3s ease',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '15px',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#777',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '15px',
  };

  return (
    <div style={cardStyle}>
      {image && <img src={image} alt="Card Image" style={imageStyle} />}
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default Card;
