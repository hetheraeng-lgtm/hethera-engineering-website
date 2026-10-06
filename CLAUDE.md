# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for **Hethera**, a WhatsApp bill-payment assistant (airtime, data, cable TV, electricity) operated by Hethera Engineering Ltd. The backend lives in the sibling `../Hethera` repo (FastAPI + LangGraph agent); this site only describes it. Besides marketing, the site exists to pass **Meta's WhatsApp Business verification**, which compares the site against the company's CAC registration documents. That drives several of the rules below.

Create React App (react-scripts 5) + TypeScript + React 19, plain CSS. No router library, no state library (the empty `hooks/`, `layout/`, `models/`, `redux/` folders are leftovers).

## Commands

```bash
npm install            # .npmrc sets legacy-peer-deps=true; CI uses `npm ci --legacy-peer-deps`
npm start              # dev server (client-rendered only; no prerender)
npm run build          # react-scripts build && node scripts/prerender.js
npx serve build        # preview the real output; serve does clean URLs like Firebase
rsvg-convert -w 1200 -h 630 scripts/og-image.svg -o public/og-image.png   # regenerate link-preview image
```

There are no tests yet (`npm test` runs Jest via react-scripts and finds none).

`npx tsc --noEmit` currently fails before checking any code: `tsconfig.json` sets `"moduleResolution": "bundler"`, which the installed TypeScript 4.9 does not support. `npm run build` does not hit this.

Deploys are GitHub Actions → Firebase Hosting (project `hethera-9264e`): push to `main` → dev, `staging` → staging, `prod` → prod.

## Architecture

**Single source of business facts — `src/config/company.ts`.** Legal name, RC number, registered address (also split into `address` parts for structured data), email, phone, support hours, `SITE_URL`, and `WHATSAPP` (the display number plus `href`, the `wa.me/message/...` short link every "Chat on WhatsApp" button uses). Every page, the footer, the legal pages and the JSON-LD read from here, so change values here, never inline. Legal name, RC number and registered address must match the CAC documents exactly (including the CAC spelling "Adisa Basua Street"), because Meta compares them. The contact `phone` (+234 811 999 5541) and the WhatsApp number (+234 704 452 9110) are intentionally different.

**Routing — `src/routes.ts`.** One `ROUTES` array (path, SEO title, meta description, page component) plus `NOT_FOUND`. `App` takes an optional `path` prop (used by prerender) and otherwise looks up `window.location.pathname`. Links are plain `<a href>`; every navigation is a full page load. To add a page: add an entry to `ROUTES`. Prerendering, the sitemap and the page title all pick it up from there.

**Prerendering — `scripts/prerender.js`.** Runs after the CRA build. It loads the TypeScript source directly through `sucrase/register`, which is why `sucrase` is a dev dependency. It `renderToString`s each route into the built `index.html` template and writes `build/<path>.html` and `build/404.html`, injecting per-page `<title>`, description, canonical, Open Graph/Twitter tags and JSON-LD: Organization on every page; WebSite, Service and FAQPage (from `FAQS` exported by `HomePage.tsx`) on home. It also generates `build/sitemap.xml` and `build/robots.txt`, so there is no `public/robots.txt`. `src/index.tsx` hydrates when `#root` already has markup and otherwise does a normal `createRoot`. Consequences:
- Components must render the same on the server and in the browser. Read `window` only inside effects or via the `path` prop pattern in `App`.
- Anything imported by the page tree must load under plain Node + sucrase. `.css` imports are stubbed out, and only `index.tsx` imports CSS.

**Hosting — `firebase.json`.** Three targets (prod, staging, dev) with `cleanUrls` (`/privacy` → `privacy.html`) and `trailingSlash: false`. There is deliberately no catch-all rewrite, so unknown paths get a real 404 from `404.html` (marked noindex). Staging and dev send `X-Robots-Tag: noindex`.

**Styling.** A single `src/styles/global.css` with design tokens on `:root` (dark green `--ink`, lime `--accent`, cream `--ground`) and BEM-ish class names. Fonts are Bricolage Grotesque (display), Geist (body) and Geist Mono, loaded from Google Fonts in `public/index.html`. Icons are inline stroke SVGs in `components/Icon.tsx`, never emoji. The logo mark (lime "H" on a dark rounded square) is `LogoMark`; `public/favicon.svg` is the source for the favicon and PNG app icons.

## Content rules

- Only claim product features that exist in the `../Hethera` backend. Unbuilt features (scheduled payments, Abeg Nahh) are shown with a "Coming soon" tag. Don't advertise transaction limits, web receipts or in-chat account deletion. Meta reviews this site, so inaccurate claims are a verification risk.
- Legal pages (`src/pages/legal/`) describe the backend's real data handling: hashed PIN entered via WhatsApp Flow, Paystack card token only, Anthropic as AI processor, conversation memory expiring after `CHAT_MEMORY_HOURS` (mirrors the backend's `AGENT_IDLE_TIMEOUT_MINUTES`). Update them if that behavior changes.
- Keep the footer disclaimers: not a bank, Paystack/VTpass named, not affiliated with Meta.
