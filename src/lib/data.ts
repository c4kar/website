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
    { name: 'TypeScript', category: 'language' },
    { name: 'Python', category: 'language' },
    { name: 'Rust', category: 'language' },
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
    description: 'Telegram bot providing class schedules, announcements, and cafeteria menus.',
    tech: ['Python', 'Flask', 'Telegram API'],
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
