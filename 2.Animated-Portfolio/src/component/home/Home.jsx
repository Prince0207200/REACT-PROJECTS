import React from "react";
import "./Home.css";
import man1 from "../../assets/cartoon2.png";
import { Typewriter } from "react-simple-typewriter";
import Cv from "../Cv/Cv";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Home() {

  

  return (
    <div id="home">
     

      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">PRINCE GUPTA</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "SOFTWARE TESTER"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={30}
              delaySpeed={1200}
            />
          </div>

          {/* Social Icons (Visible Above CV Button in Mobile View) */}
          <div className="mobile-social">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:prince.12215879@lpu.in">
              <FaEnvelope className="social-icon" />
            </a>
          </div>

          <Cv />
        </div>
      </div>

      <div className="righthome">
        <img src={man1} alt="Avatar" />

        {/* Social Icons (Visible at Bottom in Laptop View) */}
        <div className="desktop-social">
            <div className="desktop-social-top">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="linkedin" />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="github" />
            </a>
            
            </div>
            <div className="desktop-social-bottom">
            <a href="mailto:prince.12215879@lpu.in">
              <FaEnvelope className="email" />
            </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
