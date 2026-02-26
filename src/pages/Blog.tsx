import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '@/lib/data';

export default function Blog() {
  return (
    <div>
      <div className="section-rule">journal</div>
      <p className="text-sm text-text-muted mb-6">
        <span className="text-terminal-dim-green">$</span> journalctl -u blog
        --no-pager
      </p>

      <div className="space-y-0">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            className="group block py-2.5 px-3 -mx-3 hover:bg-white/[0.02] transition-colors text-sm font-mono border-b border-border-subtle"
          >
            {/* Desktop: single line */}
            <div className="hidden sm:flex items-baseline gap-0">
              <span className="text-text-muted w-28 shrink-0">{post.date}</span>
              <span className="text-terminal-dim-green w-12 shrink-0">INFO</span>
              <span className="text-text-primary group-hover:text-terminal-green transition-colors truncate">
                {post.title}
              </span>
              <span className="text-terminal-cyan ml-2 shrink-0">
                [{post.tags.join(',')}]
              </span>
              <span className="text-text-muted ml-auto pl-3 shrink-0">
                {post.readTime}
              </span>
            </div>
            {/* Mobile: two lines */}
            <div className="sm:hidden">
              <div className="flex items-baseline gap-2">
                <span className="text-text-muted text-xs">{post.date}</span>
                <span className="text-terminal-dim-green text-xs">INFO</span>
              </div>
              <div className="text-text-primary group-hover:text-terminal-green transition-colors mt-0.5">
                {post.title}
              </div>
              <div className="text-xs text-text-muted mt-0.5">
                [{post.tags.join(',')}] · {post.readTime}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-4 text-xs text-text-muted">
        -- Journal entries: {BLOG_POSTS.length} --
      </div>
    </div>
  );
}
