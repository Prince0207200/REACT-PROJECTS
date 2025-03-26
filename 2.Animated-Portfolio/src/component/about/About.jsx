import React from 'react'
import './About.css'
import Card from '../card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"



function About() {
  

  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle">

          </div>
          <div className="line11 line"></div>
          <div className="circle" ></div>
          <div className="line12 line">

          </div>
          <div className="circle">

          </div>

        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : PRINCE GUPTA
              </li>
              <li>
                <span>AGE</span> : 22 YEARS
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
              </li>



            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : B.TECH
              </li>
              <li>
                <span>BRANCH</span> : CSE
              </li>
              <li>
                <span>COLLEGE</span> : LOVELY PROFESSIONAL UNIVERSITY
              </li>
              <li>
                <span>CGPA</span> : 7.78
              </li>



            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                MERN STACK DEVELOPER
              </li>
              <li>
                DSA, CPP, HTML, CSS, 
              </li>
              <li>
              
              </li>
              <li>
                SELENIUM, POSTMAN
              </li>

            </ul>
          </div>

        </div>

      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
        <Card title="JAVA" image={java}/>
        <Card title="DSA" image={dsa}/>
      </div>

    </div>
  )
}

export default About