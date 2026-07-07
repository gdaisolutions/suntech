import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  { name: "Atta Packaging Machine", img: `${import.meta.env.BASE_URL}Machines/Multi-Head VFFS Packaging Machine.png`, tag: "Powder & Flour", spec: "5–50 kg/bag" },
  { name: "Granules Packaging Machine", img: `${import.meta.env.BASE_URL}Machines/Smart PAC Bagger.png`, tag: "Granules", spec: "100g–25 kg" },
  { name: "Flow Wrapping Machine", img: `${import.meta.env.BASE_URL}Machines/VFFS 1014 Head Machine.png`, tag: "Wrapping", spec: "Up to 120 ppm" },
  { name: "Masala Packaging Machine", img: `${import.meta.env.BASE_URL}Machines/VFFS Auger Filter Machine.png`, tag: "Spices & Powder", spec: "10g–1 kg" },
  { name: "Sealing Machine", img: `${import.meta.env.BASE_URL}Machines/Pick Fill seal Machine.png`, tag: "Sealing", spec: "Continuous / Impulse" },
  { name: "Vacuum Packaging Machine", img: `${import.meta.env.BASE_URL}Machines/DZ-600-External-Vaccum-SS.png`, tag: "Vacuum", spec: "99.9% Vacuum" },
];

export default function ProductsGrid() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .pg-section {
          width: 100%;
          background: var(--surface);
          font-family: var(--font-body);
          padding: 48px 16px;
        }

        .pg-container {
          width: min(100%, 1500px);
          max-width: 1500px;
          margin: 0 auto;
        }

        /* ── HEADER ── */
        .pg-header {
          margin-bottom: 32px;
        }

        .pg-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-2);
          margin-bottom: 10px;
          display: block;
        }

        .pg-title {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-1);
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .pg-subtitle {
          font-size: 14px;
          color: var(--text-2);
          line-height: 1.6;
          max-width: 500px;
        }

        /* ── GRID ── */
        .pg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }

        /* ── CARD ── */
        .pg-card {
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          background: var(--surface);
        }

        .pg-card-img {
          width: 100%;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #e5e7eb;
          overflow: hidden;
          position: relative;
        }

        .pg-card-img img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .pg-card-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pg-card-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
        }

        .pg-card-name {
          font-size: 16px;
          font-weight: 700;
          color: #000000;
          line-height: 1.3;
        }

        .pg-card-spec {
          font-size: 12px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pg-card-spec svg {
          width: 12px;
          height: 12px;
          color: #94a3b8;
          flex-shrink: 0;
        }

        .pg-card-actions {
          display: flex;
          gap: 8px;
          margin-top: 8px;
        }

        .pg-btn-primary {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #f59e0b;
          color: #000000;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 10px 12px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }

        .pg-btn-primary:hover {
          background: #d97706;
        }

        .pg-btn-primary svg {
          width: 12px;
          height: 12px;
        }

        .pg-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: #ffffff;
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 10px 14px;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
          cursor: pointer;
        }

        .pg-btn-secondary:hover {
          border-color: #94a3b8;
          color: #000000;
        }

        .pg-btn-secondary svg {
          width: 12px;
          height: 12px;
        }

        /* ── FOOTER CTA ── */
        .pg-footer {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          text-align: center;
        }

        .pg-footer-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #64748b;
        }

        .pg-footer-title {
          font-size: 20px;
          font-weight: 800;
          color: #000000;
        }

        .pg-footer-sub {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
        }

        .pg-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f59e0b;
          color: #000000;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        .pg-footer-btn:hover {
          background: #d97706;
        }

        .pg-footer-btn svg {
          width: 14px;
          height: 14px;
        }

        /* ── TABLET (640px) ── */
        @media (min-width: 640px) {
          .pg-section {
            padding: 64px 24px;
          }

          .pg-title {
            font-size: 32px;
          }

          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .pg-card-img {
            height: 260px;
          }

          .pg-footer {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            padding: 28px 32px;
          }

          .pg-footer-content {
            text-align: left;
          }
        }

        /* ── DESKTOP (1024px) ── */
        @media (min-width: 1024px) {
          .pg-section {
            padding: 80px 32px;
          }

          .pg-title {
            font-size: 36px;
          }

          .pg-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .pg-card-img {
            height: 240px;
          }

          .pg-card-body {
            padding: 20px;
          }

          .pg-footer {
            padding: 32px 40px;
          }
        }
      `}</style>

      <section className="pg-section">
        <div className="pg-container">

          {/* Header */}
          <div className="pg-header">
            <span className="pg-label">Machine Catalogue</span>
            <h2 className="pg-title">Our Product Range</h2>
            <p className="pg-subtitle">
              Industrial-grade packaging machines engineered for high throughput, accuracy, and long-term reliability.
            </p>
          </div>

          {/* Grid */}
          <div className="pg-grid">
            {products.map((item, i) => (
              <div className="pg-card" key={i}>
                <div className="pg-card-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="pg-card-body">
                  <span className="pg-card-tag">{item.tag}</span>
                  <h3 className="pg-card-name">{item.name}</h3>
                  <div className="pg-card-spec">
                    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="1" y="1" width="12" height="12" rx="2"/>
                      <path d="M4 7h6M7 4v6" strokeLinecap="round"/>
                    </svg>
                    {item.spec}
                  </div>
                  <div className="pg-card-actions">
                    <button
                      className="pg-btn-primary"
                      onClick={() => navigate("/contact", { state: { product: item.name } })}
                    >
                      Inquiry
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="pg-btn-secondary">
                      Details
                      <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="pg-footer">
            <div className="pg-footer-content">
              <span className="pg-footer-label">Custom Engineering</span>
              <h3 className="pg-footer-title">Need a Custom Solution?</h3>
              <p className="pg-footer-sub">We design and build machines to your exact production specifications.</p>
            </div>
            <a href="/contact" className="pg-footer-btn">
              Request a Quote
              <svg viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 6.5h9M7 3l3.5 3.5L7 10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}