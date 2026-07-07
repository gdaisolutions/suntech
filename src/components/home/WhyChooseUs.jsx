import { useEffect, useRef, useState } from "react";

const USPS = [
  {
    title: "Customized Engineering",
    desc: "Every machine is designed to match specific product, capacity, and packaging requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v2M12 19v2M4 12H2M22 12h-2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Precision & Reliability",
    desc: "Advanced engineering ensures high filling accuracy, consistent performance, and minimal product wastage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Robust Manufacturing Quality",
    desc: "Machines are built using premium components and durable construction for long-lasting industrial performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.36.4.66.72.86.31.2.68.3 1.05.3H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      </svg>
    ),
  },
  {
    title: "End-to-End Packaging Solutions",
    desc: "From machine design to installation, training, and support, we provide complete packaging automation services.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="7" width="6" height="6" rx="1" />
        <rect x="15" y="7" width="6" height="6" rx="1" />
        <rect x="9" y="14" width="6" height="6" rx="1" />
        <path d="M6 7V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2M12 13v1" />
      </svg>
    ),
  },
  {
    title: "Responsive After-Sales Support",
    desc: "Dedicated technical assistance and timely maintenance ensure maximum uptime and uninterrupted production.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="m14.5 6.5 1.8-1.8M15.5 8.5h2.3" />
      </svg>
    ),
  },
  {
    title: "Cost-Effective Automation",
    desc: "Our solutions improve productivity while reducing labor dependency, operational costs, and packaging errors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 20V10M12 20V4M20 20v-7" />
        <path d="m15 7 5-3M4 14l6-4" />
      </svg>
    ),
  },
];

