# SHAEONSPACE — Full Brand Rules (v2.0, 2026)

The complete rulebook behind the tokens. Read the section relevant to what you're
building; the contrast table and colour roles are the parts most often needed.

## Contents

1. [Brand essence & voice](#1-brand-essence--voice)
2. [Colour roles & contrast](#2-colour-roles--contrast)
3. [Typography](#3-typography)
4. [Logo system](#4-logo-system)
5. [Clear space & minimum sizes](#5-clear-space--minimum-sizes)
6. [Misuse — never do these](#6-misuse--never-do-these)
7. [Motion](#7-motion)
8. [Light backgrounds](#8-light-backgrounds)

---

## 1. Brand essence & voice

SHAEONSPACE is the personal identity of Daniel Ong — *engineer & creator*,
tagline **"Building in code, light & sound."** A software engineer who builds
across three mediums: code, light (photography), and sound (music production).
The brand leads with engineering and is enriched by the crafts around it.

Three pillars steer every decision:

- **Precision** — considered, structured, technically sound. Nothing arbitrary;
  every element earns its place.
- **Craft** — a maker's attention to detail across mediums: the same care in a
  commit, a frame, and a mix.
- **Quiet confidence** — premium and understated. The work speaks; the brand
  sets the tone without shouting.

The overall feel is **precise but warm** — the rigour of an engineer, the eye
of a photographer, the timing of a producer.

**Copy conventions:**

- **British spelling** throughout (colour, optimised, rigour, behaviour).
- **Imperative voice** for rules and instructions ("Use…", "Never…");
  descriptive prose only for conceptual framing.
- Understated over hyped. No exclamation marks doing the work adjectives
  should; no "amazing"/"stunning" filler. Short, confident sentences.
- The standard term is **"clear space"** (never "exclusion zone" or
  "seclusion zone").

## 2. Colour roles & contrast

The palette is built for **roles, not swatches**. Deep navy carries the brand;
silver and white do the reading; gold is reserved for display type, rules, and
accents; red is a graphic spark only. A colour passing contrast in one role can
fail in another — so the role *is* the rule.

| Token | Hex | Role | Allowed use |
|---|---|---|---|
| `--ss-navy-deep` | `#1E2630` | Page background | Backgrounds, recessed areas |
| `--ss-navy` | `#2A3340` | Primary surface & brand base | Sections, hero surfaces |
| `--ss-navy-raised` | `#3A4654` | Elevation | Cards, raised surfaces |
| `--ss-navy-line` | `#46525F` | Structure | Hairlines, borders, dividers |
| `--ss-gold` | `#AE925D` | Primary accent | Display type ≥24px, rules, eyebrows, accents on navy. **Not body text.** |
| `--ss-gold-bright` | `#C7A86B` | Gold interaction | Hover/active of gold elements |
| `--ss-red` | `#B0413E` | Graphic accent **only** | The playhead, icon fills, thin rules. **Never sets text, at any size.** |
| `--ss-red-bright` | `#D9605C` | Legible red | Links/alerts where red must carry meaning — large text only |
| `--ss-white` | `#FFFFFF` | Highest emphasis | Headlines, key figures |
| `--ss-silver` | `#D6D6D6` | High-emphasis text | Subheads; also the light-mode surface |
| `--ss-text` | `#C9CDD2` | Default body text | All running text on dark |
| `--ss-text-dim` | `#9AA1AA` | Secondary | Captions, metadata, labels |

**Verified contrast (WCAG 2.1, against navy `#2A3340`):**

| Foreground | Ratio | Verdict |
|---|---|---|
| White | 12.8:1 | AAA |
| Text Silver `#C9CDD2` | 8.0:1 | AAA |
| Text Dim `#9AA1AA` | 4.9:1 | AA |
| Gold `#AE925D` | 4.3:1 | AA **large only** (≥24px / 19px bold) |
| Red Bright `#D9605C` | 3.5:1 | AA **large only** |
| Red `#B0413E` | 2.2:1 | **Graphic only — fails all text** |

Keep any contrast claims you write accurate: AA = 4.5:1 body, 3:1 large.

**The two failures that motivated this system** (don't reintroduce them):
red text on navy (2.2:1) is unusable at any size; gold body text (4.3:1)
fails AA at normal sizes. Gold and red keep their *look* as accents while all
reading routes onto silver and white.

## 3. Typography

**Two-tier font strategy.** Print/hero: Acre (display) + Myriad Variable
Concept (text), via Adobe Fonts. Web/everywhere: **Sora** (geometric
display, Acre-like) + **Inter** (humanist, variable, superb on screen) from
Google Fonts — zero licensing friction. Always specify the full stack:

```css
font-family: "Sora", "Acre", system-ui, sans-serif;              /* display */
font-family: "Inter", system-ui, -apple-system, sans-serif;       /* body */
```

**Type scale:**

| Style | Font & weight | Case | Tracking | Colour |
|---|---|---|---|---|
| Display / H1 | Sora 600 | ALL-CAPS | +0.04em | White or gold (display sizes only) |
| H2 / Section | Sora 600 | ALL-CAPS | +0.05em | Silver |
| H3 / Card title | Sora 600 | Sentence | 0 | Silver |
| Eyebrow / Subtitle | Inter 600, small | ALL-CAPS | **+0.28em** | Gold |
| Body | Inter 400, ≥16px | Sentence | **0** | Text Silver `#C9CDD2`, line-height ≈1.65 |
| Caption | Inter 400, small | Sentence | 0 | Text Dim |

**Tracking rules (the most commonly violated):**

- Track display type and short all-caps labels loosely — that's where wide
  letter-spacing looks refined. The eyebrow is the one place very wide
  tracking (+0.28em) earns its keep.
- Body copy is **always zero tracking** with line-height ≈1.6. Wide-tracked
  paragraphs shatter the word-shapes the eye reads by — it's the single
  biggest readability mistake the original brand made, and the reason this
  rule exists.
- Never use gold or red for body text (see §2).

## 4. Logo system

One mark, three mediums: curly brackets `{ }` frame the identity as code; the
form they enclose is a camera (light); inside it sits an audio waveform
(sound). The single red bar is the **playhead** — the live spark of creation,
and the one place red is allowed inside the mark.

**Three lockups** (in `assets/logos/`):

| Lockup | File | Use |
|---|---|---|
| Stacked (primary) | `lockup/shaeonspace-logo.svg` | Default. Hero sections, covers, square-ish space |
| Horizontal | `horizontal/shaeonspace-horizontal.svg` | Wide placements: site headers, email signatures, footers |
| Icon | `icon/element-icon.svg` | Square small-scale: avatars, app tiles, **favicons** |
| Wordmark | `wordmark/shaeonspace-wordmark.svg` | Type-only contexts where the mark already appears nearby |

**Three colour variants** per lockup: original (`*.svg`, full colour on navy),
light monochrome (`*-light.svg`, for dark/busy backgrounds), dark monochrome
(`*-dark.svg`, for light backgrounds, single-colour print). Prefer the
original wherever colour reproduction allows.

On photography, use the light monochrome over a dark area or scrim, keeping
≥4.5:1 contrast behind the mark. Never place the original mark directly on a
busy image.

`elements/` holds the construction pieces (brackets, camera, waveform) — for
brand-aware illustration only, never as substitutes for an approved lockup.

## 5. Clear space & minimum sizes

- **X** = the height of the "SHAEONSPACE" wordmark. Keep **2X** clear on the
  sides and **3X** top and bottom. Never crowd the mark with competing text or
  graphics inside the clear space.
- **Minimum sizes are hard values:** stacked lockup ≥ **120px** wide — below
  that, switch to the icon. The icon holds down to **30px**.

## 6. Misuse — never do these

The mark's proportions, colour, and construction are fixed. Never: distort or
stretch · rotate · reflect · recolour off-palette · place at low contrast ·
deconstruct the elements · reset the wordmark in another font.

## 7. Motion

**Only the red playhead animates. Everything else in the mark is static.**

The approved animation: one full sweep edge-to-edge across the waveform
(centred on the waveform), settling back to rest — **~1.5s, ease-in-out, a
brief hold at the right edge, once on load.** Must honour
`prefers-reduced-motion: reduce` (animation off entirely). The playhead path
is drawn last in the SVG so it sits on top of the bars.

`assets/tokens.css` ships the keyframes (`ss-playhead-sweep`) and the
reduced-motion guard. The translateX distances must be tuned to the waveform
width in the target SVG's own coordinate space.

Beyond the logo, brand motion is restrained: subtle, purposeful, never
decorative loops. When in doubt, don't animate.

## 8. Light backgrounds

The brand is dark-first, but works inverted: navy text on silver/white
surfaces, with the dark-monochrome logo variants. Keep gold/red in the same
accent-only roles — their contrast on light surfaces is *worse* (gold on
silver is 2.04:1), so they are rules and graphics there, never text.
