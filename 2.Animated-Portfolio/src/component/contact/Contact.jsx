
import { Mail, Phone, MapPin } from "lucide-react";
import "./contact.css";

export default function Contact() {
 

  return (
    <div className="contact-container" id="contact">
      {/* Left Side - Contact Details */}
      <div className="left-contact">
        <div className="contact-card">
          <h2 className="contact-title">Get in Touch</h2>

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
            <div className="contact-item">
              <MapPin className="icon red" />
              <span>Gonda, Uttar Pradesh</span>
            </div>
            <div className="contact-item">
              <MapPin className="icon red" />
              <span>Gonda, Uttar Pradesh</span>
            </div>
            <div className="contact-item">
              <MapPin className="icon red" />
              <span>Gonda, Uttar Pradesh</span>
            </div>
            
            
          </div>

          
        </div>
      </div>

     
      <div className="right-contact">
        <form action="https://formspree.io/f/moveldpk" method="POST">
          <input name="Username" type="text" placeholder="Name" required />
          <input name="Email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}
