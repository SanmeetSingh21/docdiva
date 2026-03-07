import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const TREATMENTS = [
  {
    title: "Recurrent Infections",
    desc: "Yeast infections, BV, UTIs that keep coming back? We find the root cause, not just another prescription.",
    img: "/images/infections.png",
    tag: "Infections"
  },
  {
    title: "Painful Periods & Endometriosis",
    desc: '"Period pain is normal" is a myth. If your cycle disrupts your life, it\'s time for real answers.',
    img: "/images/periods.png",
    tag: "Menstrual Health"
  },
  {
    title: "PCOS & Hormonal Health",
    desc: "Irregular periods, weight changes, acne, hair loss — hormonal imbalances deserve more than generic advice.",
    img: "/images/pcos.png",
    tag: "Hormones"
  },
  {
    title: "Fibroids & Ovarian Cysts",
    desc: "Monitoring, management, or intervention — we help you understand your options without the Google panic.",
    img: "/images/fibroids.png",
    tag: "Uterine Health"
  },
  {
    title: "Pelvic Floor & Sexual Health",
    desc: "Pain during intimacy, leakage, or discomfort? These aren't things you 'just deal with.' They're treatable.",
    img: "/images/pelvic.png",
    tag: "Sexual Health"
  },
  {
    title: "Fertility & Preconception Care",
    desc: "Planning for pregnancy? We'll make sure your body — and your knowledge — are ready.",
    img: "/images/fertility.png",
    tag: "Fertility"
  }
];

