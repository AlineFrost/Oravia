# Oravia

<link rel="stylesheet" href="../../css/oravia-magazine.css?v=20260825-1205">

<!-- ISSUE1_CRITICAL_LAYOUT_START -->
<style>
/* Critical Issue 1 layout lives here so the cover/contents cannot be broken by a cached older magazine stylesheet. */
.oravia-magazine-shell .mag-contents-title,
.md-typeset .oravia-magazine-shell .mag-contents-title {
  margin:0 0 1.35rem!important;padding:0!important;border:0!important;
  color:#18212a!important;font:700 2.2rem/1 Lora,Georgia,"Times New Roman",serif!important;
  letter-spacing:-.025em!important;
}
.oravia-magazine-shell .mag-toc {display:block!important;width:100%!important;margin:.2rem 0 0!important;padding:0!important;column-count:1!important;columns:auto!important;}
.oravia-magazine-shell .mag-toc-row {display:grid!important;grid-template-columns:minmax(0,1fr) 3.2rem!important;align-items:baseline!important;gap:1.25rem!important;width:100%!important;margin:0!important;padding:.58rem 0 .62rem!important;border-bottom:1px solid rgba(24,33,42,.15)!important;}
.oravia-magazine-shell .mag-toc-name,.oravia-magazine-shell .mag-toc-page {display:block!important;position:static!important;margin:0!important;padding:0!important;border:0!important;line-height:1.15!important;}
.oravia-magazine-shell .mag-toc-name {color:#18212a!important;font:500 1.28rem/1.15 Lora,Georgia,"Times New Roman",serif!important;}
.oravia-magazine-shell .mag-toc-page {justify-self:end!important;text-align:right!important;color:#61707a!important;font:600 1.08rem/1.15 Lora,Georgia,"Times New Roman",serif!important;font-variant-numeric:tabular-nums!important;}

.oravia-magazine-shell .mag-page.mag-cover .cover-a {--cover-image:linear-gradient(180deg,rgba(255,238,199,.08),rgba(24,22,17,.12)),linear-gradient(145deg,#d9c59d 0%,#a8936e 44%,#4d493b 100%);position:relative!important;display:block!important;height:1000px!important;min-height:1000px!important;padding:0!important;overflow:hidden!important;background:#f4ecdd!important;font-family:Georgia,"Times New Roman",serif!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a-masthead {position:absolute!important;inset:0 0 auto 0!important;z-index:10!important;height:160px!important;padding:36px 54px 22px!important;background:#f4ecdd!important;border:0!important;color:#171b1e!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-title,.md-typeset .oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-title {display:block!important;position:static!important;margin:0!important;padding:0!important;border:0!important;color:#171b1e!important;background:transparent!important;font:400 68px/.9 Georgia,"Times New Roman",serif!important;letter-spacing:-.05em!important;text-decoration:none!important;text-shadow:none!important;white-space:nowrap!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-gon {position:absolute!important;right:55px!important;bottom:22px!important;margin:0!important;color:#171b1e!important;font:400 20px/1 Georgia,"Times New Roman",serif!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-photo {position:absolute!important;inset:160px 0 0!important;z-index:1!important;display:block!important;background-color:#948366!important;background-image:var(--cover-image)!important;background-position:center!important;background-size:cover!important;background-repeat:no-repeat!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-photo::after {content:""!important;position:absolute!important;inset:0!important;display:block!important;background:linear-gradient(180deg,rgba(0,0,0,0) 28%,rgba(10,12,11,.10) 48%,rgba(8,10,9,.58) 72%,rgba(7,9,8,.88) 100%)!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a-bottom {position:absolute!important;left:54px!important;right:54px!important;bottom:52px!important;z-index:20!important;display:grid!important;grid-template-columns:minmax(0,1.35fr) minmax(150px,.9fr)!important;gap:30px!important;align-items:end!important;color:#fff!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a-feature {min-width:0!important;margin:0!important;padding:0 6px 0 0!important;color:#fff!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-feature-title,.md-typeset .oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-feature-title {margin:0 0 12px!important;padding:0!important;border:0!important;color:#fff!important;font:400 64px/.92 Georgia,"Times New Roman",serif!important;letter-spacing:-.035em!important;text-shadow:0 2px 14px rgba(0,0,0,.30)!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-feature-deck,.md-typeset .oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-feature-deck {max-width:390px!important;margin:0!important;padding:0!important;color:#fff!important;font:400 26px/1.18 Georgia,"Times New Roman",serif!important;text-shadow:0 1px 9px rgba(0,0,0,.30)!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a .cover-feature-rule {display:block!important;width:64px!important;height:3px!important;margin:22px 0 0!important;padding:0!important;border:0!important;background:#d0a14d!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a-sections {display:grid!important;grid-template-columns:1fr!important;gap:12px!important;align-self:stretch!important;align-content:end!important;min-height:214px!important;margin:0!important;padding:9px 0 6px 30px!important;border:0!important;border-left:1px solid rgba(255,255,255,.72)!important;background:transparent!important;color:#fff!important;}
.oravia-magazine-shell .mag-page.mag-cover .cover-a-sections span,.oravia-magazine-shell .mag-page.mag-cover .cover-a-sections .oravia-word {display:block!important;position:static!important;margin:0!important;padding:0!important;border:0!important;background:transparent!important;color:#fff!important;font:400 30px/1.05 Georgia,"Times New Roman",serif!important;text-decoration:none!important;text-shadow:0 1px 10px rgba(0,0,0,.55)!important;}
</style>
<!-- ISSUE1_CRITICAL_LAYOUT_END -->
<!-- ISSUE1_CIUREVA_START -->
<style>
/* ciureva photo pages. Each .mag-ciureva-page is one paginator block with a fixed height (set in ISSUE1_LAYOUT):
   it fits on one page, and two of them never fit together, so photos 1-3 and 4-6 land on separate pages. */
.oravia-magazine-shell .mag-ciureva-page {display:flex!important;flex-direction:column!important;margin:0!important;padding:0!important;}
/* page 1: big photo + tall obelisk on top; bubble + skull (whole photo, 4:3) below */
.oravia-magazine-shell .mag-ciureva-page.page-a {display:grid!important;grid-template-columns:301fr 183fr 184fr!important;grid-template-rows:auto minmax(0,1fr)!important;grid-template-areas:"hero hero tall" "text side side"!important;gap:8px!important;}
.oravia-magazine-shell .page-a .cell-hero {grid-area:hero!important;aspect-ratio:8 / 7!important;}
.oravia-magazine-shell .page-a .cell-hero img {object-position:center 15%!important;}
.oravia-magazine-shell .page-a .cell-tall {grid-area:tall!important;}
.oravia-magazine-shell .page-a .cell-side {grid-area:side!important;}
/* page 2: wide photo on top, two below */
.oravia-magazine-shell .mag-ciureva-grid {flex:1 1 auto!important;min-height:0!important;display:grid!important;gap:8px!important;margin:0!important;}
.oravia-magazine-shell .mag-ciureva-grid.grid-b {grid-template-columns:1fr 1fr!important;grid-template-rows:1.25fr 1fr!important;}
.oravia-magazine-shell .mag-ciureva-grid.grid-b .cell-1 {grid-column:1 / span 2!important;}
.oravia-magazine-shell .mag-ciureva-grid.grid-b .cell-1 img {object-position:center 60%!important;}
.oravia-magazine-shell .mag-ciureva-cell {position:relative!important;overflow:hidden!important;min-height:0!important;margin:0!important;border-radius:3px!important;background:#1b1d1f!important;}
.oravia-magazine-shell .mag-ciureva-cell img {position:absolute!important;inset:0!important;display:block!important;width:100%!important;height:100%!important;max-width:none!important;max-height:none!important;margin:0!important;object-fit:cover!important;}
/* text bubbles: always below the photos, never on top of them */
.oravia-magazine-shell .mag-ciureva-bubble {position:relative!important;flex:0 0 auto!important;align-self:flex-start!important;max-width:88%!important;margin:22px 0 0 22px!important;padding:18px 28px 20px!important;background:#fffaf0!important;border:2px solid #d0a14d!important;border-radius:28px!important;box-shadow:0 8px 22px rgba(20,16,10,.18)!important;color:#18212a!important;}
.oravia-magazine-shell .mag-ciureva-bubble::before {content:""!important;position:absolute!important;top:-13px!important;left:48px!important;width:22px!important;height:22px!important;background:#fffaf0!important;border-left:2px solid #d0a14d!important;border-top:2px solid #d0a14d!important;border-radius:4px 0 0 0!important;transform:rotate(45deg)!important;}
.oravia-magazine-shell .mag-ciureva-bubble.bubble-right {align-self:flex-end!important;margin:22px 22px 0 0!important;}
.oravia-magazine-shell .mag-ciureva-bubble.bubble-right::before {left:auto!important;right:48px!important;}
.oravia-magazine-shell .mag-ciureva-bubble .bubble-head {margin:0!important;padding:0!important;font:400 1.75rem/1.12 Lora,Georgia,"Times New Roman",serif!important;letter-spacing:-.015em!important;color:#18212a!important;}
.oravia-magazine-shell .mag-ciureva-bubble .bubble-deck {margin:.45rem 0 0!important;padding:0!important;font:400 1.2rem/1.32 Lora,Georgia,"Times New Roman",serif!important;color:#3a454d!important;}
.oravia-magazine-shell .page-a .mag-ciureva-bubble {grid-area:text!important;align-self:stretch!important;max-width:none!important;margin:14px 0 0!important;padding:16px 22px 18px!important;display:flex!important;flex-direction:column!important;justify-content:center!important;}
.oravia-magazine-shell .page-a .mag-ciureva-bubble .bubble-head {font-size:1.6rem!important;line-height:1.1!important;}
.oravia-magazine-shell .page-a .mag-ciureva-bubble .bubble-deck {font-size:1.1rem!important;}
/* photo page 2: smaller bubble so the photos get more room */
.oravia-magazine-shell .page-b .mag-ciureva-bubble {max-width:96%!important;margin:14px 14px 0 0!important;padding:12px 20px 14px!important;}
.oravia-magazine-shell .page-b .mag-ciureva-bubble .bubble-head {font-size:1.3rem!important;line-height:1.15!important;}
.oravia-magazine-shell .page-b .mag-ciureva-bubble .bubble-deck {margin-top:.35rem!important;font-size:.98rem!important;line-height:1.35!important;}
/* byline + first photo page travel together with the section title */
.oravia-magazine-shell .mag-ciureva-open {margin:0!important;padding:0!important;}
.oravia-magazine-shell .mag-ciureva-open > .mag-byline {padding:0!important;font-weight:600!important;color:#18212a!important;letter-spacing:.01em!important;}
@media (max-width:979px) {
  .oravia-magazine-shell .mag-ciureva-page.page-a {display:grid!important;grid-template-columns:1.6fr 1fr!important;grid-template-rows:auto minmax(0,1fr) auto!important;grid-template-areas:"hero hero" "side tall" "text text"!important;gap:8px!important;}
  .oravia-magazine-shell .page-a .cell-hero {grid-area:hero!important;aspect-ratio:16 / 10!important;}
  .oravia-magazine-shell .page-a .cell-side {grid-area:side!important;}
  .oravia-magazine-shell .page-a .cell-tall {grid-area:tall!important;}
  .oravia-magazine-shell .mag-ciureva-bubble {max-width:94%!important;margin:18px 0 0 10px!important;padding:12px 16px 14px!important;border-radius:20px!important;}
  .oravia-magazine-shell .mag-ciureva-bubble.bubble-right {margin:18px 10px 0 0!important;}
  .oravia-magazine-shell .mag-ciureva-bubble::before {left:28px!important;}
  .oravia-magazine-shell .mag-ciureva-bubble.bubble-right::before {right:28px!important;}
  .oravia-magazine-shell .mag-ciureva-bubble .bubble-head {font-size:1.25rem!important;}
  .oravia-magazine-shell .mag-ciureva-bubble .bubble-deck {font-size:.98rem!important;}
  .oravia-magazine-shell .page-a .mag-ciureva-bubble {margin:10px 0 0!important;padding:12px 16px 14px!important;}
  .oravia-magazine-shell .page-a .mag-ciureva-bubble .bubble-head {font-size:1.3rem!important;}
  .oravia-magazine-shell .page-a .mag-ciureva-bubble .bubble-deck {font-size:1rem!important;}
  .oravia-magazine-shell .page-b .mag-ciureva-bubble {margin:12px 8px 0 0!important;padding:10px 14px 12px!important;}
  .oravia-magazine-shell .page-b .mag-ciureva-bubble .bubble-head {font-size:1.05rem!important;}
  .oravia-magazine-shell .page-b .mag-ciureva-bubble .bubble-deck {font-size:.86rem!important;}
}
</style>
<!-- ISSUE1_CIUREVA_END -->
<!-- ISSUE1_COMIC_START -->
<style>
/* comic pages: each .mag-comic-sheet is one paginator block with a fixed height (set in ISSUE1_LAYOUT),
   so every comic page gets a magazine page of its own. */
.oravia-magazine-shell .mag-comic-sheet {display:flex!important;align-items:flex-start!important;justify-content:center!important;margin:0!important;padding:0!important;}
/* the "1" after the last comic page: one short line, right-aligned, so it stays on the same page */
.oravia-magazine-shell .mag-comic-sheet + .mag-meta {margin:.25rem 0 0!important;line-height:1rem!important;text-align:right!important;}
/* title (Italian, italics) and author above the first comic page; fixed line heights so later pages can line up with it */
.oravia-magazine-shell .mag-comic-open {margin:0!important;padding:0!important;}
.oravia-magazine-shell .mag-comic-open > .mag-comic-title {margin:0!important;padding:0!important;font:italic 400 1.2rem/1.6rem Lora,Georgia,"Times New Roman",serif!important;height:1.6rem!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;color:#18212a!important;}
.oravia-magazine-shell .mag-comic-open > .mag-comic-byline {margin:0 0 .9rem!important;padding:0!important;font:600 .95rem/1.25rem Lora,Georgia,"Times New Roman",serif!important;height:1.25rem!important;color:#18212a!important;letter-spacing:.01em!important;}
.oravia-magazine-shell .mag-comic-sheet img {display:block!important;width:auto!important;height:auto!important;max-width:100%!important;max-height:100%!important;margin:0!important;border-radius:2px!important;box-shadow:0 2px 10px rgba(20,16,10,.16)!important;}
</style>
<!-- ISSUE1_COMIC_END -->
<!-- ISSUE1_ROUDI_START -->
<style>
/* When the poem block (title, byline, first stanza) starts a new page, the poem title has no extra top margin of its own;
   the page offset in ISSUE1_ALIGN places it on the same line as the other pages. */
.oravia-magazine-shell .mag-page-number + .mag-keep-together > .mag-piece-title {margin-top:0!important;}
/* The poem always starts on a new page. This margin is too large to fit after other content, so the paginator moves the block to a fresh page;
   there the ISSUE1_ALIGN rule (more specific) replaces it with the normal top band. Keeps the page count of roudi fixed,
   so ciureva and the comic open on a left page with their second page facing them. */
@media (min-width:980px) { .oravia-magazine-shell .mag-start-new-page {margin-top:2000px!important;} }  /* desktop only: phones show one page at a time */
</style>
<!-- ISSUE1_ROUDI_END -->
<!-- ISSUE1_ALIGN_START -->
<style>
/* Every page lines up with the pages that open a section.
   1) Section titles get a fixed height (2.72rem with the space below), the magazine stylesheet's own size.
   2) A page that does not open with a section title starts its content below the same band.
   3) ciureva and the comic also reserve their byline / title line, so photos and comic pages start at the same height on both pages of a spread. */
.oravia-magazine-shell .mag-page-inner .mag-section-title {padding:.02rem 0 0!important;box-sizing:content-box!important;}
.oravia-magazine-shell .mag-page-inner.mag-article > .mag-page-number + :not(.mag-section-title) {margin-top:var(--mag-title-band)!important;}
.oravia-magazine-shell .mag-page-inner.mag-article > .mag-page-number + .mag-ciureva-page.page-b {margin-top:calc(var(--mag-title-band) + var(--mag-ciureva-byline))!important;}
.oravia-magazine-shell .mag-page-inner.mag-article > .mag-page-number + div.mag-comic-sheet {margin-top:calc(var(--mag-title-band) + var(--mag-comic-head))!important;}
</style>
<!-- ISSUE1_ALIGN_END -->
<!-- ISSUE1_ILAHAI_START -->
<style>
/* ilahai quote cards sit directly in the section, so give them the same .8rem spacing the old list had */
.oravia-magazine-shell .mag-quote-card {margin:0 0 .8rem!important;}
/* author names: larger and darker than the default small grey caption */
.oravia-magazine-shell .mag-quote-card cite {display:block!important;margin-top:.7rem!important;font-weight:600!important;font-style:normal!important;letter-spacing:.01em!important;color:#18212a!important;}
</style>
<!-- ISSUE1_ILAHAI_END -->
<!-- ISSUE1_BYLINE_SIO_START -->
<style>
/* author names (de Steve M, de Aline, de Ruskin Bond): same size and weight as the comic byline and the ilahai names */
.oravia-magazine-shell .mag-byline {font-weight:600!important;color:#18212a!important;letter-spacing:.01em!important;}
/* sio: the question sits about a third of the way down the page, in regular weight, so it does not read as a second title */
.oravia-magazine-shell .mag-puzzle-box {margin:12rem 0 0!important;}
.oravia-magazine-shell .mag-puzzle-prompt {font-weight:400!important;line-height:1.45!important;}
@media (max-width:979px) {
  .oravia-magazine-shell .mag-puzzle-box {margin-top:7rem!important;}
}
</style>
<!-- ISSUE1_BYLINE_SIO_END -->
<!-- ISSUE1_ELEMI_START -->
<style>
/* elemi: one entry per row, larger text, starting lower on the page so the page is not mostly empty */
.oravia-magazine-shell .mag-checkin-grid {grid-template-columns:1fr!important;gap:1.3rem!important;margin:5rem 0 0!important;}
.oravia-magazine-shell .mag-checkin {min-height:0!important;padding:1.3rem 1.5rem!important;}
.oravia-magazine-shell .mag-checkin-text {margin:0!important;line-height:1.4!important;}
/* names: same style as the other author names */
.oravia-magazine-shell .mag-checkin .mag-meta {margin:.7rem 0 0!important;font-weight:600!important;line-height:1.35!important;color:#18212a!important;letter-spacing:.01em!important;}
@media (max-width:979px) {
  .oravia-magazine-shell .mag-checkin-grid {gap:.8rem!important;margin-top:.6rem!important;}
  .oravia-magazine-shell .mag-checkin {padding:.8rem .95rem!important;}
}
</style>
<!-- ISSUE1_ELEMI_END -->
<!-- ISSUE1_ROUDI_EOCO_START -->
<style>
/* eoco: the magazine's own list format (line under each item); only the text is larger */
.oravia-magazine-shell .mag-brief-text {margin:0!important;line-height:1.4!important;}
/* story picture (Wiles ciutel de eleyus); size and position are set in ISSUE1_LAYOUT */
.oravia-magazine-shell .mag-story-image {padding:0!important;}
.oravia-magazine-shell .mag-story-image img {display:block!important;width:100%!important;height:auto!important;margin:0!important;border-radius:2px!important;}
</style>
<!-- ISSUE1_ROUDI_EOCO_END -->
<!-- ISSUE1_INTRO_START -->
<style>
/* text above the magazine: motto in English and Oravia, then how to use the magazine */
.md-typeset .mag-intro {max-width:770px!important;margin:0 auto 1.1rem!important;padding:0!important;text-align:center!important;}
.md-typeset .mag-intro .mag-intro-motto {margin:0!important;padding:0!important;font:400 1.35rem/1.25 Lora,Georgia,"Times New Roman",serif!important;letter-spacing:.04em!important;color:#18212a!important;}
.md-typeset .mag-intro .mag-intro-motto.mag-intro-ora {margin-top:.2rem!important;font-size:1.05rem!important;font-style:italic!important;color:#4a5963!important;}
.md-typeset .mag-intro .mag-intro-rule {width:56px!important;height:2px!important;margin:.8rem auto!important;padding:0!important;border:0!important;background:#d0a14d!important;}
.md-typeset .mag-intro .mag-intro-text + .mag-intro-text {margin-top:.2rem!important;}
@media (min-width:980px) { .md-typeset .mag-intro .mag-intro-phone {display:none!important;} }
.md-typeset .mag-intro .mag-intro-text {margin:0!important;padding:0!important;font-size:.82rem!important;line-height:1.5!important;color:#3a454d!important;}
</style>
<!-- ISSUE1_INTRO_END -->
<!-- ISSUE1_LAYOUT_START -->
<style>
/* ===== Issue 1 page layout: text sizes, page margins, fixed bands, picture heights, page pairing =====
   Body text: desktop 1.25rem (about 68 characters per line; guideline 45-75), phones 1.06rem (about 40 per line on a 390px phone; guideline 30-50).
   Everything sized relative to the text (titles, author names, quotes, captions) keeps its proportion to it. */
.oravia-magazine-shell {
  --mag-page-h:1000px; --mag-pad-top:1.5rem; --mag-pad-x:1.7rem; --mag-pad-bottom:2.2rem;
  --mag-title-band:3.37rem; --mag-ciureva-byline:2.5rem; --mag-comic-head:4.5rem; --mag-poem-head:5.05rem; --mag-map-width:100%;
}
.oravia-magazine-shell .mag-page-inner.mag-article {padding:var(--mag-pad-top) var(--mag-pad-x) var(--mag-pad-bottom)!important;font-size:1.25rem!important;line-height:1.55!important;}
.oravia-magazine-shell .mag-page-inner .mag-section-title {font-size:2.6rem!important;line-height:2.6rem!important;height:2.6rem!important;margin:0 0 .75rem!important;}
.oravia-magazine-shell .mag-article .mag-piece-title {margin:.9rem 0 .35rem!important;line-height:1.3!important;}
.oravia-magazine-shell .mag-page-number + .mag-piece-title,
.oravia-magazine-shell .mag-section-title + .mag-piece-title {margin-top:0!important;}
.oravia-magazine-shell .mag-byline {font-size:1.2rem!important;margin-bottom:1rem!important;}
.oravia-magazine-shell .mag-article .dropcap:first-letter {font-size:4.6rem!important;}
.oravia-magazine-shell .mag-poem-stanza {font-size:1.25rem!important;line-height:1.6!important;margin:0 0 1.4rem 1.6rem!important;}
.oravia-magazine-shell .mag-keep-together.mag-start-new-page > .mag-piece-title {line-height:2.1rem!important;height:2.1rem!important;margin:0 0 .35rem!important;}
.oravia-magazine-shell .mag-keep-together.mag-start-new-page > .mag-byline {line-height:1.6rem!important;height:1.6rem!important;margin:0 0 1rem!important;}
.oravia-magazine-shell .mag-quote-card {padding:1rem 1.2rem!important;}
.oravia-magazine-shell .mag-quote-card p {font-size:1.4rem!important;line-height:1.5!important;}
.oravia-magazine-shell .mag-quote-card cite {font-size:1.25rem!important;}
.oravia-magazine-shell .mag-checkin-text,.oravia-magazine-shell .mag-brief-text {font-size:1.65rem!important;}
.oravia-magazine-shell .mag-checkin .mag-meta {font-size:1.25rem!important;}
.oravia-magazine-shell .mag-puzzle-prompt {font-size:1.55rem!important;}
.oravia-magazine-shell .mag-meta {font-size:.95rem!important;}
.oravia-magazine-shell .mag-ciureva-open > .mag-byline {font-size:1.25rem!important;line-height:1.6rem!important;height:1.6rem!important;margin:0 0 .9rem!important;}
.oravia-magazine-shell .mag-comic-open > .mag-comic-title {font-size:1.55rem!important;line-height:2.1rem!important;height:2.1rem!important;}
.oravia-magazine-shell .mag-comic-open > .mag-comic-byline {font-size:1.25rem!important;line-height:1.6rem!important;height:1.6rem!important;margin:0 0 .8rem!important;}
/* photo and comic pages fill the space left by the smaller margins */
.oravia-magazine-shell .mag-ciureva-page,
.oravia-magazine-shell .mag-ciureva-page.page-a,
.oravia-magazine-shell .mag-ciureva-page.page-b {height:calc(var(--mag-page-h) - var(--mag-pad-top) - var(--mag-pad-bottom) - var(--mag-title-band) - var(--mag-ciureva-byline) - 2px)!important;}
.oravia-magazine-shell .mag-comic-sheet {height:calc(var(--mag-page-h) - var(--mag-pad-top) - var(--mag-pad-bottom) - 1.25rem - 2px)!important;}
.oravia-magazine-shell .mag-comic-open > .mag-comic-sheet,
.oravia-magazine-shell .mag-comic-sheet.comic-facing {height:calc(var(--mag-page-h) - var(--mag-pad-top) - var(--mag-pad-bottom) - var(--mag-title-band) - var(--mag-comic-head) - 2px)!important;}
.oravia-magazine-shell .mag-page-inner.mag-article > .mag-page-number + div.mag-comic-sheet {margin-top:0!important;}
.oravia-magazine-shell .mag-page-inner.mag-article > .mag-page-number + div.mag-comic-sheet.comic-facing {margin-top:calc(var(--mag-title-band) + var(--mag-comic-head))!important;}
/* ilahai quotes: same dark ink as the rest of the text (the site theme colours quote boxes grey) */
.oravia-magazine-shell .mag-quote-card,.oravia-magazine-shell .mag-quote-card p {color:#18212a!important;}
/* map in Wiles ciutel de eleyus: always on the page after the story's first page (on desktop the facing page), with the closing line under it */
.oravia-magazine-shell .mag-story-image {width:var(--mag-map-width)!important;margin-left:auto!important;margin-right:auto!important;margin-bottom:.9rem!important;}
/* desktop: a poem page that starts with a stanza lines it up with the first stanza on the page before */
@media (min-width:980px) {
  .oravia-magazine-shell .mag-page-inner.mag-article > .mag-page-number + p.mag-poem-stanza {margin-top:calc(var(--mag-title-band) + var(--mag-poem-head))!important;}
}
/* ===== Page pairing (desktop spreads). Left pages are the even-numbered .mag-page elements in the viewer
   (cover, contents page, then the generated pages in order).
   .mag-start-left at the end of a section: on a left page it is taller than a page, so it moves to the next (right) page with no height;
   the next section then starts on the following left page. If the section already ends on a right page, it has no height and changes nothing.
   .mag-start-left + .mag-start-left-b before a block: the block starts at the top of a left page. */
.oravia-magazine-shell .mag-start-left,
.oravia-magazine-shell .mag-start-left-b {display:block!important;height:0!important;padding:0!important;border:0!important;overflow:hidden!important;}
@media (min-width:980px) {
  .oravia-magazine-shell .mag-page:nth-child(even of .mag-page) .mag-start-left {height:3000px!important;}
  .oravia-magazine-shell .mag-page:nth-child(odd of .mag-page) .mag-start-left-b {height:3000px!important;}
  .oravia-magazine-shell .mag-start-left-b + .mag-keep-together > .mag-piece-title {margin-top:0!important;}
}
@media (max-width:979px) {
  .md-content:has(.oravia-magazine-shell) {padding:.6rem .3rem!important;}
  .md-content__inner:has(.oravia-magazine-shell) {padding:0 .3rem!important;}
  .oravia-magazine-shell .mag-start-left,
  .oravia-magazine-shell .mag-start-left-b {display:none!important;}
  /* comic pages on phones: almost no side margin, so the comic (and its text) is as large as the screen allows */
  .oravia-magazine-shell .mag-page-inner.mag-article:has(> .mag-comic-sheet) {padding-left:.2rem!important;padding-right:.2rem!important;}
  .oravia-magazine-shell {
    --mag-page-h:720px; --mag-pad-top:1.2rem; --mag-pad-x:1rem; --mag-pad-bottom:2.4rem;
    --mag-title-band:2.72rem; --mag-ciureva-byline:2.2rem; --mag-comic-head:3.8rem; --mag-poem-head:4.5rem; --mag-map-width:100%;
  }
  .oravia-magazine-shell .mag-page-inner.mag-article {font-size:1.06rem!important;line-height:1.55!important;}
  .oravia-magazine-shell .mag-page-inner .mag-section-title {font-size:2.1rem!important;line-height:2.1rem!important;height:2.1rem!important;margin:0 0 .6rem!important;}
  .oravia-magazine-shell .mag-article .mag-piece-title {margin:.8rem 0 .3rem!important;}
  .oravia-magazine-shell .mag-byline {font-size:1.05rem!important;margin-bottom:.8rem!important;}
  .oravia-magazine-shell .mag-article .dropcap:first-letter {font-size:3.9rem!important;}
  .oravia-magazine-shell .mag-poem-stanza {font-size:1.12rem!important;margin:0 0 1.2rem .9rem!important;}
  .oravia-magazine-shell .mag-keep-together.mag-start-new-page > .mag-piece-title {line-height:1.9rem!important;height:1.9rem!important;}
  .oravia-magazine-shell .mag-keep-together.mag-start-new-page > .mag-byline {line-height:1.45rem!important;height:1.45rem!important;margin:0 0 .8rem!important;}
  .oravia-magazine-shell .mag-quote-card {padding:.8rem .9rem!important;}
  .oravia-magazine-shell .mag-quote-card p {font-size:1rem!important;line-height:1.45!important;}
  .oravia-magazine-shell .mag-quote-card cite {font-size:1.05rem!important;}
  .oravia-magazine-shell .mag-checkin-text,.oravia-magazine-shell .mag-brief-text {font-size:1.3rem!important;}
  .oravia-magazine-shell .mag-checkin .mag-meta {font-size:1.05rem!important;}
  .oravia-magazine-shell .mag-puzzle-prompt {font-size:1.3rem!important;}
  .oravia-magazine-shell .mag-meta {font-size:.85rem!important;}
  .oravia-magazine-shell .mag-ciureva-open > .mag-byline {font-size:1.05rem!important;line-height:1.4rem!important;height:1.4rem!important;margin:0 0 .8rem!important;}
  .oravia-magazine-shell .mag-comic-open > .mag-comic-title {font-size:1.25rem!important;line-height:1.7rem!important;height:1.7rem!important;}
  .oravia-magazine-shell .mag-comic-open > .mag-comic-byline {font-size:1.05rem!important;line-height:1.4rem!important;height:1.4rem!important;margin:0 0 .7rem!important;}
}
/* narrow phones (under 380px): one step smaller, so the first story still starts on the page with its title */
@media (max-width:379px) {
  .oravia-magazine-shell .mag-page-inner.mag-article {font-size:1rem!important;}
  .oravia-magazine-shell .mag-quote-card p {font-size:.94rem!important;line-height:1.4!important;}
}
@media (max-width:349px) {
  .oravia-magazine-shell .mag-page-inner.mag-article {font-size:.94rem!important;}
  .oravia-magazine-shell .mag-quote-card p {font-size:.88rem!important;}
  .oravia-magazine-shell .mag-checkin-grid {margin-top:1.5rem!important;}
  .oravia-magazine-shell .mag-checkin-text,.oravia-magazine-shell .mag-brief-text {font-size:1.15rem!important;}
}
</style>
<!-- ISSUE1_LAYOUT_END -->


<div class="mag-intro">
  <p class="mag-intro-motto">life . connection . art</p>
  <p class="mag-intro-motto mag-intro-ora oravia-reading">elemi . dora . ciumar</p>
  <div class="mag-intro-rule" aria-hidden="true"></div>
  <p class="mag-intro-text">Oravia's magazine! Click on words to see the definition and syllable breakdown.</p>
  <p class="mag-intro-text">This magazine is made possible by our community, including original writings and pictures.</p>
  <p class="mag-intro-text mag-intro-phone">On a phone, pinch to zoom in on the comic.</p>
</div>

<div class="oravia-magazine-shell">

  <div class="mag-topbar">
    <button class="mag-nav-btn" data-mag-prev aria-label="Previous spread">‹</button>
    <div class="mag-brand">
      <strong>ORAVIA</strong>
      <span>1 · 2026-11</span>
    </div>
    <button class="mag-nav-btn" data-mag-next aria-label="Next spread">›</button>
  </div>

  <div class="magazine-viewer" data-magazine>

    <section class="mag-page mag-cover">
      <div class="cover-inner cover-a" style="--cover-image: url('../../images/magazine/issue01/ciureva-05.jpg')">
        <div class="cover-a-masthead">
          <h1 class="cover-title">EON ORAVIA</h1>
          <div class="cover-gon">Gon 1</div>
        </div>

        <div class="cover-photo" aria-hidden="true"></div>

        <div class="cover-a-bottom">
          <div class="cover-a-feature oravia-reading">
            <h2 class="cover-feature-title">litam de tidetu ilhei</h2>
            <p class="cover-feature-deck">o i siyal e ciureva su oihica de nimas rafa</p>
            <div class="cover-feature-rule" aria-hidden="true"></div>
          </div>

          <nav class="cover-a-sections oravia-reading" aria-label="">
            <span>roudi</span>
            <span>ciureva</span>
            <span>sio</span>
            <span>roumir</span>
            <span>ilahai</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- Contents. seseri = menu / contents / list. Page numbers are refreshed
         automatically after the magazine paginator creates the issue pages. -->
    <section class="mag-page" data-mag-contents-page>
      <div class="mag-page-inner mag-contents-page">
        <div class="mag-page-number">1</div>
        <h2 class="mag-contents-title oravia-reading">seseri</h2>

        <div class="mag-toc oravia-reading" role="list">
          <div class="mag-toc-row" role="listitem"><span class="mag-toc-name">eoco</span><span class="mag-toc-page toc-page" data-toc-for="eoco">2</span></div>
          <div class="mag-toc-row" role="listitem"><span class="mag-toc-name">elemi</span><span class="mag-toc-page toc-page" data-toc-for="elemi">3</span></div>
          <div class="mag-toc-row" role="listitem"><span class="mag-toc-name">roudi</span><span class="mag-toc-page toc-page" data-toc-for="roudi">4</span></div>
          <div class="mag-toc-row" role="listitem"><span class="mag-toc-name">ciureva</span><span class="mag-toc-page toc-page" data-toc-for="ciureva">9</span></div>
          <div class="mag-toc-row" role="listitem"><span class="mag-toc-name">ciutels oihica</span><span class="mag-toc-page toc-page" data-toc-for="ciutels-oihica">11</span></div>
          <div class="mag-toc-row" role="listitem"><span class="mag-toc-name">sio</span><span class="mag-toc-page toc-page" data-toc-for="sio">23</span></div>
          <div class="mag-toc-row" role="listitem"><span class="mag-toc-name">roumir</span><span class="mag-toc-page toc-page" data-toc-for="roumir">24</span></div>
          <div class="mag-toc-row" role="listitem"><span class="mag-toc-name">ilahai</span><span class="mag-toc-page toc-page" data-toc-for="ilahai">28</span></div>
        </div>
      </div>
    </section>

    <!--
      ISSUE CONTENT

      Visible text is Oravia only; editing guidance stays inside HTML comments.
    -->
    <template data-auto-article-source>

      <!-- Announcements: short community milestones. -->
      <section data-mag-section="eoco">
        <h2 class="mag-section-title" data-section-id="eoco">eoco</h2>
        <div data-mag-section-body class="mag-section-body oravia-reading">
          <div class="mag-brief-list">
            <article class="mag-brief">
              <p class="mag-brief-text">nimas 'youtube i widuo e 1000 vardei!</p>
            </article>
            <article class="mag-brief">
              <p class="mag-brief-text">yani newols copei en couyas seseri! noli nimas i do i copei 5000+ damura, en 27 semluan!</p>
            </article>
            <article class="mag-brief">
              <p class="mag-brief-text">nimas 'discord rafa a 6 liheosu yamirli, su i dami 38 leo. nedas eloan u neloa</p>
            </article>
            <article class="mag-brief">
              <p class="mag-brief-text">eoco ciude yani sio i aniyel en liperis...</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Check-in: one or two sentences from contributors about their lives. -->
      <section data-mag-section="elemi">
        <h2 class="mag-section-title" data-section-id="elemi">elemi</h2>
        <div data-mag-section-body class="mag-section-body oravia-reading">
          <div class="mag-checkin-grid">
            <article class="mag-checkin">
              <p class="mag-checkin-text">i gehnar e bo, su i eleyel e noi</p>
              <p class="mag-meta">de DanGlass</p>
            </article>
            <article class="mag-checkin">
              <p class="mag-checkin-text">nim rovir anilie i elepan!</p>
              <p class="mag-meta">de Paula F.</p>
            </article>
            <article class="mag-checkin">
              <p class="mag-checkin-text">en litam de tidetu ilhei, nimas i anye e ela bontame u tidetu fa su eofa.</p>
              <p class="mag-meta">de Fernanda Arellano</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Original writing: story, nonfiction, or poem. -->
      <section data-mag-section="roudi">
        <h2 class="mag-section-title" data-section-id="roudi">roudi</h2>
        <div data-mag-section-body class="mag-section-body oravia-reading">
          <h3 class="mag-piece-title" style="margin-bottom:.35rem;">Tohvor Oihica</h3>
          <p class="mag-byline" style="margin-bottom:1.8rem;">de Steve M</p>
          <p class="dropcap mag-roudi-prose">Fare i elomiu e yalgai fano cali fano i anvu en bonfene. Fare i bortal e yomel boelori cadom fano i fene en bonfene. Fare i ilian ca fano i datava e tohvor, mai hay i ilianum e caora. Fano i nomie no elihei mai hay i yuniu asela. Fare i ilace e “run yuba?” u fano su fano i daco e “ia, mai eoren a run i daereva ca i damium a hehma jenpur bonfene?” Fare i vanru i vardei jenpur bonfene. Dami a fano jenpur bonfene! Noi fano i ilaluan anja yalgai omco: “Fare, a cei i fene en nim bonfene?”</p>

          <!-- Poem title, byline and first stanza move to the next page together, so the title never sits alone at the bottom of a page. -->
          <div class="mag-keep-together mag-start-new-page">
          <h3 class="mag-piece-title" style="margin-bottom:.35rem;">canon i tidetu a yar</h3>
          <p class="mag-byline" style="margin-bottom:1.8rem;">de Aline</p>

          <p class="mag-poem-stanza" style="max-width:34rem;margin:0 0 1.9rem 2.2rem;padding:0;font-size:1.08rem;line-height:1.68;break-inside:avoid;page-break-inside:avoid;">
            a yar ca e vardei i yar <br>
            i neiden de couya ca i ram-siyal e elihei no elelia<br>
            su de dom ca nim i ilidaium-vanvu,<br>
            no a elemi i ilian e niu jenon e ca lis nim i anifou i sero
          </p>
          </div>

          <p class="mag-poem-stanza" style="max-width:34rem;margin:0 0 1.9rem 2.2rem;padding:0;font-size:1.08rem;line-height:1.68;break-inside:avoid;page-break-inside:avoid;">
            a yar ca e vardei i yar <br>
            i neiden sora ciudon e 'anidora<br>
            ca nimas i norocu-doum i ilian canon ilivargor,<br>
            no a lupupi i ilian e niu leipili a ca i anifou e bos
          </p>

          <p class="mag-poem-stanza" style="max-width:34rem;margin:0 0 1.9rem 2.2rem;padding:0;font-size:1.08rem;line-height:1.68;break-inside:avoid;page-break-inside:avoid;">
            a yar ca e vardei i yar<br>
            nepar eomfel, i ilonya canon su sora i dami<br>
            su i 'anvuson-damium<br>
            omum<br>
            i tidetu.
          </p>

          <p class="mag-poem-stanza" style="max-width:34rem;margin:0 0 0 2.2rem;padding:0;font-size:1.08rem;line-height:1.68;break-inside:avoid;page-break-inside:avoid;">
            mai notor,<br>
            a neliu yar gon i aniyel<br>
            caora i sepopo<br>
            vardei notor vardei<br>
            su i siyalum-bortal en couhaium nim<br>
            o yar ca a vardei i yar
          </p>

          <!-- Desktop: the next story starts at the top of a left page, so the story and its map are seen together. -->
          <div class="mag-start-left" aria-hidden="true"></div><div class="mag-start-left-b" aria-hidden="true"></div>
          <!-- Story title, byline and first paragraph move to the next page together, so the title never sits alone at the bottom of a page. -->
          <div class="mag-keep-together mag-story-after-poem">
          <h3 class="mag-piece-title" style="margin-bottom:.35rem;">Wiles ciutel de eleyus</h3>
          <p class="mag-byline" style="margin-bottom:1.8rem;">de dankennedy</p>
          <p class="dropcap mag-roudi-prose">E ce a ilhei de heodom i eleyus? Run i ando i vardei en <a href="https://elsewhere.to/atlas?mode=territories">https://elsewhere.to/atlas?mode=territories</a>. A ilhei de 'America i eleyus e tumjum, a ilhei de 'Canada e luval, de 'Zhongguo e ciureva sesa, de 'Congo e gerina. A nim i anye e selyino “Elsewhere”, cadom ilhei i ando i roudi e eleyus. Noli i dami a 200,000 eleyus en 'Elsewhere. (Daefer i anidaium ca a run coman i vardei hue en wiles ciutel, a yuba, i dami a sebom).</p>
          </div>


          <p class="mag-roudi-prose">Noli a eleyus de heodom i eodyel en selyino - su a ilhei de heodom i eodyel en semluan (Oravia;)!</p>

          <figure class="mag-story-image mag-start-new-page"><img src="../../images/magazine/issue01/eleyus-map.webp" width="1400" height="861" alt=""></figure>
          <!-- Desktop: ciureva starts on a left page, so its two photo pages face each other. -->
          <div class="mag-start-left" aria-hidden="true"></div>
        </div>
      </section>

      <!-- Photo + caption. -->
      <section data-mag-section="ciureva">
        <h2 class="mag-section-title" data-section-id="ciureva">ciureva</h2>
        <div data-mag-section-body class="mag-section-body oravia-reading">
          <!-- Two photo pages: each mag-ciureva-page fills one page. Photos are in docs/images/magazine/issue01/. -->
          <div class="mag-ciureva-open">
          <p class="mag-byline">de Aline</p>
          <div class="mag-ciureva-page page-a">
            <div class="mag-ciureva-cell cell-hero"><img src="../../images/magazine/issue01/ciureva-01.jpg" alt=""></div>
            <div class="mag-ciureva-cell cell-tall"><img src="../../images/magazine/issue01/ciureva-03.jpg" alt=""></div>
            <div class="mag-ciureva-bubble">
              <p class="bubble-head">litam de tidetu ilhei en 'Ciudad de Mexico.</p>
              <p class="bubble-deck">a wiltan a yunrani de bociu.</p>
            </div>
            <div class="mag-ciureva-cell cell-side"><img src="../../images/magazine/issue01/ciureva-02.jpg" alt=""></div>
          </div>
          </div>
          <div class="mag-ciureva-page page-b">
            <div class="mag-ciureva-grid grid-b">
              <div class="mag-ciureva-cell cell-1"><img src="../../images/magazine/issue01/ciureva-04.jpg" alt=""></div>
              <div class="mag-ciureva-cell cell-2"><img src="../../images/magazine/issue01/ciureva-05.jpg" alt=""></div>
              <div class="mag-ciureva-cell cell-3"><img src="../../images/magazine/issue01/ciureva-06.jpg" alt=""></div>
            </div>
            <div class="mag-ciureva-bubble bubble-right">
              <p class="bubble-head">a 'alebrije a helihica mi ca i antai-elomiu e ilhei en heodom de tidetu.</p>
              <p class="bubble-deck">ga 'alebrije, a iliora ca a miwo i antai-elomiu en heodom de tidetu, a mir yamirli. noniu rovir dia i iliro ca noi iliora i dami en 2300 lidastor de rarul en 'Mexico wile.</p>
            </div>
          </div>
          <!-- Desktop: the comic starts on a left page. -->
          <div class="mag-start-left" aria-hidden="true"></div>
        </div>
      </section>

      <!-- Serialized comic translation. -->
      <section data-mag-section="ciutels-oihica">
        <h2 class="mag-section-title" data-section-id="ciutels-oihica">ciutels oihica</h2>
        <div data-mag-section-body class="mag-section-body oravia-reading">
          <!-- Comic pages 6-17, one per magazine page. Images are in docs/images/magazine/issue01/. -->
          <div class="mag-comic-open">
            <p class="mag-comic-title"><em>Il suono del mondo a memoria</em></p>
            <p class="mag-comic-byline">de Giacomo Bevilacqua</p>
            <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-06.webp?v=2" alt=""></div>
          </div>
          <div class="mag-comic-sheet comic-facing"><img src="../../images/magazine/issue01/comic-07.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-08.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-09.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-10.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-11.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-12.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-13.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-14.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-15.webp?v=3" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-16.webp?v=2" alt=""></div>
          <div class="mag-comic-sheet"><img src="../../images/magazine/issue01/comic-17.webp?v=2" alt=""></div>
          <p class="mag-meta">Joniu 1</p>
        </div>
      </section>

      <!-- Linguistic puzzle. -->
      <section data-mag-section="sio">
        <h2 class="mag-section-title" data-section-id="sio">sio</h2>
        <div data-mag-section-body class="mag-section-body oravia-reading">
          <div class="mag-puzzle-box">
            <p class="mag-puzzle-prompt">Cenon i ilahai e 'snack en Oravia?</p>
          </div>
        </div>
      </section>

      <!-- Serialized translated reading. -->
      <section data-mag-section="roumir">
        <h2 class="mag-section-title" data-section-id="roumir">roumir</h2>
        <div data-mag-section-body class="mag-section-body oravia-reading">
          <h3 class="mag-piece-title">Jor Fal en Beijevoi</h3>
          <p class="mag-piece-subtitle">Joniu 1</p>
          <p class="mag-byline">de Ruskin Bond</p>

          <p class="dropcap">Linu 'Rohana, dantam nim i dami en boelori en beimete. Notor jor fal i aniyel en boelori. Tor ilhei i anvu su hay linu beimete. Bi daeta, a hayas a hay fare; hayas i neauta iloto u hay. Jor fare i ilahai ciude ciugai u hay: cadom hay i fene e ilwol, cali hay i anolum e varodu anja borlu, su ca i tane i ilahaium u ilhei ca hay i ilianum.</p>

          <p>Hayas i ano-eon u hay, su beimete i anocari de beilem. A nim a ilhei ca i doum i vardei. Nim i do i siyal dantam e yar su yomel; eta nim i doum i ilian canon jor fal i nomie. Mai de hay vanpai om cali hay i anvu, nim i siyal ca hay i none e yespai ca i anbas en vavari. I dapas e hay omco su om de hay yespai.</p>

          <p>“Run i anvu linu 'Dehra?” nim i ilace.</p>

          <p>Nim omco i iloram-saba e hay. Bi daeta, nim i apafene en yomel jenai. Hay i yalgai-asugar su i ilaluan, “Nim i ilianum ca neliu ilhei i dami en noi!”</p>

          <p>Neauta lirul, ilhei ca i yuba vardei i siyalum e ilwol ca i dami en hayas jenparo. Ilie a hayas vardei i siyal e nedastam mir ilwol. Mai ilhei ca i vardeium, dou i vardei gafei, i dajim dantam e danmir ilwol anja neliu datava.</p>

          <p>“Nim su i vardeium e run,” nim i ilaluan. “Mai nim i varsus e run cali run i aniyel.”</p>

          <p>Nim i iliro ia dou i do i anonuve ca hay i siyal ca nim i vardeium. Daefer nim i anelem en apafene, eta ilie hay i siyalum.</p>

          <p>Jor fal i ilaluan, “Nim i anocari de beimete en 'Saharanpur. Jor faresu i eodani e nim en dom.”</p>

          <p>“Eta nim i tane i anelem no nordau de run,” nim i daco. “A jor faresu a tohvor.”</p>

          <p>“Cedom run i anvu?” hay i ilace.</p>

          <p>“Jetai 'Dehra; notor jetai 'Mussoorie.”</p>

          <p>“Bi yuba u run! Bi tohpu, nim i anvum jetai 'Mussoorie su. I eleyel e wimrih, o en liheosu das.”</p>

          <p>“Dasu. A noi li a anodu yuba,” nim i ilaluan lilon i sero e dom. “Mir 'Dahlia i yaldih e wimrih. A lusari a nedas yuba. En limel, run i do i apafene jenparo pohpoh su i mouje e netor 'brandy. Norocu neloa bei dia i anocariar, su a jenon a elonor su norocu jenya. Dasu, a liheosu das a anodu yuba li.”</p>

          <p>A hay i ilahaium. Nim i iliro ia dou hay i yalnou-dapas e nim ilaluan, ia dou hay i iliro ca a nim a oifu.</p>

          <p>Notor nim i selcio:</p>

          <p>“Ce i dami en anolu?”</p>

          <p>I nomie ca hay i siyalum e nepui ho ganpe en noi ilace. Nim i iliro ia dou hay norven i siyal ca nim i vardeium. Mai hay i ilace:</p>

          <p><strong>“O i vardei e anolu anja borlu, ia?”</strong></p>
          
          <p>(Anlaro en Joniu 2...)</p>

          <p><em>'Dahlia = sol yoyos yaltans leipili.</em></p>
        </div>
      </section>

      <!-- Quotes connected with the issue topic. -->
      <section data-mag-section="ilahai">
        <h2 class="mag-section-title" data-section-id="ilahai">ilahai</h2>
        <div data-mag-section-body class="mag-section-body oravia-reading">
          <!-- Each quote card is its own pagination block, so a long quote moves to the next page instead of being cut off. -->
          <blockquote class="mag-quote-card">
            <p>“Noi heodom de liyar wa<br>
              a dantam heodom de liyar wa —<br>
              mai… mai…”</p>
            <cite>Kobayashi Issa</cite>
          </blockquote>
          <blockquote class="mag-quote-card">
            <p>“A noi visuva a nimum.<br>
              E nim i linum a noi visuva.<br>
              A nim a linum elemi.<br>
              Nesunya lirul nim i fadevi,<br>
              su nesunya lirul nim i tidetu.”</p>
            <cite>Thich Nhat Hanh</cite>
          </blockquote>
          <blockquote class="mag-quote-card">
            <p>“En litam cali tidetu i tuldac en run bortal, ce run i anona u hay?<br>
              Nim o i fene e yaldih molbai de nim elemi jenparo nim eodya hue — nesunya lirul nim i dosaba ca a hay i anocari su jenya vanta.<br>
              E neloa moyi mouje de neloa nim lunsor litam su lunhem limel, e neloa eopan su geyelu de nim apasoi elemi, nim i fene jenparo hay en yadetu de nim litam, cali tidetu i tuldac en nim bortal.”</p>
            <cite>Rabindranath Tagore</cite>
          </blockquote>
          <blockquote class="mag-quote-card">
            <p>“Nim i iliro . . . ca cali nim i tidetu, nim i do i ano-aslufu e aslufu ca i elemi-saba e nim. Nim i do i anivari u heodom e neloa ca nim i anyeum. Neloa ca nim i do i davio, mai i doum. Neloa anipas ca nim i anipasum. Neloa ilwol ca nim i anopu, i anja-siur su i pocor. Nim i do i anivari e hayas u heodom. U elemi ca noder i elemium hue. A noi a nim anona u heodom ca i anona u nim e elemi ca nim o i elemi, e eleyel ca nim i eleyel, e aslufu ca nim i aslufu.”</p>
            <cite>Ursula K. Le Guin</cite>
          </blockquote>
          <blockquote class="mag-quote-card">
            <p>“bi iloi cali nim i tidetu<br>
              o e nim i nepar pohem<br>
              a elemi ca nim i anilie<br>
              i elemi”</p>
            <cite>Nikki Giovanni</cite>
          </blockquote>
        </div>
      </section>

    </template>

    <section class="mag-page" data-mag-back-page>
      <div class="mag-page-inner mag-back-minimal">
        <div class="mag-page-number"></div>
        <h2 class="mag-display-headline">ORAVIA</h2>
        <div class="credits-box">
          <p>2026-11</p>
          <p>learnoravia.com</p>
        </div>
      </div>
    </section>

  </div>

  <div class="mag-bottombar">
    <button class="mag-text-btn" data-mag-prev aria-label="Previous spread">‹</button>
    <div class="mag-page-status" aria-live="polite">
      <span data-mag-current>1</span>
      <span class="mag-status-sep">·</span>
      <span data-mag-spread-status></span>
    </div>
    <button class="mag-text-btn" data-mag-next aria-label="Next spread">›</button>
  </div>

</div>

<script src="../../js/oravia-magazine.js?v=20261122-1"></script>
<script src="../../js/oravia-word-popup.js?v=20260824-2105"></script>
