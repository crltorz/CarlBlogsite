# The Build Log

Personal internship blog for **Carl R. Torion** — documenting on-the-job training at **Miles Computer Ventures** (June 15 – August 1, 2026).

Built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **TypeScript**. Content is local structured data only (no database or auth).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/journey` | Timeline + weekly cards |
| `/journey/[slug]` | Full weekly article |
| `/projects` | Skills & practice areas |
| `/photos` | Filtered photo gallery + lightbox |
| `/about` | About Carl |
| `/reflections` | Reflections |

## Adding photos

1. Place images in `public/images/internship/`.
2. Prefer dated filenames, e.g. `2026-06-15_utp-rj45-cable-prep.jpg`.
3. Register each photo in `src/data/gallery.ts` with `id`, `src`, `alt`, `date`, and `category`.
4. Optionally attach paths to a week via `galleryImages` / `coverImage` in `src/data/weeks.ts`.

Categories: `Computer Builds` | `Troubleshooting` | `Printer Setup` | `Workdays` | `Team & Workplace` | `Deployments`.

## Editing journal entries

- Site meta & nav: `src/data/internship.ts`
- Weekly stories: `src/data/weeks.ts`
- Skills sections: `src/data/skills.ts`
- Gallery: `src/data/gallery.ts`

Keep prose first-person and tied to real OJT report facts.

## Deploy on Vercel

1. Push this repo to GitHub (or import the folder in the Vercel dashboard).
2. Create a new Vercel project and select the repository.
3. Framework preset: **Next.js** (defaults are fine).
4. Deploy. No environment variables are required for the static content site.

Or from the CLI:

```bash
npx vercel
```

## Package

`package.json` name: `the-build-log`.
