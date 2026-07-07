import { useState, useEffect, useCallback, useRef } from "react";

const products = [
  {
    id: 1,
    badge: "High Performance. Maximum Reliability.",
    titleLine1: "VFFS PACKAGING",
    titleHighlight: "MACHINE",
    description:
      "Engineered for high-speed vertical form-fill-seal operations, delivering precision packaging at up to 200 packs per minute with minimal waste and maximum uptime.",
    image: `${import.meta.env.BASE_URL}Machines/Multi-Head VFFS Packaging Machine.png`,
    thumbnail: `${import.meta.env.BASE_URL}Machines/Multi-Head VFFS Packaging Machine.png`,
  },
  {
    id: 2,
    badge: "Durable Seals. Extended Shelf Life.",
    titleLine1: "SEALING",
    titleHighlight: "MACHINE",
    description:
      "Advanced heat sealing technology ensuring consistent airtight seals across diverse packaging materials, built for continuous industrial operation.",
    image: `${import.meta.env.BASE_URL}Machines/Pick Fill seal Machine.png`,
    thumbnail: `${import.meta.env.BASE_URL}Machines/Pick Fill seal Machine.png`,
  },
  {
    id: 3,
    badge: "Precision Filling. Zero Spillage.",
    titleLine1: "AUGER FILLER",
    titleHighlight: "MACHINE",
    description:
      "High-precision volumetric auger filling system designed for powder and granule products, ensuring accurate weight control in every cycle.",
    image: `${import.meta.env.BASE_URL}Machines/VFFS 1014 Head Machine.png`,
    thumbnail: `${import.meta.env.BASE_URL}Machines/VFFS 1014 Head Machine.png`,
  },
  {
    id: 4,
    badge: "Consistent Weight. Every Batch.",
    titleLine1: "MULTI-HEAD",
    titleHighlight: "WEIGHER",
    description:
      "Automatic multi-head weighing system offering rapid, accurate portioning for a wide range of free-flowing and irregular products.",
    image: `${import.meta.env.BASE_URL}Machines/Automatic Multi-Head Weighing.png`,
    thumbnail: `${import.meta.env.BASE_URL}Machines/Automatic Multi-Head Weighing.png`,
  },
  {
    id: 5,
    badge: "Smooth Flow. Reliable Fill.",
    titleLine1: "LIQUID FILLING",
    titleHighlight: "MACHINE",
    description:
      "Precision liquid filling system built for consistent volume control and contamination-free operation across a variety of container types.",
    image: `${import.meta.env.BASE_URL}Machines/Liquid Filling Machine .png`,
    thumbnail: `${import.meta.env.BASE_URL}Machines/Liquid Filling Machine .png`,
  },
];

