# 💻 Portfolio Website

A modern, minimalist personal portfolio built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS**. Follows the **shadcn/ui** design language with the **Geist** typeface, a dark Zinc color palette, and a single-page tabbed layout — no scrolling, no clutter.

> **Live:** [c4kar.github.io/website](https://c4kar.github.io/website/)

---

## ✨ Features

- **Single-Page, No-Scroll Layout** — Hero panel + tabbed content presented side-by-side; everything visible at a glance
- **shadcn/ui Design Language** — HSL CSS variables, Zinc dark palette, consistent spacing and radii
- **Geist Typography** — Self-hosted Geist Sans & Geist Mono (`.woff2`), no external font requests
- **Tabbed Navigation** — About · Projects · Contact tabs with zero route changes
- **Project Showcase** — Cards with status indicators (active / idle / archived), tech badges, and source/live links
- **Email Obfuscation** — Address stored as Base64-encoded parts and decoded only at runtime; `mailto:` link generated via JS with no `href` in the DOM
- **Responsive** — Desktop two-column layout gracefully collapses to a stacked mobile view
- **Lightweight** — Minimal dependency tree; no router, no MDX pipeline, no CMS
- **GitHub Pages Ready** — One-push deployment with Vite's `base` path pre-configured

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **Vite** | 7.x | Build tool & dev server |
| **React** | 19.x | UI framework |
| **TypeScript** | 5.9 | Type-safe JavaScript |
| **Tailwind CSS** | 3.4 | Utility-first styling |
| **Geist** | 1.7 | Font package (Sans + Mono) |
| **Lucide React** | 0.475 | Icon library |
| **clsx + tailwind-merge** | Latest | Conditional class merging |
| **Node.js** | 18+ | Runtime environment |

---

## 📋 Prerequisites

- **Node.js** 18+ — `node --version`
- **npm** — `npm --version`
- **Git** — `git --version`

---

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/c4kar/portfoiloWebsite.git
cd portfoiloWebsite

# 2. Install
npm install

# 3. Dev server (http://localhost:5173)
npm run dev
```

---

## 📁 Project Structure

```
portfoiloWebsite/
├── public/
│   └── fonts/                  # Self-hosted Geist woff2 files
├── src/
│   ├── App.tsx                 # Root layout — Hero aside + Tabbed content
│   ├── main.tsx                # React entry point
│   ├── components/
│   │   ├── HeroSection.tsx     # Left panel — name, title, bio, social links
│   │   ├── AboutView.tsx       # About tab — bio, skills badges, experience
│   │   ├── ProjectsView.tsx    # Projects tab — scrollable card list
│   │   ├── ContactView.tsx     # Contact tab — obfuscated email, location, socials
│   │   └── ui/
│   │       ├── Badge.tsx       # shadcn-style badge (secondary / outline)
│   │       ├── Button.tsx      # shadcn-style button & anchor variants
│   │       ├── Card.tsx        # shadcn-style card with header slots
│   │       └── Tabs.tsx        # Controlled tab bar with render-prop children
│   ├── lib/
│   │   ├── cn.ts              # clsx + tailwind-merge helper
│   │   ├── data.ts            # Site config, skills, experience, and projects
│   │   └── obfuscate.ts       # Base64 email decode & mailto opener
│   └── styles/
│       └── globals.css         # Tailwind directives, Geist @font-face, CSS vars
├── index.html                  # HTML shell with OG meta tags
├── vite.config.ts              # Vite config — base path, path aliases
├── tailwind.config.js          # Tailwind theme — shadcn/ui color tokens, Geist fonts
├── tsconfig.json               # Base TypeScript config
├── tsconfig.app.json           # App-specific TypeScript config
└── package.json                # v2.0.0 — scripts, dependencies
```

### Key Directories

| Path | Description |
|---|---|
| `src/components/` | View-level components (Hero, About, Projects, Contact) |
| `src/components/ui/` | Reusable primitives following shadcn/ui conventions |
| `src/lib/` | Utility functions, data constants, and type definitions |
| `src/styles/` | Global CSS — Tailwind base, Geist fonts, CSS custom properties |
| `public/fonts/` | Self-hosted Geist Sans & Mono `.woff2` files |

---

## 🎨 Design System

The UI is built on **shadcn/ui** conventions:

- **Color Tokens** — HSL CSS variables for `background`, `foreground`, `card`, `muted`, `accent`, `border`, etc.
- **Dark Theme Only** — Zinc-based palette (`--background: 0 0% 3.9%`)
- **Typography** — Geist Sans (body) + Geist Mono (code/handles)
- **Radii** — `--radius: 0.75rem` with `lg` / `md` / `sm` variants
- **Components** — Badge, Button, Card, Tabs — all accept `className` via `cn()` for composition

---

## 🔒 Email Obfuscation

The contact email is **never present in the HTML source**. It's stored as two Base64-encoded fragments in `src/lib/obfuscate.ts` and decoded only after React hydration via `useEffect`. The `mailto:` link is triggered programmatically with `window.location.href` — no `<a href="mailto:…">` ever exists in the DOM.

---

## 📋 Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript type-check + production build → `/dist` |
| `npm run preview` | Preview the production build locally |

---

## 🚀 Deployment (GitHub Pages)

The `vite.config.ts` base path is set to `/website/`. Push to `main` and deploy via GitHub Pages (Actions or manual):

```bash
npm run build
# deploy /dist to GitHub Pages
```

Your site will be live at: `https://c4kar.github.io/website/`

---

## 🏗 Architecture Overview

```
App.tsx
├── <aside>  HeroSection       ← Left panel (fixed width)
└── <section> Tabs
              ├── AboutView     ← Bio, Skills (Badge), Experience
              ├── ProjectsView  ← Scrollable Card list from PROJECTS[]
              └── ContactView   ← Obfuscated email, location, socials
```

- **No Router** — The entire site is a single component tree; tab switching is local state
- **No CMS / MDX** — Content lives in `src/lib/data.ts` as typed constants
- **Render-Prop Tabs** — `<Tabs>` accepts a `(activeTab) => ReactNode` child for zero-overhead tab rendering

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: description"`
4. Push and open a Pull Request

### Guidelines

- Follow existing code style and component conventions
- Use proper TypeScript types
- Test in dev mode before submitting
- Keep the dependency footprint minimal

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center"><sub>Made with ❤️ using Vite + React 19 + Tailwind CSS</sub></p>
