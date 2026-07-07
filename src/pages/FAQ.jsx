import { useState, useMemo } from "react";

const categories = [
  { name: "General", items: ["Delivery & Installation", "Customization", "Service & Support"] },
  { name: "Technical", items: ["Machine Capacity", "Installation & Setup", "Operation & Maintenance"] },
  { name: "Support", items: ["AMC & Warranty", "Spare Parts", "Training"] },
];

const faqs = [
  { q: "What is delivery time?",        a: "2–4 weeks depending on machine type and customization requirements. Express delivery options are available on request." },
  { q: "Do you provide customization?", a: "Yes — every machine can be tailored to your specific production needs, from hopper size to sealing type and output speed." },
  { q: "Do you provide service?",       a: "Absolutely. We offer full post-installation support, scheduled maintenance, and on-site assistance across India." },
  { q: "What industries do you serve?", a: "We cater to namkeen, spices, grains, flour, rice, and a wide range of dry food packaging industries." },
];

const stats = [
  { label: "24hr Response",     sub: "Quick support",       icon: "headset" },
  { label: "Pan India Service", sub: "Wide network",        icon: "pin" },
  { label: "500+ Installations",sub: "Across industries",   icon: "shield" },
  { label: "Installation Support", sub: "Expert guidance",  icon: "wrench" },
];

