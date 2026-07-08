import { useState } from "react";

const defaultForm = { name: "", email: "", phone: "", message: "" };

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap');

  .ct {
    --bg:            #FCFAF7;
    --champagne:     #F7F2EB;
    --sand:          #F3EEE6;
    --stone:         #EEE7DE;
    --surface:       #FEFDFB;
    --surface-sunk:  #F6F0E6;
    --border:        #E7DFD0;
    --border-strong: #D9CDB6;
    --text-1:        #201C16;
    --text-2:        #5B564C;
    --text-3:        #948C7C;
    --accent:        #E87817;
    --accent-dark:   #BE600F;
    --accent-tint:   #FBEBDD;
    --accent-tint-2: #F5D6B4;
    --on-accent:     #ffffff;
    --steel:         #5B7C99;
    --steel-tint:    #E8EEF2;
    --steel-tint-2:  #D9E4EB;
    --radius-lg: 20px;
    --radius-md: 12px;
    --radius-sm: 8px;
    --font-display: 'Fraunces', serif;
    --font-body: 'Montserrat', sans-serif;
  }

  .ct * { box-sizing: border-box; margin: 0; padding: 0; }
  .ct {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text-2);
    -webkit-font-smoothing: antialiased;
  }

  /* ============ PAGE / PANEL — mobile-first base ============ */

  .ct-page {
    min-height: 100vh;
    padding: 20px 14px 40px;
    position: relative;
    background:
      radial-gradient(1200px 520px at 84% -8%, rgba(232,120,23,0.08) 0%, transparent 58%),
      radial-gradient(1000px 620px at -6% 60%, rgba(91,124,153,0.07) 0%, transparent 55%),
      var(--bg);
  }

  .ct-panel {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--border);
    background: linear-gradient(180deg, var(--surface) 0%, var(--champagne) 46%, var(--sand) 100%);
    box-shadow: 0 1px 2px rgba(32,28,22,0.04), 0 30px 60px -32px rgba(32,28,22,0.22);
  }

  .ct-panel::before {
    content: '';
    position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      118deg,
      rgba(32,28,22,0.022) 0px,
      rgba(32,28,22,0.022) 1px,
      transparent 1px,
      transparent 70px
    );
    pointer-events: none;
    z-index: 0;
  }
  .ct-panel::after {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(32,28,22,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(32,28,22,0.03) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: radial-gradient(ellipse 60% 90% at 80% 10%, rgba(0,0,0,0.55) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .ct-machine-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-image: url('/Machines/Multi-Head VFFS Packaging Machine.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.10;
    filter: blur(3px) saturate(0.8);
    mix-blend-mode: multiply;
    pointer-events: none;
    z-index: 0;
    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.4) 70%, transparent 100%);
  }

  .ct-watermark { display: none; }
  @media (min-width: 940px) {
    .ct-watermark {
      display: block;
      position: absolute;
      top: 12%; right: -8%;
      width: 680px; height: 680px;
      background-image: url('/Machines/Multi-Head VFFS Packaging Machine.webp');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.06;
      filter: blur(4px) grayscale(0.3);
      mix-blend-mode: multiply;
      pointer-events: none;
      z-index: 0;
      mask-image: radial-gradient(ellipse 60% 60% at 55% 45%, black 0%, transparent 70%);
    }
  }

  .ct-corner {
    position: absolute;
    width: 16px; height: 16px;
    pointer-events: none;
    z-index: 3;
  }
  .ct-corner.tl { top: -1px; left: -1px; border-top: 2px solid var(--accent); border-left: 2px solid var(--accent); border-radius: 4px 0 0 0; }
  .ct-corner.br { bottom: -1px; right: -1px; border-bottom: 2px solid var(--accent); border-right: 2px solid var(--accent); border-radius: 0 0 4px 0; }
  @media (min-width: 640px) {
    .ct-corner { width: 20px; height: 20px; }
  }

  /* ============ HERO — mobile-first ============ */

  .ct-hero {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr;
    background:
      linear-gradient(160deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 45%),
      linear-gradient(135deg, #FFF3E4 0%, #FDE7CE 55%, #FBDCB8 100%);
    overflow: hidden;
  }
  .ct-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(190,96,15,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(190,96,15,0.07) 1px, transparent 1px);
    background-size: 26px 26px;
    mask-image: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 65%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }
  .ct-hero::after {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 260px; height: 260px;
    background-image:
      linear-gradient(rgba(190,96,15,0.14) 1px, transparent 1px),
      linear-gradient(90deg, rgba(190,96,15,0.14) 1px, transparent 1px);
    background-size: 13px 13px;
    border-radius: 50%;
    mask-image: radial-gradient(circle, rgba(0,0,0,0.8) 0%, transparent 72%);
    pointer-events: none;
    z-index: 0;
  }
  @media (min-width: 940px) {
    .ct-hero { grid-template-columns: 58% 42%; min-height: 340px; }
  }

  .ct-hero-inner {
    position: relative; z-index: 2;
    display: flex; flex-direction: column; gap: 14px;
    padding: 28px 20px 24px;
    justify-content: center;
  }
  @media (min-width: 640px) {
    .ct-hero-inner { padding: 40px 36px 30px; gap: 16px; }
  }
  @media (min-width: 940px) {
    .ct-hero-inner { padding: 44px 40px 36px; gap: 18px; }
  }

  .ct-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 7px; align-self: flex-start;
    font-size: 10.5px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
    color: var(--accent-dark);
    padding: 6px 13px; border-radius: 100px;
    border: 1px solid var(--accent-tint-2);
    background: var(--accent-tint);
    font-family: var(--font-body);
  }
  .ct-hero-eyebrow::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  .ct-hero-title {
    font-family: var(--font-display);
    font-size: clamp(28px, 8vw, 50px);
    font-weight: 600;
    line-height: 1.1; letter-spacing: -0.4px;
    color: var(--text-1);
    max-width: 560px;
  }
  .ct-hero-title span {
    color: var(--accent);
    font-style: italic;
    font-weight: 500;
  }

  .ct-hero-sub {
    font-size: 14px; font-weight: 500;
    color: var(--text-2); line-height: 1.6;
    max-width: 460px;
  }
  @media (min-width: 640px) {
    .ct-hero-sub { font-size: 15px; line-height: 1.65; }
  }

  .ct-hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 4px;
  }
  @media (min-width: 480px) {
    .ct-hero-stats { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 6px; }
  }

  .ct-stat {
    display: flex; flex-direction: column; align-items: flex-start; gap: 1px;
    padding: 10px 12px; border-radius: var(--radius-sm);
    background: rgba(255,255,255,0.72);
    border: 1px solid rgba(190,96,15,0.16);
    box-shadow: 0 1px 2px rgba(190,96,15,0.05);
    font-size: 11px; color: var(--text-2); font-weight: 500;
    position: relative; z-index: 1;
  }
  @media (min-width: 480px) {
    .ct-stat { flex-direction: row; align-items: baseline; gap: 6px; padding: 11px 18px; font-size: 12.5px; }
  }
  .ct-stat strong {
    color: var(--text-1); font-weight: 700; font-family: var(--font-display);
    font-size: 15px; line-height: 1.3;
  }
  @media (min-width: 480px) {
    .ct-stat strong { font-size: 16px; margin-right: 3px; }
  }

  .ct-hero-visual { display: none; }
  @media (min-width: 940px) {
    .ct-hero-visual {
      display: block;
      position: relative;
      overflow: hidden;
      min-height: 220px;
      z-index: 1;
    }
    .ct-hero-visual::before {
      content: '';
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(190,96,15,0.11) 1px, transparent 1px),
        linear-gradient(90deg, rgba(190,96,15,0.11) 1px, transparent 1px);
      background-size: 22px 22px;
      mask-image: radial-gradient(ellipse 75% 75% at 60% 45%, rgba(0,0,0,0.9) 0%, transparent 75%);
    }
    .ct-hero-visual::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      width: 130px; height: 130px;
      transform: translate(-50%, -50%) rotate(45deg);
      border: 1.5px solid rgba(190,96,15,0.18);
      border-radius: 18px;
    }

    .ct-hero-visual-fade {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, #FFF3E4 0%, rgba(255,243,228,0) 30%, rgba(255,243,228,0) 100%);
    }
  }

  .ct-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--border-strong) 15%, var(--border-strong) 85%, transparent 100%);
    position: relative;
    z-index: 2;
    margin: 0 20px;
  }
  @media (min-width: 640px) {
    .ct-divider { margin: 0 40px; }
  }

  /* ============ BODY / INFO / FORM — mobile-first ============ */

  .ct-body {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 900px) {
    .ct-body { grid-template-columns: 340px 1fr; }
  }

  .ct-info {
    display: flex; flex-direction: column;
    position: relative;
    padding: 24px 20px 26px;
    background: linear-gradient(180deg, rgba(247,242,235,0.4) 0%, rgba(243,238,230,0.3) 100%);
    border-bottom: 1px solid var(--border-strong);
  }
  @media (min-width: 640px) {
    .ct-info { padding: 30px 32px 32px; }
  }
  @media (min-width: 900px) {
    .ct-info { border-right: 1px solid var(--border-strong); border-bottom: none; padding: 36px 32px 40px 40px; }
  }

  .ct-info-tag {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 16px;
  }
  @media (min-width: 640px) {
    .ct-info-tag { margin-bottom: 20px; }
  }
  .ct-info-tag-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
  .ct-info-tag span {
    font-size: 10.5px; letter-spacing: 1.6px; text-transform: uppercase;
    color: var(--text-3); font-weight: 700;
  }

  .ct-info-row {
    padding: 13px 0;
    border-bottom: 1px solid rgba(231,223,208,0.6);
    display: flex; align-items: flex-start; gap: 12px;
  }
  @media (min-width: 640px) {
    .ct-info-row { padding: 15px 0; }
  }
  .ct-info-row:last-child { border-bottom: none; padding-bottom: 4px; }
  .ct-info-row:first-child { padding-top: 0; }

  .ct-info-icon {
    width: 34px; height: 34px; border-radius: 10px;
    background: var(--surface);
    border: 1px solid var(--border-strong);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 1px 2px rgba(32,28,22,0.05);
  }
  @media (min-width: 640px) {
    .ct-info-icon { width: 36px; height: 36px; }
  }

  .ct-info-text { display: flex; flex-direction: column; gap: 3px; padding-top: 3px; min-width: 0; }
  .ct-info-label {
    font-size: 10.5px; letter-spacing: 1.3px; text-transform: uppercase;
    color: var(--text-3); font-weight: 700;
  }
  .ct-info-value {
    font-size: 14px; font-weight: 600;
    color: var(--text-1); line-height: 1.4;
    text-decoration: none; transition: color 0.2s;
    word-break: break-word;
  }
  @media (min-width: 640px) {
    .ct-info-value { font-size: 14.5px; }
  }
  .ct-info-value:hover { color: var(--accent); }

  .ct-cta-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 100%; padding: 14px 18px; margin-top: 18px;
    background: var(--accent);
    color: var(--on-accent);
    border: none; border-radius: var(--radius-md); cursor: pointer;
    font-family: var(--font-body);
    font-size: 13px; font-weight: 700;
    letter-spacing: 0.2px;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    box-shadow: 0 8px 20px -8px rgba(232,120,23,0.5);
  }
  @media (min-width: 640px) {
    .ct-cta-btn { padding: 15px 20px; margin-top: 22px; font-size: 13.5px; }
  }
  .ct-cta-btn:hover { background: var(--accent-dark); transform: translateY(-1px); }
  .ct-cta-btn:active { transform: translateY(0); }

  .ct-cta-icon {
    width: 20px; height: 20px; border-radius: 50%;
    background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .ct-form-card {
    position: relative;
    padding: 26px 20px 30px;
    background: linear-gradient(180deg, rgba(254,253,251,0.3) 0%, rgba(247,242,235,0.2) 100%);
  }
  @media (min-width: 640px) {
    .ct-form-card { padding: 32px 32px 36px; }
  }
  @media (min-width: 900px) {
    .ct-form-card { padding: 36px 40px 40px 32px; }
  }

  .ct-form-header {
    padding-bottom: 18px;
    margin-bottom: 18px;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 12px;
  }
  @media (min-width: 640px) {
    .ct-form-header { padding-bottom: 20px; margin-bottom: 20px; gap: 14px; }
  }
  .ct-form-header-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: var(--steel-tint);
    border: 1px solid var(--steel-tint-2);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  @media (min-width: 640px) {
    .ct-form-header-icon { width: 42px; height: 42px; }
  }
  .ct-form-header-text h2 {
    font-family: var(--font-display);
    font-size: 18px; font-weight: 600;
    color: var(--text-1); letter-spacing: -0.2px;
  }
  @media (min-width: 640px) {
    .ct-form-header-text h2 { font-size: 20px; }
  }
  .ct-form-header-text p {
    font-size: 12.5px; color: var(--text-3); font-weight: 500;
    margin-top: 2px;
  }
  @media (min-width: 640px) {
    .ct-form-header-text p { font-size: 13px; }
  }

  .ct-field-row { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 14px; }
  @media (min-width: 560px) {
    .ct-field-row { grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  }

  .ct-field { display: flex; flex-direction: column; gap: 6px; }
  @media (min-width: 640px) {
    .ct-field { gap: 7px; }
  }
  .ct-label {
    font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
    color: var(--text-2);
  }
  @media (min-width: 640px) {
    .ct-label { font-size: 11.5px; }
  }
  .ct-required { color: var(--accent); margin-left: 2px; }

  .ct-input, .ct-textarea {
    width: 100%;
    background: rgba(254,253,251,0.85);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 12px 14px;
    font-family: var(--font-body); font-size: 16px; font-weight: 500;
    color: var(--text-1);
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
    box-shadow: 0 1px 3px rgba(32,28,22,0.04);
  }
  @media (min-width: 640px) {
    .ct-input, .ct-textarea { padding: 13px 15px; font-size: 15px; }
  }
  .ct-input::placeholder, .ct-textarea::placeholder {
    color: var(--text-3);
    font-weight: 400;
  }
  .ct-input:focus, .ct-textarea:focus {
    background: var(--surface);
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-tint);
  }
  .ct-input:hover:not(:focus), .ct-textarea:hover:not(:focus) {
    border-color: var(--border-strong);
    background: rgba(254,253,251,0.95);
  }

  .ct-textarea { resize: none; min-height: 110px; line-height: 1.6; }
  @media (min-width: 640px) {
    .ct-textarea { min-height: 120px; }
  }

  .ct-char-count { font-size: 11px; color: var(--text-3); text-align: right; margin-top: -3px; font-weight: 500; }
  @media (min-width: 640px) {
    .ct-char-count { font-size: 11.5px; margin-top: -4px; }
  }

  .ct-brochure-hint {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 14px; margin-top: 14px;
    background: var(--steel-tint);
    border: 1px solid var(--steel-tint-2);
    border-radius: var(--radius-sm);
  }
  @media (min-width: 640px) {
    .ct-brochure-hint { padding: 13px 16px; margin-top: 16px; }
  }
  .ct-brochure-hint-icon { flex-shrink: 0; }
  .ct-brochure-hint-text {
    font-size: 12px; color: var(--text-2);
    line-height: 1.5; font-weight: 500;
  }
  @media (min-width: 640px) {
    .ct-brochure-hint-text { font-size: 12.5px; }
  }
  .ct-brochure-hint-text strong { color: var(--steel); font-weight: 700; }

  .ct-submit {
    width: 100%; padding: 15px 22px; margin-top: 14px;
    background: var(--accent);
    border: none; border-radius: var(--radius-md); cursor: pointer;
    font-family: var(--font-body);
    font-size: 14px; font-weight: 700;
    letter-spacing: 0.2px;
    color: var(--on-accent);
    display: flex; align-items: center; justify-content: center; gap: 10px;
    transition: background 0.2s, transform 0.15s;
    box-shadow: 0 10px 24px -10px rgba(232,120,23,0.55);
  }
  @media (min-width: 640px) {
    .ct-submit { padding: 16px 24px; margin-top: 16px; font-size: 14.5px; }
  }
  .ct-submit:hover:not(:disabled) { background: var(--accent-dark); transform: translateY(-1px); }
  .ct-submit:active:not(:disabled) { transform: translateY(0); }
  .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  .ct-submit-arrow {
    width: 24px; height: 24px; border-radius: 50%;
    background: rgba(255,255,255,0.18);
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.2s;
    flex-shrink: 0;
  }
  @media (min-width: 640px) {
    .ct-submit-arrow { width: 26px; height: 26px; }
  }
  .ct-submit:hover .ct-submit-arrow { transform: translateX(3px); }

  .ct-trust {
    display: flex; align-items: center; gap: 6px; margin-top: 12px; justify-content: center;
    font-size: 11.5px; color: var(--text-3); font-weight: 500;
    text-align: center;
  }
  @media (min-width: 640px) {
    .ct-trust { margin-top: 14px; font-size: 12px; }
  }
  .ct-trust svg { flex-shrink: 0; }

  .ct-toast {
    position: fixed; bottom: 16px; right: 16px; left: 16px; z-index: 9999;
    background: var(--surface);
    color: var(--text-1);
    padding: 14px 16px; border-radius: var(--radius-md);
    display: flex; align-items: center; gap: 12px;
    font-size: 13px; font-weight: 600;
    box-shadow: 0 10px 32px rgba(32,28,22,0.16);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    animation: toast-in 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  @media (min-width: 480px) {
    .ct-toast { left: auto; max-width: 320px; bottom: 20px; right: 20px; font-size: 13.5px; padding: 14px 18px; }
  }
  @keyframes toast-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ============ MAP / LOCATION — mobile-first ============ */

  .ct-map {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 900px) {
    .ct-map { grid-template-columns: 340px 1fr; }
  }

  .ct-map-info {
    display: flex; flex-direction: column;
    position: relative;
    padding: 24px 20px 26px;
    background: linear-gradient(180deg, rgba(247,242,235,0.4) 0%, rgba(243,238,230,0.3) 100%);
    border-bottom: 1px solid var(--border-strong);
  }
  @media (min-width: 640px) {
    .ct-map-info { padding: 30px 32px 32px; }
  }
  @media (min-width: 900px) {
    .ct-map-info { border-right: 1px solid var(--border-strong); border-bottom: none; padding: 36px 32px 40px 40px; }
  }

  .ct-map-eyebrow {
    display: inline-flex; align-items: center; gap: 8px; align-self: flex-start;
    font-size: 10.5px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
    color: var(--steel);
    margin-bottom: 14px;
  }
  .ct-map-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--steel); flex-shrink: 0; }

  .ct-map-title {
    font-family: var(--font-display);
    font-size: 21px; font-weight: 600;
    color: var(--text-1); letter-spacing: -0.2px;
    margin-bottom: 12px;
    line-height: 1.25;
  }
  @media (min-width: 640px) {
    .ct-map-title { font-size: 23px; margin-bottom: 14px; }
  }

  .ct-map-company {
    font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
    color: var(--accent-dark);
    margin-bottom: 8px;
  }

  .ct-map-address {
    font-size: 13.5px; font-weight: 500; line-height: 1.7;
    color: var(--text-2);
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(231,223,208,0.7);
  }
  @media (min-width: 640px) {
    .ct-map-address { font-size: 14px; margin-bottom: 24px; padding-bottom: 24px; }
  }

  .ct-map-meta-row {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 11px 0;
  }
  .ct-map-meta-icon {
    width: 34px; height: 34px; border-radius: 10px;
    background: var(--surface);
    border: 1px solid var(--border-strong);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 1px 2px rgba(32,28,22,0.05);
  }
  .ct-map-meta-text { display: flex; flex-direction: column; gap: 2px; padding-top: 3px; }
  .ct-map-meta-label {
    font-size: 10.5px; letter-spacing: 1.3px; text-transform: uppercase;
    color: var(--text-3); font-weight: 700;
  }
  .ct-map-meta-value { font-size: 13.5px; font-weight: 600; color: var(--text-1); line-height: 1.4; }

  .ct-map-directions-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 100%; padding: 14px 18px; margin-top: 18px;
    background: var(--surface);
    color: var(--text-1);
    border: 1.5px solid var(--border-strong); border-radius: var(--radius-md); cursor: pointer;
    font-family: var(--font-body);
    font-size: 13px; font-weight: 700;
    letter-spacing: 0.2px;
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s, transform 0.15s;
  }
  @media (min-width: 640px) {
    .ct-map-directions-btn { padding: 15px 20px; margin-top: 22px; font-size: 13.5px; }
  }
  .ct-map-directions-btn:hover { border-color: var(--steel); background: var(--steel-tint); transform: translateY(-1px); }
  .ct-map-directions-btn:active { transform: translateY(0); }

  .ct-map-frame-wrap {
    position: relative;
    min-height: 280px;
    background: var(--surface-sunk);
  }
  @media (min-width: 640px) {
    .ct-map-frame-wrap { min-height: 340px; }
  }
  @media (min-width: 900px) {
    .ct-map-frame-wrap { min-height: 100%; }
  }

  .ct-map-frame-wrap::after {
    content: '';
    position: absolute; inset: 0;
    box-shadow: inset 0 0 0 1px rgba(32,28,22,0.06);
    pointer-events: none;
    z-index: 2;
  }

  .ct-map-iframe {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    border: 0;
    filter: grayscale(0.28) sepia(0.12) saturate(1.05) contrast(1.02);
  }

  .ct-map-pin-card {
    position: absolute;
    left: 14px; bottom: 14px;
    right: 14px;
    z-index: 3;
    display: flex; align-items: center; gap: 10px;
    padding: 12px 14px;
    background: rgba(254,253,251,0.92);
    backdrop-filter: blur(6px);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    box-shadow: 0 10px 28px -12px rgba(32,28,22,0.28);
  }
  @media (min-width: 480px) {
    .ct-map-pin-card { right: auto; max-width: 280px; left: 16px; bottom: 16px; }
  }

  .ct-map-pin-icon {
    width: 30px; height: 30px; border-radius: 8px;
    background: var(--accent);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 10px -4px rgba(232,120,23,0.5);
  }
  .ct-map-pin-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
  .ct-map-pin-title { font-size: 12px; font-weight: 700; color: var(--text-1); }
  .ct-map-pin-sub { font-size: 10.5px; font-weight: 500; color: var(--text-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .ct-footer-strip {
    max-width: 1200px; margin: 24px auto 0;
    padding: 18px 4px 0;
    border-top: 1px solid var(--border);
    display: flex; flex-direction: column; align-items: flex-start;
    gap: 12px;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 640px) {
    .ct-footer-strip { margin: 32px auto 0; padding: 20px 4px 0; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap; }
  }
  .ct-footer-copy {
    font-size: 11.5px; color: var(--text-3); font-weight: 500;
  }
  @media (min-width: 640px) {
    .ct-footer-copy { font-size: 12px; }
  }
  .ct-footer-links { display: flex; gap: 16px; flex-wrap: wrap; }
  @media (min-width: 640px) {
    .ct-footer-links { gap: 20px; }
  }
  .ct-footer-link {
    font-size: 11.5px; color: var(--text-3); text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
  }
  @media (min-width: 640px) {
    .ct-footer-link { font-size: 12px; }
  }
  .ct-footer-link:hover { color: var(--accent); }

  @keyframes spin { to { transform: rotate(360deg); } }
`;

const FULL_ADDRESS =
  "SUNTECH AND ALLIED INDUSTRIES, Gate no. 170, Near Huma Bakery, Ganesh Nagar, Talawade, Pimpri Chinchwad, Pune - 411062";

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  FULL_ADDRESS
)}&output=embed`;

const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  FULL_ADDRESS
)}`;

export default function Contact() {
  const [form, setForm]       = useState(defaultForm);
  const [toast, setToast]     = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((c) => ({ ...c, [field]: e.target.value }));

  const downloadBrochure = () => {
    const url = `${import.meta.env.BASE_URL}suntech_brochure.pdf`;
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "suntech_brochure.pdf";
    anchor.target = "_blank";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setToast("");

    try {
      const response = await fetch("/api/brochure-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          message: form.message.trim(),
          source: "Contact page",
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Unable to send message. Please try again.");
      }

      setToast("Message sent. Your brochure download will begin shortly.");
      downloadBrochure();
      setForm(defaultForm);
    } catch (err) {
      setToast(err.message || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
      window.setTimeout(() => setToast(""), 4000);
    }
  };

  const msgLen = form.message.length;

  return (
    <>
      <style>{css}</style>

      <div className="ct">
        <main className="ct-page">

          <div className="ct-panel">
            <div className="ct-machine-bg" />
            <div className="ct-watermark" />
            <span className="ct-corner tl" />
            <span className="ct-corner br" />

            <section className="ct-hero">
              <div className="ct-hero-inner">
                <span className="ct-hero-eyebrow">GET IN TOUCH</span>
                <h1 className="ct-hero-title">
                  Let&apos;s build your<br />
                  <span>perfect solution</span>
                </h1>
                <p className="ct-hero-sub">
                  Tell us your packaging requirements — we engineer machines to match every production demand.
                </p>
                <div className="ct-hero-stats">
                  <div className="ct-stat"><strong>500+</strong>machines delivered</div>
                  <div className="ct-stat"><strong>24hr</strong>response time</div>
                  <div className="ct-stat"><strong>Pan India</strong>service</div>
                </div>
              </div>

              <div className="ct-hero-visual">
                
                <div className="ct-hero-visual-fade" />
              </div>
            </section>

            <div className="ct-divider" />

            <div className="ct-body">

              <aside className="ct-info">
                <div className="ct-info-tag">
                  <span className="ct-info-tag-dot" />
                  <span>MAHARASHTRA, INDIA</span>
                </div>

                <div className="ct-info-row">
                  <span className="ct-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#E87817" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.23 11.72 11.72 0 003.7.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.23 1.11l-2.24 2.24z" />
                    </svg>
                  </span>
                  <div className="ct-info-text">
                    <span className="ct-info-label">Phone</span>
                    <a href="tel:+918975091999" className="ct-info-value">+91 89750 91999</a>
                  </div>
                </div>
                <div className="ct-info-row">
                  <span className="ct-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#E87817" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M22 6l-10 7L2 6" />
                      <path d="M2 6h20v12H2z" />
                    </svg>
                  </span>
                  <div className="ct-info-text">
                    <span className="ct-info-label">Email</span>
                    <a href="mailto:sales@suntechpac.com" className="ct-info-value">sales@suntechpac.com</a>
                  </div>
                </div>
                <div className="ct-info-row">
                  <span className="ct-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#E87817" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M12 21s7-6.5 7-11.5A7 7 0 005 9.5C5 14.5 12 21 12 21z" />
                      <circle cx="12" cy="9.5" r="2.2" />
                    </svg>
                  </span>
                  <div className="ct-info-text">
                    <span className="ct-info-label">Address</span>
                    <span className="ct-info-value">Talawade, Pimpri Chinchwad, Pune</span>
                  </div>
                </div>
                <div className="ct-info-row">
                  <span className="ct-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#E87817" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3.5 2" />
                    </svg>
                  </span>
                  <div className="ct-info-text">
                    <span className="ct-info-label">Working Hours</span>
                    <span className="ct-info-value">Mon &ndash; Sat &middot; 9 AM &ndash; 7 PM</span>
                  </div>
                </div>

                <a href="tel:+918975091999" className="ct-cta-btn">
                  <span className="ct-cta-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                      <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.23 11.72 11.72 0 003.7.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.23 1.11l-2.24 2.24z" />
                    </svg>
                  </span>
                  Call Sales
                  <svg viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ marginLeft: "auto" }}>
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </aside>

              <section className="ct-form-card">
                <div className="ct-form-header">
                  <div className="ct-form-header-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#5B7C99" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                  </div>
                  <div className="ct-form-header-text">
                    <h2>Send us a message</h2>
                    <p>We&apos;ll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>

                  <div className="ct-field-row">
                    <div className="ct-field">
                      <label className="ct-label">
                        Name <span className="ct-required">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={handleChange("name")}
                        required
                        className="ct-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="ct-field">
                      <label className="ct-label">
                        Email <span className="ct-required">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={handleChange("email")}
                        required
                        className="ct-input"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="ct-field" style={{ marginBottom: "14px" }}>
                    <label className="ct-label">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      className="ct-input"
                      placeholder="+91 89750 91999"
                    />
                  </div>

                  <div className="ct-field" style={{ marginBottom: "4px" }}>
                    <label className="ct-label">Message</label>
                    <textarea
                      value={form.message}
                      onChange={handleChange("message")}
                      className="ct-textarea"
                      placeholder="Tell us about your machine requirements, production capacity, or any questions…"
                      maxLength={500}
                    />
                    <span className="ct-char-count">{msgLen} / 500</span>
                  </div>

                  <div className="ct-brochure-hint">
                    <span className="ct-brochure-hint-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#5B7C99" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="12" y1="18" x2="12" y2="12" />
                        <line x1="9" y1="15" x2="15" y2="15" />
                      </svg>
                    </span>
                    <p className="ct-brochure-hint-text">
                      <strong>Free Brochure &mdash;</strong> Submit the form and our product brochure will download automatically.
                    </p>
                  </div>

                  <button type="submit" className="ct-submit" disabled={sending}>
                    {sending ? (
                      <>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          width="18"
                          height="18"
                          style={{ animation: "spin 1s linear infinite" }}
                        >
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending message...
                      </>
                    ) : (
                      <>
                        Send Message &amp; Download Brochure
                        <span className="ct-submit-arrow">
                          <svg viewBox="0 0 16 16" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </span>
                      </>
                    )}
                  </button>

                  <div className="ct-trust">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
                      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.5l-3.71 1.95.71-4.12L2 5.5l4.15-.75z" />
                    </svg>
                    Your information is private and will only be used to contact you
                  </div>

                </form>
              </section>
            </div>

            <div className="ct-divider" />

            <div className="ct-map">
              <aside className="ct-map-info">
                <span className="ct-map-eyebrow">
                  <span className="ct-map-eyebrow-dot" />
                  FIND US
                </span>
                <h2 className="ct-map-title">Visit our facility</h2>

                <div className="ct-map-address">
                  <div className="ct-map-company">Suntech and Allied Industries</div>
                  Gate no. 170, Near Huma Bakery, Ganesh Nagar,<br />
                  Talawade, Pimpri Chinchwad, Pune &ndash; 411062
                </div>

                <div className="ct-map-meta-row">
                  <span className="ct-map-meta-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#5B7C99" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <path d="M12 21s7-6.5 7-11.5A7 7 0 005 9.5C5 14.5 12 21 12 21z" />
                      <circle cx="12" cy="9.5" r="2.2" />
                    </svg>
                  </span>
                  <div className="ct-map-meta-text">
                    <span className="ct-map-meta-label">Landmark</span>
                    <span className="ct-map-meta-value">Near Huma Bakery, Talawade</span>
                  </div>
                </div>
                <div className="ct-map-meta-row">
                  <span className="ct-map-meta-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#5B7C99" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <rect x="3" y="11" width="18" height="7" rx="1.5" />
                      <path d="M5 11l1.5-5h11L19 11" />
                      <circle cx="7.5" cy="18" r="1.5" />
                      <circle cx="16.5" cy="18" r="1.5" />
                    </svg>
                  </span>
                  <div className="ct-map-meta-text">
                    <span className="ct-map-meta-label">Area</span>
                    <span className="ct-map-meta-value">Pimpri Chinchwad, Pune</span>
                  </div>
                </div>

                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-map-directions-btn"
                >
                  Get Directions
                  <svg viewBox="0 0 16 16" fill="none" stroke="#5B7C99" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" style={{ marginLeft: "auto" }}>
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </aside>

              <div className="ct-map-frame-wrap">
                <iframe
                  className="ct-map-iframe"
                  src={MAP_EMBED_SRC}
                  title="Suntech and Allied Industries location map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="ct-map-pin-card">
                  <span className="ct-map-pin-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                      <path d="M12 21s7-6.5 7-11.5A7 7 0 005 9.5C5 14.5 12 21 12 21z" />
                      <circle cx="12" cy="9.5" r="2.2" />
                    </svg>
                  </span>
                  <div className="ct-map-pin-text">
                    <span className="ct-map-pin-title">Suntech and Allied Industries</span>
                    <span className="ct-map-pin-sub">Talawade, Pune &ndash; 411062</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ct-footer-strip">
            <span className="ct-footer-copy">&copy; 2025 SunTech Machines. All rights reserved.</span>
            <div className="ct-footer-links">
              <a href="/about" className="ct-footer-link">About</a>
              <a href="/solutions" className="ct-footer-link">Solutions</a>
              <a href="/applications" className="ct-footer-link">Applications</a>
            </div>
          </div>

        </main>
      </div>

      {toast && (
        <div className="ct-toast">
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E87817", flexShrink: 0 }} />
          {toast}
        </div>
      )}
    </>
  );
}