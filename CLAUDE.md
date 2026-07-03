# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/landing site for **Kabseh** (a food-delivery app), deployed as a **static
export** to an Apache/cPanel host at `web.kabseh.app`. It is a Next.js 15 App Router +
React 19 project with English/Arabic (RTL) i18n. It is **fully self-contained** — there is
no backend of its own and no runtime API it depends on: all content is either local or
built in, and the forms POST to a third-party form service (Web3Forms).

## Commands

```bash
npm run dev     # dev server (Turbopack) on http://localhost:3000
npm run build   # static export -> out/  (this IS the deploy artifact; upload out/ to the host)
npm run start   # serve a non-export build; rarely used given output:'export'
npm run lint    # next lint (ESLint). NOT run during build — run it manually before committing.
```

- **No test runner is configured.** `src/components/__tests__/ContactUs.test.js` is written
  for Jest + React Testing Library, but neither Jest nor a `test` script exists. Running the
  tests requires adding `next/jest` + RTL first (see the note at the top of that file).
- ESLint is disabled during `next build` (`eslint.ignoreDuringBuilds`), so a green build says
  nothing about lint — run `npm run lint` yourself.

## Architecture

### Static export, no backend in this repo
`next.config.ts` sets `output: 'export'`, `images.unoptimized`, and `trailingSlash: true`.
Consequences to respect:
- **No API routes, no server components with runtime data, no server actions, no middleware.**
  Anything dynamic is either fetched at build time or fetched client-side in the browser.
- All `next/image` usage must work unoptimized. `trailingSlash` means pages emit
  `folder/index.html` so clean URLs resolve on the static host.

### Data flow — everything is local
There is **no application backend**. The two data concerns are:
- **Partner brands** (`src/data/brands.js`): a static list of 8 restaurants with local logos in
  `public/images/restaurant-brands/`. Consumed by the homepage marquee (`Clients.js`), the
  `brands/[slug]` pages, and `sitemap.ts`. This was previously fetched from an API and has been
  frozen to a local snapshot — editing a brand means editing this file + dropping a logo, then
  rebuilding.
- **Form submissions** (`src/lib/api.js`): `submitContact`, `submitCaptainRegistration`,
  `submitRestaurantRegistration` all POST to **Web3Forms** (`https://api.web3forms.com/submit`)
  using `NEXT_PUBLIC_WEB3FORMS_KEY`. No server of ours receives them; Web3Forms emails them to
  the account tied to the key. **Forms are dead until that key is set.**

### Routing (`src/app/`)
App Router entry files are **TypeScript** (`layout.tsx`, `page.tsx`, `sitemap.ts`, the
`register/*` and `brands/[slug]` pages); everything under `src/components/` is plain
**`.js`** (JSX). Keep that split.
- `page.tsx` — the homepage is a single `"use client"` component that composes the section
  components (`Hero`, `About`, `EasySteps`, `RegisterResturant`, `Clients`, `DownloadApp`,
  `ContactUs`, `Footer`). Each section renders a DOM `id` from `SECTION_IDS` in
  `Navgiation.js`; the nav drives smooth-scroll + active-link highlighting via
  `IntersectionObserver` against those ids. Adding/renaming a section means updating both.
- `brands/[slug]/page.tsx` — `generateStaticParams` enumerates brand slugs from
  `src/data/brands.js` and `dynamicParams = false`, so only known slugs are built and anything
  else 404s.
- `register/restaurant` and `register/captain` both render `RegistrationLayout` with a
  `type` prop; `RegistrationLayout` picks copy, icon, and the form component from an internal
  `CONFIG` map.

### i18n (custom, client-side only)
Despite `i18nConfig.js`/`next-i18n-router` being present, the **active** mechanism is a
hand-rolled setup:
- `src/lib/i18n.js` bundles `public/locales/{en,ar}/common.json` directly (no HTTP), inits
  i18next with `en` default, and on the client reads/writes the chosen language from
  `localStorage` and sets `document.documentElement.dir` (`rtl` for `ar`) + `lang`.
