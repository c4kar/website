export interface BlogPostMetadata {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readTime: string;
}

export interface BlogPost extends BlogPostMetadata {
  id: string;
  slug: string;
  content: React.ComponentType;
}

// Import all MDX files from the blog directory
const mdxModules = import.meta.glob<{ default: React.ComponentType; frontmatter: BlogPostMetadata }>('/src/content/blog/*.mdx', {
  eager: true,
});

/**
 * Load all blog posts from MDX files
 * Extracts frontmatter from MDX exports and generates slug from filename
 */
export function loadBlogPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in mdxModules) {
    // Extract filename without extension to use as slug
    const filename = path.split('/').pop()?.replace('.mdx', '') || '';
    const slug = filename;

    const module = mdxModules[path];
    
    // Get the MDX component
    const MdxComponent = module.default;
    
    // Get frontmatter from MDX module export
    const frontmatter = module.frontmatter;

    // Validate frontmatter
    if (!frontmatter || !frontmatter.title || !frontmatter.date || !frontmatter.excerpt) {
      console.warn(`Invalid or missing frontmatter in ${filename}.mdx`);
      continue;
    }

    posts.push({
      id: slug,
      slug,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags || [],
      excerpt: frontmatter.excerpt,
      readTime: frontmatter.readTime || '5 min read',
      content: MdxComponent,
    });
  }

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = loadBlogPosts();
  return posts.find((post) => post.slug === slug);
}
