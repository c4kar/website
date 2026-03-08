// ─── Portfolio Data ───
// Replace placeholder content with your own

import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  year: string;
  status: 'RUNNING' | 'IDLE' | 'ARCHIVED';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: React.ComponentType; // MDX component
  date: string;
  tags: string[];
  readTime: string;
}

export interface NavItem {
  label: string;
  path: string;
  index: number;
}

export interface Skill {
  name: string;
  tag: 'DAILY DRIVER' | 'PRODUCTION' | 'LEARNING' | 'HOBBYIST';
  years: number;
  projects: { title: string; url?: string }[];
}

export interface FavoriteTool {
  name: string;
  category: 'SYSTEM' | 'EDITOR' | 'BROWSER' | 'UTILITY' | 'TERMINAL';
  description?: string;
  url?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', path: '/', index: 0 },
  { label: 'PROJECTS', path: '/projects', index: 1 },
  { label: 'BLOG', path: '/blog', index: 2 },
  { label: 'ABOUT', path: '/about', index: 3 },
  { label: 'CONTACT', path: '/contact', index: 4 },
];

export const STATS = {
  uptime: '3+ years',
  projects: '7',
  status: 'AVAILABLE',
  os: 'linux-cachyos',
  editor: 'nvim',
  shell: 'bash',
  lang: 'just prompt nowadays ¯\\_(ツ)_/¯',
} as const;

