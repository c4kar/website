---
last_mapped_commit: unknown
---
# Concerns

**Focus:** Technical Debt & Areas of Concern
**Date:** 2026-05-02

## Tech Debt
- **Lack of Tests:** The project currently lacks any form of automated testing, making future refactoring or dependency updates riskier.

## Fragile Areas
- **Static Data:** Depending solely on `src/lib/data.ts` can become unmanageable if the portfolio grows significantly. Considerations for a headless CMS might be needed in the future.
- **Hardcoded Breakpoints:** Tailwind classes use extensive hardcoded viewport logic (`lg:w-[360px]`, `lg:max-h-[832px]`). Changes to the layout design could require significant touch-ups across `App.tsx` and child components.

## Security
- **Static App:** As a static React application, security concerns are relatively low.
- **Obfuscation:** Uses `src/lib/obfuscate.ts` likely to hide email or contact information from basic scrapers. Ensure this obfuscation is robust enough if the data is sensitive.

## Performance
- **Client-Side Rendering:** As a standard Vite SPA, the initial load time might suffer on slower networks compared to SSR solutions like Next.js, though for a small portfolio this is likely negligible.
