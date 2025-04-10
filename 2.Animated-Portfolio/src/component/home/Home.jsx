import React, { useState } from "react";
import "./Home.css";
import man1 from "../../assets/cartoon2.png";
import { Typewriter } from "react-simple-typewriter";
import Cv from '../cv/Cv.jsx'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
function Home() {

  const [isOpen, setIsOpen] = useState(false);

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
            
            <a href="https://github.com/Prince0207200" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:prince.12215879@lpu.in">
              <FaEnvelope className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/prince-gupta-/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
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
            <a href="https://leetcode.com/u/princegupta1455_/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode  className="linkedin desk-top" />
            </a>
            <a href="https://github.com/Prince0207200" target="_blank" rel="noopener noreferrer">
              <FaGithub className="github desk-top" />
            </a>
            <a href="https://www.linkedin.com/in/prince-gupta-/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="github desk-top" />
            </a>
              

          </div>
          <div className="desktop-social-bottom">
            <div className="arrow" onClick={() => setIsOpen(!isOpen)}>
              <RiArrowDownDoubleLine  style={{ display: isOpen ? "none" : "block" }} />
            </div>
            {isOpen && (
              <div className="content">
                <a href="mailto:prince.12215879@lpu.in">
                  <FaEnvelope className="email desk-top" />
                </a>
                <a href="https://codeforces.com/profile/princegupta1455_" target="_blank" rel="noopener noreferrer">
              <SiCodeforces className="github" />
            </a>
                <div className="arrow-bottom" onClick={() => setIsOpen(!isOpen)}>
                  <RiArrowUpDoubleLine />
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
