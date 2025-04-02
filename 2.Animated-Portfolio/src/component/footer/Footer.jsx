import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const devTips = [
    "Keep functions pure for better testability!",
    "Write code as if the next developer is a serial killer who knows where you live. 😆",
    "Don't repeat yourself (DRY) – use functions and components wisely.",
    "Console.log() is great, but learn to use breakpoints in DevTools!",
    "Readability is more important than cleverness. Keep it simple!",
    "Use meaningful variable names – no more 'x' and 'y'! 🚀",
    "Comment WHY the code exists, not WHAT it does.",
    "Master Git – it's your safety net!"
  ];

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
