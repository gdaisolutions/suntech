import React from "react";

const ORANGE = "#e8590c";

/* ------------------------------------------------------------------ */
/* City markers — percentage positions relative to the Map_bg.png      */
/* IMAGE ITSELF (not the page), since the image now renders at its    */
/* natural aspect ratio with no cropping. Nudge x/y if any dot drifts  */
/* off its city once you see the real artwork at full size.           */
/* No tooltips/popups — just a dot + a small label pill.              */
/* ------------------------------------------------------------------ */
// const CITIES = [
//   { id: "bhopal", label: "Bhopal", x: 73.3, y: 37.6 },
//   { id: "ranchi", label: "Ranchi", x: 81.3, y: 40.5 },
//   { id: "kolkata", label: "Kolkata", x: 88.5, y: 45.1 },
//   { id: "nagpur", label: "Nagpur", x: 74.8, y: 46.4 },
//   { id: "raipur", label: "Raipur", x: 79.6, y: 46.4 },
//   { id: "nashik", label: "Nashik", x: 64.9, y: 52.1 },
//   { id: "csamb-nagar", label: "Chh. Sambhajinagar", x: 72.1, y: 52.1 },
//   { id: "navi-mumbai", label: "Navi Mumbai", x: 64.8, y: 55.1 },
//   { id: "ahilyanagar", label: "Ahilyanagar", x: 70.8, y: 55.1 },
//   { id: "satara", label: "Satara", x: 65.8, y: 59.3 },
//   { id: "kolhapur", label: "Kolhapur", x: 66.9, y: 62.3 },
//   { id: "hubballi", label: "Hubballi", x: 67.6, y: 66.3 },
//   { id: "bengaluru", label: "Bengaluru", x: 72.5, y: 72.8 },
// ];

const STATS = [
  { value: "740+", label: "Installs", icon: "box" },
  { value: "15+", label: "Cities", icon: "pin" },
  { value: "99%", label: "Uptime", icon: "clock" },
  { value: "24/7", label: "Support", icon: "headset" },
];

const INDUSTRIES = [
  { label: "Food & Beverage", icon: "food" },
  { label: "Pharmaceuticals", icon: "pharma" },
  { label: "Chemicals", icon: "chem" },
  { label: "FMCG", icon: "fmcg" },
  { label: "Cosmetics", icon: "cosmetics" },
  { label: "Agro Products", icon: "agro" },
  { label: "Electronics", icon: "electronics" },
];

function Icon({ type }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: ORANGE, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "box":
      return <svg {...common}><path d="M3 8l9-5 9 5-9 5-9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></svg>;
    case "pin":
      return <svg {...common}><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.3" /></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>;
    case "headset":
      return <svg {...common}><path d="M4 13v-1a8 8 0 0116 0v1" /><rect x="2.5" y="13" width="4" height="6" rx="1.5" /><rect x="17.5" y="13" width="4" height="6" rx="1.5" /><path d="M20 19a4 4 0 01-4 4h-2" /></svg>;
    default:
      return null;
  }
}