const STATS = [
  { value: "740+", label: "Installations" },
  { value: "15+", label: "Cities" },
  { value: "99%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const INDUSTRIES = [
  "Food & Beverage",
  "Pharmaceuticals",
  "Chemicals",
  "FMCG",
  "Cosmetics",
  "Agro Products",
  "Electronics",
];

export default function WhyChooseUs() {
  const [inView, setInView] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        /* ============================================================
           MOBILE-FIRST BASE (≈320px and up)
           Everything below is the smallest-screen layout. Larger
           breakpoints (480 / 640 / 768 / 1024 / 1280) only ADD to or
           override these rules — nothing is assumed to exist above
           this base until a media query says so.
           ============================================================ */

        .wcu-section {
          width: 100%;
          background: var(--champagne);
          font-family: var(--font-body);
          color: var(--text-1);
          padding: 40px 16px;
          position: relative;
          overflow: hidden;
        }

        .wcu-section::before {
          content: "";
          position: absolute;
          top: -90px;
          right: -90px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, #fdeadb 0%, transparent 70%);
          pointer-events: none;
        }

        .wcu-container {
          max-width: 1360px;
          margin: 0 auto;
          position: relative;
        }

        /* ── TOP: heading + stats ── */
        .wcu-top {
          display: flex;
          flex-direction: column;
          gap: 22px;
          margin-bottom: 28px;
        }

        .wcu-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8531f;
          margin-bottom: 12px;
        }

        .wcu-eyebrow::before {
          content: "";
          width: 18px;
          height: 2px;
          background: #b8531f;
          display: inline-block;
          flex-shrink: 0;
        }

        .wcu-title {
          font-family: var(--font-display);
          font-size: clamp(22px, 7.5vw, 30px);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .wcu-title span { color: var(--accent); }

        .wcu-subtitle {
          font-size: 13px;
          color: var(--text-2);
          line-height: 1.7;
          max-width: 460px;
        }

        .wcu-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          background: #fff;
          border: 1px solid #ece5da;
          border-radius: 14px;
          overflow: hidden;
        }

        .wcu-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 14px;
          border-bottom: 1px solid #f1ebe0;
          border-right: 1px solid #f1ebe0;
          min-width: 0;
        }

        .wcu-stat:nth-child(2n) { border-right: none; }
        .wcu-stat:nth-last-child(-n+2) { border-bottom: none; }

        .wcu-stat-icon {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #fdeadb;
          color: #b8531f;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wcu-stat-icon svg { width: 15px; height: 15px; }

        .wcu-stat-value {
          font-family: 'Source Serif 4', serif;
          font-size: 16px;
          font-weight: 800;
          color: #1c1917;
          line-height: 1.1;
          white-space: nowrap;
        }

        .wcu-stat-label {
          font-size: 10.5px;
          color: #78716c;
          font-weight: 500;
          white-space: nowrap;
        }

        /* ── ORBIT (mobile: stacked list) ── */
        .wcu-orbit-wrap {
          position: relative;
        }

        .wcu-card {
          display: flex;
          gap: 14px;
          background: #ffffff;
          border: 1px solid #ece5da;
          border-radius: 14px;
          padding: 16px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          margin-bottom: 12px;
        }

        .wcu-card.in-view { opacity: 1; transform: translateY(0); }

        .wcu-card:hover {
          border-color: #e3b585;
          box-shadow: 0 16px 30px -16px rgba(184, 83, 31, 0.28);
        }

        .wcu-num {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(145deg, #e8935a, #b8531f);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 14px -6px rgba(184, 83, 31, 0.55);
        }
        .wcu-num svg { width: 17px; height: 17px; }

        .wcu-card-title {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 4px;
          line-height: 1.35;
        }

        .wcu-card-desc {
          font-size: 12.5px;
          line-height: 1.6;
          color: #57534e;
        }

        /* ── CENTER LOGO BADGE (mobile) — logo only, no text ── */
        .wcu-center-mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          margin: 0 auto 16px;
          background: radial-gradient(circle, #fff 55%, #fdf6ee 100%);
          border: 1px solid #ece5da;
          border-radius: 50%;
          width: clamp(120px, 34vw, 170px);
          height: clamp(120px, 34vw, 170px);
        }

        .wcu-center-logo-img {
          width: 60%;
          height: 60%;
          object-fit: contain;
        }

        /* ── industries strip ── */
        .wcu-industries {
          margin-top: 26px;
          background: #ffffff;
          border: 1px solid #ece5da;
          border-radius: 14px;
          padding: 18px;
        }

        .wcu-industries-title {
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .wcu-industries-title::after {
          content: "";
          display: block;
          width: 22px;
          height: 2px;
          background: #d9711f;
          margin-top: 8px;
        }

        .wcu-industries-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .wcu-industry {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          min-width: 0;
        }

        .wcu-industry-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid #ece5da;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8531f;
          flex-shrink: 0;
        }
        .wcu-industry-icon svg { width: 18px; height: 18px; }

        .wcu-industry-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #44403c;
          line-height: 1.3;
        }

        .wcu-mobile-only-flex { display: flex; }
        .wcu-desktop-only-flex { display: none; }

        /* connector dashed-lines + dots are part of the desktop orbit
           visual only — hide them on mobile/tablet so no stray lines
           or dots show above the stacked cards */
        .wcu-connector-svg { display: none; }

        /* ============================================================
           ≥380px — a little breathing room on very small phones
           ============================================================ */
        @media (min-width: 380px) {
          .wcu-section { padding: 44px 18px; }
          .wcu-stat { padding: 15px 16px; }
        }

        /* ============================================================
           ≥480px — larger phones
           ============================================================ */
        @media (min-width: 480px) {
          .wcu-section { padding: 48px 24px; }
          .wcu-top { gap: 26px; margin-bottom: 32px; }
          .wcu-subtitle { font-size: 13.5px; }
          .wcu-stat { padding: 16px 18px; gap: 12px; }
          .wcu-stat-icon { width: 32px; height: 32px; }
          .wcu-stat-value { font-size: 17px; }
          .wcu-card { padding: 18px; gap: 16px; }
          .wcu-card-title { font-size: 14.5px; }
          .wcu-card-desc { font-size: 13px; }
          .wcu-industries { padding: 20px; }
          .wcu-industries-list { gap: 16px; }
        }

        /* ============================================================
           ≥640px — small tablets / large phones landscape:
           stats row becomes horizontal-friendly and industries
           move to 3 columns for readability
           ============================================================ */
        @media (min-width: 640px) {
          .wcu-section { padding: 56px 32px; }
          .wcu-title { font-size: clamp(28px, 5vw, 34px); }
          .wcu-subtitle { max-width: 520px; }

          .wcu-stats { grid-template-columns: repeat(4, 1fr); }
          .wcu-stat:nth-child(2n) { border-right: 1px solid #f1ebe0; }
          .wcu-stat:nth-child(4n) { border-right: none; }
          .wcu-stat:nth-last-child(-n+4) { border-bottom: none; }
          .wcu-stat { border-bottom: none; flex-direction: column; align-items: flex-start; gap: 8px; }

          .wcu-industries-list { grid-template-columns: repeat(3, 1fr); }
        }

        /* ============================================================
           ≥768px — tablets: two-column card grid instead of single
           stacked list, industries move to 4 columns
           ============================================================ */
        @media (min-width: 768px) {
          .wcu-section { padding: 64px 40px; }

          .wcu-top { flex-direction: row; align-items: flex-end; justify-content: space-between; gap: 32px; }
          .wcu-top > div:first-child { flex: 1; min-width: 0; }
          .wcu-stats { flex-shrink: 0; min-width: 380px; }

          .wcu-center-mobile { width: 150px; height: 150px; margin-bottom: 22px; }

          .wcu-orbit-wrap {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .wcu-card { margin-bottom: 0; }

          .wcu-industries-list { grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .wcu-industries { padding: 24px 28px; }
        }

        /* ============================================================
           ≥1024px — DESKTOP: full orbit layout with center hub
           ============================================================ */
        @media (min-width: 1024px) {
          .wcu-section { padding: 88px 40px; }

          .wcu-top {
            margin-bottom: 64px;
          }

          .wcu-title { font-size: 40px; }
          .wcu-subtitle { font-size: 15px; }

          .wcu-stats {
            min-width: 480px;
          }

          .wcu-mobile-only-flex { display: none; }
          .wcu-desktop-only-flex { display: flex; }

          /* orbit grid: 3 left cards | center | 3 right cards */
          .wcu-orbit-wrap {
            grid-template-columns: 1fr 300px 1fr;
            align-items: center;
            gap: 0;
            min-height: 640px;
          }

          .wcu-orbit-col {
            display: flex;
            flex-direction: column;
            gap: 22px;
            position: relative;
            z-index: 2;
          }

          .wcu-orbit-col.left { align-items: flex-end; }
          .wcu-orbit-col.right { align-items: flex-start; }

          .wcu-card {
            width: 100%;
            max-width: 340px;
            flex-direction: column;
            gap: 14px;
            padding: 24px 22px;
          }

          .wcu-num { width: 46px; height: 46px; }
          .wcu-num svg { width: 20px; height: 20px; }
          .wcu-card-title { font-size: 16px; }
          .wcu-card-desc { font-size: 13.5px; }

          .wcu-orbit-center {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
          }

          .wcu-ring {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 2px solid #e7e2d8;
          }

          .wcu-ring-accent {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #d9711f;
            border-right-color: #d9711f;
            transform: rotate(-35deg);
            animation: wcu-spin 22s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .wcu-ring-accent { animation: none; }
          }

          @keyframes wcu-spin {
            to { transform: rotate(325deg); }
          }

          /* ── CENTER LOGO BADGE (desktop) — logo only, no text ── */
          .wcu-center-hub {
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: #ffffff;
            box-shadow: 0 20px 45px -20px rgba(28, 25, 23, 0.18);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
          }

          .wcu-center-hub .wcu-center-logo-img {
            width: 150px;
            height: 150px;
          }

          .wcu-connector-svg {
            display: block;
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: visible;
            z-index: 0;
            pointer-events: none;
          }

          .wcu-industries {
            padding: 30px 36px;
          }

          .wcu-industries-title { font-size: 16px; }

          .wcu-industries-list {
            grid-template-columns: auto repeat(7, 1fr);
            align-items: center;
            gap: 28px;
          }

          .wcu-industries-title-wrap {
            padding-right: 24px;
            border-right: 1px solid #ece5da;
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .wcu-orbit-wrap { grid-template-columns: 1fr 260px 1fr; min-height: 560px; }
          .wcu-card { max-width: 290px; padding: 20px; }
          .wcu-ring, .wcu-ring-accent { width: 260px; height: 260px; }
          .wcu-center-hub { width: 190px; height: 190px; }
          .wcu-center-hub .wcu-center-logo-img { width: 125px; height: 125px; }
        }

        /* ============================================================
           ≥1440px — extra breathing room on large monitors
           ============================================================ */
        @media (min-width: 1440px) {
          .wcu-container { max-width: 1440px; }
          .wcu-orbit-wrap { grid-template-columns: 1fr 320px 1fr; }
          .wcu-ring, .wcu-ring-accent { width: 320px; height: 320px; }
          .wcu-center-hub { width: 236px; height: 236px; }
          .wcu-center-hub .wcu-center-logo-img { width: 160px; height: 160px; }
        }
      `}</style>

      <section className="wcu-section">
        <div className="wcu-container">

          <div className="wcu-top">
            <div>
              <div className="wcu-eyebrow">Unique Selling Proposition</div>
              <h2 className="wcu-title">
                Why <span>Choose</span> Us
              </h2>
              <p className="wcu-subtitle">
                Precision engineering, durable builds, and dependable support come together to make our packaging machines a trusted choice across industries.
              </p>
            </div>

            <div className="wcu-stats">
              {STATS.map((s, i) => (
                <div className="wcu-stat" key={i}>
                  <div className="wcu-stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="wcu-stat-value">{s.value}</div>
                    <div className="wcu-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/tablet-only compact center badge — logo only */}
          <div className="wcu-center-mobile wcu-mobile-only-flex">
            <img
              src="/favicon.png"
              alt="Sun Tech Packaging Machines logo"
              className="wcu-center-logo-img"
            />
          </div>

          <div className="wcu-orbit-wrap">
            <svg className="wcu-connector-svg" viewBox="0 0 1000 640" preserveAspectRatio="none">
              <line x1="300" y1="130" x2="410" y2="220" stroke="#d9c7b0" strokeWidth="1.5" strokeDasharray="4 5" />
              <line x1="300" y1="320" x2="410" y2="320" stroke="#d9c7b0" strokeWidth="1.5" strokeDasharray="4 5" />
              <line x1="300" y1="510" x2="410" y2="420" stroke="#d9c7b0" strokeWidth="1.5" strokeDasharray="4 5" />
              <line x1="700" y1="130" x2="590" y2="220" stroke="#d9c7b0" strokeWidth="1.5" strokeDasharray="4 5" />
              <line x1="700" y1="320" x2="590" y2="320" stroke="#d9c7b0" strokeWidth="1.5" strokeDasharray="4 5" />
              <line x1="700" y1="510" x2="590" y2="420" stroke="#d9c7b0" strokeWidth="1.5" strokeDasharray="4 5" />
              {[[300,130],[300,320],[300,510],[700,130],[700,320],[700,510]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="4" fill="#d9711f" />
              ))}
            </svg>

            <div className="wcu-orbit-col left">
              {USPS.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className={`wcu-card ${inView[`wcu-${index}`] ? "in-view" : ""}`}
                  ref={(el) => (cardRefs.current[index] = el)}
                  data-id={`wcu-${index}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="wcu-num">{item.icon}</div>
                  <div>
                    <div className="wcu-card-title">{item.title}</div>
                    <p className="wcu-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wcu-orbit-center wcu-desktop-only-flex">
              <div className="wcu-ring" />
              <div className="wcu-ring-accent" />
              <div className="wcu-center-hub">
                <img
                  src="/favicon.png"
                  alt="Sun Tech Packaging Machines logo"
                  className="wcu-center-logo-img"
                />
              </div>
            </div>

            <div className="wcu-orbit-col right">
              {USPS.slice(3, 6).map((item, i) => {
                const index = i + 3;
                return (
                  <div
                    key={index}
                    className={`wcu-card ${inView[`wcu-${index}`] ? "in-view" : ""}`}
                    ref={(el) => (cardRefs.current[index] = el)}
                    data-id={`wcu-${index}`}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                  >
                    <div className="wcu-num">{item.icon}</div>
                    <div>
                      <div className="wcu-card-title">{item.title}</div>
                      <p className="wcu-card-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="wcu-industries">
            <div className="wcu-industries-title-wrap">
              <div className="wcu-industries-title">Serving Industries</div>
            </div>
            <div className="wcu-industries-list">
              {INDUSTRIES.map((name, i) => (
                <div className="wcu-industry" key={i}>
                  <div className="wcu-industry-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="4" y="4" width="16" height="16" rx="3" />
                      <path d="M8 12h8M8 16h5" />
                    </svg>
                  </div>
                  <div className="wcu-industry-label">{name}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}