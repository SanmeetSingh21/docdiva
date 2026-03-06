import { useState } from "react";
import "./Appointment.css";

export default function Appointment() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="appt-page">
        <section className="appt-success">
          <div className="container">
            <div className="success-box">
              <div className="success-check">✓</div>
              <h1>Message Sent!</h1>
              <p>Thank you, <strong>{form.name}</strong>. Dr. Divya's team will get back to you within 24 hours.</p>
              <div className="success-actions">
                <a href="tel:9876511920" className="btn-primary">📞 Call Instead</a>
                <a href="/" className="btn-outline">Back to Home</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="appt-page">
      <section className="appt-hero">
        <div className="container">
          <div className="appt-hero-inner">
            <div className="appt-hero-text">
              <span className="section-tag">Get in Touch</span>
              <h1 className="section-title">Ask Doc Diva</h1>
              <p className="section-subtitle">
                Have a question? Want to book a consultation? Fill in the form and Dr. Divya's team will get back to you within 24 hours.
              </p>
              {/* <div className="appt-trust">
                <div className="trust-badge"><span className="trust-check">✓</span>Confidential</div>
                <div className="trust-badge"><span className="trust-check">✓</span>Same-day confirmation</div>
                <div className="trust-badge"><span className="trust-check">✓</span>Virtual or in-clinic</div>
              </div> */}
            </div>

            <div className="appt-contact-sidebar">
              <div className="sidebar-card">
                <h3>Prefer to call?</h3>
                <a href="tel:9876511920" className="sidebar-phone">📞 98765 11920</a>
                <p>Available Mon–Sat, 9AM–6PM</p>
              </div>
              <div className="sidebar-card whatsapp">
                <h3>Book via WhatsApp</h3>
                <a href="https://wa.me/919876511920" target="_blank" rel="noreferrer" className="btn-primary">💬 WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="appt-form-section">
        <div className="container">
          <div className="appt-form-wrap">
            <form className="appt-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>
              <p>Describe your concern and we'll reach out to schedule your appointment.</p>

              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us what's on your mind — your symptoms, questions, or anything you'd like Dr. Divya to know..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message →
              </button>

              <p className="form-note">Your information is completely confidential and never shared.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}