import videos from "../data/videos";

const REAL_VIDEO = {
  youtubeId: "z72m41Uln2Q",
  title: "Automatic Kurkure / Namkeen Packing Machine",
  desc: "Watch our fully automatic namkeen packing machine in action — precision filling, sealing, and packaging for high-speed production lines.",
};

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

  /* ── SECTION LABEL ── */
  .vid-section-label {
    display: flex; align-items: center; gap: 12px; margin-bottom: 18px;
  }
  .vid-label-text {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10.5px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--vid-text); white-space: nowrap;
    display: flex; align-items: center; gap: 8px;
  }
  .vid-label-text::before {
    content: ''; width: 20px; height: 2px;
    background: var(--vid-accent-2); border-radius: 2px;
  }
  .vid-label-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
    color: var(--vid-accent);
    background: #fdf0e2;
    border: 1px solid var(--vid-border-2);
    border-radius: 5px; padding: 5px 11px;
  }
  .vid-label-badge::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: var(--vid-accent-2); animation: vid-blink 2s infinite;
  }
  @keyframes vid-blink { 0%,100%{opacity:1} 50%{opacity:.25} }
  .vid-label-line { flex: 1; height: 1px; background: var(--vid-border); }

  /* ── FEATURED CARD ── */
  .vid-featured {
    background: var(--vid-white);
    border: 1px solid var(--vid-border-2);
    border-radius: 14px; overflow: hidden;
    box-shadow: 0 4px 20px -8px rgba(184,83,31,0.12);
    margin-bottom: 36px;
    transition: box-shadow .3s, transform .3s;
  }
  .vid-featured:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px -12px rgba(184,83,31,0.22);
  }
  .vid-featured-frame {
    width: 100%; aspect-ratio: 16/9;
    background: #1c1917; display: block; border: none;
  }
  .vid-featured-body {
    padding: 18px 18px 20px;
    display: flex; flex-direction: column; align-items: flex-start;
    gap: 14px; border-top: 1px solid var(--vid-border);
  }
  .vid-featured-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 17px; font-weight: 800;
    color: var(--vid-text); text-transform: uppercase;
    letter-spacing: .01em; margin-bottom: 6px; line-height: 1.25;
  }
  .vid-featured-desc {
    font-size: 13px; color: var(--vid-text-muted);
    font-weight: 400; line-height: 1.7;
  }
  .vid-yt-link {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 18px; border-radius: 6px;
    background: var(--vid-accent-2); color: #fff;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11.5px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    text-decoration: none; white-space: nowrap;
    transition: background .2s, transform .15s;
    box-shadow: 0 6px 16px -6px rgba(245,158,11,0.5);
  }
  .vid-yt-link:hover { background: var(--vid-accent); transform: translateY(-2px); }
  .vid-yt-link svg { width: 12px; height: 12px; }

  /* ── MORE VIDEOS ── */
  .vid-grid {
    display: grid; grid-template-columns: 1fr; gap: 16px;
  }

  .vid-card {
    background: var(--vid-white);
    border: 1px solid var(--vid-border);
    border-radius: 12px; overflow: hidden;
    box-shadow: 0 2px 10px rgba(28,25,23,0.04);
    transition: border-color .25s, box-shadow .3s, transform .3s;
    animation: vidIn .4s ease both;
  }
  .vid-card:hover {
    border-color: #d98a4e;
    transform: translateY(-3px);
    box-shadow: 0 12px 30px -12px rgba(184,83,31,0.22);
  }
  .vid-card-bar {
    height: 3px; background: var(--vid-border); transition: background .25s;
  }
  .vid-card:hover .vid-card-bar { background: var(--vid-accent-2); }
  .vid-card-frame {
    width: 100%; aspect-ratio: 16/9;
    background: #1c1917; display: block; border: none;
  }
  .vid-card-body {
    padding: 14px 16px 16px; border-top: 1px solid var(--vid-border);
  }
  .vid-card-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14.5px; font-weight: 800;
    color: var(--vid-text); text-transform: uppercase;
    letter-spacing: .01em; margin-bottom: 7px; line-height: 1.25;
  }
  .vid-card-desc {
    font-size: 12px; color: var(--vid-text-muted);
    font-weight: 400; line-height: 1.65;
  }

  /* ── EMPTY ── */
  .vid-empty {
    text-align: center; padding: 48px 20px;
    background: var(--vid-white); border: 1px solid var(--vid-border-2);
    border-radius: 14px;
  }
  .vid-empty-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 19px; font-weight: 800;
    color: var(--vid-text); text-transform: uppercase;
    margin-bottom: 8px;
  }
  .vid-empty-sub { font-size: 13px; color: var(--vid-text-muted); }

  @keyframes vidIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ============================================================
     ≥480px — larger phones
     ============================================================ */
  @media (min-width: 480px) {
    .vid-hero { padding: 48px 24px 36px; }
    .vid-wrap { padding: 36px 24px 64px; }
    .vid-hero-sub { font-size: 14px; }
    .vid-featured-body { padding: 20px 22px 22px; }
  }

  /* ============================================================
     ≥640px — small tablets: featured body goes row-layout,
     more-videos grid becomes 2 columns
     ============================================================ */
  @media (min-width: 640px) {
    .vid-hero { padding: 56px 32px 44px; }
    .vid-hero-title { font-size: clamp(36px, 6vw, 52px); }
    .vid-wrap { padding: 44px 32px 72px; }

    .vid-featured-body {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }
    .vid-featured-desc { max-width: 480px; }
    .vid-yt-link { flex-shrink: 0; margin-top: 4px; }

    .vid-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
  }

  /* ============================================================
     ≥768px — tablets
     ============================================================ */
  @media (min-width: 768px) {
    .vid-hero { padding: 64px 40px 52px; }
    .vid-wrap { padding: 48px 40px 80px; }
    .vid-featured-name { font-size: 19px; }
    .vid-featured-desc { font-size: 13.5px; }
  }

  /* ============================================================
     ≥1024px — desktop: 3-column grid, larger hero
     ============================================================ */
  @media (min-width: 1024px) {
    .vid-hero { padding: 72px 40px 60px; }
    .vid-hero-title { font-size: clamp(48px, 5vw, 64px); }
    .vid-hero-sub { font-size: 15px; }
    .vid-wrap { padding: 56px 40px 88px; }

    .vid-featured { margin-bottom: 48px; }
    .vid-featured-body { padding: 24px 28px; }
    .vid-featured-name { font-size: 20px; }

    .vid-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .vid-card-body { padding: 18px 20px 20px; }
    .vid-card-name { font-size: 16px; }
    .vid-card-desc { font-size: 12.5px; }
  }
