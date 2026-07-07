import { useState } from "react";

const CHALLENGES = [
  {
    title: "Rising Labor Dependency",
    desc: "Manufacturers face increasing labor costs and workforce shortages, affecting packaging efficiency and consistency.",
  },
  {
    title: "Inconsistent Packaging Accuracy",
    desc: "Manual and outdated systems often result in weight variations, product wastage, and customer complaints.",
  },
  {
    title: "Growing Demand for Automation",
    desc: "Industries require faster, smarter, and scalable packaging solutions to meet rising production demands.",
  },
  {
    title: "High & Maintenance Costs",
    desc: "Inefficient machines consume more power, require frequent maintenance, and increase overall operating expenses.",
  },
  {
    title: "Limited Customization",
    desc: "Many packaging machines cannot adapt to different products, pack sizes, or industry-specific requirements.",
  },
];

const CORE_VALUES = [
  "Quality & Reliability",
  "Innovation & Excellence",
  "Customer Satisfaction",
  "Integrity & Transparency",
  "Sustainable Growth",
];

const FOUNDER = {
  name: "Shrinivas Reddy",
  title: "Founder & Chief Executive Officer",
  badge: "Founder & CEO",
  photo: "/ceo.jpg",
  bio: "With over 14 years of deep-rooted expertise in industrial packaging machinery, Shrinivas Reddy founded Suntech with one conviction — that Indian manufacturers deserve world-class automation without world-class price tags. Under his leadership, Suntech has grown from a single workshop to a trusted name across 9+ industries and 12+ cities. His hands-on approach to engineering and relentless focus on after-sales support have become the DNA of every machine the company builds.",
  stats: [
    { value: "14+", label: "Years Experience" },
    { value: "200+", label: "Projects Delivered" },
    { value: "9+", label: "Industries Served" },
  ],
};

const STATS = [
  { value: "740+", label: "Installations" },
  { value: "15+", label: "Cities Pan India" },
  { value: "99%", label: "Machine Uptime" },
  { value: "24/7", label: "Support Service" },
];

const INDUSTRIES = [
  "Food Processing",
  "Pharmaceutical",
  "Chemicals",
  "FMCG",
  "Seeds & Pulses",
  "Spices",
  "Detergent",
  "Cosmetics",
];

const JOURNEY = [
  { year: "2010", title: "Company Founded", desc: "Started our journey with a vision to deliver reliable packaging solutions." },
  { year: "2015", title: "Expanded Manufacturing", desc: "Upgraded infrastructure and increased production capabilities." },
  { year: "2019", title: "Pan India Operations", desc: "Strengthened presence across major cities in India." },
  { year: "2023", title: "Automation Solutions", desc: "Introduced advanced automation for higher efficiency." },
  { year: "2026", title: "740+ Installations", desc: "Proud to have 740+ successful installations across industries." },
];

