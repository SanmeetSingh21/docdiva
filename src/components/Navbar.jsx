import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-inner container">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
              Call : 98765 11920
            </div>
            <div className="top-bar-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Kalkaji, Delhi
            </div>
            <div className="top-bar-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Mon - Sat : 09:00 AM - 06:00 PM
            </div>
          </div>
          <div className="top-bar-socials">
            <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 0 1-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.52 4.52 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.14A9.07 9.07 0 0 1 0 19.54 12.8 12.8 0 0 0 6.92 21.5c8.3 0 12.84-6.88 12.84-12.84l-.01-.58A9.17 9.17 0 0 0 22 5.92a9 9 0 0 1-2.59.71A4.52 4.52 0 0 0 23 3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner container">
          <Link to="/" className="nav-logo">
  <img src="/logo.png" alt="Doc Diva" style={{ height: "48px", objectFit: "contain" }} />
</Link>

          {/* Desktop links */}
          <div className="nav-links">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
            <Link to="/appointment" className="nav-cta">Ask Doc Diva</Link>
          </div>

          {/* Hamburger — mobile only */}
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`drawer-overlay${menuOpen ? " open" : ""}`} onClick={close} />
      <div className={`drawer${menuOpen ? " open" : ""}`}>
        <div className="drawer-header">
          <img src="/logo.png" alt="Doc Diva" style={{ height: "30px", objectFit: "contain" }} />
          <button className="drawer-close" onClick={close} aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="drawer-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={close}>Home</Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={close}>About</Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={close}>Contact Us</Link>
        </div>

        <div className="drawer-cta">
          <Link to="/appointment" onClick={close}>Ask Doc Diva</Link>
        </div>

        <div className="drawer-contact">
  <a href="tel:9876511920">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
    98765 11920
  </a>
  <a href="https://maps.google.com/?q=Kalkaji+Delhi" target="_blank" rel="noreferrer">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    Kalkaji, Delhi
  </a>
  <div className="drawer-socials">
    <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
    <a href="#" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.37 4.07 3.58 1.64.9a4.52 4.52 0 0 0-.61 2.27c0 1.57.8 2.95 2.01 3.76a4.5 4.5 0 0 1-2.05-.57v.06c0 2.19 1.56 4.02 3.63 4.43a4.52 4.52 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.14A9.07 9.07 0 0 1 0 19.54 12.8 12.8 0 0 0 6.92 21.5c8.3 0 12.84-6.88 12.84-12.84l-.01-.58A9.17 9.17 0 0 0 22 5.92a9 9 0 0 1-2.59.71A4.52 4.52 0 0 0 23 3z"/></svg></a>
    <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg></a>
    <a href="#" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
    <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg></a>
  </div>
</div>
      </div>
    </>
  );
}
