---
last_mapped_commit: unknown
---
# Integrations

**Focus:** External Integrations
**Date:** 2026-05-02

## External APIs
- None detected natively in the repository. It is a client-side portfolio application.

## Databases
- None. The application appears to use static data located in `src/lib/data.ts`.

## Authentication Providers
- None. This is a public-facing static portfolio.

## Webhooks & Analytics
- No external webhooks or analytics scripts are defined in the `package.json` or explicitly in the primary config. (May be injected at hosting level, e.g., Vercel/Netlify, but not hardcoded).

## Hosting
- Project is built as a static site using `vite build` (`npm run build`). Can be hosted on any static hosting provider (Vercel, Netlify, GitHub Pages, etc.). Configured with `base: '/website/'` in `vite.config.ts`.
