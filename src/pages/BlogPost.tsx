import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '@/lib/data';

function renderContent(content: string) {
  const paragraphs = content.split('\n\n');
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let elementKey = 0;

  paragraphs.forEach((paragraph) => {
    const lines = paragraph.split('\n');

    lines.forEach((line) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={`code-${elementKey++}`}
              className="bg-neutral-bg2 border border-border p-4 mb-4 overflow-x-auto font-mono text-sm text-terminal-bright-green"
            >
              {codeContent.join('\n')}
            </pre>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={`h3-${elementKey++}`}
            className="text-lg font-bold text-terminal-dim-green font-mono mt-6 mb-2"
          >
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={`h2-${elementKey++}`}
            className="text-xl font-bold text-terminal-amber font-mono mt-8 mb-3"
          >
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <div
            key={`li-${elementKey++}`}
            className="text-text-secondary pl-5 relative mb-1 text-sm"
          >
            <span className="absolute left-0 text-text-muted text-xs">├─</span>
            {line.replace('- ', '')}
          </div>
        );
      } else if (line.trim()) {
        const parts = line.split(/(`[^`]+`)/g);
        const rendered = parts.map((part, i) => {
          if (part.startsWith('`') && part.endsWith('`')) {
            return (
              <code
                key={i}
                className="font-mono text-terminal-green bg-neutral-bg3 px-1.5 py-0.5 text-sm border border-border-subtle"
              >
                {part.slice(1, -1)}
              </code>
            );
          }
          return part;
        });
        elements.push(
          <p
            key={`p-${elementKey++}`}
            className="text-text-secondary leading-relaxed mb-4 text-sm"
          >
            {rendered}
          </p>
        );
      }
    });
  });

  return elements;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

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

        <div className="prose-terminal">{renderContent(post.content)}</div>
      </article>
    </div>
  );
}
