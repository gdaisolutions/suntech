import { useState } from "react";
import BrochureLeadModal from "../components/common/BrochureLeadModal";

export default function Brochure() {
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  return (
    <main style={{ minHeight: "100vh", background: "var(--champagne)", fontFamily: "var(--font-body)", margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

        :root {
          --bg:            #f4f4f2;
          --paper:         #ffffff;
          --surface-alt:   #ececea;
          --border:        #d7d8d4;
          --border-strong: #b9bab5;
          --text-1:        #16181a;
          --text-2:        #52565c;
          --text-3:        #8c8f92;
          --steel:         #2e3d4d;
          --accent:        #c2560f;
          --accent-dark:   #9c440b;
          --accent-tint:   #f7e9df;
          --on-accent:     #ffffff;
        }
        * { box-sizing: border-box; }

        .bro-wrap {
          max-width: 1120px; margin: 0 auto;
          padding: 48px 20px 60px;
          position: relative;
        }

        /* faint blueprint grid backdrop */
        .bro-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, rgba(46,61,77,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(46,61,77,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
        }

        /* ── TOP LABEL ── */
        .bro-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--steel);
          border: 1px solid var(--border-strong);
          border-radius: 2px; padding: 7px 12px;
          margin-bottom: 24px;
          position: relative; z-index: 1;
        }
        .bro-eyebrow-dot { width: 7px; height: 7px; background: var(--accent); flex-shrink: 0; }

        /* ── HERO SPLIT ── */
        .bro-hero {
          display: grid; grid-template-columns: 1fr;
          gap: 36px; align-items: stretch;
          margin-bottom: 40px;
          position: relative; z-index: 1;
        }
        @media (min-width: 860px) {
          .bro-hero { grid-template-columns: 1.05fr 0.95fr; gap: 0; }
        }

        .bro-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(34px, 7vw, 50px);
          font-weight: 700; color: var(--text-1);
          letter-spacing: -0.2px; text-transform: uppercase;
          line-height: 1.05; margin-bottom: 16px;
        }
        .bro-title span { color: var(--accent); }

        .bro-sub {
          font-size: 15px; color: var(--text-2);
          font-weight: 500; line-height: 1.75;
          max-width: 420px; margin-bottom: 26px;
        }

        .bro-download-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--steel); color: #fff;
          font-size: 13.5px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase;
          padding: 15px 26px; border-radius: 2px; border: none; cursor: pointer;
          text-decoration: none;
          transition: background .2s, transform .15s;
        }
        .bro-download-btn:hover { background: var(--accent); transform: translateY(-1px); }
        .bro-download-icon { transition: transform .3s; }
        .bro-download-btn:hover .bro-download-icon { transform: translateY(3px); }

        .bro-notice {
          display: flex; align-items: flex-start; gap: 10px;
          margin-top: 16px; padding: 12px 14px;
          background: var(--accent-tint);
          border-left: 3px solid var(--accent);
          max-width: 440px;
        }
        .bro-notice-icon { flex-shrink: 0; margin-top: 1px; }
        .bro-notice-text {
          font-size: 12px; line-height: 1.55; color: var(--text-2); font-weight: 500;
        }
        .bro-notice-text strong { color: var(--text-1); font-weight: 700; }

        /* ── DOCUMENT / SPEC SHEET VISUAL ── */
        .bro-doc-stage {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          padding: 8px 0;
          border-left: 1px solid var(--border);
        }
        @media (max-width: 859px) { .bro-doc-stage { border-left: none; } }

        .bro-doc-stack { position: relative; width: 216px; height: 288px; }
        .bro-doc-sheet {
          position: absolute; inset: 0;
          background: var(--paper);
          border: 1px solid var(--border-strong);
        }
        .bro-doc-sheet.s2 { transform: translate(-10px, 10px); z-index: 1; opacity: 0.5; }
        .bro-doc-sheet.s1 { transform: translate(-5px, 5px); z-index: 2; opacity: 0.75; }
        .bro-doc-sheet.s0 {
          z-index: 3; padding: 0;
          display: flex; flex-direction: column;
          box-shadow: 0 18px 34px rgba(20,22,24,0.10);
        }

        /* corner brackets — technical drawing marks */
        .bro-corner {
          position: absolute; width: 14px; height: 14px;
          border: 2px solid var(--steel);
        }
        .bro-corner.tl { top: -6px; left: -6px; border-right: none; border-bottom: none; }
        .bro-corner.tr { top: -6px; right: -6px; border-left: none; border-bottom: none; }
        .bro-corner.bl { bottom: -6px; left: -6px; border-right: none; border-top: none; }
        .bro-corner.br { bottom: -6px; right: -6px; border-left: none; border-top: none; }

        .bro-doc-top-bar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 18px 14px;
          border-bottom: 1px solid var(--border);
        }
        .bro-doc-mark {
          width: 24px; height: 24px;
          background: var(--steel);
          display: flex; align-items: center; justify-content: center;
        }
        .bro-doc-pdf-tag {
          font-family: 'IBM Plex Mono', monospace;
          background: var(--accent); color: #fff;
          font-size: 9px; font-weight: 600; letter-spacing: 1.4px;
          padding: 4px 8px;
        }
        .bro-doc-body { padding: 16px 18px; flex: 1; }
        .bro-doc-line { height: 6px; background: var(--surface-alt); margin-bottom: 9px; }
        .bro-doc-line.w-70 { width: 70%; }
        .bro-doc-line.w-90 { width: 90%; }
        .bro-doc-line.w-55 { width: 55%; }
        .bro-doc-line.w-80 { width: 80%; }
        .bro-doc-line.accent { background: var(--accent-tint); height: 8px; }
        .bro-doc-spacer { height: 8px; }
        .bro-doc-footer-row {
          padding: 12px 18px; border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
        }
        .bro-doc-footer-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; font-weight: 600; letter-spacing: 1.2px; color: var(--text-3); text-transform: uppercase;
        }
        .bro-doc-page-count {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; font-weight: 600; color: var(--accent-dark);
        }

        /* ── STAT / SPEC STRIP ── */
        .bro-stats {
          display: grid; grid-template-columns: repeat(2, 1fr);
          border: 1px solid var(--border);
          margin-bottom: 34px;
          position: relative; z-index: 1;
          background: var(--paper);
        }
        @media (min-width: 640px) { .bro-stats { grid-template-columns: repeat(4, 1fr); } }
        .bro-stat {
          padding: 18px 18px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .bro-stat:nth-child(2n) { border-right: 1px solid var(--border); }
        @media (min-width: 640px) {
          .bro-stat:last-child { border-right: none; }
          .bro-stat { border-bottom: none; }
        }
        .bro-stat-value {
          font-family: 'Oswald', sans-serif;
          font-size: 20px; font-weight: 600; color: var(--text-1); letter-spacing: 0.2px;
        }
        .bro-stat-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; font-weight: 600; color: var(--text-3); letter-spacing: 1px; text-transform: uppercase; margin-top: 4px;
        }

        /* ── INCLUDES SECTION ── */
        .bro-includes-card {
          background: var(--paper); border: 1px solid var(--border);
          padding: 30px 26px;
          margin-bottom: 22px;
          position: relative; z-index: 1;
        }
        .bro-includes-head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
        }
        .bro-includes-title {
          font-family: 'Oswald', sans-serif;
          font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--text-1);
        }
        .bro-includes-line { flex: 1; height: 1px; background: var(--border); }

        .bro-inc-grid {
          display: grid; grid-template-columns: 1fr; gap: 0;
        }
        @media (min-width: 560px) { .bro-inc-grid { grid-template-columns: 1fr 1fr; } }

        .bro-inc-item {
          display: flex; align-items: flex-start; gap: 14px;
          font-size: 13.5px; color: var(--text-2); font-weight: 500; line-height: 1.4;
          padding: 12px 0;
          border-top: 1px solid var(--border);
        }
        .bro-inc-index {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 600; color: var(--accent-dark);
          flex-shrink: 0; margin-top: 1px;
        }

        .bro-footnote {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 600; letter-spacing: 0.5px;
          color: var(--text-3); text-align: center;
          position: relative; z-index: 1;
        }

        @media (max-width: 480px) {
          .bro-includes-card { padding: 22px 18px; }
          .bro-doc-stack { width: 180px; height: 244px; }
        }
      `}</style>

      <div className="bro-grid-bg" />

      <div className="bro-wrap">

        <div className="bro-eyebrow">
          <span className="bro-eyebrow-dot" />
          Technical Resources
        </div>

        <div className="bro-hero">
          <div style={{ padding: "4px 32px 4px 0" }}>
            <h1 className="bro-title">
              Product <span>Brochure</span>
            </h1>
            <p className="bro-sub">
              A complete overview of our packaging machines, technical specifications, and installation capabilities — everything you need before you get in touch.
            </p>
            <button type="button" onClick={() => setShowBrochureModal(true)} className="bro-download-btn">
              <svg className="bro-download-icon" viewBox="0 0 20 20" fill="none" width="18" height="18">
                <path d="M10 3v10M10 13l-3-3M10 13l3-3M3 16h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Brochure
            </button>

            <div className="bro-notice">
              <span className="bro-notice-icon">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#c2560f" strokeWidth="1.6"/>
                  <path d="M10 6.5v4.2M10 13.3h.01" stroke="#c2560f" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="bro-notice-text">
                <strong>Please note:</strong> the brochure download will begin only after your contact details have been submitted.
              </span>
            </div>
          </div>

          {/* DOCUMENT / SPEC SHEET MOCKUP */}
          <div className="bro-doc-stage">
            <div className="bro-doc-stack">
              <div className="bro-doc-sheet s2" />
              <div className="bro-doc-sheet s1" />
              <div className="bro-doc-sheet s0">
                <span className="bro-corner tl" />
                <span className="bro-corner tr" />
                <span className="bro-corner bl" />
                <span className="bro-corner br" />
                <div className="bro-doc-top-bar">
                  <div className="bro-doc-mark">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="bro-doc-pdf-tag">PDF</span>
                </div>
                <div className="bro-doc-body">
                  <div className="bro-doc-line accent w-70" />
                  <div className="bro-doc-spacer" />
                  <div className="bro-doc-line w-90" />
                  <div className="bro-doc-line w-80" />
                  <div className="bro-doc-line w-55" />
                  <div className="bro-doc-spacer" />
                  <div className="bro-doc-line w-90" />
                  <div className="bro-doc-line w-70" />
                </div>
                <div className="bro-doc-footer-row">
                  <span className="bro-doc-footer-label">Suntech</span>
                  <span className="bro-doc-page-count">24 PAGES</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SPEC STRIP */}
        <div className="bro-stats">
          <div className="bro-stat">
            <div className="bro-stat-value">24</div>
            <div className="bro-stat-label">Pages</div>
          </div>
          <div className="bro-stat">
            <div className="bro-stat-value">PDF</div>
            <div className="bro-stat-label">Format</div>
          </div>
          <div className="bro-stat">
            <div className="bro-stat-value">EN / HI</div>
            <div className="bro-stat-label">Language</div>
          </div>
          <div className="bro-stat">
            <div className="bro-stat-value">2026</div>
            <div className="bro-stat-label">Edition</div>
          </div>
        </div>

        {/* INCLUDES */}
        <div className="bro-includes-card">
          <div className="bro-includes-head">
            <span className="bro-includes-title">What&apos;s Inside</span>
            <span className="bro-includes-line" />
          </div>
          <div className="bro-inc-grid">
            {[
              "Machine specifications & models",
              "Technical drawings & dimensions",
              "Delivery terms",
              "After-sales support details",
            ].map((item, i) => (
              <div className="bro-inc-item" key={i}>
                <span className="bro-inc-index">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </div>
            ))}
          </div>
        </div>

       

      </div>
      <BrochureLeadModal
        open={showBrochureModal}
        onClose={() => setShowBrochureModal(false)}
        source="Brochure page"
      />
    </main>
  );
}