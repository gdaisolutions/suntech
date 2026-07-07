import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const TICKER_ITEMS = [
  "ISO 9001 Certified","Made in India","50+ Installations",
  "12+ Cities","Custom Engineering","After-Sales Support",
  "PLC Controlled","Stainless Steel Build","1-Year Warranty",
];

/*
  ── ROUTE SOURCE OF TRUTH ──
  These arrays now mirror exactly what Navbar.jsx uses/knows to exist.
  Any label that previously pointed to a route Navbar has no knowledge of
  (i.e. it doesn't exist in the router) has been re-pointed to the closest
  real, existing page instead of being left to 404.
*/

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Machines", to: "/machines" },   // was "/products" (route doesn't exist)
  { label: "Projects", to: "/projects" },
  { label: "Contact",  to: "/contact" },
];

// Matches Navbar's MACHINES dropdown exactly (same labels + same routes)
const MACHINE_LINKS = [
  { label: "All Machines",        to: "/machines" },
  { label: "Weighing & Filling",  to: "/machines/weighing"  },
  { label: "Packaging Machines",  to: "/machines/packaging" },
  { label: "Sealing Machines",    to: "/machines/sealing"   },
  { label: "Labelling Machines",  to: "/machines/labelling" },
];

// "Services" column renamed to "Resources": /services/* routes don't exist
// anywhere in the router (Navbar never links to them either), so these now
// point to real pages that already exist and are reachable from Navbar.
const RESOURCE_LINKS = [
  { label: "Media",     to: "/media" },
  { label: "FAQ",        to: "/faq" },
  { label: "Solutions",  to: "/solutions" },
  { label: "Brochure",   to: "/brochure" },
];

