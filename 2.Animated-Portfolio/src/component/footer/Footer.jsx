import React from "react";
import { FaLinkedin, FaArrowUp, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
       
        <div className="footer-left">
          <h2>My Portfolio</h2>
          <p>Passionate about building software solutions and exploring new technologies.</p>
        </div>

   
        <div className="footer-center">
          <h3>Connect with Me</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin" />
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon github" />
            </a>
            <a href="mailto:prince.12215879@lpu.in">
              <FaEnvelope className="social-icon email" />
            </a>
           
          </div>
        </div>

        
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prince Gupta. All Rights Reserved.</p>
        <FaArrowUp className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      </div>
    </footer>
  );
}
