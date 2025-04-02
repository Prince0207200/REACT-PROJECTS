import React from 'react';
import './About.css';


function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-left">
          <img src="your-profile-image.jpg" alt="Profile" className="profile-pic" />
        </div>

        <div className="about-right">
          <h2>About Me</h2>
          <p>
            <span><b>Hi!</b></span>
          </p>
          <p>
            I'm a passionate Full-Stack Developer & Software Tester 🚀.
            I specialize in <b>React, Node.js, and DevOps</b>, with expertise in testing methodologies.
          </p>
          <p>
            I love <b>building scalable applications</b>  and ensuring their <b>quality</b> with automation.
          </p>
          <p>
          Currently, I'm pursuing <b>Computer Science Engineering</b> at <b>Lovely Professional University</b>, with a <b>CGPA of 7.76</b>.          </p>
          <p>
            My educational journey includes:
          </p>
          <p>
            📌 <b id='school'>Intermediate:</b> Shri Raghukul Vidya Peeth (<b>70%</b>)
          </p>
          <p>
            📌 <b id='school'>Matriculation:</b> Narayana Public School (<b>76.66%</b>)
          </p>
        </div>
      </div>


    </section>
  );
}

export default About;
