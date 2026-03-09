(() => {
  // ===== SSOT: Role Gate (All pages) =====
  const URL_SITTER = "https://baby-j.site/sign_in?role=sitter&mode=sign_up&lang=ja_jp";
  const URL_TUTORS = "https://baby-j.site/sign_in?role=tutors&mode=sign_up&lang=ja_jp";
  const URL_CONTACT = "https://service.baby-j.site/contact";

  // once guard
  if (document.documentElement.dataset.roleGateBound === "1") return;
  document.documentElement.dataset.roleGateBound = "1";

  const ID_STYLE = "role-gate-style";
  const ID_FORCE = "role-gate-force-top";
  const ID_OVERLAY = "role-gate-overlay";
  const ID_PANEL = "role-gate-panel";

  // ===== SSOT CSS (single) =====
  const CSS = `
:root{
  --rg-navy:#10426F;
  --rg-ink:#102235;

  /* panel paper */
  --rg-panel: rgba(244,242,238,.96);

  --rg-line: rgba(255,255,255,.62);
  --rg-line2: rgba(16,34,53,.10);

  --rg-shadow: 0 26px 70px rgba(16,34,53,.20);
  --rg-shadow2: 0 12px 28px rgba(16,34,53,.12);

  --rg-radius: 28px;
  --rg-ico: 186px;
}

/* =========================================================
   1) OVERLAY SSOT (background / bokeh / dust)
========================================================= */
#${ID_OVERLAY}{
  position: fixed;
  inset: 0;
  z-index: 2147483646;
  isolation: isolate;

  display: grid;
  place-items: center;

  background:
    radial-gradient(1200px 520px at 52% 102%,
      rgba(255,214,160,.34) 0%,
      rgba(255,214,160,0) 74%),
    radial-gradient(1200px 820px at 55% 56%,
      rgba(255,214,160,.26) 0%,
      rgba(255,214,160,0) 66%),
    radial-gradient(1200px 560px at 52% 104%,
      rgba(255,214,160,.22) 0%,
      rgba(255,214,160,0) 72%),
    radial-gradient(900px 620px at 18% 52%,
      rgba(255,214,160,.08) 0%,
      rgba(255,214,160,0) 70%),
    radial-gradient(900px 620px at 86% 50%,
      rgba(255,214,160,.08) 0%,
      rgba(255,214,160,0) 70%),
    rgba(16, 28, 46, .78);

  backdrop-filter: blur(12px) saturate(110%);
  opacity: 0;
  pointer-events: none;
  transition: opacity .22s ease;

  overflow: auto;
  padding: 26px 12px;
}

html.is-role-gate-open #${ID_OVERLAY}{
  opacity: 1;
  pointer-events: auto;
}

/* bokeh / warm haze (SINGLE ::after SSOT) */
#${ID_OVERLAY}::after{
  content:"";
  position:absolute;
  inset:-14%;
  pointer-events:none;
  z-index: 0;

  background:
    /* cool center glow */
    radial-gradient(980px 760px at 50% 42%,
      rgba(160, 200, 235, .16),
      rgba(160, 200, 235, 0) 70%),

    /* warm core */
    radial-gradient(920px 720px at 50% 58%,
      rgba(255,214,160,.40),
      rgba(255,214,160,0) 76%),

    /* big bokeh (few, big, classy) */
    radial-gradient(circle at 44% 52%, rgba(255,230,190,.16) 0 110px, transparent 210px),
    radial-gradient(circle at 58% 46%, rgba(255,225,180,.14) 0 95px,  transparent 190px),
    radial-gradient(circle at 52% 62%, rgba(255,240,210,.12) 0 85px,  transparent 175px),

    /* small warm specks */
    radial-gradient(circle at 28% 42%, rgba(255,224,180,.16) 0 22px, transparent 60px),
    radial-gradient(circle at 72% 58%, rgba(255,224,180,.12) 0 18px, transparent 56px),
    radial-gradient(circle at 54% 34%, rgba(255,224,180,.10) 0 14px, transparent 48px),

    /* side haze */
    radial-gradient(circle at 18% 54%, rgba(150, 195, 235, .08) 0 160px, transparent 320px),
    radial-gradient(circle at 86% 52%, rgba(150, 195, 235, .08) 0 160px, transparent 320px);

  filter: blur(18px) saturate(120%) brightness(1.06);
  mix-blend-mode: screen;
  opacity: .92;
}

/* dust / grain (front) */
#${ID_OVERLAY}::before{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index: 1;

  background-image:
    /* fine grain */
    radial-gradient(circle at 12% 22%, rgba(255,236,210,.10) 0 .7px, rgba(255,236,210,0) 2.4px),
    radial-gradient(circle at 66% 18%, rgba(255,236,210,.08) 0 .9px, rgba(255,236,210,0) 2.8px),
    radial-gradient(circle at 82% 64%, rgba(255,236,210,.07) 0 1.1px, rgba(255,236,210,0) 3.2px),

    /* mid dust */
    radial-gradient(circle at 18% 28%, rgba(255,234,200,.16) 0 1.8px, rgba(255,234,200,0) 4.8px),
    radial-gradient(circle at 72% 22%, rgba(255,234,200,.14) 0 2.1px, rgba(255,234,200,0) 5.4px),
    radial-gradient(circle at 34% 62%, rgba(255,234,200,.12) 0 1.9px, rgba(255,234,200,0) 5.0px),
    radial-gradient(circle at 56% 76%, rgba(255,234,200,.14) 0 2.3px, rgba(255,234,200,0) 5.8px),

    /* sparse big specks */
    radial-gradient(circle at 40% 44%, rgba(255,244,220,.10) 0 3.2px, rgba(255,244,220,0) 9.0px),
    radial-gradient(circle at 62% 58%, rgba(255,244,220,.08) 0 3.6px, rgba(255,244,220,0) 10.0px);

  background-size:
    140px 140px, 180px 180px, 200px 200px,
    320px 320px, 360px 360px, 340px 340px, 380px 380px,
    760px 760px, 820px 820px;

  background-position:
    0 0, 40px 70px, 120px 40px,
    0 0, 120px 80px, 60px 140px, 180px 30px,
    0 0, 220px 160px;

  background-repeat: repeat;
  mix-blend-mode: screen;
  opacity: .52;
  filter: blur(.9px);

  /* center focus mask */
  -webkit-mask-image: radial-gradient(920px 720px at 50% 52%,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,.92) 62%,
    rgba(0,0,0,.35) 86%,
    rgba(0,0,0,0) 100%);
          mask-image: radial-gradient(920px 720px at 50% 52%,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,.92) 62%,
    rgba(0,0,0,.35) 86%,
    rgba(0,0,0,0) 100%);
}

/* =========================================================
   2) PANEL / CARD SSOT (no “card disappear”)
========================================================= */
#${ID_PANEL}{
  z-index: 2147483647;

  width: min(660px, calc(100vw - 104px));
  max-height: calc(100dvh - 64px);
  border-radius: var(--rg-radius);
  overflow: hidden;

  background:
    radial-gradient(120% 90% at 50% 0%,
      rgba(255,255,255,.65) 0%,
      rgba(255,255,255,0) 55%),
    rgba(247,244,239,.92);

  border: 1px solid rgba(255,255,255,.42);

  box-shadow:
    0 40px 100px rgba(16,34,53,.22),
    0 10px 24px rgba(16,34,53,.12);

  opacity: 0;
  pointer-events: none;
  transition: opacity .18s ease;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%) translateY(18px);
  display: none;
}

#${ID_PANEL}::before{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  border-radius: inherit;

  background:
    radial-gradient(120% 85% at 50% 0%,
      rgba(255,248,238,.58) 0%,
      rgba(255,248,238,0) 58%),
    linear-gradient(180deg,
      rgba(173,133,63,.10),
      rgba(173,133,63,0) 18%),
    radial-gradient(900px 520px at 50% 85%,
      rgba(255,214,160,.14) 0%,
      rgba(255,214,160,0) 70%);

  mix-blend-mode: multiply;
  opacity: .85;
}

#${ID_PANEL}.is-on{
  opacity: 1;
  pointer-events: auto;
  display: block;
}

/* close */
#${ID_PANEL} .rg-x{
  position:absolute;
  top: 10px;
  right: 10px;

  width: 34px;
  height: 34px;

  border-radius: 999px;
  background: rgba(255,255,255,.28);
  border: 1px solid rgba(255,255,255,.26);

  color: rgba(16,34,53,.45);
  font-size: 16px;
  line-height: 34px;

  display: grid;
  place-items: center;

  box-shadow:
    0 4px 12px rgba(16,34,53,.08),
    inset 0 1px 0 rgba(255,255,255,.45);

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
#${ID_PANEL} .rg-x:hover{
  background: rgba(255,255,255,.44);
  color: rgba(16,34,53,.70);
}

/* header (panel内) */
#${ID_PANEL} .rg-h{
  margin: 0;
  padding: 30px 34px 0;
  text-align:center;
  color: var(--rg-navy);
  font-weight: 800;
  letter-spacing: .08em;
  font-size: 22px;
}
#${ID_PANEL} .rg-lead{
  margin: 0;
  padding: 10px 34px 0;
  text-align:center;
  color: rgba(16,34,53,.62);
  letter-spacing: .04em;
  font-size: 13px;
  line-height: 1.7;
  opacity: .85;
}

/* cards layout */
#${ID_PANEL} .rg-cards{
  padding: 16px 24px 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 290px));
  justify-content: center;
  gap: 12px;
  max-width: 620px;
  margin: 0 auto;
}

#${ID_PANEL} .rg-card{
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;

  padding: 14px 14px 12px;
  text-align: center;

  border: 1px solid rgba(255,255,255,.44);

  box-shadow:
    0 18px 38px rgba(16,34,53,.10),
    0 6px 16px rgba(16,34,53,.08);

  background: linear-gradient(180deg, rgba(248,245,240,.92), rgba(238,233,226,.82));
}
#${ID_PANEL} .rg-card:first-child{
  background: linear-gradient(180deg, rgba(255,244,232,.96), rgba(255,238,224,.74));
}
#${ID_PANEL} .rg-card:last-child{
  background: linear-gradient(180deg, rgba(240,246,255,.96), rgba(228,238,255,.76));
}

/* inner tile (SINGLE ::before SSOT for card) */
#${ID_PANEL} .rg-card::before{
  content:"";
  position:absolute;
  inset: 10px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(255,255,255,.68), rgba(255,255,255,.36));
  border: 1px solid rgba(255,255,255,.42);
  box-shadow: 0 10px 26px rgba(16,34,53,.10);
  pointer-events:none;
}

/* icon block: centered */
#${ID_PANEL} .rg-ill{
  position: relative;
  z-index: 1;
  height: 180px;
  display: grid;
  place-items: center;
}
#${ID_PANEL} .rg-ico{
  width: var(--rg-ico);
  height: var(--rg-ico);
  display:block;
  filter:
    drop-shadow(0 18px 28px rgba(16,34,53,.18))
    drop-shadow(0 0 22px rgba(255,220,170,.55));
}

/* sparkle behind icon */
#${ID_PANEL} .rg-ill::before{
  content:"";
  position:absolute;
  inset: 0;
  margin: auto;
  width: calc(var(--rg-ico) + 24px);
  height: calc(var(--rg-ico) + 24px);
  border-radius: 50%;
  background:
    radial-gradient(circle at 40% 40%, rgba(255,255,255,.52), rgba(255,255,255,0) 62%),
    radial-gradient(circle at 62% 32%, rgba(238,176,57,.20), rgba(238,176,57,0) 64%);
  filter: blur(6px);
  opacity: .85;
  z-index: 0;
}

/* texts */
#${ID_PANEL} .rg-title{
  position: relative; z-index: 1;
  margin: 6px 0 0;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: .06em;
  color: rgba(16,34,53,.88);
}
#${ID_PANEL} .rg-desc{
  position: relative; z-index: 1;
  margin: 8px 0 0;
  font-size: 13px;
  color: rgba(16,34,53,.56);
}

/* CTA pill */
#${ID_PANEL} .rg-cta{
  position: relative; z-index: 1;
  margin: 14px auto 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  border-radius: 999px;

  background: rgba(255,243,230,.78);
  border: 1px solid rgba(173,133,63,.28);
  color: rgba(16,34,53,.70);

  font-weight: 800;
  letter-spacing: .04em;

  box-shadow:
    0 10px 22px rgba(16,34,53,.10),
    0 1px 0 rgba(255,255,255,.55) inset;
}
#${ID_PANEL} .rg-arrow{ display:none !important; }

/* bottom */
#${ID_PANEL} .rg-bottom{
  margin: 18px 0 0;
  padding: 14px 34px 0;
  text-align:center;
  color: rgba(16,34,53,.66);
  font-size: 12px;
  line-height: 1.7;
  letter-spacing: .02em;
  opacity: .92;
}

/* foot */
#${ID_PANEL} .rg-foot{
  justify-content: center;
  text-align: center;

  margin-top: 14px;
  padding: 14px 34px 22px;

  border-top: 1px solid rgba(16,34,53,.07);
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0) 0%,
    rgba(255,214,160,.06) 100%
  );
  box-shadow: inset 0 1px 0 rgba(255,255,255,.45);
  opacity: .86;
}

#${ID_PANEL} .rg-link{
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;

  color: rgba(16,34,53,.70) !important;
  font-weight: 600 !important;
  text-decoration: underline !important;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  text-decoration-color: rgba(173,133,63,.40);
}
#${ID_PANEL} .rg-link:hover{
  color: rgba(16,34,53,.86) !important;
  text-decoration-color: rgba(173,133,63,.60);
}

/* =========================================================
   Responsive: SP unfix panel (no fixed accident)
========================================================= 
@media (max-width: 900px){
  #${ID_OVERLAY}{
    place-items: start center;
    padding: 18px 10px 22px;
  }

  #${ID_PANEL}{
    position: relative;
    left: auto; top: auto;
    transform: none;

    width: min(560px, calc(100vw - 20px));
    max-height: none;
    margin: 0 auto;

    border-radius: 26px;
  }

  #${ID_PANEL} .rg-h{ padding: 22px 16px 0; font-size: 20px; }
  #${ID_PANEL} .rg-lead{ padding: 10px 16px 0; }
  #${ID_PANEL} .rg-cards{ padding: 16px 16px 0; grid-template-columns: 1fr; }
  #${ID_PANEL} .rg-bottom{ padding: 14px 16px 0; }
  #${ID_PANEL} .rg-foot{ padding: 12px 16px 18px; flex-wrap: wrap; }

  #${ID_PANEL} .rg-ill{ height: 170px; }
  :root{ --rg-ico: 176px; }
}
*/
@media (prefers-reduced-motion: reduce){
  #${ID_OVERLAY}, #${ID_PANEL}{ transition:none !important; }
}

/* ===== HERO outside (restore) ===== */
#${ID_OVERLAY} .rg-h,
#${ID_OVERLAY} .rg-lead{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: min(760px, calc(100vw - 48px));
  text-align: center;
  z-index: 2147483646;
  pointer-events: none;
  margin: 0;
}

#${ID_OVERLAY} .rg-h{
  top: clamp(44px, 6vh, 88px);
  font-size: clamp(18px, 2.1vw, 22px);
  font-weight: 700;
  letter-spacing: .06em;
  color: rgba(255,255,255,.88);
  text-shadow:
    0 18px 44px rgba(0,0,0,.28),
    0 2px 10px rgba(0,0,0,.18);
}

#${ID_OVERLAY} .rg-lead{
  top: calc(clamp(44px, 6vh, 88px) + 44px);
  font-size: clamp(12.5px, 1.35vw, 14px);
  line-height: 1.85;
  letter-spacing: .03em;
  color: rgba(255,255,255,.68);
  text-shadow:
    0 18px 44px rgba(0,0,0,.22),
    0 2px 10px rgba(0,0,0,.14);
}
/* ================================
   PATCH: GOLD SHIMMER RESTORE
   - overlay::after は1枚に固定
   - 黄の主役は panel::after (中心だけ)
================================ */

/* 1) overlay::after を“上書き確定”で安定化（青/金の空気だけ） */
#${ID_OVERLAY}::after{
  content:"";
  position:absolute;
  inset:-14%;
  pointer-events:none;
  z-index: 0;

  background:
    /* cool lift */
    radial-gradient(980px 760px at 50% 42%,
      rgba(160, 200, 235, .14),
      rgba(160, 200, 235, 0) 70%),
    /* warm base (弱め。主役はpanel側へ) */
    radial-gradient(980px 760px at 50% 62%,
      rgba(255,214,160,.18),
      rgba(255,214,160,0) 74%);

  filter: blur(22px) saturate(120%) brightness(1.06);
  mix-blend-mode: screen;
  opacity: .90;
}

/* 2) “黄色シュワシュワ”の主役：パネルの周りだけ金の霞を作る */

  #${ID_PANEL}::after{
  content:"";
  position:absolute;
  inset:-40px; 
  pointer-events:none;
  z-index: -1; 

  background:
    radial-gradient(900px 520px at 50% 62%,
      rgba(238,176,57,.22) 0%,
      rgba(238,176,57,0) 62%),
    radial-gradient(760px 420px at 50% 62%,
      rgba(255,214,160,.20) 0%,
      rgba(255,214,160,0) 66%);

  filter: blur(34px);
  opacity: .85;

  -webkit-mask-image: radial-gradient(circle at 50% 62%,
    #000 0%,
    #000 34%,
    rgba(0,0,0,.55) 52%,
    transparent 70%);
          mask-image: radial-gradient(circle at 50% 62%,
    #000 0%,
    #000 34%,
    rgba(0,0,0,.55) 52%,
    transparent 70%);
}

/* 3) 粒（シュワシュワ）を“見える”側へ（強める） */
#${ID_OVERLAY}::before{
  opacity: .72;                 /* ←ここが効く */
  filter: blur(.7px) saturate(125%);
  mix-blend-mode: screen;

  /* 粒色をちょい黄金寄りに */
  background-image:
    radial-gradient(circle at 18% 28%, rgba(255,230,180,.22) 0 2.0px, rgba(255,230,180,0) 5.2px),
    radial-gradient(circle at 72% 22%, rgba(255,230,180,.20) 0 2.2px, rgba(255,230,180,0) 5.6px),
    radial-gradient(circle at 34% 62%, rgba(255,230,180,.18) 0 2.0px, rgba(255,230,180,0) 5.2px),
    radial-gradient(circle at 56% 76%, rgba(255,230,180,.20) 0 2.4px, rgba(255,230,180,0) 6.0px),

    /* たまに大粒（“完成感”の粒） */
    radial-gradient(circle at 40% 44%, rgba(255,244,220,.14) 0 3.6px, rgba(255,244,220,0) 10.0px),
    radial-gradient(circle at 62% 58%, rgba(255,244,220,.12) 0 4.0px, rgba(255,244,220,0) 11.0px);
}
/* =========================
   POSITION SSOT (only)
   - card/panel center
   - hero stays visible
   - no bottom white spill by layout
========================= */

/* overlay: center anchor */
#${ID_OVERLAY}{
  display: grid;
  place-items: center;         /* ←常に中央基準 */
  padding: 0;                  /* ←余計な下落ち防止 */
  overflow: hidden;            /* ←下に落ちて見える事故を止める */
}

/* panel: true center */
#${ID_PANEL}{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);  /* ←これを“最後に勝たせる” */
  margin: 0;
}

/* hero: overlay上に固定で見せる（消え事故防止） */
#${ID_OVERLAY} .rg-h,
#${ID_OVERLAY} .rg-lead{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: min(860px, calc(100vw - 56px));
  z-index: 2147483646;
  pointer-events: none;
}

#${ID_OVERLAY} .rg-h{
  top: clamp(44px, 6vh, 88px);
}
#${ID_OVERLAY} .rg-lead{
  top: calc(clamp(44px, 6vh, 88px) + 44px);
}

/* SP SSOT (final winner) */
@media (max-width: 900px){
  #${ID_OVERLAY}{
    place-items: start center;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    -webkit-overflow-scrolling: touch;

    /* 固定見出し( rg-h / rg-lead )のぶん、天井を確保 */
    padding: 128px 10px 22px !important;
  }

  #${ID_PANEL}{
    position: relative !important;
    left: auto !important; top: auto !important;
    transform: none !important;

    width: min(560px, calc(100vw - 20px));
    max-height: none !important;
    overflow: visible !important;

    margin: 0 auto !important;
    border-radius: 26px;
  }

  #${ID_PANEL} .rg-h{ padding: 22px 16px 0; font-size: 20px; }
  #${ID_PANEL} .rg-lead{ padding: 10px 16px 0; }
  #${ID_PANEL} .rg-cards{
    padding: 16px 16px 28px;         /* ←下まで届く余白 */
    grid-template-columns: 1fr;
  }
  #${ID_PANEL} .rg-bottom{ padding: 14px 16px 0; }
  #${ID_PANEL} .rg-foot{ padding: 12px 16px 18px; flex-wrap: wrap; }

  #${ID_PANEL} .rg-ill{ height: 170px; }
  :root{ --rg-ico: 176px; }
}  

/* FINAL LOCK: panel center SSOT */
#${ID_PANEL}{
  position: fixed !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%,-50%) translateY(18px) !important;
}
  /* SP: panel fits viewport (no overflow spill) */
@media (max-width: 900px){
  #${ID_PANEL}{
    width: calc(100vw - 24px) !important;
    max-height: calc(100dvh - 24px) !important;

    /* 中身だけスクロールさせる */
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;

    /* SPは縦ズレ演出いらない */
    transform: translate(-50%,-50%) !important;
  }

  /* ついでに下の呼吸 */
  #${ID_PANEL} .rg-cards{ padding-bottom: 24px !important; }
}

/* SP: 1-screen compact mode (iPhone SE OK) */
@media (max-width: 420px){
  /* panelは画面内に固定 */
  #${ID_PANEL}{
    width: calc(100vw - 20px) !important;
    max-height: calc(100dvh - 20px) !important;
    overflow: hidden !important;          /* 1画面狙いなので基本スクロールさせない */
  }

  /* 見出しを少し詰める */
  #${ID_PANEL} .rg-h{ padding: 18px 16px 0 !important; font-size: 18px !important; }
  #${ID_PANEL} .rg-lead{ padding: 8px 16px 0 !important; font-size: 12px !important; line-height: 1.55 !important; }

  /* カード間と内側余白を圧縮 */
  #${ID_PANEL} .rg-cards{
    padding: 12px 14px 0 !important;
    gap: 10px !important;
  }
  #${ID_PANEL} .rg-card{ padding: 12px 12px 10px !important; }

  /* アイコン領域を圧縮（ここが一番効く） */
  #${ID_PANEL} .rg-ill{ height: 132px !important; }
  :root{ --rg-ico: 138px !important; }

  /* テキストを少しだけ締める */
  #${ID_PANEL} .rg-title{ font-size: 18px !important; margin-top: 4px !important; }
  #${ID_PANEL} .rg-desc{ font-size: 12px !important; margin-top: 6px !important; line-height: 1.45 !important; }

  /* CTAを薄く短く */
  #${ID_PANEL} .rg-cta{ margin: 10px auto 4px !important; padding: 8px 16px !important; font-size: 12px !important; }

  /* 下部説明とフッターを圧縮（消さない） */
  #${ID_PANEL} .rg-bottom{ margin-top: 10px !important; padding: 10px 16px 0 !important; font-size: 11px !important; line-height: 1.55 !important; }
  #${ID_PANEL} .rg-foot{ margin-top: 10px !important; padding: 10px 16px 14px !important; }
}

/* SP: 説明文を左揃えにしつつ中央配置 */
@media (max-width: 420px){

  #${ID_PANEL} .rg-bottom{
    text-align: left !important;          /* 左揃え */
    max-width: 320px;                     /* 読みやすい幅に制限 */
    margin-left: auto !important;
    margin-right: auto !important;        /* ブロックは中央 */
    line-height: 1.6 !important;
    letter-spacing: .02em;
  }

  #${ID_PANEL} .rg-foot{
    text-align: center;                   /* CTAはセンターのまま */
  }
}
 
@media (max-width: 420px){
  #${ID_PANEL} .rg-bottom{
    color: rgba(16,34,53,.58);
    line-height: 1.7;
  }

  #${ID_PANEL} .rg-foot{
    font-size: 13px;
    letter-spacing: .04em;
  }
}  
`.trim();

  // ===== FORCE (visibility kill for floating UI) =====
  const FORCE = `
html.is-role-gate-open .footer-cta-slot,
html.is-role-gate-open aside.floating-cta,
html.is-role-gate-open [data-to-top],
html.is-role-gate-open .back-to-top{
  opacity:0 !important;
  pointer-events:none !important;
}
`.trim();

  function mountStyles() {
    let st = document.getElementById(ID_STYLE);
    if (!st) {
      st = document.createElement("style");
      st.id = ID_STYLE;
      document.head.appendChild(st);
    }
    st.textContent = CSS;

    let sf = document.getElementById(ID_FORCE);
    if (!sf) {
      sf = document.createElement("style");
      sf.id = ID_FORCE;
      document.head.appendChild(sf);
    }
    sf.textContent = FORCE;
  }

  function ensureUI() {
    mountStyles();

    let overlay = document.getElementById(ID_OVERLAY);
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = ID_OVERLAY;
      overlay.addEventListener("click", closeGate);
      document.body.appendChild(overlay);
    }

    let panel = document.getElementById(ID_PANEL);
    if (!panel) {
      panel = document.createElement("div");
      panel.id = ID_PANEL;
      panel.setAttribute("role", "dialog");
      panel.setAttribute("aria-modal", "true");
      panel.innerHTML = `
<button class="rg-x" type="button" aria-label="閉じる" data-close="1">×</button>
<div class="rg-cards">
  <button class="rg-card" type="button" data-role="sitter">
    <div class="rg-ill">
      <img class="rg-ico" src="./bbj-images/icon_nursing_childcare_01.svg" alt="">
    </div>
    <div class="rg-title">シッターの世界へ</div>
    <div class="rg-desc">看護・保育の専門を活かす</div>
    <div class="rg-cta">この分野で始める <span class="rg-arrow">›</span></div>
  </button>

  <button class="rg-card" type="button" data-role="tutors">
    <div class="rg-ill">
      <img class="rg-ico" src="./bbj-images/icon_education_book_01.svg" alt="">
    </div>
    <div class="rg-title">教える楽しさの世界へ</div>
    <div class="rg-desc">家庭教師として活躍する</div>
    <div class="rg-cta">この分野で始める <span class="rg-arrow">›</span></div>
  </button>
</div>

<div class="rg-bottom">
  看護・教育分野で専門性をお持ちの方へ。多くのご家庭が、その力を必要としています。
</div>

<div class="rg-foot">
  まずは相談したい方はこちら：
  <a class="rg-link" href="${URL_CONTACT}">相談する</a>
</div>
      `.trim();

      const hero = document.createElement("div");
      hero.className = "rg-hero";
      hero.innerHTML = `
  <div class="rg-h">あなたの専門性が、求められています。</div>
  <div class="rg-lead">活かしたい専門性を選んで、次に進んでください</div>
`;

      overlay.prepend(hero);

      panel.addEventListener("click", (e) => {
        if (e.target.closest("[data-close='1']")) { closeGate(); return; }
        const card = e.target.closest(".rg-card");
        if (!card) return;
        const role = card.dataset.role;
        closeGate();
        if (role === "sitter") window.location.assign(URL_SITTER);
        if (role === "tutors") window.location.assign(URL_TUTORS);
      });

      document.body.appendChild(panel);
    }

    return { overlay, panel };
  }

  function openGate() {
    const { overlay, panel } = ensureUI();
    document.documentElement.classList.add("is-role-gate-open");
    overlay.classList.add("is-on");
    panel.classList.add("is-on");
  }

  function closeGate() {
    const o = document.getElementById(ID_OVERLAY);
    const p = document.getElementById(ID_PANEL);
    if (o) o.classList.remove("is-on");
    if (p) p.classList.remove("is-on");
    document.documentElement.classList.remove("is-role-gate-open");
  }

  // ESC close
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!document.documentElement.classList.contains("is-role-gate-open")) return;
    closeGate();
  });

  // ---- intent detection ----
  const norm = (s) => (s || "").replace(/\s+/g, " ").trim();
  const txt = (el) => norm(el?.textContent || "");
  const hrefOf = (a) => norm(a?.getAttribute?.("href") || "");

  function isContact(a) {
    const t = txt(a);
    const h = hrefOf(a);
    if (a.classList?.contains("is-secondary")) return true;
    if (/相談/.test(t)) return true;
    if (/\/contact\b/.test(h)) return true;
    if (h === "#contact") return true;
    return false;
  }

  function isRegister(a) {
    const t = txt(a);
    const h = hrefOf(a);
    if (a.classList?.contains("is-primary")) return true;
    if (/登録/.test(t)) return true;
    if (h === "#start") return true;
    if (/baby-j\.site\/sign_in/.test(h)) return true;
    // 追従CTA内でも「登録ボタン」だけ登録扱い（FAQなどは除外）
    if (a.closest?.("aside.floating-cta")) {
      if (a.classList?.contains("work-float-cta__btn")) return true; // 今すぐ登録
      if (/登録/.test(t)) return true; // 念のため文字でも担保
      return false;
    } return false;
  }

  function hasRole(a) {
    return /[?&]role=/.test(hrefOf(a));
  }

  // ---- global capture ----
  document.addEventListener("click", (e) => {
    const el = e.target.closest("a, button");
    if (!el) return;

    if (el.matches("a") && isContact(el)) {
      e.preventDefault();
      window.location.assign(URL_CONTACT);
      return;
    }

    if (el.matches("a")) {
      if (!isRegister(el)) return;
      if (hasRole(el)) return;
      e.preventDefault();
      openGate();
      return;
    }

    if (el.matches("button") && el.closest("aside.floating-cta")) {
      e.preventDefault();
      openGate();
    }
  }, true);

  // ---- BFCache safety ----
  window.addEventListener("pageshow", () => {
    const o = document.getElementById(ID_OVERLAY);
    const p = document.getElementById(ID_PANEL);
    const open = !!(o?.classList.contains("is-on") && p?.classList.contains("is-on"));
    if (!open) document.documentElement.classList.remove("is-role-gate-open");
  });

  window.__BBJ_ROLE_GATE__ = { openGate, closeGate };
})();
