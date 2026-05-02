---
last_mapped_commit: unknown
---
# Conventions

**Focus:** Code Style & Patterns
**Date:** 2026-05-02

## Code Style
- **TypeScript:** Strict typing is enforced via `tsconfig.json`. Interfaces and types are used to define component props.
- **React Components:** Functional components using hooks. JSX is used for templating.
- **Styling:** Tailwind CSS utility classes applied directly via `className`.
- **Path Aliasing:** Use of `@/` to import from the `src` directory (configured in `vite.config.ts` and `tsconfig.json`).

## Patterns
- **Tailwind Merge:** Using a utility like `cn()` (clsx + tailwind-merge) to allow components to accept and override Tailwind classes elegantly.
- **View Separation:** The main app is split into distinct views (`AboutView`, `ProjectsView`, `ContactView`) mapped to a `Tabs` navigation component, keeping `App.tsx` clean.

## Error Handling
- Localized error handling, typically through basic try-catch blocks in async functions, though minimal given the static nature of the app. Error boundaries are not explicitly visible at the root level.
