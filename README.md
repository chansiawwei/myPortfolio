# myPortfolio

Personal portfolio site of **Chan Siaw Wei** — Senior Software Engineer.

## 🔗 Live site

| | |
| --- | --- |
| **Primary URL** | **https://chan-portfolio.web.app** |
| Alternate URL | https://chan-portfolio.firebaseapp.com |
| Hosting | Firebase Hosting — project `chan-portfolio` |
| Repository | https://github.com/chansiawwei/myPortfolio |

Both URLs serve the same site; Firebase provisions both by default. No custom domain is configured.

---

## Quick start

Requires Node.js **22.12 or newer** (an Astro requirement).

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:4321
npm run build   # static build into dist/
npm run preview # serve the built dist/ locally
```

## Deployment

The site builds to static files in `dist/`, and `firebase.json` publishes that folder.

```bash
npm run deploy   # builds, then runs firebase deploy
```

`npm run deploy` exists so the build can't be skipped — `firebase deploy` on its own would
publish whatever `dist/` happened to contain. First time on a new machine you'll need
`npm install -g firebase-tools` and `firebase login`.

## Project structure

```
src/
  pages/index.astro       # composes the page from sections
  layouts/Layout.astro    # <head>, theme bootstrap, scroll-reveal observer
  components/
    Sidebar (sticky rail), About, Experience, Projects,
    ProjectCard, Skills, Contact, Footer, ThemeToggle, SEO, Icon
  data/
    site.ts               # identity, SEO copy, socials, nav
    experience.ts         # work history timeline
    projects.ts           # ← the project list
    skills.ts             # grouped skill list
  assets/                 # source images (optimized at build time)
  styles/global.css       # design tokens + base styles
public/                   # favicon, og-image.png, resume.pdf, robots.txt — served as-is
scripts/make-og.mjs       # regenerates the social preview image
astro.config.mjs          # site URL + sitemap integration
```

## Editing the site

### Adding a project

Drop the screenshot in `src/assets/`, then add an entry to `src/data/projects.ts`:

```ts
{
  title: 'Project Name',
  context: 'Company · Context',
  description: 'What it does and what you built.',
  tech: ['TypeScript', 'Angular'],
  image: myScreenshot,          // imported at the top of the file
  alt: 'Describe the screenshot for screen readers',
  links: [{ label: 'See Live', href: 'https://…', variant: 'primary' }],
  isDeprecated: false,          // shows a muted "no longer available" badge
}
```

Astro resizes it, converts it to WebP, and lazy-loads it automatically. Screenshots are
contained in a fixed frame rather than cropped, so tall phone captures and wide desktop
shots both stay readable.

Three optional fields shape the card:

- `highlights: string[]` — bullets, for work that deserves depth rather than one paragraph.
- `image` — omit it and the card renders a monogram tile instead of an empty frame.
- `visual: 'harness'` — renders a diagram instead of a screenshot and goes full-width. Useful for
  internal work where no screenshot can be published.

### Other content

- **Name, role, description, résumé link, socials** — `src/data/site.ts`. The SEO
  description and JSON-LD are generated from here, so update it in one place.
- **Work history** — `src/data/experience.ts`, mirroring the résumé.
- **Skills** — `src/data/skills.ts`, grouped into the three columns (text chips, no logos).
- **Résumé** — `public/resume.pdf`, served by the site itself and linked as `/resume.pdf`.
  Replace the file to update it; no third-party host involved.
- **Colours, type scale, spacing** — CSS custom properties at the top of
  `src/styles/global.css`. Dark theme overrides only the colour tokens.

## What the site does

- **Zero JavaScript shipped.** No framework runtime. The only scripts are the inlined
  theme bootstrap and a ~20-line IntersectionObserver for scroll reveals.
- **Images optimized at build.** WebP conversion, resizing, lazy loading, and explicit
  dimensions to prevent layout shift.
- **SEO.** Open Graph and Twitter card tags, canonical URL, JSON-LD `Person` schema,
  generated `sitemap-index.xml`, and `robots.txt`.
- **Dark by default**, with a light theme behind the toggle, remembered in `localStorage`
  and applied before first paint so it never flashes.
- **Accessible.** Skip link, real alt text on every image, keyboard-visible focus rings,
  and `prefers-reduced-motion` honoured.
- **Resilient.** Reveal animations are gated behind a `.js` class, so the page stays fully
  readable if JavaScript fails.

## Built with

[Astro](https://astro.build/) · [Sharp](https://sharp.pixelplumbing.com/) for image
optimization · [Inter](https://rsms.me/inter/) self-hosted via Fontsource · deployed on
[Firebase Hosting](https://firebase.google.com/docs/hosting)

## History

Originally built from the [Simplefolio](https://github.com/cobidev/simplefolio) template
(Bootstrap 4 + jQuery + Webpack). Rebuilt on Astro in 2026 — see `CLAUDE.md` for the
architectural notes.

## License

MIT — see [LICENSE.md](LICENSE.md).
