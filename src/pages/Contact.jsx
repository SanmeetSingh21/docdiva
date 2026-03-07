import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const FAQS = [
  {
    q: "What conditions does Dr. Divya treat?",
    a: "We specialize in recurrent infections (yeast, BV, UTIs), painful periods, endometriosis, PCOS, fibroids, pelvic floor dysfunction, fertility concerns, menopause symptoms, and sexual health issues. If it's affecting your quality of life, it's worth discussing."
  },
  {
    q: "How is this different from my regular gynecologist?",
    a: "We go deeper. Most clinic visits are 7-10 minutes. At Clinic Divya, first consultations are never rushed. We take a full history, listen to everything, and build treatment around the root cause — not just the symptom."
  },
  {
    q: "Do you treat conditions other doctors have dismissed?",
    a: "Yes. Many of our patients come after years of being told their pain is 'normal' or 'stress-related.' We take a thorough, evidence-based approach to every concern, no matter how many times it's been waved away."
  },
  {
    q: "Are virtual consultations available?",
    a: "Yes. Virtual consultations are available for follow-ups, second opinions, and many initial concerns. We'll let you know at the time of booking if an in-person visit is necessary."
  },
  {
    q: "How do I prepare for my first appointment?",
    a: "Bring a list of any symptoms, medications, and questions. There's nothing too embarrassing or too small to mention. The more you share, the more we can help."
  }
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="faq-q">
        <span>{q}</span>
        <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points={open ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
        </svg>
      </div>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Two clinics. One promise: You will be heard.</p>
        </div>
      </section>

      {/* CLINICS */}
      <section className="clinics-section">
        <div className="container">
          <div className="clinics-header">
            <span className="section-tag">Our Locations</span>
            <p className="section-subtitle">Whether you're in South Delhi or closer to GK, quality care is never far. Same doctor, same approach, same commitment to actually listening.</p>
          </div>

          <div className="clinics-grid">

            <div className="clinic-card">
              <div className="clinic-num">01</div>
              <div className="clinic-body">
                <h3>Greater Kailash Clinic</h3>
                <div className="clinic-tag">The GK Practice</div>
                <div className="clinic-details">
                  <div className="clinic-detail-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>M-Block, Greater Kailash Part 1<br />New Delhi - 110048</span>
                  </div>
                  <div className="clinic-detail-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                    <span>98765 11920 (Call / WhatsApp)</span>
                  </div>
                  <div className="clinic-detail-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>Mon – Fri: 09:00 AM – 01:00 PM<br />Saturday: 10:00 AM – 02:00 PM</span>
                  </div>
                </div>
                <a href="https://maps.google.com/?q=Greater+Kailash+1+New+Delhi" target="_blank" rel="noreferrer" className="clinic-map-link">View on Map →</a>
              </div>
            </div>

            <div className="clinic-card">
              <div className="clinic-num">02</div>
              <div className="clinic-body">
                <h3>Kalkaji Clinic</h3>
                <div className="clinic-tag">The Kalkaji Practice</div>
                <div className="clinic-details">
                  <div className="clinic-detail-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Kalkaji, New Delhi - 110019</span>
                  </div>
                  <div className="clinic-detail-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                    <span>98765 11920 (Call / WhatsApp)</span>
                  </div>
                  <div className="clinic-detail-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span>Mon – Sat: 09:00 AM – 06:00 PM</span>
                  </div>
                </div>
                <a href="https://maps.google.com/?q=Kalkaji+New+Delhi" target="_blank" rel="noreferrer" className="clinic-map-link">View on Map →</a>
              </div>
            </div>

            <div className="clinic-card">
              <div className="clinic-num">03</div>
              <div className="clinic-body">
                <h3>Can't Visit In Person?</h3>
                <div className="clinic-tag">Virtual Consultations</div>
                <div className="clinic-details">
                  <div className="clinic-detail-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                    <span>Available for follow-ups, second opinions, and many initial concerns from wherever you are.</span>
                  </div>
                  <div className="clinic-detail-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                    <span>98765 11920 (Call / WhatsApp)</span>
                  </div>
                </div>
                <div className="virtual-actions">
                  <a href="https://wa.me/919876511920" target="_blank" rel="noreferrer" className="btn-primary">💬 WhatsApp to Book</a>
                  {/* <Link to="/appointment" className="btn-outline">Ask Doc Diva</Link> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="quick-contact-section">
        <div className="container">
          <div className="quick-contact-grid">
            <a href="tel:9876511920" className="qc-card">
              <div className="qc-icon">📞</div>
              <strong>Emergency Phone</strong>
              <span>98765 11920</span>
              <small>Call us Anytime 24/7</small>
            </a>
            <div className="qc-card">
              <div className="qc-icon">📍</div>
              <strong>Address</strong>
              <span>Kalkaji, New Delhi</span>
              <small>& Greater Kailash</small>
            </div>
            <a href="https://wa.me/919876511920" className="qc-card" target="_blank" rel="noreferrer">
              <div className="qc-icon">💬</div>
              <strong>Book by WhatsApp</strong>
              <span>98765 11920</span>
              <small>Quick and easy booking</small>
            </a>
            <a href="mailto:clinic@drdivya.com" className="qc-card">
              <div className="qc-icon">✉️</div>
              <strong>Email Us</strong>
              <span>clinic@drdivya.com</span>
              <small>appointments@drdivya.com</small>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="container">
          <div className="contact-faq-inner">
            <div className="faq-left">
              <span className="section-tag">FAQ</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Have a question you've been too embarrassed to Google? You're in the right place.</p>
              <Link to="/appointment" className="btn-primary" style={{ marginTop: "28px" }}>Ask Dr. Divya →</Link>
            </div>
            <div className="faq-right">
              {FAQS.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}