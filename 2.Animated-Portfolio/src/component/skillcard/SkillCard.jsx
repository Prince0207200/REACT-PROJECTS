import React from 'react';
import './SkillCard.css'; // Import the CSS file

function SkillCard({ imageSrc, name }) {
  return (
    <article className="skill-card">
      <img className="skill-icon" src={imageSrc} alt={`${name} icon`} loading="lazy" />
      <p className="skill-text">{name}</p>
    </article>
  );
}

export default SkillCard;
