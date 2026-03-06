import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Doc Diva</div>
            <p>Compassionate, evidence-based gynecological care for women at every stage of life.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/appointment">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li><a href="tel:9876511920">📞 98765 11920</a></li>
              <li><span>📍 Kalkaji, New Delhi</span></li>
              <li><a href="mailto:clinic@drdivya.com">✉️ clinic@drdivya.com</a></li>
              <li><span>🕐 Mon-Sat: 9AM - 6PM</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Working Hours</h4>
            <div className="hours-list">
              <div className="hour-row"><span>Monday - Thursday</span><span>08:00 - 20:00</span></div>
              <div className="hour-row"><span>Friday</span><span>10:00 - 16:00</span></div>
              <div className="hour-row"><span>Saturday</span><span>10:00 - 16:00</span></div>
              <div className="hour-row closed"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2026 © Doc Diva — Website Copyright by CodeFuel Consulting</p>
          <div className="footer-bottom-links">
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
