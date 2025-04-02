import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Contact.css"; // Import the CSS file
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        {/* Left Section - Contact Details */}
        <div className="left-contact">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out for collaborations, project discussions, or any queries.
            I'll get back to you as soon as possible.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <Mail className="icon blue" />
              <span>princegupta1455@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone className="icon green" />
              <span>+91 9315830456</span>
            </div>
            <div className="contact-item">
              <MapPin className="icon red" />
              <span>Gonda, Uttar Pradesh</span>
            </div>
           




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
        </div>

        {/* Right Section - Contact Form */}
        <div className="right-contact">
          <h3>Send a Message</h3>
          <form action="https://formspree.io/f/moveldpk" method="POST">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="Username" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Type your message..." required></textarea>
            </div>
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
