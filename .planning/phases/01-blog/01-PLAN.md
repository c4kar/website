---
wave: 1
depends_on: []
files_modified:
  - "package.json"
  - "src/App.tsx"
  - "scripts/generate-blog-index.js"
  - "src/components/BlogView.tsx"
  - "src/components/BlogPost.tsx"
  - "src/lib/blog.ts"
autonomous: true
---

# Phase 1 Plan: Minimalist Blog System

## 1. Install Markdown Dependencies
<read_first>
- `package.json`
</read_first>
<action>
Install the necessary packages for rendering markdown in React.
Run: `npm install react-markdown remark-gfm rehype-highlight front-matter highlight.js`
Run: `npm install -D @types/highlight.js`
</action>
<acceptance_criteria>
- `package.json` contains `react-markdown`, `remark-gfm`, `rehype-highlight`, `front-matter`, and `highlight.js` in `dependencies`.
</acceptance_criteria>

## 2. Setup Blog Content Directory & Build Script
<read_first>
- `package.json`
</read_first>
<action>
Create a directory `src/content/blog/` for markdown files.
Create a sample post `src/content/blog/hello-world.md` with frontmatter:
```markdown
---
title: "Agents failed to dethrone Google Search"
date: "2026-04-29"
tags: ["NEW", "AI", "Search"]
---
Early in the AI supercycle there was a lot of speculation...
```

Create `scripts/generate-blog-index.js`. This Node script reads all `.md` files in `src/content/blog/`, parses the frontmatter using `front-matter` (or a simple regex if preferred, but use the installed `front-matter` or build a robust regex), extracts `title`, `date`, `tags`, and `slug` (the filename without `.md`), and writes an array of these objects to `src/content/blog/index.json`. Sort the array by date descending.

Update `package.json` to run this script before `dev` and `build`:
Modify scripts:
`"predev": "node scripts/generate-blog-index.js",`
`"prebuild": "node scripts/generate-blog-index.js",`
</action>
<acceptance_criteria>
- `scripts/generate-blog-index.js` exists.
- `package.json` contains `"predev": "node scripts/generate-blog-index.js"`.
- Running `node scripts/generate-blog-index.js` creates a valid `src/content/blog/index.json` file.
</acceptance_criteria>

## 3. Create Blog Data Library
<read_first>
- `src/content/blog/index.json` (assume it exists)
</read_first>
<action>
Create `src/lib/blog.ts`.
Export a type `BlogPostMeta` with `slug`, `title`, `date`, `tags`.
Export a function `getBlogPosts(): BlogPostMeta[]` that imports `../content/blog/index.json` and returns it.
</action>
<acceptance_criteria>
- `src/lib/blog.ts` exports `getBlogPosts`.
</acceptance_criteria>

## 4. Implement Blog Index and Post Views
<read_first>
- `.planning/phases/01-blog/01-UI-SPEC.md`
- `src/components/AboutView.tsx` (for styling consistency)
</read_first>
<action>
Create `src/components/BlogView.tsx`.
This component should maintain state to track if a user is viewing the index or a specific post (`selectedSlug` state).

If `selectedSlug` is null, render the Blog Index:
- Call `getBlogPosts()`.
- Map over the posts and render them as rows (flex container, title left, date right).
- Apply styling from `01-UI-SPEC.md`: `hover:bg-white/[0.02] cursor-pointer`.
- On click, set `selectedSlug` to the post's slug.

If `selectedSlug` is not null, render the `<BlogPost slug={selectedSlug} onBack={() => setSelectedSlug(null)} />` component.

Create `src/components/BlogPost.tsx`:
- Accepts `slug` and `onBack` props.
- Uses `useEffect` to fetch the markdown content: `fetch('/src/content/blog/' + slug + '.md')` (In Vite, you can import files dynamically or fetch them if they are in `public`. Since we placed them in `src/content/blog/`, we can use Vite's `import.meta.glob` or just fetch if we move the raw files or parse them differently. The easiest Vite way is:
  ```typescript
  const modules = import.meta.glob('../content/blog/*.md', { as: 'raw' });
  const mdContent = await modules['../content/blog/' + slug + '.md']();
  ```
- Extract the frontmatter from `mdContent` to get the clean markdown body.
- Render the body using `<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{body}</ReactMarkdown>`.
- Render the "← Back" button.
- Ensure styling matches `01-UI-SPEC.md` (prose-like readable text).
</action>
<acceptance_criteria>
- `src/components/BlogView.tsx` is created.
- `src/components/BlogPost.tsx` is created.
- Vite glob import is used to dynamically load the markdown files as raw strings.
</acceptance_criteria>

## 5. Integrate Blog into App.tsx
<read_first>
- `src/App.tsx`
- `src/components/BlogView.tsx`
</read_first>
<action>
Edit `src/App.tsx`.
Import `BlogView`.
Add `{ id: 'blog', label: 'Writing' }` (or 'Blog') to the `TABS` array, placing it next to `Projects`.
In the `Tabs` render function, add `{activeTab === 'blog' && <BlogView />}`.
</action>
<acceptance_criteria>
- `src/App.tsx` contains `import { BlogView }`.
- `TABS` array in `App.tsx` contains the blog tab.
- App renders the BlogView when the tab is active.
</acceptance_criteria>

## Verification
- Run `npm run predev` successfully.
- Ensure `src/content/blog/index.json` is generated.
- Ensure `npm run dev` starts without errors.
- Ensure the "Writing" tab is visible and clicking it shows the "hello-world" blog post.
- Ensure clicking the blog post opens the reading view.
