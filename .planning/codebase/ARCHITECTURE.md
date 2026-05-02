---
last_mapped_commit: unknown
---
# Architecture

**Focus:** System Architecture
**Date:** 2026-05-02

## Core Pattern
- **Component-Based UI:** The application is built using React components with a focus on functional components and hooks.
- **Static Content:** Data appears to be static and is likely imported from local data structures rather than fetched dynamically from an external API.

## Data Flow
- **Props Down:** Data is passed down from top-level layout components (like `src/App.tsx`) into specific view components (`HeroSection`, `AboutView`, `ProjectsView`, `ContactView`).
- **State Management:** Local component state via React Hooks (`useState`, `useEffect`). No global state management library (like Redux or Zustand) is present.

## Abstractions
- **UI Components:** Reusable UI components reside in `src/components/ui/`, likely adhering to a headless or unstyled component pattern extended with Tailwind classes (similar to shadcn/ui).
- **Utility Functions:** Small helper functions in `src/lib/`, such as `cn.ts` for Tailwind class merging and `obfuscate.ts` for text obfuscation.

## Entry Points
- `index.html` -> loads `src/main.tsx` -> renders `<App />` component.
