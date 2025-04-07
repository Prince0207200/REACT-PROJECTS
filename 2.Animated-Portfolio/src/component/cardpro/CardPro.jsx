
import React from "react";
import "./CardPro.css";

function CardPro({ title, image, about, description, techStack, liveLink, codeLink, date, projectType }) {
  return (
    <div className="cardpro">
      <h1 className="card-title">{title}</h1>
      <img src={image} alt={title} className="card-image" />

      <p className="card-date">📅 {date}</p> 
      <p className="card-type">⚡ {projectType}</p>  
      <p className="hover-indicator"></p>  





      <div className="hovercardpro">
        <div className="hover-content">
          <h3>{title}</h3>
          <p className="card-desc">{about}</p>
          {description && <p className="card-detail">{description}</p>}
          {techStack && <p className="tech-stack"><strong>Tech Used:</strong> {techStack}</p>}
          <div className="project-links">
            {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-live">🔗 Live Demo</button>
            </a>}
            {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-code">💻 Source Code</button>
            </a>}
          </div>
        </div>



      </div>




    </div>
  );
}

export default CardPro;
