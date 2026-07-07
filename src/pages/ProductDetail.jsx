import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import BrochureLeadModal from "../components/common/BrochureLeadModal";

export default function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("specs");
  const [formData, setFormData] = useState({ name: "", contact: "", requirement: "" });
  const [submitted, setSubmitted] = useState(false);

  const product = products.find((p) => p.name === name);

  if (!product) {
    return (
      <div style={styles.notFound}>
        <div style={styles.notFoundCard}>
          <div style={styles.notFoundIcon}>⚠</div>
          <h2 style={styles.notFoundTitle}>Product Not Found</h2>
          <p style={styles.notFoundSub}>We couldn't locate this product.</p>
          <button onClick={() => navigate(-1)} style={styles.btnPrimary}>
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  const specEntries = Object.entries(product.specs || {});

  const defaultFeatures = [
    { label: "Capacity", value: "100 – 500 kg/hr" },
    { label: "Functions", value: "Slicing, dicing, grinding, mixing" },
    { label: "Application", value: "Vegetables, fruits, snacks, bakery, namkeen, food factories" },
    { label: "Compliance", value: "Food-grade, ISO-compliant" },
    { label: "Frame", value: "Heavy-duty SS tubular frame" },
    { label: "Warranty", value: "1 Year" },
  ];

  const highlights = product.highlights || [
    "Hygienic stainless steel contact parts",
    "Precision cutting and mixing performance",
    "Energy efficient and low maintenance",
    "Suitable for wide range of food products",
    "Compact design with high output",
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuoteOpen(false);
      setFormData({ name: "", contact: "", requirement: "" });
    }, 2000);
  };

  return (
    <main style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .pd-back-btn:hover { background: #f3f4f6 !important; color: #1e2a4a !important; }
        .pd-icon-btn:hover { background: #f3f4f6 !important; border-color: #d1d5db !important; }
        .pd-tab:hover { color: #1e2a4a !important; }
        .pd-spec-row:hover td { background: #fff7ed !important; }
        .pd-support-btn:hover { background: #f3f4f6 !important; border-color: #e5a53c !important; }
        .pd-quote-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 24px rgba(229,143,25,0.38) !important; }
        .pd-quote-btn:active { transform: translateY(0px); }
        .pd-action-btn:hover { border-color: #e5a53c !important; color: #e5a53c !important; background: #fff7ed !important; }

        input:focus, textarea:focus {
          outline: none;
          border-color: #e5a53c !important;
          box-shadow: 0 0 0 3px rgba(229,165,60,0.12) !important;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .pd-hero { animation: slideUp 0.45s ease both; }
        .pd-content { animation: slideUp 0.45s 0.08s ease both; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }

        @media (max-width: 980px) {
          .pd-layout { grid-template-columns: 1fr !important; }
          .pd-hero { position: static !important; }
          .pd-tabbar-inner { flex-wrap: wrap !important; }
          .pd-support-col { grid-column: 1 / -1 !important; }
        }
        @media (max-width: 720px) {
          .pd-feat-grid, .pd-tabs-grid { grid-template-columns: 1fr !important; }
          .pd-cta-banner { flex-direction: column !important; align-items: flex-start !important; text-align: left; }
          .pd-cta-banner-img { display: none !important; }
          .pd-cta-actions { width: 100%; flex-direction: column !important; }
          .pd-cta-actions button { width: 100% !important; }
        }
        @media (max-width: 560px) {
          .pd-header { padding: 0 16px !important; }
          .pd-breadcrumb { display: none !important; }
          .pd-layout { padding: 20px 16px 40px !important; gap: 20px !important; }
          .pd-badges-row { flex-wrap: wrap !important; }
          .pd-tabbar-inner button span.tab-label { display: none !important; }
        }
      `}</style>

      {/* ── STICKY HEADER ── */}
      <header className="pd-header" style={styles.header}>
        <button className="pd-back-btn" onClick={() => navigate(-1)} style={styles.backBtn}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>

        <div className="pd-breadcrumb" style={styles.breadcrumb}>
          <span style={styles.breadcrumbItem}>Home</span>
          <span style={styles.breadcrumbSep}>›</span>
          <span style={styles.breadcrumbItem}>Machines</span>
          <span style={styles.breadcrumbSep}>›</span>
          <span style={styles.breadcrumbCurrent}>{product.name}</span>
        </div>

        <div style={styles.headerActions}>
          <button className="pd-icon-btn" style={styles.iconBtn} title="Print">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-6 0h.008v.008H12V10.5Zm-3 0h.008v.008H9V10.5Z"
                stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="pd-icon-btn" style={styles.iconBtn} title="Share">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <circle cx="18" cy="5" r="2.5" stroke="#4b5563" strokeWidth="1.5"/>
              <circle cx="6" cy="12" r="2.5" stroke="#4b5563" strokeWidth="1.5"/>
              <circle cx="18" cy="19" r="2.5" stroke="#4b5563" strokeWidth="1.5"/>
              <path d="M8.5 10.5L15.5 6.5M8.5 13.5L15.5 17.5" stroke="#4b5563" strokeWidth="1.5"/>
            </svg>
          </button>
        </div>
      </header>

      {/* ── MAIN LAYOUT ── */}
      <div className="pd-layout" style={styles.layout}>

        {/* ── LEFT: IMAGE ── */}
        <aside className="pd-hero" style={styles.heroPan}>
          <div style={styles.imageWrap}>
            <img src={product.image} alt={product.name} style={styles.productImg} />
          </div>
        </aside>

        {/* ── RIGHT: TITLE + META ── */}
        <section className="pd-content" style={styles.contentPan}>
          {product.category && (
            <div style={styles.categoryBadge}>{product.category}</div>
          )}
          <h1 style={styles.productTitle}>{product.name}</h1>
          <p style={styles.productDesc}>{product.description}</p>

          {/* Value props */}
          <div style={styles.valueRow}>
            <div style={styles.valueItem}>
              <span style={styles.valueIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2.75l7 3.11v5.14c0 4.9-3 9.35-7 10.75-4-1.4-7-5.85-7-10.75V5.86l7-3.11z" stroke="#e58f19" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4.5" stroke="#e58f19" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <p style={styles.valueTitle}>High Performance</p>
                <p style={styles.valueSub}>Built for accuracy and consistency</p>
              </div>
            </div>
            <div style={styles.valueItem}>
              <span style={styles.valueIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="#e58f19" strokeWidth="1.6"/>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H4a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H10a1.65 1.65 0 001-1.51V4a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V10a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="#e58f19" strokeWidth="1.4"/>
                </svg>
              </span>
              <div>
                <p style={styles.valueTitle}>Durable Construction</p>
                <p style={styles.valueSub}>Heavy-duty SS frame for long life</p>
              </div>
            </div>
            <div style={styles.valueItem}>
              <span style={styles.valueIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3a1 1 0 010 1.4l-6 6a1 1 0 01-1.4 0L4.3 10.7a1 1 0 011.4-1.4L8 11.6l5.3-5.3a1 1 0 011.4 0z" stroke="#e58f19" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 14v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3" stroke="#e58f19" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </span>
              <div>
                <p style={styles.valueTitle}>Easy Maintenance</p>
                <p style={styles.valueSub}>User-friendly design for quick service</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div style={styles.ctaGroup}>
            <button className="pd-quote-btn" onClick={() => setQuoteOpen(true)} style={styles.btnPrimary}>
              Get a Quote →
            </button>
            <button className="pd-action-btn" style={styles.btnSecondary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Call Us
            </button>
            <button className="pd-action-btn" style={styles.btnSecondary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 16.5V9.75m0 6.75l-2.25-2.25M12 16.5l2.25-2.25M4.5 9.75v9a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-9M3 6.75l9-4.5 9 4.5m-18 0l9 4.5m-9-4.5v0m18 0l-9 4.5m9-4.5v0"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download Brochure
            </button>
          </div>

          {/* Trust badges */}
          <div className="pd-badges-row" style={styles.trustRow}>
            {["FSSAI", "CE", "ISO 9001"].map((badge) => (
              <span key={badge} style={styles.trustBadge}>{badge}</span>
            ))}
          </div>
        </section>
      </div>

      {/* ── TABS SECTION ── */}
      <div style={styles.tabsSection}>
        <div style={styles.tabBar}>
          <div className="pd-tabbar-inner" style={styles.tabBarInner}>
            {[
              { id: "specs", label: "Specifications" },
              // { id: "features", label: "Features" },
              { id: "support", label: "Support" },
            ].map((tab) => (
              <button
                key={tab.id}
                className="pd-tab"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  ...styles.tabBtn,
                  ...(activeTab === tab.id ? styles.tabBtnActive : {}),
                }}
              >
                {tab.id === "specs" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                )}
                {tab.id === "features" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.98 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                  </svg>
                )}
                {tab.id === "support" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── SPECS + FEATURES + SUPPORT GRID ── */}
        <div className="pd-tabs-grid" style={styles.tabsGrid}>

          {/* SPECS */}
          <div style={{ ...styles.panelCard, display: activeTab === "specs" || activeTab === "features" ? "block" : "none" }}>
            <div style={styles.panelHeadRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" stroke="#e58f19" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              <h3 style={styles.panelHeadTitle}>Specifications</h3>
            </div>
            {specEntries.length === 0 ? (
              <p style={styles.emptyMsg}>No specifications available.</p>
            ) : (
              <table style={styles.specTable}>
                <tbody>
                  {specEntries.map(([key, value]) => (
                    <tr key={key} className="pd-spec-row" style={styles.specRow}>
                      <td style={styles.specKey}>{key.replace(/_/g, " ")}</td>
                      <td style={styles.specVal}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* FEATURES */}
          <div style={{ ...styles.panelCard, display: activeTab === "specs" || activeTab === "features" ? "block" : "none" }}>
            <div style={styles.panelHeadRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.98 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  stroke="#e58f19" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
              <h3 style={styles.panelHeadTitle}>Features</h3>
            </div>
            <table style={styles.specTable}>
              <tbody>
                {(product.features || defaultFeatures).map((feat, i) => (
                  <tr key={i} className="pd-spec-row" style={styles.specRow}>
                    <td style={styles.specKey}>
                      {typeof feat === "string" ? feat.split(":")[0] || feat : feat.label}
                    </td>
                    <td style={styles.specVal}>
                      {typeof feat === "string" ? "" : feat.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SUPPORT / HIGHLIGHTS */}
          <div className="pd-support-col" style={styles.highlightCard}>
            <div style={styles.panelHeadRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" stroke="#e58f19" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 style={styles.panelHeadTitle}>Key Highlights</h3>
            </div>
            <ul style={styles.highlightList}>
              {highlights.map((h, i) => (
                <li key={i} style={styles.highlightItem}>
                  <span style={styles.highlightCheck}>✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

  

      {/* ── QUOTE MODAL ── */}
      {quoteOpen && (
        <div style={styles.modalOverlay} onClick={() => setQuoteOpen(false)}>
          <div style={styles.modalSheet} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div>
                <h3 style={styles.modalTitle}>Request a Quote</h3>
                <p style={styles.modalSub}>{product.name}</p>
              </div>
              <button onClick={() => setQuoteOpen(false)} style={styles.modalClose}>✕</button>
            </div>

            {submitted ? (
              <div style={styles.successState}>
                <div style={styles.successIcon}>✓</div>
                <p style={styles.successText}>Request sent successfully!</p>
                <p style={styles.successSub}>Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Shrinivas Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={styles.formInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email / Phone</label>
                  <input
                    type="text"
                    placeholder="your@email.com or +91 XXXXX"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    style={styles.formInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Requirement</label>
                  <textarea
                    placeholder="Quantity, customization, delivery location..."
                    rows={3}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    style={{ ...styles.formInput, resize: "none", lineHeight: "1.6" }}
                  />
                </div>
                <button
                  className="pd-quote-btn"
                  onClick={handleSubmit}
                  style={{ ...styles.btnPrimary, width: "100%", marginTop: "8px" }}
                >
                  Send Request →
                </button>
              </>
            )}
          </div>
        </div>
      )}
      <BrochureLeadModal
        open={brochureOpen}
        onClose={() => setBrochureOpen(false)}
        source="Product detail"
        product={product.name}
      />
    </main>
  );
}

// ── STYLES ──────────────────────────────────────────────
const C = {
  bg: "#f7f8fa",
  surface: "#ffffff",
  border: "#e7e9ee",
  borderLight: "#f0f1f4",
  navy: "#1e2a4a",
  text: "#1e2433",
  textMuted: "#6b7280",
  textDim: "#9ca3af",
  accent: "#e58f19",
  accentDark: "#cc7d10",
  accentLight: "#fff3e0",
  accentGlow: "rgba(229,143,25,0.16)",
};

const styles = {
  page: {
    minHeight: "100vh",
    background: C.bg,
    color: C.text,
    fontFamily: "var(--font-body)",
  },

  // HEADER
  header: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${C.border}`,
    height: "60px",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  },
  backBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: C.textMuted,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 600,
    fontFamily: "var(--font-body)",
    padding: "7px 12px",
    borderRadius: "8px",
    transition: "all 0.15s",
  },
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    flex: 1,
    justifyContent: "center",
  },
  breadcrumbItem: {
    fontSize: "12.5px",
    color: C.textMuted,
    fontWeight: 500,
  },
  breadcrumbSep: {
    color: C.textDim,
    fontSize: "12px",
  },
  breadcrumbCurrent: {
    fontSize: "12.5px",
    color: C.accent,
    fontWeight: 700,
  },
  headerActions: { display: "flex", gap: "8px" },
  iconBtn: {
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: `1px solid ${C.border}`,
    background: "#fff",
    cursor: "pointer",
    transition: "all 0.15s",
  },

  // LAYOUT
  layout: {
    display: "grid",
    gridTemplateColumns: "480px 1fr",
    gap: "40px",
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "32px 32px 8px",
    alignItems: "start",
  },

  // HERO IMAGE (LEFT)
  heroPan: { position: "sticky", top: "92px" },
  imageWrap: {
    position: "relative",
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: "16px",
    overflow: "hidden",
    aspectRatio: "1 / 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "28px",
  },
  productImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },

  // RIGHT CONTENT
  contentPan: { display: "flex", flexDirection: "column" },
  categoryBadge: {
    display: "inline-flex",
    alignSelf: "flex-start",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: C.accentDark,
    background: C.accentLight,
    border: `1px solid #f5d9a8`,
    padding: "5px 12px",
    borderRadius: "20px",
    marginBottom: "14px",
  },
  productTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.1rem",
    fontWeight: 700,
    color: C.navy,
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    marginBottom: "12px",
  },
  productDesc: {
    fontSize: "0.95rem",
    color: C.textMuted,
    lineHeight: 1.65,
    fontWeight: 400,
    marginBottom: "24px",
    maxWidth: "560px",
  },

  valueRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
    marginBottom: "26px",
    paddingBottom: "26px",
    borderBottom: `1px solid ${C.border}`,
  },
  valueItem: { display: "flex", flexDirection: "column", gap: "10px" },
  valueIcon: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    background: C.accentLight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  valueTitle: {
    fontSize: "13.5px",
    fontWeight: 700,
    color: C.navy,
    marginBottom: "3px",
  },
  valueSub: {
    fontSize: "12px",
    color: C.textMuted,
    lineHeight: 1.5,
  },

  ctaGroup: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },
  btnPrimary: {
    background: `linear-gradient(135deg, ${C.accent} 0%, ${C.accentDark} 100%)`,
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "13px 24px",
    fontSize: "14px",
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    cursor: "pointer",
    letterSpacing: "0.01em",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 16px rgba(229,143,25,0.3)",
    whiteSpace: "nowrap",
  },
  btnSecondary: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    background: "#fff",
    border: `1.5px solid ${C.border}`,
    borderRadius: "10px",
    padding: "12px 20px",
    fontSize: "13.5px",
    fontWeight: 600,
    color: C.navy,
    fontFamily: "var(--font-body)",
    cursor: "pointer",
    transition: "all 0.15s",
    whiteSpace: "nowrap",
  },
  trustRow: { display: "flex", gap: "8px", flexWrap: "wrap" },
  trustBadge: {
    fontSize: "11.5px",
    fontWeight: 700,
    letterSpacing: "0.03em",
    color: C.textMuted,
    border: `1px solid ${C.border}`,
    borderRadius: "6px",
    padding: "6px 12px",
    background: "#fafafa",
  },

  // TABS SECTION
  tabsSection: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "24px 32px 0",
  },
  tabBar: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: "14px 14px 0 0",
    borderBottom: "none",
    padding: "0 8px",
  },
  tabBarInner: { display: "flex", gap: "4px" },
  tabBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "16px 20px",
    border: "none",
    borderBottom: "3px solid transparent",
    background: "transparent",
    color: C.textMuted,
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginBottom: "-1px",
  },
  tabBtnActive: {
    color: C.accent,
    borderBottom: `3px solid ${C.accent}`,
  },

  tabsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "0",
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: "0 0 14px 14px",
    overflow: "hidden",
  },
  panelCard: {
    padding: "24px",
    borderRight: `1px solid ${C.borderLight}`,
  },
  panelHeadRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "18px",
  },
  panelHeadTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "15px",
    fontWeight: 700,
    color: C.navy,
  },
  specTable: { width: "100%", borderCollapse: "collapse" },
  specRow: {
    borderBottom: `1px solid ${C.borderLight}`,
    transition: "background 0.15s",
  },
  specKey: {
    padding: "12px 4px",
    fontSize: "12.5px",
    fontWeight: 600,
    color: C.textMuted,
    textTransform: "capitalize",
    width: "48%",
    verticalAlign: "top",
  },
  specVal: {
    padding: "12px 4px",
    fontSize: "13px",
    fontWeight: 600,
    color: C.navy,
    textAlign: "right",
    verticalAlign: "top",
  },
  emptyMsg: { padding: "40px 0", textAlign: "center", color: C.textDim, fontSize: "13px" },

  highlightCard: {
    padding: "24px",
    background: C.accentLight,
  },
  highlightList: { listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" },
  highlightItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "13px",
    color: "#57452a",
    lineHeight: 1.5,
    fontWeight: 500,
  },
  highlightCheck: {
    flexShrink: 0,
    width: "18px",
    height: "18px",
    borderRadius: "5px",
    background: C.accent,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: 800,
    marginTop: "1px",
  },

  // BOTTOM CTA BANNER
  ctaBannerWrap: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "24px 32px 60px",
  },
  ctaBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    background: "#fff",
    border: `1px solid ${C.border}`,
    borderRadius: "16px",
    padding: "28px 32px",
    flexWrap: "wrap",
  },
  ctaBannerLeft: { display: "flex", alignItems: "center", gap: "16px" },
  ctaBannerIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    background: `linear-gradient(135deg, ${C.accent}, ${C.accentDark})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  ctaBannerTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "17px",
    fontWeight: 700,
    color: C.navy,
    marginBottom: "4px",
  },
  ctaBannerSub: { fontSize: "13px", color: C.textMuted, maxWidth: "420px" },
  ctaBannerActions: { display: "flex", gap: "10px", flexShrink: 0 },

  // MODAL
  modalOverlay: {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    background: "rgba(15,20,30,0.5)",
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    animation: "fadeIn 0.2s ease",
  },
  modalSheet: {
    width: "100%",
    maxWidth: "460px",
    background: "#fff",
    border: `1px solid ${C.border}`,
    borderRadius: "18px",
    padding: "28px",
    animation: "slideUp 0.3s ease",
    boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
  },
  modalHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: "22px",
  },
  modalTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    color: C.navy,
  },
  modalSub: { fontSize: "12.5px", color: C.textMuted, marginTop: "4px" },
  modalClose: {
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    background: "#f3f4f6",
    border: `1px solid ${C.border}`,
    color: C.textMuted,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    transition: "all 0.15s",
    fontFamily: "var(--font-body)",
  },
  formGroup: { marginBottom: "16px" },
  formLabel: {
    display: "block",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: C.textDim,
    marginBottom: "7px",
  },
  formInput: {
    width: "100%",
    background: "#f9fafb",
    border: `1.5px solid ${C.border}`,
    borderRadius: "10px",
    padding: "12px 14px",
    fontSize: "13.5px",
    color: C.text,
    fontFamily: "var(--font-body)",
    transition: "all 0.15s",
    display: "block",
  },
  successState: { textAlign: "center", padding: "20px 0", animation: "fadeIn 0.3s ease" },
  successIcon: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    background: "#dcfce7",
    border: "1px solid #bbf7d0",
    color: "#16a34a",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  },
  successText: {
    fontSize: "17px",
    fontWeight: 700,
    color: C.navy,
    fontFamily: "'Poppins', sans-serif",
    marginBottom: "6px",
  },
  successSub: { fontSize: "13px", color: C.textMuted },

  // NOT FOUND
  notFound: {
    minHeight: "100vh",
    background: C.bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-body)",
  },
  notFoundCard: {
    textAlign: "center",
    padding: "48px 40px",
    background: "#fff",
    border: `1px solid ${C.border}`,
    borderRadius: "20px",
  },
  notFoundIcon: { fontSize: "32px", marginBottom: "16px" },
  notFoundTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.4rem",
    fontWeight: 700,
    color: C.navy,
    marginBottom: "8px",
  },
  notFoundSub: { fontSize: "14px", color: C.textMuted, marginBottom: "24px" },
};