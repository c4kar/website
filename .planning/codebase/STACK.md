---
last_mapped_commit: unknown
---
# Tech Stack

**Focus:** Tech Stack
**Date:** 2026-05-02

## Languages
- **TypeScript (v5.9.3)** - Primary language for application logic and components.

## Runtime & Build Tools
- **Node.js (v25+)** - Execution environment for build scripts and dev server.
- **Vite (v7.3.1)** - Build tool and development server, configured in `vite.config.ts`.
- **PostCSS (v8.5.6)** - CSS transformation tool used alongside Tailwind.

## Frameworks & Libraries
- **React (v19.2.4)** - Core UI framework.
- **Tailwind CSS (v3.4.19)** - Utility-first CSS framework for styling.
- **Lucide React (v0.475.0)** - Icon library.
- **clsx & tailwind-merge** - Utilities for conditional CSS class merging (typically used in `src/lib/cn.ts`).

## Dependencies
- `@gsd-build/sdk` - SDK for project workflows and internal get-shit-done tasks.

## Configuration
- `vite.config.ts` - Configures Vite with the React plugin and path aliases (`@/` -> `src/`).
- `tsconfig.json` & `tsconfig.app.json` - TypeScript compiler options, targeting ES2020 and strict mode.
- `tailwind.config.js` - Tailwind theme and plugin configurations.
- `postcss.config.js` - PostCSS configuration for Tailwind integration.