- `src/components/TranslationProvider.js` wraps the app in `layout.tsx`.
- In components: `const { t, i18n } = useTranslation()`, then `t('some.key')`. RTL is derived
  as `i18n.language === 'ar'` and used to flip `dir`, alignment, and icon rotation inline.
- **Every user-facing string must live in both `common.json` files** and be referenced by key.

### Forms, spam protection
Forms use a native `<form>` + `FormData` (not react-hook-form for the simple ones), post via
the `src/lib/api.js` helpers to Web3Forms, and report status with `react-hot-toast`.
- **Honeypot**: a visually-hidden field named `botcheck`, always sent. Web3Forms rejects the
  submission if it's non-empty. (This replaced the old `company_website` honeypot; the field
  name `botcheck` is Web3Forms-specific — don't rename it.)
- There is **no captcha** — Cloudflare Turnstile was removed because it needs a server to
  verify the token, which this site no longer has. Web3Forms does its own spam filtering.

Error handling convention: on any submit failure, show a retry toast **without** clearing the
entered values (`form.reset()` runs only on success).

### Styling
Tailwind v4 via `@tailwindcss/postcss`. The brand theme (primary red `#d90217`, `brand.green`,
`cream`, `ink`, custom radii/shadows, Montserrat font var) lives in `tailwind.config.js`.
`src/app/globals.css` adds CSS variables and hand-written component classes used across the
site — `.btn`, `.btn-primary`, `.btn-green`, `.btn-light`, `.brand-loader`, etc. Reach for
those existing classes before inventing new markup.

## Deploy
There is **no CI/CD or deploy script in this repo** — deployment is manual.
1. `npm run build` → produces the fully static site in `out/`.
2. Upload the **contents of `out/`** to the web root of the Apache/cPanel host serving
   `web.kabseh.app`.

Details and gotchas:
- Everything in `public/` is copied verbatim into `out/` (e.g. `robots.txt`, `manifest.json`,
  `favicon.ico`, `_headers`).
- `trailingSlash: true` makes every route emit `folder/index.html`, which is what lets clean
  URLs resolve on a plain file host.
- **`public/_headers` does nothing on Apache/cPanel.** It uses the Netlify/Cloudflare Pages
  header syntax; a bare Apache host ignores it. The caching + security headers it declares
  (1-year immutable for assets, `X-Frame-Options`, `X-Content-Type-Options`, etc.) must be
  reproduced in an `.htaccess` if they're actually required — there is no `.htaccess` in the
  repo today.
- Deploying to a **subfolder** instead of the domain root requires uncommenting `basePath` and
  `assetPrefix` in `next.config.ts` (both are present but commented for the current root deploy).

## History
This started as a server-backed app (MongoDB + email, then a central REST API) and was
converted to a fully static, backend-free site. The MongoDB models, email templates,
`mongodb.js`/`dbConnect.js`, `SendEmail.js`, the axios API client, and Cloudflare Turnstile
have all been **removed** — don't reintroduce a server dependency. Brands are local data; forms
go to Web3Forms.

## Conventions & gotchas
- Component filenames are as-is, including the misspellings `Navgiation.js`, `RegisterCaptin.js`,
  `RegisterResturant.js`, `ModalCaptin.js` — match existing imports.
- Path alias `@/*` → `src/*` exists in `tsconfig.json`, but most components import via relative
  paths; follow the neighbours in the file you're editing.
- `console.*` is stripped in production builds (`compiler.removeConsole`).
- Absolute URLs, SEO metadata, and the sitemap are hardcoded to `https://web.kabseh.app`
  (see `layout.tsx`, `sitemap.ts`, `brands/[slug]/page.tsx`). Update all three together if the
  domain changes.
- The only runtime env var is `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env`). Only `NEXT_PUBLIC_*`
  vars reach the browser.
