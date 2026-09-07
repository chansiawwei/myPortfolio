# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built dist/ locally
npm run deploy    # build + firebase deploy
npx astro check   # type-check .astro/.ts (0 errors expected)
node scripts/make-og.mjs  # regenerate public/og-image.png
```

Live at **https://chan-portfolio.web.app** (also `chan-portfolio.firebaseapp.com`), Firebase
project `chan-portfolio`. No custom domain. There is no test suite or linter.

Requires Node ≥22.12 (Astro engine constraint).

## Architecture

A single-page static portfolio built with **Astro 7**, output to `dist/` and served by Firebase
Hosting. It ships **zero JavaScript bundles** — verify with `find dist -name '*.js'`, which should
return nothing. The only client code is two inlined scripts (theme bootstrap, scroll-reveal
observer) plus the theme toggle's module.

**Content is data, not markup.** `src/pages/index.astro` composes section components; the
sections read from `src/data/`:

- `site.ts` — identity, SEO copy, socials, nav. `SEO.astro` and the JSON-LD `Person` schema are
  generated from it, so changing a fact here updates the page, the meta tags, and the structured
  data together.
- `projects.ts` — the project list, ordered work-first then side projects. Adding a project means
  adding an object, not copying markup. Three optional fields shape the card:
  `highlights` (bullets for work worth explaining), `image` (omit it and a monogram tile renders),
  and `visual: 'harness'` (renders `HarnessDiagram.astro` and switches the row to a wide stacked
  layout — for internal work where no screenshot can be published).
- `experience.ts` — the work-history timeline, which sits above projects because recruiters read
  it first.
- `skills.ts` — skills grouped into the three displayed columns. Text-only chips: the old logo
  tiles mixed transparent PNGs with white-background JPEGs that glared against the dark theme,
  and half the résumé list has no logo in the repo. Unused icons remain in `src/assets/icons/`.

**Styling** is plain CSS with custom properties, not SCSS. `src/styles/global.css` holds the
tokens (colour, fluid type scale, spacing, radii) plus base/utility classes; everything else is
component-scoped `<style>` blocks. **Dark is the base theme**; `:root[data-theme='light']`
redefines only the semantic colour tokens, so components never branch on theme. The accent is
indigo and lives in two token lines per theme — swapping the palette touches nothing else.

**Layout** is a two-column shell (`Layout.astro`): a sticky `Sidebar.astro` rail holding name,
role, section nav and socials, beside a scrolling `<main>`. Below 64rem the rail becomes a normal
stacked block and section labels turn sticky instead.

## Conventions that matter here

- **Images must be imported from `src/assets/`**, never referenced from `public/`. Only imported
  images pass through Astro's optimizer (WebP, resizing, dimensions, lazy loading). `public/` is
  for files served verbatim: favicon, `og-image.png`, `robots.txt`.
- **Never read `image.width` / `image.height` in a component.** Touching those properties makes
  Vite emit every original PNG into `dist/` beside the optimized WebP — 5.3 MB of files nothing
  references. `ProjectCard.astro` carries a comment saying so.
- **Screenshots are contained, never cover-cropped.** The set ranges from 0.55 to 1.90 aspect
  ratio; cropping to one shape cut the substance out of several (one phone capture rendered as an
  empty grey box).
- **Reveal animations are gated behind `.js`** on `<html>`, added by the inline head script.
  `.reveal` sets `opacity: 0`, so without that gate any JS failure would render a blank page.
  Never write a bare `.reveal { opacity: 0 }` rule.
- **The theme is applied by an inline script in `<head>`** before first paint to avoid a flash.
  It must stay inline and stay first — don't move it into a module or defer it.
- **First project gets `isFeatured: true`**, which makes its image load eagerly with high fetch
  priority (it's the LCP element). Exactly one project should have it.
- **Firebase caching** is configured in `firebase.json`: `/_astro/**` is immutable for a year
  (filenames are content-hashed), HTML/XML/TXT must revalidate. Don't put unhashed assets in
  `/_astro/`.

**`HarnessDiagram.astro`** draws the PayPal AI workflow harness as a five-step loop in HTML/CSS
rather than SVG, so it reflows on narrow screens and inherits theme tokens. Every step maps to a
line in the résumé — don't invent stages, and keep the step copy terse or the columns crush.

## Dev-server gotcha (this has caused two false bug reports)

`astro dev` runs as a **detached daemon that survives terminal closes and days of edits**, and it
goes stale: it will serve old CSS against new markup, which looks exactly like broken styles —
unstyled headings, missing grid columns, default list markers. Before debugging any visual bug,
confirm the build is clean and restart the server:

```bash
npx astro dev stop && rm -rf .astro node_modules/.vite && npm run dev
```

If `dist/_astro/*.css` contains the rule and the DOM element carries the matching
`data-astro-cid-*` attribute, the code is fine and the dev server is lying.

## Content source of truth

All identity, experience and skills content comes from the **May 2026 résumé**, a copy of which is
served at `public/resume.pdf` (the site links `/resume.pdf`, not a third-party host). If the résumé
changes, update `site.ts`, `experience.ts` and `skills.ts` together and replace the PDF.

Note the PDF contains a personal phone number and is publicly served — that was true of the
previous tiiny.site link too, but it's worth a deliberate decision.

## Open TODOs left in the code

- `src/data/site.ts` — LinkedIn is set to `in/siawwei` per the résumé; the old site used a long
  numeric handle. Marked `TODO(chan)` to confirm which resolves.
- `src/data/experience.ts` — the Semantia company name is transcribed from the résumé PDF and
  should be double-checked for spelling.
