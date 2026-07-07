const projects = [
  {
    title: "Namkeen Packaging Setup",
    desc: "Complete automatic packaging line installed for a leading snack industry client — tailored for high-volume, airtight output.",
    tag: "Snack Industry",
    year: "2024",
    stat: "1200 packs/hr",
    num: "01",
  },
  {
    title: "Spices Packing Unit",
    desc: "High-speed powder packing solution with precision filling mechanisms, ensuring zero spillage and consistent weight accuracy.",
    tag: "Spice Industry",
    year: "2023",
    stat: "±0.5g precision",
    num: "02",
  },
  {
    title: "Flour Packaging Line",
    desc: "Multi-head weigher integration for a flour mill — fully automated from conveyor feed to sealed pouch output.",
    tag: "Flour Mill",
    year: "2024",
    stat: "2 tonne/day",
    num: "03",
  },
];

export default function Projects() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--surface)", fontFamily: "var(--font-body)", margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

        :root {
          --bg:            #ffffff;
          --surface:       #fbfbfc;
          --surface-alt:   #f4f5f7;
          --border:        #e4e6ea;
          --border-strong: #d7dae0;
          --text-1:        #191c20;
          --text-2:        #4b515a;
          --text-3:        #868c96;
          --accent:        #e0620f;
          --accent-dark:   #b94e0b;
          --accent-tint:   #fdf1e7;
          --accent-tint-2: #fbe4cf;
        }
        * { box-sizing: border-box; }

        /* ── HERO ── */
        .proj-hero {
          background: var(--surface-alt);
          padding: 44px 16px 36px;
          position: relative; overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .proj-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
          mask-image: radial-gradient(ellipse 70% 100% at 0% 0%, rgba(0,0,0,0.5) 0%, transparent 65%);
          opacity: 0.7;
        }
        .proj-hero-inner { max-width: 1080px; margin: 0 auto; position: relative; z-index: 1; }

        .proj-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--accent-dark);
          background: var(--accent-tint); border: 1px solid var(--accent-tint-2);
          border-radius: 100px; padding: 6px 14px; margin-bottom: 18px;
        }
        .proj-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

        .proj-title {
          font-size: clamp(30px, 8vw, 52px);
          font-weight: 800; color: var(--text-1);
          line-height: 1.08; letter-spacing: -0.6px; margin-bottom: 14px;
        }
        .proj-title span { color: var(--accent); }

        .proj-subtitle {
          font-size: 14.5px; color: var(--text-2);
          font-weight: 500; line-height: 1.7; max-width: 460px;
        }

        /* ── INDEX LIST ── */
        .proj-list {
          max-width: 1080px; margin: 0 auto;
          padding: 8px 16px 40px;
        }

        .proj-row {
          display: flex; flex-direction: column; gap: 16px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
          position: relative;
          transition: padding-left .25s ease;
        }
        .proj-row:first-child { padding-top: 32px; }
        .proj-row:last-child { border-bottom: none; }

        @media (min-width: 760px) {
          .proj-row {
            flex-direction: row; align-items: center; gap: 28px;
          }
          .proj-row:hover { padding-left: 8px; }
        }

        .proj-row-num {
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px;
          color: var(--accent);
          flex-shrink: 0;
          width: auto;
        }
        @media (min-width: 760px) {
          .proj-row-num { width: 44px; font-size: 14px; }
        }

        .proj-row-body { flex: 1; min-width: 0; }

        .proj-row-top {
          display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap;
        }
        .proj-row-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          color: var(--accent-dark);
          background: var(--accent-tint); border: 1px solid var(--accent-tint-2);
          border-radius: 100px; padding: 4px 11px;
        }
        .proj-row-tag-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .proj-row-year {
          font-size: 12px; font-weight: 600; color: var(--text-3);
        }

        .proj-row-title {
          font-size: clamp(18px, 3.5vw, 22px); font-weight: 800;
          color: var(--text-1); letter-spacing: -0.2px;
          margin-bottom: 8px; line-height: 1.2;
        }
        .proj-row-desc {
          font-size: 13.5px; color: var(--text-2);
          line-height: 1.7; font-weight: 500;
          max-width: 520px;
        }

        .proj-row-stat {
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
          padding: 12px 16px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 12px;
          align-self: flex-start;
        }
        @media (min-width: 760px) { .proj-row-stat { align-self: center; } }
        .proj-row-stat-icon {
          width: 26px; height: 26px; border-radius: 8px;
          background: var(--accent-tint); color: var(--accent);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .proj-row-stat-text {
          font-size: 12.5px; font-weight: 700; color: var(--text-1);
          letter-spacing: 0.1px; white-space: nowrap;
        }

        /* ── FOOTER NOTE ── */
        .proj-footer {
          max-width: 1080px; margin: 0 auto;
          padding: 0 16px 48px;
          display: flex; align-items: center; gap: 14px;
        }
        .proj-footer-text {
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
          color: var(--text-3); white-space: nowrap;
        }
        .proj-footer-line { flex: 1; height: 1px; background: var(--border); }
      `}</style>

      <div className="proj-hero">
        <div className="proj-hero-inner">
          <div className="proj-eyebrow">
            <span className="proj-eyebrow-dot" />
            Our Work
          </div>
          <h1 className="proj-title">
            Featured <span>Projects</span>
          </h1>
          <p className="proj-subtitle">
            Real installations. Proven results across India&apos;s food processing sector.
          </p>
        </div>
      </div>

      <div className="proj-list">
        {projects.map((p, i) => (
          <div className="proj-row" key={i}>
            <span className="proj-row-num">{p.num}</span>
            <div className="proj-row-body">
              <div className="proj-row-top">
                <span className="proj-row-tag">
                  <span className="proj-row-tag-dot" />
                  {p.tag}
                </span>
                <span className="proj-row-year">{p.year}</span>
              </div>
              <h3 className="proj-row-title">{p.title}</h3>
              <p className="proj-row-desc">{p.desc}</p>
            </div>
            <div className="proj-row-stat">
              <span className="proj-row-stat-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 7l-10 10M7 7h10v10" />
                </svg>
              </span>
              <span className="proj-row-stat-text">{p.stat}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="proj-footer">
        <div className="proj-footer-line" />
        <span className="proj-footer-text">{projects.length} projects shown &middot; More available on request</span>
      </div>
    </main>
  );
}