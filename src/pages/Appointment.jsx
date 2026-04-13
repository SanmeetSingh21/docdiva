import { useState } from "react";
import "./Appointment.css";

export default function Appointment() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        // Open WhatsApp with pre-filled message
        const text = `Hello Dr. Divya,%0A%0AI would like to book an appointment.%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(form.message)}`;
        window.open(`https://wa.me/919625486033?text=${text}`, "_blank");
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Could not connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
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
                <a href="tel:9625486033" className="btn-primary">📞 Call Instead</a>
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
              <h1 className="section-title">Ask Dr. Divya</h1>
              <p className="section-subtitle">
                Have a question? Want to book a consultation? Fill in the form and Dr. Divya's team will get back to you within 24 hours.
              </p>
            </div>

            <div className="appt-contact-sidebar">
              <div className="sidebar-card">
                <h3>Prefer to call?</h3>
                <a href="tel:9625486033" className="sidebar-phone">📞 96254 86033</a>
                <p>Available Mon–Sat, 9AM–6PM</p>
              </div>
              <div className="sidebar-card whatsapp">
                <h3>Book via WhatsApp</h3>
                <a href="https://wa.me/919625486033" target="_blank" rel="noreferrer" className="btn-primary">💬 WhatsApp Us</a>
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

              {error && (
                <p style={{ color: "#c0392b", fontSize: "14px", marginBottom: "12px" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              <p className="form-note">Your information is completely confidential and never shared.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}