# Ready Dev Start

A wiki platform by Indie Game Academy helping aspiring game creators learn game development fundamentals, access studio templates, find tools, and transition into indie studio founders.

**Live site:** [readydevstart.indiegameacademy.com](https://readydevstart.indiegameacademy.com)

## What's Inside

- **Quest Logs** — Step-by-step learning guides (Getting Started, Game Design 101, Your First Game, Publishing)
- **Equipment** — Curated tool recommendations (Game Engines, Art Tools, Audio Tools, Project Management)
- **Blueprints** — Production-ready templates (Studio Template, Game Design Document, Pitch Deck, One Pager, Press Kit)

## Key Assets

The following assets are available in `public/assets/`:

| Asset | File | Description |
|-------|------|-------------|
| **Logo** | [`Logo_IGA.png`](public/assets/Logo_IGA.png) | The official Ready Dev Start / Indie Game Academy logo. Used in the site header and as the page thumbnail (og:image). |
| **Backdrop** | [`Purple Backdrop Normal.jpg`](public/assets/Purple%20Backdrop%20Normal.jpg) | Default background/backdrop image for banners and promotional materials. |
| **Logo Animation** | [`Logo animation HD.mp4`](public/assets/Logo%20animation%20HD.mp4) | Animated version of the logo for video intros. |
| **Pride Logo** | [`IGAPride.PNG`](public/assets/IGAPride.PNG) | Pride edition of the logo. |

See [`public/assets/README.md`](public/assets/README.md) for the full asset catalog.

## SEO & Analytics

### Sitemap

The site includes a static [`public/sitemap.xml`](public/sitemap.xml) submitted to Google Search Console. **Always update `sitemap.xml` when adding or removing pages** — add a new `<url>` entry with the full URL, `<lastmod>` date, and appropriate `<priority>`.

### Google Tag Manager

GTM is loaded via modular components (`src/components/HeadScripts.astro` and `src/components/BodyScripts.astro`). Set the `PUBLIC_GTM_ID` **GitHub Actions repository variable** (Settings → Secrets and variables → Actions → Variables) to your GTM container ID (e.g., `GTM-XXXXXXX`). For local development, copy `.env.example` to `.env` and fill in the value.