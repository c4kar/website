export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  year: string;
  status: 'active' | 'idle' | 'archived';
}

export interface Skill {
  name: string;
  category: 'language' | 'tool' | 'framework';
}

export const SITE_CONFIG = {
  name: 'Yusuf Çakar',
  title: 'Software Engineer',
  bio: 'Focused on developing optimized systems for real-world needs. Always exploring, always growing.',
  github: 'https://github.com/c4kar',
  linkedin: 'https://linkedin.com/in/c4kar',
  location: 'Türkiye',
  skills: [
    { name: 'TypeScript', category: 'language' },
    { name: 'Python', category: 'language' },
    { name: 'Rust', category: 'language' },
    { name: 'Go', category: 'language' },
    { name: 'Dart', category: 'language' },
    { name: 'Flutter', category: 'framework' },
    { name: 'n8n', category: 'tool' },
    { name: 'Linux (arch btw)', category: 'tool' },
    { name: 'Git', category: 'tool' },
    { name: 'Docker', category: 'tool' },
  ] satisfies Skill[],
  experience: [
    {
      role: 'Mobile & Frontend Developer Intern',
      company: 'aivisiontech',
      period: '2025 – 2026',
      description: 'Developed a mobile thermal camera app around an SDK in Kotlin and Flutter, built RAG-based AI search platforms, and researched thermal camera applications in real-world scenarios.',
    },
    {
      role: 'Freelancer — 3D Designer & Developer',
      company: 'Fiverr & Bionluk',
      period: '2020 – 2023',
      description: 'Specialized in 3D modeling, animations, and game development. Contributed to game jams, simulator design, and NFT asset creation.',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: '010',
    title: 'KufiReader',
    description: 'Dual-directional geometric OCR and synthesis engine for Square Kufic calligraphy and monumental epigraphy.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Computer Vision', 'TDD'],
    github: 'https://github.com/c4kar/KufiReader',
    year: '2026',
    status: 'active',
  },
  {
    id: '011',
    title: 'SahiBul',
    description: 'Fast, stealth marketplace scraper and AI agent skill with headless sessions, in-memory DOM parsing, and market valuation.',
    tech: ['Python', 'Playwright', 'Scrapling', 'SQLite', 'AI Agents'],
    github: 'https://github.com/c4kar/sahibinden-skill',
    year: '2026',
    status: 'active',
  },
  {
    id: '012',
    title: 'KTÜN Ecosystem',
    description: 'Unified campus automation platform integrating a Rust Telegram bot, Typst 0.15 academic PDF synthesis engine, and vector search.',
    tech: ['Rust', 'Python', 'Typst', 'Qdrant', 'Docker Compose'],
    year: '2026',
    status: 'active',
  },
  {
    id: '013',
    title: 'ktunOto',
    description: 'Desktop automation tool with AES encryption that automates university dining hall reservation and payment workflows.',
    tech: ['Python', 'Selenium', 'AES Encryption', 'Automation'],
    github: 'https://github.com/c4kar/ktunOto',
    year: '2026',
    status: 'active',
  },
  {
    id: '007',
    title: 'YourQuran',
    description: 'An interactive web application to customize, preview, and generate print-ready, high-quality Qur\'an PDF digital editions.',
    tech: ['Next.js', 'React', 'Zustand', 'Node.js', 'Puppeteer', 'PostgreSQL'],
    github: 'https://github.com/c4kar/yourquran',
    year: '2026',
    status: 'active',
  },
  {
    id: '008',
    title: 'KaynakRapor',
    description: 'A fast and lightweight news aggregation and summarization service that parses RSS feeds and generates automated AI summaries.',
    tech: ['Go', 'PostgreSQL', 'RSS', 'LLM API'],
    github: 'https://github.com/c4kar/kaynakRapor',
    year: '2026',
    status: 'active',
  },
  {
    id: '009',
    title: 'JURI Proje',
    description: 'A high-performance, multi-language static portfolio website designed for an Istanbul-based interior architecture studio using a design-token CSS structure.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Design Tokens'],
    github: 'https://github.com/c4kar/juriProjeWeb',
    year: '2026',
    status: 'active',
  },
  {
    id: '001',
    title: 'KTÜN Educational Material Network',
    description: 'Digital garden for university course notes with search and graph visualization.',
    tech: ['TypeScript', 'Quartz', 'React'],
    github: 'https://github.com/c4kar/ktunot',
    live: 'https://ktunot.net.tr',
    year: '2025',
    status: 'active',
  },
  {
    id: '002',
    title: 'KTÜN Student Bot',
    description: 'Campus assistant Telegram bot providing class schedules, announcements, cafeteria menus, and exam tracking.',
    tech: ['Rust', 'Teloxide', 'Telegram API'],
    github: 'https://github.com/c4kar/ktunBot',
    year: '2026',
    status: 'active',
  },
  {
    id: '003',
    title: 'KTÜN Course Archive',
    description: 'AI-powered quality control system for university course materials.',
    tech: ['Python', 'LangGraph', 'Qdrant', 'Docker'],
    github: 'https://github.com/c4kar/ktunDepo',
    year: '2025',
    status: 'active',
  },
  {
    id: '004',
    title: 'Kukufi',
    description: 'CLI tool that converts Arabic text to Kufi art style ASCII graphics.',
    tech: ['Rust', 'Crossterm', 'Clap'],
    github: 'https://github.com/c4kar/Kukufi',
    year: '2026',
    status: 'idle',
  },
  {
    id: '005',
    title: 'Jurnal (archived)',
    description: 'CLI journaling tool with AI-powered insights using different personas.',
    tech: ['Python', 'AI Agents', 'LangChain'],
    year: '2026',
    status: 'idle',
  },
  {
    id: '006',
    title: 'Violingo (INCOMING)',
    description: 'Interactive Flutter app for learning violin with unique way of teaching.',
    tech: ['Flutter', 'Dart', 'Flame'],
    year: '2025',
    status: 'idle',
  },
];
