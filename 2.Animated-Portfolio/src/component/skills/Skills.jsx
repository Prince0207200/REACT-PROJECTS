import React from 'react';
import './Skills.css';
import JestLogo from '../../assets/mern.png';
import SkillCard from '../../skillcard/SkillCard';

import reactImg from '../../assets/react.png';
import htmlImg from '../../assets/html-5.png';
import cssImg from '../../assets/css-3.png';
import javaImg from '../../assets/java.png';
import cImg from '../../assets/c (2).png';
import cppImg from '../../assets/cpp.png';
import nodeImg from '../../assets/node-js.png';
import mongoImg from '../../assets/mongo-db.png';
import expressImg from '../../assets/express.png';
import jsImg from '../../assets/js.png';
import sqlImg from '../../assets/sql.png';
import mysqlImg from '../../assets/mysql.png';
import gitImg from '../../assets/git.png';
import githubImg from '../../assets/github.png';
import seleniumImg from '../../assets/selenium.png';
import eclipseImg from '../../assets/eclipse.png';
import psImg from '../../assets/problem-solving.png';
import adaptImg from '../../assets/adaptable.png';
import teampImg from '../../assets/team-player.png';
import dsaImg from '../../assets/dsa.png';




function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <header className="skills-header">
          <h2 className="skills-title">Technical Proficiency</h2>
        </header>
        <h3 className="skills-subtitle">Languages & Frameworks:</h3>
        <div className="skills-grid">
          <SkillCard imageSrc={reactImg} name="React" />
          <SkillCard imageSrc={htmlImg} name="Html" />
          <SkillCard imageSrc={cssImg} name="Css" />
          <SkillCard imageSrc={javaImg} name="Java" />
          <SkillCard imageSrc={cImg} name="C" />
          <SkillCard imageSrc={cppImg} name="Cpp" />
          <SkillCard imageSrc={jsImg} name="Javascript" />
          <SkillCard imageSrc={nodeImg} name="Node" />
          <SkillCard imageSrc={expressImg} name="Express" />
          <SkillCard imageSrc={sqlImg} name="Sql" />
          
          

          
        </div>
        <h3 className="skills-subtitle">Tools & Platforms:</h3>
        <div className="skills-grid">
        <SkillCard imageSrc={mysqlImg} name="MySql" />
          <SkillCard imageSrc={mongoImg} name="mongo-db" />
          <SkillCard imageSrc={gitImg} name="Git" />
          <SkillCard imageSrc={githubImg} name="Github" />
          <SkillCard imageSrc={seleniumImg} name="selenium" />
          <SkillCard imageSrc={eclipseImg} name="eclipse" />
          
          
          

          
        </div>
        <h3 className="skills-subtitle">Skills:</h3>
        <div className="skills-grid">
          <SkillCard imageSrc={psImg} name="Problem Solving" />
          <SkillCard imageSrc={adaptImg} name="Adaptability" />
          <SkillCard imageSrc={teampImg} name="team player" />
          <SkillCard imageSrc={dsaImg} name="dsa" />
          
          
          

          
        </div>
      </div>
    </section>
  );
}

export default Skills;
