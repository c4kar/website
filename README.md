# 💻 Portfolio Website

A modern, developer-friendly portfolio website built with **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features an interactive MDX-powered blog system and project showcase with a clean terminal aesthetic.

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [MDX Content Guide](#-mdx-content-guide)
- [Available Scripts](#-available-scripts)
- [Architecture Overview](#-architecture-overview)
- [GitHub Pages Deployment](#-github-pages-deployment)
- [Troubleshooting](#-troubleshooting)
- [Easter Eggs](#-easter-eggs)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **⚡ Lightning-Fast Dev Experience** – Vite provides instant HMR (Hot Module Replacement)
- **📝 MDX-Powered Blog** – Write blog posts in markdown with embedded React components
- **🎨 Beautiful UI** – Tailwind CSS with terminal-inspired aesthetic
- **🔍 TypeScript Support** – Full type safety across the codebase
- **📦 Static Site Generation** – Perfect for GitHub Pages and other static hosts
- **🚀 Production Ready** – Optimized builds with code splitting
- **🎯 Project Showcase** – Dedicated section for displaying your projects
- **🔗 React Router** – Client-side routing for smooth navigation
- **🌙 Modern Tooling** – Built with the latest frontend best practices

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Vite** | ^5.4.0 | Build tool & dev server |
| **React** | 19.2.4 | UI framework |
| **TypeScript** | 5.6 | Type-safe JavaScript |
| **React Router DOM** | 7.13.1 | Client-side routing |
| **Tailwind CSS** | 3.4.19 | Utility-first CSS framework |
| **PostCSS** | Latest | CSS processing |
| **Remark** | Latest | Markdown parser with plugins |
| **Rehype** | Latest | HTML processor for MDX |
| **Playwright** | Latest | E2E testing (dev dependency) |
| **Node.js** | ~18+ | Runtime environment |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** version 18 or higher
  - Check your version: `node --version`
  - Download from [nodejs.org](https://nodejs.org/) if needed
- **npm** (comes with Node.js)
  - Check your version: `npm --version`
- **Git** (for cloning the repository)
  - Check your version: `git --version`

---

## 🚀 Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/portfoiloWebsite.git
cd portfoiloWebsite
```

Replace `yourusername` with your actual GitHub username.

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`. The installation creates a `node_modules` folder and locks dependency versions in `package-lock.json`.

### Step 3: Start the Development Server

```bash
npm run dev
```

The dev server will start on `http://localhost:5173` (or the next available port). Your browser will auto-refresh whenever you make changes to the code.

### Step 4: Start Building!

Open the code in your editor and explore the `/src` directory:

```bash
code .  # if using VS Code
```

You're now ready to customize your portfolio!

---

## 📁 Project Structure

```
portfoiloWebsite/
├── src/
│   ├── App.tsx                 # Root React component
│   ├── main.tsx                # Application entry point
│   ├── components/             # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   ├── pages/                  # Page-level components
│   │   ├── Home.tsx
│   │   ├── Blog.tsx
│   │   ├── Projects.tsx
│   │   └── ...
│   ├── content/                # MDX content files
│   │   ├── blog/
│   │   │   ├── example_blog.mdx
│   │   │   └── ...
│   │   └── projects/
│   │       └── ...
│   ├── lib/                    # Utility functions and helpers
│   │   ├── utils.ts
│   │   ├── types.ts
│   │   └── ...
│   ├── assets/                 # Static assets
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── styles/                 # Global styles
│   │   ├── globals.css
│   │   └── ...
│   └── index.css               # Main stylesheet (Tailwind)
├── public/                     # Static files served as-is
│   ├── favicon.ico
│   └── ...
├── dist/                       # Build output (generated)
├── vite.config.ts              # Vite configuration with MDX support
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # Base TypeScript configuration
├── tsconfig.app.json           # App-specific TypeScript settings
├── index.html                  # HTML entry point
├── package.json                # Project metadata & dependencies
├── package-lock.json           # Locked dependency versions
└── README.md                   # This file
```

### Key Directories Explained

- **`/src`** – Where all your code lives. The Vite dev server watches this directory for changes.
- **`/src/components`** – Reusable React components used across pages.
- **`/src/pages`** – Top-level page components connected to routes.
- **`/src/content`** – MDX files containing blog posts and project information.
- **`/src/lib`** – Utility functions, custom hooks, type definitions, and helpers.
- **`/public`** – Static assets that don't get processed by Vite (images, fonts, etc.).
- **`/dist`** – Generated production build output (created after running `npm run build`).

---

## 📝 MDX Content Guide

This portfolio uses **MDX** to power the blog system. MDX is a powerful format that lets you write markdown while using React components inline.

### Creating Blog Posts

Blog posts are located in `/src/content/blog/`. Each post is an `.mdx` file with YAML frontmatter.

#### Frontmatter Specification

Every blog post must begin with YAML frontmatter:

```yaml
---
title: "Your Blog Post Title"
date: "2024-03-09"
tags: ["tag1", "tag2", "tag3"]
excerpt: "A brief summary that appears in blog listings"
readTime: "5 min read"
---
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ Yes | The blog post title |
| `date` | string (YYYY-MM-DD) | ✅ Yes | Publication date in ISO format |
| `tags` | array of strings | ✅ Yes | Content categories/topics |
| `excerpt` | string | ✅ Yes | Short description for previews |
| `readTime` | string | ✅ Yes | Estimated reading time (e.g., "5 min read") |

#### Example Blog Post

Create a new file: `/src/content/blog/my-first-post.mdx`

```mdx
---
title: "Building a Modern Portfolio Website"
date: "2024-03-09"
tags: ["react", "vite", "portfolio"]
excerpt: "Learn how to build a beautiful portfolio site with React and MDX"
readTime: "8 min read"
---

# Building a Modern Portfolio Website

Welcome to your first blog post! You can use standard markdown syntax:

## Markdown Features

- **Bold text** with `**text**`
- *Italic text* with `*text*`
- [Links](https://example.com)
- `inline code`

### Code Blocks

Use syntax-highlighted code blocks:

\`\`\`typescript
interface BlogPost {
  title: string;
  date: string;
  tags: string[];
}

const post: BlogPost = {
  title: "My First Post",
  date: "2024-03-09",
  tags: ["react"]
};
\`\`\`

### Using React Components

You can embed React components directly in MDX:

\`\`\`jsx
export function Greeting() {
  return <p>Hello from a React component!</p>;
}

<Greeting />
\`\`\`

---

**Published:** March 9, 2024 | **Read Time:** 8 min read
```

#### Step-by-Step: Adding a New Blog Post

1. **Create a new `.mdx` file** in `/src/content/blog/`
   ```bash
   touch src/content/blog/my-blog-title.mdx
   ```

2. **Add frontmatter** at the top of the file (copy the template above)

3. **Write your content** in markdown format

4. **Save the file** – your dev server will auto-refresh and the post appears on your blog!

5. **Build and deploy** – run `npm run build` when ready

#### Organizing Content

Keep your blog posts organized by:
- **Naming:** Use kebab-case filenames (`my-blog-post.mdx`)
- **Tagging:** Add relevant tags in frontmatter
- **Dating:** Always include a proper date

Example structure:
```
/src/content/blog/
├── 2024-01-getting-started.mdx
├── 2024-02-react-tips.mdx
├── 2024-03-vite-optimization.mdx
└── example_blog.mdx
```

#### MDX Features

MDX supports:
- ✅ **All markdown syntax** – headers, lists, links, code blocks, tables, etc.
- ✅ **React components** – import and use components within posts
- ✅ **JSX expressions** – embed JavaScript directly in markdown
- ✅ **Syntax highlighting** – automatic for code blocks
- ✅ **Custom styling** – Tailwind classes via MDX components

---

## 📋 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (hot reload) |
| `npm run build` | TypeScript type-check + Vite build for production |
| `npm run preview` | Preview production build locally |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint` | Lint code (if linter configured) |
| `npm run test` | Run tests (if test suite configured) |

### Running Scripts

```bash
# Start development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type-check without building
npm run type-check
```

### What Each Script Does

**`npm run dev`**
- Starts Vite's development server
- Enables hot module replacement (HMR) – see changes instantly
- Watch mode for all files
- Default URL: `http://localhost:5173`

**`npm run build`**
- Runs TypeScript type checking
- Optimizes and bundles code for production
- Creates minified output in `/dist` folder
- Ready for deployment to GitHub Pages or other hosts

**`npm run preview`**
- Serves the production build locally
- Useful for testing before deployment
- Check the built site before pushing live

---

## 🏗 Architecture Overview

### Component Structure

```
App.tsx (Root)
├── Header/Navigation
├── Router
│   ├── Home Page
│   ├── Blog Page
│   │   └── Individual Blog Post (from MDX)
│   ├── Projects Page
│   └── Other Pages
└── Footer
```

### Data Flow

1. **Static MDX Files** → Processed by Remark/Rehype plugins
2. **Markdown + React** → Converted to JSX
3. **React Components** → Rendered to HTML
4. **Vite Build** → Optimized and bundled
5. **Static Output** → Deployed to GitHub Pages

### MDX Processing Pipeline

```
.mdx file
    ↓
YAML frontmatter extracted
    ↓
Markdown parsed by Remark
    ↓
Rehype transforms HTML
    ↓
JSX ready for React
    ↓
Component rendered
```

### Routing

The site uses React Router for client-side navigation:

```typescript
// Example route structure
const routes = [
  { path: "/", element: <Home /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug", element: <BlogPost /> },
  { path: "/projects", element: <Projects /> },
];
```

### Build Process

```
Source Code (TypeScript + React + CSS)
    ↓
Vite Dev Server (on `npm run dev`)
    ↓ (or) ↓
Vite Build (on `npm run build`)
    ↓
Optimized Bundle
    ↓
/dist folder (ready to deploy)
```

---

## 🚀 GitHub Pages Deployment

### Prerequisites

- Repository pushed to GitHub
- GitHub Pages enabled in repository settings

### Deployment Steps

#### Option 1: Automatic Deployment (Recommended)

**Using GitHub Actions:**

The workflow file is already configured at `.github/workflows/deploy.yml`. Simply:

1. **Push to main branch** to trigger automatic deployment:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

2. **GitHub Actions** automatically:
   - Checks out your code
   - Sets up Node.js 20
   - Installs dependencies
   - Runs the build
   - Uploads artifacts
   - Deploys to GitHub Pages

3. **Monitor deployment** in the Actions tab of your GitHub repository

#### Option 2: Manual Deployment

1. **Build the project locally:**

```bash
npm run build
```

2. **Deploy the `/dist` folder** to GitHub Pages using your preferred method (git subtree, gh-pages branch, etc.)

3. **Configure GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Set source to "Deploy from a branch"
   - Select the branch containing your built files

#### Setting Base URL (if using subdirectory)

This project is configured to deploy to `username.github.io/website/`. The base URL is already set in `vite.config.ts`:

```typescript
export default {
  base: '/website/',
  // ... rest of config
}
```

If you need to change this to a different subdirectory, update the `base` property accordingly.

#### Verify Deployment

After deployment, your site will be live at:
- `https://yourusername.github.io/website/` (with current configuration)

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Port Already in Use

**Problem:** `Port 5173 is already in use`

**Solution:** Either stop the other process or let Vite use the next available port:

```bash
# Vite automatically uses 5174, 5175, etc. if needed
npm run dev
```

Or manually specify a different port:

```bash
npm run dev -- --port 3000
```

#### Build Fails with TypeScript Errors

**Problem:** `npm run build` fails with type errors

**Solution:** Fix TypeScript errors shown in the output:

```bash
# See errors in detail
npm run type-check

# Fix errors in your code, then try building again
npm run build
```

#### Hot Module Replacement (HMR) Not Working

**Problem:** Changes to files don't auto-reload in browser

**Solution:** 
- Ensure dev server is running: `npm run dev`
- Check your firewall settings
- Try hard-refreshing the browser (Ctrl+Shift+R or Cmd+Shift+R)

#### MDX Content Not Appearing

**Problem:** Blog posts in `/src/content/blog/` don't show up

**Solution:**
- Verify file extension is `.mdx`
- Check frontmatter syntax (must be valid YAML)
- Restart dev server: Stop with Ctrl+C, then `npm run dev`
- Check browser console for errors (F12)

#### Tailwind Styles Not Applying

**Problem:** Tailwind CSS classes aren't working

**Solution:**
- Ensure `tailwind.config.js` includes your template paths:
  ```js
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ]
  ```
- Restart dev server if you edited the config
- Check that CSS is imported in `src/index.css`

#### Build Output Size Too Large

**Problem:** `npm run build` creates large files in `/dist`

**Solution:**
- Run: `npm run build` and check the terminal output
- Look for unused dependencies in `package.json`
- Consider code splitting and lazy loading routes
- Use Vite's rollup config for optimization

#### Node Version Incompatibility

**Problem:** "Node version not supported" error

**Solution:**
- Check Node version: `node --version`
- Upgrade Node to 18+ (recommended 20+)
  ```bash
  # Using NVM (Node Version Manager)
  nvm install 20
  nvm use 20
  ```
- Reinstall dependencies: `rm -rf node_modules && npm install`

#### Can't Connect to Dev Server

**Problem:** `http://localhost:5173` shows connection error

**Solution:**
- Ensure dev server is running: `npm run dev`
- Try a different port: `npm run dev -- --port 3000`
- Check firewall/antivirus settings
- Restart your development machine

---

## 🎯 Easter Eggs

This portfolio contains hidden features and surprises. Explore the codebase and interact with the site to discover them! 

Some hints:
- 🔍 Check the browser console for messages
- ⌨️ Keyboard shortcuts might do interesting things
- 🎨 Look for hover effects on certain elements
- 🌙 Toggle themes or modes for surprises

Have fun uncovering the hidden features! 🎉

---

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. **Fork the repository** on GitHub
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit:
   ```bash
   git commit -m "Add: description of changes"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** describing your changes

### Guidelines

- Follow existing code style and patterns
- Write TypeScript with proper types
- Test changes in dev mode before submitting
- Update documentation if adding features
- Keep commits clean and descriptive

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file for details.

---

## 📞 Support

- **Questions?** Open an issue on GitHub
- **Found a bug?** Report it with reproduction steps
- **Have ideas?** Start a discussion

---

## 🎉 Happy Coding!

Your portfolio website is ready to go. Customize it, add your projects, share your thoughts, and let your work speak for itself!

```
╔════════════════════════════════════════╗
║   Made with ❤️  using Vite + React    ║
║   Ready to deploy to GitHub Pages     ║
║   Now go build something awesome!     ║
╚════════════════════════════════════════╝
```
