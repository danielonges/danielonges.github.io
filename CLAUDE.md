# CLAUDE.md

Guidance for Claude Code when working in **shaeonspace** — the personal brand
website of Daniel Ong (SHAEONSPACE, *"building in code, light & sound"*).

## Stack

Astro 6 (minimal template), no UI framework yet. Plain CSS built on design
tokens — no Tailwind. Node ≥ 22.12.

```bash
npm install        # once
npm run dev        # localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the build
```

**Pushing to `main` deploys to production** — GitHub Pages at
https://danielonges.github.io via `.github/workflows/deploy.yml`.

## Layout

```
src/
├── styles/
│   ├── tokens.css        ★ Brand design tokens — the single source of truth
│   └── global.css        Base styles built on the tokens
├── layouts/
│   └── BaseLayout.astro  Page shell: fonts, header (logo), footer (tagline)
├── components/
│   ├── Logo.astro        Header mark — icon + wordmark (static imgs)
│   └── HeroLogo.astro    Stacked lockup, inlined SVG, animated playhead
└── pages/
    ├── index.astro       One-page home: hero → code → photography → music → contact
    │                     (music = SoundCloud Widget-API player, JS-injected track cards)
    └── 404.astro         Branded not-found page
public/
├── favicon.svg           Brand icon (the small-scale mark)
├── fonts/                Self-hosted woff2 (acre-medium, sora-600, inter-var)
├── og-image.png · apple-touch-icon.png · icon-192/512.png · site.webmanifest
└── logos/                lockup/ horizontal/ wordmark/ icon/ — each in
                          default, -light (for dark imagery), -dark (for light surfaces)
docs/
└── brand-rules.md        ★ The full brand rulebook — read before any visual work
```

## Brand rules (load-bearing — read docs/brand-rules.md before styling)

The brand is dark-first: navy surfaces, silver text, gold accents, set in
Sora (display) + Inter (body), with self-hosted Acre Medium on the hero h1
and the header nav (`--ss-display-hero`). The non-negotiables:

1. **All colour goes through `var(--ss-*)` tokens** from `src/styles/tokens.css`.
   Never type a raw brand hex anywhere else.
2. **Red never sets text** — graphic accent only (the playhead, icons, thin
   rules). Where red must read (links/alerts), `--ss-red-bright` at large sizes only.
3. **Gold never sets body text** — display type ≥24px, rules, and eyebrow
   labels only. Reading text routes onto `--ss-text` / `--ss-white`.
4. **Body copy is never wide-tracked**: Inter 400, ≥16px, zero letter-spacing,
   line-height ≈1.65. Wide tracking (+0.28em) belongs to eyebrow labels only.
5. **Only the red playhead animates** in the brand mark — one sweep on load,
   settling to rest, honouring `prefers-reduced-motion`. Brackets, camera, bars,
   wordmark: static. The keyframes live in tokens.css; `HeroLogo.astro` is the
   only consumer. (The music player has its own playback-driven motion — a
   tracking playhead and a red equaliser — which is functional, not brand.)
6. **Logo minimums are hard values**: stacked lockup ≥120px wide (below that,
   switch to the icon); icon holds to 30px. Clear space: 2X sides / 3X
   top-bottom, X = wordmark height. Never distort, rotate, recolour, or re-font
   the mark.
7. **British spelling** in all site copy (colour, optimised, behaviour).
   Understated voice — no hype adjectives, no exclamation marks doing the work.
   Tagline: "Building in code, light & sound." Positioning: *engineer & creator*.

Contrast claims must stay accurate: AA = 4.5:1 body / 3:1 large. The verified
ratios per pairing are in `docs/brand-rules.md` §2.

## Conventions

- Pages wrap in `BaseLayout`; navigation links go into its `nav` slot.
- Use the `.wrap` container class (max-width `--ss-maxw`, centred) for page
  sections; surfaces step `--ss-navy-deep` (page) → `--ss-navy` (sections) →
  `--ss-navy-raised` (cards), with `--ss-navy-line` borders.
- Logo variant per context: site header → `icon/` + `wordmark/` (owner's
  choice; rulebook default is `horizontal/`); hero/cover → `lockup/`;
  favicon/avatar → `icon/`; on photography use `-light` over a dark area or
  scrim (≥4.5:1 behind the mark).
- The editable logo sources and the authoritative brand guide live outside
  this repo (`~/Claude/Projects/UI-UX Design/SHAEONSPACE/`); the copies in
  `public/logos/` are deployable artefacts — don't edit them in place.
- Elements built at runtime in JS (the music track cards) don't get Astro's
  scoped `data-astro-cid` attribute, so style them in a `<style is:global>`
  block — a scoped `<style>` silently won't match them.
