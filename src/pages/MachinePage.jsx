import { Link, useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/machine/ProductCard";

const machineData = {
  weighing: {
    title: "Weighing & Filling",
    titleItalic: "Machines",
    subtitle: "High-accuracy weighing and volumetric filling solutions for consistent, repeatable output on any production scale.",
    slugs: ["Liquid Filling Machine", "Collar Type VFFS Machine"],
  },
  packaging: {
    title: "Packaging",
    titleItalic: "Machines",
    subtitle: "Industrial-grade VFFS and pre-made pouch systems for powders, granules, solids and more.",
    slugs: [
      "Packaging Machine", "Packing Machine", "Powder Packaging Machine",
      "Pouch Packaging Machine", "Vacuum Packaging Machine",
      "Shrink Tunnel Packaging Machine", "Wrapping Machine",
      "Seeds Packaging Machine", "Scrubber Packaging Machine",
    ],
  },
  sealing: {
    title: "Sealing",
    titleItalic: "Machines",
    subtitle: "Durable continuous band and chamber-type sealing systems for airtight, tamper-evident closure.",
    slugs: ["Sealing Machine", "Nitrogen Flushing Machine"],
  },
  labelling: {
    title: "Labelling & Coding",
    titleItalic: "Machines",
    subtitle: "Precision self-adhesive labellers and high-speed inkjet coders for complete traceability.",
    slugs: ["Labelling Machine", "Coding Machine", "Coder Printer"],
  },
};

export default function MachinePage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const cat = machineData[type?.toLowerCase()];

  if (!cat) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--champagne)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-body)" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 48, margin: 0 }}>⚙️</p>
          <h2 style={{ marginTop: 16, fontFamily: "var(--font-display)", fontSize: 28, color: "var(--accent-dark)", textTransform: "uppercase" }}>
            Category Not Found
          </h2>
          <Link to="/products" style={{ marginTop: 20, display: "inline-block", background: "#c2410c", color: "#fff", padding: "12px 28px", textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>
            ← All Products
          </Link>
        </div>
      </div>
    );
  }

  const catProducts = cat.slugs.map(slug => products.find(p => p.name === slug)).filter(Boolean);
  const heroProduct = catProducts[0];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

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
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mp-page {
          background: var(--cream);
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
          color: var(--text);
          padding-bottom: 80px;
        }

        /* ── BREADCRUMB ── */
        .mp-crumb {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 14px 24px;
          display: flex; align-items: center; gap: 8px;
          font-family: 'Oswald', sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: .1em; text-transform: uppercase;
        }
        .mp-crumb a { color: var(--text-muted); text-decoration: none; transition: color .2s; }
        .mp-crumb a:hover { color: var(--orange); }
        .mp-crumb-sep { color: var(--border); }
        .mp-crumb-cur { color: var(--orange); }

        /* ── HERO ── */
        .mp-hero {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 48px 24px;
        }
        .mp-hero-inner {
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr;
          gap: 40px; align-items: center;
        }
        @media (min-width: 780px) {
          .mp-hero-inner { grid-template-columns: 1fr 1fr; gap: 56px; }
        }

        .mp-hero-img {
          background: var(--orange-tint);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          padding: 40px 32px; min-height: 240px; position: relative; overflow: hidden;
        }
        .mp-hero-img::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(194,65,12,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .mp-hero-img img {
          position: relative; z-index: 1;
          max-height: 220px; width: 100%; object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(194,65,12,0.15));
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .mp-hero-img:hover img { transform: scale(1.04); }

        .mp-hero-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Oswald', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--orange);
          background: var(--orange-tint);
          border: 1px solid var(--border);
          padding: 5px 12px;
          margin-bottom: 16px;
        }
        .mp-hero-tag::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--orange); flex-shrink: 0;
        }

        .mp-hero-h1 {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 600; color: var(--orange-dark);
          line-height: 1.05; letter-spacing: -.01em;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .mp-hero-h1 span { color: var(--orange); display: block; }

        .mp-hero-sub {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.8; font-weight: 400; max-width: 420px;
          margin-bottom: 28px;
        }

        .mp-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .mp-btn-fill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--orange); color: #fff;
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          padding: 12px 24px; border: none; cursor: pointer; text-decoration: none;
          transition: background .2s, transform .15s;
        }
        .mp-btn-fill:hover { background: var(--orange-dark); transform: translateY(-2px); }
        .mp-btn-out {
          display: inline-flex; align-items: center;
          background: transparent; color: var(--orange-dark);
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 20px;
          border: 1px solid var(--border); cursor: pointer; text-decoration: none;
          transition: border-color .2s, color .2s;
        }
        .mp-btn-out:hover { border-color: var(--orange); color: var(--orange); }

        /* ── SECTION ── */
        .mp-section {
          max-width: 1160px; margin: 40px auto 0; padding: 0 24px;
        }

        .mp-section-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
          border-bottom: 1px solid var(--border); padding-bottom: 16px;
        }
        .mp-section-label {
          font-family: 'Oswald', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--orange);
          display: flex; align-items: center; gap: 8px;
        }
        .mp-section-label::before {
          content: ''; width: 24px; height: 2px;
          background: var(--orange);
        }
        .mp-section-title {
          font-family: 'Oswald', sans-serif;
          font-size: 24px; font-weight: 600;
          color: var(--orange-dark); text-transform: uppercase;
          letter-spacing: -.01em;
        }
        .mp-section-count {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; color: var(--text-muted);
          font-weight: 400; margin-left: 4px;
        }

        /* ── CARDS GRID ── */
        .mp-grid {
          display: grid; grid-template-columns: 1fr; gap: 18px;
        }
        @media (min-width: 500px) { .mp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 800px) { .mp-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── CTA BAND ── */
        .mp-cta {
          max-width: 1160px; margin: 40px auto 0; padding: 0 24px;
        }
        .mp-cta-inner {
          background: var(--white);
          border: 1px solid var(--border);
          border-top: 3px solid var(--orange);
          padding: 36px 40px;
          display: flex; flex-direction: column; gap: 20px;
          position: relative; overflow: hidden;
        }
        .mp-cta-inner::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(194,65,12,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.025) 1px, transparent 1px);
          background-size: 36px 36px; pointer-events: none;
        }
        @media (min-width: 600px) {
          .mp-cta-inner { flex-direction: row; align-items: center; justify-content: space-between; }
        }
        .mp-cta-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(19px, 3vw, 28px); font-weight: 600;
          color: var(--orange-dark); text-transform: uppercase; line-height: 1.15;
          position: relative; z-index: 1;
        }
        .mp-cta-title span { color: var(--orange); }
        .mp-cta-sub {
          font-size: 13px; color: var(--text-muted);
          font-weight: 400; margin-top: 6px; position: relative; z-index: 1;
        }
        .mp-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--orange); color: #fff;
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          padding: 14px 28px; border: none; cursor: pointer;
          text-decoration: none; white-space: nowrap; flex-shrink: 0;
          position: relative; z-index: 1;
          transition: background .2s, transform .15s;
        }
        .mp-cta-btn:hover { background: var(--orange-dark); transform: translateY(-2px); }
      `}</style>

      <div className="mp-page">

        {/* BREADCRUMB */}
        <nav className="mp-crumb">
          <a href="/">Home</a>
          <span className="mp-crumb-sep">›</span>
          <a href="/machines">Machines</a>
          <span className="mp-crumb-sep">›</span>
          <span className="mp-crumb-cur">{cat.title} {cat.titleItalic}</span>
        </nav>

        {/* HERO */}
        {heroProduct && (
          <div className="mp-hero">
            <div className="mp-hero-inner">
              <div className="mp-hero-img">
                <img src={heroProduct.image} alt={heroProduct.name} />
              </div>
              <div>
                <div className="mp-hero-tag">{cat.title} {cat.titleItalic}</div>
                <h1 className="mp-hero-h1">
                  {cat.title}
                  <span>{cat.titleItalic}</span>
                </h1>
                <p className="mp-hero-sub">{cat.subtitle}</p>
                <div className="mp-hero-btns">
                  <Link to="/contact" className="mp-btn-fill">
                    Get a Quote
                    <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                      <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link to="/machines" className="mp-btn-out">All Machines</Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCT GRID */}
        <section className="mp-section">
          <div className="mp-section-header">
            <span className="mp-section-label">Range</span>
            <h2 className="mp-section-title">
              All Machines
              <span className="mp-section-count">({catProducts.length})</span>
            </h2>
          </div>
          <div className="mp-grid">
            {catProducts.map(product => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mp-cta">
          <div className="mp-cta-inner">
            <div>
              <p className="mp-cta-title">Need a <span>Custom</span> Specification?</p>
              <p className="mp-cta-sub">We engineer solutions to your exact production requirements.</p>
            </div>
            <Link to="/contact" className="mp-cta-btn">
              Request Custom Quote →
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}