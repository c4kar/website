import { useState, useEffect } from 'react';
import { getBlogPosts } from '@/lib/blog';
import { BlogPost } from './BlogPost';

export function BlogView() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const posts = getBlogPosts();

  if (selectedSlug) {
    return <BlogPost slug={selectedSlug} onBack={() => setSelectedSlug(null)} />;
  }

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <button
          key={post.slug}
          onClick={() => setSelectedSlug(post.slug)}
          className="group flex flex-col sm:flex-row sm:items-baseline justify-between text-left p-3 -mx-3 rounded-lg hover:bg-white/[0.02] cursor-pointer transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="text-lg font-medium text-foreground group-hover:text-white transition-colors">
              {post.title}
            </span>
            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 mt-1 sm:mt-0">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-white/5 text-muted-foreground text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <span className="text-sm font-mono text-muted-foreground mt-2 sm:mt-0 whitespace-nowrap">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
        </button>
      ))}
    </div>
  );
}
