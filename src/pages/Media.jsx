import { Link } from "react-router-dom";

const ORANGE = "#e8590c";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    title: "Product Videos",
    desc: "Watch live demonstrations of our packaging machines in real production environments.",
    tag: "Video Library",
    link: "/media/videos",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Customer Stories",
    desc: "Real testimonials and case studies from 50+ clients across India.",
    tag: "Testimonials",
    link: "/media/stories",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "Factory Tours",
    desc: "Go inside our MIDC manufacturing facility and see our quality-first process firsthand.",
    tag: "Behind the Scenes",
    link: "/media/factory",
  },
];

const STATS = [
  { num: "50+", label: "Installations" },
  { num: "12+", label: "Cities" },
  { num: "15+", label: "Years" },
  { num: "99%", label: "Uptime" },
];

export default function Media() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .media-page * { box-sizing: border-box; }

        .media-page {
          font-family: var(--font-body, 'Inter', sans-serif);
          background: var(--champagne, #fdf6ee);
          min-height: 100vh;
        }

        /* ── TICKER ── */
        .media-topband {
          background: #ffffff;
          border-bottom: 1px solid #f0e2cf;
          padding: 10px 0;
          overflow: hidden;
        }

        .media-ticker {
          display: flex;
          gap: 40px;
          animation: mediaTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes mediaTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .media-ticker-item {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a8896a;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .media-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: ${ORANGE};
          flex-shrink: 0;
        }

        /* ── HERO ── */
        .media-hero {
          position: relative;
          background: var(--champagne, #fdf6ee);
          overflow: hidden;
        }

        .media-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(28,25,23,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,25,23,0.03) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .media-hero::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(232,89,12,0.14) 0%, transparent 65%);
          pointer-events: none;
        }

        .media-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1220px;
          margin: 0 auto;
          padding: 40px 16px 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .media-hero-inner {
            padding: 72px 28px 64px;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: end;
            gap: 48px;
          }
        }

        .media-hero-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .media-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${ORANGE};
        }

        .media-eyebrow::before {
          content: '';
          display: block;
          width: 14px; height: 2px;
          background: ${ORANGE};
        }

        .media-title {
          font-size: clamp(28px, 7vw, 52px);
          font-weight: 900;
          color: var(--text-1, #1c1917);
          margin: 0;
          line-height: 1.05;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .media-title span { color: ${ORANGE}; }

        .media-subtitle {
          font-size: 13.5px;
          color: var(--text-2, #57534e);
          margin: 4px 0 0;
          max-width: 500px;
          line-height: 1.7;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .media-subtitle { font-size: 15px; }
        }

        .media-cta-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .media-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          background: ${ORANGE};
          color: #ffffff;
          box-shadow: 0 10px 24px -8px rgba(232, 89, 12, 0.5);
          border: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .media-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -8px rgba(232, 89, 12, 0.55);
        }

        .media-btn-primary svg { flex-shrink: 0; }

        .media-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          background: #ffffff;
          color: #1c1917;
          border: 1px solid #e7ddc9;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .media-btn-secondary:hover {
          background: #fdf6ee;
          border-color: ${ORANGE};
        }

        @media (min-width: 768px) {
          .media-btn-primary, .media-btn-secondary { padding: 14px 24px; font-size: 13.5px; }
        }

        /* stats on right — same card language as Hero's stats card */
        .media-hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background: #ffffff;
          border: 1px solid #f0e2cf;
          border-radius: 12px;
          box-shadow: 0 16px 32px -18px rgba(28,25,23,0.18);
          overflow: hidden;
        }

        .media-stat {
          padding: 14px 16px;
          border-right: 1px solid #f0e2cf;
          border-bottom: 1px solid #f0e2cf;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .media-stat:nth-child(2n) { border-right: none; }
        .media-stat:nth-last-child(-n+2) { border-bottom: none; }

        .media-stat-num {
          font-size: 20px;
          font-weight: 800;
          color: #1c1917;
          line-height: 1;
        }

        .media-stat-num span { color: ${ORANGE}; }

        .media-stat-label {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #a8896a;
        }

        @media (min-width: 768px) {
          .media-stat { padding: 18px 22px; }
          .media-stat-num { font-size: 24px; }
        }

        /* ── DIVIDER ── */
        .media-section-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          max-width: 1220px;
          margin: 0 auto;
          padding: 32px 16px 28px;
        }

        @media (min-width: 768px) {
          .media-section-divider { padding: 40px 28px 36px; gap: 16px; }
        }

        .media-divider-line {
          flex: 1;
          height: 1.5px;
          background: #e7ddc9;
        }

        .media-divider-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a8896a;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .media-divider-label::before,
        .media-divider-label::after {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: ${ORANGE};
        }

        /* ── FEATURES ── */
        .media-features-wrap {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 16px 56px;
        }

        @media (min-width: 768px) {
          .media-features-wrap { padding: 0 28px 96px; }
        }

        .media-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          background: #ffffff;
          border: 1px solid #f0e2cf;
          border-radius: 12px;
          overflow: hidden;
        }

        @media (min-width: 700px) {
          .media-features { grid-template-columns: repeat(3, 1fr); }
        }

        .media-feat-card {
          background: #ffffff;
          border-bottom: 1px solid #f0e2cf;
          padding: 26px 22px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .media-feat-card:last-child { border-bottom: none; }

        @media (min-width: 700px) {
          .media-feat-card {
            border-bottom: none;
            border-right: 1px solid #f0e2cf;
            padding: 32px 28px;
          }
          .media-feat-card:last-child { border-right: none; }
        }

        .media-feat-card:hover {
          background: #fdf6ee;
          z-index: 2;
          box-shadow: 0 0 0 1.5px ${ORANGE} inset;
        }

        .media-feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: ${ORANGE};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);
        }

        .media-feat-card:hover::before { transform: scaleX(1); }

        .media-feat-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .media-feat-icon {
          width: 44px; height: 44px;
          border-radius: 8px;
          background: #fdf1e4;
          border: 1px solid #f3d9bd;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${ORANGE};
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .media-feat-card:hover .media-feat-icon {
          background: ${ORANGE};
          border-color: ${ORANGE};
          color: #ffffff;
        }

        .media-feat-tag {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${ORANGE};
          background: #fdf1e4;
          border: 1px solid #f3d9bd;
          padding: 4px 9px;
          border-radius: 5px;
          white-space: nowrap;
        }

        .media-feat-title {
          font-size: 18px;
          font-weight: 800;
          color: #1c1917;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.15;
        }

        .media-feat-desc {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-2, #57534e);
          line-height: 1.65;
          flex: 1;
        }

        .media-feat-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${ORANGE};
          margin-top: 2px;
          transition: gap 0.2s;
        }

        .media-feat-card:hover .media-feat-link { gap: 10px; }

        /* ── BOTTOM CTA ── */
        .media-bottom-cta {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 16px 56px;
        }

        @media (min-width: 768px) {
          .media-bottom-cta { padding: 0 28px 96px; }
        }

        .media-cta-block {
          background: ${ORANGE};
          border-radius: 12px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .media-cta-block {
            padding: 40px;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 24px;
          }
          .media-cta-block-btn { width: auto; }
        }

        .media-cta-block::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .media-cta-block::after {
          content: '';
          position: absolute;
          right: -50px; top: -50px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 70%);
        }

        .media-cta-text {
          position: relative; z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .media-cta-eyebrow {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
        }

        .media-cta-title {
          font-size: 22px;
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
          line-height: 1.15;
        }

        @media (min-width: 768px) {
          .media-cta-title { font-size: 27px; }
        }

        .media-cta-sub {
          font-size: 12.5px;
          color: rgba(255,255,255,0.85);
          margin: 0;
          font-weight: 500;
        }

        .media-cta-block-btn {
          position: relative; z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: #ffffff;
          color: ${ORANGE};
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 13px 24px;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .media-cta-block-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -8px rgba(0,0,0,0.25);
        }
      `}</style>

      <main className="media-page">

        {/* Ticker */}
        <div className="media-topband">
          <div className="media-ticker">
            {[...Array(2)].map((_, ri) =>
              ["Product Demos", "Factory Tours", "Customer Stories", "Installation Videos", "Machine Walkthroughs", "Live Demos Available", "ISO 9001 Certified"].map((t, i) => (
                <span className="media-ticker-item" key={`${ri}-${i}`}>
                  <span className="media-ticker-dot" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Hero */}
        <section className="media-hero">
          <div className="media-hero-inner">
            <div className="media-hero-left">
              <span className="media-eyebrow">Media Center</span>
              <h1 className="media-title">
                See Our <span>Machines</span><br/>In Action
              </h1>
              <p className="media-subtitle">
                Browse product videos, factory tours, and real customer stories that demonstrate our industrial packaging solutions in real environments.
              </p>
              <div className="media-cta-group">
                <Link to="/media/videos" className="media-btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Watch Videos
                </Link>
                <Link to="/applications" className="media-btn-secondary">
                  Browse Applications
                  <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                    <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Stats grid */}
            <div className="media-hero-stats">
              {STATS.map((s, i) => (
                <div className="media-stat" key={i}>
                  <span className="media-stat-num">{s.num.replace(/[+%]/g, '')}<span>{s.num.match(/[+%]/)?.[0]}</span></span>
                  <span className="media-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="media-section-divider">
          <div className="media-divider-line" />
          <span className="media-divider-label">What You'll Find</span>
          <div className="media-divider-line" />
        </div>

        {/* Feature Cards */}
        <div className="media-features-wrap">
          <div className="media-features">
            {FEATURES.map((f, i) => (
              <Link to={f.link} className="media-feat-card" key={i}>
                <div className="media-feat-top">
                  <div className="media-feat-icon">{f.icon}</div>
                  <span className="media-feat-tag">{f.tag}</span>
                </div>
                <div className="media-feat-title">{f.title}</div>
                <div className="media-feat-desc">{f.desc}</div>
                <span className="media-feat-link">
                  Explore
                  <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                    <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="media-bottom-cta">
          <div className="media-cta-block">
            <div className="media-cta-text">
              <span className="media-cta-eyebrow">Book a Demo</span>
              <p className="media-cta-title">Want a Live Machine Demo?</p>
              <p className="media-cta-sub">Visit our factory or schedule a video walkthrough with our engineers.</p>
            </div>
            <Link to="/contact" className="media-cta-block-btn">
              Schedule Demo
              <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
              </svg>
            </Link>
          </div>
        </div>

      </main>
    </>
  );
}