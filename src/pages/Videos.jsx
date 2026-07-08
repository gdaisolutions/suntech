const css = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600;700&display=swap');

  :root {
    --vid-accent:      #b8531f;
    --vid-accent-2:    #f59e0b;
    --vid-cream:       #fdf6ee;
    --vid-cream-soft:  #fcfbf8;
    --vid-white:       #ffffff;
    --vid-text:        #1c1917;
    --vid-text-muted:  #6b6560;
    --vid-border:      #ece5da;
    --vid-border-2:    #ead9c8;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .vid-page {
    font-family: 'Barlow', sans-serif;
    background: var(--vid-cream-soft);
    min-height: 100vh;
  }

  /* ── HERO HEADER — light, warm, matches rest of site ── */
  .vid-hero {
    background: linear-gradient(180deg, #ffffff 0%, var(--vid-cream) 100%);
    border-bottom: 1px solid var(--vid-border);
    padding: 40px 18px 32px;
    text-align: left;
    position: relative; overflow: hidden;
  }
  .vid-hero::before {
    content: '';
    position: absolute; top: -100px; right: -100px;
    width: 240px; height: 240px; border-radius: 50%;
    background: radial-gradient(circle, #fdeadb 0%, transparent 70%);
    pointer-events: none;
  }

  .vid-hero-inner {
    max-width: 1160px; margin: 0 auto; position: relative; z-index: 1;
  }

  .vid-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10.5px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--vid-accent);
    margin-bottom: 14px;
  }
  .vid-hero-eyebrow::before {
    content: ''; width: 20px; height: 2px;
    background: var(--vid-accent-2); border-radius: 1px; flex-shrink: 0;
  }

  .vid-hero-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(28px, 8vw, 44px);
    font-weight: 900; color: var(--vid-text);
    text-transform: uppercase; letter-spacing: -.01em;
    line-height: 1.02; margin-bottom: 14px;
  }
  .vid-hero-title span { color: var(--vid-accent-2); }

  .vid-hero-sub {
    font-size: 13.5px; color: var(--vid-text-muted);
    font-weight: 400; line-height: 1.7;
    max-width: 480px;
  }

  /* ── WRAP ── */
  .vid-wrap {
    max-width: 1160px; margin: 0 auto; padding: 32px 18px 56px;
  }

  /* ── COMING SOON ── */
  .vid-empty {
    text-align: center; padding: 56px 24px;
    background: var(--vid-white); border: 1px solid var(--vid-border-2);
    border-radius: 14px;
    box-shadow: 0 4px 20px -8px rgba(184,83,31,0.10);
    position: relative; overflow: hidden;
  }
  .vid-empty::before {
    content: '';
    position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
    width: 220px; height: 220px; border-radius: 50%;
    background: radial-gradient(circle, #fdeadb 0%, transparent 70%);
    pointer-events: none;
  }
  .vid-empty-icon {
    width: 56px; height: 56px; margin: 0 auto 18px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--vid-accent-2), var(--vid-accent));
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8px 20px -6px rgba(245,158,11,0.45);
    position: relative; z-index: 1;
  }
  .vid-empty-icon svg { width: 24px; height: 24px; }
  .vid-empty-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
    color: var(--vid-accent);
    background: #fdf0e2;
    border: 1px solid var(--vid-border-2);
    border-radius: 5px; padding: 5px 11px;
    margin-bottom: 16px; position: relative; z-index: 1;
  }
  .vid-empty-badge::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: var(--vid-accent-2); animation: vid-blink 2s infinite;
  }
  @keyframes vid-blink { 0%,100%{opacity:1} 50%{opacity:.25} }
  .vid-empty-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 22px; font-weight: 800;
    color: var(--vid-text); text-transform: uppercase;
    margin-bottom: 10px; position: relative; z-index: 1;
  }
  .vid-empty-sub {
    font-size: 13.5px; color: var(--vid-text-muted);
    line-height: 1.7; max-width: 440px; margin: 0 auto;
    position: relative; z-index: 1;
  }

  /* ============================================================
     ≥480px — larger phones
     ============================================================ */
  @media (min-width: 480px) {
    .vid-hero { padding: 48px 24px 36px; }
    .vid-wrap { padding: 36px 24px 64px; }
    .vid-hero-sub { font-size: 14px; }
  }

  /* ============================================================
     ≥640px — small tablets
     ============================================================ */
  @media (min-width: 640px) {
    .vid-hero { padding: 56px 32px 44px; }
    .vid-hero-title { font-size: clamp(36px, 6vw, 52px); }
    .vid-wrap { padding: 44px 32px 72px; }
    .vid-empty { padding: 64px 32px; }
  }

  /* ============================================================
     ≥768px — tablets
     ============================================================ */
  @media (min-width: 768px) {
    .vid-hero { padding: 64px 40px 52px; }
    .vid-wrap { padding: 48px 40px 80px; }
  }

  /* ============================================================
     ≥1024px — desktop
     ============================================================ */
  @media (min-width: 1024px) {
    .vid-hero { padding: 72px 40px 60px; }
    .vid-hero-title { font-size: clamp(48px, 5vw, 64px); }
    .vid-hero-sub { font-size: 15px; }
    .vid-wrap { padding: 56px 40px 88px; }
    .vid-empty { padding: 72px 40px; }
    .vid-empty-title { font-size: 25px; }
    .vid-empty-sub { font-size: 14.5px; }
  }
`;

export default function Video() {
  return (
    <>
      <style>{css}</style>

      <div className="vid-page">

        {/* HERO */}
        <div className="vid-hero">
          <div className="vid-hero-inner">
            <div className="vid-hero-eyebrow">Video Library</div>
            <h1 className="vid-hero-title">Machine <span>Demos</span><br />&amp; Videos</h1>
            <p className="vid-hero-sub">
              Explore our latest demonstrations, case studies, and product walkthroughs.
            </p>
          </div>
        </div>

        <div className="vid-wrap">
          <div className="vid-empty">
            <div className="vid-empty-badge">Coming Soon</div>
            <div className="vid-empty-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              </svg>
            </div>
            <div className="vid-empty-title">Videos Coming Soon</div>
            <div className="vid-empty-sub">
              We're preparing product demonstrations and machine walkthroughs for this section. Please check back shortly.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}