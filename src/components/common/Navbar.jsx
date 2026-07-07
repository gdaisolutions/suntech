import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const APPLICATION_TYPES = ["Namkeen", "Spices", "Powder", "Grains", "Snacks"];

const MACHINES = [
  { label: "Weighing & Filling",  to: "/machines/weighing"  },
  { label: "Packaging Machines",  to: "/machines/packaging" },
  { label: "Sealing Machines",    to: "/machines/sealing"   },
  { label: "Labelling Machines",  to: "/machines/labelling" },
];

const MEDIA_ITEMS = [
  { label: "Media Home", to: "/media" },
  { label: "Videos",     to: "/media/videos" },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── NAV BASE (mobile-first: compact by default) ── */
  .nb {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    transition: box-shadow 0.3s ease;
  }
  .nb.scrolled {
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  }

  .nb-inner {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 12px;
    gap: 0;
  }
  @media (min-width: 480px) {
    .nb-inner { height: 68px; padding: 0 16px; }
  }
  @media (min-width: 1024px) {
    .nb-inner {
      height: 82px;
      padding: 0 40px;
    }
  }

  /* ── LOGO ── */
  .nb-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
    margin-right: 10px;
    min-width: 0;
  }
  @media (min-width: 480px) {
    .nb-logo { margin-right: 16px; }
  }
  @media (min-width: 1024px) {
    .nb-logo { margin-right: 40px; }
  }

  .nb-logo-box {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    overflow: hidden;
    border-radius: 7px;
    transition: transform 0.2s ease;
  }
  .nb-logo-box:hover { transform: scale(1.02); }

  .nb-logo-video {
    display: block;
    height: 36px;
    width: auto;
    max-width: 110px;
    object-fit: contain;
    border-radius: inherit;
  }

  @media (min-width: 480px) {
    .nb-logo-box { height: 44px; border-radius: 8px; }
    .nb-logo-video { height: 44px; max-width: 140px; }
  }

  @media (min-width: 1024px) {
    .nb-logo-box { height: 56px; border-radius: 10px; }
    .nb-logo-video { height: 56px; max-width: 220px; }
  }

  /* ── DESKTOP NAV ── */
  .nb-links {
    display: none;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: 10px;
    list-style: none;
  }
  @media (min-width: 1024px) {
    .nb-links { display: flex; }
  }

  /* Each link as separate button */
  .nb-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 700;
    color: var(--text-2);
    text-decoration: none;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    white-space: nowrap;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.2s ease;
    position: relative;
    background: var(--surface);
  }
  .nb-link:hover {
    color: var(--on-accent);
    background: var(--accent);
    border-color: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  }
  .nb-link.active {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.25);
  }

  /* ── DROPDOWN WRAPPER ── */
  .nb-dd-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .nb-dd-wrap::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    height: 20px;
    background: transparent;
    pointer-events: auto;
    display: none;
  }
  .nb-dd-wrap:hover::after { display: block; }

  /* Dropdown button as separate button */
  .nb-dd-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 700;
    color: var(--text-2);
    background: var(--surface);
    border: 1.5px solid var(--border);
    border-radius: 8px;
    white-space: nowrap;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .nb-dd-btn:hover {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  }
  .nb-dd-btn.open {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.25);
  }
  .nb-chevron {
    transition: transform 0.2s ease;
    flex-shrink: 0;
    opacity: 0.7;
  }
  .nb-dd-btn.open .nb-chevron,
  .nb-dd-btn:hover .nb-chevron {
    transform: rotate(180deg);
    opacity: 1;
  }

  /* ── DROPDOWN PANEL ── */
  .nb-dropdown {
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    min-width: 240px;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: 200;
  }
  .nb-dropdown.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }

  /* Each dropdown item as separate button */
  .nb-dd-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px 18px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-2);
    text-decoration: none;
    background: var(--surface);
    border: 1.5px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    transition: all 0.15s ease;
    margin-bottom: 8px;
  }
  .nb-dd-item:last-child { margin-bottom: 0; }
  .nb-dd-item:hover {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(245, 158, 11, 0.25);
  }

  /* ── CTA BUTTON ── */
  .nb-cta {
    display: none;
    align-items: center;
    background: #f59e0b;
    color: #ffffff;
    padding: 12px 28px;
    border-radius: 8px;
    border: 2px solid #f59e0b;
    cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 16px;
    transition: all 0.2s ease;
  }
  .nb-cta:hover {
    background: #ffffff;
    color: #f59e0b;
    border-color: #f59e0b;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
  }
  @media (min-width: 1024px) {
    .nb-cta { display: flex; }
  }

  /* ── HAMBURGER (mobile-first: compact) ── */
  .nb-ham {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 38px;
    height: 38px;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    cursor: pointer;
    padding: 9px;
    border-radius: 8px;
    flex-shrink: 0;
    margin-left: auto;
    transition: all 0.2s ease;
  }
  @media (min-width: 480px) {
    .nb-ham {
      gap: 5px;
      width: 44px;
      height: 44px;
      border-width: 2px;
      padding: 10px;
      border-radius: 9px;
    }
  }
  .nb-ham:hover {
    border-color: #f59e0b;
    background: #f59e0b;
  }
  .nb-ham span {
    display: block;
    width: 100%;
    height: 2px;
    background: #374151;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  @media (min-width: 480px) {
    .nb-ham span { height: 2.5px; }
  }
  .nb-ham:hover span { background: #ffffff; }
  .nb-ham.open {
    border-color: #f59e0b;
    background: #f59e0b;
  }
  .nb-ham.open span { background: #ffffff; }
  .nb-ham.open span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  @media (min-width: 480px) {
    .nb-ham.open span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
  }
  .nb-ham.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .nb-ham.open span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
  @media (min-width: 480px) {
    .nb-ham.open span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }
  }
  @media (min-width: 1024px) {
    .nb-ham { display: none; }
  }

  /* ── MOBILE OVERLAY ── */
  .nb-overlay {
    position: fixed;
    inset: 0;
    z-index: 98;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .nb-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  /* ── MOBILE DRAWER (mobile-first: compact, offsets match header height) ── */
  .nb-drawer {
    position: fixed;
    top: 60px;
    left: 0; right: 0;
    z-index: 99;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.2s ease;
    max-height: calc(100svh - 60px);
    overflow-y: auto;
  }
  @media (min-width: 480px) {
    .nb-drawer {
      top: 68px;
      max-height: calc(100svh - 68px);
    }
  }
  @media (min-width: 1024px) {
    .nb-drawer {
      top: 82px;
      max-height: calc(100svh - 82px);
    }
  }
  .nb-drawer.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nb-mob-nav {
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @media (min-width: 480px) {
    .nb-mob-nav { padding: 16px; gap: 10px; }
  }

  /* Mobile link as separate button */
  .nb-mob-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #374151;
    text-decoration: none;
    border: 1.5px solid #e5e7eb;
    border-radius: 9px;
    background: #ffffff;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
  @media (min-width: 480px) {
    .nb-mob-link {
      padding: 16px 20px;
      font-size: 16px;
      border-width: 2px;
      border-radius: 10px;
      letter-spacing: 0.04em;
    }
  }
  .nb-mob-link:hover,
  .nb-mob-link.active {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
  }

  /* Mobile dropdown button */
  .nb-mob-dd-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px 16px;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    border-radius: 9px;
    cursor: pointer;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #374151;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
  @media (min-width: 480px) {
    .nb-mob-dd-btn {
      gap: 10px;
      padding: 16px 20px;
      border-width: 2px;
      border-radius: 10px;
      font-size: 16px;
      letter-spacing: 0.04em;
    }
  }
  .nb-mob-dd-btn:hover,
  .nb-mob-dd-btn.open {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
  }

  .nb-mob-sub {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
    padding: 0 4px;
  }
  .nb-mob-sub.open {
    max-height: 500px;
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  @media (min-width: 480px) {
    .nb-mob-sub.open { padding-top: 10px; gap: 8px; }
  }

  /* Mobile sub-item as separate button */
  .nb-mob-sub-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 16px;
    font-family: 'Barlow', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    color: #4b5563;
    text-decoration: none;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.15s ease;
  }
  @media (min-width: 480px) {
    .nb-mob-sub-item {
      padding: 14px 18px;
      font-size: 15px;
    }
  }
  .nb-mob-sub-item:hover {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
  }

  .nb-mob-cta-wrap {
    padding: 6px 12px 16px;
  }
  @media (min-width: 480px) {
    .nb-mob-cta-wrap { padding: 8px 16px 20px; }
  }
  .nb-mob-cta {
    width: 100%;
    padding: 15px;
    background: #f59e0b;
    color: #ffffff;
    border: 2px solid #f59e0b;
    border-radius: 9px;
    cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
  @media (min-width: 480px) {
    .nb-mob-cta {
      padding: 18px;
      border-radius: 10px;
      font-size: 17px;
      letter-spacing: 0.12em;
    }
  }
  .nb-mob-cta:hover {
    background: #ffffff;
    color: #f59e0b;
  }
`;

const Chevron = () => (
  <svg className="nb-chevron" width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function useHoverDropdown(delay = 150) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const handleMouseEnter = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timer.current = setTimeout(() => setOpen(false), delay);
  };
  useEffect(() => () => clearTimeout(timer.current), []);
  return { open, setOpen, handleMouseEnter, handleMouseLeave };
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobMachOpen, setMobMachOpen] = useState(false);
  const [mobAppOpen, setMobAppOpen] = useState(false);
  const [mobMediaOpen, setMobMediaOpen] = useState(false);

  const mach = useHoverDropdown();
  const app = useHoverDropdown();
  const media = useHoverDropdown();

  const videoRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setMobMachOpen(false);
    setMobAppOpen(false);
    setMobMediaOpen(false);
    mach.setOpen(false);
    app.setOpen(false);
    media.setOpen(false);
  };

  const handleAppNav = (type) => {
    navigate(`/applications?type=${encodeURIComponent(type)}`);
    closeAll();
  };

  return (
    <>
      <style>{css}</style>

      <div className={`nb-overlay${menuOpen ? " open" : ""}`} onClick={closeAll} />

      <header className={`nb${scrolled ? " scrolled" : ""}`}>
        <div className="nb-inner">

          {/* LOGO */}
          <Link to="/" className="nb-logo" onClick={closeAll}>
            <div className="nb-logo-box">
              <video
                ref={videoRef}
                className="nb-logo-video"
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

          {/* DESKTOP NAV */}
          <nav className="nb-links">
            <Link
              to="/"
              className={`nb-link${pathname === "/" ? " active" : ""}`}
              onClick={closeAll}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nb-link${pathname === "/about" ? " active" : ""}`}
              onClick={closeAll}
            >
              About
            </Link>

            {/* Applications */}
            {/* <div
              className="nb-dd-wrap"
              onMouseEnter={app.handleMouseEnter}
              onMouseLeave={app.handleMouseLeave}
            >
              <button className={`nb-dd-btn${app.open || pathname === "/applications" ? " open" : ""}`}>
                Applications <Chevron />
              </button>
              <div
                className={`nb-dropdown${app.open ? " open" : ""}`}
                onMouseEnter={app.handleMouseEnter}
                onMouseLeave={app.handleMouseLeave}
              >
                {APPLICATION_TYPES.map(type => (
                  <button
                    key={type}
                    className="nb-dd-item"
                    onClick={() => handleAppNav(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div> */}

            {/* Media */}
            <div
              className="nb-dd-wrap"
              onMouseEnter={media.handleMouseEnter}
              onMouseLeave={media.handleMouseLeave}
            >
              <button className={`nb-dd-btn${media.open || pathname.startsWith("/media") ? " open" : ""}`}>
                Media <Chevron />
              </button>
              <div
                className={`nb-dropdown${media.open ? " open" : ""}`}
                onMouseEnter={media.handleMouseEnter}
                onMouseLeave={media.handleMouseLeave}
              >
                {MEDIA_ITEMS.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="nb-dd-item"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Machines */}
            <div
              className="nb-dd-wrap"
              onMouseEnter={mach.handleMouseEnter}
              onMouseLeave={mach.handleMouseLeave}
            >
              <button className={`nb-dd-btn${mach.open ? " open" : ""}`} onClick={() => { navigate('/machines'); closeAll(); }}>
                Machines <Chevron />
              </button>
              <div
                className={`nb-dropdown${mach.open ? " open" : ""}`}
                onMouseEnter={mach.handleMouseEnter}
                onMouseLeave={mach.handleMouseLeave}
              >
                {MACHINES.map(m => (
                  <Link
                    key={m.to}
                    to={m.to}
                    className="nb-dd-item"
                    onClick={closeAll}
                  >
                    {m.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/projects"
              className={`nb-link${pathname === "/projects" ? " active" : ""}`}
              onClick={closeAll}
            >
              Projects
            </Link>
            <Link
              to="/brochure"
              className={`nb-link${pathname === "/brochure" ? " active" : ""}`}
              onClick={closeAll}
            >
              Brochure
            </Link>
            <Link
              to="/faq"
              className={`nb-link${pathname === "/faq" ? " active" : ""}`}
              onClick={closeAll}
            >
              FAQ
            </Link>
            <Link
              to="/solutions"
              className={`nb-link${pathname === "/solutions" ? " active" : ""}`}
              onClick={closeAll}
            >
              Solutions
            </Link>
            <Link
              to="/contact"
              className={`nb-link${pathname === "/contact" ? " active" : ""}`}
              onClick={closeAll}
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <button className="nb-cta" onClick={() => navigate("/contact")}>
            Get a Quote
          </button>

          {/* HAMBURGER */}
          <button
            className={`nb-ham${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`nb-drawer${menuOpen ? " open" : ""}`}>
        <nav className="nb-mob-nav">
          <Link
            to="/"
            className={`nb-mob-link${pathname === "/" ? " active" : ""}`}
            onClick={closeAll}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nb-mob-link${pathname === "/about" ? " active" : ""}`}
            onClick={closeAll}
          >
            About
          </Link>

          {/* Applications */}
          {/* <button
            className={`nb-mob-dd-btn${mobAppOpen ? " open" : ""}`}
            onClick={() => setMobAppOpen(o => !o)}
          >
            Applications <Chevron />
          </button> */}
          <div className={`nb-mob-sub${mobAppOpen ? " open" : ""}`}>
            {APPLICATION_TYPES.map(type => (
              <button
                key={type}
                className="nb-mob-sub-item"
                onClick={() => handleAppNav(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Media */}
          <button
            className={`nb-mob-dd-btn${mobMediaOpen ? " open" : ""}`}
            onClick={() => setMobMediaOpen(o => !o)}
          >
            Media <Chevron />
          </button>
          <div className={`nb-mob-sub${mobMediaOpen ? " open" : ""}`}>
            {MEDIA_ITEMS.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="nb-mob-sub-item"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Machines */}
          <button
            className={`nb-mob-dd-btn${mobMachOpen ? " open" : ""}`}
            onClick={() => setMobMachOpen(o => !o)}
          >
            Machines <Chevron />
          </button>
          <div className={`nb-mob-sub${mobMachOpen ? " open" : ""}`}>
            <Link to="/machines" className="nb-mob-sub-item" onClick={closeAll}>All Machines</Link>
            {MACHINES.map(m => (
              <Link
                key={m.to}
                to={m.to}
                className="nb-mob-sub-item"
                onClick={closeAll}
              >
                {m.label}
              </Link>
            ))}
          </div>

          <Link
            to="/projects"
            className={`nb-mob-link${pathname === "/projects" ? " active" : ""}`}
            onClick={closeAll}
          >
            Projects
          </Link>
          <Link
            to="/brochure"
            className={`nb-mob-link${pathname === "/brochure" ? " active" : ""}`}
            onClick={closeAll}
          >
            Brochure
          </Link>
          <Link
            to="/faq"
            className={`nb-mob-link${pathname === "/faq" ? " active" : ""}`}
            onClick={closeAll}
          >
            FAQ
          </Link>
          <Link
            to="/solutions"
            className={`nb-mob-link${pathname === "/solutions" ? " active" : ""}`}
            onClick={closeAll}
          >
            Solutions
          </Link>
          <Link
            to="/contact"
            className={`nb-mob-link${pathname === "/contact" ? " active" : ""}`}
            onClick={closeAll}
          >
            Contact
          </Link>
        </nav>

        <div className="nb-mob-cta-wrap">
          <button
            className="nb-mob-cta"
            onClick={() => {
              navigate("/contact");
              closeAll();
            }}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
}