export default function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* ── TOKENS — premium warm-dark peach/orange, only a hint of black ── */
        .ft {
          --ft-bg: #241811;
          --ft-bg-light: #2c1d14;
          --ft-text: #f7ece0;
          --ft-muted: #cdad93;
          --ft-border: rgba(244, 169, 100, 0.16);
          --ft-orange: #f0974a;
          --ft-orange-bg: rgba(240, 151, 74, 0.14);
        }

        /* ── BASE ── */
        .ft {
          font-family: var(--font-body, 'Inter', sans-serif);
          background:
            linear-gradient(165deg, #2a1c13 0%, #201510 55%, #1c130e 100%);
          color: var(--ft-text);
          position: relative;
          overflow: hidden;
          padding-top: 0;
        }

        /* subtle grid pattern overlay */
        .ft::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(240, 151, 74, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(240, 151, 74, 0.07) 1px, transparent 1px);
          background-size: 34px 34px;
          -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 100%);
          mask-image: radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 100%);
          pointer-events: none;
        }

        /* soft orange glow accents */
        .ft::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 8% 0%, rgba(240, 151, 74, 0.10) 0%, transparent 70%),
            radial-gradient(ellipse 50% 35% at 100% 100%, rgba(240, 151, 74, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .ft-z { position: relative; z-index: 1; }

        /* ── TICKER ── */
        .ft-ticker-wrap {
          overflow: hidden;
          border-bottom: 1px solid var(--ft-border);
          background: var(--ft-bg-light);
          position: relative;
          z-index: 1;
        }

        .ft-ticker-track {
          display: flex; 
          width: max-content;
          animation: ft-tick 35s linear infinite;
        }

        @keyframes ft-tick {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .ft-ticker-item {
          display: inline-flex; 
          align-items: center; 
          gap: 8px;
          padding: 12px 28px;
          font-size: 11px; 
          font-weight: 600;
          letter-spacing: 0.05em; 
          text-transform: uppercase;
          color: var(--ft-muted); 
          white-space: nowrap;
        }

        .ft-ticker-dot {
          width: 4px; 
          height: 4px; 
          border-radius: 50%;
          background: var(--ft-orange); 
          flex-shrink: 0;
        }

        /* ── INNER WRAP ── */
        .ft-inner {
          max-width: 1220px; 
          margin: 0 auto;
          padding: 0 16px;
        }

        /* ── TOP ORANGE BAR ── */
        .ft-top-bar {
          height: 4px;
          background: linear-gradient(90deg, #f0974a 0%, #d9772c 100%);
          position: relative;
          z-index: 1;
        }

        /* ── BRAND SECTION ── */
        .ft-brand {
          padding: 32px 0 28px;
          border-bottom: 1px solid var(--ft-border);
          display: flex; 
          flex-direction: column; 
          gap: 28px;
        }

        @media (min-width: 768px) {
          .ft-brand {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 48px;
            padding: 48px 0 40px;
          }
        }

        /* ── LOGO ── */
        .ft-logo {
          display: inline-flex; 
          align-items: center;
          text-decoration: none; 
          width: fit-content;
        }

        .ft-logo-box {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          padding: 0;
          overflow: hidden;
          border-radius: 10px;
          background: var(--ft-bg-light);
          border: 2px solid var(--ft-orange);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          transition: all 0.3s ease;
        }

        .ft-logo-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(240, 151, 74, 0.25);
          border-color: var(--ft-orange);
        }

        .ft-logo-video {
          display: block;
          height: 60px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
          border-radius: inherit;
        }

        @media (min-width: 768px) {
          .ft-logo-box {
            height: 70px;
          }
          .ft-logo-video {
            height: 70px;
            max-width: 240px;
          }
        }

        .ft-desc {
          font-size: 14px; 
          font-weight: 500;
          color: var(--ft-muted); 
          line-height: 1.7;
          margin: 14px 0 0; 
          max-width: 340px;
        }

        /* ── CERTS ── */
        .ft-certs { 
          display: flex; 
          gap: 10px; 
          flex-wrap: wrap; 
          margin-top: 14px; 
        }

        .ft-cert {
          font-size: 10px; 
          font-weight: 700;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          color: var(--ft-orange);
          background: var(--ft-orange-bg);
          border: 1.5px solid var(--ft-orange);
          padding: 6px 12px; 
          border-radius: 4px;
        }

        /* ── STATS ── */
        .ft-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px 24px;
        }

        @media (min-width: 480px) {
          .ft-stats { 
            grid-template-columns: repeat(4, auto); 
            gap: 0 36px; 
          }
        }

        .ft-stat-num {
          font-size: 32px; 
          font-weight: 800;
          color: var(--ft-text); 
          line-height: 1; 
          display: block;
        }

        .ft-stat-num span { 
          color: var(--ft-orange); 
        }

        .ft-stat-lbl {
          font-size: 11px; 
          font-weight: 700;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          color: var(--ft-muted); 
          margin-top: 6px; 
          display: block;
        }

        /* ── LINKS GRID ── */
        .ft-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 20px;
          padding: 32px 0 28px;
          border-bottom: 1px solid var(--ft-border);
        }

        @media (min-width: 640px) {
          .ft-links-grid { 
            grid-template-columns: repeat(4, 1fr); 
            gap: 40px 32px; 
            padding: 40px 0 36px;
          }
        }

        .ft-col-head {
          font-size: 12px; 
          font-weight: 800;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          color: var(--ft-orange);
          margin-bottom: 18px;
          display: flex; 
          align-items: center; 
          gap: 8px;
        }

        .ft-col-head::after {
          content: ''; 
          flex: 0 0 24px; 
          height: 2px;
          background: var(--ft-orange);
        }

        .ft-col-links {
          list-style: none; 
          margin: 0; 
          padding: 0;
          display: flex; 
          flex-direction: column; 
          gap: 12px;
        }

        .ft-col-links a {
          font-size: 14px; 
          font-weight: 500;
          color: var(--ft-muted); 
          text-decoration: none;
          display: inline-flex; 
          align-items: center;
          transition: all 0.3s ease;
          letter-spacing: 0;
          position: relative; 
          padding-left: 0;
        }

        .ft-col-links a::before {
          content: '';
          display: inline-block; 
          width: 0; 
          height: 2px;
          background: var(--ft-orange);
          transition: all 0.3s ease;
          margin-right: 0; 
          vertical-align: middle;
        }

        .ft-col-links a:hover { 
          color: var(--ft-orange);
        }

        .ft-col-links a:hover::before { 
          width: 12px; 
          margin-right: 8px; 
        }

        /* ── CONTACT SECTION ── */
        .ft-contact-col { 
          grid-column: 1 / -1; 
        }

        @media (min-width: 640px) { 
          .ft-contact-col { 
            grid-column: auto; 
          } 
        }

        .ft-contact-list {
          list-style: none; 
          margin: 0; 
          padding: 0;
          display: flex; 
          flex-direction: column; 
          gap: 14px;
        }

        .ft-contact-item {
          display: flex; 
          align-items: flex-start; 
          gap: 12px;
          font-size: 13px; 
          font-weight: 500;
          color: var(--ft-muted); 
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .ft-contact-item:hover { 
          color: var(--ft-orange); 
        }

        .ft-contact-ico {
          width: 36px; 
          height: 36px; 
          flex-shrink: 0;
          border-radius: 6px;
          background: var(--ft-orange-bg);
          border: 1.5px solid var(--ft-orange);
          display: flex; 
          align-items: center; 
          justify-content: center;
          margin-top: 2px;
          transition: all 0.3s ease;
        }

        .ft-contact-item:hover .ft-contact-ico {
          background: var(--ft-orange);
          border-color: var(--ft-orange);
        }

        .ft-contact-ico svg {
          width: 14px; 
          height: 14px;
          stroke: var(--ft-orange); 
          fill: none;
          stroke-width: 2; 
          stroke-linecap: round; 
          stroke-linejoin: round;
        }

        .ft-contact-item:hover .ft-contact-ico svg {
          stroke: #201510;
        }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          display: flex; 
          flex-direction: column;
          align-items: flex-start; 
          gap: 16px;
          padding: 20px 0 28px; 
          text-align: left;
        }

        @media (min-width: 640px) {
          .ft-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .ft-copy {
          font-size: 11px; 
          font-weight: 600;
          letter-spacing: 0.05em; 
          text-transform: uppercase;
          color: var(--ft-muted);
        }

        .ft-bottom-right {
          display: flex; 
          align-items: center; 
          gap: 20px; 
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        @media (min-width: 640px) { 
          .ft-bottom-right { 
            justify-content: flex-end; 
          } 
        }

        .ft-designed-by {
          color: var(--ft-muted);
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0;
        }

        /* ── TROVIRA BADGE ── */
        .ft-trovira-badge {
          display: inline-flex; 
          align-items: center; 
          gap: 8px;
          padding: 6px 14px 6px 10px; 
          border-radius: 999px;
          background: var(--ft-orange-bg);
          border: 1.5px solid var(--ft-orange);
          text-decoration: none; 
          color: var(--ft-orange);
          font-size: 10px; 
          font-weight: 700;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          transition: all 0.3s ease;
          will-change: transform;
        }

        .ft-trovira-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(240, 151, 74, 0.25);
          background: var(--ft-orange);
          color: #201510;
        }

        .ft-trovira-dot { 
          width: 6px; 
          height: 6px; 
          border-radius: 50%; 
          background: currentColor; 
          box-shadow: 0 0 6px currentColor; 
          flex-shrink: 0; 
        }

        .ft-legal { 
          display: flex; 
          gap: 20px; 
        }

        .ft-legal a, .ft-legal-link {
          font-size: 10px; 
          font-weight: 600;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          color: var(--ft-muted); 
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .ft-legal a:hover, .ft-legal-link:hover { 
          color: var(--ft-orange); 
        }
      `}</style>

      <footer className="ft">

        {/* Top orange accent bar */}
        <div className="ft-top-bar" />

        {/* Ticker */}
        <div className="ft-ticker-wrap">
          <div className="ft-ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
              <span className="ft-ticker-item" key={i}>
                <span className="ft-ticker-dot" />{t}
              </span>
            ))}
          </div>
        </div>

        <div className="ft-z">
          <div className="ft-inner">

            {/* Brand */}
            <div className="ft-brand">

              <div style={{ display: "flex", flexDirection: "column", maxWidth: 360 }}>

                {/* ── VIDEO LOGO ── */}
                <Link to="/" className="ft-logo">
                  <div className="ft-logo-box">
                    <video
                      ref={videoRef}
                      className="ft-logo-video"
                      src={`${import.meta.env.BASE_URL}videos/SUNTECH_logo3d.mp4`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      disableRemotePlayback
                      aria-label="SunTech Packaging Machines"
                    />
                  </div>
                </Link>

                <p className="ft-desc">
                  High-performance industrial packaging machines engineered for precision, speed, and long-term reliability across food, pharma &amp; agro sectors.
                </p>

                <div className="ft-certs">
                  <span className="ft-cert">ISO 9001</span>
                  <span className="ft-cert">CE Marked</span>
                </div>

              </div>

              {/* Stats */}
              <div className="ft-stats">
                {[
                  { num: "500", sup: "+", lbl: "Installations" },
                  { num: "40",  sup: "+", lbl: "Cities" },
                  { num: "15",  sup: "+", lbl: "Years Exp." },
                  { num: "99",  sup: "%", lbl: "Uptime" },
                ].map((s, i) => (
                  <div key={i}>
                    <span className="ft-stat-num">{s.num}<span>{s.sup}</span></span>
                    <span className="ft-stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Links Grid */}
            <div className="ft-links-grid">

              <div>
                <p className="ft-col-head">Navigate</p>
                <ul className="ft-col-links">
                  {NAV_LINKS.map(l => (
                    <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="ft-col-head">Machines</p>
                <ul className="ft-col-links">
                  {MACHINE_LINKS.map(l => (
                    <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="ft-col-head">Resources</p>
                <ul className="ft-col-links">
                  {RESOURCE_LINKS.map(l => (
                    <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Contact — full width on mobile */}
              <div className="ft-contact-col">
                <p className="ft-col-head">Contact</p>
                <ul className="ft-contact-list">
                  <li className="ft-contact-item">
                    <span className="ft-contact-ico">
                      <svg viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <span>SUNTECH AND ALLIED INDUSTRIES,Gate no. 170,Near
Huma Bakery,Ganesh Ngr , Talawade, Pimpri
Chinchwad area,<br/> Pune -411062</span>
                  </li>
                  <li className="ft-contact-item">
                    <span className="ft-contact-ico">
                      <svg viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </span>
                    <span>+91 8975073111</span>
                  </li>
                  <li className="ft-contact-item">
                    <span className="ft-contact-ico">
                      <svg viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <span>sales@suntechpac.com<br/>
ceo@suntechpac.com</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="ft-bottom">
              <span className="ft-copy">© {new Date().getFullYear()} SunTech Packaging Machines. All rights reserved.</span>
              <div className="ft-bottom-right">
                <p className="ft-designed-by">
                  Designed by{" "}
                  <a
                    href="https://www.gdaisolutions.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ft-trovira-badge"
                  >
                    <span className="ft-trovira-dot" />
                    GD AI Solutions
                  </a>
                </p>
                <div className="ft-legal">
                  <Link to="/privacy-policy" className="ft-legal-link" style={{ cursor: "pointer" }}>Privacy Policy</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}