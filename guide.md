# readydevstart.indiegameacademy.com — Wiki Platform

This repository contains the complete static site source code for the Indie Game Academy (IGA) developer launchpad and wiki. The platform serves as an accessible, read-only guide helping aspiring game creators learn game development fundamentals, access studio templates, find resources, and transition into indie studio founders.

## 1. Project Parameters & Environment

* **Hosting Target:** GitHub Pages
* **Domain:** `readydevstart.indiegameacademy.com` (Configured via Namecheap CNAME)
* **Architecture:** Static Site Generator (Astro or clean Jekyll setup optimized for GitHub Pages compiling via GitHub Actions).
* **Database:** None. All content reads from local Markdown (`.md`) files and structured JSON files stored in the repository.
* **Access Pattern:** 100% read-only for public visitors. No user accounts, authentication systems, or sessions required.

---

## 2. Brand & Style Guide (Strict Enforcement)

Apply these exact visual styling classes and constraints across all layouts, components, and Markdown renderings.

### 2.1 Color Palette
* **Primary Dark (Text & Strong Accents):** `#463418`
* **Vibrant Pink (Action buttons, primary highlights):** `#f6517c`
* **Gold/Yellow (Secondary accents, warnings, quest alerts):** `#f3d73e`
* **Wizard Blue (Links, informational callouts, borders):** `#6ab4e8`
* **Background Off-White (Global site background):** `#ecece9`

### 2.2 Typography
* **Headings (`<h1>` through `<h6>`, Page Titles, Hero Banner text):** `Russo One`, sans-serif.
* **Body Text, Sidebar UI, Navigation, Tables, Code elements:** `Helvetica`, Arial, sans-serif.

### 2.3 Tone & Feel
The user interface must reflect the IGA spirit: clean, highly scannable, friendly, and gamified. Use game-inspired UI terms where appropriate (e.g., categorizing tools under "Equipment," guides under "Quest Logs," templates under "Blueprints").

---

## 3. Page Layout & Wireframe Architecture

The application uses a responsive master layout divided into five major global sections.
