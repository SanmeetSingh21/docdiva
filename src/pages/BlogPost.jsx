import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './BlogPost.css';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = blogs.find(b => b.id === id);
    if (found) {
      setBlog(found);
      // SEO: dynamic page title
      document.title = `${found.title} | Clinic Divya Health Blog`;
    } else {
      navigate('/blog', { replace: true });
    }
    // Restore default title on unmount
    return () => { document.title = 'Clinic Divya | Expert Women\'s Healthcare'; };
  }, [id, navigate]);

  if (!blog) {
    return <div className="post-loading">Loading…</div>;
  }

  // JSON-LD structured data for SEO (BlogPosting schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.image,
    "datePublished": blog.date,
    "dateModified": blog.date,
    "author": {
      "@type": "Person",
      "name": blog.authorName,
      "email": blog.authorEmail,
      "jobTitle": "Gynaecologist & Women's Health Specialist",
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": "Clinic Divya"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Clinic Divya",
      "url": "https://clinicdivya.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://clinicdivya.com/blog/${blog.id}`
    },
    "articleSection": "Women's Health",
    "inLanguage": "en-IN"
  };

  return (
    <article className="post-page" itemScope itemType="https://schema.org/BlogPosting">

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Top bar ── */}
      <div className="post-masthead-bar">
        <div className="container">
          <Link to="/blog" className="post-back">← The Women's Health Desk</Link>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="post-header">
        <div className="container post-header-inner">
          <div className="post-header-meta">
            <span className="blog-category-pill" itemProp="articleSection">Medical Insight</span>
            <time dateTime={blog.date} className="post-header-date" itemProp="datePublished">
              {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </div>
          <h1 className="post-headline" itemProp="headline">{blog.title}</h1>
          <p className="post-desc" itemProp="description">{blog.excerpt}</p>
          <address className="post-byline-block" itemProp="author" itemScope itemType="https://schema.org/Person">
            {/* <div className="byline-avatar" aria-hidden="true">{blog.authorName.charAt(0)}</div> */}
            {/* <div className="byline-text">
              <span className="byline-name" itemProp="name">{blog.authorName}</span>
              <a href={`mailto:${blog.authorEmail}`} className="byline-email" itemProp="email">{blog.authorEmail}</a>
            </div> */}
          </address>
        </div>
        <div className="post-header-rule" />
      </header>

      {/* ── Cover image ── */}
      <div className="post-cover-wrap">
        <div className="container">
          <figure className="post-cover-figure">
            <img
              src={blog.image}
              alt={blog.title}
              className="post-cover-img"
              itemProp="image"
              width="1200"
              height="500"
            />
          </figure>
        </div>
      </div>

      {/* ── Content + Sidebar ── */}
      <div className="container post-content-layout">
        <div className="post-body" itemProp="articleBody">
          <div className="post-rich-text" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>

        <aside className="post-sidebar" aria-label="Article sidebar">
          {/* Author card */}
          <div className="sidebar-card">
            <div className="sidebar-card-label">About the Author</div>
            <div className="byline-avatar lg" aria-hidden="true">{blog.authorName.charAt(0)}</div>
            <h4 className="sidebar-author-name">{blog.authorName}</h4>
            <p className="sidebar-author-role">Gynaecologist &amp; Women's Health Specialist, Clinic Divya</p>
            <a href={`mailto:${blog.authorEmail}`} className="sidebar-email-link">{blog.authorEmail}</a>
          </div>
          {/* CTA card */}
          <div className="sidebar-card cta-card">
            <div className="sidebar-card-label">Book a Consultation</div>
            <p>Have questions about your health? Talk directly to Dr. Divya.</p>
            <Link to="/appointment" className="sidebar-cta-btn">Ask Dr. Divya →</Link>
          </div>
        </aside>
      </div>

      {/* ── Bottom nav ── */}
      <div className="post-footer-rule">
        <div className="container">
          <Link to="/blog" className="post-back-bottom">← Back to The Health Desk</Link>
        </div>
      </div>

    </article>
  );
}
