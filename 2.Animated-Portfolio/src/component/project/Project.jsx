import React from 'react';
import './Project.css';
import CardPro from '../cardpro/CardPro';
import { desc } from '../db.js'; 

function Project() {
  return (
    <div id='project'>
      <h1 className='ph'>Projects</h1>
      <div className="slider1">
        {desc.map((project, index) => (
          <CardPro 
            key={index}
            title={project.title}
            image={project.image} 
            about={project.about} 
            description={project.description} 
            techStack={project.techStack} 
            liveLink={project.liveLink} 
            codeLink={project.codeLink} 
            date={project.date}
            projectType={project.projectType}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