// how long each slide stays before auto-advancing (ms)
const AUTOPLAY_DELAY = 4500;
// how long the fade/slide transition itself takes (ms) — snappy but not jarring
const TRANSITION_DURATION = 450;

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const autoplayRef = useRef(null);
  const totalProducts = products.length;

  const goTo = useCallback(
    (index) => {
      if (isTransitioning || index === activeIndex) return;
      setIsTransitioning(true);
      setAnimKey((k) => k + 1);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
    },
    [activeIndex, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((activeIndex + 1) % totalProducts);
  }, [activeIndex, goTo, totalProducts]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + totalProducts) % totalProducts);
  }, [activeIndex, goTo, totalProducts]);

  // ── Autoplay ──
  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(() => {
      next();
    }, AUTOPLAY_DELAY);
    return () => clearInterval(autoplayRef.current);
  }, [isPaused, next]);

  const current = products[activeIndex];

  const thumbLabels = products.map((p) =>
    p.titleLine1.split(" ").slice(0, 2).join(" ")
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=Barlow:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .ps-section {
          width: 100%;
          font-family: var(--font-body, 'Barlow', sans-serif);
          overflow: hidden;
          background: #ffffff;
          margin-bottom: 36px;
        }

        @media (min-width: 768px) {
          .ps-section { margin-bottom: 54px; }
        }

        @media (min-width: 1024px) {
          .ps-section { margin-bottom: 72px; }
        }

        /* Stacked mobile-first: text on top, big image below. Side-by-side from 900px up. */
        .ps-main {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, #fff6ea 0%, #ffffff 55%);
        }

        @media (min-width: 900px) {
          .ps-main {
            flex-direction: row;
            align-items: stretch;
            min-height: 640px;
          }
        }

        /* ── FLEX ORDER — content, image, controls, in that exact
           order on mobile. (Previously .ps-controls had no order set,
           so it defaulted to 0 and rendered ABOVE the title/image on
           mobile — that was the broken layout. Fixed below.) ── */
        .ps-content { order: 1; }
        .ps-stage    { order: 2; }
        .ps-controls { order: 3; }

        @media (min-width: 900px) {
          .ps-content { order: 1; }
          .ps-stage    { order: 2; }
          /* controls become position:absolute at 900px+, so order no
             longer matters for them there */
        }

        /* Image stage: light orange/white background, fluid width, never cropped */
        .ps-stage {
          position: relative;
          width: 100%;
          background: radial-gradient(ellipse at center, #fff9f0 0%, #ffedd3 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 14px 12px;
        }

        @media (min-width: 480px) {
          .ps-stage { padding: 30px 20px 14px; }
        }

        @media (min-width: 900px) {
          .ps-stage {
            flex: 1.2;
            padding: 40px 32px 64px;
          }
        }

        @media (min-width: 1280px) {
          .ps-stage { flex: 1.3; padding: 48px 40px 72px; }
        }

        /* Fluid stage sizing using clamp() instead of hard breakpoint
           jumps, so the product image scales smoothly on every
           screen size — and is noticeably larger on desktop. */
        .ps-stage-inner {
          position: relative;
          width: 100%;
          max-width: clamp(320px, 92vw, 1040px);
          height: clamp(200px, 46vw, 640px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 900px) {
          .ps-stage-inner {
            max-width: clamp(600px, 46vw, 900px);
            height: clamp(420px, 34vw, 620px);
          }
        }

        @media (min-width: 1280px) {
          .ps-stage-inner {
            max-width: clamp(700px, 42vw, 980px);
            height: clamp(480px, 32vw, 660px);
          }
        }

        @media (min-width: 1600px) {
          .ps-stage-inner {
            max-width: 1040px;
            height: 700px;
          }
        }

        .ps-stage-inner img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 18px 30px rgba(194, 86, 15, 0.16));
          transition: opacity ${TRANSITION_DURATION}ms ease, transform ${TRANSITION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes psImgIn {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        .ps-img-anim {
          animation: psImgIn ${TRANSITION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .ps-stage-glow {
          position: absolute;
          width: 70%;
          height: 70%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0) 70%);
          z-index: 0;
        }

        .ps-content {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 18px 4px;
          z-index: 4;
        }
        @media (min-width: 480px) {
          .ps-content { padding: 34px 26px 4px; }
        }
        @media (min-width: 900px) {
          .ps-content {
            flex: 1;
            padding: 50px 40px;
            max-width: 500px;
          }
        }
        @media (min-width: 1024px) {
          .ps-content { padding: 60px 50px; max-width: 540px; }
        }
        @media (min-width: 1440px) {
          .ps-content { padding: 70px 70px; max-width: 580px; }
        }

        .ps-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #c2560f;
          margin-bottom: 16px;
        }
        .ps-badge::before {
          content: '';
          width: 22px;
          height: 2px;
          background: #f59e0b;
          border-radius: 1px;
        }

        .ps-divider {
          width: 44px;
          height: 3px;
          background: #f59e0b;
          border-radius: 2px;
          margin-bottom: 18px;
        }

        .ps-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          line-height: 0.94;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
        }
        .ps-title-line1 {
          display: block;
          font-size: clamp(26px, 8vw, 44px);
          color: #1c1917;
        }
        @media (min-width: 480px) {
          .ps-title-line1 { font-size: clamp(30px, 7vw, 52px); }
        }
        @media (min-width: 768px) {
          .ps-title-line1 { font-size: clamp(36px, 4.8vw, 68px); }
        }
        @media (min-width: 1024px) {
          .ps-title-line1 { font-size: clamp(40px, 4.2vw, 78px); }
        }
        @media (min-width: 1440px) {
          .ps-title-line1 { font-size: 84px; }
        }

        .ps-title-highlight {
          display: block;
          font-size: clamp(32px, 9vw, 52px);
          color: #f59e0b;
        }
        @media (min-width: 480px) {
          .ps-title-highlight { font-size: clamp(36px, 8vw, 60px); }
        }
        @media (min-width: 768px) {
          .ps-title-highlight { font-size: clamp(44px, 5.5vw, 82px); }
        }
        @media (min-width: 1024px) {
          .ps-title-highlight { font-size: clamp(48px, 4.8vw, 94px); }
        }
        @media (min-width: 1440px) {
          .ps-title-highlight { font-size: 100px; }
        }

        .ps-desc {
          font-size: 12.5px;
          line-height: 1.7;
          color: #57534e;
          margin: 0 0 24px;
          max-width: 420px;
          font-weight: 400;
        }
        @media (min-width: 480px) {
          .ps-desc { font-size: 13px; margin-bottom: 28px; }
        }
        @media (min-width: 768px) {
          .ps-desc { font-size: 14px; max-width: 440px; margin-bottom: 30px; }
        }
        @media (min-width: 1024px) {
          .ps-desc { font-size: 15px; max-width: 460px; }
        }

        .ps-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        @media (min-width: 480px) {
          .ps-btns { gap: 12px; }
        }
        @media (max-width: 400px) {
          .ps-btns { flex-direction: column; }
          .ps-btns a { text-align: center; justify-content: center; }
        }

        .ps-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f59e0b;
          color: #ffffff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 12px 22px;
          border-radius: 4px;
          border: 2px solid #f59e0b;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(245,158,11,0.28);
        }
        @media (min-width: 480px) {
          .ps-btn-primary { font-size: 12px; letter-spacing: 0.16em; padding: 13px 28px; }
        }
        .ps-btn-primary:hover {
          background: #d97706;
          border-color: #d97706;
          box-shadow: 0 6px 24px rgba(245,158,11,0.38);
          transform: translateY(-1px);
        }
        .ps-btn-primary svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .ps-btn-glass {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #1c1917;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 12px 22px;
          border-radius: 4px;
          border: 1.5px solid #f0e2cf;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        @media (min-width: 480px) {
          .ps-btn-glass { font-size: 12px; letter-spacing: 0.16em; padding: 13px 28px; }
        }
        .ps-btn-glass:hover {
          background: #fff3e2;
          border-color: #f59e0b;
          transform: translateY(-1px);
        }
        .ps-btn-glass svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* ── Controls: centered row on mobile (in normal flex flow,
           after image), pinned bottom-right floating pill on desktop ── */
        .ps-controls {
          position: relative;
          margin: 4px auto 20px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #f0e2cf;
          border-radius: 10px;
          padding: 6px 8px;
          width: fit-content;
          box-shadow: 0 6px 18px -10px rgba(28,25,23,0.15);
        }
        @media (min-width: 900px) {
          .ps-controls {
            position: absolute;
            bottom: 24px;
            right: 24px;
            margin: 0;
          }
        }

        .ps-ctrl-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid #f0e2cf;
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        @media (min-width: 480px) {
          .ps-ctrl-btn { width: 38px; height: 38px; }
        }
        @media (min-width: 768px) {
          .ps-ctrl-btn { width: 42px; height: 42px; }
        }
        .ps-ctrl-btn:hover {
          background: #fff3e2;
          border-color: #f59e0b;
        }
        .ps-ctrl-btn:hover svg {
          stroke: #f59e0b;
        }
        .ps-ctrl-btn svg {
          width: 16px;
          height: 16px;
          stroke: #78716c;
          transition: stroke 0.25s ease;
        }

        .ps-counter {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #a8896a;
          letter-spacing: 0.1em;
          padding: 0 6px;
          user-select: none;
        }
        @media (min-width: 480px) {
          .ps-counter { font-size: 14px; }
        }
        .ps-counter .ps-curr {
          color: #f59e0b;
          font-size: 16px;
        }
        @media (min-width: 480px) {
          .ps-counter .ps-curr { font-size: 17px; }
        }

        @keyframes psFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .ps-anim {
          animation: psFadeUp ${TRANSITION_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .ps-d0 { animation-delay: 0s; opacity: 0; }
        .ps-d1 { animation-delay: 0.04s; opacity: 0; }
        .ps-d2 { animation-delay: 0.08s; opacity: 0; }
        .ps-d3 { animation-delay: 0.12s; opacity: 0; }
        .ps-d4 { animation-delay: 0.16s; opacity: 0; }

        /* ── Thumbnail strip ── */
        .ps-thumbs {
          position: relative;
          z-index: 5;
          background: linear-gradient(180deg, #fff8ef 0%, #fdf1e0 100%);
          border-top: 1px solid #f0e2cf;
          padding: 14px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .ps-thumbs::-webkit-scrollbar { display: none; }
        @media (min-width: 480px) {
          .ps-thumbs { padding: 18px 20px; gap: 14px; justify-content: flex-start; }
        }
        @media (min-width: 640px) {
          .ps-thumbs { justify-content: center; }
        }
        @media (min-width: 768px) {
          .ps-thumbs { padding: 20px 50px; gap: 20px; }
        }
        @media (min-width: 1024px) {
          .ps-thumbs { padding: 22px 70px; gap: 24px; }
        }
        @media (min-width: 1440px) {
          .ps-thumbs { padding: 24px 100px; gap: 28px; }
        }

        .ps-thumb {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          background: #ffffff;
          border: 2px solid #f0e2cf;
          border-radius: 8px;
          padding: 9px 12px 10px;
          min-width: 96px;
          flex-shrink: 0;
          scroll-snap-align: center;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }
        @media (min-width: 480px) {
          .ps-thumb { min-width: 130px; padding: 10px 18px 12px; gap: 10px; }
        }
        @media (min-width: 768px) {
          .ps-thumb { min-width: 155px; padding: 12px 20px 14px; }
        }
        @media (min-width: 1024px) {
          .ps-thumb { min-width: 175px; padding: 14px 24px 16px; }
        }

        .ps-thumb:hover {
          transform: translateY(-5px) scale(1.03);
          border-color: #e8c9a0;
          background: #fffaf3;
        }

        .ps-thumb-active {
          border-color: #f59e0b !important;
          background: #fff3e2 !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow:
            0 4px 20px rgba(245,158,11,0.16),
            0 0 0 1px rgba(245,158,11,0.10),
            inset 0 1px 0 rgba(245,158,11,0.08);
        }

        .ps-thumb-dot {
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 28px;
          height: 3px;
          background: #f59e0b;
          border-radius: 0 0 3px 3px;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ps-thumb-active .ps-thumb-dot {
          transform: translateX(-50%) scaleX(1);
        }

        .ps-thumb-img-wrap {
          width: 68px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        @media (min-width: 480px) {
          .ps-thumb-img-wrap { width: 100px; height: 60px; }
        }
        @media (min-width: 768px) {
          .ps-thumb-img-wrap { width: 115px; height: 68px; }
        }
        @media (min-width: 1024px) {
          .ps-thumb-img-wrap { width: 125px; height: 74px; }
        }

        .ps-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.55;
          transition: opacity 0.3s ease;
        }
        .ps-thumb-active .ps-thumb-img { opacity: 1; }
        .ps-thumb:hover .ps-thumb-img { opacity: 0.85; }

        .ps-thumb-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a8896a;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        @media (min-width: 480px) {
          .ps-thumb-label { font-size: 10px; letter-spacing: 0.16em; }
        }
        .ps-thumb-active .ps-thumb-label { color: #c2560f; }
        .ps-thumb:hover .ps-thumb-label { color: #57534e; }
      `}</style>

      <section className="ps-section" id="products">
        <div
          className="ps-main"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Content column */}
          <div className="ps-content" key={`content-${animKey}`}>
            <div className="ps-anim ps-d0">
              <span className="ps-badge">{current.badge}</span>
            </div>
            <div className="ps-anim ps-d0">
              <div className="ps-divider" />
            </div>
            <h2 className="ps-title ps-anim ps-d1">
              <span className="ps-title-line1">{current.titleLine1}</span>
              <span className="ps-title-highlight">
                {current.titleHighlight}
              </span>
            </h2>
            <p className="ps-desc ps-anim ps-d2">{current.description}</p>
            <div className="ps-btns ps-anim ps-d3">
              <a href="/machines" className="ps-btn-primary">
                VIEW DETAILS
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="/contact" className="ps-btn-glass">
                GET A QUOTE
                <svg
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M7 2v10M3 8l4 4 4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image stage — light background, fluid width, fully contained, bigger on desktop */}
          <div className="ps-stage">
            <div className="ps-stage-inner" key={`img-${animKey}`}>
              <div className="ps-stage-glow" />
              <img
                src={current.image}
                alt={current.titleLine1 + " " + current.titleHighlight}
                className="ps-img-anim"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Controls — in normal document flow on mobile (after image),
              floating bottom-right pill on desktop (≥900px) */}
          <div className="ps-controls">
            <button
              className="ps-ctrl-btn"
              onClick={prev}
              aria-label="Previous product"
            >
              <svg viewBox="0 0 18 18" fill="none" strokeWidth="2">
                <path
                  d="M12 3L6 9l6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span className="ps-counter">
              <span className="ps-curr">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(totalProducts).padStart(2, "0")}
            </span>
            <button
              className="ps-ctrl-btn"
              onClick={next}
              aria-label="Next product"
            >
              <svg viewBox="0 0 18 18" fill="none" strokeWidth="2">
                <path
                  d="M6 3l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="ps-thumbs">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`ps-thumb ${
                index === activeIndex ? "ps-thumb-active" : ""
              }`}
              onClick={() => goTo(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${product.titleLine1} ${product.titleHighlight}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goTo(index);
                }
              }}
            >
              <div className="ps-thumb-dot" />
              <div className="ps-thumb-img-wrap">
                <img
                  src={product.thumbnail}
                  alt={product.titleLine1}
                  className="ps-thumb-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="ps-thumb-label">{thumbLabels[index]}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}