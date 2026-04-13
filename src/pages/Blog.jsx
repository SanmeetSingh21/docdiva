import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './Blog.css';

export default function Blog() {
  const [featured, ...rest] = blogs;

  return (
    <div className="blog-page">

      {/* ── Masthead ── */}
      <div className="blog-masthead">
        <div className="container blog-masthead-inner">
          <div className="blog-masthead-text">
            <p className="masthead-eyebrow">Clinic Divya — Health Journal</p>
            <h1 className="masthead-title">The Women's Health Desk</h1>
            <p className="masthead-tagline">
              Evidence-based insights, real talk, and expert guidance from Dr. Divya Sharma.
            </p>
          </div>
          {/* <div className="masthead-stat-bar">
            <div className="masthead-stat">
              <span className="masthead-stat-num">{blogs.length}</span>
              <span className="masthead-stat-label">Articles</span>
            </div>
            <div className="masthead-stat-divider" />
            <div className="masthead-stat">
              <span className="masthead-stat-num">Dr. Divya</span>
              <span className="masthead-stat-label">Lead Author</span>
            </div>
            <div className="masthead-stat-divider" />
            <div className="masthead-stat">
              <span className="masthead-stat-num">Women's Health</span>
              <span className="masthead-stat-label">Speciality</span>
            </div>
          </div> */}
        </div>
        <div className="masthead-rule" />
      </div>

      {/* ── Featured (horizontal hero card) ── */}
      {featured && (
        <section className="blog-featured-wrap">
          <div className="container">
            <div className="section-marker">
              <span className="marker-pill">Featured</span>
              <div className="marker-line" />
            </div>
            <article className="hero-article">
              <Link to={`/blog/${featured.id}`} className="hero-article-img-link" aria-label={`Read article: ${featured.title}`}>
                <img src={featured.image} alt={featured.title} className="hero-article-img" />
                <div className="hero-article-img-overlay" />
              </Link>
              <div className="hero-article-body">
                <div className="hero-article-meta">
                  <span className="blog-category-pill">Gynaecology</span>
                  <time dateTime={featured.date}>
                    {new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                </div>
                <h2 className="hero-article-title">
                  <Link to={`/blog/${featured.id}`}>{featured.title}</Link>
                </h2>
                <p className="hero-article-excerpt">{featured.excerpt}</p>
                <div className="article-byline">
                  <div className="byline-avatar">{featured.authorName.charAt(0)}</div>
                  <div className="byline-text">
                    <span className="byline-name">{featured.authorName}</span>
                    <span className="byline-email">{featured.authorEmail}</span>
                  </div>
                </div>
                <Link to={`/blog/${featured.id}`} className="hero-read-btn">
                  Read Full Article
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* ── Article List ── */}
      <section className="blog-list-wrap">
        <div className="container">
          <div className="section-marker">
            <span className="marker-pill">All Articles</span>
            <div className="marker-line" />
          </div>
          <div className="blog-article-list">
            {rest.map((blog) => (
              <article key={blog.id} className="list-article">
                <Link to={`/blog/${blog.id}`} className="list-article-img-link" aria-label={`Read article: ${blog.title}`}>
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                </Link>
                <div className="list-article-body">
                  <div className="list-article-meta">
                    <span className="blog-category-pill sm">Women's Health</span>
                    <time dateTime={blog.date}>
                      {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                  </div>
                  <h3 className="list-article-title">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>
                  <p className="list-article-excerpt">{blog.excerpt}</p>
                  <div className="list-article-footer">
                    <div className="article-byline compact">
                      <div className="byline-avatar sm">{blog.authorName.charAt(0)}</div>
                      <span className="byline-name">{blog.authorName}</span>
                    </div>
                    <Link to={`/blog/${blog.id}`} className="list-read-link">Read Article →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
