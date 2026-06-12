# shaeonspace

Personal brand website of Daniel Ong — **SHAEONSPACE**, *building in code,
light & sound*. Built with [Astro](https://astro.build); deploys to GitHub
Pages on every push to `main`.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally before deploying  |

## Structure

```
src/styles/tokens.css     Brand design tokens — single source of truth for colour & type
src/styles/global.css     Base styles built on the tokens
src/layouts/BaseLayout.astro   Page shell (fonts, header, footer)
src/components/Logo.astro      Horizontal lockup with the animated playhead
src/pages/                Routes
public/logos/             Deployable logo SVGs (lockup / horizontal / wordmark / icon)
docs/brand-rules.md       The full brand rulebook
```

## Brand

The visual system is SHAEONSPACE v2.0 — dark-first navy/silver/gold, Sora +
Inter (self-hosted Acre on the hero), with a logo fusing code brackets, a
camera, and an audio waveform.
All colour routes through the `--ss-*` tokens; the rules (colour roles,
verified contrast, type scale, logo usage, motion) are documented in
`docs/brand-rules.md` and enforced via `CLAUDE.md` for agent-assisted work.
