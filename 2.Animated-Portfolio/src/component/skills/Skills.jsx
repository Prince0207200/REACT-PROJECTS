import React from 'react';
import './Skills.css';
import SkillCard from '../skillcard/SkillCard';
import { imagesFramework, imagesTool, imagesSkills } from '../db';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <header className="skills-header">
          <h2 className="skills-title">Technical Proficiency</h2>
        </header>
        
        <h3 className="skills-subtitle">Languages & Frameworks:</h3>
        <div className="skills-grid">
          {imagesFramework.map(({ title, image }) => (
            <SkillCard key={title} imageSrc={image} name={title} />
          ))}
        </div>

        <h3 className="skills-subtitle">Tools & Platforms:</h3>
        <div className="skills-grid">
          {imagesTool.map(({ title, image }) => (
            <SkillCard key={title} imageSrc={image} name={title} />
          ))}
        </div>

        <h3 className="skills-subtitle">Skills:</h3>
        <div className="skills-grid">
          {imagesSkills.map(({ title, image }) => (
            <SkillCard key={title} imageSrc={image} name={title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
