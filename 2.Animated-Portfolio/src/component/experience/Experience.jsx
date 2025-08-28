import React from 'react';
import './Experience.css';
import { internshipData, trainingData, certificationData } from '../db.js';

function Experience() {
  return (
    <section id='experience'>
      <h2>Experience</h2>

      {/* Internship Section */}
      <div className='experience-section internship'>
        <h3 className='heading-all'>Internship</h3>
        {internshipData.map((internship, index) => (
          <div key={index} className='internship-content'>
            <img src={internship.image} alt='Internship' className='internship-img' />
            <div className="ab">
              <p className="internship-title for-intern-coloumn">
                <strong>{internship.title}</strong> at {internship.company}
                <span className="internship-duration"> ({internship.duration})</span>
              </p>
              <p className="internship-description for-intern-coloumn">{internship.description}</p>
              <a href="https://github.com/Prince0207200" target="_blank" rel="noopener noreferrer">
                Certificate Link
              </a>
            </div>
          </div>

        ))}
      </div>

      {/* Training Section */}
      <div className='experience-section training'>
        <h3 className='heading-all'>Training</h3>
        {trainingData.map((training, index) => (
          <div key={index} className='training-content'>
            <div className='aa'>
              <p className="training-title">
                <strong>{training.title}</strong> <span className="training-duration">({training.duration})</span>
              </p>
              <p className="training-description">{training.description}</p>
              <a href="https://github.com/Prince0207200" target="_blank" rel="noopener noreferrer">
                Certificate Link
              </a>

            </div>
            <img src={training.image} alt='Training' className='training-img' />
          </div>

        ))}
      </div>



      {/* Certifications Section */}
      <div className='experience-section'>
        <h3 className='heading-all'>Certifications</h3>
        <div className="certification-container">
          {certificationData.map((cert, index) => (
            <article key={index} className='certification-card'>
              <img src={cert.image} alt='Certification' className='certification-icon' loading="lazy" />
              <p className='certification-text'>{cert.title}</p>
              <a href="https://github.com/Prince0207200" target="_blank" rel="noopener noreferrer">
                Certificate Link
              </a>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Experience;