export const SITE_CONFIG = {
  name: 'Yusuf Çakar',
  title: 'Software Engineer',
  tagline: 'Building systems that work.',
  email: 'cakarr@proton.me',
  github: 'https://github.com/c4kar',
  linkedin: 'https://linkedin.com/in/c4kar',
  //twitter: 'https://twitter.com/vakarbarbar',
  location: 'Earth, Solar System',
  bio: `"Engineer hoping to contribute to a better world | Professional bug creator & solver 🐞🐛🦋`,
  skills: [
    {
      name: 'TypeScript',
      tag: 'DAILY DRIVER',
      years: 1,
      projects: [
        { title: 'Note Web', url: 'https://github.com/c4kar/ktunot' },
        { title: 'Portfolio', url: 'https://github.com/c4kar/portfoiloWebsite' },
      ],
    },
    {
      name: 'Python',
      tag: 'PRODUCTION',
      years: 3,
      projects: [
        { title: 'Projects' },
      ],
    },
    {
      name: 'Linux',
      tag: 'DAILY DRIVER',
      years: 5,
      projects: [
        { title: 'Daily OS' },
      ],
    },
    {
      name: 'Git',
      tag: 'DAILY DRIVER',
      years: 5,
      projects: [
        { title: 'All projects' },
      ],
    },
    {
      name: 'Neovim',
      tag: 'DAILY DRIVER',
      years: 3,
      projects: [
        { title: 'Daily Editor' },
      ],
    },
    {
      name: 'Tpyst',
      tag: 'HOBBYIST',
      years: 1,
      projects: [
        { title: 'Hobby projects' },
      ],
    },
    {
      name: 'Rust',
      tag: 'LEARNING',
      years: 1,
      projects: [
        { title: 'Exploring' },
      ],
    },
    {
      name: 'Dart',
      tag: 'LEARNING',
      years: 1,
      projects: [
        { title: 'Learning' },
      ],
    },
    {
      name: 'Flutter',
      tag: 'LEARNING',
      years: 1,
      projects: [
        { title: 'Mobile learning' },
      ],
    },
  ] as Skill[],
  favoriteTools: [
    {
      name: 'Opencode',
      category: 'UTILITY',
      description: 'AI coding assistant - supercharged development workflow',
      url: 'https://opencode.ai',
    },
    {
      name: 'CachyOS',
      category: 'SYSTEM',
      description: 'Arch linux-based distro optimized for performance and gaming',
      url: 'https://cachyos.org/',
    },
    {
      name: 'DankMaterialShell',
      category: 'SYSTEM',
      description: 'Best DE i ever used',
      url: 'https://danklinux.com/',
    },
    {
      name: 'Niri WM',
      category: 'SYSTEM',
      description: 'Scrollable-tiling Wayland compositor',
      url: 'https://github.com/YaLTeR/niri',
    },
    {
      name: 'Neovim',
      category: 'EDITOR',
      description: 'Highly configurable text editor built on Vim',
      url: 'https://neovim.io',
    },
    {
      name: 'Vivaldi',
      category: 'BROWSER',
      description: 'Powerful, feature-rich browser with deep customization',
      url: 'https://vivaldi.com',
    },
    {
      name: 'Yazi',
      category: 'TERMINAL',
      description: 'Blazing fast terminal file manager written in Rust, based on async I/O',
      url: 'https://github.com/sxyazi/yazi',
    },
    {
      name: 'Ghostty',
      category: 'TERMINAL',
      description: 'Fuzzy finder for command line',
      url: 'https://github.com/junegunn/fzf',
    },
  ] as FavoriteTool[],
  experience: [
    {
      role: 'Mobile & Frontend Developer Intern',
      company: 'aivisiontech',
      period: '2025 – 2026',
      description: 'Developed Hikmicro mobile app SDK in Kotlin, built RAG-based AI search platform for scouts, and researched thermal camera applications in health and training analysis.',
    },
    {
      role: 'Delivery Assistant (Komi)',
      company: '40 İkindi Akyokuş',
      period: '2025',
      description: 'Managed food delivery services and customer hospitality operations.',
    },
    {
      role: 'Waiter',
      company: 'Kubbealtı Tiritcisi',
      period: '2024',
      description: 'Provided customer service and food service operations.',
    },
    {
      role: 'Freelancer - 3D Designer & Developer',
      company: 'Fiverr & Bionluk',
      period: '2020 – 2023',
      description: 'Specialized in 3D modeling, animations, architectural visualization, and texturing in Blender. Contributed to game development (MağaraJAM 2023 action game), aircraft simulator runway design for US-based startup, and NFT-based MMORPG asset creation.',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'PID-001',
    title: 'KTÜN Note Network',
    description: 'Digital garden for KTÜN university course notes with search and backlinks.',
    longDescription: `A static site built with Quartz that serves as a knowledge base
for university course notes. Features full-text search, graph visualization,
and automatic backlink generation for connected learning.`,
    tech: ['TypeScript', 'Node.js', 'Quartz', 'Markdown', 'React', 'Preact'],
    github: 'https://github.com/c4kar/ktunot',
    live: 'https://ktunot.net.tr',
    featured: true,
    year: '2025',
    status: 'RUNNING',
  },
  {
    id: 'PID-003',
    title: 'KTÜN Student Bot',
    description: 'Telegram bot providing class schedules, announcements, and cafeteria menus.',
    longDescription: `A Flask-based Telegram bot that serves KTÜN university students with
automated announcements, class schedules, academic calendar, and daily
cafeteria menus with PDF parsing capabilities.`,
    tech: ['Python', 'Telegram Bot API', 'Flask', 'PyMuPDF'],
    github: 'https://github.com/c4kar/ktunBot',
    featured: true,
    year: '2026',
    status: 'RUNNING',
  },
  {
    id: 'PID-004',
    title: 'KTÜN Course Repository',
    description: 'AI-powered quality control system for university course materials.',
    longDescription: `An event-driven AI agent system built with LangGraph that automatically
validates and processes uploaded course materials. Features OCR support,
quality checks, and vector search powered by Qdrant.`,
    tech: ['Python', 'LangGraph', 'LangChain', 'Qdrant', 'Docker', 'Docling'],
    github: 'https://github.com/c4kar/ktunDepo',
    featured: false,
    year: '2025',
    status: 'RUNNING',
  },
  {
    id: 'PID-002',
    title: 'Kukufi',
    description: 'CLI tool that converts Arabic text to Kufi art style ASCII graphics.',
    longDescription: `A Rust-based terminal application that renders Arabic text in traditional
Kufi calligraphy style using ASCII characters. Features customizable styling
and real-time rendering in the terminal.`,
    tech: ['Rust', 'Crossterm', 'Serde', 'Clap'],
    github: 'https://github.com/c4kar/Kukufi',
    featured: true,
    year: '2026',
    status: 'IDLE',
  },
  {
    id: 'PID-005',
    title: ' jurnal (closed source)',
    description: 'CLI journaling tool with AI-powered insights using different personas.',
    longDescription: `A Python CLI application for daily journaling with AI analysis
through multiple personas (stoic, socratic, default). Includes a memory
system with 7 categories for contextual insights.`,
    tech: ['Python', 'AI Agents', 'LangChain', 'CLI'],
    featured: false,
    year: '2026',
    status: 'IDLE',
  },
  {
    id: 'PID-006',
    title: 'Violingo (closed source)',
    description: 'Interactive Flutter app for learning violin with pitch detection.',
    longDescription: `A mobile learning application built with Flutter and Flame game engine.
Features real-time audio recording, pitch detection for practice feedback,
and interactive lessons for violin students.`,
    tech: ['Flutter', 'Dart', 'Flame', 'Flutter Sound', 'Pitch Detection'],
    featured: false,
    year: '2025',
    status: 'IDLE',
  },
];

// ─── Blog Posts ───
// Blog posts are now loaded dynamically from MDX files in /src/content/blog/
// Use loadBlogPosts() from './blogLoader' to access all blog posts
// To add a new blog post, create a new .mdx file in /src/content/blog/

