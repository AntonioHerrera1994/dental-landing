import React from 'react';
import '../styles/cardcomponent.css'

const CardComponent = ({ icon, title, description, bgImage }) => {
  return (
    <div
      className="service-card"
      style={{ '--bg-image': `url(${bgImage})` }}
    >
      <div className="icon">{icon}</div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default CardComponent;
