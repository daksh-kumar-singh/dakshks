# dakshks-site

A clean, student-scientist portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.
- Dark mode toggle (next-themes)
- Manual Publications & Projects data
- CV page with downloadable PDF
- Social links (ORCID, Scholar, arXiv, ResearchGate, GitHub)

## Quickstart

```bash
# 1) Install dependencies (choose one)
npm install
# or
pnpm install
# or
yarn

# 2) Run
npm run dev
```

Then open http://localhost:3000

## Deploy on Vercel
- Push to GitHub, then import the repo in Vercel.
- Set the domain to dakshks.com once purchased at your registrar.
- Replace the placeholder CV at `public/cv/Daksh_Singh_CV.pdf`.

## Edit data
- Publications: `src/data/publications.ts`
- Projects: `src/data/projects.ts`
- Social links live in `src/components/social-links.tsx`
- Contact emails in `src/app/contact/page.tsx`