function StatIcon({ type }) {
  const common = { width: 20, height: 20, stroke: "#e0620f", strokeWidth: 1.7, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  if (type === "headset") return (
    <svg viewBox="0 0 24 24" {...common}><path d="M4 13v-1a8 8 0 0116 0v1" /><rect x="2.5" y="13" width="4" height="6" rx="1.5" /><rect x="17.5" y="13" width="4" height="6" rx="1.5" /><path d="M20 19a4 4 0 01-4 4h-2" /></svg>
  );
  if (type === "pin") return (
    <svg viewBox="0 0 24 24" {...common}><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.3" /></svg>
  );
  if (type === "shield") return (
    <svg viewBox="0 0 24 24" {...common}><path d="M12 3l7 3v6c0 4.8-3 8.4-7 9-4-0.6-7-4.2-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
  );
  return (
    <svg viewBox="0 0 24 24" {...common}><path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-2.2 2.2-2-.7-.7-2z" /></svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState({ General: true, Technical: false, Support: false });
  const [activeItem, setActiveItem] = useState("Delivery & Installation");

  const filtered = useMemo(() => {
    if (!search.trim()) return faqs;
    const q = search.toLowerCase();
    return faqs.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [search]);

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
          --on-accent:     #ffffff;
        }
        * { box-sizing: border-box; }

        /* ── HERO ── */
        .faq-hero {
          background: var(--accent-tint);
          padding: 48px 20px 40px;
          position: relative; overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .faq-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border-strong) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-strong) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
          mask-image: radial-gradient(ellipse 70% 100% at 0% 0%, rgba(0,0,0,0.35) 0%, transparent 65%);
        }
        .faq-hero-illustration {
          position: absolute; right: -30px; bottom: -10px;
          width: 380px; max-width: 40%; opacity: 0.35;
          pointer-events: none;
        }
        @media (max-width: 760px) { .faq-hero-illustration { display: none; } }

        .faq-hero-inner { max-width: 1180px; margin: 0 auto; position: relative; z-index: 1; }
        .faq-hero-text { max-width: 640px; }

        .faq-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--accent-dark);
          margin-bottom: 16px;
        }
        .faq-eyebrow::before { content: ''; width: 22px; height: 2px; background: var(--accent); display: inline-block; }
        .faq-title {
          font-size: clamp(28px, 6vw, 44px);
          font-weight: 800; color: var(--text-1);
          letter-spacing: -0.5px; line-height: 1.12;
          margin-bottom: 14px;
        }
        .faq-title span { color: var(--accent); display: block; }
        .faq-subtitle {
          font-size: 15px; color: var(--text-2);
          font-weight: 500; line-height: 1.7;
          margin-bottom: 30px;
        }

        .faq-stats-row {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 22px 28px;
        }
        @media (min-width: 700px) { .faq-stats-row { grid-template-columns: repeat(4, 1fr); } }
        .faq-stat {
          display: flex; align-items: center; gap: 12px;
        }
        .faq-stat-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: var(--bg); border: 1px solid var(--accent-tint-2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .faq-stat-label { font-size: 13.5px; font-weight: 700; color: var(--text-1); line-height: 1.3; }
        .faq-stat-sub { font-size: 11.5px; font-weight: 500; color: var(--text-3); margin-top: 1px; }

        /* ── LAYOUT ── */
        .faq-layout {
          max-width: 1180px; margin: 0 auto;
          padding: 40px 20px 0;
          display: grid; grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 900px) {
          .faq-layout { grid-template-columns: 264px 1fr; gap: 32px; align-items: start; }
        }

        /* ── SIDEBAR ── */
        .faq-sidebar {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px 18px;
        }
        @media (min-width: 900px) { .faq-sidebar { position: sticky; top: 24px; } }

        .faq-sidebar-title {
          font-size: 11px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase;
          color: var(--text-3); margin-bottom: 14px;
        }
        .faq-cat { margin-bottom: 6px; }
        .faq-cat-head {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          padding: 9px 4px;
          font-size: 13px; font-weight: 700; letter-spacing: 0.2px;
          color: var(--text-1);
        }
        .faq-cat-head.active-cat { color: var(--accent); }
        .faq-cat-chevron { transition: transform .2s; color: var(--text-3); }
        .faq-cat-chevron.open { transform: rotate(180deg); }

        .faq-cat-items {
          overflow: hidden; max-height: 0; transition: max-height .3s ease;
        }
        .faq-cat-items.open { max-height: 260px; }

        .faq-cat-item {
          display: block; width: 100%; text-align: left;
          background: none; border: none; cursor: pointer;
          font-size: 13px; font-weight: 500; color: var(--text-2);
          padding: 8px 4px 8px 14px;
          border-left: 2px solid transparent;
          margin-left: 4px;
        }
        .faq-cat-item.active {
          color: var(--accent-dark); font-weight: 700;
          border-left: 2px solid var(--accent);
          background: var(--accent-tint);
          border-radius: 0 8px 8px 0;
        }
        .faq-cat-divider { height: 1px; background: var(--border); margin: 10px 0 14px; }

        /* ── MAIN ── */
        .faq-main { min-width: 0; }

        .faq-search {
          display: flex; align-items: center; gap: 10px;
          background: var(--bg); border: 1px solid var(--border-strong);
          border-radius: 12px; padding: 13px 16px;
          margin-bottom: 22px;
        }
        .faq-search input {
          border: none; outline: none; flex: 1;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px; font-weight: 500; color: var(--text-1);
          background: transparent;
        }
        .faq-search input::placeholder { color: var(--text-3); }

        .faq-list {
          display: flex; flex-direction: column; gap: 12px;
          margin-bottom: 36px;
        }

        .faq-item {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px; overflow: hidden;
          transition: border-color .25s, box-shadow .25s;
        }
        .faq-item.is-open {
          border-color: var(--accent);
          box-shadow: 0 6px 24px rgba(224,98,15,0.08);
        }

        .faq-question {
          width: 100%; background: none; border: none;
          padding: 18px 18px;
          display: flex; align-items: center; gap: 16px;
          cursor: pointer; text-align: left;
        }
        .faq-q-number {
          font-size: 18px; font-weight: 800; color: var(--accent);
          letter-spacing: -0.3px; flex-shrink: 0;
          min-width: 30px;
        }
        .faq-q-divider { width: 1px; align-self: stretch; background: var(--border-strong); flex-shrink: 0; }
        .faq-q-text {
          font-size: clamp(14px, 3.2vw, 15.5px); font-weight: 700;
          color: var(--text-1);
          letter-spacing: 0.1px; line-height: 1.35; flex: 1;
        }
        .faq-item.is-open .faq-q-text { color: var(--accent-dark); }

        .faq-icon {
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid var(--border-strong);
          background: var(--surface);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all .25s;
          color: var(--text-3); font-size: 17px;
          font-family: 'Montserrat', sans-serif; font-weight: 400;
        }
        .faq-icon.open {
          background: var(--accent); border-color: var(--accent);
          color: #fff; transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0; overflow: hidden;
          transition: max-height .4s ease, padding .3s ease;
        }
        .faq-answer.open {
          max-height: 220px; padding-bottom: 20px;
        }
        .faq-a-text {
          font-size: 13.5px; color: var(--text-2);
          line-height: 1.8; font-weight: 500;
          border-left: 3px solid var(--accent);
          padding: 0 18px 0 16px; margin-left: 64px;
        }
        @media (max-width: 480px) { .faq-a-text { margin-left: 46px; } }

        .faq-no-results {
          text-align: center; padding: 32px 16px;
          color: var(--text-3); font-size: 13.5px; font-weight: 500;
          border: 1px dashed var(--border-strong); border-radius: 14px;
        }

        /* ── FOOTER CTA ── */
        .faq-footer {
          padding: 4px 0 40px;
        }
        .faq-footer-card {
          background: var(--accent-tint);
          border: 1px solid var(--accent-tint-2);
          border-radius: 18px; padding: 30px 26px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          position: relative; overflow: hidden;
        }
        .faq-footer-card::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--accent-tint-2) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-tint-2) 1px, transparent 1px);
          background-size: 26px 26px; pointer-events: none;
          mask-image: radial-gradient(ellipse 60% 100% at 100% 0%, rgba(0,0,0,0.4) 0%, transparent 70%);
        }
        .faq-footer-left { display: flex; align-items: center; gap: 18px; position: relative; z-index: 1; }
        .faq-footer-icon {
          width: 56px; height: 56px; border-radius: 50%;
          background: var(--bg); border: 1px solid var(--accent-tint-2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .faq-footer-text {
          font-size: 19px; font-weight: 800; color: var(--text-1);
          letter-spacing: -0.2px;
        }
        .faq-footer-text span { color: var(--accent); }
        .faq-footer-sub {
          font-size: 13px; color: var(--text-2);
          font-weight: 500; margin-top: 4px;
          max-width: 360px;
        }
        .faq-contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.2px;
          padding: 14px 24px; border-radius: 10px; border: none; cursor: pointer;
          transition: background .2s, transform .15s; position: relative; z-index: 1;
          white-space: nowrap;
        }
        .faq-contact-btn:hover { background: var(--accent-dark); transform: translateY(-1px); }

        /* ── TRUST LINE ── */
        .faq-trust {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 0 20px 44px;
          font-size: 13px; font-weight: 600; color: var(--text-2);
        }

        @media (max-width: 480px) {
          .faq-footer-card { flex-direction: column; align-items: flex-start; }
          .faq-contact-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* HERO */}
      <div className="faq-hero">
        <svg className="faq-hero-illustration" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="60" height="60" rx="8" stroke="#b94e0b" strokeWidth="1.5" />
          <circle cx="70" cy="70" r="14" stroke="#b94e0b" strokeWidth="1.5" />
          <rect x="120" y="90" width="120" height="150" rx="10" stroke="#b94e0b" strokeWidth="1.5" />
          <line x1="120" y1="130" x2="240" y2="130" stroke="#b94e0b" strokeWidth="1.5" />
          <line x1="120" y1="170" x2="240" y2="170" stroke="#b94e0b" strokeWidth="1.5" />
          <line x1="120" y1="210" x2="240" y2="210" stroke="#b94e0b" strokeWidth="1.5" />
          <rect x="150" y="240" width="60" height="30" stroke="#b94e0b" strokeWidth="1.5" />
          <circle cx="160" cy="270" r="8" stroke="#b94e0b" strokeWidth="1.5" />
          <circle cx="200" cy="270" r="8" stroke="#b94e0b" strokeWidth="1.5" />
        </svg>
        <div className="faq-hero-inner">
          <div className="faq-hero-text">
            <div className="faq-eyebrow">Support &amp; Information</div>
            <h1 className="faq-title">
              Frequently
              <span>Asked Questions</span>
            </h1>
            <p className="faq-subtitle">Everything you need to know about our packaging solutions.</p>
          </div>

          <div className="faq-stats-row">
            {stats.map((s, i) => (
              <div className="faq-stat" key={i}>
                <div className="faq-stat-icon"><StatIcon type={s.icon} /></div>
                <div>
                  <div className="faq-stat-label">{s.label}</div>
                  <div className="faq-stat-sub">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LAYOUT: SIDEBAR + MAIN */}
      <div className="faq-layout">
        {/* SIDEBAR */}
        <aside className="faq-sidebar">
          <div className="faq-sidebar-title">Browse Categories</div>
          {categories.map((cat) => {
            const isOpen = expanded[cat.name];
            return (
              <div className="faq-cat" key={cat.name}>
                <button
                  className={`faq-cat-head${isOpen ? " active-cat" : ""}`}
                  onClick={() => setExpanded((e) => ({ ...e, [cat.name]: !e[cat.name] }))}
                >
                  {cat.name.toUpperCase()}
                  <svg className={`faq-cat-chevron${isOpen ? " open" : ""}`} width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={`faq-cat-items${isOpen ? " open" : ""}`}>
                  {cat.items.map((item) => (
                    <button
                      key={item}
                      className={`faq-cat-item${activeItem === item ? " active" : ""}`}
                      onClick={() => setActiveItem(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="faq-cat-divider" />
              </div>
            );
          })}
        </aside>

        {/* MAIN */}
        <div className="faq-main">
          <div className="faq-search">
            <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6.5" stroke="#868c96" strokeWidth="1.6" />
              <path d="M14 14l4 4" stroke="#868c96" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search for questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="faq-list">
            {filtered.length === 0 && (
              <div className="faq-no-results">No questions match your search.</div>
            )}
            {filtered.map((item, i) => (
              <div className={`faq-item${open === i ? " is-open" : ""}`} key={item.q}>
                <button className="faq-question" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span className="faq-q-number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq-q-divider" />
                  <span className="faq-q-text">{item.q}</span>
                  <span className={`faq-icon${open === i ? " open" : ""}`}>+</span>
                </button>
                <div className={`faq-answer${open === i ? " open" : ""}`}>
                  <p className="faq-a-text">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER CTA */}
          <div className="faq-footer">
            <div className="faq-footer-card">
              <div className="faq-footer-left">
                <div className="faq-footer-icon">
                  <StatIcon type="headset" />
                </div>
                <div>
                  <div className="faq-footer-text">Still have <span>questions?</span></div>
                  <div className="faq-footer-sub">Our team is happy to walk you through every detail before you invest.</div>
                </div>
              </div>
              <button className="faq-contact-btn">
                Contact Our Team
                <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST LINE */}
      <div className="faq-trust">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M10 2l7 3v5c0 4.6-3 8-7 9-4-1-7-4.4-7-9V5z" stroke="#191c20" strokeWidth="1.5" />
          <path d="M7.2 10l2 2 3.6-3.6" stroke="#191c20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Reliable Support. Lasting Partnerships.
      </div>
    </main>
  );
}