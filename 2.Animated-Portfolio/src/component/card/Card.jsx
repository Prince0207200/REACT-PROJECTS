import React from 'react';
import "./Card.css";

function Card({ title, image }) {
  return (
    <div className="card">
      <div className="hovercard">
        <h3>{title}</h3>
      </div>
      <img src={image} alt={title} className="card-image" />
    </div>
  );
}

export default Card;
