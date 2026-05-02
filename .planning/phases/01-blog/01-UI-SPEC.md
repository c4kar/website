# Phase 1: Blog UI Design Contract

## Overview
This phase introduces a minimalist, Markdown-driven Blog system directly integrated into the existing Tabbed layout. It draws inspiration from `ossama.is/writing` but enforces a dark mode aesthetic consistent with the portfolio's `bg-background` and glowing UI constraints.

## Visual Requirements

### 1. Blog Index (`BlogView.tsx`)
A clean, text-forward list of articles.
- **Layout:** Vertical list of blog posts. No heavy cards, no borders between rows.
- **Typography:**
  - **Title:** `text-foreground`, `font-medium`, `text-lg`.
  - **Tags:** Small pill-shaped tags next to or under the title, `bg-white/5` with `text-muted-foreground`, `text-xs`.
  - **Date:** Fixed to the right side of the row, `text-muted-foreground`, `text-sm`, `font-mono` (e.g. `Apr 29, 2026`).
- **Interaction:** 
  - On hover, the row background shifts slightly (`hover:bg-white/[0.02]`).
  - Cursor changes to pointer.
  - The title color slightly intensifies.

### 2. Blog Post View (`BlogPost.tsx`)
A distraction-free reading experience that replaces the main content area when a post is selected.
- **Header:**
  - "← Back to writing" link at the top left (`text-muted-foreground hover:text-foreground`).
  - **Title:** `text-2xl`, `font-semibold`, `text-foreground`, `mb-2`.
  - **Date/Tags:** `text-sm`, `text-muted-foreground`, `mb-8`.
- **Body Content:**
  - Font size: `text-base` or `text-[15px]` with a line-height of `1.7` (`leading-relaxed`).
  - Color: `text-muted-foreground` for paragraphs, `text-foreground` for strong/emphasis.
  - Paragraph margins: `mb-6`.
  - Code Blocks: Dark theme syntax highlighting (e.g., matching the portfolio's dark tones), with a subtle border (`border border-white/10`) and rounded corners (`rounded-md`).
  - Blockquotes: Left border (`border-l-2 border-white/20`), italicized text, `pl-4`.

## Responsive Adjustments
- On mobile, the date in the Blog Index moves under the title to prevent horizontal overflow.
- Code blocks must scroll horizontally on small screens (`overflow-x-auto`).
