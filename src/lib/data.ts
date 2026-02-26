// ─── Portfolio Data ───
// Replace placeholder content with your own

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
  content: string;
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

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', path: '/', index: 0 },
  { label: 'PROJECTS', path: '/projects', index: 1 },
  { label: 'BLOG', path: '/blog', index: 2 },
  { label: 'ABOUT', path: '/about', index: 3 },
  { label: 'CONTACT', path: '/contact', index: 4 },
];

export const STATS = {
  uptime: '3+ yrs',
  projects: '7',
  commits: '2.4k+',
  status: 'AVAILABLE',
  os: 'Linux',
  editor: 'Neovim',
  shell: 'bash',
  lang: 'prompt ¯\\_(ツ)_/¯',
} as const;

export const SITE_CONFIG = {
  name: 'Yusuf Çakar',
  title: 'Software Engineer',
  tagline: 'Building systems that work.',
  email: 'yc4kar@gmail.com',
  github: 'https://github.com/c4kar',
  linkedin: 'https://linkedin.com/in/c4kar',
  //twitter: 'https://twitter.com/vakarbarbar',
  location: 'Earth',
  bio: `"Engineer hoping to contribute to a better world | Professional bug creator & solver 🐞🐛🦋`,
  skills: [
    {
      name: 'TypeScript',
      tag: 'DAILY DRIVER',
      years: 3,
      projects: [
        { title: 'Dashboard', url: 'https://github.com/yourusername/dashboard' },
        { title: 'Portfolio', url: 'https://github.com/yourusername/portfolio' },
        { title: 'Static Site Generator', url: 'https://github.com/yourusername/ssg' },
      ],
    },
    {
      name: 'React',
      tag: 'DAILY DRIVER',
      years: 3,
      projects: [
        { title: 'Dashboard', url: 'https://github.com/yourusername/dashboard' },
        { title: 'Portfolio', url: 'https://github.com/yourusername/portfolio' },
      ],
    },
    {
      name: 'Node.js',
      tag: 'PRODUCTION',
      years: 3,
      projects: [
        { title: 'API Gateway', url: 'https://github.com/yourusername/api-gateway' },
        { title: 'Task Queue', url: 'https://github.com/yourusername/task-queue' },
      ],
    },
    {
      name: 'Python',
      tag: 'PRODUCTION',
      years: 3,
      projects: [
        { title: 'Task Queue', url: 'https://github.com/yourusername/task-queue' },
      ],
    },
    {
      name: 'Go',
      tag: 'PRODUCTION',
      years: 2,
      projects: [
        { title: 'API Gateway', url: 'https://github.com/yourusername/api-gateway' },
      ],
    },
    {
      name: 'PostgreSQL',
      tag: 'PRODUCTION',
      years: 3,
      projects: [
        { title: 'Dashboard', url: 'https://github.com/yourusername/dashboard' },
      ],
    },
    {
      name: 'Docker',
      tag: 'PRODUCTION',
      years: 3,
      projects: [
        { title: 'API Gateway', url: 'https://github.com/yourusername/api-gateway' },
        { title: 'Task Queue', url: 'https://github.com/yourusername/task-queue' },
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
      name: 'Rust',
      tag: 'LEARNING',
      years: 1,
      projects: [
        { title: 'Cloud CLI', url: 'https://github.com/yourusername/cloud-cli' },
      ],
    },
    {
      name: 'Next.js',
      tag: 'PRODUCTION',
      years: 2,
      projects: [
        { title: 'Portfolio', url: 'https://github.com/yourusername/portfolio' },
      ],
    },
    {
      name: 'Redis',
      tag: 'PRODUCTION',
      years: 2,
      projects: [
        { title: 'API Gateway', url: 'https://github.com/yourusername/api-gateway' },
        { title: 'Task Queue', url: 'https://github.com/yourusername/task-queue' },
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
      name: 'Tailwind',
      tag: 'DAILY DRIVER',
      years: 2,
      projects: [
        { title: 'Portfolio', url: 'https://github.com/yourusername/portfolio' },
        { title: 'Dashboard', url: 'https://github.com/yourusername/dashboard' },
      ],
    },
    {
      name: 'Figma',
      tag: 'HOBBYIST',
      years: 2,
      projects: [
        { title: 'UI prototypes' },
      ],
    },
  ] as Skill[],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Company Name',
      period: '2023 – Present',
      description: 'Building scalable distributed systems and developer tools.',
    },
    {
      role: 'Software Engineer',
      company: 'Previous Co',
      period: '2021 – 2023',
      description: 'Full-stack web development with React and Node.js.',
    },
    {
      role: 'Junior Developer',
      company: 'Startup Inc',
      period: '2019 – 2021',
      description: 'Built MVPs and shipped features across the stack.',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'PID-001',
    title: 'Cloud Infrastructure CLI',
    description: 'Developer-friendly CLI for managing cloud infra with declarative configs.',
    longDescription: `Built a CLI tool that simplifies cloud infrastructure management.
Uses declarative YAML configurations, supports multiple cloud providers,
and includes a dry-run mode for safe deployments.`,
    tech: ['Rust', 'AWS SDK', 'YAML', 'CI/CD'],
    github: 'https://github.com/yourusername/cloud-cli',
    live: 'https://docs.cloud-cli.dev',
    featured: true,
    year: '2024',
    status: 'RUNNING',
  },
  {
    id: 'PID-002',
    title: 'Real-time Dashboard',
    description: 'WebSocket-powered monitoring dashboard with live metrics and alerting.',
    longDescription: `A real-time monitoring dashboard built with React and WebSockets.
Features live metric streaming, customizable alert thresholds,
and historical data visualization with D3.js.`,
    tech: ['React', 'TypeScript', 'WebSocket', 'D3.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/dashboard',
    live: 'https://dashboard-demo.vercel.app',
    featured: true,
    year: '2024',
    status: 'RUNNING',
  },
  {
    id: 'PID-003',
    title: 'API Gateway',
    description: 'High-performance API gateway with rate limiting, auth, and transforms.',
    longDescription: `An API gateway that handles authentication, rate limiting,
and request/response transformation. Built for high throughput
with connection pooling and circuit breaker patterns.`,
    tech: ['Go', 'Redis', 'Docker', 'Prometheus'],
    github: 'https://github.com/yourusername/api-gateway',
    featured: true,
    year: '2023',
    status: 'RUNNING',
  },
  {
    id: 'PID-004',
    title: 'Static Site Generator',
    description: 'Markdown-based SSG with hot reload and plugin system.',
    longDescription: `A fast static site generator that converts Markdown to HTML
with support for custom themes, plugins, and incremental builds.`,
    tech: ['TypeScript', 'Node.js', 'Markdown', 'Vite'],
    github: 'https://github.com/yourusername/ssg',
    featured: false,
    year: '2023',
    status: 'IDLE',
  },
  {
    id: 'PID-005',
    title: 'Task Queue System',
    description: 'Distributed task queue with priority scheduling and retry logic.',
    longDescription: `A distributed task queue supporting priority-based scheduling,
automatic retries with exponential backoff, and dead letter queues.`,
    tech: ['Python', 'Redis', 'RabbitMQ', 'Docker'],
    github: 'https://github.com/yourusername/task-queue',
    featured: false,
    year: '2022',
    status: 'IDLE',
  },
  {
    id: 'PID-006',
    title: 'Developer Portfolio',
    description: 'This site. Systems-dashboard inspired portfolio.',
    longDescription: `A portfolio and blog site built with React, TypeScript, and Tailwind CSS.
Features a systems-dashboard design, data-dense layouts, and markdown blog.`,
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://yourname.dev',
    featured: false,
    year: '2024',
    status: 'RUNNING',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'building-cli-tools-in-rust',
    title: 'Building CLI Tools in Rust',
    excerpt: 'Why Rust is my go-to for command-line tooling and how to structure a CLI project.',
    content: `## Why Rust for CLI tools?

Rust gives you native performance, excellent error handling with Result types, and a rich ecosystem of CLI libraries like clap and dialoguer.

### Getting started

Start with \`cargo init\` and add clap for argument parsing:

\`\`\`rust
use clap::Parser;

#[derive(Parser)]
struct Cli {
    pattern: String,
    path: std::path::PathBuf,
}
\`\`\`

### Error handling

Use \`anyhow\` for application-level errors and \`thiserror\` for library errors. This gives you clean error propagation with the \`?\` operator.

### Distribution

Cross-compile with \`cross\` and distribute via GitHub Releases. Add a Homebrew formula for macOS users and a shell script installer for Linux.

The key insight: CLI tools should be fast, predictable, and respect unix conventions. Rust makes all three natural.`,
    date: '2024-12-15',
    tags: ['Rust', 'CLI', 'DevTools'],
    readTime: '5 min',
  },
  {
    id: 'post-2',
    slug: 'designing-for-developer-experience',
    title: 'Designing for Developer Experience',
    excerpt: 'Lessons learned from building tools that developers actually want to use.',
    content: `## The DX pyramid

Good developer experience has layers:

- **It works** - Correctness first
- **It's fast** - Nobody likes waiting
- **It's intuitive** - Good defaults, clear errors
- **It's delightful** - The small touches that make you smile

### Error messages matter

The difference between a frustrating tool and a great one is often the error messages. Compare:

\`\`\`
Error: ENOENT
\`\`\`

vs.

\`\`\`
Error: Config file not found at ~/.config/tool/config.yaml
  hint: Run 'tool init' to create a default config
\`\`\`

### Convention over configuration

Sensible defaults reduce cognitive load. Let users override when they need to, but make the common case require zero config.

### Fast feedback loops

Every millisecond counts. Hot reload, incremental builds, and instant previews keep developers in flow state.`,
    date: '2024-11-28',
    tags: ['DX', 'Design', 'Eng'],
    readTime: '4 min',
  },
  {
    id: 'post-3',
    slug: 'system-design-lessons',
    title: 'System Design Lessons from Production',
    excerpt: 'Hard-won lessons from building and operating distributed systems at scale.',
    content: `## Things I learned the hard way

### 1. Start with the failure modes

Before writing any code, enumerate how your system can fail. Then design for those failures. Every distributed system will encounter:

- Network partitions
- Clock skew
- Partial failures
- Cascading failures

### 2. Observability is not optional

You can't fix what you can't see. From day one, instrument:

- Request latency (p50, p95, p99)
- Error rates by type
- Queue depths
- Resource utilization

### 3. Idempotency saves lives

Make operations idempotent wherever possible. Retries are inevitable - your system should handle them gracefully.

### 4. The database is the bottleneck

It almost always is. Connection pooling, read replicas, and caching strategies should be planned early, not bolted on.

### 5. Simple > Clever

The system that's easy to understand is the system that's easy to debug at 3am. Choose boring technology.`,
    date: '2024-10-12',
    tags: ['SysDesign', 'Distributed', 'Backend'],
    readTime: '6 min',
  },
  {
    id: 'post-4',
    slug: 'terminal-driven-development',
    title: 'Terminal-Driven Development',
    excerpt: 'How living in the terminal made me a more productive engineer.',
    content: `## The terminal is underrated

Most developers use the terminal for git commands and that's about it. But the terminal is the most powerful interface you have.

### My setup

- **Shell**: zsh + starship prompt
- **Editor**: Neovim with LSP
- **Multiplexer**: tmux with custom keybindings
- **File search**: fzf + ripgrep
- **Git**: lazygit for visual, raw git for scripting

### Why it works

The terminal is composable. Small tools that do one thing well, piped together, solve complex problems. This is the Unix philosophy, and it scales.

### Getting started

Don't try to switch everything at once. Start with one tool - maybe fzf for fuzzy finding - and build from there. Muscle memory takes time.

The goal isn't to look like a hacker. It's to reduce the friction between thinking and doing.`,
    date: '2024-09-05',
    tags: ['Terminal', 'Productivity', 'DevTools'],
    readTime: '4 min',
  },
];

