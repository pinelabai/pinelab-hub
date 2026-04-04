# CLAUDE.md — pinelab-hub

## What this is
The hub directory site for Pine Lab (pinelab.ai). A static, single-page tool directory
built by a non-technical founder. No backend. No auth. No database.

## Stack
- Next.js 14 (App Router), static export
- Tailwind CSS + shadcn/ui (UI-UX-Pro-Max design system)
- Cloudflare Pages (hosting)
- Cloudflare Web Analytics

## Design system
- Font: DM Serif Display (headings) + DM Mono (body)
- Background: #0c0c0b (near black)
- Accent green: #3d6b4f (pine green)
- Gold accent: #c8b87a
- All colors defined as CSS variables in globals.css

## Rules — read carefully before touching anything
1. This is a STATIC site. No server components that require a Node process. Use `output: 'export'` in next.config.js.
2. No new dependencies without asking first.
3. The tool card grid lives in `app/page.tsx`. Each card is a `ToolCard` component.
4. To add a new tool, add a new entry to the `tools` array in `app/page.tsx`. Do not add new files for new tools.
5. Substack article links are optional per card. If the article does not exist yet, pass `articleUrl: null` and the link will be hidden.
6. GitHub repo links are always shown, even if the repo is not public yet. Pass the intended URL.
7. The footer and disclaimer text ("Built with Claude Code. Use at your own risk.") must never be removed.
8. Do not change the color palette without being asked explicitly.

## Tool card data shape
```ts
type Tool = {
  number: string;        // "01", "02", etc.
  name: string;          // Display name
  desc: string;          // One or two sentences. No jargon.
  status: 'live' | 'coming-soon';
  appUrl: string;        // e.g. https://geo.pinelab.ai
  articleUrl: string | null;  // Substack URL or null
  githubUrl: string;     // GitHub repo URL
};
```

## Deployment
- Build command: `next build`
- Output directory: `out`
- Node version: 20
- Connected to Cloudflare Pages via Git. Every push to `main` deploys automatically.

## Sub-apps
Each sub-app is a separate repo. They link back to pinelab.ai in their footer.
Do not try to import or reference sub-app code from this repo. They are fully independent.

Sub-app repos:
- pinelab-geo (geo.pinelab.ai)
- pinelab-sitebuilder (builder.pinelab.ai)
- pinelab-slackqa (qa.pinelab.ai)
