import { Link, useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '@/lib/blogLoader';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return (
      <div>
        <Link
          to="/blog"
          className="text-xs text-text-muted hover:text-terminal-dim-green mb-6 block transition-colors"
        >
          ← cd ../blog
        </Link>
        <h1 className="text-2xl font-bold text-text-primary">404: Post not found</h1>
        <p className="text-sm text-text-secondary mt-2">
          No matching log entry.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <Link
        to="/blog"
        className="text-xs text-text-muted hover:text-terminal-dim-green mb-6 block transition-colors"
      >
        ← cd ../blog
      </Link>

      <article>
        <header className="mb-8 border-b border-border-subtle pb-4">
          <div className="text-xs text-text-muted mb-2 font-mono">
            {post.date} · {post.readTime} read
          </div>
          <h1 className="text-2xl font-bold text-text-primary mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-1 text-xs font-mono text-terminal-cyan">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-terminal-cyan/8 border border-terminal-cyan/20 px-1.5 py-0.5"
              >
                [{tag}]
              </span>
            ))}
          </div>
        </header>

        <div className="prose-terminal">
          <post.content />
        </div>
      </article>
    </div>
  );
}
