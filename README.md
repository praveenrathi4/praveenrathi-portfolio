# Praveen Rathi — Portfolio

Business automation portfolio for **Praveen Rathi** (Chartered Accountant · SME software consultant). Built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- Single-page marketing site with project case studies
- Experience timeline (CA → corporate MIS → custom systems)
- SEO: sitemap, robots.txt, Open Graph, JSON-LD
- Static generation for all project pages
- Mobile navigation and WhatsApp contact

## Requirements

- Node.js **18.18+** (see `engines` in `package.json`)

## Local development

```bash
npm install
cp .env.example .env.local   # optional: set your production URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run lint
npm run build
npm run start
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL (no trailing slash), e.g. `https://your-domain.com` |

Set this in **Vercel → Project → Settings → Environment Variables** for production so sitemap, Open Graph, and canonical URLs are correct.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Add `NEXT_PUBLIC_SITE_URL` with your live domain.
4. Deploy (framework preset: **Next.js**).

## Project images

Add screenshots under `public/projects/` (paths are defined in `src/data/projects.js`). If files are missing, the UI shows gradient placeholders automatically.

## Content updates

| What to change | File |
|----------------|------|
| Contact, nav, services, FAQ | `src/data/site.js` |
| Career timeline | `src/data/experience.js` |
| Projects & case studies | `src/data/projects.js` |

## License

Private portfolio — all rights reserved.
