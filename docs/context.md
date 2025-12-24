# Project Context – Portfolio (Next.js)

## Owner
- Name: Kanishk Kumar Mishra
- Role: DevOps Engineer

## Purpose
- Static, fast, accessible personal portfolio to showcase skills, projects, and experience.

## Tech Stack
- Framework: Next.js (App Router) + TypeScript
- Styling: CSS (with Google fonts: Geist Sans/Mono)
- Fonts: `Geist`, `Geist_Mono` via `next/font/google`
- Hosting: Static-export friendly (Vercel/Netlify/GitHub Pages)

## Current Metadata
- Title: "Kanishk Kumar Mishra | DevOps Engineer"
- Description: "The portfolio of Kanishk Kumar Mishra, a DevOps Engineer specializing in Linux, automation, and web infrastructure."
- Favicon: `/favicon.svg`

## Site Structure (target)
- Hero: Name, role, tagline, CTA buttons
- About: Short bio, location, resume link
- Skills: Key stacks/tools (Linux, automation, CI/CD, cloud, containers)
- Projects: 3–6 featured items (title, desc, tech, links)
- Experience: Roles, companies, dates, impact bullets
- Contact: Email/social links

## SEO & Social
- Use semantic HTML and descriptive headings
- Add OpenGraph/Twitter meta (title, description, image)
- Ensure meaningful `alt` text on images

## Performance & Accessibility
- Prefer static rendering; avoid unnecessary client JS
- Optimize images; use responsive sizes
- Keyboard navigable; sufficient contrast; ARIA only when needed

## Coding Preferences (Assistant)
- Keep existing indentation/style; do not reformat unrelated code
- Functional React components, clear prop types, early returns
- Descriptive variable names; avoid unnecessary comments
- Minimal deps; no heavy UI libs unless requested
- Keep code linter-clean

## Content Inputs (to be filled)
- Bio: 2–4 sentences
- Resume URL: …
- Links: GitHub … | LinkedIn … | Email … | Other …
- Projects: list with title, summary, tech, demo, repo

## Working Notes
- Primary entry is `src/app/layout.tsx` with global fonts and metadata
- Consider MDX or JSON for content if needed later
- Add `.cursorignore` for `.next/` and `node_modules/` to reduce noise

## Assistant Usage
- Treat this file as source of truth for goals, tone, and constraints
- When adding features, default to static-first and accessibility best practices

