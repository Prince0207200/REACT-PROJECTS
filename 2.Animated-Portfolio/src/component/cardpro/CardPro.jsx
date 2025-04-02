
import React from "react";
import "./CardPro.css";

function CardPro({ title, image, about, description, techStack }) {
  return (
    <div className="cardpro">
      {/* Default Visible Content */}
      <img src={image} alt={title} className="card-image" />
      <h1 className="card-title">{title}</h1>

      {/* Hidden Content Appears on Hover */}
      <div className="hovercardpro">
        <h3>{title}</h3>
        <p className="card-desc">{about}</p>
        {description && <p className="card-detail">{description}</p>}
        {techStack && <p className="tech-stack"><strong>Tech Used:</strong> {techStack}</p>}
      </div>
    </div>
  );
}

export default CardPro;