const ICONS = {
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
  gem: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 3h12l3 5-9 13L3 8z" />
      <path d="M3 8h18M9 3l3 5-3 13M15 3l-3 5 3 13" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 21V10l5 3V10l5 3V10l5 3v8H3z" />
      <path d="M3 21h18" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 3v6c0 5-3.4 8.4-7 9-3.6-.6-7-4-7-9V6l7-3z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 13a9 9 0 0118 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("vision");
  const [activeChallenge, setActiveChallenge] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .about-root {
          width: 100%;
          background: #fcfbf8;
          font-family: 'Inter', sans-serif;
          color: #1c1917;
          overflow-x: hidden;
        }

        .about-root h1, .about-root h2, .about-root h3 { font-family: var(--font-display); }

        .section { width: 100%; padding: 44px 18px; position: relative; }
        .section-inner { max-width: 1160px; margin: 0 auto; }

        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #b8531f; margin-bottom: 12px;
        }
        .eyebrow::before { content: ""; width: 18px; height: 2px; background: #b8531f; display: inline-block; flex-shrink: 0; }

        .section-title { font-size: clamp(22px, 6.5vw, 29px); font-weight: 700; line-height: 1.2; color: #1c1917; letter-spacing: -0.01em; }

        /* ============================================================
           HERO — text LEFT, machine image blended into the right side
           as a soft background element (mobile-first)
           ============================================================ */
        .about-hero {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 40px 18px 32px;
        }

        /* Background machine image — absolutely positioned, blended
           with a gradient mask so it fades into the page background
           instead of sitting as a hard-edged photo. On mobile it sits
           low-opacity behind the text as a full-width backdrop. */
        .about-hero-bgimg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.94) 100%),
            url('/Machines/Multi-Head VFFS Packaging Machine.png');
          background-repeat: no-repeat;
          background-position: center 60%;
          background-size: 140%;
          opacity: 0.16;
          z-index: 0;
          pointer-events: none;
        }

        .about-hero-grid {
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
          text-align: left;
        }

        .about-hero .eyebrow { justify-content: flex-start; }

        .about-hero .section-title { font-size: clamp(24px, 7.5vw, 30px); margin-bottom: 18px; }

        .about-lead {
          font-size: 14px; line-height: 1.75; color: #44403c; margin-bottom: 14px;
        }
        .about-lead strong { color: #1c1917; font-weight: 700; }

        /* ============================================================
           FOUNDER / CEO — "The Vision Behind the Machine" (mobile-first,
           same light/cream/orange theme as rest of the page)
           ============================================================ */
        .founder-section { background: #ffffff; }

        .founder-title {
          font-size: clamp(24px, 8vw, 34px);
          font-weight: 900;
          line-height: 1.08;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #1c1917;
          margin-bottom: 26px;
        }
        .founder-title .accent { display: block; color: #f59e0b; }

        .founder-card {
          border: 1px solid #ece5da;
          border-radius: 18px;
          background: #ffffff;
          overflow: hidden;
          box-shadow: 0 10px 34px -18px rgba(28, 25, 23, 0.18);
        }

        .founder-photo-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #f1ebe0;
        }
        .founder-photo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .founder-content {
          padding: 24px 20px 26px;
        }

        .founder-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6b6560;
          background: #fdf6ee;
          border: 1px solid #ead9c8;
          border-radius: 20px;
          padding: 6px 14px;
          margin-bottom: 16px;
        }
        .founder-badge::before {
          content: "";
          width: 7px; height: 7px; border-radius: 50%;
          background: #f59e0b; flex-shrink: 0;
        }

        .founder-name {
          font-family: 'Source Serif 4', serif;
          font-size: clamp(24px, 7vw, 30px);
          font-weight: 800;
          color: #1c1917;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .founder-role {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #b8531f;
          margin-bottom: 18px;
        }

        .founder-divider {
          width: 44px;
          height: 3px;
          background: #1c1917;
          border-radius: 2px;
          margin-bottom: 18px;
        }

        .founder-bio {
          font-size: 14px;
          line-height: 1.75;
          color: #57534e;
          margin-bottom: 24px;
        }
        .founder-bio strong { color: #1c1917; font-weight: 700; }

        .founder-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .founder-stat {
          background: #fdf6ee;
          border: 1px solid #ead9c8;
          border-radius: 12px;
          padding: 14px 12px;
          text-align: center;
        }
        .founder-stat-value {
          font-family: 'Source Serif 4', serif;
          font-size: 22px;
          font-weight: 800;
          color: #1c1917;
          line-height: 1;
          margin-bottom: 6px;
        }
        .founder-stat-value .plus { color: #f59e0b; }
        .founder-stat-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #6b6560;
        }

        /* ============ VISION / MISSION / VALUES CARDS (separate section) ============ */
        .vmv-section { background: #fdf6ee; border-top: 1px solid #f0e8db; border-bottom: 1px solid #f0e8db; }

        .vmv-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 28px;
        }

        .vmv-card {
          border: 1px solid #ead9c8;
          border-radius: 14px;
          padding: 22px 18px;
          background: linear-gradient(180deg, #fffdfa 0%, #ffffff 100%);
        }

        .vmv-card-icon {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          background: #fdf0e2;
          color: #b8531f;
          margin-bottom: 12px;
        }
        .vmv-card-icon svg { width: 20px; height: 20px; }

        .vmv-card-title {
          font-family: 'Source Serif 4', serif;
          font-size: 17px; font-weight: 700; color: #1c1917; margin-bottom: 9px;
        }

        .vmv-card-text { font-size: 14px; line-height: 1.75; color: #44403c; }

        .values-list { list-style: none; display: flex; flex-direction: column; gap: 9px; margin-top: 2px; }
        .values-list li { display: flex; align-items: center; gap: 9px; font-size: 14px; color: #44403c; font-weight: 500; }
        .values-check { color: #b8531f; flex-shrink: 0; }
        .values-check svg { width: 15px; height: 15px; }

        /* ============ STATS BAR ============ */
        .stats-section { background: #ffffff; border-top: 1px solid #f0e8db; border-bottom: 1px solid #f0e8db; padding: 24px 18px; }
        .stats-grid { max-width: 1160px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat-item { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .stat-icon { color: #b8531f; flex-shrink: 0; }
        .stat-icon svg { width: 24px; height: 24px; }
        .stat-value { font-family: 'Source Serif 4', serif; font-size: 21px; font-weight: 800; color: #1c1917; line-height: 1; }
        .stat-label { font-size: 12px; color: #6b6560; margin-top: 4px; }

        /* ============ MARKET CHALLENGES ============ */
        .challenges-section {
          background: radial-gradient(ellipse at top left, #fdf3e7 0%, #fcfbf8 55%);
          border-bottom: 1px solid #f0e8db;
        }

        .challenges-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 6px; }
        .challenges-count { font-family: 'Source Serif 4', serif; font-size: 13px; color: #a8896a; padding-bottom: 4px; }

        .challenge-accordion { margin-top: 26px; display: flex; flex-direction: column; gap: 10px; }

        .challenge-item {
          border: 1px solid #ead9c8; border-radius: 12px; background: #ffffff; overflow: hidden;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .challenge-item.open { border-color: #d98a4e; box-shadow: 0 6px 20px -8px rgba(184, 83, 31, 0.25); }

        .challenge-item-head {
          display: flex; align-items: center; gap: 12px; padding: 14px 14px;
          cursor: pointer; background: none; border: none; width: 100%; text-align: left; font-family: inherit;
        }

        .challenge-num { font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 700; color: #cf7132; min-width: 26px; }
        .challenge-item-title { flex: 1; font-size: 14.5px; font-weight: 700; color: #1c1917; }
        .challenge-caret { font-size: 16px; color: #b8531f; transition: transform 0.25s ease; flex-shrink: 0; }
        .challenge-item.open .challenge-caret { transform: rotate(45deg); }

        .challenge-item-body { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
        .challenge-item.open .challenge-item-body { max-height: 220px; }
        .challenge-item-desc { padding: 0 14px 16px 52px; font-size: 13.5px; line-height: 1.7; color: #57534e; }

        .challenge-grid-desktop { display: none; }

        .challenges-summary {
          margin-top: 26px; padding: 18px 20px; background: #1c1917; border-radius: 12px;
          font-size: 14px; line-height: 1.75; color: #e7e2d9; position: relative;
        }
        .challenges-summary::before {
          content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
          background: #d98a4e; border-radius: 4px 0 0 4px;
        }

        /* ============ INDUSTRIES WE SERVE ============ */
        .industries-section { background: #fcfbf8; padding-top: 40px; padding-bottom: 40px; }
        .industries-grid {
          margin-top: 24px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
        }
        .industry-chip {
          display: flex; flex-direction: column; align-items: center; gap: 9px; text-align: center;
          padding: 16px 8px; border: 1px solid #ece5da; border-radius: 12px; background: #ffffff;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .industry-chip:hover { border-color: #d98a4e; transform: translateY(-2px); }
        .industry-icon { color: #b8531f; }
        .industry-icon svg { width: 20px; height: 20px; }
        .industry-name { font-size: 12.5px; font-weight: 600; color: #44403c; }

        /* ============ CTA BANNER — premium, light bg, text left / machine right, COMPACT height ============ */
        .cta-banner {
          position: relative;
          padding: 28px 18px;
          background:
            radial-gradient(ellipse 70% 90% at 88% 50%, rgba(216, 138, 78, 0.16) 0%, rgba(216, 138, 78, 0) 70%),
            linear-gradient(135deg, #fdf6ee 0%, #fefaf5 45%, #fdf0e2 100%);
          border-top: 1px solid #f0e2cd;
          border-bottom: 1px solid #f0e2cd;
          overflow: hidden;
        }
        .cta-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }
        .cta-content {
          text-align: center;
          max-width: 480px;
        }
        .cta-title { font-size: clamp(20px, 6vw, 24px); font-weight: 700; line-height: 1.22; color: #1c1917; }
        .cta-title .accent { color: #b8531f; }
        .cta-text { margin-top: 10px; font-size: 13.5px; line-height: 1.65; color: #57534e; }
        .cta-btn {
          margin-top: 16px; display: inline-flex; align-items: center; gap: 8px;
          background: #b8531f; color: #fff; border: none; padding: 11px 20px;
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
          border-radius: 8px; cursor: pointer; transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: 0 10px 24px -10px rgba(184, 83, 31, 0.55);
        }
        .cta-btn:hover { background: #9c4419; transform: translateY(-2px); }
        .cta-btn svg { width: 15px; height: 15px; }

        .cta-visual {
          position: relative;
          width: 100%;
          max-width: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cta-visual::before {
          content: "";
          position: absolute;
          width: 78%;
          height: 78%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(253,240,226,0.4) 60%, rgba(253,240,226,0) 100%);
          filter: blur(2px);
        }
        .cta-visual img {
          position: relative;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 22px 30px rgba(28, 25, 23, 0.18));
        }

        /* ============ JOURNEY ============ */
        .journey-section { background: #ffffff; }
        .journey-list { margin-top: 30px; display: flex; flex-direction: column; gap: 20px; }
        .journey-item { display: flex; gap: 16px; padding-bottom: 20px; border-bottom: 1px solid #ece5da; }
        .journey-item:last-child { border-bottom: none; padding-bottom: 0; }
        .journey-icon {
          width: 42px; height: 42px; flex-shrink: 0; border-radius: 10px;
          background: #fdf0e2; color: #b8531f; display: flex; align-items: center; justify-content: center;
        }
        .journey-icon svg { width: 19px; height: 19px; }
        .journey-year { font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 800; color: #b8531f; }
        .journey-title { font-size: 15px; font-weight: 700; color: #1c1917; margin-top: 4px; }
        .journey-desc { font-size: 13.5px; line-height: 1.65; color: #6b6560; margin-top: 6px; }

        /* ============================================================
           ≥480px — larger phones
           ============================================================ */
        @media (min-width: 480px) {
          .section { padding: 48px 24px; }
          .about-hero { padding: 48px 24px 36px; }
          .about-lead { font-size: 14.5px; }
          .stats-grid { gap: 22px; }
          .industries-grid { gap: 14px; }
        }

        /* ============================================================
           ≥640px — TABLET
           ============================================================ */
        @media (min-width: 640px) {
          .section { padding: 64px 32px; }
          .section-title { font-size: 33px; }
          .about-lead { font-size: 15.5px; }
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
          .industries-grid { grid-template-columns: repeat(4, 1fr); }
          .cta-banner { padding: 40px 32px; }
          .cta-title { font-size: 28px; }
          .cta-visual { max-width: 280px; }

          .founder-content { padding: 30px 32px 34px; }
          .founder-stats { grid-template-columns: repeat(3, 1fr); }
        }

        /* ============================================================
           ≥768px — HERO becomes a real two-column layout: text left,
           machine image blended into the right side as a large,
           fading visual (no longer a faint full-bleed backdrop)
           ============================================================ */
        @media (min-width: 768px) {
          .about-hero {
            padding: 0;
            display: flex;
            align-items: center;
            min-height: 420px;
          }

          .about-hero-bgimg {
            background-image:
              linear-gradient(90deg, #ffffff 0%, #ffffff 32%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.45) 60%, rgba(255,255,255,0.1) 78%, rgba(255,255,255,0) 92%),
              url('/Machines/Multi-Head VFFS Packaging Machine.png');
            background-position: 82% center;
            background-size: auto 92%;
            opacity: 1;
          }

          .about-hero .section-inner {
            width: 100%;
            padding: 56px 32px;
          }

          .about-hero-grid {
            max-width: 560px;
            margin: 0;
          }
        }

        /* ============================================================
           ≥1024px — DESKTOP
           ============================================================ */
        @media (min-width: 1024px) {
          .section { padding: 92px 40px; }

          .about-hero { min-height: 520px; }
          .about-hero .section-inner { padding: 80px 40px; }
          .about-hero-grid { max-width: 620px; }
          .about-hero .section-title { font-size: 36px; }
          .about-lead { font-size: 16px; }

          .about-hero-bgimg {
            background-position: 85% center;
            background-size: auto 88%;
          }

          .founder-title { font-size: 44px; }
          .founder-card { display: flex; align-items: stretch; }
          .founder-photo-wrap { width: 42%; aspect-ratio: auto; flex-shrink: 0; }
          .founder-content { flex: 1; padding: 44px 44px; display: flex; flex-direction: column; justify-content: center; }
          .founder-name { font-size: 32px; }
          .founder-bio { font-size: 14.5px; max-width: 520px; }
          .founder-stats { max-width: 480px; }

          .vmv-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }

          .challenge-accordion { display: none; }
          .challenge-grid-desktop {
            display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; margin-top: 36px;
          }
          .challenge-card {
            background: #ffffff; border: 1px solid #ead9c8; border-radius: 14px; padding: 26px 20px;
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }
          .challenge-card:hover {
            transform: translateY(-5px); border-color: #d98a4e;
            box-shadow: 0 18px 32px -16px rgba(184, 83, 31, 0.3);
          }
          .challenge-card-num { font-family: 'Source Serif 4', serif; font-size: 25px; font-weight: 800; color: #e3b585; margin-bottom: 14px; }
          .challenge-card-title { font-size: 15.5px; font-weight: 700; color: #1c1917; margin-bottom: 10px; line-height: 1.35; }
          .challenge-card-desc { font-size: 13.5px; line-height: 1.65; color: #6b6560; }

          .industries-grid { grid-template-columns: repeat(8, 1fr); }

          .cta-banner { padding: 56px 40px; }
          .cta-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            text-align: left;
          }
          .cta-content { text-align: left; max-width: 460px; }
          .cta-title { font-size: 36px; }
          .cta-visual { max-width: 340px; flex: 1; justify-content: flex-end; }

          .journey-list { flex-direction: row; gap: 0; }
          .journey-item {
            flex: 1; flex-direction: column; border-bottom: none;
            border-right: 1px solid #ece5da; padding: 0 20px;
          }
          .journey-item:last-child { border-right: none; }
        }

        /* ============================================================
           ≥1440px — extra breathing room
           ============================================================ */
        @media (min-width: 1440px) {
          .about-hero-grid { max-width: 660px; }
          .cta-visual { max-width: 400px; }
        }
      `}</style>

      <div className="about-root">

        {/* ===================== ABOUT US HERO — text left, machine image blended right ===================== */}
        <section className="about-hero">
          <div className="about-hero-bgimg" />
          <div className="section-inner">
            <div className="about-hero-grid">
              <div className="eyebrow">About Suntech</div>
              <h1 className="section-title">How We Are and What We Do</h1>
              <p className="about-lead" style={{ marginTop: 18 }}>
                <strong>Suntech and Allied Industries</strong> is a leading manufacturer of customized automatic packaging machines, delivering innovative, high-performance solutions for diverse industries. We specialize in designing precision-engineered machines that enhance packaging speed, accuracy, efficiency, and operational reliability.
              </p>
              <p className="about-lead">
                With a strong focus on quality manufacturing, advanced automation, and customer-centric innovation, we provide end-to-end packaging solutions backed by expert technical support, installation, training, and after-sales service. Our commitment is to help businesses improve productivity, reduce operational costs, and achieve sustainable growth through reliable packaging technology.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== FOUNDER / CEO — "The Vision Behind the Machine" ===================== */}
        <section className="section founder-section">
          <div className="section-inner">
            <h2 className="founder-title">
              The Vision
              <span className="accent">Behind the Machine.</span>
            </h2>

            <div className="founder-card">
              <div className="founder-photo-wrap">
                <img src={FOUNDER.photo} alt={FOUNDER.name} />
              </div>
              <div className="founder-content">
                <span className="founder-badge">{FOUNDER.badge}</span>
                <h3 className="founder-name">{FOUNDER.name}</h3>
                <div className="founder-role">{FOUNDER.title}</div>
                <div className="founder-divider" />
                <p className="founder-bio">{FOUNDER.bio}</p>
                <div className="founder-stats">
                  {FOUNDER.stats.map((s, i) => (
                    <div className="founder-stat" key={i}>
                      <div className="founder-stat-value">
                        {s.value.replace("+", "")}<span className="plus">+</span>
                      </div>
                      <div className="founder-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== VISION / MISSION / CORE VALUES ===================== */}
        <section className="section vmv-section">
          <div className="section-inner">
            <div className="vmv-grid">
              <div className="vmv-card">
                <div className="vmv-card-icon">{ICONS.eye}</div>
                <div className="vmv-card-title">Vision</div>
                <p className="vmv-card-text">
                  To become India's most trusted and globally recognized manufacturer of intelligent packaging machines by delivering innovative, efficient, and customized automation solutions that empower industries with superior productivity and long-term value.
                </p>
              </div>

              <div className="vmv-card">
                <div className="vmv-card-icon">{ICONS.target}</div>
                <div className="vmv-card-title">Mission</div>
                <p className="vmv-card-text">
                  To design and manufacture world-class packaging machines that combine precision, durability, and advanced technology while delivering exceptional customer support, continuous innovation, and customized solutions that drive business growth across multiple industries.
                </p>
              </div>

              <div className="vmv-card">
                <div className="vmv-card-icon">{ICONS.gem}</div>
                <div className="vmv-card-title">Core Values</div>
                <ul className="values-list">
                  {CORE_VALUES.map((v, i) => (
                    <li key={i}>
                      <span className="values-check">{ICONS.check}</span>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== STATS ===================== */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-icon">{ICONS.factory}</span>
              <div>
                <div className="stat-value">{STATS[0].value}</div>
                <div className="stat-label">{STATS[0].label}</div>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">{ICONS.pin}</span>
              <div>
                <div className="stat-value">{STATS[1].value}</div>
                <div className="stat-label">{STATS[1].label}</div>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">{ICONS.shield}</span>
              <div>
                <div className="stat-value">{STATS[2].value}</div>
                <div className="stat-label">{STATS[2].label}</div>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">{ICONS.headset}</span>
              <div>
                <div className="stat-value">{STATS[3].value}</div>
                <div className="stat-label">{STATS[3].label}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== MARKET CHALLENGES ===================== */}
        <section className="section challenges-section">
          <div className="section-inner">
            <div className="challenges-head">
              <div>
                <div className="eyebrow">Industry Landscape</div>
                <h2 className="section-title">Market Challenges</h2>
              </div>
              <div className="challenges-count">05 key pressures shaping the industry</div>
            </div>

            {/* Mobile accordion */}
            <div className="challenge-accordion">
              {CHALLENGES.map((c, i) => {
                const isOpen = activeChallenge === i;
                return (
                  <div className={`challenge-item ${isOpen ? "open" : ""}`} key={i}>
                    <button
                      className="challenge-item-head"
                      onClick={() => setActiveChallenge(isOpen ? -1 : i)}
                    >
                      <span className="challenge-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="challenge-item-title">{c.title}</span>
                      <span className="challenge-caret">+</span>
                    </button>
                    <div className="challenge-item-body">
                      <p className="challenge-item-desc">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop grid */}
            <div className="challenge-grid-desktop">
              {CHALLENGES.map((c, i) => (
                <div className="challenge-card" key={i}>
                  <div className="challenge-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="challenge-card-title">{c.title}</div>
                  <p className="challenge-card-desc">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="challenges-summary">
              The packaging industry is rapidly shifting toward intelligent automation, precision, and operational efficiency. Businesses need reliable, customized, and cost-effective packaging solutions that maximize productivity while minimizing downtime and waste.
            </div>
          </div>
        </section>

        {/* ===================== INDUSTRIES WE SERVE ===================== */}
        <section className="section industries-section">
          <div className="section-inner">
            <div className="eyebrow">Industries We Serve</div>
            <h2 className="section-title">Trusted Across Sectors</h2>

            <div className="industries-grid">
              {INDUSTRIES.map((ind, i) => (
                <div className="industry-chip" key={i}>
                  <span className="industry-icon">{ICONS.gem}</span>
                  <span className="industry-name">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== CTA BANNER — light bg, text left, machine right, compact height ===================== */}
        <section className="cta-banner">
          <div className="cta-inner">
            <div className="cta-content">
              <h2 className="cta-title">
                Precision Engineering.<br />
                <span className="accent">Powering Progress.</span>
              </h2>
              <p className="cta-text">
                Advanced manufacturing. Intelligent automation. Reliable performance.
              </p>
              <button className="cta-btn">
                Explore Machines
                {ICONS.arrow}
              </button>
            </div>

            <div className="cta-visual">
              <img src="/Machines/Labelling%20Machine.png" alt="Suntech Labelling Machine" />
            </div>
          </div>
        </section>

        {/* ===================== OUR JOURNEY ===================== */}
        <section className="section journey-section">
          <div className="section-inner">
            <div className="eyebrow">Our Journey</div>
            <h2 className="section-title">Milestones That Define Us</h2>

            <div className="journey-list">
              {JOURNEY.map((j, i) => (
                <div className="journey-item" key={i}>
                  <div className="journey-icon">{ICONS.factory}</div>
                  <div>
                    <div className="journey-year">{j.year}</div>
                    <div className="journey-title">{j.title}</div>
                    <p className="journey-desc">{j.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}