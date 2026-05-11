# hamid.khan — portfolio

Personal portfolio for **Hamid Khan**, GTM Engineer and Account Executive.
Static-rendered Astro single-page site, deployed to Cloudflare Pages.

**Live: [hamidkhan.pages.dev](https://hamidkhan.pages.dev)**

> *"The pipeline is the proof. Everything else is a story I am asking the buyer to trust."*

## What's on the page

- Hero with serif/sans display headline, live status pill, rotating value-prop tagline
- Animated stats counters + serif tool marquee
- Sample pipeline kanban (anonymized accounts)
- About story (engineering to GTM)
- Six operating principles synthesized from the modern sales canon (Braun, Miner, Voss, Iannarino, Blount, Hunter, Ross, Bertuzzi)
- Editorial pull quote
- Four anonymized case studies as CRM-style ticket cards (with system-flow diagrams)
- Live activity feed (terminal-styled log)
- Six systems I build, listed compactly
- Skills mapped to the sales cycle (Sourcing → Outreach → Qualification → Discovery → Pipeline → Automation)
- Track record across five roles (current + past)
- Now block (shipping / reading / studying / building, refreshed monthly)
- FAQ for hiring managers
- Resources (CV + playbooks on request)
- Contact card with online indicator
- ⌘K command palette · sticky right-rail section indicator · top scroll-progress bar · mobile drawer

## Stack

- **Astro 4** with static output, zero JS shipped by default (a small bundle for the IntersectionObserver, spotlight, tilt, magnetic, counters)
- **Tailwind CSS 3** with custom palette (`ink-*` neutrals + `lime` accent)
- **TypeScript** for content typing
- **Self-hosted fonts**: Inter Variable + Instrument Serif + JetBrains Mono via `@fontsource`
- **No CMS, no backend, no database.** All copy lives in `src/content/site.ts`

---

## Tech stack

- **Astro 4** with static output (zero JS shipped by default except a tiny IntersectionObserver for scroll reveals)
- **Tailwind CSS 3** with a small custom palette (`ink-*` + `accent`)
- **TypeScript** for content typing
- **Self-hosted fonts**: Inter Variable + JetBrains Mono via `@fontsource`
- **Lucide icons** via `astro-icon` when needed
- **No backend, no database, no CMS.** All copy lives in `src/content/site.ts`

---

## Local setup

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve the built site locally
```

Node 18+ required (built and tested on Node 24).

---

## Project structure

```
portfolio-site/
├── astro.config.mjs        # site URL, integrations
├── tailwind.config.mjs     # palette, fonts, animation
├── tsconfig.json
├── package.json
├── public/
│   ├── cv.pdf              # <-- DROP YOUR CV HERE before deploy
│   ├── favicon.svg
│   ├── og-image.svg        # OG/Twitter share image
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── content/site.ts     # single source of truth for ALL site copy
    ├── components/         # Nav, Hero, MetricsStrip, About, Systems,
    │                       # CaseStudies, Skills, Experience, Resources,
    │                       # Contact, Footer, SEO
    ├── layouts/Base.astro  # HTML shell + scroll-reveal script
    ├── pages/index.astro   # the only route
    └── styles/global.css   # Tailwind layers + reusable component classes
```

---

## How to update content

**99% of edits happen in one file:** `src/content/site.ts`.

Every section reads from a named export there:

| Section | Export |
|---|---|
| Hero copy + CTAs | `hero` |
| Metrics strip | `metrics` |
| About | `about` |
| What I build | `systems` |
| Case studies | `caseStudies` |
| Skills grid | `skillsGroups` |
| Experience cards | `experience` |
| Resources cards | `resources` |
| Contact panel | `contact` |
| Page title / meta | `seo` |
| Personal info | `profile` |

Edit, save, `npm run dev` reloads instantly. When happy: commit, push, Cloudflare rebuilds.

---

## Before first deploy: checklist

1. **Drop the real CV PDF** into `public/cv.pdf`. The Hero "Download CV" button and the Resources card both point here.
2. **Confirm the GitHub link** in `profile.github` (currently `https://github.com/HamidKhan96`).
3. **Decide on a Cloudflare Pages subdomain** (see below). Update `astro.config.mjs` → `site` and `public/sitemap.xml` to match.
4. **(Optional) Rasterize the OG image to PNG** for better LinkedIn/X compatibility:
   ```bash
   # macOS: install librsvg via brew, then:
   rsvg-convert -w 1200 -h 630 public/og-image.svg -o public/og-image.png
   # then change `seo.ogImage` in src/content/site.ts to "/og-image.png"
   ```
   SVG works on most modern platforms but LinkedIn and Slack prefer PNG.

---

## Deploy to Cloudflare Pages

### Step 1. Push to GitHub

```bash
# from inside this folder
git init
git branch -M main
git add .
git commit -m "feat: initial portfolio site"

# create a new private repo on GitHub first (suggested name: hamid-portfolio)
git remote add origin git@github.com:HamidKhan96/hamid-portfolio.git
git push -u origin main
```

### Step 2. Create the Cloudflare Pages project

1. Log in to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Authorize Cloudflare on your GitHub account if not already
3. Pick the `hamid-portfolio` repo
4. **Build settings:**
   - **Framework preset:** *Astro*
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory (advanced):** leave blank
   - **Node version (env var `NODE_VERSION`):** `20` (or `22`)
5. **Project name** — this becomes your URL: `<project-name>.pages.dev`. Try in order:
   1. `hamidkhan` → `hamidkhan.pages.dev`
   2. `hamidmkhan` → `hamidmkhan.pages.dev`
   3. `hamid-gtm` → `hamid-gtm.pages.dev`
   4. `hamidbuilds` → `hamidbuilds.pages.dev`

   Cloudflare tells you if the name is taken when you submit. Pick the first one that's free.
6. Click **Save and deploy**. First build runs in ~2 minutes.

### Step 3. After it's live

1. Copy the final `*.pages.dev` URL
2. Replace the placeholder in `astro.config.mjs` → `site:` and `public/sitemap.xml`, commit, push (Cloudflare auto-rebuilds)
3. Add Cloudflare Web Analytics:
   - In the Pages project → **Settings** → **Analytics** → enable Web Analytics
   - Cloudflare gives you a token. Paste it into `src/components/SEO.astro` where the analytics placeholder lives
   - Commit, push, done

### Fallback: GitHub Pages

If Cloudflare is down or you want a backup:

```bash
# in the repo
npm run build
# push dist/ to a gh-pages branch (manual) or use a GitHub Actions workflow
```

Final URL: `https://hamidkhan96.github.io/hamid-portfolio/` (uglier and slower; use only if needed).

---

## Add the URL to LinkedIn

After deploy:

1. Open https://www.linkedin.com/in/hamid-m-khan/ → **Edit profile**
2. **Contact info** → **Website** → paste the final URL → category "Portfolio"
3. **Featured** → **Add a link** → paste URL → title: `Portfolio — GTM systems and case studies`
4. (Optional) In your **About** section, add at the end:
   > Portfolio and proof of work: hamidkhan.pages.dev

---

## Performance + quality

- Astro ships ~zero JS by default. The only client script is a ~20-line IntersectionObserver for fade-in reveals.
- Fonts are self-hosted (no Google Fonts hit on first paint).
- Total page weight at build: ~550KB including fonts.
- Lighthouse targets: 95+ on Performance, Accessibility, Best Practices, SEO.

### Run a Lighthouse audit locally

```bash
npm run build
npm run preview &
npx lighthouse http://localhost:4321 --view
```

---

## Notes for recruiters and reviewers

- One source of truth for every word on the page: [`src/content/site.ts`](src/content/site.ts)
- Every case study is **anonymized** by default. Real outcomes, real systems, no client names exposed publicly.
- Dates omitted from the experience cards on purpose — the CV PDF has the full timeline.
- Stack chosen for clarity, not cleverness. Astro + Tailwind = recruiter-readable code.
