import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div className="about-hero-content">
              <span className="section-tag">About Us</span>
              <h1 className="section-title">More Than a Gynecologist</h1>
              <p className="section-subtitle">
                A translator between your body and the medical world. Dr. Divya Narang Wadhwan built Clinic Divya on a simple belief: every woman deserves to be heard, believed, and treated with evidence — not assumptions.
              </p>
              <Link to="/appointment" className="btn-primary" style={{ marginTop: "32px" }}>Book a Consultation →</Link>
            </div>
            <div className="about-hero-img">
              <div className="img-accent-bg" />
              <img
                src="/images/doctor-profile.png"
                alt="Dr. Divya Narang Wadhwan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-inner">
            <div className="story-left">
              <span className="section-tag">Her Story</span>
              <h2 className="section-title">Why Clinic Divya Exists</h2>
            </div>
            <div className="story-right">
              <p>After more than a decade in clinical practice, Dr. Divya saw the same story repeated: women dismissed, conditions undertreated, and real concerns met with "it's probably stress." Clinic Divya was built to change that.</p>
              <p>The name itself is a statement. Women who know their bodies, ask the hard questions, and refuse to accept "just live with it" as an answer — they're the Clinic Divya. This clinic is for them.</p>
              <p>From recurrent infections to complex hormonal conditions, the practice is built around time, attention, and evidence. Not the conveyor-belt model of healthcare that leaves patients more confused than when they walked in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Profile */}
      <section className="profile-section">
        <div className="container">
          <div className="profile-inner">
            <div className="profile-img-col">
              <img
                src="/images/hero-doctor.png"
                alt="Dr. Divya"
              />
            </div>
            <div className="profile-content">
              <span className="section-tag">Dr. Divya Narang Wadhwan</span>
              <h2 className="section-title">Gynecologist & Women's Health Specialist</h2>
              <div className="profile-quals">
                {[
                  "MBBS, MD (Obstetrics & Gynecology)",
                  "Specialization in Endometriosis & PCOS",
                  "Pelvic Floor Rehabilitation Certified",
                  "15+ Years Clinical Experience",
                  "5000+ Patients Successfully Treated"
                ].map((q, i) => (
                  <div className="qual-item" key={i}>
                    <span className="qual-check">✓</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
              <p className="profile-bio">
                Dr. Divya trained at some of India's leading medical institutions and has spent her career at the intersection of evidence-based medicine and compassionate care. She speaks at conferences, contributes to research, and — most importantly — spends real time with every patient.
              </p>
              <div className="profile-contact">
                <a href="tel:9876511920" className="btn-primary">📞 Call Dr. Divya</a>
                <Link to="/appointment" className="btn-outline">Ask a Question</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">The Clinic Divya Way</h2>
            <p className="section-subtitle">Everything we do is shaped by three core beliefs about women's healthcare.</p>
          </div>
          <div className="values-grid">
            {[
              { num: "01", title: "You Know Your Body", desc: "You're not being dramatic. You're not exaggerating. When something feels wrong, it's worth investigating. We start with belief, not skepticism." },
              { num: "02", title: "Evidence First, Always", desc: "Treatment decisions at Clinic Divya are grounded in the latest research. We don't rely on what's 'always been done.' We do what actually works." },
              { num: "03", title: "Dignity in Every Visit", desc: "Healthcare should never feel humiliating. No condescension. No rushing. No dismissals. Every appointment is a conversation between equals." },
            ].map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-num">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-inner">
            <div>
              <h2>Ready to Be Heard?</h2>
              <p>Book your appointment and experience the care you've been looking for.</p>
            </div>
            <div className="about-cta-btns">
              <Link to="/appointment" className="btn-primary">Make an Appointment →</Link>
              <Link to="/contact" className="btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