`;

export default function Video() {
  const allVideos = [REAL_VIDEO, ...(videos || []).filter(v => v.youtubeId !== REAL_VIDEO.youtubeId)];
  const [featured, ...rest] = allVideos;

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

          {/* FEATURED */}
          <div className="vid-section-label">
            <span className="vid-label-badge">Featured</span>
            <div className="vid-label-line" />
          </div>

          <div className="vid-featured">
            <iframe
              className="vid-featured-frame"
              src={`https://www.youtube.com/embed/${featured.youtubeId}`}
              title={featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen loading="lazy"
            />
            <div className="vid-featured-body">
              <div>
                <div className="vid-featured-name">{featured.title}</div>
                <div className="vid-featured-desc">{featured.desc}</div>
              </div>
              <a href={`https://www.youtube.com/watch?v=${featured.youtubeId}`} target="_blank" rel="noreferrer" className="vid-yt-link">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* MORE VIDEOS */}
          {rest.length > 0 && (
            <>
              <div className="vid-section-label" style={{ marginBottom: 18 }}>
                <span className="vid-label-text">More Videos</span>
                <div className="vid-label-line" />
              </div>
              <div className="vid-grid">
                {rest.map((video, i) => (
                  <article key={video.youtubeId} className="vid-card" style={{ animationDelay: `${i * 70}ms` }}>
                    <div className="vid-card-bar" />
                    <iframe
                      className="vid-card-frame"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen loading="lazy"
                    />
                    <div className="vid-card-body">
                      <h2 className="vid-card-name">{video.title}</h2>
                      <p className="vid-card-desc">{video.desc || "Watch this overview to learn more about our industrial packaging equipment."}</p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {allVideos.length === 0 && (
            <div className="vid-empty">
              <div className="vid-empty-title">No Videos Yet</div>
              <div className="vid-empty-sub">Check back soon for product demonstrations.</div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}