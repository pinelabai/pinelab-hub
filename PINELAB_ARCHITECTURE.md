# Pine Lab: Architecture Specification
**Version 1.0 | For use with Claude Code + g-stack + UI-UX-Pro-Max**

---

## What This Is

Pine Lab (pinelab.ai) is a personal tool lab: a public-facing hub that showcases AI-powered tools built by a non-technical founder, in public, using vibe coding. Each tool is a standalone sub-app. The hub is a directory site that links to all of them.

This is not a SaaS product. It is a distribution and trust-building surface for a founder audience on LinkedIn and Substack.

---

## Guiding Principles

- **Each sub-app is fully independent.** One broken sub-app never affects another. No shared dependencies.
- **The hub is a static site.** No database. No backend. No auth. Just fast, clean HTML.
- **Every component is its own GitHub repo.** Technical visitors can fork. Non-technical visitors just use the tool.
- **Substack articles are linked manually.** No feed integration. One article per tool card. Added when the article exists.
- **Cloudflare everywhere.** Pages for hosting, Registrar for the domain. Single dashboard, no vendor sprawl.

---

## Repository Structure

### One repo per project. Full stop.

```
pinelab-hub/           # The hub directory site (pinelab.ai)
pinelab-geo/           # GEO score tool (geo.pinelab.ai)
pinelab-sitebuilder/   # Website scraper + design intelligence (builder.pinelab.ai)
pinelab-slackqa/       # Slack QA ticket tool (qa.pinelab.ai)
```

Every repo is:
- Public on GitHub
- Deployed independently via Cloudflare Pages
- Connected to its own custom subdomain

---

## Hub Site: pinelab.ai

### Purpose
A single-page directory. Visitors land here from LinkedIn or Substack. They see the tools, click into one, and optionally read the article behind it.

### Stack
- **Framework:** Next.js 14 (App Router) via g-stack
- **Styling:** Tailwind CSS + shadcn/ui via UI-UX-Pro-Max
- **Hosting:** Cloudflare Pages (static export)
- **Domain:** pinelab.ai (register at registrar.cloudflare.com)
- **Analytics:** Cloudflare Web Analytics (free, privacy-first, no cookie banner needed)

### Pages
```
/           # Home: hero + tool grid
/about      # One paragraph. Who built this. Why. Link to LinkedIn + Substack.
```

That is it. No blog. No contact form. No nav clutter.

### Tool Card Structure
Each card on the home page contains:
```
[ Tool Name ]
[ One-line description ]
[ Launch Tool → ]        # Links to the sub-app subdomain
[ Read the article → ]   # Links to Substack post (hidden until article exists)
[ View on GitHub → ]     # Links to the public repo
```

Cards are added one by one as tools launch. The page starts with three.

### Hero Copy (draft)
```
Pine Lab.
Tools I built while building PineChat.
For founders, professionals, and anyone who thinks AI should do the boring parts.

Built with Claude Code. Open source. Use at your own risk.
```

---

## Sub-App Standard

Every sub-app follows this structure to stay consistent and maintainable.

### File Structure (Next.js)
```
pinelab-[toolname]/
├── app/
│   ├── layout.tsx          # Shared layout with Pine Lab nav strip
│   ├── page.tsx            # Main tool UI
│   └── api/                # API routes if needed (server-side key proxying)
├── components/
│   └── PineLabBadge.tsx    # Footer badge: "A Pine Lab tool · pinelab.ai"
├── public/
├── .env.local.example      # Template for required API keys (never commit .env)
├── README.md               # What it does, how to run it, how to get API keys
├── CLAUDE.md               # Claude Code context file (see below)
└── package.json
```

### CLAUDE.md (required in every repo)
This file tells Claude Code what the project is, what the stack is, and what not to touch. Template:

```markdown
# CLAUDE.md

## Project
[Tool name]. Part of the Pine Lab suite (pinelab.ai).

## Stack
Next.js 14 (App Router), Tailwind CSS, shadcn/ui, Cloudflare Pages.

## Rules
- Never commit .env files. Use .env.local only.
- All external API calls go through /app/api/ routes. Never call APIs from the client.
- Keep the PineLabBadge component in the footer of every page.
- Do not add dependencies without asking.

## Deploy
Cloudflare Pages. Build command: `next build`. Output: `out/` (static export).
```

### PineLabBadge Component (consistent across all sub-apps)
```tsx
export function PineLabBadge() {
  return (
    <div className="fixed bottom-4 right-4 text-xs text-neutral-400">
      A{" "}
      <a href="https://pinelab.ai" className="underline hover:text-white">
        Pine Lab
      </a>{" "}
      tool · Built with Claude Code · Open source
    </div>
  );
}
```

---

## Cloudflare Setup

### Domain
Register pinelab.ai at registrar.cloudflare.com. Takes 5 minutes.

### DNS Records (add after Pages deploys are live)
```
Type    Name        Value
CNAME   @           pinelab.pages.dev        # Hub
CNAME   geo         pinelab-geo.pages.dev    # GEO tool
CNAME   builder     pinelab-sitebuilder.pages.dev
CNAME   qa          pinelab-slackqa.pages.dev
```

### Cloudflare Pages Settings (per repo)
```
Framework preset:     Next.js
Build command:        next build
Build output dir:     out
Root directory:       /
Node version:         20
```

### Analytics
Enable Cloudflare Web Analytics on the hub and each sub-app. Free. No GDPR banner required. You get page views, top pages, and referrers. That's all you need right now.

---

## Launch Sequence

### Step 1: Register pinelab.ai
Go to registrar.cloudflare.com. Check availability. Register.

### Step 2: Build and deploy the hub
```bash
npx create-next-app@latest pinelab-hub
cd pinelab-hub
# Apply g-stack and UI-UX-Pro-Max
# Build the one-page directory (tool cards)
# Push to GitHub
# Connect to Cloudflare Pages
# Point pinelab.ai to it
```

### Step 3: Deploy each sub-app
Repeat per tool. Each gets its own GitHub repo and Cloudflare Pages project.

### Step 4: Write the Substack articles
One article per tool. Format: what problem it solves, how you built it (non-technical), what surprised you. Then add the article link to the tool card on the hub.

---

## Vibe Coding Disclosure

Every sub-app footer and the hub hero both carry this line:

> Built with Claude Code. Open source. Use at your own risk.

This is not a disclaimer buried in fine print. It is part of the brand. Own it.

---

## What This Is Not

- Not a SaaS. No subscriptions, no auth, no dashboard.
- Not a portfolio site. No "hire me" energy.
- Not a blog. Substack handles writing. This handles tools.
- Not a monorepo. Each tool is independent.

---

## Three Tools at Launch

| Tool | Subdomain | Status |
|---|---|---|
| GEO Score Checker | geo.pinelab.ai | In progress |
| Website Builder (scraper) | builder.pinelab.ai | In progress |
| Slack QA Ticket Generator | qa.pinelab.ai | In progress |

---

*Pine Lab is a side project of Ben Moskoff, Founder & CEO of PineChat AI (pinechat.ai).*