const STEPS = [
  { num: "01", title: "Book Your Slot", desc: "Call us, message us, or book online. Choose in-clinic or virtual. We'll confirm within hours, not days." },
  { num: "02", title: "The Real Conversation", desc: "No rushed consult. No dismissals. Share everything — your symptoms, your fears, your Google results. We listen." },
  { num: "03", title: "Clarity, Not Confusion", desc: "We explain what's happening in plain language. You'll leave knowing exactly what's going on and why." },
  { num: "04", title: "A Plan That Works For You", desc: "Treatment tailored to your body, your life, and your goals. Follow-ups are built in, not an afterthought." }
];

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

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setActiveStep(s => (s + 1) % 4), 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="container hero-inner">
          <div className="hero-content">
            {/* <div className="hero-badge">Virtual consultations available for follow-ups and second opinions</div> */}
            <h1 className="hero-title">
              Your Body Deserves<br />
              <em>Answers,</em> Not Guesswork
            </h1>
            <p className="hero-text">
              Dr. Divya Narang Wadhwan provides compassionate, evidence-based gynecological care for women at every stage of life. No judgment. No dismissals. Just the truth your Google search couldn't give you.
            </p>
            <div className="hero-actions">
              <Link to="/appointment" className="btn-primary">Ask Dr. Divya →</Link>
              <Link to="/about" className="btn-outline">Learn More</Link>
            </div>
            <div className="hero-stats">
              <div className="stat"><span className="stat-num">5000+</span><span>Patients Helped</span></div>
              <div className="stat-divider" />
              <div className="stat"><span className="stat-num">15+</span><span>Years Experience</span></div>
              <div className="stat-divider" />
              <div className="stat"><span className="stat-num">4.9★</span><span>Patient Rating</span></div>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-img-bg" />
            <img
              src="/images/hero-doctor.png"
              alt="Dr. Divya Narang Wadhwan"
              className="hero-img"
            />
            <div className="hero-float-card">
              <div className="float-icon">✓</div>
              <div>
                <div className="float-title">Evidence-Based Care</div>
                <div className="float-sub">Treatments backed by latest research</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="why-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why Women Trust Dr. Divya</h2>
            <p className="section-subtitle">Thousands of women have stopped self-diagnosing and started getting real answers. Every concern is heard, and addressed.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: "👂", title: "Finally, Someone Who Listens", desc: '"It\'s in your head" isn\'t a diagnosis. Every symptom you describe matters. Every question gets an answer.' },
              { icon: "🔬", title: "Evidence Over Assumptions", desc: "No guesswork. No outdated advice. Treatment plans built on the latest research and your unique body." },
              { icon: "🗓️", title: "Care That Fits Your Life", desc: "Flexible appointments, virtual consultations, and a team that respects your time and your privacy." },
              { icon: "💬", title: "The Uncomfortable Conversations", desc: 'From discharge to painful intimacy to "is this normal?" — nothing is too awkward to discuss here.' }
            ].map((item, i) => (
              <div className="why-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="why-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="treatments-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Specialties</span>
            <h2 className="section-title">What We Treat</h2>
            <p className="section-subtitle">Dr. Divya and her team specialize in the conditions women are often told to "live with" — until they find the right doctor.</p>
          </div>
          <div className="treatments-grid">
            {TREATMENTS.map((t, i) => (
              <div className="treatment-card" key={i}>
                <div className="treatment-img-wrap">
                  <img src={t.img} alt={t.title} loading="lazy" />
                  <span className="treatment-tag">{t.tag}</span>
                </div>
                <div className="treatment-content">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                  <Link to="/appointment" className="treatment-link">Book Consultation →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="process-section">
        <div className="container">
          <div className="process-inner">
            <div className="process-left">
              <span className="section-tag">The Process</span>
              <h2 className="section-title">How Your Visit Works</h2>
              <p className="section-subtitle">No white-coat anxiety. No rushed appointments. Just clear answers and a plan that makes sense for you.</p>
              <div className="steps-list">
                {STEPS.map((step, i) => (
                  <div
                    className={`step-item${activeStep === i ? " active" : ""}`}
                    key={i}
                    onClick={() => setActiveStep(i)}
                  >
                    <div className="step-num">{step.num}</div>
                    <div className="step-body">
                      <h4>{step.title}</h4>
                      {activeStep === i && <p>{step.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/appointment" className="btn-primary" style={{ marginTop: "32px" }}>Make an Appointment →</Link>
            </div>
            <div className="process-right">
              <img
                src="/images/appointment.png"
                alt="Appointment"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-inner">
            <div className="testimonial-img-col">
              <img
                src="/images/testimonial.png"
                alt="Patient testimonial"
              />
            </div>
            <div className="testimonial-content">
              <span className="section-tag">Patient Stories</span>
              <h2>What Women Are Saying</h2>
              <blockquote>
                "I spent three years being told my pain was 'normal' and to 'just take painkillers.' Dr. Divya diagnosed my endometriosis in one visit. One. I cried in the parking lot, not from pain, but from finally being believed. If you've been dismissed by other doctors, please see her."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">P</div>
                <div>
                  <div className="author-name">Priya M.</div>
                  <div className="author-meta">Patient, 2024</div>
                </div>
                <div className="testimonial-stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-inner">
            <div className="faq-left">
              <span className="section-tag">FAQ</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Have a question you've been too embarrassed to Google? You're in the right place.</p>
              <Link to="/appointment" className="btn-primary" style={{ marginTop: "32px" }}>Ask Dr. Divya Directly →</Link>
            </div>
            <div className="faq-right">
              {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* MEET DOCTOR */}
      <section className="meet-section">
        <div className="container">
          <div className="meet-inner">
            <div className="meet-left">
              <span className="section-tag">Meet the Doctor</span>
              <h2 className="section-title">Meet Dr. Divya</h2>
              <p className="section-subtitle">More than a gynecologist. A translator between your body and the medical world.</p>
              <div className="meet-credentials">
                <div className="credential">
                  <span className="cred-icon">🎓</span>
                  <div>
                    <strong>MBBS, MD (Obs & Gynae)</strong>
                    <span>Specialization in Women's Health</span>
                  </div>
                </div>
                <div className="credential">
                  <span className="cred-icon">🏥</span>
                  <div>
                    <strong>15+ Years Experience</strong>
                    <span>Complex gynecological cases</span>
                  </div>
                </div>
                <div className="credential">
                  <span className="cred-icon">🌐</span>
                  <div>
                    <strong>Virtual & In-Clinic</strong>
                    <span>Kalkaji, New Delhi</span>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-primary">View Full Profile →</Link>
            </div>
            <div className="meet-right">
              <div className="doctor-card">
                <img
                  src="/images/doctor-profile.png"
                  alt="Dr. Divya Narang Wadhwan"
                />
                <div className="doctor-card-info">
                  <div className="doctor-name">Dr. Divya Narang Wadhwan</div>
                  <div className="doctor-title">Gynecologist & Women's Health Specialist</div>
                </div>
              </div>
              <div className="hours-card">
                <h4>Working Hours</h4>
                <div className="hours-rows">
                  {[["Monday–Thursday","08:00 - 20:00"],["Friday","10:00 - 16:00"],["Saturday","10:00 - 16:00"],["Sunday","Closed"]].map(([d,h],i) => (
                    <div className="h-row" key={i}>
                      <span>{d}</span>
                      <span className={h === "Closed" ? "closed" : ""}>{h}</span>
                    </div>
                  ))}
                </div>
                <Link to="/appointment" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Make an Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      {/* <section className="cta-banner">
        <div className="container">
          <h2>Ready for Real Answers?</h2>
          <p>Book your consultation today — in-clinic or virtually. Your body deserves more than a Google search.</p>
          <div className="cta-actions">
            <Link to="/appointment" className="btn-primary">Book Appointment →</Link>
            <a href="tel:9876511920" className="btn-outline" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>📞 Call Now</a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
