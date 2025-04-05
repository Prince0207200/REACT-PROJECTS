import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";
import { devTips } from "../db";

export default function Footer() {
 

  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * devTips.length);
    setTip(devTips[randomIndex]);
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-left">
          <h2>My Portfolio</h2>
          <p>Passionate about building software solutions and exploring new technologies.</p>
        </div>

        {/* Dev Tip Section */}
        <div className="footer-center">
          <h3>Dev Tip of the Day:</h3>
          <p id="dev-tip">"{tip}"</p>
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
