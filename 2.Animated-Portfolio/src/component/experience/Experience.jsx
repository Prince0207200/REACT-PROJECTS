import React from 'react';
import './Experience.css';
import certificateimage from "../../assets/fw.png";

function Experience() {
  return (
    <section id='experience'>
      <h2>Experience</h2>

      {/* Internship Section */}
      <div className='experience-section internship'>
        <h3 className='heading-all'>Internship</h3>

        <div className='internship-content'>
          <img src={certificateimage} alt='Internship' className='internship-img' />
          <p>Completed a one-month remote software testing internship at Prodigy Infotech from February 15 to March 15.</p>

        </div>

        <div className='internship-content'>
          <img src={certificateimage} alt='Internship' className='internship-img' />
          <p>Completed a one-month remote software testing internship at Prodigy Infotech from February 15 to March 15.</p>

        </div>

      </div>

      {/* Training Section */}
      <div className='experience-section training'>
        <h3 className='heading-all'>Training</h3>

        <div className='training-content'>
          <p>Completed a 2-month training program focused on software testing and automation.</p>
          <img src={certificateimage} alt='Training' className='training-img' />
        </div>

        <div className='training-content'>
          <p>Completed a 2-month training program focused on software testing and automation.</p>
          <img src={certificateimage} alt='Training' className='training-img' />
        </div>

      </div>

      {/* Certifications Section */}
      <div className='experience-section'>
        <h3 className='heading-all'>Certifications</h3>

        <div className='certification'>
          <img src={certificateimage} alt='Certification' className='certificate-img' />
          <p>Earned the IBM DevOps and Software Engineering Professional Certificate.</p>

        </div>
        <div className='certification'>
          <img src={certificateimage} alt='Certification' className='certificate-img' />
          <p>Completed the DevOps MOOC on Coursera.</p>
        </div>

      </div>
    </section>
  );
}

export default Experience;
