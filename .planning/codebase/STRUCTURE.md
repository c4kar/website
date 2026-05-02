---
last_mapped_commit: unknown
---
# Structure

**Focus:** Directory Layout
**Date:** 2026-05-02

## Directory Layout
- `public/`: Static assets (images, icons) served directly without Vite processing.
- `src/`: Source code directory.
  - `components/`: Feature-specific and layout components (`HeroSection.tsx`, `AboutView.tsx`, etc.).
    - `ui/`: Reusable, generic UI components (e.g., `Tabs.tsx`, buttons, inputs).
  - `lib/`: Utility functions and static data.
    - `cn.ts`: Classname utility.
    - `data.ts`: Static data source.
    - `obfuscate.ts`: Obfuscation utility.
  - `styles/`: Global CSS or SCSS stylesheets (e.g., `index.css`).

## Key Locations
- **Main Layout:** `src/App.tsx` handles the overarching page layout, responsive breakpoint divisions, and routing/tab switching.
- **Entry Point:** `src/main.tsx` mounts the React application to the DOM.
- **Config:** `vite.config.ts`, `tailwind.config.js`, `tsconfig.json`.

## Naming Conventions
- **Components:** PascalCase (e.g., `HeroSection.tsx`, `AboutView.tsx`).
- **Utilities:** camelCase or kebab-case (e.g., `cn.ts`, `obfuscate.ts`).
- **Directories:** kebab-case or single lowercase words (`components`, `lib`, `ui`).
