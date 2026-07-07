import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { products } from "../data/products";

const APPLICATION_TYPES = ["Namkeen", "Spices", "Powder", "Grains", "Snacks"];

const TYPE_META = {
  Namkeen: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12s1.5 2 4 2 4-2 4-2"/>
        <path d="M9 9h.01M15 9h.01"/>
      </svg>
    ),
    label: "Namkeen",
    desc: "Savoury snack production lines",
    count_label: "Namkeen Machines",
  },
  Spices: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    label: "Spices",
    desc: "Masala & spice blending units",
    count_label: "Spice Machines",
  },
  Powder: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: "Powder",
    desc: "Fine powder filling & sealing",
    count_label: "Powder Machines",
  },
  Grains: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <ellipse cx="12" cy="12" rx="4" ry="7"/>
        <path d="M12 5C8 3 4 5 4 9M12 19c-4 2-8 0-8-4M12 5c4-2 8 0 8 4M12 19c4 2 8 0 8-4"/>
      </svg>
    ),
    label: "Grains",
    desc: "Grain & seed handling",
    count_label: "Grain Machines",
  },
  Snacks: {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    label: "Snacks",
    desc: "Snack food processing",
    count_label: "Snack Machines",
  },
};

export default function Applications() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryType = searchParams.get("type") || "Namkeen";
  const [active, setActive] = useState(queryType);
  const prevType = useRef(queryType);

  useEffect(() => {
    if (queryType !== prevType.current) {
      prevType.current = queryType;
      setActive(queryType);
    } else {
      setActive(queryType);
    }
  }, [queryType]);

  const handleFilter = (type) => {
    setActive(type);
    navigate(`/applications?type=${encodeURIComponent(type)}`, { replace: true });
  };

  const filteredProducts = products.filter((p) =>
    Array.isArray(p.application) && p.application.includes(active)
  );

  const meta = TYPE_META[active] || {};

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        :root {
          --orange:       #c2410c;
          --orange-dark:  #9a3412;
          --orange-soft:  #f5813a;
          --orange-tint:  #fdf0e4;
          --orange-tint2: #fbe4cf;
          --cream:        #fffaf3;
          --white:        #ffffff;
          --text:         #3d2b1f;
          --text-muted:   #8a7563;
          --border:       #ecd9c4;
        }

        * , *::before, *::after { box-sizing: border-box; }

        .app-page {
          font-family: 'Montserrat', sans-serif;
          background: var(--cream);
        }

        /* ── TICKER ── */
        .app-topband {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 10px 0;
          overflow: hidden;
        }

        .app-ticker {
          display: flex;
          gap: 40px;
          animation: appTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes appTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .app-ticker-item {
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .app-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--orange);
          flex-shrink: 0;
        }

        /* ── HERO (mobile-first) ── */
        .app-hero {
          position: relative;
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 36px 18px 0;
          overflow: hidden;
        }

        .app-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(194,65,12,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.04) 1px, transparent 1px);
          background-size: 26px 26px;
          pointer-events: none;
        }

        .app-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1220px;
          margin: 0 auto;
        }

        .app-hero-top {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .app-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--orange);
        }

        .app-eyebrow::before {
          content: '';
          display: block;
          width: 22px; height: 2px;
          background: var(--orange);
        }

        .app-hero-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(26px, 8vw, 52px);
          font-weight: 600;
          color: var(--orange-dark);
          margin: 0;
          line-height: 1.05;
          letter-spacing: -0.5px;
          text-transform: uppercase;
        }

        .app-hero-title span { color: var(--orange); }

        .app-hero-sub {
          font-size: 13px;
          color: var(--text-muted);
          margin: 4px 0 0;
          max-width: 520px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* ── FILTER TABS (mobile-first: horizontal scroll) ── */
        .app-filter-band {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 0;
          border-top: 1px solid var(--border);
          margin-top: 24px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .app-filter-band::-webkit-scrollbar { display: none; }

        .app-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 14px 16px;
          font-family: 'Oswald', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          border-bottom: 3px solid transparent;
          background: transparent;
          color: var(--text-muted);
          white-space: nowrap;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }

        .app-filter-btn svg { opacity: 0.6; transition: opacity 0.2s; }

        .app-filter-btn:hover {
          color: var(--orange-dark);
          background: var(--orange-tint);
        }

        .app-filter-btn:hover svg { opacity: 0.9; }

        .app-filter-btn.active {
          color: var(--orange-dark);
          border-bottom-color: var(--orange);
          background: var(--orange-tint);
        }

        .app-filter-btn.active svg { opacity: 1; color: var(--orange); }

        @media (min-width: 640px) {
          .app-hero { padding: 56px 24px 0; }
          .app-filter-btn { padding: 16px 24px; font-size: 13px; letter-spacing: 1.5px; }
        }

        @media (min-width: 900px) {
          .app-hero { padding: 72px 28px 0; }
        }

        /* ── CONTENT AREA (mobile-first) ── */
        .app-content {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 18px 64px;
        }

        @media (min-width: 640px) {
          .app-content { padding: 0 24px 80px; }
        }
        @media (min-width: 900px) {
          .app-content { padding: 0 28px 96px; }
        }

        /* ── META BAR ── */
        .app-meta-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 0 20px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .app-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--orange-dark);
          background: var(--orange-tint);
          border: 1px solid var(--border);
          padding: 6px 12px;
        }

        .app-meta-pill svg { color: var(--orange); }

        .app-meta-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--border);
          flex-shrink: 0;
        }

        .app-meta-count {
          font-family: 'Oswald', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .app-meta-count strong {
          color: var(--orange-dark);
        }

        .app-meta-desc {
          font-size: 12.5px;
          color: var(--text-muted);
        }

        @media (min-width: 640px) {
          .app-meta-bar { padding: 24px 0 28px; margin-bottom: 36px; gap: 16px; }
        }

        /* ── GRID (mobile-first: single column) ── */
        .app-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1px solid var(--border);
          overflow: hidden;
        }

        @media (min-width: 600px) { .app-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .app-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── CARD ── */
        .app-card {
          position: relative;
          background: var(--white);
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s;
          animation: appCardIn 0.45s cubic-bezier(0.22,1,0.36,1) both;
          overflow: hidden;
        }

        .app-card { border-right: none; }
        @media (min-width: 600px) {
          .app-card:nth-child(2n) { border-right: none; }
          .app-card:nth-child(odd) { border-right: 1px solid var(--border); }
        }
        @media (min-width: 1000px) {
          .app-card { border-right: 1px solid var(--border); }
          .app-card:nth-child(3n) { border-right: none; }
        }

        @keyframes appCardIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .app-card:hover {
          background: var(--orange-tint);
          z-index: 2;
          box-shadow: 0 0 0 1px var(--orange) inset, 0 10px 30px rgba(194,65,12,0.08);
        }

        .app-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--orange);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);
          z-index: 3;
        }

        .app-card:hover::before { transform: scaleX(1); }

        /* ── CARD IMAGE ── */
        .app-card-img {
          height: 170px;
          background: var(--orange-tint);
          position: relative;
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          transition: background 0.2s;
        }

        .app-card-img::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(194,65,12,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.05) 1px, transparent 1px);
          background-size: 18px 18px;
          pointer-events: none;
        }

        .app-card:hover .app-card-img {
          background: var(--orange-tint2);
        }

        .app-card-img img {
          max-height: 100%; max-width: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
          filter: drop-shadow(0 6px 16px rgba(154,52,18,0.12));
        }

        .app-card:hover .app-card-img img {
          transform: translateY(-4px) scale(1.05);
        }

        .app-card-cat {
          position: absolute;
          top: 10px; right: 10px;
          font-family: 'Oswald', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 8px;
          background: var(--white);
          color: var(--text-muted);
          border: 1px solid var(--border);
          z-index: 2;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }

        .app-card:hover .app-card-cat {
          background: var(--orange);
          color: var(--white);
          border-color: var(--orange);
        }

        @media (min-width: 640px) {
          .app-card-img { height: 200px; padding: 24px; }
        }

        /* ── CARD BODY ── */
        .app-card-body {
          padding: 16px 18px 18px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        @media (min-width: 640px) {
          .app-card-body { padding: 20px 22px 22px; gap: 10px; }
        }

        .app-card-name {
          font-family: 'Oswald', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--orange-dark);
          margin: 0;
          line-height: 1.2;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        .app-card-tags {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .app-tag {
          font-family: 'Oswald', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 3px 8px;
          background: var(--orange-tint);
          color: var(--orange-dark);
          border: 1px solid var(--border);
        }

        .app-card-desc {
          font-size: 12.5px;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
          flex: 1;
          font-weight: 400;
        }

        .app-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--orange-tint2);
          margin-top: auto;
        }

        .app-card-link {
          font-family: 'Oswald', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--orange);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }

        .app-card:hover .app-card-link { gap: 9px; }

        .app-card-arrow {
          width: 26px; height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--orange-tint);
          border: 1px solid var(--border);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }

        .app-card:hover .app-card-arrow {
          background: var(--orange);
          border-color: var(--orange);
          transform: translateX(2px);
        }

        .app-card:hover .app-card-arrow svg { stroke: var(--white); }

        /* ── EMPTY STATE ── */
        .app-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 56px 20px;
          color: var(--text-muted);
        }

        .app-empty-icon {
          width: 56px; height: 56px;
          margin: 0 auto 16px;
          background: var(--orange-tint);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-empty-title {
          font-family: 'Oswald', sans-serif;
          font-size: 19px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          color: var(--orange-dark);
        }

        .app-empty-sub {
          font-size: 12.5px;
          font-weight: 400;
          color: var(--text-muted);
        }

        @media (min-width: 640px) {
          .app-empty { padding: 80px 24px; }
          .app-empty-icon { width: 64px; height: 64px; margin-bottom: 20px; }
          .app-empty-title { font-size: 22px; }
        }
      `}</style>

      <main className="app-page">

        {/* Ticker */}
        <div className="app-topband">
          <div className="app-ticker">
            {[...Array(2)].map((_, ri) =>
              ["Food Industry", "Pharma Packaging", "Agro Products", "FMCG Lines", "Custom Solutions", "ISO 9001 Certified", "50+ Installations", "12+ Cities"].map((t, i) => (
                <span className="app-ticker-item" key={`${ri}-${i}`}>
                  <span className="app-ticker-dot" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Hero + Filter */}
        <section className="app-hero">
          <div className="app-hero-inner">
            <div className="app-hero-top">
              <span className="app-eyebrow">Industry Applications</span>
              <h1 className="app-hero-title">Machines for <span>Every</span> Industry</h1>
              <p className="app-hero-sub">
                Select your industry below to discover packaging machines engineered for your specific production requirements.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="app-filter-band">
              {APPLICATION_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilter(type)}
                  className={`app-filter-btn${active === type ? " active" : ""}`}
                >
                  {TYPE_META[type]?.icon}
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="app-content">

          {/* Meta Bar */}
          <div className="app-meta-bar">
            <span className="app-meta-pill">
              {meta.icon}
              {meta.label}
            </span>
            <span className="app-meta-sep" />
            <span className="app-meta-count">
              <strong>{filteredProducts.length}</strong> Machine{filteredProducts.length !== 1 ? "s" : ""} Found
            </span>
            {meta.desc && (
              <>
                <span className="app-meta-sep" />
                <span className="app-meta-desc">{meta.desc}</span>
              </>
            )}
          </div>

          {/* Grid */}
          <div className="app-grid">
            {filteredProducts.length === 0 ? (
              <div className="app-empty">
                <div className="app-empty-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="26" height="26" style={{ color: "#c2410c" }}>
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                </div>
                <div className="app-empty-title">No Machines Found</div>
                <div className="app-empty-sub">No products matched for "{active}" — try another category.</div>
              </div>
            ) : (
              filteredProducts.map((product, index) => (
                <Link
                  to={`/product/${encodeURIComponent(product.name)}`}
                  key={index}
                  className="app-card"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <div className="app-card-img">
                    <span className="app-card-cat">{product.category}</span>
                    <img src={product.image} alt={product.name} />
                  </div>

                  <div className="app-card-body">
                    <h3 className="app-card-name">{product.name}</h3>

                    {product.application?.length > 0 && (
                      <div className="app-card-tags">
                        {product.application.map(tag => (
                          <span key={tag} className="app-tag">{tag}</span>
                        ))}
                      </div>
                    )}

                    <p className="app-card-desc">
                      {product.description || product.shortDesc}
                    </p>

                    <div className="app-card-footer">
                      <span className="app-card-link">
                        View Details
                        <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                          <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
                        </svg>
                      </span>
                      <span className="app-card-arrow">
                        <svg viewBox="0 0 13 13" fill="none" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                          <path d="M2 6.5h9M7 3l3.5 3.5L7 10"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

        </div>
      </main>
    </>
  );
}