function IndustryIcon({ type }) {
  const common = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "#78716c", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (type) {
    case "food":
      return <svg {...common}><path d="M6 3v6a2 2 0 002 2h0a2 2 0 002-2V3" /><path d="M8 11v10" /><path d="M16 3c-1.5 0-2.5 1.5-2.5 4s1 4 2.5 4V21" /></svg>;
    case "pharma":
      return <svg {...common}><rect x="5" y="9" width="14" height="10" rx="5" transform="rotate(-45 12 12)" /><path d="M8.5 15.5l7-7" /></svg>;
    case "chem":
      return <svg {...common}><path d="M9 3h6" /><path d="M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" /><path d="M7.5 15h9" /></svg>;
    case "fmcg":
      return <svg {...common}><path d="M6 8h12l-1 12H7z" /><path d="M9 8V6a3 3 0 016 0v2" /></svg>;
    case "cosmetics":
      return <svg {...common}><rect x="7" y="8" width="4" height="12" rx="1" /><path d="M8 8V5a1 1 0 011-1h0a1 1 0 011 1v3" /><rect x="13" y="4" width="4" height="16" rx="1" /></svg>;
    case "agro":
      return <svg {...common}><path d="M12 21V9" /><path d="M12 9c0-4 3-7 7-7 0 4-3 7-7 7z" /><path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" /></svg>;
    case "electronics":
      return <svg {...common}><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M12 4v2M12 18v2M4 12h2M18 12h2" /></svg>;
    default:
      return null;
  }
}

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .hero-root * { box-sizing: border-box; }

        .hero-root {
          position: relative;
          width: 100%;
          background: var(--champagne);
          font-family: var(--font-body);
          overflow: hidden;
          margin-bottom: 28px;
        }

        @media (min-width: 768px) {
          .hero-root { margin-bottom: 56px; }
        }

        @media (min-width: 1024px) {
          .hero-root { margin-bottom: 72px; }
        }

        .hero-flex {
          position: relative;
          display: flex;
          flex-direction: column;
          max-width: 1500px;
          margin: 0 auto;
        }

        /* ===================================================== */
        /* MOBILE / DEFAULT: map is the first thing, full-width,  */
        /* with the title overlaid directly on it. Everything     */
        /* else (description, buttons, stats) sits below it in    */
        /* normal flow, outside the image.                        */
        /* ===================================================== */

        .hero-map-col {
          position: relative;
          width: 100%;
          order: 1;
        }

        .hero-map-frame {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--champagne);
          isolation: isolate; /* contain the blend mode below to just this box */
        }

        /* wrapper contains the image; its own background matches the
           page so the blend mode below has the right color to mix into */
        .hero-map-img-wrap {
          position: relative;
          overflow: hidden;
          line-height: 0;
          background: var(--champagne);
        }

        .hero-map-img {
          display: block;
          width: 100%;
          height: auto; /* natural aspect ratio — never cropped */
          /* the PNG's own flat white/grey canvas "multiplies away" into
             the champagne backdrop behind it, so there's no visible
             rectangle — only the map/machine artwork stays visible,
             sitting directly on the page color. This removes the boxed
             look everywhere, not just at the edges.                    */
          mix-blend-mode: multiply;
        }

        /* extra soft fade right at the physical edges as a safety net,
           in case the source PNG's canvas isn't perfectly pure white   */
        .hero-map-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          box-shadow:
            inset 0 14px 14px -10px var(--champagne),
            inset 0 -14px 14px -10px var(--champagne);
        }

        /* darken gradient so the overlaid title stays readable on mobile */
        .hero-map-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(20,16,10,0.12) 0%, rgba(20,16,10,0.08) 40%, rgba(20,16,10,0.4) 72%, rgba(20,16,10,0.62) 100%);
          pointer-events: none;
        }

        /* title + eyebrow, overlaid on top of the map — anchored toward
           the bottom of the image on mobile so the map artwork itself
           stays visible up top, with the title sitting just above the
           description copy that follows underneath the image */
        .hero-map-overlay-text {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 16px 16px 18px;
          z-index: 3;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffb37a;
          margin-bottom: 8px;
        }
        .hero-eyebrow::before { content: ''; width: 14px; height: 2px; background: #ffb37a; display: inline-block; }

        .hero-title {
          font-size: clamp(19px, 6.2vw, 26px);
          font-weight: 900;
          line-height: 1.14;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.4);
        }
        .hero-title .accent { color: #ff9d54; }

        /* top-right "serving" tag over the image */
        .hero-serving-tag {
          position: absolute;
          top: 4%;
          right: 4%;
          z-index: 3;
          text-align: right;
          font-size: 10.5px;
          font-weight: 800;
          line-height: 1.3;
          color: #1c1917;
          text-transform: uppercase;
          background: rgba(255,255,255,0.88);
          padding: 6px 9px;
          border-radius: 6px;
          max-width: 44%;
        }
        .hero-serving-tag .accent { color: ${ORANGE}; }
        .hero-serving-rule {
          width: 18px; height: 2px; background: ${ORANGE};
          margin: 6px 0 0 auto;
        }

        /* city markers, positioned relative to hero-map-frame */
        .hero-city-marker {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          transform: translate(0, -50%);
          z-index: 2;
        }
        .hero-city-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: ${ORANGE};
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 3px rgba(232,89,12,0.18);
          flex-shrink: 0;
        }
        .hero-city-pill {
          background: rgba(255,255,255,0.92);
          border-radius: 5px;
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 700;
          color: #3a3733;
          white-space: nowrap;
        }

        /* ── TEXT COLUMN (below the map on mobile) ── */
        .hero-text-col {
          order: 2;
          max-width: 560px;
          width: 100%;
          padding: 16px 16px 24px;
        }

        /* the eyebrow/title duplicated here for desktop only — hidden on mobile */
        .hero-text-col .hero-eyebrow,
        .hero-text-col .hero-title {
          display: none;
        }

        .hero-desc {
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--text-2);
          font-weight: 500;
          margin-bottom: 16px;
          max-width: 34em;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 15px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          background: ${ORANGE};
          color: #ffffff;
          box-shadow: 0 8px 18px -8px rgba(232, 89, 12, 0.5);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 22px -8px rgba(232, 89, 12, 0.55); }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 15px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          background: #ffffff;
          color: #1c1917;
          border: 1px solid #e7ddc9;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .hero-btn-secondary:hover { background: #fdf6ee; border-color: ${ORANGE}; }

        /* floating stats card */
        .hero-stats-card {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background: #ffffff;
          border: 1px solid #f0e2cf;
          border-radius: 12px;
          box-shadow: 0 16px 32px -18px rgba(28,25,23,0.18);
          max-width: 620px;
          overflow: hidden;
        }
        .hero-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 12px;
          border-right: 1px solid #f0e2cf;
          border-bottom: 1px solid #f0e2cf;
          min-width: 0;
        }
        .hero-stat svg { flex-shrink: 0; width: 17px; height: 17px; }
        .hero-stat-value { font-size: 16px; font-weight: 800; color: #1c1917; line-height: 1; }
        .hero-stat-label { font-size: 9.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #a8896a; margin-top: 2px; white-space: nowrap; }

        /* ── SMALL MOBILE (very small phones) ── */
        @media (max-width: 380px) {
          .hero-serving-tag { font-size: 9px; padding: 5px 7px; top: 3%; right: 3%; }
          .hero-serving-rule { width: 14px; }
          .hero-stat-label { font-size: 8.5px; }
          .hero-stat-value { font-size: 14px; }
          .hero-title { font-size: clamp(17px, 5.8vw, 22px); }
          .hero-btn-primary, .hero-btn-secondary { padding: 8px 13px; font-size: 10px; }
        }

        /* ── TABLET ── */
        @media (min-width: 640px) {
          .hero-serving-tag { font-size: 13px; padding: 8px 12px; }
          .hero-serving-rule { width: 22px; }
          .hero-map-overlay-text { padding: 24px 24px 26px; }
        }

        /* ===================================================== */
        /* DESKTOP: revert to side-by-side. Map on the right,     */
        /* full text block (eyebrow + title + desc + ctas +       */
        /* stats) on the left, nothing overlaid on the image.     */
        /* Image edges fade on ALL sides into the page background */
        /* so it reads as one continuous surface, not a card.     */
        /* ===================================================== */
        @media (min-width: 960px) {
          .hero-flex {
            flex-direction: row;
            align-items: center;
            padding: 56px 32px 64px;
            gap: 16px;
          }

          .hero-map-col { order: 2; flex: 1; }
          .hero-text-col {
            order: 1;
            flex: 0 0 38%;
            max-width: 460px;
            padding: 0;
          }

          /* on desktop the title lives in the text column, not on the image —
             hide the mobile-only dark scrim too, it has no reason to exist
             once the title isn't overlaid on the photo anymore */
          .hero-map-overlay-text { display: none; }
          .hero-map-scrim { display: none; }

          .hero-text-col .hero-eyebrow,
          .hero-text-col .hero-title {
            display: block;
          }
          .hero-text-col .hero-eyebrow { font-size: 12px; margin-bottom: 18px; color: ${ORANGE}; }
          .hero-text-col .hero-eyebrow::before { background: ${ORANGE}; }
          .hero-text-col .hero-title {
            font-size: clamp(32px, 4.4vw, 50px);
            margin-bottom: 18px;
            color: var(--text-1);
            text-shadow: none;
          }
          .hero-text-col .hero-title .accent { color: var(--accent); }

          .hero-desc { font-size: 15px; margin-bottom: 26px; }
          .hero-ctas { gap: 12px; margin-bottom: 24px; }
          .hero-btn-primary, .hero-btn-secondary { padding: 14px 24px; font-size: 13.5px; }
          .hero-stat { padding: 16px 18px; gap: 10px; }
          .hero-stat-value { font-size: 19px; }
          .hero-stat-label { font-size: 10.5px; }
          .hero-serving-tag { background: transparent; padding: 0; max-width: none; font-size: 15px; }

          /* no rounded card corners + all-round vignette so the image
             dissolves into the surrounding page instead of sitting in
             a visibly separate box */
          .hero-map-frame { border-radius: 0; }
          .hero-map-img-wrap::after {
            box-shadow: inset 0 0 60px 36px var(--champagne);
          }
        }

        /* ===================================================== */
        /* TRUSTED-BY-INDUSTRIES BAR — professional, centered,    */
        /* fully mobile responsive.                                */
        /* ===================================================== */
        .hero-trust-bar {
          position: relative;
          z-index: 2;
          background: linear-gradient(180deg, #ffffff 0%, #fefbf7 100%);
          border-top: 1px solid #f0e2cf;
          border-bottom: 1px solid #f0e2cf;
          padding: 26px 16px;
          margin-bottom: 28px;
          box-shadow: 0 1px 0 rgba(28, 25, 23, 0.02);
        }
        @media (min-width: 768px) {
          .hero-trust-bar { padding: 32px 24px; margin-bottom: 54px; }
        }
        @media (min-width: 1024px) {
          .hero-trust-bar { padding: 36px 24px; margin-bottom: 72px; }
        }

        .hero-trust-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          text-align: center;
        }

        .hero-trust-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .hero-trust-icon {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, ${ORANGE} 0%, #d14e08 100%);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 16px -6px rgba(232, 89, 12, 0.45);
        }
        .hero-trust-icon svg { width: 18px; height: 18px; }
        .hero-trust-label-text {
          font-size: 12.5px;
          font-weight: 800;
          color: #1c1917;
          line-height: 1.35;
          letter-spacing: 0.01em;
        }

        .hero-trust-divider {
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e7ddc9, transparent);
        }

        .hero-industries {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px 6px;
        }
        .hero-industry {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          color: #57534e;
          text-align: center;
          min-width: 66px;
          padding: 10px 8px 9px;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .hero-industry:hover {
          background: #fdf6ee;
          border-color: #f0e2cf;
          transform: translateY(-3px);
        }
        .hero-industry svg { width: 21px; height: 21px; }

        @media (min-width: 640px) {
          .hero-trust-inner { flex-direction: row; gap: 26px; }
          .hero-trust-label {
            flex-direction: row;
            gap: 12px;
            padding-right: 24px;
            border-right: 1px solid #ece5da;
          }
          .hero-trust-divider { display: none; }
          .hero-trust-icon { width: 44px; height: 44px; }
          .hero-trust-icon svg { width: 20px; height: 20px; }
          .hero-trust-label-text { font-size: 13.5px; text-align: left; }
          .hero-industries { gap: 6px 10px; }
          .hero-industry { font-size: 11.5px; min-width: 80px; gap: 7px; padding: 12px 10px 10px; }
          .hero-industry svg { width: 25px; height: 25px; }
        }

        @media (min-width: 1024px) {
          .hero-trust-inner { gap: 32px; }
          .hero-trust-label { padding-right: 30px; }
          .hero-industries { gap: 8px 14px; }
        }
      `}</style>

      <div className="hero-root">
        <div className="hero-flex">

          {/* MAP — first on mobile, with title overlaid on top of it */}
          <div className="hero-map-col">
            <div className="hero-map-frame">
              <div className="hero-map-img-wrap">
                <img className="hero-map-img" src="/Map_bg.png" alt="Map of India showing Suntech installation cities" />
              </div>

              {/* scrim only affects mobile overlay readability; hidden overlay on desktop makes it harmless there */}
              <div className="hero-map-scrim" />

              {/* Title overlaid directly on the map — mobile/tablet only, hidden at ≥960px */}
              <div className="hero-map-overlay-text">
               
                <h1 className="hero-title">
                  Engineering <span className="accent">Precision.</span><br />
                  Delivering <span className="accent">Performance.</span>
                </h1>
              </div>

              

              {/* {CITIES.map((city) => (
                <div
                  key={city.id}
                  className="hero-city-marker"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  <span className="hero-city-dot" />
                  <span className="hero-city-pill">{city.label}</span>
                </div>
              ))} */}
            </div>
          </div>

          {/* TEXT — below the map on mobile. Eyebrow/title here are hidden on mobile
              (they already appear overlaid on the map) and shown only on desktop. */}
          <div className="hero-text-col">
      
            <h1 className="hero-title">
              Engineering<br />
              <span className="accent">Precision.</span><br />
              Delivering<br />
              <span className="accent">Performance.</span>
            </h1>

            <p className="hero-desc">
              High-performance packaging machines built for speed, accuracy, and long-term reliability. Trusted by manufacturers across 15+ major cities in India.
            </p>

            <div className="hero-ctas">
              <a href="/machines" className="hero-btn-primary">Explore machines &rarr;</a>
              <a href="/contact" className="hero-btn-secondary">Request a quote</a>
            </div>

            <div className="hero-stats-card">
              {STATS.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <Icon type={s.icon} />
                  <div>
                    <div className="hero-stat-value">{s.value}</div>
                    <div className="hero-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="hero-trust-bar">
        <div className="hero-trust-inner">
          <div className="hero-trust-label">
            <div className="hero-trust-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l7 3v6c0 4.8-3 8.4-7 9-4-0.6-7-4.2-7-9V6z" stroke="#fff" strokeWidth="1.8" />
                <path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="hero-trust-label-text">Trusted by<br />Leading Industries</div>
          </div>
          <div className="hero-trust-divider" />
          <div className="hero-industries">
            {INDUSTRIES.map((ind) => (
              <div className="hero-industry" key={ind.label}>
                <IndustryIcon type={ind.icon} />
                {ind.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}